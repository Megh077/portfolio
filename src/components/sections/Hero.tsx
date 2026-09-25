import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export function Hero() {
  const current = experience[0];

  return (
    <section id="hero" className="hero-wash scroll-mt-24 border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.72fr)] lg:items-center lg:py-32">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Software Engineer
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-accent-strong sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">
            {profile.statement}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
            {profile.heroTags.map((tag) => (
              <li key={tag.label}>
                <Tag prominent={tag.prominent}>{tag.label}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-ink hover:bg-accent-strong"
            >
              View My Work
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line px-5 text-sm font-medium text-foreground hover:border-accent/60"
            >
              Resume
            </Link>
          </div>
          <ul className="mt-8 flex items-center gap-3" aria-label="Contact links">
            <li>
              <a
                href={profile.githubUrl}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground hover:border-accent/60"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </li>
            {profile.linkedinUrl ? (
              <li>
                <a
                  href={profile.linkedinUrl}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground hover:border-accent/60"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </li>
            ) : null}
            <li>
              <a
                href={profile.emailUrl}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground hover:border-accent/60"
                aria-label="Email"
                target="_blank"
                rel="noreferrer"
              >
                <Mail aria-hidden="true" size={16} />
              </a>
            </li>
          </ul>
        </div>
        <aside className="rounded-2xl border border-line bg-surface p-6 sm:p-7" aria-label="Current role">
          <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">Currently</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{current.role}</p>
          <p className="mt-2 text-base text-foreground/90">{current.company}</p>
          {current.location ? <p className="mt-1 text-sm leading-6 text-muted">{current.location}</p> : null}
          <p className="mt-6 font-mono text-xs text-accent">{current.period}</p>
          <p className="mt-6 border-t border-line pt-6 text-sm leading-6 text-muted">
            Java, Spring Boot, PostgreSQL, AWS, and React.
          </p>
        </aside>
      </div>
    </section>
  );
}
