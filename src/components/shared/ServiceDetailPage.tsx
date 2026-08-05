import { CTABanner, PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { seoTowns } from "@/config/service-area";
import type { Service } from "@/config/services";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export function buildServiceMetadata(service: Service): Metadata {
  return buildPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: service.href,
  });
}

export function ServiceDetailPage({ service }: { service: Service }) {
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
            <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                {siteConfig.cta.primary}
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                All services
              </Button>
            </div>
          </div>
          <aside className="rounded-3xl border border-border bg-gradient-to-br from-brand-soft to-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Good fit for</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Homeowners who want professional placement and clean installs</li>
              <li>New homeowners setting up connected security and Wi-Fi</li>
              <li>Families improving visibility at entrances, garages, and driveways</li>
              <li>Customers who purchased devices and need expert setup</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Serving {siteConfig.serviceAreaLabel}.
            </p>
          </aside>
        </div>
      </Section>
      <Section tone="surface" className="border-t border-border">
        <SectionHeading
          eyebrow="Service areas"
          title={`${service.shortTitle} near you`}
          description={`We provide ${service.title.toLowerCase()} throughout Bucks County and Montgomery County, PA. Choose your town to learn more.`}
        />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {seoTowns.map((town) => (
            <li key={town.slug}>
              <Link
                href={`${service.href}/${town.slug}`}
                className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
              >
                {service.shortTitle} in {town.name}, PA
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CTABanner />
    </>
  );
}
