import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FlowDiagram } from "@/components/architecture/FlowDiagram";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/portfolio";

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        All projects
      </Link>
      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">{project.domain}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{project.summary}</p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">My work</dt>
            <dd className="mt-1 text-foreground">{project.contributionLabel}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">Period</dt>
            <dd className="mt-1 text-foreground">{project.period}</dd>
          </div>
        </dl>
      </header>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <li key={technology}>
            <Tag prominent={technology === "Java 21" || technology === "Spring Boot"}>{technology}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Overview</h2>
          <p className="mt-4 text-base leading-7 text-foreground/90">{project.overview}</p>
        </section>
        <section>
          <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Challenge</h2>
          <p className="mt-4 text-base leading-7 text-foreground/90">{project.challenge}</p>
        </section>
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Role</h2>
        <p className="mt-4 text-base leading-7 text-foreground/90">{project.role}</p>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Key contributions</h2>
        <div className={`mt-6 grid gap-4 ${project.contributions.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {project.contributions.map((group) => (
            <div key={group.title} className="rounded-xl border border-line bg-surface p-5 sm:p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Technical architecture</h2>
        <div className="mt-6">
          <FlowDiagram diagram={project.architecture} />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Engineering highlights</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {project.engineeringHighlights.map((highlight, index) => (
            <li key={highlight.title} className="rounded-xl border border-line p-5">
              <p className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{highlight.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
