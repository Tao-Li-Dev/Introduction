import type { ResearchTopic } from "@/data/types";

export const researchTopics: ResearchTopic[] = [
  {
    year: "问题",
    title: "复杂基因树如何揭示可靠的进化信号？",
    description:
      "基因树同时携带重复、丢失、不完全谱系排序和噪声。我关注的软件不是只给出最终表格，而是让这些信号可以被检查。",
  },
  {
    year: "问题",
    title: "直系同源推断如何变得更可解释？",
    description:
      "同源关系常常被当作一个可以直接消费的文件。我希望工具能说明关系为什么成立，以及证据在哪里较弱。",
  },
  {
    year: "问题",
    title: "AI 如何辅助分析，同时保留生物学判断与可复现性？",
    description:
      "LLM 可以帮助规划、记录和检查流程，但生物学验证与可复现性必须始终是第一约束。",
  },
];
