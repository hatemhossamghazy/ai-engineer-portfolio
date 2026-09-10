import { Section, Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About me">
      <Reveal delay={0.08}>
        <div className="glass-panel max-w-4xl space-y-5 rounded-2xl p-6 text-base leading-relaxed text-muted-foreground sm:p-8">
          <p>I’m a <strong className="font-medium text-foreground">Computer Engineer specializing in Data Science and Machine Learning.</strong></p>
          <p>Growing up, my world was centered around sports, mathematics, and the power of numbers. That naturally led me to Computer Engineering—a field where logic, structure, and analytical thinking align perfectly.</p>
          <p><strong className="font-medium text-foreground">Discipline and continuous growth</strong> are embedded in my mentality. I work every single day to stay one step ahead, approaching challenges with a strong sense of responsibility and a high-performance mindset.</p>
          <p>For me, Data Science and Machine Learning are the ultimate arena: a space where mathematical accuracy meets strategic thinking to solve complex problems and <strong className="font-medium text-foreground">engineer scalable, impactful systems.</strong></p>
        </div>
      </Reveal>
    </Section>
  );
}
