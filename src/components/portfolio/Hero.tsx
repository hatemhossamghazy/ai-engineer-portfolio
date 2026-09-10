import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { NeuralBackground } from "./NeuralBackground";
import { profile } from "@/data/cv";
import cvAsset from "@/assets/cv.asset.json";

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="hero-glow absolute inset-0" />
      <NeuralBackground />
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
        className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8"
      >
        <motion.p
          variants={item}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground"
        >
          <MapPin className="size-3.5 text-primary" />
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          transition={{ duration: 0.55 }}
          className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          transition={{ duration: 0.55 }}
          className="mt-4 font-display text-lg text-primary sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={item}
          transition={{ duration: 0.55 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} transition={{ duration: 0.55 }} className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            View Projects <ArrowDown className="size-4" />
          </a>
          <a
            href={cvAsset.url}
            download="Hatem_Hossam_Ghazy_CV.docx"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Download className="size-4" /> Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" /> Email me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
