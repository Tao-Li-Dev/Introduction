import type { WorkflowStep } from "@/data/types";

export const workflowSteps: WorkflowStep[] = [
  { title: "想法", detail: "明确研究问题或软件问题的边界。" },
  { title: "AI 规划", detail: "用 AI 辅助拆解范围、结构和实现路径。" },
  { title: "编码", detail: "用可维护的架构实现系统。" },
  { title: "测试", detail: "验证行为、边界情况和流程可靠性。" },
  { title: "生物学验证", detail: "确认输出仍然具有生物学意义。" },
  { title: "部署", detail: "把工作封装成可靠可用的工具。" },
  { title: "文档", detail: "记录环境、决策和使用方式。" },
  { title: "知识库", detail: "沉淀跨项目可复用的经验。" },
  { title: "Memory MCP", detail: "把上下文转化为下一轮迭代可调用的长期记忆。" },
];
