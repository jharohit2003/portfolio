import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center pt-16">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: intro */}
        <div>
          <Reveal>
            <p className="mb-6 font-mono text-sm text-muted">
              <span className="text-accent">rohit@portfolio</span>:<span className="text-[#6E7BFF]">~</span>${" "}
              whoami
              <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" aria-hidden />
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 font-display text-xl text-accent sm:text-2xl">{profile.role}</p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                View work <ArrowUpRight size={16} />
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <Download size={16} /> Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex items-center gap-5">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="link-muted">
                <Github size={20} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="link-muted">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="link-muted">
                <Mail size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: code card */}
        <Reveal delay={200} className="hidden lg:block">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-xs text-muted">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-[#6E7BFF]">const</span> <span className="text-accent">dev</span> = {"{"}
                {"\n"}  role: <span className="text-[#8CE99A]">&quot;Full-Stack &amp; GenAI&quot;</span>,
                {"\n"}  stack: [<span className="text-[#8CE99A]">&quot;Next.js&quot;</span>,{" "}
                <span className="text-[#8CE99A]">&quot;Node&quot;</span>,{" "}
                <span className="text-[#8CE99A]">&quot;MongoDB&quot;</span>],
                {"\n"}  focus: <span className="text-[#8CE99A]">&quot;LLM-powered products&quot;</span>,
                {"\n"}  shipped: <span className="text-[#F5B841]">true</span>,
                {"\n"}  openSource: <span className="text-[#8CE99A]">&quot;npm: ripple&quot;</span>,
                {"\n"}  problemsSolved: <span className="text-[#F5B841]">300</span>,
                {"\n"}{"}"};
                {"\n"}
                {"\n"}<span className="text-muted">// always shipping</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
