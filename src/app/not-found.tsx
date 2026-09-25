import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[70vh] w-full max-w-xl flex-col justify-center px-5">
      <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page is not on the site.</h1>
      <p className="mt-4 text-sm leading-6 text-muted">
        The case studies live under Projects.
      </p>
      <Link href="/" className="mt-6 text-sm text-accent hover:text-accent-strong">
        Back to the portfolio
      </Link>
    </main>
  );
}
