import { CTABanner, PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Section } from "@/components/ui/Section";
import { residentialServices } from "@/config/services";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Smart Home & Security Installation Services | Luca Technologies",
  description:
    "Residential services including security cameras, video doorbells, smart locks, smart lighting, home Wi-Fi and networking, home automation, and home theater and audio installation in Doylestown, PA and surrounding communities.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Residential smart home security services"
        description="From security cameras, video doorbells, and smart locks to home Wi-Fi, automation, and home theater, Luca Technologies installs and configures connected home technology for homeowners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {residentialServices.map((service) => (
            <div key={service.id} id={service.slug}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
