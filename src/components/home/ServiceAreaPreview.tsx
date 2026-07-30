import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { serviceAreaIntro, serviceCities } from "@/config/service-area";
import { siteConfig } from "@/config/site";

export function ServiceAreaPreview() {
  return (
    <Section id="service-area" tone="soft">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Service area"
            title={siteConfig.serviceAreaLabel}
            description={serviceAreaIntro}
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {serviceCities.map((city) => (
              <li
                key={city.slug}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink"
              >
                {city.name}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              href="/service-area"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              View service area details
            </Button>
          </div>
        </div>

        <div
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
          aria-hidden
        >
          {[100, 76, 52, 28].map((size) => (
            <span
              key={size}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/20 bg-white/40"
              style={{ width: `${size}%`, height: `${size}%` }}
            />
          ))}
          <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
              <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-brand shadow-md" />
            </span>
            <span className="mt-2 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white shadow-md">
              {siteConfig.address.locality}, {siteConfig.address.region}
            </span>
          </span>
          {serviceCities.slice(0, 6).map((city, index) => {
            const positions = [
              { top: "12%", left: "30%" },
              { top: "24%", left: "72%" },
              { top: "56%", left: "86%" },
              { top: "80%", left: "62%" },
              { top: "72%", left: "14%" },
              { top: "38%", left: "6%" },
            ];
            const pos = positions[index];
            return (
              <span
                key={city.slug}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium text-muted shadow-sm"
                style={pos}
              >
                {city.name}
              </span>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
