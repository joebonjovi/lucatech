import { ServiceIcon } from "@/components/ui/Icon";
import type { Service } from "@/config/services";
import Link from "next/link";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
    >
      <ServiceIcon name={service.icon} />
      <h3 className="mt-5 text-xl font-semibold text-ink group-hover:text-brand">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
      <span className="mt-5 text-sm font-semibold text-brand">
        Learn more →
      </span>
    </Link>
  );
}
