import type { HeroProofItem, NavItem } from "@/data/types";

export const navItems: NavItem[] = [
  { id: "profile", label: "履历" },
  { id: "phylotracer", label: "PhyloTracer" },
  { id: "research", label: "问题" },
  { id: "publications", label: "论文贡献" },
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

export const heroProofItems: HeroProofItem[] = [
  {
    value: "30,000+",
    label: "基因树批量分析",
    detail: "面向系统发育基因组学中的规模化树分析与结果整理。",
  },
  {
    value: "17",
    label: "PhyloTracer 模块",
    detail: "覆盖定根、拓扑距离、复制/丢失、直系同源检索、杂交检测与可视化。",
  },
  {
    value: "First Author",
    label: "软件论文",
    detail: "以 PhyloTracer 为核心，整理方法、实现、验证和文档。",
  },
  {
    value: "Crop Science",
    label: "作物学硕士",
    detail: "研究方向聚焦生物信息软件开发和可复现分析流程。",
  },
];


export const contact = {
  email: "l948777439@gmail.com",
  github: "https://github.com/YiyongZhao/PhyloTracer",
};
