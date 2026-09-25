import { SiteShell } from "@/components/layout/SiteShell";
import { About } from "@/components/sections/About";
import { ArchitectureHighlights } from "@/components/sections/ArchitectureHighlights";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <ArchitectureHighlights />
      <Education />
      <Certifications />
      <Contact />
    </SiteShell>
  );
}
