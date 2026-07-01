import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div className="max-w-3xl" {...reveal}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-accent-blue">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
