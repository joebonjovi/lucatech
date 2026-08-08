"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { projectPhotos } from "@/config/projects";
import { fadeUp, staggerDelay } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectGallery() {
  return (
    <Section id="projects" tone="surface">
      <SectionHeading
        eyebrow="On the job"
        title="Real installs. Real homes."
        description="A look at recent Luca Technologies work — doorbells, cameras, networking, and connected devices installed with care."
        align="center"
      />

      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {projectPhotos.map((photo, index) => (
          <motion.li
            key={photo.src}
            {...fadeUp}
            transition={staggerDelay(index % 3)}
          >
            <Link
              href={photo.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-brand/30 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <p className="font-semibold text-ink group-hover:text-brand">
                  {photo.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {photo.caption}
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
