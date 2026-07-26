import { Section, SectionHeading } from "@/components/ui/Section";
import { whyChoose } from "@/config/content";

export function WhyChoose() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Why choose Luca Technologies"
          title="A local installer focused on homeowners"
          description="We are not a handyman service and not a large alarm-monitoring corporation. Luca Technologies is a professional technology installer helping families build safer, more connected homes."
        />
        <ul className="space-y-3">
          {whyChoose.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3"
            >
              <span className="mt-0.5 text-brand" aria-hidden>
                ✓
              </span>
              <span className="text-sm font-medium text-ink sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
