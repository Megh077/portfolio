"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-ink hover:bg-accent-strong"
    >
      Save as PDF
    </button>
  );
}
