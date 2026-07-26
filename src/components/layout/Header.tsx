"use client";

import { Button } from "@/components/ui/Button";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur-md transition-shadow",
        scrolled && "border-border shadow-sm",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-50 shrink-0" aria-label={`${siteConfig.name} home`}>
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-12 w-auto sm:h-14"
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
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
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
                "h-0.5 w-full rounded bg-ink transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded bg-ink transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded bg-ink transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 bg-white pt-20 transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-lg font-medium text-ink hover:bg-surface"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 px-2">
            <Button href="/contact" className="w-full" size="lg">
              {siteConfig.cta.primary}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
