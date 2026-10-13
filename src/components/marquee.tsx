export function Marquee({ items }: { items: string[] }) {
  const row = items.join("  /  ") + "  /  ";
  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-3 text-paper" aria-hidden>
      <div className="marquee flex w-max whitespace-pre text-[clamp(0.95rem,1.6vw,1.25rem)] font-medium tracking-tight uppercase">
        <span>{row.repeat(3)}</span>
        <span>{row.repeat(3)}</span>
      </div>
    </div>
  );
}
