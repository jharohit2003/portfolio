import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mb-10 flex items-baseline gap-3">
            <span className="eyebrow">{index}</span>
            <span className="h-px w-8 bg-border" aria-hidden />
            <h2 className="section-title">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
