import { CTABanner, PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { seoTowns, type SeoTown } from "@/config/service-area";
import { residentialServices, type Service } from "@/config/services";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

function townHref(service: Service, town: SeoTown) {
  return `${service.href}/${town.slug}`;
}

export function buildServiceTownMetadata(
  service: Service,
  town: SeoTown,
): Metadata {
  return buildPageMetadata({
    title: `${service.title} in ${town.name}, PA | ${siteConfig.name}`,
    description: `Professional ${service.title.toLowerCase()} for homeowners in ${town.name}, PA (${town.zips.join(", ")}). Local, owner-operated service based in Doylestown — request a free consultation.`,
    path: townHref(service, town),
  });
}

export function ServiceTownPage({
  service,
  town,
}: {
  service: Service;
  town: SeoTown;
}) {
  const zipLabel = town.zips.join(" and ");
  const otherTowns = seoTowns.filter((t) => t.slug !== town.slug);
  const otherServices = residentialServices.filter(
    (s) => s.id !== service.id,
  );

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            title: `${service.title} in ${town.name}, PA`,
            description: service.description,
            href: townHref(service, town),
            areaServed: { city: town.name, zips: town.zips },
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: service.href },
            { name: `${town.name}, PA`, path: townHref(service, town) },
          ]),
        ]}
      />
      <PageHero
        title={`${service.title} in ${town.name}, PA`}
        description={`Looking for ${service.title.toLowerCase()} in ${town.name}? Luca Technologies is an owner-operated installer based in Doylestown, serving ${town.name} homeowners in the ${zipLabel} area with professional installation and honest recommendations.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle, href: service.href },
          { label: `${town.name}, PA` },
        ]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-6">
              <ServiceIcon name={service.icon} className="h-14 w-14" />
            </div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              {service.shortTitle} for {town.name} homes
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {service.longDescription}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              {town.name} is {town.blurb}. We work in {town.name} and across{" "}
              {town.county} regularly, so scheduling is easy and we show up
              knowing the kinds of homes and layouts common to the area.
            </p>
            <h3 className="mt-10 text-xl font-bold text-ink">
              What is included
            </h3>
            <ul className="mt-5 space-y-3">
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
              <Button href={service.href} variant="secondary" size="lg">
                About {service.shortTitle.toLowerCase()}
              </Button>
            </div>
          </div>
          <aside className="rounded-3xl border border-border bg-gradient-to-br from-brand-soft to-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">
              Why {town.name} homeowners choose us
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>
                Local and owner-operated — based in Doylestown, minutes from{" "}
                {town.name}
              </li>
              <li>Professional placement, clean wiring, and tidy installs</li>
              <li>Honest recommendations that fit your home and budget</li>
              <li>Setup, configuration, and a full walkthrough included</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Service area details
              </h3>
              <dl className="mt-3 space-y-2 text-sm text-ink">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Town</dt>
                  <dd className="font-medium">{town.name}, PA</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">County</dt>
                  <dd className="font-medium">{town.county}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">ZIP {town.zips.length > 1 ? "codes" : "code"}</dt>
                  <dd className="font-medium">{town.zips.join(", ")}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Phone</dt>
                  <dd className="font-medium">
                    <a href={siteConfig.phoneHref} className="hover:text-brand">
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <p className="mt-6 text-sm text-muted">
              Not in {town.name}? See our full{" "}
              <Link href="/service-area" className="font-medium text-brand hover:underline">
                service area
              </Link>
              .
            </p>
          </aside>
        </div>
      </Section>
      <Section tone="surface" className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h2"
              eyebrow="Nearby"
              title={`${service.shortTitle} in nearby towns`}
            />
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {otherTowns.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={townHref(service, t)}
                    className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {t.name}, PA
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              as="h2"
              eyebrow="More services"
              title={`Other services in ${town.name}`}
            />
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {otherServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`${s.href}/${town.slug}`}
                    className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <CTABanner
        title={`Ready to get started in ${town.name}?`}
        description={`Tell us about your home and what you want to accomplish. We serve ${town.name} and the surrounding ${town.county} area with fast, friendly scheduling.`}
      />
    </>
  );
}
