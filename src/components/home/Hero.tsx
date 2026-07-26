"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { easeOut } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-ink sm:min-h-[85vh]">
      <Image
        src="/images/hero-home.jpg"
        alt="Modern home with professionally installed smart security technology"
        fill
        priority
        className="object-cover object-[70%_center] sm:object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink/50 sm:bg-gradient-to-r sm:from-ink/90 sm:via-ink/75 sm:to-ink/35"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-12 sm:min-h-[85vh] sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          className="w-full max-w-2xl text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <motion.p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300 sm:mb-4 sm:text-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
          >
            {siteConfig.name}
          </motion.p>
          <h1 className="text-[2.15rem] font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:mt-5 sm:text-xl">
            {siteConfig.hero.supporting}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              {siteConfig.cta.primary}
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="secondary"
              className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
