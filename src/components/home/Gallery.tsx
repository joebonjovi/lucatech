import { Section, SectionHeading } from "@/components/ui/Section";
import { galleryPlaceholders } from "@/config/content";

export function Gallery() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Project gallery"
        title="Clean installations. Thoughtful placement."
        description="Placeholder gallery for upcoming project photos — camera installs, doorbells, smart locks, networking, and organized wiring."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryPlaceholders.map((item, index) => (
          <figure
            key={item.title}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
          >
            <div
              className="flex aspect-[4/3] items-end bg-gradient-to-br from-slate-100 via-brand-soft to-slate-200 p-4"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(37,99,235,${0.08 + (index % 4) * 0.04}) 0%, rgba(15,23,42,0.06) 55%, rgba(248,250,252,1) 100%)`,
              }}
              role="img"
              aria-label={`Placeholder image for ${item.title}`}
            >
              <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
                Photo coming soon
              </span>
            </div>
            <figcaption className="p-4">
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
