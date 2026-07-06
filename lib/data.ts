// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Rohit Jha",
  handle: "jharohit2003",
  role: "Full-Stack & Generative AI Engineer",
  tagline:
    "I build production-grade web applications and ship real products, from MERN systems to LLM-powered features and open-source tooling.",
  summary:
    "Full-stack Software Engineer and Computer Science graduate building production-grade web applications with the MERN stack, TypeScript, and Next.js. Currently an Associate Software Development Engineer delivering end-to-end features, integrating LLMs into real-world products, and contributing to open source.",
  email: "jharohit2222@gmail.com",
  phone: "+91 8307462288",
  location: "India",
  resumeUrl: "/Rohit-Jha-Resume.pdf",
  socials: {
    github: "https://github.com/jharohit2003",
    linkedin: "http://www.linkedin.com/in/rohitjha07",
    portfolio: "http://rohit-jha-portfolio.vercel.app",
  },
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Associate Software Development Engineer",
    company: "INGSOL LLP",
    period: "Jun 2026 — Present",
    points: [
      "Own end-to-end delivery of full-stack features across React.js, Node.js, Express, and MongoDB, from design through deployment.",
      "Lead bug triage and resolution on production modules, improving reliability and reducing recurring issues.",
      "Resolve merge conflicts and uphold Git branching and code-quality standards across the team.",
      "Drive feature decisions and break work into shippable increments within an Agile workflow.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "INGSOL LLP",
    period: "Feb 2026 — Jun 2026",
    points: [
      "Built and shipped full-stack features on a React.js, Node.js, and MongoDB stack, taking tickets from spec to production.",
      "Optimized React components and API calls, cutting page load time by 20%.",
      "Diagnosed and fixed bugs in existing components, improving application stability.",
      "Collaborated through Git pull requests, code reviews, and Agile ceremonies.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "AI Interview Mocker",
    blurb: "LLM-powered mock interviews with real-time, personalized feedback.",
    points: [
      "Integrated Google Gemini to generate dynamic, role-specific questions with structured, prompt-templated output.",
      "Added voice-enabled responses and instant AI scoring, cutting mock-interview prep time by 40%.",
    ],
    stack: ["Next.js", "Google Gemini", "Firebase", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/jharohit2003" }],
    featured: true,
  },
  {
    name: "TrendBazaar",
    blurb: "A full-featured, responsive e-commerce platform.",
    points: [
      "Product browsing, filtering, cart, wishlist, and secure checkout in a responsive UI.",
      "JWT auth, a role-based admin panel, and optimized MongoDB queries and Cloudinary delivery.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Cloudinary"],
    links: [
      { label: "GitHub", href: "https://github.com/jharohit2003/Ecommerce-Website" },
      { label: "Live", href: "https://ecommerce-website-z8zj.onrender.com/" },
    ],
    featured: true,
  },
  {
    name: "InfoWaste",
    blurb: "Smart waste reporting with image scanning and live status.",
    points: [
      "Scans garbage from uploaded images and sends real-time, location-tagged reports to municipal authorities.",
      "Live status updates over Socket.io with a responsive reporting interface.",
    ],
    stack: ["MERN", "Socket.io", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/jharohit2003/InfoWaste" }],
  },
  {
    name: "Ripple",
    blurb: "Open-source, zero-dependency state manager published to npm.",
    points: [
      "Direct-mutation updates, fine-grained path subscriptions, and built-in undo/redo (time travel).",
      "Framework-agnostic core plus a React adapter, full TypeScript types, and a tested ESM + CommonJS build.",
    ],
    stack: ["TypeScript", "React", "tsup", "npm"],
    links: [{ label: "GitHub", href: "https://github.com/jharohit2003" }],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"] },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth", "Socket.io"] },
  { label: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  {
    label: "Generative AI",
    items: [
      "LLM Integration (Gemini)",
      "Prompt Engineering",
      "LangChain",
      "RAG",
      "Vector DBs (ChromaDB)",
      "Embeddings",
      "AI Agents",
      "Function Calling",
    ],
  },
  { label: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "npm publishing", "Agile"] },
  { label: "Cloud", items: ["AWS (basic)", "Vercel", "Render"] },
];

export type Education = {
  school: string;
  detail: string;
  period: string;
  extra?: string;
};

export const education: Education[] = [
  {
    school: "IMS Engineering College, Ghaziabad, UP",
    detail: "B.Tech. in Computer Science — GPA 8.94/10",
    period: "Sep 2022 — May 2026",
  },
  {
    school: "Dr. MKK Arya Model School, Panipat, Haryana",
    detail: "Class 12th: 90%  ·  Class 10th: 92%",
    period: "2019 — 2022",
  },
];

export const certifications: string[] = [
  "DSA Pre-Placement Training — Skillrisers Infotech Pvt. Ltd.",
  "HTML & CSS for Web Developers — The Digital Adda",
  "Data Analytics Using Python — Skillrisers Infotech Pvt. Ltd.",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
