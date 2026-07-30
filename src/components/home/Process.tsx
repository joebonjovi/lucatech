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
      <ol className="relative mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
        <span
          className="absolute left-0 right-0 top-[2.1rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden
        />
        {processSteps.map((step, index) => (
          <motion.li
            key={step.title}
            {...fadeUp}
            transition={staggerDelay(index)}
            className="relative flex items-start gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-brand/30 sm:block sm:p-5"
          >
            <span className="relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white ring-4 ring-white sm:h-11 sm:w-11">
              {step.step}
            </span>
            <div>
              <h3 className="text-base font-semibold text-ink sm:mt-4 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted sm:mt-2">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
