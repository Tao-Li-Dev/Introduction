import { motion } from "framer-motion";
import type { ResearchTopic } from "@/data/types";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { reveal } from "@/lib/motion";

type ResearchTimelineProps = {
  topics: ResearchTopic[];
};

export function ResearchTimeline({ topics }: ResearchTimelineProps) {
  return (
    <div className="relative mt-12">
      <div className="absolute left-3 top-3 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-accent-line via-white/15 to-transparent md:block" />
      <div className="space-y-5">
        {topics.map((topic) => (
          <motion.div key={topic.title} className="relative md:pl-12" {...reveal}>
            <span className="absolute left-0 top-10 hidden h-6 w-6 rounded-full border border-accent-line bg-bg-elevated md:block" />
            <GlassPanel className="p-6 md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-blue">
                {topic.year}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{topic.title}</h3>
              <p className="mt-4 text-base leading-8 text-text-secondary">
                {topic.description}
              </p>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
