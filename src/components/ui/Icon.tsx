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
  garage: (
    <>
      <path d="M4 12 L14.5 4.5 L25 12" />
      <path d="M6.5 11.2V23h16V11.2" />
      <path d="M9 15h11M9 18.5h11M9 22h11" />
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
  upgrade: (
    <>
      <path d="M14.5 22V8" />
      <path d="M9 13l5.5-5.5L20 13" />
      <path d="M6 22h17" />
    </>
  ),
  troubleshoot: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M17.5 17.5 23 23" />
      <path d="M12 9v4M12 16.2h.01" />
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
