import { Download, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/cv";
import cvAsset from "@/assets/cv.asset.json";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Contact</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Let&apos;s build something <span className="text-gradient">intelligent</span>.
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Open to internships and junior machine learning roles. The fastest way to reach me is
            email.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              <Mail className="size-4" /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Phone className="size-4" /> {profile.phone}
            </a>
            <a
              href={cvAsset.url}
              download="Hatem_Hossam_Ghazy_CV.docx"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="size-4" /> Download CV
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
