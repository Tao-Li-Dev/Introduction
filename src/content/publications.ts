import type { Publication } from "@/data/types";

export const publications: Publication[] = [
  {
    title: "PhyloTracer: A Versatile Toolkit for Comparative Genomics and Phylogenomics Analysis.",
    venue: "在投",
    role: "First Author",
    status: "软件论文",
    description:
      "一个面向比较基因组学和系统发育基因组学的工具包，支持基因树定根、基因重复事件起源与丢失、直系同源物检索、系统发育噪声消除、基因树拓扑摘要、物种杂交检测与可视化。",
  },
  {
    title:
      "The origin and evolution of cultivated rice and genomic signatures of heterosis for yield traits in super-hybrid rice",
    venue: "BMC Biology",
    role: "Co-Author",
    doi: "https://doi.org/10.1186/s12915-025-02255-2",
    description:
      "探讨水稻的起源、进化以及杂交优势相关的基因组特征，为超级杂交稻产量性状研究提供基因组学证据。",
  },
  {
    title:
      "Transcriptome-based variations effectively untangling the intraspecific relationships and selection signals in Xinyang Maojian tea population",
    venue: "Frontiers in Plant Science",
    role: "Co-Author",
    doi: "https://doi.org/10.3389/fpls.2023.1114284",
    description:
      "基于转录组变异揭示信阳毛尖茶群体内在物种关系与选择信号，为茶树育种和种质研究提供参考。",
  },
  {
    title:
      "Comparative transcriptomic and proteomic analyses of hypoxia response in wild and cultivated tomato roots",
    venue: "BMC Genomics",
    role: "Co-Author",
    doi: "https://link.springer.com/article/10.1186/s12864-025-11653-3",
    description:
      "比较分析野生与栽培番茄根部对低氧响应的转录组与蛋白质组，揭示其适应性机制。",
  },
];
