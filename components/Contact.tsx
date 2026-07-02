import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="card mx-auto max-w-2xl p-10 text-center">
            <p className="eyebrow">06 — Contact</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Open to full-time and freelance work in full-stack and Generative AI. The fastest way to reach me is
              email.
            </p>

            <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
              <Mail size={16} /> {profile.email}
            </a>

            <div className="mt-8 flex items-center justify-center gap-6">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
