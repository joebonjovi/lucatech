import { CTABanner, PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { residentialServices } from "@/config/services";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Smart Home & Security Installation Services | Luca Technologies",
  description:
    "Residential services including security camera installation, video doorbells, smart locks, home Wi-Fi, and smart home integration in Doylestown, PA and surrounding communities.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Residential smart home security services"
        description="From security cameras and video doorbells to mesh Wi-Fi and device integration, Luca Technologies installs and configures connected home technology for homeowners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        actions
      />
      <Section>
        <SectionHeading
          title="Choose the service that fits your home"
          description="Every project starts with understanding your property, goals, and existing technology — then installing cleanly and walking you through how everything works."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
