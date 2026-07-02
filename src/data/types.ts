export type NavItem = {
  id: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  status: string;
  stack: string[];
  detail: string;
  github: string;
  image: string;
};

export type Publication = {
  title: string;
  venue: string;
  role: string;
  doi?: string;
  status?: string;
  description: string;
  contribution?: string;
  contributionItems?: string[];
};

export type ResearchTopic = {
  title: string;
  description: string;
  year: string;
};

export type StackCluster = {
  name: string;
  description: string;
  tools: string[];
};

export type WorkflowStep = {
  title: string;
  detail: string;
};

export type PhyloTracerFeature = {
  title: string;
  description: string;
};

export type PhyloTracerIO = {
  label: string;
  items: string[];
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

export type Note = {
  title: string;
  category: string;
  summary: string;
  date: string;
};
