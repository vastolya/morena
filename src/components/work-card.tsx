import Image from "next/image";
import Link from "next/link";
import { categories, type Work } from "@/data/works";

export function WorkCard({
  work,
  index,
  sizes = "(min-width: 768px) 33vw, 50vw",
  aspect = "aspect-[3/4]",
}: {
  work: Work;
  index: number;
  sizes?: string;
  aspect?: string;
}) {
  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <div className={`relative overflow-hidden bg-paper-2 ${aspect}`}>
        <Image
          src={work.cover.src}
          alt={work.title}
          fill
          sizes={sizes}
          className="mono object-cover group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 text-[11px] text-white mix-blend-difference">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
        <h3 className="text-[15px] leading-tight font-medium tracking-tight">{work.title}</h3>
        <span className="shrink-0 font-serif text-[15px] text-muted italic">
          {categories[work.category]}
        </span>
      </div>
    </Link>
  );
}
