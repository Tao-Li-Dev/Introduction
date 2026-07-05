import type { PhyloTracerEvidence, PhyloTracerFeature, PhyloTracerIO } from "@/data/types";

export const phylotracerCase = {
  title: "PhyloTracer",
  subtitle: "面向比较基因组学与系统发育基因组学分析的研究软件工具包。",
  researchProblem:
    "系统发育基因组学分析依赖大量基因树，但基因树在规模化分析中并不天然可靠。它们可能包含基因重复、基因丢失、定根不确定性、拓扑冲突和数据噪声。当真实进化事件与数据质量问题混在一起时，直系同源推断就很难解释。",
  motivation:
    "PhyloTracer 面向需要批量检查基因进化关系的研究者。它试图减少人工脚本拼接、手动检查和结果整理带来的不确定性，把树分析流程做成可复现、可追踪、可解释的软件工作流。",
  biologicalContribution:
    "它的生物学意义在于：直系同源关系、基因重复事件和拓扑模式会直接影响研究者如何解释基因组进化。更清晰的流程可以帮助区分稳定的进化信号与分析伪影。",
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
      "17 个模块共享 gene-to-species mapping、Newick trees 和 tab-delimited annotations 等输入约定，方便嵌入更大的系统发育基因组学流程。",
  },
];

export const phylotracerIO: PhyloTracerIO[] = [
  {
    label: "输入文件",
    items: ["GF_ID2path.imap", "gene2sps.imap", "sptree.nwk", "gf_aln.txt"],
  },
  {
    label: "输出文件",
    items: [
      "gd_result_relaxed.txt",
      "gd_type_relaxed.tsv",
      "numed_sptree.nwk",
      "gd_loss.csv",
      "hyde_out.txt",
      "dotplot PNG/PDF",
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

export const phylotracerEvidence: PhyloTracerEvidence[] = [
  {
    title: "本体仓库与安装入口",
    description:
      "PhyloTracer 本体仓库提供 PyPI 安装、ReadTheDocs 文档、MIT license、CITATION.cff、example_data 和 pytest/CI 测试矩阵。",
    source: "README.md / pyproject.toml / CITATION.cff / .github/workflows/ci.yml",
    href: "https://github.com/YiyongZhao/PhyloTracer",
    linkLabel: "GitHub repository",
    metrics: [
      { label: "Modules", value: "17" },
      { label: "Python", value: "3.8-3.12" },
      { label: "License", value: "MIT" },
    ],
  },
  {
    title: "版本与数据仓库",
    description:
      "PhyloTracer manuscript data repository 已归档到 Zenodo，并记录了软件版本、Git commit、补充表格和主图文件。",
    source: "Zenodo archived package / README.md",
    href: "https://doi.org/10.5281/zenodo.21207696",
    linkLabel: "Zenodo DOI",
    metrics: [
      { label: "Software", value: "v1.0.3" },
      { label: "Commit", value: "925afa45" },
      { label: "Tables", value: "S1-S13" },
    ],
  },
  {
    title: "主流程与模块总览",
    description:
      "主图展示 post-gene-tree processing 的整体软件逻辑，用于说明 PhyloTracer 如何把基因树处理、事件解释和输出检查串成流程。",
    source: "manuscript figure render / Fig. 1",
    image: "/images/phylotracer-evidence/phylotracer-overview.png",
    metrics: [
      { label: "Figure", value: "Fig. 1" },
      { label: "Use", value: "workflow overview" },
    ],
  },
  {
    title: "Phylo_Rooter 定根 benchmark",
    description:
      "基于 MRCA/root-distance 的定根 benchmark，用于检查物种树约束定根是否能在大规模基因树中保持稳定。",
    source: "Table_S2_Rooter_MRCA_distance.tsv / rooting benchmark figure",
    image: "/images/phylotracer-evidence/rooting-benchmark.png",
    metrics: [
      { label: "OneKP exact match", value: "98.7%" },
      { label: "Dataset", value: "1,178 spp." },
      { label: "Table", value: "S2" },
    ],
  },
  {
    title: "Hybrid_Tracer 验证",
    description:
      "Hybrid_Tracer 结果与常规 HyDe 比较，并在花生、油菜和小麦等阳性对照中检查杂交信号能否恢复。",
    source: "Table_S7_HybridTracker_30sp_Comparison.tsv / Table_S8_ThreeSpecies_Hybrid_Validation.tsv / Fig. 6",
    image: "/images/phylotracer-evidence/hybrid-tracker-validation.png",
    metrics: [
      { label: "Tested triples", value: "390" },
      { label: "Arachis Z", value: "27.33" },
      { label: "Brassica Z", value: "18.72" },
    ],
  },
  {
    title: "HaploFinder 小麦两阶段分析",
    description:
      "小麦六倍体场景中，HaploFinder 通过两阶段策略恢复 ATAU(D)+TTUR(AB)→TAEN(ABD) 相关信号。",
    source: "Table_S9_Wheat_TwoStage_Analysis.tsv / Fig. 7",
    image: "/images/phylotracer-evidence/haplofinder-wheat-analysis.png",
    metrics: [
      { label: "Stage2 GD events", value: "2,721" },
      { label: "Z-score", value: "10.60" },
      { label: "Gamma", value: "0.346" },
    ],
  },
  {
    title: "真实输出图与补充表格",
    description:
      "HaploFinder dotplot 和 Supplementary_Data.xlsx 共同展示输出如何从文件级结果进入论文图表和补充材料。",
    source: "Archived figure outputs / Supplementary_Data.xlsx / package validation",
    image: "/images/phylotracer-evidence/wheat-dotplot.png",
    metrics: [
      { label: "Upload package", value: "30 files" },
      { label: "Workbook", value: "S1-S13" },
      { label: "Checksums", value: "SHA256" },
    ],
  },
];
