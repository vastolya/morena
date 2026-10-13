import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { categories, getWork, photo, works, type Category } from "@/data/works";
import { site } from "@/data/site";

const featured = [
  "izumrudnoe-plate",
  "pechvork-lif",
  "bluza-s-kruzhevnym-vorotnikom",
  "alyj-byust",
  "zhilet-s-vyshivkoj",
  "lif-s-rozami",
].map((slug) => getWork(slug)!);

// Asymmetric placement on the 6-column grid, magazine style
const featuredLayout = [
  "md:col-span-2 md:col-start-1",
  "md:col-span-2 md:col-start-4 md:mt-48",
  "md:col-span-2 md:col-start-2 md:-mt-24",
  "md:col-span-2 md:col-start-5 md:mt-16",
  "md:col-span-2 md:col-start-1 md:mt-8",
  "md:col-span-3 md:col-start-4 md:mt-40",
];

const steps = [
  {
    title: "Разговор",
    text: "Обсуждаем, какую вещь вы хотите: фасон, ткань, цвет и то, как вы будете её носить.",
  },
  {
    title: "Мерки и выкройка",
    text: "Снимаем мерки, и выкройка строится под вашу фигуру — без стандартных размерных сеток.",
  },
  {
    title: "Ткань",
    text: "Натуральные материалы: лён, хлопок, шерсть, гобелен, бархат. Подбираем фактуру и отделку.",
  },
  {
    title: "Пошив",
    text: "Каждый шов, сборка и шнуровка делаются вручную. Готовую вещь можно примерить и подогнать.",
  },
];

