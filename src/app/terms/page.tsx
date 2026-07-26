import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use | Luca Technologies",
  description: `Terms of use for the ${siteConfig.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        description="Placeholder website terms. Replace with counsel-reviewed language before public launch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            By using the {siteConfig.name} website, you agree to these terms.
            Website content is for general information about residential smart
            home security and technology installation services.
          </p>
          <h2 className="text-xl font-bold text-ink">No guarantees on third-party products</h2>
          <p>
            Product compatibility, brand ecosystems, and remote access features
            vary. We provide professional installation and guidance but do not
            guarantee that every device or brand will work together.
          </p>
          <h2 className="text-xl font-bold text-ink">Estimates and consultations</h2>
          <p>
            Consultations and estimates are based on information you provide and
            may change after an on-site review of the property and equipment.
          </p>
          <h2 className="text-xl font-bold text-ink">Contact</h2>
          <p>
            For questions, contact {siteConfig.email} or {siteConfig.phone}.
          </p>
          <p className="text-sm">Last updated: July 23, 2026</p>
        </div>
      </Section>
    </>
  );
}
