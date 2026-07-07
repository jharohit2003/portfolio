"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";
import { useI18n } from "./LanguageProvider";

export default function Skills() {
  const { t } = useI18n();
  return (
    <Section id="skills" index="04" title={t.skills.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 3) * 80}>
            <div className="card h-full p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{t.skills.labels[i]}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag !text-text/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
