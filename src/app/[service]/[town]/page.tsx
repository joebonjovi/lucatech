import {
  ServiceTownPage,
  buildServiceTownMetadata,
} from "@/components/shared/ServiceTownPage";
import { getSeoTownBySlug, seoTowns } from "@/config/service-area";
import { getServiceBySlug, services } from "@/config/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Only prerendered service/town combinations are valid — everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.flatMap((service) =>
    seoTowns.map((town) => ({
      service: service.slug,
      town: town.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; town: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug, town: townSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const town = getSeoTownBySlug(townSlug);
  if (!service || !town) return {};
  return buildServiceTownMetadata(service, town);
}

export default async function ServiceInTownPage({
  params,
}: {
  params: Promise<{ service: string; town: string }>;
}) {
  const { service: serviceSlug, town: townSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const town = getSeoTownBySlug(townSlug);
  if (!service || !town) notFound();
  return <ServiceTownPage service={service} town={town} />;
}
