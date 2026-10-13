"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/data/works";

export function Gallery({ photos, title }: { photos: Photo[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        {photos.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden bg-paper-2"
            aria-label={`${title}, фото ${i + 1}`}
          >
            <Image
              src={p.src}
              alt={`${title}, фото ${i + 1}`}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-2 left-2 text-[11px] text-white mix-blend-difference">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-paper"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between px-4 py-4 text-[13px] md:px-6">
            <span>
              {String(open + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={() => setOpen(null)} className="hover:opacity-60">
              Закрыть ✕
            </button>
          </div>
          <div className="relative flex-1">
            <Image
              key={photos[open].id}
              src={photos[open].src}
              alt={`${title}, фото ${open + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="flex justify-between px-4 py-4 text-[13px] md:px-6">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="hover:opacity-60"
            >
              ← Назад
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="hover:opacity-60"
            >
              Дальше →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
