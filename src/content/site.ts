import type { NavItem } from "@/data/types";

export const navItems: NavItem[] = [
  { id: "about", label: "关于" },
  { id: "projects", label: "项目" },
  { id: "publications", label: "论文" },
  { id: "research", label: "研究" },
  { id: "contact", label: "联系" },
];

export const hero = {
  eyebrow: "AI × 计算生物学",
  title: "为计算生物学构建 AI 工具。",
  description:
    "我设计并开发 AI 原生的科研软件、自动化工作流与生物信息学工具，让复杂的生物学分析更清晰、更可复现，也更容易规模化。",
  primaryAction: { label: "查看项目", href: "#projects" },
  secondaryAction: { label: "GitHub", href: "https://github.com/YiyongZhao/PhyloTracer" },
  tertiaryAction: { label: "联系我", href: "#contact" },
};

export const about = {
  intro:
    "我关注科学软件、AI 系统与研究工程之间的交叉地带。",
  blocks: [
    {
      title: "我如何思考",
      body: "我喜欢把复杂、零散、依赖人工经验的科研流程，整理成清晰、可验证、可迭代的软件系统。",
    },
    {
      title: "我在构建什么",
      body: "我的重点是 AI 辅助科研工具、计算生物学流程、自动化系统，以及能让技术深度更容易被理解的交互界面。",
    },
    {
      title: "长期方向",
      body: "我希望参与定义下一代科研软件：既有生物学严谨性，也有工程可维护性，并且能与长期记忆型 AI 协作。",
    },
  ],
};

export const contact = {
  email: "l948777439@gmail.com",
  github: "https://github.com/YiyongZhao/PhyloTracer",
};
