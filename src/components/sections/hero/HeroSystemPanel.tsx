import { GlassPanel } from "@/components/ui/GlassPanel";

const profileTags = [
  "系统发育基因组学",
  "直系同源推断",
  "可复现计算",
];

export function HeroSystemPanel() {
  return (
    <GlassPanel className="relative overflow-hidden rounded-[28px] p-5 md:p-6">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-blue">
          Graduate Student
        </p>
        <div className="mt-4 flex items-end justify-between gap-5">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-text-primary">
              李涛
            </h2>
            <p className="mt-2 max-w-[18rem] text-sm leading-6 text-text-secondary">
              作物学专业，研究方向为生物信息软件开发。
            </p>
          </div>
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] font-mono text-sm text-accent-blue sm:flex">
            LT
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {profileTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}
