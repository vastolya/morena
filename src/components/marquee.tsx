export function Marquee({ items }: { items: string[] }) {
  const row = items.join("  /  ") + "  /  ";
  return (
    <div className="overflow-hidden bg-red py-3 text-paper" aria-hidden>
      <div className="marquee flex w-max whitespace-pre font-display text-[clamp(1.05rem,1.8vw,1.4rem)] tracking-wide uppercase">
        <span>{row.repeat(3)}</span>
        <span>{row.repeat(3)}</span>
      </div>
    </div>
  );
}
