import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { reveal } from "@/lib/motion";

type CompactProjectCardProps = {
  project: Project;
};

export function CompactProjectCard({ project }: CompactProjectCardProps) {
  return (
    <motion.div {...reveal}>
      <GlassPanel className="group flex h-full flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-blue">
              {project.status}
            </p>
            <ArrowUpRight className="h-4 w-4 text-text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue" />
          </div>
          <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm leading-7 text-text-secondary">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue transition-colors hover:underline"
        >
          GitHub <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </GlassPanel>
    </motion.div>
  );
}
