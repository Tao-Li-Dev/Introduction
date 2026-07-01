import { AboutSection } from "@/components/sections/about/AboutSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { PublicationsSection } from "@/components/sections/publications/PublicationsSection";
import { ResearchSection } from "@/components/sections/research/ResearchSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PublicationsSection />
      <ResearchSection />
      <ContactSection />
    </>
  );
}
