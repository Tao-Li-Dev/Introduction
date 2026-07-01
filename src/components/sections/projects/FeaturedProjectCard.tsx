import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/types";
import { BorderGlow } from "@/components/ui/BorderGlow";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { reveal } from "@/lib/motion";

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div {...reveal}>
      <BorderGlow
        className="group transition-transform duration-300 hover:-translate-y-1"
        edgeSensitivity={34}
        glowColor="213 100 72"
        backgroundColor="#0d1218"
        borderRadius={28}
        glowRadius={30}
        glowIntensity={0.68}
        coneSpread={22}
        colors={["#5ea2ff", "#b9d8ff", "#6ee7f9"]}
        fillOpacity={0.18}
      >
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-blue">
                  {project.status}
                </p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{project.title}</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue" />
            </div>
            <p className="mt-5 text-lg leading-8 text-text-secondary">{project.summary}</p>
            <div className="mt-6">
              <p className="text-sm font-medium text-text-primary">问题</p>
              <p className="mt-2 text-base leading-8 text-text-secondary">{project.problem}</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-text-primary">方向</p>
              <p className="mt-2 text-base leading-8 text-text-secondary">{project.detail}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={project.github} variant="secondary" target="_blank" rel="noreferrer">
                GitHub
              </Button>
              <Button href={project.github} variant="ghost" target="_blank" rel="noreferrer">
                详情
              </Button>
            </div>
          </div>
          <div className="flex min-h-[280px] items-end">
            <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-2xl shadow-black/20">
              <img
                src={project.image}
                alt={`${project.title} project visual`}
                loading="lazy"
                className="h-full min-h-[260px] w-full rounded-[1.35rem] object-contain bg-[#0a0d12] p-3 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}
