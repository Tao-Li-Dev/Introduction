import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResearchTimeline } from "@/components/sections/research/ResearchTimeline";
import { researchTopics } from "@/content/research";

export function ResearchSection() {
  return (
    <section id="research" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="研究方向"
          title="研究问题决定软件形态。"
          description="我的研究兴趣会直接影响工具设计。生物学上下文不是装饰，而是系统定义的一部分。"
        />
        <ResearchTimeline topics={researchTopics} />
      </Container>
    </section>
  );
}
