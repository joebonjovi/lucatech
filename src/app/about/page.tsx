import { CTABanner, PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { processSteps, whyChoose } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "About Luca Technologies | Local Smart Home Installer",
  description:
    "Learn about Luca Technologies — a professional local installer for residential smart home security and connected home technology in Doylestown, PA and surrounding communities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Luca Technologies"
        description="Professional smart home security and technology installation for safer, more connected homes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="A local technology installer for homeowners"
              description="Luca Technologies focuses on residential smart home security and connected home installations. We help families, new homeowners, and anyone upgrading an older home get cameras, doorbells, locks, Wi-Fi, and smart devices installed correctly."
            />
            <p className="mt-6 leading-relaxed text-muted">
              Our approach is practical and homeowner-friendly. We explain options
              clearly, recommend what fits the property and budget, install with
              clean cable management, and walk you through how to use your system.
              We are not a DIY retailer, not a handyman service, and not a large
              alarm-monitoring corporation.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Today we serve residential customers across{" "}
              {siteConfig.serviceAreaLabel}.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">What we stand for</h2>
            <ul className="mt-5 space-y-3">
              {whyChoose.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink">
                  <span className="text-brand" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading
          title="How we work with homeowners"
          description="A simple process designed to reduce confusion and deliver reliable results."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.title} className="rounded-2xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-brand">Step {step.step}</p>
              <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CTABanner />
    </>
  );
}
