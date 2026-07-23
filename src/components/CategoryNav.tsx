"use client";

import { useState } from "react";
import Link from "next/link";
import { Gift, LayoutPanelLeft } from "lucide-react";
import { NAV_ITEMS } from "@/lib/home-data";
import { MEGA_MENUS } from "@/lib/mega-menu";
import { cn } from "@/lib/utils";

export function CategoryNav() {
  const [openHref, setOpenHref] = useState<string | null>(null);
  const activeMenu = openHref ? MEGA_MENUS[openHref] : null;

  return (
    <nav
      className="relative border-b border-hip-line"
      onMouseLeave={() => setOpenHref(null)}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 lg:px-8">
        <ul className="flex items-center gap-5 overflow-x-auto py-3 lg:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV_ITEMS.map((item) => {
            const hasMenu = Boolean(MEGA_MENUS[item.href]);
            return (
              <li
                key={item.href}
                className="shrink-0"
                onMouseEnter={() => setOpenHref(hasMenu ? item.href : null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-base font-semibold transition-colors hover:text-hip-red",
                    item.highlight ? "text-hip-red" : "text-hip-ink",
                    openHref === item.href && hasMenu && "text-hip-red",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 items-center gap-7 border-l border-hip-line pl-7 lg:flex">
          <Link
            href="/hediye"
            onMouseEnter={() => setOpenHref(null)}
            className="flex items-center gap-2 text-base font-semibold text-hip-ink transition-colors hover:text-hip-red"
          >
            <Gift className="h-5 w-5" strokeWidth={1.75} />
            Hediye
          </Link>
          <Link
            href="/tasarimcilar"
            onMouseEnter={() => setOpenHref(null)}
            className="flex items-center gap-2 text-base font-semibold text-hip-ink transition-colors hover:text-hip-red"
          >
            <LayoutPanelLeft className="h-5 w-5" strokeWidth={1.75} />
            Tasarımcılar
          </Link>
        </div>
      </div>

      {/* Mega-menu dropdown */}
      {activeMenu && (
        <div className="absolute inset-x-0 top-full z-40 hidden border-b border-hip-line bg-white shadow-[0_16px_32px_-12px_rgba(0,0,0,0.15)] lg:block">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-4 gap-8 px-8 py-8">
            {activeMenu.map((column, i) => (
              <div key={i} className="flex flex-col gap-7">
                {column.map((group) => (
                  <div key={group.href}>
                    <Link
                      href={group.href}
                      className="text-base font-bold text-hip-ink transition-colors hover:text-hip-red"
                    >
                      {group.heading}
                    </Link>
                    <ul className="mt-3 flex flex-col gap-2.5">
                      {group.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="text-sm text-hip-muted transition-colors hover:text-hip-ink"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
