import Link from "next/link";
import { Gift, LayoutPanelLeft } from "lucide-react";
import { NAV_ITEMS } from "@/lib/home-data";
import { cn } from "@/lib/utils";

export function CategoryNav() {
  return (
    <nav className="border-b border-hip-line">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 lg:px-8">
        <ul className="flex items-center gap-5 overflow-x-auto py-3 lg:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className={cn(
                  "text-base font-semibold transition-colors hover:text-hip-red",
                  item.highlight ? "text-hip-red" : "text-hip-ink",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-7 border-l border-hip-line pl-7 lg:flex">
          <Link
            href="/hediye"
            className="flex items-center gap-2 text-base font-semibold text-hip-ink transition-colors hover:text-hip-red"
          >
            <Gift className="h-5 w-5" strokeWidth={1.75} />
            Hediye
          </Link>
          <Link
            href="/tasarimcilar"
            className="flex items-center gap-2 text-base font-semibold text-hip-ink transition-colors hover:text-hip-red"
          >
            <LayoutPanelLeft className="h-5 w-5" strokeWidth={1.75} />
            Tasarımcılar
          </Link>
        </div>
      </div>
    </nav>
  );
}
