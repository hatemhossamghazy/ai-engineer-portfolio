import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, Reveal } from "./Reveal";
import { projects, type Project } from "@/data/cv";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const featured = index === 0;

  return (
    <Reveal delay={index * 0.06} className={featured ? "lg:col-span-2" : ""}>
      <article className="glass-panel group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] sm:p-7">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hero-glow" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">{project.kicker}</p>
          <h3 className={`mt-2 font-semibold ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            {open ? "Hide details" : "View details"}
            <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                {project.details.map((d) => (
                  <li
                    key={d}
                    className="mt-3 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {d}
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Machine learning, deep learning and engineering projects built end to end."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
