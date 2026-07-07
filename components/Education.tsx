"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { education, certifications } from "@/lib/data";
import { useI18n } from "./LanguageProvider";

export default function Education() {
  const { t } = useI18n();
  return (
    <Section id="education" index="05" title={t.education.title}>
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-6">
            {education.map((e, i) => (
              <div key={e.school} className="card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg font-semibold text-text">{e.school}</h3>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{t.education.details[i]}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card h-full p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{t.education.certsTitle}</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
