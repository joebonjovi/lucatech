"use client";

import { trustIndicators } from "@/config/content";
import { fadeUp, staggerDelay } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-0 lg:px-8">
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-0 sm:divide-y sm:divide-border lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {trustIndicators.map((item, index) => (
            <motion.li
              key={item}
              {...fadeUp}
              transition={staggerDelay(index, 0.05)}
              className={cn(
                "flex items-center gap-2.5 rounded-xl border border-border bg-surface/60 px-3 py-2.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-2 sm:py-6 lg:justify-center lg:px-4",
                index === trustIndicators.length - 1 && "col-span-2 sm:col-span-1",
              )}
            >
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand sm:h-9 sm:w-9"
                aria-hidden
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 10.5 8 14l7.5-8" />
                </svg>
              </span>
              <span className="text-xs font-semibold leading-snug text-ink sm:text-sm">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
