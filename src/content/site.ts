import type { NavItem } from "@/data/types";

export const navItems: NavItem[] = [
  { id: "profile", label: "履历" },
  { id: "phylotracer", label: "PhyloTracer" },
  { id: "research", label: "问题" },
  { id: "publications", label: "论文" },
  { id: "methods", label: "方法" },
  { id: "roadmap", label: "路线" },
  { id: "contact", label: "联系" },
];

export const hero = {
  eyebrow: "进化基因组学研究软件",
  title: "为进化基因组学构建可复现的研究软件。",
  description:
    "我是李涛，贵州大学作物学硕士研究生，研究方向为生物信息软件开发，关注系统发育基因组学中的可靠分析、可解释推断和可复现流程。",
  primaryAction: { label: "查看 PhyloTracer", href: "#phylotracer" },
  secondaryAction: { label: "GitHub", href: "https://github.com/YiyongZhao/PhyloTracer" },
};

export const about = {
  intro:
    "我关注进化基因组学、科研软件与可复现计算之间的交叉地带。",
  blocks: [
    {
      title: "我如何思考",
      body: "我喜欢把复杂、零散、依赖人工经验的科研流程，整理成清晰、可验证、可迭代的软件系统。",
    },
    {
      title: "我在构建什么",
      body: "我的重点是计算生物学流程、命令行工具、可复现分析，以及能让生物学证据更容易被检查的软件界面。",
    },
    {
      title: "长期方向",
      body: "我希望长期构建稳健、可复用、可验证的软件基础设施，让进化基因组学分析更可靠。",
    },
  ],
};

export const contact = {
  email: "l948777439@gmail.com",
  github: "https://github.com/YiyongZhao/PhyloTracer",
};
