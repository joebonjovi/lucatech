"use client";

import { trustIndicators } from "@/config/content";
import { motion } from "framer-motion";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustIndicators.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-4 py-3"
            >
              <span
                className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
                aria-hidden
              />
              <span className="text-sm font-medium text-ink">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
