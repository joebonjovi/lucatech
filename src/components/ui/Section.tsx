import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className,
  tone = "white",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface" | "soft";
}) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
    soft: "bg-brand-soft/60",
  };

  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
