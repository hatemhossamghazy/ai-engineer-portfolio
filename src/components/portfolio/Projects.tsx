import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, ImageIcon } from "lucide-react";
import { Section, Reveal } from "./Reveal";
import { projects, type Project } from "@/data/cv";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  // دالة لتصحيح مسار الصورة وضمان عمله مع Vite وفي جميع بيئات الاستضافة
  const getImageUrl = (imagePath?: string) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const imageSrc = getImageUrl(project.image);

  return (
    // تم إلغاء الشرط lg:col-span-2 لجعل حجم أول مشروع متساويًا تمامًا مع بقية المشاريع
    <Reveal delay={index * 0.06}>
      <article className="glass-panel group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] sm:p-7">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hero-glow" />
        <div className="relative">
          {/* تم تقليل الارتفاع والنسبة لجعل إطار المعاينة متناسقًا */}
          <div className="mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-secondary/40">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${project.name} project`}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="eager"
                onError={(e) => {
                  console.error("Failed to load image for project:", project.name, imageSrc);
                }}
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground">
                <ImageIcon className="size-8 text-primary/60" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.2em]">Project image</span>
              </div>
            )}
          </div>
          
          <p className="text-xs uppercase tracking-[0.2em] text-primary">{project.kicker}</p>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
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

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
            >
              {open ? "Hide details" : "View details"}
              <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-transform hover:translate-x-0.5"
              >
                View Project <ExternalLink className="size-4" />
              </a>
            ) : (
              <span className="text-xs text-muted-foreground">Project link not provided</span>
            )}
          </div>

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
