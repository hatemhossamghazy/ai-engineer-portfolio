import { Mail, Phone, MessageSquare, Github, Linkedin } from "lucide-react";
import { Section } from "./Reveal";
import { profile } from "@/data/cv";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something extraordinary."
    >
      <div className="mt-8 max-w-3xl space-y-8">
        {/* Contact Info List */}
        <div className="flex flex-col space-y-4">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5 text-primary" />
            <span>{profile.email}</span>
          </a>

          {/* Phone */}
          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-5 text-primary" />
              <span>{profile.phone}</span>
            </a>
          )}

          {/* WhatsApp */}
          {profile.whatsapp && (
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageSquare className="size-5 text-primary" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/40">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-5" />
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
