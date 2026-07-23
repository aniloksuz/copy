import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { FEATURED_CATEGORIES } from "@/lib/home-data";

export function FeaturedCategories() {
  return (
    <Carousel title="Öne Çıkan Kategoriler">
      {FEATURED_CATEGORIES.map((cat) => (
        <Link
          key={cat.href}
          href={cat.href}
          className="group w-[240px] shrink-0 snap-start lg:w-[280px]"
        >
          <div className="relative aspect-[1000/691] overflow-hidden rounded-2xl bg-[#f3f1ea]">
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              sizes="280px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="mt-3 text-center text-base font-semibold text-hip-ink">
            {cat.label}
          </p>
        </Link>
      ))}
    </Carousel>
  );
}
