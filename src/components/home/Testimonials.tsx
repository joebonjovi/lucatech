"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import {
  testimonials,
  testimonialsArePlaceholder,
} from "@/config/testimonials";
import { motion } from "framer-motion";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5 text-brand"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path
            d="M10 2.5l2.35 4.76 5.25.76-3.8 3.7.9 5.23L10 14.48l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76z"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" tone="surface">
      <SectionHeading
        eyebrow="Testimonials"
        title="What homeowners say"
        description="Feedback from families around Doylestown and nearby communities who wanted their home technology installed properly the first time."
        align="center"
      />

      {testimonialsArePlaceholder && process.env.NODE_ENV === "development" ? (
        <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm text-amber-900">
          Sample testimonials — replace with real reviews in
          <code className="mx-1 font-mono">src/config/testimonials.ts</code>
          and set <code className="font-mono">testimonialsArePlaceholder</code>{" "}
          to false. This notice only appears in development.
        </p>
      ) : null}

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.li
            key={`${testimonial.name}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: (index % 3) * 0.06, duration: 0.35 }}
            className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
          >
            <figure className="flex h-full flex-col">
              <Stars rating={testimonial.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-ink">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  {testimonial.location}
                </p>
                <p className="mt-2 inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                  {testimonial.service}
                </p>
              </figcaption>
            </figure>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
