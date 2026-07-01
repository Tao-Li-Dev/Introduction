export const sectionIds = [
  "hero",
  "about",
  "projects",
  "publications",
  "research",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
