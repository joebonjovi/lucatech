"use client";

import { faqs } from "@/config/faq";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FAQAccordion({
  items = faqs,
}: {
  items?: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="font-semibold text-ink">{item.question}</span>
                <span
                  className={cn(
                    "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-sm text-brand transition-transform",
                    open && "rotate-45",
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
