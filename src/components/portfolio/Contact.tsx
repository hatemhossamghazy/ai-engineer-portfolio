import { Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/cv";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Contact</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
            Looking for a driven engineer to elevate your data and AI capabilities? Let’s build something extraordinary
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              <Mail className="size-4" /> Get in touch
            </a>
          </div>
        </Reveal>

        <footer className="mt-20 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} — {profile.title}
        </footer>
      </div>
    </section>
  );
}
