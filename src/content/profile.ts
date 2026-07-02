import type { EducationItem, ExperienceItem } from "@/data/types";

export const educationItems: EducationItem[] = [
  {
    school: "贵州大学",
    degree: "本科",
    college: "农学院",
    major: "农学",
    period: "2018.09-2022.06",
    highlights: [
      "专业成绩：专业前 30%",
      "主修课程：遗传学、植物生理学、分子生物学",
    ],
  },
  {
    school: "贵州大学",
    degree: "硕士",
    college: "农学院",
    major: "作物学",
    period: "2022.09-2026.06",
    highlights: [
      "研究方向：作物遗传育种与生物信息学",
      "主修课程：数量遗传学、系统发育组学、统计遗传学、基因组学、转录组学",
    ],
  },
];

export const capabilityItems = [
  "Linux 环境下大规模测序数据处理",
  "基因组学、转录组学、系统发育组学多组学整合分析",
  "Python 数据处理、树结构解析与算法实现",
  "R 统计分析与 ggplot2 可视化",
  "IQ-TREE、RAxML、RF 距离计算、基因树定根",
  "HISAT2、StringTie、DESeq2 标准转录组流程",
  "samtools、bcftools、GATK 等常用数据处理工具",
  "科研绘图与图像整理：GraphPad、Adobe Illustrator、Photoshop",
];

export const practiceItems: ExperienceItem[] = [
  {
    title: "暑期“三下乡”社会实践活动",
    meta: "负责人，2020.06-2020.09",
    bullets: [
      "组织多学科学生参与实践活动，协调师生沟通和任务分工。",
      "项目获校级特等奖，体现组织协作与项目推进能力。",
    ],
  },
  {
    title: "全国第一届种艺比赛贵州大学选拔赛",
    meta: "赛事筹备与组织，2020.10-2021.01",
    bullets: [
      "负责赛事筹备、流程组织和现场协调，保障比赛顺利完成。",
      "获得师生认可，积累跨角色沟通和执行经验。",
    ],
  },
];
