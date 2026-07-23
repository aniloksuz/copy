"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, Tag, Truck, ArrowUpDown, X } from "lucide-react";
import { ProductGridCard } from "@/components/ProductGridCard";
import {
  DEFAULT_SORT,
  PRODUCT_COUNT,
  SORT_OPTIONS,
  type SortOption,
} from "@/lib/favorites-data";
import type { Product } from "@/types/home";
import { cn } from "@/lib/utils";

function parsePrice(price: string): number {
  return Number(
    price
      .replace(/[^\d.,]/g, "")
      .replace(/\./g, "")
      .replace(",", "."),
  );
}

export function FavoritesView({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortOption>(DEFAULT_SORT);
  const [sortOpen, setSortOpen] = useState(false);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);
  const [onlySameDay, setOnlySameDay] = useState(false);

  const visible = useMemo(() => {
    let list = [...products];
    if (onlyDiscounted) list = list.filter((p) => p.discount || p.cartPrice);
    if (onlySameDay) list = list.filter((p) => p.sameDayShipping);

    switch (sort) {
      case "Fiyat - Düşükten Yükseğe":
        list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "Fiyat - Yüksekten Düşüğe":
        list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "En Çok Favorilenenler":
        list.sort((a, b) => (b.favoriteCount ?? 0) - (a.favoriteCount ?? 0));
        break;
      default:
        break;
    }
    return list;
  }, [products, sort, onlyDiscounted, onlySameDay]);

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 pb-12 lg:px-8">
      <p className="py-6 text-center text-sm font-semibold text-hip-muted">
        {PRODUCT_COUNT}
      </p>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 border-y border-hip-line py-4">
        <div className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ToolbarPill icon={<SlidersHorizontal className="h-4 w-4" />}>
            Filtrele
          </ToolbarPill>
          <ToolbarPill
            icon={<Tag className="h-4 w-4" />}
            active={onlyDiscounted}
            onClick={() => setOnlyDiscounted((v) => !v)}
          >
            İndirimdekiler
          </ToolbarPill>
          <ToolbarPill
            icon={<Truck className="h-4 w-4" />}
            active={onlySameDay}
            onClick={() => setOnlySameDay((v) => !v)}
          >
            Aynı Gün Kargo
          </ToolbarPill>
        </div>
        <ToolbarPill
          icon={<ArrowUpDown className="h-4 w-4" />}
          onClick={() => setSortOpen(true)}
        >
          Sırala
        </ToolbarPill>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductGridCard key={product.id} product={product} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-hip-muted">
          Seçtiğin filtrelere uygun ürün bulunamadı.
        </p>
      )}

      {/* Sort drawer */}
      {sortOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            aria-label="Kapat"
            onClick={() => setSortOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-hip-line px-6 py-5">
              <h2 className="text-lg font-bold text-hip-ink">Sırala</h2>
              <button
                aria-label="Kapat"
                onClick={() => setSortOpen(false)}
                className="text-hip-ink transition-opacity hover:opacity-60"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-3 p-6">
              {SORT_OPTIONS.map((option) => {
                const active = option === sort;
                return (
                  <button
                    key={option}
                    onClick={() => {
                      setSort(option);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "h-12 rounded-full border text-sm font-semibold transition-colors",
                      active
                        ? "border-hip-ink bg-hip-ink text-white"
                        : "border-hip-line bg-white text-hip-ink hover:border-hip-ink",
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function ToolbarPill({
  children,
  icon,
  active,
  onClick,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-10 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors",
        active
          ? "border-hip-ink bg-hip-ink text-white"
          : "border-hip-line bg-white text-hip-ink hover:border-hip-ink",
      )}
    >
      {icon}
      {children}
    </button>
  );
}
