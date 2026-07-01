import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { publications } from "@/content/publications";
import { reveal } from "@/lib/motion";

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="参与发表文章"
          title="科研成果不是列表，而是我构建工具的真实问题来源。"
          description="这些工作覆盖比较基因组学、转录组学、多组学、作物进化与适应性机制，也塑造了我对科研软件和 AI 工作流的判断。"
        />
        <div className="mt-12 grid gap-5">
          {publications.map((publication, index) => (
            <motion.article key={publication.title} {...reveal}>
              <GlassPanel className="grid gap-6 p-6 md:grid-cols-[0.12fr_1fr_0.28fr] md:p-7">
                <div className="font-mono text-sm text-accent-blue">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                    {publication.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-text-secondary">
                    {publication.description}
                  </p>
                </div>
                <div className="flex flex-wrap content-start gap-2 md:justify-end">
                  <Tag>{publication.venue}</Tag>
                  <Tag>{publication.role}</Tag>
                  {publication.status ? <Tag>{publication.status}</Tag> : null}
                  {publication.doi && (
                    <a
                      href={publication.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-accent-line/50 bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue transition-colors hover:bg-accent-blue/20"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View
                    </a>
                  )}
                </div>
              </GlassPanel>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
