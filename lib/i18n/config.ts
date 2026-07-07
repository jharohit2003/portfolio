// Supported locales for the client-side language switcher.
export const locales = ["en", "hi", "es", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Native display names shown in the language switcher.
export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};
