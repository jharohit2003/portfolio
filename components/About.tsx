"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { useI18n } from "./LanguageProvider";

export default function About() {
  const { t } = useI18n();
  return (
    <Section id="about" index="01" title={t.about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{t.about.summary}</p>
          <p className="mt-4 leading-relaxed text-muted">{t.about.paragraph2}</p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {t.about.facts.map((f) => (
              <div key={f.k} className="bg-surface p-5">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">{f.k}</dt>
                <dd className="mt-2 font-display text-lg text-text">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
