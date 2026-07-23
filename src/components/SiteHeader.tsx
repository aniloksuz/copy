import Link from "next/link";
import { Search, User, ShoppingBasket } from "lucide-react";
import { HipiconLogo } from "@/components/icons";

export function SiteHeader() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] items-center gap-4 px-4 py-4 lg:gap-8 lg:px-8">
      <Link href="/" aria-label="Hipicon" className="shrink-0 text-hip-ink">
        <HipiconLogo className="h-auto w-24 lg:w-36" />
      </Link>

      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-hip-muted" />
        <input
          type="text"
          placeholder="Tasarımcı, ürün veya kategori ara"
          className="h-11 w-full rounded-full border border-hip-line bg-white pl-12 pr-4 text-sm text-hip-ink outline-none transition-colors placeholder:text-hip-muted focus:border-hip-ink"
        />
      </div>

      <div className="flex shrink-0 items-center gap-4 lg:gap-7">
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-hip-ink transition-opacity hover:opacity-70"
        >
          <User className="h-5 w-5" strokeWidth={1.75} />
          <span className="hidden lg:inline">Giriş Yap</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-hip-ink transition-opacity hover:opacity-70"
        >
          <ShoppingBasket className="h-5 w-5" strokeWidth={1.75} />
          <span className="hidden lg:inline">Sepetim</span>
        </button>
      </div>
    </div>
  );
}
