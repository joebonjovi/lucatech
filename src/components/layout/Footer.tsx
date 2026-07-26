import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { label: "Facebook", href: siteConfig.social.facebook },
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "Google", href: siteConfig.social.google },
  ].filter((social) => social.href && social.href !== "#");

  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-xl bg-white px-3 py-2">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-11 w-auto sm:h-12"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {siteConfig.shortDescription}
          </p>
          <p className="mt-3 text-sm text-white/70">{siteConfig.serviceAreaLabel}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <span className="text-white/50">Phone: </span>
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <span className="text-white/50">Email: </span>
              <a
                href={siteConfig.emailHref}
                className="break-all hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="pt-2 leading-relaxed">
              <span className="text-white/50">Hours: </span>
              Weekdays {siteConfig.hours.weekdays}; Saturday{" "}
              {siteConfig.hours.saturday}; Sunday {siteConfig.hours.sunday}
            </li>
          </ul>
          {socialLinks.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/70 hover:border-white/40 hover:text-white"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Residential smart home security and technology installation.</p>
        </div>
      </div>
    </footer>
  );
}
