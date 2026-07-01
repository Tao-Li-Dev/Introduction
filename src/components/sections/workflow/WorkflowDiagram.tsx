import { motion } from "framer-motion";
import type { WorkflowStep } from "@/data/types";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { reveal } from "@/lib/motion";

type WorkflowDiagramProps = {
  steps: WorkflowStep[];
};

export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  return (
    <div className="mt-12">
      <GlassPanel className="overflow-hidden p-6 md:p-8">
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
              {...reveal}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-line to-transparent" />
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-line bg-accent-blue/10 text-sm font-medium text-accent-blue">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-text-secondary">{step.detail}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -bottom-4 left-8 right-8 flex justify-center">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="text-text-muted">
                    <path d="M10 0V12M10 12L5 7M10 12L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