export default function Home() {
  const hero = photo("012");
  const counts = Object.keys(categories).map((key) => {
    const list = works.filter((w) => w.category === key);
    return { key: key as Category, label: categories[key as Category], list };
  });

  return (
    <main>
      {/* HERO */}
      <section className="grid-lines relative isolate bg-paper h-[calc(100svh-66px)] min-h-[560px] overflow-hidden">
        <div className="absolute inset-y-0 left-1/3 w-2/3 md:left-[33.333%] md:w-[33.333%]">
          <Image
            src={hero.src}
            alt="Изумрудное платье ручной работы на снегу"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 34vw, 67vw"
            className="mono object-cover"
          />
        </div>

        <h1 className="pointer-events-none absolute inset-x-4 top-[8%] text-[clamp(4.2rem,15.5vw,17rem)] leading-[0.82] font-medium tracking-[-0.07em] text-white mix-blend-difference md:inset-x-6">
          <span className="rise block">Марина</span>
          <span className="rise block text-right [animation-delay:120ms]">Баязова</span>
        </h1>

        <p className="rise absolute top-[45%] left-4 font-serif text-[clamp(2.2rem,6vw,6rem)] leading-none font-light text-white italic mix-blend-difference [animation-delay:300ms] md:left-[17%]">
          ручная работа
        </p>

        <div className="absolute bottom-6 left-4 text-[12px] leading-snug md:left-6">
          <p className="text-muted">Работ в портфолио</p>
          <p className="mt-1 text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-medium tracking-tight">
            {works.length}
          </p>
        </div>

        <div className="absolute right-4 bottom-6 hidden max-w-[16rem] text-[12px] leading-snug md:block md:right-6 md:left-[83.333%] md:pl-3">
          <p className="text-muted">Материалы</p>
          <p className="mt-1">Лён, хлопок, шерсть, гобелен, бархат</p>
          <Link href="/works" className="mt-4 inline-block border-b border-ink pb-0.5">
            Смотреть работы →
          </Link>
        </div>
      </section>

      <Marquee
        items={[
          "Ручная работа",
          "Лён",
          "Корсеты",
          "Гобелен",
          "Шнуровка",
          "Блузы",
          "Вышивка",
          "Жилеты",
          "Кружево",
          "Пояса",
        ]}
      />

      {/* ABOUT — designer's monologue */}
      <section id="about" className="grid scroll-mt-16 grid-cols-1 border-b border-line md:grid-cols-6">
        <div className="relative aspect-[3/4] md:col-span-2 md:aspect-auto md:min-h-[90vh]">
          <Image
            src={photo("053").src}
            alt="Оливковый лиф со шнуровкой"
            fill
            sizes="(min-width: 768px) 34vw, 100vw"
            className="mono object-cover"
          />
          <span className="absolute top-4 left-4 text-[12px] text-white mix-blend-difference">
            О мастерской
          </span>
        </div>

        <div className="flex flex-col justify-between gap-16 px-4 py-12 md:col-span-4 md:px-10 md:py-16">
          <p className="text-right text-[12px] text-muted">2026</p>

          <div>
            <h2 className="text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
              Это монолог
              <br />
              мастерицы
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-serif text-[clamp(1.4rem,2.2vw,2rem)] leading-tight italic">
                  Вещи, которые шьются под человека, а не под размер.
                </p>
                <span className="mt-6 block h-px w-12 bg-ink" />
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
                <p>
                  {site.name} шьёт одежду вручную — от выкройки до последнего стежка. Блузы с
                  кружевными воротниками, корсеты на шнуровке, гобеленовые лифы, жилеты и
                  пояса-портупеи.
                </p>
                <p>
                  В работе — только натуральные ткани и внимательность к деталям: защипы,
                  сборки, ручная отделка, подклад контрастного цвета.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-line pt-4 text-[12px] text-muted">
            <span>Концепция</span>
            <span className="text-center">Ремесло</span>
            <span className="text-right">Портфолио</span>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="grid-lines px-4 py-20 md:px-6 md:py-32">
        <div className="mb-14 flex items-end justify-between gap-6 md:mb-24">
          <h2 className="text-[clamp(3rem,10vw,10rem)] leading-[0.85] font-medium tracking-[-0.06em]">
            Избранное
          </h2>
          <Link href="/works" className="shrink-0 border-b border-ink pb-0.5 text-[13px]">
            Все работы ({works.length})
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-6 md:gap-x-6">
          {featured.map((work, i) => (
            <div key={work.slug} className={featuredLayout[i]}>
              <WorkCard
                work={work}
                index={i + 1}
                aspect={i === 5 ? "aspect-[4/5]" : "aspect-[3/4]"}
                sizes={i === 5 ? "(min-width: 768px) 50vw, 50vw" : undefined}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY INDEX */}
      <section className="border-t border-line px-4 py-20 md:px-6 md:py-28">
        <p className="mb-8 text-[12px] text-muted">Разделы</p>
        <ul>
          {counts.map(({ key, label, list }, i) => (
            <li key={key} className="border-t border-line last:border-b">
              <Link
                href={`/works#${key}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-6 md:py-6"
              >
                <span className="text-[12px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[clamp(1.6rem,4vw,3.5rem)] leading-none tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-3 md:col-span-3">
                  {label}
                </span>
                <span className="hidden gap-2 md:flex">
                  {list.slice(0, 3).map((w) => (
                    <span key={w.slug} className="relative block h-16 w-12 overflow-hidden">
                      <Image src={w.cover.src} alt="" fill sizes="48px" className="mono object-cover" />
                    </span>
                  ))}
                </span>
                <span className="text-right font-serif text-[clamp(1.2rem,2vw,1.6rem)] italic">
                  {list.length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS — editorial spread */}
      <section id="process" className="scroll-mt-16 bg-paper-2 px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-6">
          <div className="bg-paper p-4 md:p-8">
            <p className="mb-4 text-[11px] tracking-wide uppercase">Выпуск 01 / Процесс</p>
            <div className="relative aspect-[4/5]">
              <Image
                src={photo("055").src}
                alt="Шнуровка оливкового лифа крупным планом"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="mono object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] tracking-wide text-muted uppercase">
              Детали / Шнуровка
            </p>
          </div>

          <div className="flex flex-col bg-paper p-6 md:p-10">
            <h2 className="text-center font-serif text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.92] font-normal uppercase">
              Силуэт
              <br />
              ручной
              <br />
              работы
            </h2>
            <p className="mt-6 text-center text-[12px] tracking-wide uppercase">
              «Как появляется вещь»
            </p>

            <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <p className="font-serif text-[1.4rem] leading-tight font-medium">
                    <span className="mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {step.title}
                  </p>
                  <p className="mt-2 font-serif text-[1.05rem] leading-snug text-ink/80">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-auto flex justify-between pt-12 text-[11px] tracking-wide text-muted uppercase">
              <span>{site.name}</span>
              <Link href="/#contacts" className="text-ink hover:underline">
                Обсудить заказ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
