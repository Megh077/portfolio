import type { ArchitectureDiagram } from "@/types/portfolio";

type FlowDiagramProps = {
  diagram: ArchitectureDiagram;
};

export function FlowDiagram({ diagram }: FlowDiagramProps) {
  return (
    <figure className="rounded-xl border border-line bg-surface p-5 sm:p-6">
      <figcaption className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
        {diagram.title}
      </figcaption>
      <ol className="mt-5">
        {diagram.steps.map((step, stepIndex) => (
          <li key={`${diagram.title}-${stepIndex}`}>
            <div className="grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
              {step.nodes.map((node) => (
                <div
                  key={`${node.label}-${node.detail ?? ""}`}
                  className="rounded-lg border border-line bg-background px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">{node.label}</p>
                  {node.detail ? (
                    <p className="mt-1 font-mono text-[11px] leading-5 text-muted">{node.detail}</p>
                  ) : null}
                </div>
              ))}
            </div>
            {stepIndex < diagram.steps.length - 1 ? (
              <div className="flex justify-center py-2" aria-hidden="true">
                <span className="h-5 w-px bg-accent/50" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      {diagram.caption ? (
        <p className="mt-5 text-sm leading-6 text-muted">{diagram.caption}</p>
      ) : null}
    </figure>
  );
}
