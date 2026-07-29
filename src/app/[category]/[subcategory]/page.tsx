import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { CategoryNav } from "@/components/CategoryNav";
import { FavoritesView } from "@/components/FavoritesView";
import { SiteFooter } from "@/components/SiteFooter";
import { FAVORITE_PRODUCTS } from "@/lib/favorites-data";
import { allSubcategoryParams, getMenuItemLabel } from "@/lib/mega-menu";

type Params = { category: string; subcategory: string };

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toLocaleUpperCase("tr") + w.slice(1) : w))
    .join(" ");
}

function resolveTitle({ category, subcategory }: Params): string {
  return (
    getMenuItemLabel(`/${category}/${subcategory}`) ?? slugToTitle(subcategory)
  );
}

// Pre-render every known subcategory from the mega-menus; others render on demand.
export function generateStaticParams() {
  return allSubcategoryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const title = resolveTitle(await params);
  return { title: `${title} | Artı Mobilya` };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const title = resolveTitle(await params);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white">
        <AnnouncementBar />
        <SiteHeader />
        <CategoryNav />
      </header>
      <main className="flex-1">
        <FavoritesView
          products={FAVORITE_PRODUCTS}
          title={title}
          count={`${FAVORITE_PRODUCTS.length} Ürün`}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
