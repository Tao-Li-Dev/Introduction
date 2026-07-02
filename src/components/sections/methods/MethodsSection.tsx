import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { methodClusters } from "@/content/methods";
import { reveal, stagger } from "@/lib/motion";

export function MethodsSection() {
  return (
    <section id="methods" className="py-24 md:py-32">
      <Container>
        <motion.div className="max-w-3xl" {...reveal}>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
            方法与工具。
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">
            工具按能力组织，而不是做成 logo 墙。重要的是每个工具如何支撑可靠的科学工作。
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {methodClusters.map((cluster) => (
            <motion.article key={cluster.name} {...reveal}>
              <GlassPanel className="h-full p-6 md:p-7">
                <h3 className="text-xl font-semibold">{cluster.name}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {cluster.description}
                </p>
                <div className="mt-6 grid gap-3">
                  {cluster.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-sm font-medium text-text-primary">{tool.name}</p>
                      <p className="mt-1 text-sm leading-6 text-text-secondary">{tool.use}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
