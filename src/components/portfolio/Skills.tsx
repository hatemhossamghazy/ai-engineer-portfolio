import { Section, Reveal } from "./Reveal";
import { skills } from "@/data/cv";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      description="The languages, libraries and techniques I work with day to day."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="glass-panel h-full rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="cursor-default rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
