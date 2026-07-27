import type { MegaMenuColumn } from "@/types/home";

// Category mega-menus keyed by the nav item's href.
// Each entry is an array of visual columns; a column may stack multiple groups.
export const MEGA_MENUS: Record<string, MegaMenuColumn[]> = {
  "/salon": [
    [
      {
        items: [
          { label: "TV Üniteleri", href: "/salon/tv-uniteleri" },
          { label: "Konsol ve Büfeler", href: "/salon/konsol-ve-bufeler" },
          { label: "Vitrin Dolapları", href: "/salon/vitrin-dolaplari" },
          { label: "Kitaplıklar", href: "/salon/kitapliklar" },
          { label: "Duvar ve Depolama Dolapları", href: "/salon/duvar-ve-depolama-dolaplari" },
          { label: "Bar ve Kahve Dolapları", href: "/salon/bar-ve-kahve-dolaplari" },
          { label: "Seperatör Üniteleri", href: "/salon/seperator-uniteleri" },
          { label: "Özel Tasarım Salon Dolapları", href: "/salon/ozel-tasarim-salon-dolaplari" },
        ],
      },
    ],
  ],
  "/mutfak": [
    [
      {
        items: [
          { label: "Mutfak Dolapları", href: "/mutfak/mutfak-dolaplari" },
          { label: "Boy Dolapları", href: "/mutfak/boy-dolaplari" },
          { label: "Kiler Dolapları", href: "/mutfak/kiler-dolaplari" },
          { label: "Ada ve Yarımada Üniteleri", href: "/mutfak/ada-ve-yarimada-uniteleri" },
          { label: "Tezgâh Üstü Dolapları", href: "/mutfak/tezgah-ustu-dolaplari" },
          { label: "Kahve Köşesi Dolapları", href: "/mutfak/kahve-kosesi-dolaplari" },
          { label: "Ankastre Üniteleri", href: "/mutfak/ankastre-uniteleri" },
          { label: "Özel Tasarım Mutfak Dolapları", href: "/mutfak/ozel-tasarim-mutfak-dolaplari" },
        ],
      },
    ],
  ],
  "/yatak-odasi": [
    [
      {
        items: [
          { label: "Gardıroplar", href: "/yatak-odasi/gardiroplar" },
          { label: "Giyinme Odaları", href: "/yatak-odasi/giyinme-odalari" },
          { label: "Komodinler", href: "/yatak-odasi/komodinler" },
          { label: "Şifonyerler", href: "/yatak-odasi/sifonyerler" },
          { label: "Makyaj Masaları", href: "/yatak-odasi/makyaj-masalari" },
          { label: "Başlık ve Karyola Üniteleri", href: "/yatak-odasi/baslik-ve-karyola-uniteleri" },
          { label: "Duvar ve Depolama Dolapları", href: "/yatak-odasi/duvar-ve-depolama-dolaplari" },
          { label: "Özel Tasarım Yatak Odası Dolapları", href: "/yatak-odasi/ozel-tasarim-yatak-odasi-dolaplari" },
        ],
      },
    ],
  ],
  "/banyo": [
    [
      {
        items: [
          { label: "Lavabo Altı Dolapları", href: "/banyo/lavabo-alti-dolaplari" },
          { label: "Boy Dolapları", href: "/banyo/boy-dolaplari" },
          { label: "Aynalı Dolaplar", href: "/banyo/aynali-dolaplar" },
          { label: "Çamaşır Makinesi Dolapları", href: "/banyo/camasir-makinesi-dolaplari" },
          { label: "Havlu ve Depolama Dolapları", href: "/banyo/havlu-ve-depolama-dolaplari" },
          { label: "Duvar ve Niş Dolapları", href: "/banyo/duvar-ve-nis-dolaplari" },
          { label: "Tezgâh Üstü Üniteler", href: "/banyo/tezgah-ustu-uniteler" },
          { label: "Özel Tasarım Banyo Dolapları", href: "/banyo/ozel-tasarim-banyo-dolaplari" },
        ],
      },
    ],
  ],
  "/ev": [
    [
      {
        heading: "Mobilya",
        href: "/ev/mobilya",
        items: [
          { label: "Koltuk & Kanepe", href: "/ev/mobilya/koltuk-kanepe" },
          { label: "Berjer", href: "/ev/mobilya/berjer" },
          { label: "Sandalye & Tabure", href: "/ev/mobilya/sandalye-tabure" },
          { label: "Dresuar & Konsol", href: "/ev/mobilya/dresuar-konsol" },
          { label: "Vitrin & Büfe", href: "/ev/mobilya/vitrin-bufe" },
          { label: "Dolap", href: "/ev/mobilya/dolap" },
          { label: "Bank", href: "/ev/mobilya/bank" },
          { label: "Yatak & Karyola", href: "/ev/mobilya/yatak-karyola" },
          { label: "Şifonyer & Komodin", href: "/ev/mobilya/sifonyer-komodin" },
          { label: "Puf", href: "/ev/mobilya/puf" },
          { label: "Sehpa Modelleri", href: "/ev/mobilya/sehpa-modelleri" },
          { label: "Masa", href: "/ev/mobilya/masa" },
          { label: "Askılık", href: "/ev/mobilya/askilik" },
          { label: "Bahçe Mobilyaları", href: "/ev/mobilya/bahce-mobilyalari" },
          { label: "Kitaplık", href: "/ev/mobilya/kitaplik" },
        ],
      },
    ],
    [
      {
        heading: "Aydınlatma",
        href: "/ev/aydinlatma",
        items: [
          { label: "Yer Aydınlatmaları", href: "/ev/aydinlatma/yer-aydinlatmalari" },
          { label: "Tavan Aydınlatmaları - Sarkıt Lambalar", href: "/ev/aydinlatma/tavan-aydinlatmalari-sarkit-lambalar" },
          { label: "Masa Lambaları", href: "/ev/aydinlatma/masa-lambalari" },
          { label: "Dekoratif Aydınlatma", href: "/ev/aydinlatma/dekoratif-aydinlatma" },
          { label: "Duvar Aydınlatma Modelleri", href: "/ev/aydinlatma/duvar-aydinlatma-modelleri" },
          { label: "Abajur", href: "/ev/aydinlatma/abajur" },
        ],
      },
      {
        heading: "Mutfak & Sofra",
        href: "/ev/mutfak-sofra",
        items: [
          { label: "Bardak & Fincan & Kupa", href: "/ev/mutfak-sofra/bardak-fincan-kupa" },
          { label: "Sunum Aksesuarları", href: "/ev/mutfak-sofra/sunum-aksesuarlari" },
          { label: "Tabak & Kase", href: "/ev/mutfak-sofra/tabak-kase" },
          { label: "Pişirme & Hazırlama", href: "/ev/mutfak-sofra/pisirme-hazirlama" },
          { label: "Saklama & Düzenleme", href: "/ev/mutfak-sofra/saklama-duzenleme" },
          { label: "Sofra Tekstili", href: "/ev/mutfak-sofra/sofra-tekstili" },
          { label: "Çatal & Kaşık & Bıçak", href: "/ev/mutfak-sofra/catal-kasik-bicak" },
        ],
      },
    ],
    [
      {
        heading: "Ev Aksesuarları",
        href: "/ev/ev-aksesuarlari",
        items: [
          { label: "Saklama Ve Düzenleme", href: "/ev/ev-aksesuarlari/saklama-ve-duzenleme" },
          { label: "Duvar Aksesuarları", href: "/ev/ev-aksesuarlari/duvar-aksesuarlari" },
          { label: "Banyo Aksesuarları", href: "/ev/ev-aksesuarlari/banyo-aksesuarlari" },
          { label: "Duvar Askıları", href: "/ev/ev-aksesuarlari/duvar-askilari" },
          { label: "Tavan Aksesuarları", href: "/ev/ev-aksesuarlari/tavan-aksesuarlari" },
          { label: "Radyatör", href: "/ev/ev-aksesuarlari/radyator" },
        ],
      },
      {
        heading: "Ev Bakımı",
        href: "/ev/ev-bakimi",
        items: [
          { label: "Oda Kokuları", href: "/ev/ev-bakimi/oda-kokulari" },
          { label: "Uçucu Yağ & Buhurdanlıklar", href: "/ev/ev-bakimi/ucucu-yag-buhurdanliklar" },
          { label: "Tütsü & Tütsülükler", href: "/ev/ev-bakimi/tutsu-tutsulukler" },
          { label: "Temizlik Ürünleri", href: "/ev/ev-bakimi/temizlik-urunleri" },
        ],
      },
    ],
    [
      {
        heading: "Ev Dekorasyon",
        href: "/ev/ev-dekorasyon",
        items: [
          { label: "Ayna", href: "/ev/ev-dekorasyon/ayna" },
          { label: "Çerçeve", href: "/ev/ev-dekorasyon/cerceve" },
          { label: "Vazo", href: "/ev/ev-dekorasyon/vazo" },
          { label: "Saat", href: "/ev/ev-dekorasyon/saat" },
          { label: "Dekoratif Obje", href: "/ev/ev-dekorasyon/dekoratif-obje" },
          { label: "Saksı & Bitki", href: "/ev/ev-dekorasyon/saksi-bitki" },
          { label: "Kulplar", href: "/ev/ev-dekorasyon/kulplar" },
          { label: "Mum & Mumluk", href: "/ev/ev-dekorasyon/mum-mumluk" },
          { label: "Şömine & Barbekü", href: "/ev/ev-dekorasyon/somine-barbeku" },
        ],
      },
      {
        heading: "Ev Tekstili",
        href: "/ev/ev-tekstili",
        items: [
          { label: "Yastık", href: "/ev/ev-tekstili/yastik" },
          { label: "Halı & Kilim", href: "/ev/ev-tekstili/hali-kilim" },
          { label: "Paspas", href: "/ev/ev-tekstili/paspas" },
          { label: "Havlu & Peştemal", href: "/ev/ev-tekstili/havlu-pestemal" },
          { label: "Bornoz", href: "/ev/ev-tekstili/bornoz" },
          { label: "Yatak & Koltuk Örtüleri", href: "/ev/ev-tekstili/yatak-koltuk-ortuleri" },
          { label: "Battaniye", href: "/ev/ev-tekstili/battaniye" },
          { label: "Nevresim", href: "/ev/ev-tekstili/nevresim" },
          { label: "Perde", href: "/ev/ev-tekstili/perde" },
        ],
      },
    ],
  ],
};
