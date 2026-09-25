import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Projects" title="Featured projects">
            Case studies of the production systems I have worked on, covering the architecture and the engineering work.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
