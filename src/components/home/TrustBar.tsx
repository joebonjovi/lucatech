"use client";

import { trustIndicators } from "@/config/content";
import { fadeUp, staggerDelay } from "@/lib/motion";
import { motion } from "framer-motion";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {trustIndicators.map((item, index) => (
            <motion.li
              key={item}
              {...fadeUp}
              transition={staggerDelay(index, 0.05)}
              className="flex items-center gap-3 px-2 py-4 sm:py-6 lg:justify-center lg:px-4"
            >
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand"
                aria-hidden
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 10.5 8 14l7.5-8" />
                </svg>
              </span>
              <span className="text-sm font-semibold leading-snug text-ink">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
