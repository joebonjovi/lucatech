import { FeaturedCameras } from "@/components/home/FeaturedCameras";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Problems } from "@/components/home/Problems";
import { Process } from "@/components/home/Process";
import { ServiceAreaPreview } from "@/components/home/ServiceAreaPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChoose } from "@/components/home/WhyChoose";
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
      <TrustBar />
      <Problems />
      <ServicesGrid />
      <FeaturedCameras />
      <Process />
      <Testimonials />
      <WhyChoose />
      <ServiceAreaPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
