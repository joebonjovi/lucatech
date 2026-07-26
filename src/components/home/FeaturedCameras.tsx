import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { featuredService } from "@/config/services";
import { siteConfig } from "@/config/site";

export function FeaturedCameras() {
  return (
    <Section tone="soft">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            Featured service
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            See What Matters, From Anywhere
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {featuredService.longDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={featuredService.href} size="lg" className="w-full sm:w-auto">
              Security Camera Installation
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              {siteConfig.cta.primary}
            </Button>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {featuredService.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm"
            >
              <span className="mr-2 text-brand" aria-hidden>
                ✓
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
