import type { MethodCluster, RoadmapItem } from "@/data/types";

export const methodClusters: MethodCluster[] = [
  {
    name: "科研软件",
    description:
      "我构建可以重复运行、检查和记录的命令行工具与分析流程。",
    tools: [
      { name: "Python", use: "实现核心分析逻辑和生物信息学脚本。" },
      { name: "CLI design", use: "把分析步骤封装成可重复调用的接口。" },
      { name: "Pipeline design", use: "把输入、参数、中间结果和输出组织成稳定流程。" },
      { name: "Testing", use: "检查模块行为、边界情况和结果稳定性。" },
      { name: "Packaging", use: "让工具更容易安装、复用和交付给其他研究者。" },
      { name: "Reproducibility", use: "让环境、参数和输出结构可以被复查。" },
    ],
  },
  {
    name: "进化基因组学",
    description:
      "软件设计需要回应基因树、物种树和生物学解释中的真实问题。",
    tools: [
      { name: "Gene trees", use: "作为拓扑检查和事件分析的主要证据。" },
      { name: "Species trees", use: "作为比较解释和冲突判断的参考结构。" },
      { name: "Orthology", use: "作为需要推断、解释和验证的核心关系。" },
      { name: "Phylogenetics", use: "为软件输出定义生物学意义和正确性边界。" },
    ],
  },
  {
    name: "计算环境",
    description:
      "工程层让分析更可迁移、可复查，并减少隐藏本地状态对结果的影响。",
    tools: [
      { name: "Git", use: "管理代码、决策记录和文档变更。" },
      { name: "Docker", use: "控制运行环境，降低复现成本。" },
      { name: "Linux", use: "作为数据处理和自动化的日常环境。" },
      { name: "Workflow automation", use: "减少重复分析中的人工步骤。" },
    ],
  },
  {
    name: "AI 辅助开发",
    description:
      "AI 用于规划、重构和文档整理，但不替代生物学验证和研究判断。",
    tools: [
      { name: "Codex", use: "辅助代码库导航、实现和验证。" },
      { name: "Claude Code", use: "支持较长周期的重构和文档工作。" },
      { name: "OpenAI", use: "用于软件设计、代码审查和方案推演。" },
      { name: "LLM-assisted software engineering", use: "提高开发效率，但保留科学判断在最终决策层。" },
    ],
  },
];

export const roadmapItems: RoadmapItem[] = [
  {
    title: "改进 PhyloTracer 架构",
    status: "进行中",
    description:
      "继续整理模块边界、命令行为和输出结构，让工具包更容易维护和扩展。",
  },
  {
    title: "提高流程复用性",
    status: "进行中",
    description:
      "把重复出现的分析模式整理成有文档、有输入输出约定、可被他人重跑的工作流。",
  },
  {
    title: "构建可复现 benchmark datasets",
    status: "规划中",
    description:
      "准备可用于测试直系同源推断、树冲突和进化事件检测行为的数据集。",
  },
  {
    title: "探索 AI-assisted phylogenetic workflows",
    status: "探索中",
    description:
      "尝试用 LLM 辅助检查输出、总结证据和生成文档，同时不隐藏分析假设。",
  },
  {
    title: "加强生物学验证",
    status: "持续改进",
    description:
      "通过示例、图形和解释记录，把软件输出重新连接到具体生物学问题。",
  },
];
