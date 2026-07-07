"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";
import { useI18n } from "./LanguageProvider";

export default function Projects() {
  const { t } = useI18n();
  return (
    <Section id="work" index="03" title={t.projects.title}>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 100}>
            <article className="card group flex h-full flex-col p-6 hover:border-accent/60">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-text">{p.name}</h3>
                <div className="flex items-center gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} ${l.label}`}
                      className="link-muted"
                    >
                      {l.label === "GitHub" ? <Github size={18} /> : <ArrowUpRight size={18} />}
                    </a>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-sm text-text/90">{t.projects.blurbs[i]}</p>

              <ul className="mt-4 space-y-2">
                {t.projects.points[i].map((pt, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 pt-1">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
