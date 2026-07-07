"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { localeNames, locales } from "@/lib/i18n/config";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="link-muted flex items-center gap-1.5 text-sm"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={16} />
        <span className="font-mono uppercase">{locale}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-lg border border-border bg-surface py-1 shadow-lg"
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                role="option"
                aria-selected={l === locale}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm text-muted transition-colors hover:bg-surface2 hover:text-text"
              >
                <span>{localeNames[l]}</span>
                {l === locale && <Check size={14} className="text-accent" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
