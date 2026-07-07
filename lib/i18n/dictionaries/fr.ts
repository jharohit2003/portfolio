import type { Dictionary } from "../types";

// French (Français). Machine-drafted translation — recommend a native review,
// especially the technical phrasing. Product/tech names are kept in English.
export const fr: Dictionary = {
  nav: {
    links: ["Profil", "Expérience", "Projets", "Compétences", "Contact"],
    resume: "CV",
  },
  hero: {
    whoami: "whoami",
    role: "Ingénieur Full-Stack et IA Générative",
    tagline:
      "Je conçois des applications web de niveau production et livre de vrais produits, des systèmes MERN aux fonctionnalités propulsées par LLM et aux outils open source.",
    viewWork: "Voir les projets",
    resume: "CV",
  },
  about: {
    title: "Profil",
    summary:
      "Ingénieur logiciel full-stack et diplômé en informatique, je conçois des applications web de niveau production avec la stack MERN, TypeScript et Next.js. Actuellement ingénieur associé en développement logiciel, je livre des fonctionnalités de bout en bout, intègre des LLM dans des produits réels et contribue à l'open source.",
    paragraph2:
      "J'aime mener une tâche d'un simple ticket jusqu'à la production : concevoir la fonctionnalité, écrire le code, relire les PR et garantir la fiabilité une fois livré. Dernièrement, j'intègre des LLM dans des produits réels et publie des outils que d'autres développeurs peuvent installer.",
    facts: [
      { k: "Rôle", v: "Associate SDE @ INGSOL" },
      { k: "Focus", v: "Full-stack + IA générative" },
      { k: "DSA résolus", v: "300+" },
      { k: "Open source", v: "npm: ripple" },
    ],
  },
  experience: {
    title: "Expérience",
    roles: ["Ingénieur associé en développement logiciel", "Stagiaire en développement logiciel"],
    points: [
      [
        "Responsable de la livraison de bout en bout de fonctionnalités full-stack sur React.js, Node.js, Express et MongoDB, de la conception au déploiement.",
        "Pilote le tri et la résolution des bugs sur les modules de production, améliorant la fiabilité et réduisant les problèmes récurrents.",
        "Résous les conflits de fusion et maintiens les standards de branches Git et de qualité de code dans l'équipe.",
        "Oriente les décisions de fonctionnalités et découpe le travail en incréments livrables dans un flux Agile.",
      ],
      [
        "Développé et livré des fonctionnalités full-stack sur une stack React.js, Node.js et MongoDB, menant les tickets de la spécification à la production.",
        "Optimisé les composants React et les appels API, réduisant le temps de chargement des pages de 20 %.",
        "Diagnostiqué et corrigé des bugs dans des composants existants, améliorant la stabilité de l'application.",
        "Collaboré via des pull requests Git, des revues de code et des cérémonies Agile.",
      ],
    ],
  },
  projects: {
    title: "Projets sélectionnés",
    blurbs: [
      "Entretiens simulés propulsés par LLM avec retour personnalisé en temps réel.",
      "Une plateforme e-commerce complète et responsive.",
      "Signalement intelligent des déchets avec analyse d'images et statut en direct.",
      "Gestionnaire d'état open source et sans dépendance, publié sur npm.",
    ],
    points: [
      [
        "Intégré Google Gemini pour générer des questions dynamiques et propres au rôle, avec une sortie structurée basée sur des modèles de prompts.",
        "Ajouté des réponses vocales et une notation IA instantanée, réduisant le temps de préparation de 40 %.",
      ],
      [
        "Navigation produits, filtrage, panier, liste de souhaits et paiement sécurisé dans une UI responsive.",
        "Authentification JWT, panneau d'administration par rôles, requêtes MongoDB optimisées et diffusion via Cloudinary.",
      ],
      [
        "Analyse les déchets à partir d'images téléversées et envoie des rapports géolocalisés en temps réel aux autorités municipales.",
        "Mises à jour de statut en direct via Socket.io avec une interface de signalement responsive.",
      ],
      [
        "Mises à jour par mutation directe, abonnements par chemin fins et annuler/rétablir intégré (voyage dans le temps).",
        "Cœur agnostique au framework plus un adaptateur React, types TypeScript complets et build ESM + CommonJS testé.",
      ],
    ],
  },
  skills: {
    title: "Compétences",
    labels: ["Langages", "Frontend", "Backend", "Bases de données", "IA Générative", "Outils et DevOps", "Cloud"],
  },
  education: {
    title: "Formation et certifications",
    certsTitle: "Certifications",
    details: ["B.Tech. en informatique — GPA 8,94/10", "Classe 12 : 90 %  ·  Classe 10 : 92 %"],
  },
  contact: {
    eyebrow: "06 — Contact",
    heading: "Construisons quelque chose.",
    body: "Ouvert aux missions à temps plein et en freelance en full-stack et IA générative. Le moyen le plus rapide de me joindre est l'e-mail.",
  },
  footer: {
    built: "Réalisé avec Next.js et TypeScript",
    credit: "conçu et développé par Rohit",
  },
};
