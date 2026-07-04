import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { heroProofItems } from "@/content/site";
import { reveal, stagger } from "@/lib/motion";

export function ProofStripSection() {
  return (
    <section aria-label="核心证据" className="relative z-10 -mt-10 pb-16 md:-mt-16 md:pb-20">
      <Container>
        <motion.div
          className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d1418]/92 shadow-glow backdrop-blur-xl md:grid-cols-4"
          variants={stagger}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {heroProofItems.map((item) => (
            <motion.div
              key={item.label}
              className="border-b border-white/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-6"
              {...reveal}
            >
              <p className="font-mono text-xl font-semibold text-accent-blue md:text-2xl">
                {item.value}
              </p>
              <h2 className="mt-3 text-base font-semibold text-text-primary">
                {item.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
