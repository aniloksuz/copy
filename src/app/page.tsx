import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { CategoryNav } from "@/components/CategoryNav";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { WeeklyFavorites } from "@/components/WeeklyFavorites";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white">
        <AnnouncementBar />
        <SiteHeader />
        <CategoryNav />
      </header>
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <WeeklyFavorites />
      </main>
      <SiteFooter />
    </div>
  );
}
