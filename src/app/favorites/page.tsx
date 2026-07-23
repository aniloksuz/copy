import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { CategoryNav } from "@/components/CategoryNav";
import { FavoritesView } from "@/components/FavoritesView";
import { SiteFooter } from "@/components/SiteFooter";
import { FAVORITE_PRODUCTS } from "@/lib/favorites-data";

export const metadata: Metadata = {
  title: "En Sevilenler | Hipicon",
  description:
    "Hipicon'da en çok favorilenen tasarım ürünleri — küratör ve tasarımcıların en beğenilen parçalarını keşfet.",
};

export default function FavoritesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white">
        <AnnouncementBar />
        <SiteHeader />
        <CategoryNav />
      </header>
      <main className="flex-1">
        <FavoritesView products={FAVORITE_PRODUCTS} />
      </main>
      <SiteFooter />
    </div>
  );
}
