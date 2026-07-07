import type { Dictionary } from "../types";

// German (Deutsch). Machine-drafted translation — recommend a native review,
// especially the technical phrasing. Product/tech names are kept in English.
export const de: Dictionary = {
  nav: {
    links: ["Über mich", "Erfahrung", "Projekte", "Fähigkeiten", "Kontakt"],
    resume: "Lebenslauf",
  },
  hero: {
    whoami: "whoami",
    role: "Full-Stack- und Generative-KI-Entwickler",
    tagline:
      "Ich entwickle produktionsreife Webanwendungen und liefere echte Produkte – von MERN-Systemen über LLM-gestützte Funktionen bis hin zu Open-Source-Tools.",
    viewWork: "Projekte ansehen",
    resume: "Lebenslauf",
  },
  about: {
    title: "Über mich",
    summary:
      "Full-Stack-Softwareentwickler und Informatik-Absolvent, der produktionsreife Webanwendungen mit dem MERN-Stack, TypeScript und Next.js entwickelt. Derzeit Associate Software Development Engineer: liefere End-to-End-Funktionen, integriere LLMs in reale Produkte und trage zu Open Source bei.",
    paragraph2:
      "Ich begleite Aufgaben gern von einem groben Ticket bis in die Produktion: Feature entwerfen, Code schreiben, PRs prüfen und für Zuverlässigkeit nach dem Release sorgen. In letzter Zeit integriere ich LLMs in reale Produkte und veröffentliche Tools, die andere Entwickler installieren können.",
    facts: [
      { k: "Rolle", v: "Associate SDE @ INGSOL" },
      { k: "Fokus", v: "Full-Stack + Generative KI" },
      { k: "DSA gelöst", v: "300+" },
      { k: "Open Source", v: "npm: ripple" },
    ],
  },
  experience: {
    title: "Erfahrung",
    roles: ["Associate Software Development Engineer", "Praktikant Softwareentwicklung"],
    points: [
      [
        "Verantwortlich für die End-to-End-Lieferung von Full-Stack-Funktionen über React.js, Node.js, Express und MongoDB, vom Entwurf bis zum Deployment.",
        "Leite Bug-Triage und -Behebung an Produktionsmodulen, verbessere die Zuverlässigkeit und reduziere wiederkehrende Probleme.",
        "Löse Merge-Konflikte und wahre Git-Branching- und Code-Qualitätsstandards im gesamten Team.",
        "Treibe Feature-Entscheidungen voran und teile die Arbeit in lieferbare Inkremente innerhalb eines Agile-Workflows auf.",
      ],
      [
        "Full-Stack-Funktionen auf einem React.js-, Node.js- und MongoDB-Stack entwickelt und ausgeliefert, Tickets von der Spezifikation bis zur Produktion gebracht.",
        "React-Komponenten und API-Aufrufe optimiert und die Seitenladezeit um 20 % reduziert.",
        "Fehler in bestehenden Komponenten diagnostiziert und behoben, die Stabilität der Anwendung verbessert.",
        "Über Git-Pull-Requests, Code-Reviews und Agile-Zeremonien zusammengearbeitet.",
      ],
    ],
  },
  projects: {
    title: "Ausgewählte Projekte",
    blurbs: [
      "LLM-gestützte Mock-Interviews mit personalisiertem Echtzeit-Feedback.",
      "Eine voll ausgestattete, responsive E-Commerce-Plattform.",
      "Intelligente Abfallmeldung mit Bildscan und Live-Status.",
      "Open-Source-State-Manager ohne Abhängigkeiten, veröffentlicht auf npm.",
    ],
    points: [
      [
        "Google Gemini integriert, um dynamische, rollenspezifische Fragen mit strukturierter, prompt-basierter Ausgabe zu generieren.",
        "Sprachgestützte Antworten und sofortige KI-Bewertung hinzugefügt, die Vorbereitungszeit um 40 % reduziert.",
      ],
      [
        "Produktsuche, Filterung, Warenkorb, Wunschliste und sicherer Checkout in einer responsiven UI.",
        "JWT-Authentifizierung, rollenbasiertes Admin-Panel sowie optimierte MongoDB-Abfragen und Cloudinary-Auslieferung.",
      ],
      [
        "Scannt Abfall aus hochgeladenen Bildern und sendet ortsmarkierte Echtzeit-Meldungen an die kommunalen Behörden.",
        "Live-Status-Updates über Socket.io mit einer responsiven Meldeoberfläche.",
      ],
      [
        "Aktualisierung per Direktmutation, feingranulare Pfad-Abonnements und integriertes Undo/Redo (Time Travel).",
        "Framework-unabhängiger Kern plus React-Adapter, vollständige TypeScript-Typen und ein getesteter ESM- + CommonJS-Build.",
      ],
    ],
  },
  skills: {
    title: "Fähigkeiten",
    labels: ["Sprachen", "Frontend", "Backend", "Datenbanken", "Generative KI", "Tools & DevOps", "Cloud"],
  },
  education: {
    title: "Ausbildung & Zertifikate",
    certsTitle: "Zertifikate",
    details: ["B.Tech. in Informatik — GPA 8,94/10", "Klasse 12: 90 %  ·  Klasse 10: 92 %"],
  },
  contact: {
    eyebrow: "06 — Kontakt",
    heading: "Lass uns etwas bauen.",
    body: "Offen für Festanstellung und freiberufliche Arbeit in Full-Stack und generativer KI. Am schnellsten erreichst du mich per E-Mail.",
  },
  footer: {
    built: "Erstellt mit Next.js und TypeScript",
    credit: "entworfen und entwickelt von Rohit",
  },
};
