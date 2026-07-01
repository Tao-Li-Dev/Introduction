import { useReducedMotion } from "@/hooks/useReducedMotion";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  top: `${(index * 19) % 100}%`,
}));

export function ParticleField() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`absolute h-1.5 w-1.5 rounded-full bg-white/20 ${
            prefersReducedMotion ? "" : "animate-pulseSoft"
          }`}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
}
