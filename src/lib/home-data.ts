import type {
  FeaturedCategory,
  HeroSlide,
  NavItem,
  Product,
  Selection,
} from "@/types/home";

export const NAV_ITEMS: NavItem[] = [
  { label: "Ev", href: "/ev" },
  { label: "Sanat", href: "/sanat" },
  { label: "Takı", href: "/taki" },
  { label: "Kadın", href: "/kadin" },
  { label: "Erkek", href: "/erkek" },
  { label: "Yaşam", href: "/yasam" },
  { label: "Ofis", href: "/ofis" },
  { label: "Teknoloji", href: "/teknoloji" },
  { label: "Çocuk", href: "/cocuk" },
  { label: "İndirim", href: "/indirim", highlight: true },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "GÜNEŞLİ GÜNLER RAHAT STİLLER",
    subtitle: "Kadın, erkek, çocuk kategorilerinde",
    image: "/images/hero/hero-main.jpg",
    href: "/kadin",
  },
];

export const HERO_RIGHT = {
  title: "YENİ TASARIMLAR",
  image: "/images/hero/hero-right.jpg",
  href: "/yeni-urunler?sortByCreateDate=desc",
};

export const FEATURED_CATEGORIES: FeaturedCategory[] = [
  { label: "En Sevilenler", href: "/favorites", image: "/images/categories/en-sevilenler.jpg" },
  { label: "İndirimdekiler", href: "/indirim", image: "/images/categories/indirimdekiler.jpg" },
  { label: "Bardak & Fincan & Kupa", href: "/ev/mutfak-sofra/bardak-fincan-kupa", image: "/images/categories/bardak-fincan-kupa.jpg" },
  { label: "Duvar Aydınlatmaları", href: "/ev/aydinlatma/duvar-aydinlatma-modelleri", image: "/images/categories/duvar-aydinlatmalari.jpg" },
  { label: "Yastık", href: "/ev/ev-tekstili/yastik", image: "/images/categories/yastik.jpg" },
  { label: "Elbise", href: "/kadin/giyim/elbise", image: "/images/categories/elbise.jpg" },
  { label: "Mayo & Bikini", href: "/kadin/giyim/mayo-bikini", image: "/images/categories/mayo-bikini.jpg" },
  { label: "Sehpa Modelleri", href: "/ev/mobilya/sehpa-modelleri", image: "/images/categories/sehpa-modelleri.jpg" },
  { label: "Vazo", href: "/ev/ev-dekorasyon/vazo", image: "/images/categories/vazo.jpg" },
  { label: "Spor & Hobi", href: "/yasam/outdoor/spor-hobi", image: "/images/categories/spor-hobi.jpg" },
  { label: "Omuz Çantası", href: "/kadin/canta/omuz-cantasi", image: "/images/categories/omuz-cantasi.jpg" },
  { label: "Tavan Aydınlatmaları", href: "/ev/aydinlatma/tavan-aydinlatmalari-sarkit-lambalar", image: "/images/categories/tavan-aydinlatmalari.jpg" },
];

export const SELECTIONS: Selection[] = [
  { number: 1, label: "Dingin Çalışma Alanları", href: "/collection/dingin-calisma/505", image: "/images/selections/dingin-calisma.jpg" },
  { number: 2, label: "Krom Aşkına!", href: "/collection/krom-askina/781", image: "/images/selections/krom-askina.jpg" },
  { number: 3, label: "Rengarenk & Enerjik Hediyeler", href: "/collection/rengarenk-enerjik-hediyeler/760", image: "/images/selections/rengarenk-hediyeler.jpg" },
  { number: 4, label: "Hasır Parçalar", href: "/collection/hasir-parcalar/618", image: "/images/selections/hasir-parcalar.jpg" },
];

