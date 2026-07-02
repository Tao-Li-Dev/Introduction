import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { capabilityItems, educationItems, practiceItems } from "@/content/profile";
import { reveal, stagger } from "@/lib/motion";

export function ProfileEvidenceSection() {
  return (
    <section id="profile" className="py-24 md:py-32">
      <Container>
        <motion.div className="max-w-3xl" {...reveal}>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
            教育背景与能力底座。
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">
            这里说明我的训练来源、技术基础和实践经历。每篇文章中的具体贡献放在论文区展开。
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassPanel className="p-6 md:p-8">
            <h3 className="text-xl font-semibold">教育背景</h3>
            <div className="mt-6 grid gap-5">
              {educationItems.map((item) => (
                <article key={`${item.degree}-${item.major}`} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-text-primary">
                        {item.school} · {item.degree}
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        {item.college} · {item.major}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-accent-blue">{item.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-text-secondary">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6 md:p-8">
            <h3 className="text-xl font-semibold">能力底座</h3>
            <motion.div
              className="mt-6 grid gap-3 sm:grid-cols-2"
              variants={stagger}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {capabilityItems.map((item) => (
                <motion.div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-text-secondary"
                  {...reveal}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </GlassPanel>
        </div>

        <GlassPanel className="mt-5 p-6 md:p-8">
          <h3 className="text-xl font-semibold">实践经历</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {practiceItems.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h4 className="text-base font-semibold text-text-primary">{item.title}</h4>
                  <span className="text-xs text-accent-blue">{item.meta}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-text-secondary">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </GlassPanel>
      </Container>
    </section>
  );
}
