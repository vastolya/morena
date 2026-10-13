import Link from "next/link";

const nav = [
  { href: "/works", label: "Работы" },
  { href: "/#about", label: "О мастерской" },
  { href: "/#process", label: "Процесс" },
  { href: "/#contacts", label: "Контакты" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="grid grid-cols-3 items-center px-4 py-4 text-[13px] md:grid-cols-6 md:px-6">
        <Link href="/" className="leading-tight">
          <span className="block font-medium tracking-tight">Марина Баязова</span>
          <span className="font-serif text-[15px] italic text-muted">ручная работа</span>
        </Link>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hidden transition-opacity hover:opacity-50 md:block"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/works"
          className="col-start-3 justify-self-end transition-opacity hover:opacity-50 md:hidden"
        >
          Работы
        </Link>
        <Link
          href="/#contacts"
          className="hidden justify-self-end md:flex md:items-center md:gap-2"
        >
          <span className="size-1.5 bg-ink" aria-hidden />
          Заказать
        </Link>
      </div>
    </header>
  );
}
