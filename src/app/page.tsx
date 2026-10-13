import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { categories, getWork, photo, works, type Category } from "@/data/works";
import { site } from "@/data/site";

const featured = [
  "izumrudnoe-plate",
  "myagkij-korset-velvet",
  "hlopkovaya-rubashka-s-vorotnikom",
  "korset-na-shnurovke-dzhinsa",
  "zhilet-s-vyshivkoj",
  "manishka-s-rozami",
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
    text: "Натуральные материалы: лён, хлопок, крапива, шерсть, гобелен, бархат. Подбираем фактуру и отделку.",
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
      <section className="grid-lines relative overflow-hidden md:h-[calc(100svh-66px)] md:min-h-[620px]">
        <div className="grid h-full grid-cols-1 md:grid-cols-6">
          <div className="flex flex-col justify-between gap-10 px-4 pt-12 pb-8 md:col-span-3 md:px-6 md:pt-16">
            <p className="rise text-[13px] tracking-[0.2em] text-red uppercase">
              Одежда ручной работы
            </p>

            <div>
              <h1 className="rise font-display text-[clamp(4rem,10.5vw,10.5rem)] leading-[0.9] tracking-[-0.02em] [animation-delay:100ms]">
                Марина
                <br />
                <span className="md:pl-[0.6em]">Баязова</span>
              </h1>
              <p className="rise mt-6 max-w-md font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] leading-tight text-ink/80 italic [animation-delay:250ms]">
                Рубашки, корсеты и манишки — по мотивам русского народного костюма
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-x-10 gap-y-4 text-[14px]">
              <Link
                href="/works"
                className="bg-red px-6 py-3 text-paper transition-opacity hover:opacity-85"
              >
                Смотреть работы
              </Link>
              <p className="text-muted">
                <span className="font-display text-[2.2rem] leading-none text-ink">
                  {works.length}
                </span>{" "}
                работ в портфолио
              </p>
            </div>
          </div>

          <div className="relative px-4 pb-10 md:col-span-3 md:px-6 md:py-8">
            <div className="relative mx-auto aspect-[3/4] overflow-hidden rounded-t-full border-[6px] border-paper outline outline-1 outline-red md:aspect-auto md:h-full md:w-[78%]">
              <Image
                src={hero.src}
                alt="Изумрудное платье ручной работы на снегу"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="ornament" aria-hidden />
      <Marquee
        items={[
          "Ручная работа",
          "Лён",
          "Корсеты",
          "Гобелен",
          "Шнуровка",
          "Рубахи",
          "Манишки",
          "Жилеты",
          "Кружево",
          "Пояса",
        ]}
      />
      <div className="ornament" aria-hidden />

      {/* ABOUT — designer's monologue */}
      <section id="about" className="grid scroll-mt-16 grid-cols-1 border-b border-line md:grid-cols-6">
        <div className="relative aspect-[3/4] md:col-span-2 md:aspect-auto md:min-h-[90vh]">
          <Image
            src={photo("053").src}
            alt="Мягкий корсет на шнуровке"
            fill
            sizes="(min-width: 768px) 34vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-16 px-4 py-12 md:col-span-4 md:px-10 md:py-16">
          <p className="text-[13px] tracking-[0.2em] text-red uppercase">О мастерской</p>

          <div>
            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.95]">
              Это монолог
              <br />
              мастерицы
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-serif text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight italic">
                  Вещи, которые шьются под человека
                </p>
                <span className="mt-6 block h-px w-12 bg-red" />
              </div>
              <div className="space-y-4 text-[16px] leading-relaxed text-ink/85">
                <p>
                  {site.name} шьёт одежду вручную — от выкройки до последнего стежка. Рубахи с
                  кружевными воротниками, корсеты на шнуровке, манишки из гобелена, жилеты и
                  пояса-портупеи.
                </p>
                <p>
                  В основе — русские народные танцы и костюм. В работе — натуральные ткани и
                  внимание к деталям: защипы, сборки, ручная отделка, подклад контрастного
                  цвета.
                </p>
              </div>
            </div>
          </div>

          <div className="ornament opacity-60" aria-hidden />
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="grid-lines px-4 py-20 md:px-6 md:py-32">
        <div className="mb-14 flex items-end justify-between gap-6 md:mb-24">
          <h2 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9]">Избранное</h2>
          <Link href="/works" className="shrink-0 border-b border-red pb-0.5 text-[14px] text-red">
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
        <p className="mb-8 text-[13px] tracking-[0.2em] text-red uppercase">Разделы</p>
        <ul>
          {counts.map(({ key, label, list }, i) => (
            <li key={key} className="border-t border-line last:border-b">
              <Link
                href={`/works#${key}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-6 md:py-6"
              >
                <span className="text-[13px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[clamp(1.7rem,4vw,3.5rem)] leading-none transition-[transform,color] duration-500 group-hover:translate-x-3 group-hover:text-red md:col-span-3">
                  {label}
                </span>
                <span className="hidden gap-2 md:flex">
                  {list.slice(0, 3).map((w) => (
                    <span
                      key={w.slug}
                      className="relative block h-16 w-12 overflow-hidden rounded-t-full"
                    >
                      <Image src={w.cover.src} alt="" fill sizes="48px" className="object-cover" />
                    </span>
                  ))}
                </span>
                <span className="text-right font-serif text-[clamp(1.3rem,2vw,1.7rem)] text-red italic">
                  {list.length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS — editorial spread */}
      <section id="process" className="scroll-mt-16 bg-green px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-paper p-4 md:p-8">
            <p className="mb-4 text-[12px] tracking-[0.2em] text-red uppercase">Процесс</p>
            <div className="relative aspect-[4/5]">
              <Image
                src={photo("055").src}
                alt="Шнуровка корсета крупным планом"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-[12px] tracking-[0.2em] text-muted uppercase">
              Детали / Шнуровка
            </p>
          </div>

          <div className="flex flex-col bg-paper p-6 md:p-10">
            <h2 className="text-center font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.95]">
              Силуэт
              <br />
              ручной работы
            </h2>
            <div className="ornament mx-auto mt-6 w-40" aria-hidden />
            <p className="mt-4 text-center font-serif text-[1.3rem] text-muted italic">
              как появляется вещь
            </p>

            <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <p className="font-display text-[1.5rem] leading-tight">
                    <span className="mr-2 text-red">{String(i + 1).padStart(2, "0")}</span>
                    {step.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{step.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-auto flex justify-between pt-12 text-[13px] text-muted">
              <span>{site.name}</span>
              <Link href="/#contacts" className="text-red hover:underline">
                Обсудить заказ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
