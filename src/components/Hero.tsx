import Image from "next/image";
import Link from "next/link";
import { HERO_RIGHT, HERO_SLIDES } from "@/lib/home-data";

export function Hero() {
  const slide = HERO_SLIDES[0];

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 pt-4 lg:px-8 lg:pt-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:auto-rows-[460px]">
        {/* Left promo card */}
        <Link
          href={slide.href}
          className="group flex min-h-[320px] flex-col overflow-hidden rounded-2xl lg:min-h-0"
        >
          <div className="flex flex-1 flex-col justify-center gap-3 bg-[#f3f1ea] p-7">
            <h2 className="text-[1.7rem] font-extrabold uppercase leading-[1.05] tracking-tight text-[#1c1c1c]">
              {slide.title}
            </h2>
            <p className="text-lg font-medium text-[#1c1c1c]">{slide.subtitle}</p>
          </div>
          <div className="flex flex-col gap-1 bg-[#b3a069] p-7 text-[#1c1c1c]">
            <p className="mb-1 text-2xl font-extrabold">İNDİRİM KUPONU!</p>
            <p className="text-lg font-bold leading-snug">25.000 TL&apos;ye 5.000 TL</p>
            <p className="text-lg font-bold leading-snug">15.000 TL&apos;ye 2.500 TL</p>
            <p className="text-lg font-bold leading-snug">7.500 TL&apos;ye 1.000 TL</p>
            <p className="mt-2 text-xs text-[#3a3524]">
              Kampanya, 20 Temmuz - 04 Ağustos tarihleri arasında geçerlidir.
            </p>
          </div>
        </Link>

        {/* Center hero image */}
        <Link
          href={slide.href}
          className="group relative min-h-[320px] overflow-hidden rounded-2xl lg:col-span-2 lg:min-h-0"
        >
          <Image
            src={slide.image}
            alt={slide.subtitle}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Right card — promo image already contains its "YENİ TASARIMLAR" caption */}
        <Link
          href={HERO_RIGHT.href}
          className="group relative min-h-[320px] overflow-hidden rounded-2xl bg-[#dbe4ee] lg:min-h-0"
        >
          <Image
            src={HERO_RIGHT.image}
            alt={HERO_RIGHT.title}
            fill
            sizes="(max-width: 1024px) 100vw, 350px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      </div>
    </section>
  );
}
