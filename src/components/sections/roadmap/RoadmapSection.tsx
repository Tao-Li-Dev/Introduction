import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { roadmapItems } from "@/content/methods";
import { reveal } from "@/lib/motion";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 md:py-32">
      <Container>
        <motion.div className="max-w-3xl" {...reveal}>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
            当前路线图。
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">
            当前开发重点是让 PhyloTracer 更容易复用、更容易验证，也更容易被其他研究者理解。
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4">
          {roadmapItems.map((item) => (
            <motion.article key={item.title} {...reveal}>
              <GlassPanel className="grid gap-4 p-5 md:grid-cols-[0.18fr_0.34fr_1fr] md:items-start md:p-6">
                <span className="w-fit rounded-full border border-accent-line/50 bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue">
                  {item.status}
                </span>
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-7 text-text-secondary">{item.description}</p>
              </GlassPanel>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
