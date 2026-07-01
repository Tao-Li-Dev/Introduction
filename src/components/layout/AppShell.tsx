import type { PropsWithChildren } from "react";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { AmbientBackground } from "@/components/background/AmbientBackground";
import { Footer } from "@/components/layout/Footer";
import { useActiveSection } from "@/hooks/useActiveSection";

export function AppShell({ children }: PropsWithChildren) {
  const activeSection = useActiveSection();

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <AmbientBackground />
      <FloatingNav activeSection={activeSection} />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
