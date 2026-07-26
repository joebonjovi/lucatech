import { Section, SectionHeading } from "@/components/ui/Section";
import { problems } from "@/config/content";

export function Problems() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Problems we solve"
        title="Home Technology Should Make Life Easier"
        description="When devices are poorly placed, weakly connected, or confusing to use, they create more stress than peace of mind. We help homeowners fix the common issues that get in the way."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <li
            key={problem.title}
            className="rounded-2xl border border-border bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-ink">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {problem.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
