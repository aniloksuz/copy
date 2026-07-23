import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/types/home";

export function ProductGridCard({ product }: { product: Product }) {
  return (
    <div className="group/main relative flex h-full flex-col">
      <div className="group/images relative aspect-square overflow-hidden rounded-sm bg-[#f5f5f3]">
        <Link
          href={product.href}
          aria-label={product.name}
          className="absolute inset-0 block"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 336px"
            className="object-cover transition-transform duration-500 group-hover/main:scale-[1.04]"
          />
        </Link>

        {/* Favorite count */}
        {product.favoriteCount != null && (
          <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-hip-ink shadow-sm">
            <Heart className="h-3.5 w-3.5 fill-hip-red text-hip-red" />
            {product.favoriteCount}
          </span>
        )}

        {/* Image pager dots (revealed on hover) */}
        <span className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white/80 px-2 py-1 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/main:opacity-100">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-hip-ink" : "bg-hip-ink/30"}`}
            />
          ))}
        </span>
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-bold text-hip-ink">{product.brand}</p>
          {product.colorOptions && (
            <span className="shrink-0 text-[11px] text-hip-muted">
              Renk seçenekleri
            </span>
          )}
        </div>
        <Link href={product.href}>
          <p className="mt-0.5 line-clamp-2 text-sm text-hip-muted transition-colors hover:text-hip-ink">
            {product.name}
          </p>
        </Link>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-base font-bold text-hip-ink">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-hip-muted line-through">
              {product.oldPrice}
            </span>
          )}
          {product.discount && !product.cartPrice && (
            <span className="text-sm font-bold text-hip-red">{product.discount}</span>
          )}
        </div>

        {product.cartPrice && (
          <div className="mt-1 flex w-fit items-center gap-1.5 rounded bg-[#eaf7e1] px-2 py-0.5 text-xs font-semibold text-[#3f8f2e]">
            <span>{product.cartPrice}</span>
            {product.discount && <span className="text-hip-red">{product.discount}</span>}
          </div>
        )}

        {product.sameDayShipping && (
          <span className="mt-1 text-xs font-medium text-hip-muted">Aynı Gün Kargo</span>
        )}
      </div>
    </div>
  );
}
