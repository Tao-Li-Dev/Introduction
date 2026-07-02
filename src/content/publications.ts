import type { Publication } from "@/data/types";

export const publications: Publication[] = [
  {
    title: "PhyloTracer: A Versatile Toolkit for Comparative Genomics and Phylogenomics Analysis.",
    venue: "在投",
    role: "First Author",
    status: "软件论文",
    description:
      "一个面向比较基因组学和系统发育基因组学的工具包，支持基因树定根、基因重复事件起源与丢失、直系同源物检索、系统发育噪声消除、基因树拓扑摘要、物种杂交检测与可视化。",
    contribution:
      "负责软件架构、命令行工作流、核心模块、可视化流程、文档和生物学验证策略设计。",
    contributionItems: [
      "设计并实现基因树定根算法，结合拓扑结构与物种树信息优化定根准确性。",
      "构建 16+ 模块系统发育分析流程，覆盖基因复制/丢失检测、直系同源序列提取、杂交与基因渐渗信号检测。",
      "实现大规模数据自动化处理，面向 30,000+ 基因树的批量分析与结果整理。",
      "基于 Python 与 ETE3 构建树结构分析和可视化模块。",
    ],
  },
  {
    title:
      "The origin and evolution of cultivated rice and genomic signatures of heterosis for yield traits in super-hybrid rice",
    venue: "BMC Biology",
    role: "Co-Author",
    doi: "https://doi.org/10.1186/s12915-025-02255-2",
    description:
      "探讨水稻的起源、进化以及杂交优势相关的基因组特征，为超级杂交稻产量性状研究提供基因组学证据。",
    contribution:
      "参与比较基因组学分析、数据处理和进化信号解释。",
    contributionItems: [
      "参与 33 个水稻基因组及 39,000+ 基因树的系统发育分析。",
      "结合群体基因组与表达数据，参与解析杂交优势形成机制。",
      "参与多组学数据整合，协助挖掘与产量性状相关的候选基因。",
    ],
  },
  {
    title:
      "Transcriptome-based variations effectively untangling the intraspecific relationships and selection signals in Xinyang Maojian tea population",
    venue: "Frontiers in Plant Science",
    role: "Co-Author",
    doi: "https://doi.org/10.3389/fpls.2023.1114284",
    description:
      "基于转录组变异揭示信阳毛尖茶群体内在物种关系与选择信号，为茶树育种和种质研究提供参考。",
    contribution:
      "参与转录组数据分析、群体关系解释和结果可视化。",
    contributionItems: [
      "基于 RNA-seq 数据分析群体内遗传结构与选择信号。",
      "构建变异数据集并进行群体层面统计分析。",
      "将转录组分析结果连接到茶树育种和种质资源解释。",
    ],
  },
  {
    title:
      "Comparative transcriptomic and proteomic analyses of hypoxia response in wild and cultivated tomato roots",
    venue: "BMC Genomics",
    role: "Co-Author",
    doi: "https://link.springer.com/article/10.1186/s12864-025-11653-3",
    description:
      "比较分析野生与栽培番茄根部对低氧响应的转录组与蛋白质组，揭示其适应性机制。",
    contribution:
      "参与多组学数据处理和低氧响应信号的比较解释。",
    contributionItems: [
      "参与转录组与蛋白组联合分析。",
      "比较野生与栽培番茄材料之间的低氧响应差异。",
      "协助解释应答差异背后的潜在调控机制。",
    ],
  },
];
