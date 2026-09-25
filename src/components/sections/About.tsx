import { Reveal } from "@/components/ui/Reveal";

const points = [
  "Java, Spring Boot, and PostgreSQL",
  "Frontend development in React",
  "Healthcare, marketplace, and financial integrations",
  "AWS, Spring Security, and CI/CD",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Profile summary
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-foreground/90 sm:text-xl sm:leading-9">
            Software Engineer with 2+ years of experience designing scalable, production-grade REST
            APIs and secure backend systems using Java, Spring Boot, PostgreSQL, and AWS, with
            frontend development in React. Proficient in OAuth2, JWT, database optimization, and
            third-party integrations across healthcare, marketplace, and financial platforms.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-muted">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
