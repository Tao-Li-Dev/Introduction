import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "ghost";
  }
>;

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-accent-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#78B4FF]",
        variant === "secondary" &&
          "border border-border-subtle bg-white/5 text-text-primary hover:-translate-y-0.5 hover:border-accent-line hover:bg-white/8",
        variant === "ghost" &&
          "text-text-secondary hover:text-text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
