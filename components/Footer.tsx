import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; TypeScript.
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">~/</span>designed &amp; developed by Rohit
        </p>
      </div>
    </footer>
  );
}
