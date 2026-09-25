"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const update = () => {
      const marker = 96;
      let current = navigation[0]?.id ?? "hero";

      for (const item of navigation) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }
        if (section.getBoundingClientRect().top <= marker) {
          current = item.id;
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (nearBottom) {
        current = navigation[navigation.length - 1]?.id ?? current;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const currentId =
    pathname.startsWith("/projects") ? "projects" : pathname === "/" ? active : "";

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/#hero" className="text-sm font-medium tracking-tight text-foreground">
          {profile.name}
          <span className="ml-2 hidden font-mono text-[11px] text-muted sm:inline">
            Java Backend
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = currentId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-line bg-background px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => {
              const isActive = currentId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-sm ${
                      isActive ? "bg-surface text-accent" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
