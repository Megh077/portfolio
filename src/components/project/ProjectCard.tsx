import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.14em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </p>
        <ArrowUpRight
          aria-hidden="true"
          size={16}
          className="text-muted transition group-hover:text-accent"
        />
      </div>
      <p className="mt-4 font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
        {project.domain}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.summary}</p>
      <p className="mt-4 text-sm text-foreground">{project.contributionLabel}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <li key={technology}>
            <Tag prominent={technology === "Java 21" || technology === "Spring Boot"}>{technology}</Tag>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-medium text-accent">View case study</p>
    </Link>
  );
}
