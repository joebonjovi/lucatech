import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Contact | Free Consultation in Doylestown, PA | Luca Technologies",
  description:
    "Tell us about your home technology project in Doylestown, PA or a surrounding community. Request a free consultation for security cameras, doorbells, smart locks, Wi-Fi, and more.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={siteConfig.cta.contactHeading}
        description="Share a few details about your home, the service you need, and whether you already purchased equipment. We will follow up to discuss next steps."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>

          <aside className="order-2 space-y-6 lg:order-1">
            <div className="rounded-3xl border border-border bg-surface p-5 sm:p-6">
              <h2 className="text-xl font-bold text-ink">Contact details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Phone</dt>
                  <dd className="text-muted">
                    <a href={siteConfig.phoneHref} className="hover:text-brand">
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd className="text-muted">
                    <a href={siteConfig.emailHref} className="hover:text-brand">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Service area</dt>
                  <dd className="text-muted">{siteConfig.serviceAreaLabel}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Hours</dt>
                  <dd className="text-muted">
                    Weekdays: {siteConfig.hours.weekdays}
                    <br />
                    Saturday: {siteConfig.hours.saturday}
                    <br />
                    Sunday: {siteConfig.hours.sunday}
                  </dd>
                </div>
              </dl>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Photos of doors, camera locations, networking closets, or problem
              areas help us prepare. After you submit the form, you can email
              images to {siteConfig.email}.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
