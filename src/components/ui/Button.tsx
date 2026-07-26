import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-dark focus-visible:ring-brand",
  secondary:
    "bg-white text-ink border border-border hover:border-brand/40 hover:bg-brand-soft focus-visible:ring-brand",
  ghost: "bg-transparent text-ink hover:bg-surface focus-visible:ring-brand",
  outline:
    "bg-transparent text-brand border border-brand/30 hover:bg-brand-soft focus-visible:ring-brand",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3.5 text-base sm:text-lg",
};

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