export const WEEKLY_FAVORITES: Product[] = [
  {
    id: "1011771",
    brand: "Bahar Aydınlatma",
    name: "Zen Meditasyon Ada Yeşili Dekoratif Biblo",
    href: "/P/bahar-aydinlatma-zen-meditasyon-ada-yesili-dekoratif-biblo/1011771",
    image: "/images/products/zen-meditasyon.jpg",
    price: "2.000 TL",
    oldPrice: "2.500 TL",
    discount: "-%20",
  },
  {
    id: "966090",
    brand: "Cozas - Pylones",
    name: "Pylones Salata Servis Seti - Quelle Salade Black",
    href: "/P/cozas-pylones-pylones-salata-servis-seti-quelle-salade-black/966090",
    image: "/images/products/pylones-salata.jpg",
    price: "2.400 TL",
    rankBadge: "En Çok Satan 1. Ürün",
  },
  {
    id: "202793",
    brand: "Estel Bensinyor",
    name: "52 Sezgisel Kart Destesi Ve Kitapçık",
    href: "/P/estel-bensinyor-52-sezgisel-kart-destesi-ve-kitapcik/202793",
    image: "/images/products/52-sezgisel-kart.jpg",
    price: "520 TL",
  },
  {
    id: "1016835",
    brand: "Banter Panther",
    name: "Disco Deep Çok Renkli Pareo",
    href: "/P/banter-panther-disco-deep-cok-renkli-pareo/1016835",
    image: "/images/products/disco-deep-pareo.jpg",
    price: "600 TL",
    sameDayShipping: true,
  },
  {
    id: "600875",
    brand: "Kisu",
    name: "Kisubon Servis Tabağı",
    href: "/P/kisu-kisubon-servis-tabagi/600875",
    image: "/images/products/kisubon-servis.jpg",
    price: "3.900 TL",
  },
  {
    id: "329728",
    brand: "Pelia Company",
    name: "Calie Keten Gömlek Elbise",
    href: "/P/pelia-company-calie-keten-gomlek-elbise/329728",
    image: "/images/products/calie-keten-elbise.jpg",
    price: "2.450 TL",
    sameDayShipping: true,
  },
  {
    id: "794173",
    brand: "Yaffy Home Design",
    name: "Terrazzo Sabunluk",
    href: "/P/yaffy-home-design-terrazzo-sabunluk/794173",
    image: "/images/products/terrazzo-sabunluk.jpg",
    price: "270 TL",
    cartPrice: "Sepette 243 TL",
    discount: "-%10",
  },
  {
    id: "160474",
    brand: "Handarte Los Angeles",
    name: "Etnik Desenli Kemerli Mini Gömlek Elbise",
    href: "/P/handarte-los-angeles-etnik-desenli-kemerli-mini-gomlek-elbise/160474",
    image: "/images/products/etnik-gomlek-elbise.png",
    price: "1.147,50 TL",
    oldPrice: "1.350 TL",
    discount: "-%15",
  },
  {
    id: "179360",
    brand: "Paul Kenzie",
    name: "Comfort Flex 3'lü Erkek Slip Külot - Wild",
    href: "/P/paul-kenzie-comfort-flex-3-lu-erkek-slip-kulot-wild/179360",
    image: "/images/products/comfort-flex-kulot.jpg",
    price: "699 TL",
  },
  {
    id: "317765",
    brand: "Sohomanje",
    name: "Deri Bölmeli Şaraplık",
    href: "/P/sohomanje-deri-bolmeli-saraplik/317765",
    image: "/images/products/deri-saraplik.jpg",
    price: "7.300 TL",
    oldPrice: "8.000 TL",
    discount: "-%9",
  },
  {
    id: "605890",
    brand: "Beige & Stone",
    name: '"you\'re Doing Fucking Great" Cam Meşrubat & Su Bardağı - 380 Ml',
    href: "/P/beige-stone-you-re-doing-fucking-great-cam-mesrubat-su-bardagi-380-ml/605890",
    image: "/images/products/cam-mesrubat-bardagi.jpg",
    price: "425,99 TL",
  },
  {
    id: "153723",
    brand: "The NewLab",
    name: "Lekeli Ciltler İçin Aydınlatıcı Yüz Serumu Niacinamide 5% + Alpha Arbutin 2%",
    href: "/P/the-newlab-lekeli-ciltler-icin-aydinlatici-yuz-serumu-niacinamide-5-alpha-arbutin-2/153723",
    image: "/images/products/yuz-serumu.jpg",
    price: "699,90 TL",
    sameDayShipping: true,
  },
  {
    id: "146431",
    brand: "LWB",
    name: "Manta Sandalye",
    href: "/P/lwb-manta-sandalye/146431",
    image: "/images/products/manta-sandalye.jpg",
    price: "16.700 TL",
  },
  {
    id: "901007",
    brand: "Coho Objet",
    name: "Coho Tılsım Bakır Bağlı Bileklik",
    href: "/P/coho-objet-coho-tilsim-bakir-bagli-bileklik/901007",
    image: "/images/products/coho-bileklik.jpg",
    price: "1.290 TL",
    oldPrice: "1.500 TL",
    discount: "-%14",
    sameDayShipping: true,
  },
  {
    id: "912921",
    brand: "Lumina",
    name: "Leopar Desen Bardak Altliği 4 'lü",
    href: "/P/lumina-leopar-desen-bardak-altligi-4-lu/912921",
    image: "/images/products/leopar-bardak-altligi.jpg",
    price: "1.200 TL",
  },
  {
    id: "973659",
    brand: "Lumiana",
    name: "Mono Zeytin Yeşili & Latte Çift Renkli Plafonyer",
    href: "/P/lumiana-mono-zeytin-yesili-latte-cift-renkli-plafonyer/973659",
    image: "/images/products/mono-plafonyer.jpg",
    price: "6.950 TL",
    cartPrice: "Sepette 5.560 TL",
    discount: "-%20",
    sameDayShipping: true,
  },
];

export const FOOTER_CATEGORIES: NavItem[] = [
  { label: "Ev", href: "/ev" },
  { label: "Sanat", href: "/sanat" },
  { label: "Takı", href: "/taki" },
  { label: "Kadın", href: "/kadin" },
  { label: "Erkek", href: "/erkek" },
  { label: "Yaşam", href: "/yasam" },
  { label: "Ofis", href: "/ofis" },
  { label: "Teknoloji", href: "/teknoloji" },
  { label: "Çocuk", href: "/cocuk" },
];

export const POPULAR_DESIGNERS = [
  "Sohomanje", "NEOstill", "Blend+r", "Leconcept", "Nobodinoz", "Modabilya",
  "Homiof", "Hug Atelier", "Lebein Haus", "Tarz Aydınlatma", "Metanoya Lighting",
  "Miarik Design", "Regen Studio", "KAO Collection", "Haute Boards", "Moccamaster",
  "Boho Concept", "Envlin", "Lasttouch Interiors", "OBJEXOM", "Abajurhane Store",
  "Innature Home", "Bahar Aydınlatma", "Gajah",
];

export const POPULAR_SEARCHES = [
  "Orta Sehpa", "Sehpa", "Avize", "Berjer", "Pareo", "Ayna", "Dresuar", "Abajur",
  "Lambader", "Tablo", "Aplik", "Bikini", "Puf", "Sandalye", "Mayo", "Yan Sehpa",
];
