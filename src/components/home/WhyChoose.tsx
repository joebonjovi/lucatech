import { Section, SectionHeading } from "@/components/ui/Section";
import { whyChoose } from "@/config/content";

export function WhyChoose() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Why choose Luca Technologies"
            title="A local installer focused on homeowners"
            description="We are not a handyman service and not a large alarm-monitoring corporation. Luca Technologies is a professional technology installer helping families build safer, more connected homes."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Not a handyman
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Home technology is our specialty, not a side job. Placement,
                networking, and configuration are done right.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Not a big corporation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                No pushy contracts or call centers. You work with a local
                installer who knows your home and answers your questions.
              </p>
            </div>
          </div>
        </div>
        <ol className="space-y-3">
          {whyChoose.map((item, index) => (
            <li
              key={item}
              className="flex items-center gap-4 rounded-xl border border-border bg-white px-4 py-3.5 shadow-sm"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand"
                aria-hidden
              >
                {index + 1}
              </span>
              <span className="text-sm font-medium text-ink sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
