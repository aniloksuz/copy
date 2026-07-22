import { Carousel } from "@/components/Carousel";
import { ProductCard } from "@/components/ProductCard";
import { WEEKLY_FAVORITES } from "@/lib/home-data";

export function WeeklyFavorites() {
  return (
    <Carousel title="Bu Hafta En Sevilenler">
      {WEEKLY_FAVORITES.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Carousel>
  );
}
