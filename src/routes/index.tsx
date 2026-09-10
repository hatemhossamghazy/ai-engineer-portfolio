import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const title = "Hatem Hossam Ghazy — Machine Learning Engineer";
const description =
  "Portfolio of Hatem Hossam Ghazy, Computer Engineering student and machine learning engineer building end-to-end ML, deep learning and NLP pipelines in Python.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Hatem Hossam Ghazy, Machine Learning Engineer, Deep Learning, NLP, Python, Computer Engineering, Portfolio",
      },
      { name: "author", content: "Hatem Hossam Ghazy" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Hatem Hossam Ghazy",
          jobTitle: "Machine Learning Engineer",
          email: "mailto:hatm51477@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Kafr El-Sheikh", addressCountry: "EG" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Kafr El-Sheikh University" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
