import { ArrowRight, ExternalLink, FolderTree, Network, TerminalSquare } from "lucide-react";
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

const caseFacts = [
  { label: "项目定位", value: "研究软件工具包" },
  { label: "核心对象", value: "基因树与直系同源关系" },
  { label: "工作方式", value: "CLI + 批处理 + 可视化" },
];

export function PhyloTracerCaseSection() {
  return (
    <section id="phylotracer" className="py-24 md:py-32">
      <Container>
        <motion.div className="max-w-4xl" {...reveal}>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
            PhyloTracer 是这个作品集的主案例。
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-text-secondary md:text-lg">
            它说明我如何把系统发育基因组学中的树分析、直系同源推断和结果检查整理成可复现的软件流程。
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassPanel className="overflow-hidden p-0">
            <div className="border-b border-white/10 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-sm text-accent-blue">CASE STUDY / RESEARCH SOFTWARE</p>
                  <h3 className="mt-4 text-3xl font-semibold md:text-4xl">{phylotracerCase.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
                    {phylotracerCase.subtitle}
                  </p>
                </div>
                <Button href={contact.github} variant="secondary" target="_blank" rel="noreferrer">
                  GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {caseFacts.map((fact) => (
                  <div key={fact.label} className="border-t border-white/10 pt-4">
                    <p className="text-xs text-text-muted">{fact.label}</p>
                    <p className="mt-2 text-sm font-medium text-text-primary">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <CaseTextBlock title="研究问题" body={phylotracerCase.researchProblem} />
              <CaseTextBlock title="构建动机" body={phylotracerCase.motivation} />
            </div>
          </GlassPanel>

          <GlassPanel className="flex h-full flex-col justify-between p-6 md:p-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-line/40 bg-accent-blue/10 text-accent-blue">
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">生物学意义</h3>
                  <p className="mt-1 text-sm text-text-muted">从计算输出回到进化解释</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-text-secondary">
                {phylotracerCase.biologicalContribution}
              </p>
            </div>
            <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-medium text-text-primary">我的角色</p>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                从算法逻辑、模块边界、命令行工作流到可视化和验证策略，负责把研究问题落成可运行的软件结构。
              </p>
            </div>
          </GlassPanel>
        </div>

        <GlassPanel className="mt-5 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">分析流程</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                把输入、树分析、事件检测和输出检查放在同一条可复查路径上。
              </p>
            </div>
            <FolderTree className="h-6 w-6 text-accent-blue" />
          </div>
          <div className="mt-7 flex flex-col lg:flex-row lg:items-stretch">
            {phylotracerPipeline.map((step, index) => (
              <div key={step} className="contents">
                <div className="min-h-[5.9rem] flex-1 rounded-[1.1rem] border border-white/10 bg-white/[0.045] p-4 transition-colors duration-300 hover:border-accent-line/45 hover:bg-white/[0.065] lg:min-w-0">
                  <p className="font-mono text-xs text-accent-blue">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-5 text-text-primary">
                    {step}
                  </p>
                </div>
                {index < phylotracerPipeline.length - 1 ? (
                  <div
                    className="relative flex h-9 items-center justify-center lg:h-auto lg:w-8 lg:shrink-0"
                    aria-hidden="true"
                  >
                    <span className="absolute h-full w-px bg-accent-line/25 lg:h-px lg:w-full" />
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-accent-line/35 bg-[#101821] text-accent-blue shadow-[0_0_18px_rgba(94,162,255,0.12)]">
                      <ArrowRight className="h-3.5 w-3.5 rotate-90 lg:rotate-0" />
                    </span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </GlassPanel>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <GlassPanel className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-line/40 bg-accent-blue/10 text-accent-blue">
                <TerminalSquare className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">CLI 示例</h3>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-[1.25rem] border border-white/10 bg-[#06090d] p-5 text-sm leading-7 text-text-primary">
              <code>{phylotracerCase.cliExample}</code>
            </pre>
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
          </GlassPanel>

          <GlassPanel className="p-6 md:p-8">
            <h3 className="text-xl font-semibold">功能模块</h3>
            <motion.div
              className="mt-6 grid gap-4 md:grid-cols-2"
              variants={stagger}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {phylotracerFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
                  {...reveal}
                >
                  <p className="font-medium text-text-primary">{feature.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </GlassPanel>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassPanel className="p-6 md:p-8">
            <h3 className="text-xl font-semibold">我的贡献</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
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

          <GlassPanel className="p-6 md:p-8">
            <h3 className="text-xl font-semibold">证据槽</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">
              不伪造运行截图。后续拿到真实命令行、树可视化、输出目录、生成图和统计表后，直接替换这些位置。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {phylotracerEvidence.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.1rem] border border-dashed border-accent-line/35 bg-accent-blue/[0.06] p-4"
                >
                  <p className="font-medium text-text-primary">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </Container>
    </section>
  );
}

function CaseTextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8">
      <p className="text-sm font-medium text-text-primary">{title}</p>
      <p className="mt-3 text-sm leading-7 text-text-secondary">{body}</p>
    </div>
  );
}
