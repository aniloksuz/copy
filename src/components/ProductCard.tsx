import Image from "next/image";
import Link from "next/link";
import { Heart, Truck } from "lucide-react";
import type { Product } from "@/types/home";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className="group flex w-[180px] shrink-0 snap-start flex-col lg:w-[230px]"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f5f5f3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="230px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.rankBadge && (
          <span className="absolute left-2 top-2 rounded-full bg-hip-ink px-2.5 py-1 text-[11px] font-semibold text-white">
            {product.rankBadge}
          </span>
        )}

        <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-hip-ink shadow-sm transition-colors group-hover:text-hip-red">
          <Heart className="h-4 w-4" strokeWidth={1.75} />
        </span>

        {product.sameDayShipping && (
          <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-hip-ink shadow-sm">
            <Truck className="h-3.5 w-3.5" strokeWidth={2} />
            Aynı Gün Kargo
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-sm font-bold text-hip-ink">{product.brand}</p>
        <p className="mt-0.5 line-clamp-2 text-sm text-hip-muted">{product.name}</p>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-base font-bold text-hip-ink">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-hip-muted line-through">
              {product.oldPrice}
            </span>
          )}
          {product.discount && (
            <span className="text-sm font-bold text-hip-red">
              {product.discount}
            </span>
          )}
        </div>

        {product.cartPrice && (
          <span className="mt-1 w-fit rounded bg-[#eaf7e1] px-2 py-0.5 text-xs font-semibold text-[#3f8f2e]">
            {product.cartPrice}
          </span>
        )}
      </div>
    </Link>
  );
}
