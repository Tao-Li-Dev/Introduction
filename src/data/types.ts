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

export type Note = {
  title: string;
  category: string;
  summary: string;
  date: string;
};
