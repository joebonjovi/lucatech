"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-ink">
      <Image
        src="/images/hero-home.jpg"
        alt="Modern home with professionally installed smart security technology"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/35"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
            {siteConfig.name}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">
            {siteConfig.hero.supporting}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              {siteConfig.cta.primary}
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
