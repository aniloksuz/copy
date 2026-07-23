import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hipicon | Hayatına Tasarım Kat",
  description:
    "Özgün ve farklı tasarımcıları keşfederken ürünlerini satın alabileceğiniz online tasarım alışveriş ve keşif platformu hipicon.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-hip-ink">
        {children}
      </body>
    </html>
  );
}
