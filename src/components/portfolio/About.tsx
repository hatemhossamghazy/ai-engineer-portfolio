import { Section, Reveal } from "./Reveal";
import { about } from "@/data/cv";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering intelligence, end to end" description={about.summary}>
      <div className="grid gap-5 md:grid-cols-3">
        {about.points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="glass-panel h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15}>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{about.focus}</p>
      </Reveal>
    </Section>
  );
}
