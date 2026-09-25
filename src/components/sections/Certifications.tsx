import { Award } from "lucide-react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Certifications" />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:max-w-xl">
          {certifications.map((certification) => (
            <li key={certification.name}>
              <Reveal>
                <article className="flex gap-4 rounded-xl border border-line bg-surface p-5">
                  {certification.badge ? (
                    <Image
                      src={certification.badge}
                      alt={`${certification.name} badge`}
                      width={72}
                      height={88}
                      className="h-20 w-16 shrink-0 object-contain"
                    />
                  ) : (
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-accent">
                      <Award aria-hidden="true" size={18} />
                    </span>
                  )}
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {certification.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
                    {certification.date ? (
                      <p className="mt-2 font-mono text-[11px] text-muted">Issued {certification.date}</p>
                    ) : null}
                    {certification.credentialId ? (
                      <p className="mt-2 font-mono text-[11px] text-muted">
                        Credential ID {certification.credentialId}
                      </p>
                    ) : null}
                    {certification.verificationUrl ? (
                      <a
                        href={certification.verificationUrl}
                        className="mt-3 inline-flex text-sm text-accent hover:text-accent-strong"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Verify credential
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
