import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Марина Баязова — одежда ручной работы",
    template: "%s — Марина Баязова",
  },
  description:
    "Блузы, корсеты, лифы, жилеты и пояса, сшитые вручную из льна, хлопка, гобелена и шерсти.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${interTight.variable} ${cormorant.variable}`}>
      <body className="min-h-dvh">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
