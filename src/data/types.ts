export type NavItem = {
  id: string;
  label: string;
};

export type HeroProofItem = {
  value: string;
  label: string;
  detail: string;
};

export type Publication = {
  title: string;
  venue: string;
  role: string;
  doi?: string;
  status?: string;
  description: string;
  problem: string;
  task: string;
  methods: string[];
  result: string;
  contribution?: string;
  contributionItems?: string[];
};

export type ResearchTopic = {
  title: string;
  description: string;
  year: string;
};

export type PhyloTracerFeature = {
  title: string;
  description: string;
};

export type PhyloTracerIO = {
  label: string;
  items: string[];
};

export type EvidenceMetric = {
  label: string;
  value: string;
};

export type PhyloTracerEvidence = {
  title: string;
  description: string;
  source: string;
  image?: string;
  href?: string;
  linkLabel?: string;
  metrics?: EvidenceMetric[];
};

export type MethodCluster = {
  name: string;
  description: string;
  tools: {
    name: string;
    use: string;
  }[];
};

export type RoadmapItem = {
  title: string;
  status: string;
  description: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  college: string;
  major: string;
  period: string;
  highlights: string[];
};

export type ExperienceItem = {
  title: string;
  meta: string;
  bullets: string[];
};

