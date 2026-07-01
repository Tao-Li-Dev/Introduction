import type { Note } from "@/data/types";

export const notes: Note[] = [
  {
    title: "PhyloTracer 17 模块体系的设计取舍",
    category: "软件架构",
    summary:
      "把 11 个 benchmark 映射到 17 个功能模块时，粒度划分比预期更细。每个模块独立记忆、独立验证，代价是跨模块的一致性检查变难。",
    date: "2026-06-30",
  },
  {
    title: "GD Loss 分析中的 SBE 逻辑陷阱",
    category: "分析方法",
    summary:
      "全基因组重复后的基因丢失判定，如果不对亚基因组归属做前置验证，很容易把 paralog 丢失误判为 selective loss。",
    date: "2026-06-30",
  },
  {
    title: "科研软件的产品思维",
    category: "产品",
    summary:
      "技术上正确的工具不等于好用的工具。基因树可视化和杂交信号呈现中，用户真正需要的是可检验的判断线索，而不是更多数字。",
    date: "2026-06-28",
  },
];
