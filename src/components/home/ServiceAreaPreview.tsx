import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { serviceAreaIntro, serviceCities } from "@/config/service-area";
import { siteConfig } from "@/config/site";

export function ServiceAreaPreview() {
  return (
    <Section id="service-area" tone="soft">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <SectionHeading
          eyebrow="Service area"
          title={siteConfig.serviceAreaLabel}
          description={serviceAreaIntro}
        />
        <Button
          href="/service-area"
          variant="secondary"
          className="w-full self-start sm:w-auto lg:justify-self-end"
        >
          View service area details
        </Button>
      </div>
      <ul className="mt-10 flex flex-wrap gap-2">
        {serviceCities.map((city) => (
          <li
            key={city.slug}
            className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink"
          >
            {city.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
