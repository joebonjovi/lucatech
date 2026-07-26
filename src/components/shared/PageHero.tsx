import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PageHero({
  title,
  description,
  breadcrumbs,
  actions,
}: {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: boolean;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-surface via-white to-brand-soft/40">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(15,23,42,0.06), transparent 35%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-3 sm:mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-brand">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {description}
        </p>
        {actions ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              {siteConfig.cta.primary}
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function CTABanner({
  title = siteConfig.cta.contactHeading,
  description = "Share a few details about your home and goals. We will follow up to schedule a consultation.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-ink to-slate-800 px-5 py-8 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-sm text-white/70 sm:text-base">
                {description}
              </p>
            </div>
            <Button
              href="/contact"
              size="lg"
              className="w-full shrink-0 bg-brand hover:bg-brand-dark sm:w-auto"
            >
              {siteConfig.cta.primary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
