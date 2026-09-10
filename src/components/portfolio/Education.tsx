import { GraduationCap } from "lucide-react";
import { Section, Reveal } from "./Reveal";
import { education } from "@/data/cv";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <Reveal>
        <div className="glass-panel rounded-2xl p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]">
          <div className="flex items-start gap-4">
            <span className="rounded-xl border border-border bg-secondary/40 p-3 text-primary">
              <GraduationCap className="size-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold sm:text-xl">{education.degree}</h3>
              <p className="mt-1 text-sm text-primary">
                {education.school} — {education.location}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="rounded-full border border-border px-3 py-1.5">
                  GPA {education.gpa}
                </span>
                <span className="rounded-full border border-border px-3 py-1.5">
                  {education.graduation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
