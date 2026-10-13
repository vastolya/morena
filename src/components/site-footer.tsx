import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="contacts" className="grid-lines scroll-mt-16">
      <div className="ornament" aria-hidden />
      <div className="px-4 pt-20 pb-8 md:px-6 md:pt-32">
        <p className="text-[13px] text-muted">Индивидуальный пошив и готовые вещи</p>
        <h2 className="mt-4 font-display text-[clamp(3rem,11vw,11rem)] leading-[0.9]">
          Напишите
          <br />
          <span className="font-serif font-light text-red italic">Марине</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 text-[clamp(1.4rem,2.6vw,2.2rem)] font-display sm:grid-cols-2 md:mt-24 md:grid-cols-6">
          <div className="md:col-span-2">
            <p className="font-sans text-[13px] text-muted">Telegram</p>
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block hover:underline"
            >
              {site.telegramLabel} ↗
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="font-sans text-[13px] text-muted">Телефон</p>
            <a href={`tel:${site.phone}`} className="mt-1 block hover:underline">
              {site.phoneLabel}
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6 text-[12px] text-muted">
          <span>© 2026 {site.name}</span>
          <Link href="/works" className="hover:text-ink">
            Все работы →
          </Link>
        </div>
      </div>
    </footer>
  );
}
