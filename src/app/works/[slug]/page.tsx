import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Gallery } from "@/components/gallery";
import { categories, getWork, works } from "@/data/works";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.description,
    openGraph: { images: [work.cover.src] },
  };
}

export default function WorkPage(props: PageProps<"/works/[slug]">) {
  return (
    <Suspense fallback={<WorkSkeleton />}>
      <WorkContent params={props.params} />
    </Suspense>
  );
}

function WorkSkeleton() {
  return (
    <main className="grid border-b border-line md:min-h-[calc(100svh-66px)] md:grid-cols-2">
      <div className="aspect-[3/4] animate-pulse bg-paper-2 md:aspect-auto" />
      <div className="grid-lines" />
    </main>
  );
}

async function WorkContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const i = works.indexOf(work);
  const prev = works[(i - 1 + works.length) % works.length];
  const next = works[(i + 1) % works.length];

  return (
    <main>
      {/* Spread: photo left, text right */}
      <section className="grid border-b border-line md:min-h-[calc(100svh-66px)] md:grid-cols-2">
        <div className="relative aspect-[3/4] md:aspect-auto">
          <Image
            src={work.cover.src}
            alt={work.title}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grid-lines flex flex-col px-4 py-10 md:px-10 md:py-12">
          <div className="flex justify-between text-[12px] text-muted">
            <Link href="/works" className="hover:text-ink">
              ← Все работы
            </Link>
            <span>
              {String(i + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
            </span>
          </div>

          <div className="my-auto py-16">
            <Link
              href={`/works#${work.category}`}
              className="font-serif text-[1.4rem] text-muted italic hover:text-ink"
            >
              {categories[work.category]}
            </Link>
            <h1 className="mt-3 font-display text-[clamp(2.6rem,5.5vw,6rem)] leading-[0.95]">
              {work.title}
            </h1>
            <p className="mt-8 max-w-md text-[16px] leading-relaxed text-ink/80">
              {work.description}
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-y-3 border-t border-line pt-4 text-[14px]">
              <dt className="text-muted">Материал</dt>
              <dd>{work.material}</dd>
              {work.size && (
                <>
                  <dt className="text-muted">Размер</dt>
                  <dd>{work.size}</dd>
                </>
              )}
              <dt className="text-muted">Исполнение</dt>
              <dd>Ручная работа</dd>
              <dt className="text-muted">Фотографий</dt>
              <dd>{work.photos.length}</dd>
            </dl>

            <Link
              href="/#contacts"
              className="mt-10 inline-flex items-center gap-3 bg-red px-6 py-3 text-[14px] text-paper transition-opacity hover:opacity-80"
            >
              Заказать похожее <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {work.photos.length > 1 && (
        <section className="px-4 py-16 md:px-6 md:py-24">
          <div className="mb-8 flex items-baseline justify-between border-b border-red pb-3">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.5rem)]">Детали</h2>
            <span className="font-serif text-xl text-red italic">{work.photos.length}</span>
          </div>
          <Gallery photos={work.photos} title={work.title} />
        </section>
      )}

      <nav className="grid grid-cols-2 border-t border-line">
        {[
          { w: prev, label: "Предыдущая" },
          { w: next, label: "Следующая" },
        ].map(({ w, label }, k) => (
          <Link
            key={label}
            href={`/works/${w.slug}`}
            className={`group flex items-center gap-4 px-4 py-6 md:px-6 ${k === 1 ? "flex-row-reverse border-l border-line text-right" : ""}`}
          >
            <span className="relative block h-24 w-16 shrink-0 overflow-hidden md:h-32 md:w-24">
              <Image src={w.cover.src} alt="" fill sizes="96px" className="object-cover" />
            </span>
            <span>
              <span className="block text-[12px] text-muted">{label}</span>
              <span className="mt-1 block text-[clamp(1.1rem,2.2vw,1.8rem)] leading-tight font-display">
                {w.title}
              </span>
            </span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
