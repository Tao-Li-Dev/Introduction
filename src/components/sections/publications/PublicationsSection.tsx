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
          title="每篇论文都对应一次具体的分析任务。"
          description="这里不只列题名，而是说明我在项目中承担了什么数据、方法和结果贡献。"
        />
        <div className="mt-12 grid gap-6">
          {publications.map((publication, index) => (
            <motion.article key={publication.title} {...reveal}>
              <GlassPanel className="overflow-hidden p-0">
                <div className="grid gap-0 lg:grid-cols-[0.22fr_0.78fr]">
                  <aside className="border-b border-white/10 bg-white/[0.035] p-6 lg:border-b-0 lg:border-r lg:p-7">
                    <p className="font-mono text-sm text-accent-blue">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:items-start">
                      <Tag>{publication.venue}</Tag>
                      <Tag>{publication.role}</Tag>
                      {publication.status ? <Tag>{publication.status}</Tag> : null}
                    </div>
                    {publication.doi ? (
                      <a
                        href={publication.doi}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-accent-line/50 bg-accent-blue/10 px-3 py-1.5 text-xs font-medium text-accent-blue transition-colors hover:bg-accent-blue/20"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        原文链接
                      </a>
                    ) : null}
                  </aside>

                  <div className="p-6 md:p-8">
                    <h3 className="max-w-4xl text-xl font-semibold leading-snug text-text-primary md:text-2xl">
                      {publication.title}
                    </h3>
                    <p className="mt-4 max-w-4xl text-base leading-8 text-text-secondary">
                      {publication.description}
                    </p>

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                      <ContributionBlock label="文章问题" body={publication.problem} />
                      <ContributionBlock label="我的任务" body={publication.task} />
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-sm font-medium text-text-primary">方法工具</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {publication.methods.map((method) => (
                            <Tag key={method}>{method}</Tag>
                          ))}
                        </div>
                      </div>
                      <ContributionBlock label="贡献结果" body={publication.result} />
                    </div>

                    {publication.contributionItems?.length ? (
                      <div className="mt-5 rounded-[1.25rem] border border-accent-line/35 bg-accent-blue/10 p-4">
                        <p className="text-sm font-medium text-text-primary">具体贡献</p>
                        <ul className="mt-3 grid gap-2 text-sm leading-6 text-text-secondary md:grid-cols-2">
                          {publication.contributionItems.map((item) => (
                            <li key={item} className="pl-3 before:-ml-3 before:mr-2 before:text-accent-blue before:content-['•']">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </GlassPanel>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContributionBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
      <p className="text-sm font-medium text-text-primary">{label}</p>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{body}</p>
    </div>
  );
}
