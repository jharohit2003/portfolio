import type { Dictionary } from "../types";

// Spanish (Español). Machine-drafted translation — recommend a native review,
// especially the technical phrasing. Product/tech names are kept in English.
export const es: Dictionary = {
  nav: {
    links: ["Perfil", "Experiencia", "Proyectos", "Habilidades", "Contacto"],
    resume: "Currículum",
  },
  hero: {
    whoami: "whoami",
    role: "Ingeniero Full-Stack y de IA Generativa",
    tagline:
      "Creo aplicaciones web de nivel producción y lanzo productos reales, desde sistemas MERN hasta funciones impulsadas por LLM y herramientas de código abierto.",
    viewWork: "Ver proyectos",
    resume: "Currículum",
  },
  about: {
    title: "Perfil",
    summary:
      "Ingeniero de software full-stack y graduado en Informática que crea aplicaciones web de nivel producción con el stack MERN, TypeScript y Next.js. Actualmente Ingeniero Asociado de Desarrollo de Software, entregando funciones de extremo a extremo, integrando LLM en productos reales y contribuyendo al código abierto.",
    paragraph2:
      "Me gusta llevar el trabajo desde un ticket inicial hasta producción: diseñar la función, escribir el código, revisar los PR y mantener todo fiable una vez desplegado. Últimamente he estado integrando LLM en productos reales y publicando herramientas que otros desarrolladores pueden instalar.",
    facts: [
      { k: "Rol", v: "Associate SDE @ INGSOL" },
      { k: "Enfoque", v: "Full-stack + IA Generativa" },
      { k: "DSA resueltos", v: "300+" },
      { k: "Código abierto", v: "npm: ripple" },
    ],
  },
  experience: {
    title: "Experiencia",
    roles: ["Ingeniero Asociado de Desarrollo de Software", "Practicante de Desarrollo de Software"],
    points: [
      [
        "Responsable de la entrega integral de funciones full-stack en React.js, Node.js, Express y MongoDB, del diseño al despliegue.",
        "Lidero la clasificación y resolución de errores en módulos de producción, mejorando la fiabilidad y reduciendo problemas recurrentes.",
        "Resuelvo conflictos de merge y mantengo los estándares de ramificación de Git y calidad de código en el equipo.",
        "Impulso decisiones de funciones y divido el trabajo en incrementos entregables dentro de un flujo Agile.",
      ],
      [
        "Desarrollé y lancé funciones full-stack en un stack de React.js, Node.js y MongoDB, llevando los tickets de la especificación a producción.",
        "Optimicé componentes de React y llamadas a la API, reduciendo el tiempo de carga de página en un 20%.",
        "Diagnostiqué y corregí errores en componentes existentes, mejorando la estabilidad de la aplicación.",
        "Colaboré mediante pull requests de Git, revisiones de código y ceremonias Agile.",
      ],
    ],
  },
  projects: {
    title: "Proyectos destacados",
    blurbs: [
      "Entrevistas simuladas impulsadas por LLM con retroalimentación personalizada en tiempo real.",
      "Una plataforma de comercio electrónico completa y responsiva.",
      "Reporte inteligente de residuos con escaneo de imágenes y estado en vivo.",
      "Gestor de estado de código abierto y sin dependencias, publicado en npm.",
    ],
    points: [
      [
        "Integré Google Gemini para generar preguntas dinámicas y específicas del rol con salida estructurada basada en plantillas de prompts.",
        "Añadí respuestas por voz y puntuación instantánea con IA, reduciendo el tiempo de preparación en un 40%.",
      ],
      [
        "Navegación de productos, filtrado, carrito, lista de deseos y pago seguro en una UI responsiva.",
        "Autenticación JWT, panel de administración por roles y consultas optimizadas de MongoDB con entrega mediante Cloudinary.",
      ],
      [
        "Escanea residuos a partir de imágenes subidas y envía informes en tiempo real con etiqueta de ubicación a las autoridades municipales.",
        "Actualizaciones de estado en vivo mediante Socket.io con una interfaz de reporte responsiva.",
      ],
      [
        "Actualizaciones por mutación directa, suscripciones por ruta detalladas y deshacer/rehacer integrado (viaje en el tiempo).",
        "Núcleo agnóstico al framework más un adaptador de React, tipos completos de TypeScript y una compilación probada ESM + CommonJS.",
      ],
    ],
  },
  skills: {
    title: "Habilidades",
    labels: ["Lenguajes", "Frontend", "Backend", "Bases de datos", "IA Generativa", "Herramientas y DevOps", "Nube"],
  },
  education: {
    title: "Educación y certificaciones",
    certsTitle: "Certificaciones",
    details: ["B.Tech. en Informática — GPA 8,94/10", "12.º grado: 90%  ·  10.º grado: 92%"],
  },
  contact: {
    eyebrow: "06 — Contacto",
    heading: "Construyamos algo.",
    body: "Disponible para trabajo a tiempo completo y freelance en full-stack e IA generativa. La forma más rápida de contactarme es por correo electrónico.",
  },
  footer: {
    built: "Hecho con Next.js y TypeScript",
    credit: "diseñado y desarrollado por Rohit",
  },
};
