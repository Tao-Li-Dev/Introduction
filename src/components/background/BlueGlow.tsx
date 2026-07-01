import { useReducedMotion } from "@/hooks/useReducedMotion";

export function BlueGlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-accent-soft/60 to-transparent ${prefersReducedMotion ? "opacity-30" : ""}`} />
  );
}
