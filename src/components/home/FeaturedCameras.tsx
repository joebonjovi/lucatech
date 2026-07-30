"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { featuredService } from "@/config/services";
import { easeOut, fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturedCameras() {
  return (
    <Section tone="soft">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          className="relative order-last lg:order-first"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/featured-cameras.jpg"
              alt="Homeowner checking live security camera feeds from a phone in front of their home"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div
            className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-6"
            aria-hidden
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Live from anywhere</p>
              <p className="text-xs text-muted">Mobile alerts &amp; remote viewing</p>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            Featured service
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            See What Matters, From Anywhere
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {featuredService.longDescription}
          </p>
          <motion.ul {...fadeUp} className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {featuredService.benefits.slice(0, 4).map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm font-medium text-ink shadow-sm"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 text-brand"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M4.5 10.5 8 14l7.5-8" />
                </svg>
                {benefit}
              </li>
            ))}
          </motion.ul>
          <div className="mt-8">
            <Button href={featuredService.href} size="lg" className="w-full sm:w-auto">
              Security Camera Installation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
