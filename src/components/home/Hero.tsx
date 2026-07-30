"use client";

import { Button } from "@/components/ui/Button";
import { whyChoose } from "@/config/content";
import { siteConfig } from "@/config/site";
import { easeOut } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[60svh] overflow-hidden bg-ink sm:min-h-[85vh]">
      <Image
        src="/images/hero-home.jpg"
        alt="Modern home with professionally installed smart security technology"
        fill
        priority
        className="object-cover object-[70%_center] sm:object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink/55 sm:bg-gradient-to-r sm:from-ink/95 sm:via-ink/70 sm:to-ink/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand/25 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[60svh] max-w-6xl items-center px-4 py-10 sm:min-h-[85vh] sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          className="w-full max-w-2xl text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-sm sm:mb-5 sm:px-4 sm:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            Serving {siteConfig.serviceAreaLabel}
          </p>
          <h1 className="tracking-tight">
            <span className="block text-xl font-semibold leading-snug text-blue-300 sm:text-2xl lg:text-3xl">
              {siteConfig.hero.lead}
            </span>
            <span className="mt-1.5 block text-[2.15rem] font-bold leading-[1.12] text-white sm:mt-2 sm:text-5xl lg:text-6xl">
              {siteConfig.hero.headline}
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-xl">
            {siteConfig.hero.supporting}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              {siteConfig.cta.primary}
            </Button>
            <span className="hidden sm:inline-flex">
              <Button
                href="/services"
                size="lg"
                variant="secondary"
                className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                {siteConfig.cta.secondary}
              </Button>
            </span>
          </div>
          <ul className="mt-6 space-y-2.5 text-sm text-white/85 sm:hidden">
            {whyChoose.slice(0, 3).map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M4.5 10.5 8 14l7.5-8" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-7 hidden flex-wrap gap-x-4 gap-y-2 text-xs text-white/70 sm:mt-10 sm:flex sm:gap-x-6 sm:text-sm">
            {[
              "Professional installation",
              "Clean cable management",
              "Personalized recommendations",
              "Reliable local support",
            ].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M4.5 10.5 8 14l7.5-8" />
                  </svg>
                  {item}
                </li>
              ),
            )}
          </ul>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-16 right-8 hidden w-72 select-none lg:block xl:right-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
          aria-hidden
        >
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/90 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h9A2.5 2.5 0 0 1 17 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 16.5z" />
                  <path d="m17 10 4-2.5v9L17 14" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Front Door</p>
                <p className="text-xs text-white/70">Motion detected · Just now</p>
              </div>
              <span className="ml-auto flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-xs text-white/80">
              <span>Live view available on your phone</span>
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 shrink-0 text-blue-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.5 5 13 10l-5.5 5" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
