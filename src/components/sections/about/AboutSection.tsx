import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/content/site";
import { stagger, reveal } from "@/lib/motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="关于"
          title="用产品思维做研究工程。"
          description={about.intro}
        />
        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          variants={stagger}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {about.blocks.map((block) => (
            <motion.div key={block.title} {...reveal}>
              <GlassPanel className="h-full p-6 md:p-7">
                <h3 className="text-xl font-semibold">{block.title}</h3>
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  {block.body}
                </p>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
