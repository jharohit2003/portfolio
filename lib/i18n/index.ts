import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { en } from "./dictionaries/en";
import { hi } from "./dictionaries/hi";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { de } from "./dictionaries/de";

export const dictionaries: Record<Locale, Dictionary> = { en, hi, es, fr, de };
