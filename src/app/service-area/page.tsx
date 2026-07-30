import { CTABanner, PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  serviceAreaIntro,
  serviceCities,
  serviceZips,
} from "@/config/service-area";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Service Area | Smart Home Installation Near Me | Luca Technologies",
  description:
    "Luca Technologies provides residential security camera and smart home installation in Doylestown, PA and surrounding communities.",
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        title="Service area"
        description={serviceAreaIntro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Area" },
        ]}
      />
      <Section>
        <SectionHeading
          title={siteConfig.serviceAreaLabel}
          description="We install residential smart home security and technology throughout these communities. If your town is not listed, reach out — coverage may still be available."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Communities we serve</h2>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {serviceCities.map((city) => (
                <li
                  key={city.slug}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-ink">ZIP codes</h2>
            <p className="mt-2 text-sm text-muted">
              Include your ZIP code when you request a consultation so we can
              confirm coverage for your home.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceZips.map((zip) => (
                <li
                  key={zip}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {zip}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Looking for security camera installation near you, video doorbell
              setup, or mesh Wi-Fi help in the Doylestown area? Request a free
              consultation and include your ZIP code so we can confirm coverage.
            </p>
          </div>
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
