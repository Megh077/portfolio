import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Professional experience">
            Software Engineer at Simplogics Solutions, delivering production systems for enterprise and healthcare platforms.
          </SectionHeading>
        </Reveal>
        <ol className="mt-12">
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}`}>
              <Reveal>
                <article className="border-l border-line pl-6">
                  <div className="relative">
                    <span
                      className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {item.role}
                        <span className="font-normal text-muted"> · {item.company}</span>
                        {item.location ? (
                          <span className="mt-1 block text-sm font-normal text-muted">{item.location}</span>
                        ) : null}
                      </h3>
                      <p className="font-mono text-xs text-accent">{item.period}</p>
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                      {item.summary}
                    </p>
                    <ul className="mt-5 max-w-3xl space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-foreground/90">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-8 divide-y divide-line border-y border-line">
                      {item.projects.map((project) => (
                        <li
                          key={project.name}
                          className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
                        >
                          <p className="text-sm font-medium text-foreground">{project.name}</p>
                          <p className="font-mono text-[11px] text-muted">
                            {project.focus} · {project.period}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                      {item.technologies.map((technology) => (
                        <li key={technology}>
                          <Tag>{technology}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
