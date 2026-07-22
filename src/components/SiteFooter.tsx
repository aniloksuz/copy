import Link from "next/link";
import { HipiconLogo } from "@/components/icons";
import {
  FOOTER_CATEGORIES,
  POPULAR_DESIGNERS,
  POPULAR_SEARCHES,
} from "@/lib/home-data";

const FOOTER_LINKS: { title: string; items: string[] }[] = [
  {
    title: "Hipicon",
    items: [
      "Hakkımızda",
      "Kullanıcı Sözleşmesi",
      "En İyi Fiyat Garantisi",
      "Gizlilik Politikası",
      "Mag",
    ],
  },
  {
    title: "Müşteri Hizmetleri",
    items: ["İade & Değişim", "KVKK Sözleşmesi", "Sıkça Sorulan Sorular", "Bize Ulaşın"],
  },
  {
    title: "Hipicon'da Satış Yap",
    items: ["Tasarımcıların arasına katıl", "Hipicon Tasarımcı Paneli"],
  },
];

function TagCloud({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-bold text-hip-ink">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href="/search"
            className="rounded-full border border-hip-line px-3 py-1 text-sm text-hip-muted transition-colors hover:border-hip-ink hover:text-hip-ink"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-hip-line bg-white">
      {/* SEO intro */}
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 lg:px-8">
        <p className="max-w-4xl text-sm leading-relaxed text-hip-muted">
          Hayatına tasarım kat; yaşam alanına ve stiline enerji katacak en özgün
          parçaları senin için tek bir seçkide buluşturuyoruz. Evinin ruhunu
          değiştiren mobilya ve ev dekorasyon objelerinden, tarzını yansıtan
          aksesuarlara kadar her detayda küratör ve tasarımcılarımızın imzasını
          keşfet. Kendin için en şık tasarım ürünleri, sevdiklerin içinse en
          yaratıcı hediye fikirlerini bulabileceğin ilham dolu bir dünyaya
          davetlisin.
        </p>
      </div>

      {/* Tag clouds */}
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 border-t border-hip-line px-4 py-10 lg:grid-cols-[auto_1fr] lg:px-8">
        <div className="min-w-[160px]">
          <h3 className="mb-4 text-base font-bold text-hip-ink">Kategoriler</h3>
          <ul className="space-y-2">
            {FOOTER_CATEGORIES.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="text-sm text-hip-muted transition-colors hover:text-hip-ink"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <TagCloud title="Popüler Tasarımcılar" tags={POPULAR_DESIGNERS} />
          <TagCloud title="Popüler Aramalar" tags={POPULAR_SEARCHES} />
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-hip-line bg-[#f7f7f5]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-xl text-base font-medium text-hip-ink">
            Hipicon bültene üye olarak sen de aramıza katıl, indirimlerden, yeni
            gelen ürünlerden herkesten önce haberdar ol!
          </p>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="E-Posta"
              className="h-11 flex-1 rounded-full border border-hip-line bg-white px-4 text-sm outline-none placeholder:text-hip-muted focus:border-hip-ink"
            />
            <button
              type="button"
              className="h-11 shrink-0 rounded-full bg-hip-ink px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Üye Ol
            </button>
          </form>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 border-t border-hip-line px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-hip-ink">
            <HipiconLogo className="h-auto w-32" />
          </div>
        </div>
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-base font-bold text-hip-ink">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-hip-muted transition-colors hover:text-hip-ink"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hip-line">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-4 py-5 text-sm text-hip-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Hipicon, Tüm Hakları Saklıdır</span>
          <span>Türkiye · Türkçe</span>
        </div>
      </div>
    </footer>
  );
}
