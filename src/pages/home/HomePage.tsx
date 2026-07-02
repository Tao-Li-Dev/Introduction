import { ContactSection } from "@/components/sections/contact/ContactSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { MethodsSection } from "@/components/sections/methods/MethodsSection";
import { PhyloTracerCaseSection } from "@/components/sections/phylotracer/PhyloTracerCaseSection";
import { ProfileEvidenceSection } from "@/components/sections/profile/ProfileEvidenceSection";
import { PublicationsSection } from "@/components/sections/publications/PublicationsSection";
import { ResearchSection } from "@/components/sections/research/ResearchSection";
import { RoadmapSection } from "@/components/sections/roadmap/RoadmapSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProfileEvidenceSection />
      <PhyloTracerCaseSection />
      <ResearchSection />
      <PublicationsSection />
      <MethodsSection />
      <RoadmapSection />
      <ContactSection />
    </>
  );
}
