import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { categories, works, type Category } from "@/data/works";

export const metadata: Metadata = {
  title: "Работы",
  description: "Все работы Марины Баязовой: рубашки, корсеты, манишки, жилеты, пояса.",
};

export default function WorksPage() {
  const groups = (Object.keys(categories) as Category[])
    .map((key) => ({ key, label: categories[key], list: works.filter((w) => w.category === key) }))
    .filter((g) => g.list.length > 0);

  let counter = 0;

  return (
    <main className="grid-lines">
      <section className="px-4 pt-16 pb-10 md:px-6 md:pt-24">
        <p className="text-[12px] text-muted">Портфолио / {works.length} работ</p>
        <h1 className="mt-3 font-display text-[clamp(3.5rem,12vw,12rem)] leading-[0.9]">
          Работы
        </h1>
      </section>

      <nav className="sticky top-[66px] z-30 border-y border-line bg-paper/85 backdrop-blur-md">
        <ul className="flex gap-6 overflow-x-auto px-4 py-3 text-[13px] whitespace-nowrap md:px-6">
          {groups.map((g) => (
            <li key={g.key}>
              <a href={`#${g.key}`} className="transition-opacity hover:opacity-50">
                {g.label} <sup className="text-muted">{g.list.length}</sup>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map((g) => (
        <section key={g.key} id={g.key} className="scroll-mt-32 px-4 py-14 md:px-6 md:py-20">
          <div className="mb-8 flex items-baseline justify-between border-b border-red pb-3">
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-none">
              {g.label}
            </h2>
            <span className="font-serif text-xl text-red italic">{g.list.length}</span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {g.list.map((work) => (
              <WorkCard
                key={work.slug}
                work={work}
                index={++counter}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
