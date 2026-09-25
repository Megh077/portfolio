import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Expertise" title="Core expertise">
            Technologies applied in production, with Java and Spring Boot as the primary stack.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.04} className={group.emphasis === "primary" ? "md:col-span-2" : undefined}>
              <article
                className={`h-full rounded-xl border p-5 sm:p-6 ${
                  group.emphasis === "primary"
                    ? "border-accent/40 bg-surface"
                    : "border-line bg-surface"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
                    {group.label}
                  </span>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{group.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Tag prominent={group.emphasis === "primary" && (skill === "Java" || skill === "Spring Boot")}>
                        {skill}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
