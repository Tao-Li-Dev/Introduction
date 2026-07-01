import type { StackCluster } from "@/data/types";

export const stackClusters: StackCluster[] = [
  {
    name: "界面",
    description: "用产品化界面清晰表达复杂系统。",
    tools: ["React", "TypeScript", "Tailwind", "Vite", "Framer Motion"],
  },
  {
    name: "自动化",
    description: "AI 辅助工作流、浏览器自动化和代码仓库自动化。",
    tools: ["MCP", "Codex", "Claude Code", "Cursor", "GitHub Actions", "Playwright"],
  },
  {
    name: "科研计算",
    description: "支撑生物学分析的计算和工程层。",
    tools: ["Python", "FastAPI", "Nextflow", "Docker"],
  },
];
