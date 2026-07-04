import type { Publication } from "@/data/types";

export const publications: Publication[] = [
  {
    title: "PhyloTracer: A Versatile Toolkit for Comparative Genomics and Phylogenomics Analysis.",
    venue: "在投",
    role: "First Author",
    status: "软件论文",
    description:
      "一个面向比较基因组学和系统发育基因组学的工具包，支持基因树定根、基因重复事件起源与丢失、直系同源物检索、系统发育噪声消除、基因树拓扑摘要、物种杂交检测与可视化。",
    problem:
      "规模化系统发育基因组学分析需要处理大量基因树，但定根、拓扑冲突、重复/丢失事件和人工整理会影响结果可解释性。",
    task:
      "把分散的树分析步骤整理为可重复运行的命令行工具包，并为不同模块建立稳定的输入输出约定。",
    methods: ["Python", "ETE3", "CLI workflow", "gene tree analysis", "batch processing"],
    result:
      "形成 16+ 模块的软件流程，支持 30,000+ 基因树批量分析、结果整理和可视化检查。",
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
    problem:
      "水稻起源、驯化和超级杂交稻产量性状需要结合比较基因组、群体信号和表达数据共同解释。",
    task:
      "参与比较基因组学和系统发育分析，协助整理大规模基因树结果并连接到进化信号解释。",
    methods: ["comparative genomics", "gene trees", "population genomics", "expression integration"],
    result:
      "参与 33 个水稻基因组和 39,000+ 基因树分析，协助支持起源进化与杂交优势相关结论。",
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
    problem:
      "信阳毛尖茶群体内部关系和选择信号需要从 RNA-seq 变异数据中提取可解释证据。",
    task:
      "参与转录组变异数据分析、群体关系解释和结果可视化整理。",
    methods: ["RNA-seq", "variant analysis", "population structure", "selection signal"],
    result:
      "协助构建群体层面分析结果，并把转录组变异证据连接到茶树种质资源解释。",
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
    problem:
      "野生与栽培番茄根系在低氧胁迫下的响应差异需要通过转录组和蛋白质组共同解释。",
    task:
      "参与多组学数据处理，比较材料间低氧响应差异，并协助整理潜在调控信号。",
    methods: ["transcriptomics", "proteomics", "comparative analysis", "stress response"],
    result:
      "协助形成野生与栽培番茄低氧响应差异的多组学证据链。",
    contribution:
      "参与多组学数据处理和低氧响应信号的比较解释。",
    contributionItems: [
      "参与转录组与蛋白组联合分析。",
      "比较野生与栽培番茄材料之间的低氧响应差异。",
      "协助解释应答差异背后的潜在调控机制。",
    ],
  },
];
