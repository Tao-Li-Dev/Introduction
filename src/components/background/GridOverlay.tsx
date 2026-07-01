import { useReducedMotion } from "@/hooks/useReducedMotion";

export function GridOverlay() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 bg-grid ${prefersReducedMotion ? "opacity-20" : "opacity-40"}`} />
  );
}
