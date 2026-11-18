export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectData = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  status?: string;
  stack: string[];
  image?: string;
  links: ProjectLink[];
};
