import { siteConfig } from "@/config/site";
import { serviceTypeOptions } from "@/config/content";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  serviceType?: string;
  preferredContact?: string;
  purchasedEquipment?: boolean;
  description?: string;
  company?: string;
};

const MAX_LEN = 5000;

function clean(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bot honeypot
  if (clean(payload.company)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 200);
  const phone = clean(payload.phone, 60);
  const email = clean(payload.email, 200);
  const location = clean(payload.location, 200);
  const serviceType = clean(payload.serviceType, 120);
  const preferredContact = clean(payload.preferredContact, 40);
  const description = clean(payload.description, MAX_LEN);
  const purchasedEquipment = payload.purchasedEquipment === true;

  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!phone) errors.push("phone");
  if (!email || !isEmail(email)) errors.push("email");
  if (!location) errors.push("location");
  if (!serviceType || !serviceTypeOptions.includes(serviceType as never)) {
    errors.push("serviceType");
  }
  if (!description) errors.push("description");

  if (errors.length > 0) {
    return Response.json(
      { error: "Please check the highlighted fields.", fields: errors },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; cannot send contact email.");
    return Response.json(
      {
        error:
          "The contact form is not fully configured yet. Please email or call us directly.",
      },
      { status: 503 },
    );
  }

  const fields: Array<[string, string]> = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Address/ZIP", location],
    ["Service", serviceType],
    ["Preferred contact", preferredContact || "Either"],
    ["Already purchased equipment", purchasedEquipment ? "Yes" : "No"],
  ];

  const textBody = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    description,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0b192c">
      <h2 style="margin:0 0 12px">New home technology inquiry</h2>
      <table style="border-collapse:collapse">
        ${fields
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 12px 4px 0;font-weight:600">${escapeHtml(
                label,
              )}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:16px 0 4px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(description)}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} Website <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New inquiry: ${serviceType} — ${name}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      const detail = `${error.message ?? ""} ${JSON.stringify(error)}`.toLowerCase();

      if (
        detail.includes("only send testing emails") ||
        detail.includes("verify a domain") ||
        detail.includes("own email")
      ) {
        return Response.json(
          {
            error:
              "We could not deliver your message right now. Please call or email us directly.",
          },
          { status: 502 },
        );
      }

      if (
        detail.includes("domain") ||
        detail.includes("from") ||
        detail.includes("not verified")
      ) {
        return Response.json(
          {
            error:
              "We could not deliver your message right now. Please call or email us directly.",
          },
          { status: 502 },
        );
      }

      return Response.json(
        { error: "We could not send your message. Please try again or call us." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}
