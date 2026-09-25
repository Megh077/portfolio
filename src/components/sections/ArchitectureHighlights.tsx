import { FlowDiagram } from "@/components/architecture/FlowDiagram";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getArchitectureProjects } from "@/data/projects";
import Link from "next/link";

export function ArchitectureHighlights() {
  const highlighted = getArchitectureProjects();

  return (
    <section id="architecture" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Architecture" title="Engineering highlights">
            How the main production services are structured, from the API through storage and external systems.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-4">
          {highlighted.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <div className="grid gap-4 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                    {project.contributionLabel}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    <Link href={`/projects/${project.slug}`} className="hover:text-accent">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.domain}</p>
                </div>
                <FlowDiagram diagram={project.architecture} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
