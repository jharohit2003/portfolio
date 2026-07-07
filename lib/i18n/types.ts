// Shape of a translated content bundle.
//
// This holds ONLY translatable text. Non-translatable, structural data
// (tech stacks, links, dates/periods, company and school names, project
// names, skill items, certifications, contact details) lives once in
// lib/data.ts and is shared across every locale.
//
// Array fields are index-aligned with the matching arrays in lib/data.ts:
//   experience.roles / experience.points  -> data.experience
//   projects.blurbs  / projects.points    -> data.projects
//   skills.labels                          -> data.skills
//   education.details                      -> data.education
//   nav.links                              -> data.navLinks
// If you reorder or add items in data.ts, keep these arrays in the same order.
export type Dictionary = {
  nav: {
    links: string[];
    resume: string;
  };
  hero: {
    whoami: string;
    role: string;
    tagline: string;
    viewWork: string;
    resume: string;
  };
  about: {
    title: string;
    summary: string;
    paragraph2: string;
    facts: { k: string; v: string }[];
  };
  experience: {
    title: string;
    roles: string[];
    points: string[][];
  };
  projects: {
    title: string;
    blurbs: string[];
    points: string[][];
  };
  skills: {
    title: string;
    labels: string[];
  };
  education: {
    title: string;
    certsTitle: string;
    details: string[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  footer: {
    built: string;
    credit: string;
  };
};
