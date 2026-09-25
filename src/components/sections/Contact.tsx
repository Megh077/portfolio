import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const links = [
  {
    label: "Phone",
    value: profile.phone,
    href: null,
    external: false,
    icon: "phone" as const,
  },
  {
    label: "Email",
    value: profile.email,
    href: profile.emailUrl,
    external: true,
    icon: "mail" as const,
  },
  {
    label: "GitHub",
    value: profile.githubUrl.replace("https://github.com/", ""),
    href: profile.githubUrl,
    external: true,
    icon: "github" as const,
  },
  ...(profile.linkedinUrl
    ? [
        {
          label: "LinkedIn",
          value: "Profile",
          href: profile.linkedinUrl,
          external: true,
          icon: "linkedin" as const,
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Get in touch" />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {links.map((link) => {
            const content = (
              <>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-accent">
                  {link.icon === "phone" ? <Phone aria-hidden="true" size={18} /> : null}
                  {link.icon === "mail" ? <Mail aria-hidden="true" size={18} /> : null}
                  {link.icon === "github" ? <GitHubIcon className="h-4 w-4" /> : null}
                  {link.icon === "linkedin" ? <LinkedInIcon className="h-4 w-4" /> : null}
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm text-foreground">{link.value}</span>
                </span>
              </>
            );

            return (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="flex h-full items-center gap-4 rounded-xl border border-line bg-surface p-5 hover:border-accent/50"
                    {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-surface p-5">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
