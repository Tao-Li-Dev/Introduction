import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StackClusterMap } from "@/components/sections/stack/StackClusterMap";
import { stackClusters } from "@/content/stack";

export function StackSection() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="AI 技术栈"
          title="技术栈不是百分比，而是关系网络。"
          description="我把工具看成互相连接的层：界面、自动化、科研计算、项目记忆和 AI 协作共同组成工作系统。"
        />
        <StackClusterMap clusters={stackClusters} />
      </Container>
    </section>
  );
}
