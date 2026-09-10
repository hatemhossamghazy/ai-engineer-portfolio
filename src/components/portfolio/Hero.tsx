import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, UserRound } from "lucide-react";
import { NeuralBackground } from "./NeuralBackground";
import { profile } from "@/data/cv";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="hero-glow absolute inset-0" />
      <NeuralBackground />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div>
          <motion.p
            {...rise(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <MapPin className="size-3.5 text-primary" />
            {profile.location}
          </motion.p>

          <motion.h1
            {...rise(0.14)}
            className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            {...rise(0.22)}
            className="mt-4 font-display text-lg text-primary sm:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            {...rise(0.3)}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...rise(0.38)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View Projects <ArrowDown className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> Email me
            </a>
          </motion.div>
        </div>

        {/* كارت صورة البروفايل */}
        <motion.div
          {...rise(0.26)}
          aria-label="Profile photo"
          className="glass-panel relative mx-auto flex aspect-square w-full max-w-56 items-center justify-center overflow-hidden rounded-full shadow-[var(--shadow-glow)] sm:max-w-64 lg:max-w-none"
        >
          <div className="absolute inset-3 z-10 rounded-full border border-primary/20 pointer-events-none" />
          <img
            src={(profile as any).avatar || "/profile.jpg"}
            alt={profile.name}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover rounded-full z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
