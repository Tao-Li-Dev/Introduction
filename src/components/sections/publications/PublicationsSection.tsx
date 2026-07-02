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
          eyebrow="论文贡献"
          title="论文不是列表，而是问题来源。"
          description="每个研究项目都在提醒我：可靠的计算生物学软件必须保留分析来源、解释过程和复现路径。"
        />
        <div className="mt-12 grid gap-5">
          {publications.map((publication, index) => (
            <motion.article key={publication.title} {...reveal}>
              <GlassPanel className="grid gap-6 p-6 md:grid-cols-[0.1fr_1fr_0.28fr] md:p-7">
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
                  {publication.contribution ? (
                    <div className="mt-5">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-sm font-medium text-text-primary">我的贡献</p>
                        <p className="mt-2 text-sm leading-6 text-text-secondary">
                          {publication.contribution}
                        </p>
                        {publication.contributionItems?.length ? (
                          <ul className="mt-3 space-y-2 text-sm leading-6 text-text-secondary">
                            {publication.contributionItems.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
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
