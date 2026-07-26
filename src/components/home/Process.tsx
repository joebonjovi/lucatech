"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { processSteps } from "@/config/content";
import { fadeUp, staggerDelay } from "@/lib/motion";
import { motion } from "framer-motion";

export function Process() {
  return (
    <Section id="process" tone="white">
      <SectionHeading
        eyebrow="Our process"
        title="A clear path from consultation to walkthrough"
        description="Every project follows a simple five-step process so homeowners know what to expect."
        align="center"
      />
      <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <motion.li
            key={step.title}
            {...fadeUp}
            transition={staggerDelay(index)}
            className="relative rounded-2xl border border-border bg-surface p-5"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              {step.step}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
