import type { Project } from "@/data/types";

export const projects: Project[] = [
  {
    slug: "phylotracer",
    title: "PhyloTracer",
    summary: "面向比较基因组学和系统发育基因组学分析的工具包。",
    problem:
      "当数据规模、基因树逻辑和人工检查同时增长时，系统发育分析很容易变得难以复现和难以解释。",
    status: "持续开发",
    stack: ["Python", "TypeScript", "FastAPI", "Docker", "Nextflow"],
    detail:
      "目标是让进化分析流程更可检查、可复现、可扩展，并为未来 AI 辅助分析留下接口。",
    github: "https://github.com/YiyongZhao/PhyloTracer",
    image: "/images/projects/phylotracer.svg",
  },
  {
    slug: "haplofinder",
    title: "HaploFinder",
    summary: "面向单倍型分析与生物学解释的软件层。",
    problem:
      "许多序列分析流程会直接输出技术结果，但缺少面向研究解释的结构化表达。",
    status: "原型阶段",
    stack: ["Python", "Bioinformatics", "CLI", "Data Pipelines"],
    detail:
      "希望把原始计算结果转化为更容易进入科研判断的生物学线索。",
    github: "https://github.com/YiyongZhao/PhyloTracer",
    image: "/images/projects/haplofinder.svg",
  },
  {
    slug: "ai-workspace",
    title: "AI Workspace",
    summary: "用于规划、编码、记录和迭代科研软件的 AI 原生工作空间。",
    problem:
      "科研工程常常分散在笔记、脚本、提示词、文档和实验结果之间，项目上下文很容易断裂。",
    status: "设计中",
    stack: ["React", "TypeScript", "MCP", "Codex", "Claude Code"],
    detail:
      "探索如何把记忆、工具调用和项目上下文变成科学软件开发中的一等公民。",
    github: "https://github.com/YiyongZhao/PhyloTracer",
    image: "/images/projects/ai-workspace.svg",
  },
  {
    slug: "browser-job-agent",
    title: "Browser Job Agent",
    summary: "用于重复网页任务、监控和结构化提取的浏览器智能体。",
    problem:
      "很多有价值的工作仍然停留在网页界面里，人工重复操作会浪费大量注意力。",
    status: "实验项目",
    stack: ["Playwright", "TypeScript", "Agents", "Automation"],
    detail:
      "作为迈向真实可用智能体的一步，关注跨工具、跨界面的稳定执行能力。",
    github: "https://github.com/YiyongZhao/PhyloTracer",
    image: "/images/projects/browser-job-agent.svg",
  },
  {
    slug: "future-ai-agents",
    title: "Future AI Agents",
    summary: "面向科研和软件创造的长期上下文 AI 系统项目轨道。",
    problem:
      "多数 AI 智能体仍然容易丢失上下文，缺少严肃技术工作所需的记忆和流程 grounding。",
    status: "研究方向",
    stack: ["MCP", "Memory Systems", "Tooling", "Evaluation"],
    detail:
      "这个项目空间用于探索能支持长周期技术思考的智能体架构。",
    github: "https://github.com/YiyongZhao/PhyloTracer",
    image: "/images/projects/future-ai-agents.svg",
  },
];
