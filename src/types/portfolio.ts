export type FlowNode = {
  label: string;
  detail?: string;
};

export type FlowStep = {
  nodes: FlowNode[];
};

export type ArchitectureDiagram = {
  title: string;
  caption: string;
  steps: FlowStep[];
};

export type ContributionGroup = {
  title: string;
  items: string[];
};

export type EngineeringHighlight = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  domain: string;
  summary: string;
  contribution: "backend" | "backend-and-frontend";
  contributionLabel: string;
  period: string;
  overview: string;
  challenge: string;
  role: string;
  contributions: ContributionGroup[];
  architecture: ArchitectureDiagram;
  technologies: string[];
  engineeringHighlights: EngineeringHighlight[];
  featured: boolean;
  showInArchitecture: boolean;
};

export type SkillGroup = {
  id: string;
  title: string;
  emphasis: "primary" | "supporting" | "additional";
  label: string;
  summary: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  location?: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  technologies: string[];
  projects: { name: string; focus: string; period: string }[];
};

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verificationUrl?: string;
  badge?: string;
};

export type NavItem = {
  href: string;
  label: string;
  id: string;
};
