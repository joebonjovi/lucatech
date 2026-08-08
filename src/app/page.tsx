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
  title: `${siteConfig.name} | Home Security Camera & Smart Home Installation`,
  description: siteConfig.tagline,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Hero />
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
