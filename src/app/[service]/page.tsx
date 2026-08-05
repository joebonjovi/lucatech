import {
  ServiceDetailPage,
  buildServiceMetadata,
} from "@/components/shared/ServiceDetailPage";
import { getServiceBySlug, services } from "@/config/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Only prerendered service slugs are valid — everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildServiceMetadata(service);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
