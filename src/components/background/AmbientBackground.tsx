import { ParticleField } from "@/components/background/ParticleField";
import { GridOverlay } from "@/components/background/GridOverlay";
import { BlueGlow } from "@/components/background/BlueGlow";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <BlueGlow />
      <GridOverlay />
      <ParticleField />
    </div>
  );
}
