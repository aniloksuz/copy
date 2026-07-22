"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export function Carousel({ title, action, children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 lg:px-8 lg:py-10">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-extrabold text-hip-ink lg:text-2xl">{title}</h2>
        <div className="flex items-center gap-3">
          {action}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hip-line text-hip-ink transition-colors hover:bg-hip-ink hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hip-line text-hip-ink transition-colors hover:bg-hip-ink hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </section>
  );
}
