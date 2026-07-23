import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { SELECTIONS } from "@/lib/home-data";

export function Curations() {
  return (
    <Carousel title="Hipicon Seçkiler">
      {SELECTIONS.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="group w-[300px] shrink-0 snap-start lg:w-[440px]"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f3f1ea]">
            <Image
              src={s.image}
              alt={s.label}
              fill
              sizes="(max-width: 1024px) 300px, 440px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute bottom-1 right-4 select-none text-[6rem] font-extrabold leading-none text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.25)] lg:text-[7.5rem]">
              {s.number}
            </span>
          </div>
          <p className="mt-3 text-center text-lg font-semibold text-hip-ink">
            {s.label}
          </p>
        </Link>
      ))}
    </Carousel>
  );
}
