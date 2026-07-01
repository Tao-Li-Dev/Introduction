import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
