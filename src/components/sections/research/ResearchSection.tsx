import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResearchTimeline } from "@/components/sections/research/ResearchTimeline";
import { researchTopics } from "@/content/research";

export function ResearchSection() {
  return (
    <section id="research" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="研究问题"
          title="软件形态从生物学问题开始。"
          description="我关注那些由基因树、直系同源推断和可复现性共同决定的软件设计问题。"
        />
        <ResearchTimeline topics={researchTopics} />
      </Container>
    </section>
  );
}
