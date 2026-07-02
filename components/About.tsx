import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const facts = [
  { k: "Role", v: "Associate SDE @ INGSOL" },
  { k: "Focus", v: "Full-stack + Generative AI" },
  { k: "DSA solved", v: "300+" },
  { k: "Open source", v: "npm: ripple" },
];

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-4 leading-relaxed text-muted">
            I like taking work from a rough ticket all the way to production: designing the feature, writing the
            code, reviewing PRs, and keeping things reliable once they ship. Lately I have been integrating LLMs
            into real products and publishing tools other developers can install.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {facts.map((f) => (
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
