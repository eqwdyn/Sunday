import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Sunday",
  description:
    "Sunday - кафе, ресторан, бар. Севастополь · ул. Сенявина, 1. Номер телефона: +7 (978) 063-74-13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={cormorantGaramond.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
