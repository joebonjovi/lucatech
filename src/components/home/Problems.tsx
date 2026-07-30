import { Section, SectionHeading } from "@/components/ui/Section";
import { problems } from "@/config/content";
import Link from "next/link";
import type { ReactNode } from "react";

const problemIcons: ReactNode[] = [
  // Poor camera coverage
  <path key="camera" d="M3 7.5A2.5 2.5 0 0 1 5.5 5h9A2.5 2.5 0 0 1 17 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 16.5zM17 10l4-2.5v9L17 14M2 2l20 20" />,
  // Wi-Fi dead zones
  <path key="wifi" d="M2.5 8.5c5.5-5.2 13.5-5.2 19 0M6 12.2c3.5-3.3 8.5-3.3 12 0M9.4 15.8c1.8-1.6 3.4-1.6 5.2 0M12 19.5h.01M3 3l18 18" />,
  // Unreliable DIY installations
  <path key="wrench" d="M14.5 6.5a4 4 0 0 0-5.4 5L3 17.6V21h3.4l6.1-6.1a4 4 0 0 0 5-5.4L14 13l-3-3z" />,
  // Visible or messy wiring
  <path key="cable" d="M4 4c4 0 3 5 7 5s3-5 7-5M4 12c4 0 3 5 7 5s3-5 7-5M4 20h16" />,
  // Devices that do not work together
  <path key="puzzle" d="M8 8H4v4h4zM20 8h-4v4h4zM14 16h-4v4h4zM8 10h8M12 12v4" />,
  // Difficulty accessing devices remotely
  <path key="phone" d="M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3zM12 17.5h.01M9 9l6 6M15 9l-6 6" />,
  // Unprotected entrances
  <path key="door" d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M6 21h12M6 21H4m14 0h2M14.5 12h.01" />,
];

export function Problems() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Problems we solve"
        title="Home Technology Should Make Life Easier"
        description="When devices are poorly placed, weakly connected, or confusing to use, they create more stress than peace of mind. We help homeowners fix the common issues that get in the way."
      />
      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, index) => (
          <li
            key={problem.title}
            className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-brand/30"
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-muted transition-colors group-hover:bg-brand-soft group-hover:text-brand"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {problemIcons[index]}
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
              {problem.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {problem.description}
            </p>
          </li>
        ))}
        <li>
          <Link
            href="/services"
            className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-5 text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-base font-semibold leading-snug">
                Sound familiar?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Every one of these is fixable with the right plan, equipment, and
                a clean professional installation.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
              See how we fix it
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M4 10h12m-5-5 5 5-5 5" />
              </svg>
            </span>
          </Link>
        </li>
      </ul>
    </Section>
  );
}
