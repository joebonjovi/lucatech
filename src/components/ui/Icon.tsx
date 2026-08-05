import type { ServiceIconName } from "@/config/services";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const paths: Record<ServiceIconName, ReactNode> = {
  camera: (
    <>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h5.2l1.6-2h5.4l1.6 2H22.5A2.5 2.5 0 0 1 25 8.5v11A2.5 2.5 0 0 1 22.5 22h-16A2.5 2.5 0 0 1 4 19.5z" />
      <circle cx="14.5" cy="14" r="4.2" />
    </>
  ),
  doorbell: (
    <>
      <rect x="9" y="3" width="11" height="22" rx="3.5" />
      <circle cx="14.5" cy="12" r="3" />
      <path d="M12 19h5" />
    </>
  ),
  lock: (
    <>
      <rect x="7" y="11" width="15" height="12" rx="2.5" />
      <path d="M10.5 11V8a4 4 0 0 1 8 0v3" />
      <circle cx="14.5" cy="17" r="1.5" />
    </>
  ),
  wifi: (
    <>
      <path d="M4.5 11.5c5.5-5.2 14.5-5.2 20 0" />
      <path d="M8 15.2c3.5-3.3 9.5-3.3 13 0" />
      <path d="M11.4 18.8c1.8-1.6 4.4-1.6 6.2 0" />
      <circle cx="14.5" cy="22" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  network: (
    <>
      <circle cx="14.5" cy="6.5" r="2.6" />
      <circle cx="6" cy="22" r="2.6" />
      <circle cx="23" cy="22" r="2.6" />
      <path d="M13.2 8.8 7.3 19.7M15.8 8.8l5.9 10.9M8.7 22h11.6" />
    </>
  ),
  integration: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="21" cy="8" r="3" />
      <circle cx="8" cy="21" r="3" />
      <circle cx="21" cy="21" r="3" />
      <path d="M11 8h7M8 11v7M21 11v7M11 21h7" />
    </>
  ),
  automation: (
    <>
      <path d="M5 8.5h4M13.5 8.5H24" />
      <circle cx="11.2" cy="8.5" r="2.3" />
      <path d="M5 14.5h11M20.5 14.5H24" />
      <circle cx="18.2" cy="14.5" r="2.3" />
      <path d="M5 20.5h2.5M12 20.5h12" />
      <circle cx="9.7" cy="20.5" r="2.3" />
    </>
  ),
  lighting: (
    <>
      <path d="M14.5 3.5a7 7 0 0 1 4.1 12.7c-.95.7-1.6 1.75-1.6 2.9h-5c0-1.15-.65-2.2-1.6-2.9A7 7 0 0 1 14.5 3.5z" />
      <path d="M12 22.3h5M12.8 25.3h3.4" />
    </>
  ),
  audio: (
    <>
      <path d="M5.5 11.5h3.7l4.8-4.3v14.6l-4.8-4.3H5.5z" />
      <path d="M18 10.7a5.4 5.4 0 0 1 0 7.6" />
      <path d="M21 8a9.2 9.2 0 0 1 0 13" />
    </>
  ),
  speaker: (
    <>
      <rect x="8" y="3.5" width="13" height="22" rx="2.5" />
      <circle cx="14.5" cy="9.5" r="2" />
      <circle cx="14.5" cy="18.5" r="3.6" />
    </>
  ),
  theater: (
    <>
      <rect x="4" y="5.5" width="21" height="13.5" rx="2" />
      <path d="M12.5 9v6.5l5.5-3.25z" />
      <path d="M10 23.5h9" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 29 29"
        fill="none"
        className="h-7 w-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </svg>
    </span>
  );
}
