import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WorkflowDiagram } from "@/components/sections/workflow/WorkflowDiagram";
import { workflowSteps } from "@/content/workflow";

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="AI 工作流"
          title="AI 应该嵌入科研循环，而不是最后才被调用。"
          description="每个阶段都会为下一个阶段创造上下文，目标是形成同时提升代码质量和科学有效性的反馈回路。"
        />
        <WorkflowDiagram steps={workflowSteps} />
      </Container>
    </section>
  );
}
