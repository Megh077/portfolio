import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {profile.name} · {profile.role}
        </p>
        <p>
          <Link href="/#contact" className="hover:text-foreground">
            Contact
          </Link>
          <span className="px-2" aria-hidden="true">
            /
          </span>
          <Link href="/resume" className="hover:text-foreground">
            Resume
          </Link>
        </p>
      </div>
    </footer>
  );
}
