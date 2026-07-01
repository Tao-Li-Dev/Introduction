import { GlassPanel } from "@/components/ui/GlassPanel";

const pipelineSteps = [
  { label: "基因树", color: "from-accent-blue/20 to-transparent" },
  { label: "定根", color: "from-accent-line/20 to-transparent" },
  { label: "OrthoFilter", color: "from-accent-blue/20 to-transparent" },
  { label: "GD/Loss", color: "from-accent-line/20 to-transparent" },
  { label: "Hybrid", color: "from-accent-blue/20 to-transparent" },
  { label: "物种树", color: "from-accent-line/20 to-transparent" },
];

export function HeroSystemPanel() {
  return (
    <GlassPanel className="relative overflow-hidden p-6">
      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-blue">
              PhyloTracer Pipeline
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              从基因树到物种树的完整分析流程。
            </p>
          </div>
          <span className="rounded-full border border-accent-line px-3 py-1 text-xs text-accent-blue">
            17 Modules
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {pipelineSteps.map((step, i) => (
            <div key={step.label} className="flex items-center shrink-0">
              <div
                className={`rounded-xl border border-white/10 bg-gradient-to-br ${step.color} px-4 py-3 text-sm text-text-primary transition-transform duration-300 hover:-translate-y-1`}
              >
                {step.label}
              </div>
              {i < pipelineSteps.length - 1 && (
                <ArrowIcon />
              )}
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-text-muted shrink-0">
      <path d="M4 6H16M16 6L11 2M16 6L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
