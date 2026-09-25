import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { profile } from "@/data/profile";
import {
  education,
  extracurricular,
  resumeExperience,
  resumeProjects,
  resumeSkills,
  resumeSummary,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Meghana S., Java Backend Developer with experience in Spring Boot, PostgreSQL, healthcare integrations, AWS, and React.",
  alternates: {
    canonical: "/resume",
  },
};

const degree = education[0];

export default function ResumePage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link href="/#hero" className="text-sm text-muted hover:text-foreground">
            Back to portfolio
          </Link>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-ink hover:bg-accent-strong"
          >
            Download PDF
          </a>
        </div>
        <article className="resume-sheet">
          <header className="border-b border-line pb-6">
            <h1 className="text-4xl font-semibold tracking-tight">{profile.name}</h1>
            <p className="mt-4 text-sm leading-6 text-foreground">
              <span>{profile.phone}</span>
              <span className="px-2 text-muted" aria-hidden="true">
                ·
              </span>
              <a href={profile.emailUrl} target="_blank" rel="noreferrer">
                {profile.email}
              </a>
              <span className="px-2 text-muted" aria-hidden="true">
                ·
              </span>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="px-2 text-muted" aria-hidden="true">
                ·
              </span>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </header>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
              Professional summary
            </h2>
            <p className="mt-3 text-sm leading-7 text-foreground/90">{resumeSummary}</p>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Core skills</h2>
            <ul className="mt-3 space-y-2">
              {resumeSkills.map((skill) => (
                <li key={skill.label} className="text-sm leading-6">
                  <span className="font-medium text-foreground">{skill.label}: </span>
                  <span className="text-muted">{skill.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
              Professional experience
            </h2>
            <div className="mt-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold">{resumeExperience.role}</h3>
                <p className="font-mono text-xs text-muted">{resumeExperience.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {resumeExperience.company}, {resumeExperience.location}
              </p>
              <ul className="mt-3 space-y-2">
                {resumeExperience.points.map((point) => (
                  <li key={point} className="text-sm leading-6 text-foreground/90">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
              Technical projects
            </h2>
            <ul className="mt-4 space-y-4">
              {resumeProjects.map((project) => (
                <li key={project.name}>
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.name}
                    <span className="font-normal text-muted"> · {project.stack}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{project.summary}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Certifications</h2>
            <p className="mt-3 text-sm text-foreground">
              Oracle Certified Professional (OCP) · Java SE 11 Developer (2025)
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Education</h2>
            <div className="mt-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                  {degree.institution}, {degree.location}
                </h3>
                <p className="font-mono text-xs text-muted">{degree.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {degree.credential} · {degree.result}
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
              Extracurricular activities
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground/90">{extracurricular}</p>
          </section>
        </article>
      </div>
    </SiteShell>
  );
}
