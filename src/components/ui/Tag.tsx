import type { PropsWithChildren } from "react";

export function Tag({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium leading-none text-text-secondary">
      {children}
    </span>
  );
}
