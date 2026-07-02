import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.period} delay={i * 100}>
            <div className="relative pb-12 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-display text-xl font-semibold text-text">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-accent">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
