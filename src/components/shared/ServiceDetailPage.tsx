import { CTABanner, PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import type { Service } from "@/config/services";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";

export function buildServiceMetadata(service: Service): Metadata {
  return buildPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: service.href,
  });
}

export function ServiceDetailPage({ service }: { service: Service }) {
  const images = service.images ?? [];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            title: service.title,
            description: service.description,
            href: service.href,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: service.href },
          ]),
        ]}
      />
      <PageHero
        title={service.title}
        description={service.longDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-6">
              <ServiceIcon name={service.icon} className="h-14 w-14" />
            </div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              What this service includes
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {service.description}
            </p>
            <ul className="mt-8 space-y-3">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink"
                >
                  <span className="text-brand" aria-hidden>
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                {siteConfig.cta.primary}
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                All services
              </Button>
            </div>
          </div>

          <aside className="space-y-5">
            {images.length > 0 ? (
              <div className="grid gap-4">
                {images.map((image, index) => (
                  <div
                    key={image.src}
                    className={`overflow-hidden rounded-3xl border border-border bg-surface shadow-sm ${
                      index === 0 ? "aspect-[4/3]" : "aspect-[5/4]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-soft to-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">Good fit for</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>
                  Homeowners who want professional placement and clean installs
                </li>
                <li>
                  New homeowners setting up connected security and Wi-Fi
                </li>
                <li>
                  Families improving visibility at entrances, garages, and
                  driveways
                </li>
                <li>
                  Customers who purchased devices and need expert setup
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                Serving {siteConfig.serviceAreaLabel}.
              </p>
            </div>
          </aside>
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
