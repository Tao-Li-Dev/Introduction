import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeaturedProjectCard } from "@/components/sections/projects/FeaturedProjectCard";
import { CompactProjectCard } from "@/components/sections/projects/CompactProjectCard";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="核心项目"
          title="核心项目是这个网站的中心。"
          description="这些项目体现了我如何做科研软件：先明确问题，再构建工具，同时保留生物学解释、工程扩展和 AI 协作的空间。"
        />
        <div className="mt-12 space-y-6">
          {featured && <FeaturedProjectCard key={featured.slug} project={featured} />}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <CompactProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
