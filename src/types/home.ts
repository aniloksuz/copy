export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface FeaturedCategory {
  label: string;
  href: string;
  image: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  href: string;
  image: string;
  price: string;
  oldPrice?: string;
  discount?: string; // e.g. "-%20"
  cartPrice?: string; // e.g. "Sepette 243 TL"
  sameDayShipping?: boolean;
  rankBadge?: string; // e.g. "En Çok Satan 1. Ürün"
  favoriteCount?: number; // heart badge on listing cards
  colorOptions?: boolean; // "Renk seçenekleri" — has color variants
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface Selection {
  number: number;
  label: string;
  href: string;
  image: string;
}

export interface MegaMenuItem {
  label: string;
  href: string;
}

export interface MegaMenuGroup {
  heading: string;
  href: string;
  items: MegaMenuItem[];
}

// A visual column may stack more than one group.
export type MegaMenuColumn = MegaMenuGroup[];
