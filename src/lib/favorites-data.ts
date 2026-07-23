import type { Product } from "@/types/home";
import { WEEKLY_FAVORITES } from "@/lib/home-data";

export const PRODUCT_COUNT = "10000+ Ürün";

export const SORT_OPTIONS = [
  "Akıllı Sıralama",
  "Fiyat - Düşükten Yükseğe",
  "Fiyat - Yüksekten Düşüğe",
  "Eskiden Yeniye",
  "Yeniden Eskiye",
  "En Çok Favorilenenler",
  "En Çok Satanlar",
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];

export const DEFAULT_SORT: SortOption = "En Çok Favorilenenler";

// Real products extracted from hipicon.com/search?sortByFavorite=desc
const REAL_FAVORITES: Product[] = [
  {
    id: "189331",
    brand: "Studio Ays",
    name: "Beton Küllük 2'li Set",
    href: "/P/studio-ays-beton-kulluk-2-li-set/189331",
    image: "/images/favorites/studio-ays-kulluk.jpg",
    price: "440 TL",
    favoriteCount: 2,
    colorOptions: true,
  },
  {
    id: "889247",
    brand: "Milnoi",
    name: "Photobooth Paslanmaz Çelik Çerçeve",
    href: "/P/milnoi-photobooth-paslanmaz-celik-cerceve/889247",
    image: "/images/favorites/milnoi-photobooth.jpg",
    price: "2.300 TL",
    cartPrice: "Sepette 1.955 TL",
    discount: "-%15",
  },
  {
    id: "617719",
    brand: "Evayna",
    name: "Como Ayna",
    href: "/P/evayna-como-ayna/617719",
    image: "/images/favorites/evayna-como-ayna.jpg",
    price: "6.000 TL",
  },
  {
    id: "56896",
    brand: "Modesign",
    name: "Espresso Seti",
    href: "/P/modesign-espresso-seti/56896",
    image: "/images/favorites/modesign-espresso.jpg",
    price: "1.370 TL",
    favoriteCount: 8,
    colorOptions: true,
  },
  {
    id: "117959",
    brand: "Bouffee Cloud",
    name: "Tripod Ayaklı Bulut Abajur",
    href: "/P/bouffee-cloud-tripod-ayakli-bulut-abajur/117959",
    image: "/images/favorites/bouffee-bulut-abajur.jpg",
    price: "5.299 TL",
    favoriteCount: 3,
    colorOptions: true,
  },
  {
    id: "928864",
    brand: "Atölye Minimalist",
    name: "Auru Priz",
    href: "/P/atolye-minimalist-auru-priz/928864",
    image: "/images/favorites/atolye-auru-priz.jpg",
    price: "1.850 TL",
    cartPrice: "Sepette 1.665 TL",
    discount: "-%10",
    favoriteCount: 7,
    colorOptions: true,
  },
  {
    id: "91419",
    brand: "Nobodinoz",
    name: "Aristote Kadife Yıldız Yastık",
    href: "/P/nobodinoz-aristote-kadife-yildiz-yastik/91419",
    image: "/images/favorites/nobodinoz-yildiz-yastik.jpg",
    price: "1.500 TL",
  },
  {
    id: "75298",
    brand: "Pinuts",
    name: "Kimono",
    href: "/P/pinuts-kimono/75298",
    image: "/images/favorites/pinuts-kimono.jpg",
    price: "1.199 TL",
    sameDayShipping: true,
    favoriteCount: 5,
    colorOptions: true,
  },
];

// Fill out the grid with the (also favorite-sorted) homepage products.
export const FAVORITE_PRODUCTS: Product[] = [...REAL_FAVORITES, ...WEEKLY_FAVORITES];
