import { profile, experience, projects, skills, education, navLinks } from "@/lib/data";
import type { Dictionary } from "../types";

// English is the source language. Prose that already lives in lib/data.ts
// (summary, tagline, experience points, project blurbs/points, skill labels,
// education details, nav labels) is read from there so it stays single-source.
// Only strings that were previously hard-coded in components are defined here.
export const en: Dictionary = {
  nav: {
    links: navLinks.map((l) => l.label),
    resume: "Resume",
  },
  hero: {
    whoami: "whoami",
    role: profile.role,
    tagline: profile.tagline,
    viewWork: "View work",
    resume: "Resume",
  },
  about: {
    title: "About",
    summary: profile.summary,
    paragraph2:
      "I like taking work from a rough ticket all the way to production: designing the feature, writing the code, reviewing PRs, and keeping things reliable once they ship. Lately I have been integrating LLMs into real products and publishing tools other developers can install.",
    facts: [
      { k: "Role", v: "Associate SDE @ INGSOL" },
      { k: "Focus", v: "Full-stack + Generative AI" },
      { k: "DSA solved", v: "300+" },
      { k: "Open source", v: "npm: ripple" },
    ],
  },
  experience: {
    title: "Experience",
    roles: experience.map((e) => e.role),
    points: experience.map((e) => e.points),
  },
  projects: {
    title: "Selected Work",
    blurbs: projects.map((p) => p.blurb),
    points: projects.map((p) => p.points),
  },
  skills: {
    title: "Skills",
    labels: skills.map((s) => s.label),
  },
  education: {
    title: "Education & Certs",
    certsTitle: "Certifications",
    details: education.map((e) => e.detail),
  },
  contact: {
    eyebrow: "06 — Contact",
    heading: "Let's build something.",
    body: "Open to full-time and freelance work in full-stack and Generative AI. The fastest way to reach me is email.",
  },
  footer: {
    built: "Built with Next.js & TypeScript",
    credit: "designed & developed by Rohit",
  },
};
