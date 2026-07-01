import { motion } from "framer-motion";
import type { StackCluster } from "@/data/types";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Tag } from "@/components/ui/Tag";
import { reveal } from "@/lib/motion";

type StackClusterMapProps = {
  clusters: StackCluster[];
};

export function StackClusterMap({ clusters }: StackClusterMapProps) {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {clusters.map((cluster) => (
        <motion.div key={cluster.name} {...reveal}>
          <GlassPanel className="h-full p-6 md:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-blue">
              {cluster.name}
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              {cluster.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cluster.tools.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      ))}
    </div>
  );
}
