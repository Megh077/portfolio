type TagProps = {
  children: string;
  prominent?: boolean;
};

export function Tag({ children, prominent = false }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] tracking-wide ${
        prominent
          ? "border-accent/50 bg-accent/10 text-accent-strong"
          : "border-line bg-surface text-muted"
      }`}
    >
      {children}
    </span>
  );
}
