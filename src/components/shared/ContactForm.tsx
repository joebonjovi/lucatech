"use client";

import { Button } from "@/components/ui/Button";
import { serviceTypeOptions } from "@/config/content";
import { siteConfig } from "@/config/site";
import { FormEvent, useState, type ReactNode } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      location: String(data.get("location") ?? ""),
      serviceType: String(data.get("serviceType") ?? ""),
      preferredContact: String(data.get("preferredContact") ?? ""),
      purchasedEquipment: data.get("purchasedEquipment") === "yes",
      description: String(data.get("description") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    setStatus("submitting");
    setMessage("");
    setFieldErrors([]);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json().catch(() => ({}))) as {
        error?: string;
        fields?: string[];
      };

      if (!res.ok) {
        setStatus("error");
        setFieldErrors(result.fields ?? []);
        setMessage(
          result.error ??
            "We could not send your message. Please try again or contact us directly.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "We could not reach the server. Please check your connection or contact us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-3xl border border-border bg-white p-6 text-center shadow-sm sm:p-8"
        role="status"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mt-4 text-xl font-bold text-ink">
          Thanks — your message is on its way
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We received your inquiry and will follow up soon. If you need us
          sooner, call {siteConfig.phone} or email {siteConfig.email}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const hasError = (field: string) => fieldErrors.includes(field);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-8"
    >
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={hasError("name")}>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass(hasError("name"))}
          />
        </Field>
        <Field
          label="Phone number"
          htmlFor="phone"
          required
          error={hasError("phone")}
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass(hasError("phone"))}
          />
        </Field>
        <Field label="Email" htmlFor="email" required error={hasError("email")}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass(hasError("email"))}
          />
        </Field>
        <Field
          label="Address or ZIP code"
          htmlFor="location"
          required
          error={hasError("location")}
        >
          <input
            id="location"
            name="location"
            required
            autoComplete="postal-code"
            className={inputClass(hasError("location"))}
          />
        </Field>
      </div>

      <Field
        label="Type of service"
        htmlFor="serviceType"
        required
        error={hasError("serviceType")}
      >
        <select
          id="serviceType"
          name="serviceType"
          required
          className={inputClass(hasError("serviceType"))}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Description of the project"
        htmlFor="description"
        required
        error={hasError("description")}
      >
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={inputClass(hasError("description"))}
          placeholder="Tell us about the areas of your home, devices you already own, and what you want to accomplish."
        />
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-ink">
          Preferred contact method
        </legend>
        <div className="flex flex-wrap gap-4">
          {["Phone", "Email", "Either"].map((method) => (
            <label
              key={method}
              className="flex min-h-10 items-center gap-2 text-sm text-ink"
            >
              <input
                type="radio"
                name="preferredContact"
                value={method}
                required
                className="accent-[var(--color-blue)]"
                defaultChecked={method === "Either"}
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink">
        <input
          type="checkbox"
          name="purchasedEquipment"
          value="yes"
          className="mt-0.5 accent-[var(--color-blue)]"
        />
        <span>
          I already purchased equipment and need professional installation.
        </span>
      </label>

      <p className="text-xs leading-relaxed text-muted">
        Have photos of doors, camera locations, or problem areas? Email them to{" "}
        <a href={siteConfig.emailHref} className="font-medium text-brand">
          {siteConfig.email}
        </a>{" "}
        after you submit.
      </p>

      {status === "error" && message ? (
        <p
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {message}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : siteConfig.cta.primary}
      </Button>
    </form>
  );
}

function inputClass(error?: boolean) {
  return [
    "w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none transition focus:ring-2 sm:text-sm",
    error
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
      : "border-border focus:border-brand focus:ring-brand/20",
  ].join(" ");
}

function Field({
  label,
  htmlFor,
  children,
  required,
  hint,
  error,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  hint?: string;
  error?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-ink"
      >
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-red-600">This field is required.</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  );
}
