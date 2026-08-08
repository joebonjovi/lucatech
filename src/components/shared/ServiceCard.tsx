import { ServiceIcon } from "@/components/ui/Icon";
import type { Service } from "@/config/services";
import Image from "next/image";
import Link from "next/link";

export function ServiceCard({ service }: { service: Service }) {
  const cover = service.images?.[0];

  return (
    <Link
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 sm:hover:-translate-y-1"
    >
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-dark transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />

      {cover ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 100vw"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {!cover ? (
          <ServiceIcon
            name={service.icon}
            className="transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
          />
        ) : null}
        <h3
          className={`text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand sm:text-xl ${
            cover ? "" : "mt-5"
          }`}
        >
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Learn more
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M4 10h12m-5-5 5 5-5 5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
