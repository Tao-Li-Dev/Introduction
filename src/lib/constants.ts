export const sectionIds = [
  "hero",
  "profile",
  "phylotracer",
  "research",
  "publications",
  "methods",
  "roadmap",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
