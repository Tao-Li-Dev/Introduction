import type { PhyloTracerFeature, PhyloTracerIO } from "@/data/types";

export const phylotracerCase = {
  title: "PhyloTracer",
  subtitle: "面向比较基因组学与系统发育基因组学分析的研究软件工具包。",
  researchProblem:
    "系统发育基因组学分析依赖大量基因树，但基因树在规模化分析中并不天然可靠。它们可能包含基因重复、基因丢失、定根不确定性、拓扑冲突和数据噪声。当真实进化事件与数据质量问题混在一起时，直系同源推断就很难解释。",
  motivation:
    "PhyloTracer 面向需要批量检查基因进化关系的研究者。它试图减少人工脚本拼接、手动检查和结果整理带来的不确定性，把树分析流程做成可复现、可追踪、可解释的软件工作流。",
  biologicalContribution:
    "它的生物学意义在于：直系同源关系、基因重复事件和拓扑模式会直接影响研究者如何解释基因组进化。更清晰的流程可以帮助区分稳定的进化信号与分析伪影。",
  cliExample: `phylotracer analyze \\
  --tree gene.tree \\
  --species species.tree \\
  --orthogroups orthogroups.tsv \\
  --output results/`,
};

export const phylotracerPipeline = [
  "输入数据",
  "数据处理",
  "树分析",
  "直系同源推断",
  "进化事件检测",
  "可视化",
  "最终输出",
];

export const phylotracerFeatures: PhyloTracerFeature[] = [
  {
    title: "Gene tree parsing",
    description:
      "读取并整理基因树文件，让下游模块可以稳定检查拓扑、标签和进化结构。",
  },
  {
    title: "Orthology tracing",
    description:
      "追踪跨物种基因关系，并保留解释直系同源与旁系同源关系所需的中间证据。",
  },
  {
    title: "Duplication and loss detection",
    description:
      "识别基因重复与丢失模式，用于解释基因树与物种历史之间的冲突。",
  },
  {
    title: "Topology inspection",
    description:
      "汇总树结构，让大量基因之间的拓扑差异更容易比较和检查。",
  },
  {
    title: "Visualization",
    description:
      "生成图形和注释结果，把计算输出连接到可解释的生物学判断。",
  },
  {
    title: "Batch processing",
    description:
      "用一致的输出结构批量处理多个输入，让结果更容易复现、审计和复查。",
  },
  {
    title: "Reproducibility",
    description:
      "通过明确输入、参数和输出目录结构，降低隐藏本地状态对分析结果的影响。",
  },
  {
    title: "Pipeline integration",
    description:
      "把模块组织成可嵌入更大分析流程的单元，方便后续接入自动化和 benchmark。",
  },
];

export const phylotracerIO: PhyloTracerIO[] = [
  {
    label: "输入",
    items: ["基因树", "物种树", "序列数据", "Orthogroups"],
  },
  {
    label: "输出",
    items: [
      "进化事件",
      "同源关系",
      "注释树",
      "统计结果",
      "图形",
      "报告",
    ],
  },
];

export const phylotracerContributions = [
  "算法设计与分析逻辑整理",
  "软件架构和模块边界设计",
  "命令行工作流与输出目录组织",
  "基因树和系统发育基因组学分析模块",
  "用于结果检查的可视化流程",
  "测试、文档和可复现使用示例",
  "中间结果的生物学验证",
];

export const phylotracerEvidence = [
  {
    title: "命令行运行",
    description:
      "当前用 CLI 示例展示输入、输出目录和可重复调用方式。后续可替换为真实运行截图。",
  },
  {
    title: "树可视化",
    description:
      "预留基因树或注释树可视化截图位置，用于展示结果如何被检查。",
  },
  {
    title: "输出文件夹",
    description:
      "预留 results/ 目录截图位置，用于展示统计表、图形和报告的真实组织方式。",
  },
  {
    title: "生成图形",
    description:
      "预留生成 figures 的截图位置，用于展示计算结果如何转化为论文或报告中的证据。",
  },
  {
    title: "统计表",
    description:
      "预留统计结果截图位置，用于展示事件计数、同源关系或拓扑摘要等可审计输出。",
  },
  {
    title: "GitHub 源码",
    description:
      "仓库链接是当前代码、模块实现和后续真实输出截图的权威入口。",
  },
];
