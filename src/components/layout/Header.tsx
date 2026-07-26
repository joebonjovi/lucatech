"use client";

import { Button } from "@/components/ui/Button";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
          open
            ? "border-border bg-white"
            : scrolled
              ? "border-border bg-white/95 shadow-sm backdrop-blur-md"
              : "border-transparent bg-white/90 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="relative z-50 shrink-0"
            aria-label={`${siteConfig.name} home`}
            onClick={() => setOpen(false)}
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-11 w-auto sm:h-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-brand-soft text-brand"
                      : "text-ink/80 hover:bg-surface hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              {siteConfig.cta.primary}
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-full origin-center rounded bg-ink transition-transform duration-300 ease-out",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full rounded bg-ink transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full origin-center rounded bg-ink transition-transform duration-300 ease-out",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <div className="fixed inset-0 z-40 lg:hidden" id="mobile-nav">
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-ink/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="text-sm font-semibold text-ink">Menu</p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
                aria-label="Mobile"
              >
                {mainNav.map((item, index) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04, duration: 0.28 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                          active
                            ? "bg-brand-soft text-brand"
                            : "text-ink hover:bg-surface",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="border-t border-border bg-surface px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <Button href="/contact" className="w-full" size="lg">
                  {siteConfig.cta.primary}
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-3 block text-center text-sm font-medium text-muted"
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
