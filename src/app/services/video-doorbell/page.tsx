import { ServiceDetailPage, buildServiceMetadata } from "@/components/shared/ServiceDetailPage";
import { getServiceBySlug } from "@/config/services";
import { notFound } from "next/navigation";

const slug = "video-doorbell";

export const metadata = buildServiceMetadata(getServiceBySlug(slug)!);

export default function VideoDoorbellPage() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
