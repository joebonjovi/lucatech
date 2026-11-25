import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeaturedCameras } from "@/components/home/FeaturedCameras";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { ServiceAreaPreview } from "@/components/home/ServiceAreaPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: `Home & Business Technology Installation in Doylestown, PA | ${siteConfig.name}`,
  description: siteConfig.tagline,
  path: "/",
});

const commercialServices = [
  {
    title: "Security cameras",
    description: "Wired camera systems for entrances, sales floors, storage rooms, and common areas.",
  },
  {
    title: "Wi-Fi and networking",
    description: "Wi-Fi access point installation and coverage improvements for workspaces and shared areas.",
  },
  {
    title: "TV and display mounting",
    description: "Professional mounting for conference rooms, waiting areas, and customer-facing displays.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Hero />
      <Section id="commercial" tone="soft" className="scroll-mt-24">
        <SectionHeading
          title="Technology installation for businesses"
          description="We help business owners and property managers in Bucks and Montgomery counties plan and install technology for offices, storefronts, and common areas."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {commercialServices.map(({ title, description }) => (
            <li key={title} className="rounded-2xl border border-border bg-white p-5">
              <h3 className="font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-muted">
          Tell us which areas need coverage, what equipment is already on site,
          and when we can access the property so we can scope your quote.
        </p>
        <Button href="/contact#project-type" className="mt-5">Request a Commercial Quote</Button>
      </Section>
      <ServicesGrid />
      <FeaturedCameras />
      <ProjectGallery />
      <Process />
      <Testimonials />
      <ServiceAreaPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
