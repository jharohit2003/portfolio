"use client";

import { profile } from "@/lib/data";
import { useI18n } from "./LanguageProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. {t.footer.built}
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">~/</span>
          {t.footer.credit}
        </p>
      </div>
    </footer>
  );
}
