import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Luca Technologies",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="This placeholder policy explains how we intend to handle information you share through this website. Replace with counsel-reviewed language before launch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <Section>
        <div className="prose-custom mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            <strong className="text-ink">{siteConfig.name}</strong> respects your
            privacy. When you contact us through this website, you may provide
            your name, phone number, email address, address or ZIP code, project
            details, and optional photos.
          </p>
          <h2 className="text-xl font-bold text-ink">How we use information</h2>
          <p>
            We use contact information to respond to consultation requests,
            provide estimates, schedule work, and communicate about your project.
            We do not sell personal information.
          </p>
          <h2 className="text-xl font-bold text-ink">Photos and project details</h2>
          <p>
            Project descriptions and photos help us understand your home and
            recommend practical solutions. Keep sensitive information out of
            uploads when possible.
          </p>
          <h2 className="text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about this policy can be sent to {siteConfig.email} or by
            calling {siteConfig.phone}.
          </p>
          <p className="text-sm">Last updated: July 23, 2026</p>
        </div>
      </Section>
    </>
  );
}
