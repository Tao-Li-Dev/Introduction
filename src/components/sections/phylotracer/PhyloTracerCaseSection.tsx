import { ArrowDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import {
  phylotracerCase,
  phylotracerContributions,
  phylotracerEvidence,
  phylotracerFeatures,
  phylotracerIO,
  phylotracerPipeline,
} from "@/content/phylotracer";
import { contact } from "@/content/site";
import { reveal, stagger } from "@/lib/motion";

export function PhyloTracerCaseSection() {
  return (
    <section id="phylotracer" className="py-24 md:py-32">
      <Container>
        <motion.div className="max-w-4xl" {...reveal}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-accent-blue">
            Flagship Project
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
            PhyloTracer 是这个主页的核心案例。
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">
            这个项目最能说明我如何把系统发育基因组学问题转化为可复现、可检查的软件流程。
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassPanel className="p-6 md:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-3xl font-semibold">{phylotracerCase.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
                  {phylotracerCase.subtitle}
                </p>
              </div>
              <Button href={contact.github} variant="secondary" target="_blank" rel="noreferrer">
                GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <EvidenceBlock title="研究问题" body={phylotracerCase.researchProblem} />
              <EvidenceBlock title="构建动机" body={phylotracerCase.motivation} />
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#070a0f] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-blue">
                CLI 示例
              </p>
              <pre className="mt-4 overflow-x-auto whitespace-pre text-sm leading-7 text-text-primary">
                <code>{phylotracerCase.cliExample}</code>
              </pre>
            </div>
          </GlassPanel>

          <GlassPanel className="p-6 md:p-8">
            <h3 className="text-xl font-semibold">流程图</h3>
            <div className="mt-6 grid gap-3">
              {phylotracerPipeline.map((step, index) => (
                <div key={step}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-sm font-medium text-text-primary">{step}</p>
                  </div>
                  {index < phylotracerPipeline.length - 1 ? (
                    <ArrowDown className="mx-auto my-2 h-4 w-4 text-text-muted" />
                  ) : null}
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <motion.div
          className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
          variants={stagger}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div {...reveal}>
            <GlassPanel className="h-full p-6 md:p-8">
              <h3 className="text-xl font-semibold">输入与输出</h3>
              <div className="mt-6 grid gap-5">
                {phylotracerIO.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-medium text-text-primary">{group.label}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-accent-line/40 bg-accent-blue/10 p-5">
                <p className="text-sm font-medium text-text-primary">生物学意义</p>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {phylotracerCase.biologicalContribution}
                </p>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div {...reveal}>
            <GlassPanel className="h-full p-6 md:p-8">
              <h3 className="text-xl font-semibold">功能模块</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {phylotracerFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-medium text-text-primary">{feature.title}</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </motion.div>

        <GlassPanel className="mt-5 p-6 md:p-8">
          <h3 className="text-xl font-semibold">我的贡献</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {phylotracerContributions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-text-secondary"
              >
                {item}
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="mt-5 p-6 md:p-8">
          <h3 className="text-xl font-semibold">证据槽</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">
            这里不伪造截图。后续拿到真实命令行、树可视化、输出目录、生成图和统计表后，可以直接替换这些位置。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {phylotracerEvidence.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="font-medium text-text-primary">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </Container>
    </section>
  );
}

function EvidenceBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-medium text-text-primary">{title}</p>
      <p className="mt-3 text-sm leading-7 text-text-secondary">{body}</p>
    </div>
  );
}
