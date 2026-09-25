import { education } from "@/data/resume";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Qualification" />
        </Reveal>
        <ul className="mt-12 grid max-w-xl gap-4">
          {education.map((item) => (
            <li key={item.credential}>
              <Reveal>
                <article className="rounded-xl border border-line bg-surface p-5 sm:p-6">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                    {item.credential}
                  </h3>
                  <p className="mt-2 text-sm text-foreground">{item.institution}</p>
                  <p className="mt-1 text-sm text-muted">{item.location}</p>
                  <p className="mt-4 font-mono text-xs text-muted">{item.result}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
