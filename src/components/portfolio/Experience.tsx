import { Section, Reveal } from "./Reveal";
import { activities } from "@/data/cv";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Activities & practice"
      description="Hands-on experience gained outside the classroom."
    >
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {activities.map((a, i) => (
          <Reveal key={a.role} delay={i * 0.08}>
            <div className="relative pb-2">
              <span className="absolute -left-[1.85rem] top-2 size-3 rounded-full bg-primary shadow-[var(--shadow-glow)] sm:-left-[2.35rem]" />
              <div className="glass-panel rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold">{a.role}</h3>
                <p className="mt-1 text-sm text-primary">{a.org}</p>
                <ul className="mt-3 space-y-2">
                  {a.points.map((p) => (
                    <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
