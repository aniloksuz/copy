# Hipicon — Design Tokens (extracted via browser)

Source: https://www.hipicon.com/ · Extracted 2026-07-22

## Typography
- **Family:** `Figtree` (Google Font), used sitewide — body, nav, buttons, headings.
- **Body:** 14px / 20px, weight 400.
- **Nav links:** 16px / 24px, weight 600.
- **Hero heading:** ~30px, weight 800, UPPERCASE, tight line-height (~1.05), color `#1c1c1c`.
- **Buttons (auth):** 14px, weight 600, pill-shaped, 40px tall.

## Colors
| Token | Value | Usage |
|-------|-------|-------|
| Ink (text) | `#0a0a0a` | Primary text |
| Hero heading | `#1c1c1c` | Promo headings |
| Background | `#ffffff` | Page |
| Lime accent | `rgb(217,253,139)` `#d9fd8b` | Announcement bar |
| Red accent | `≈#e01e26` | "İndirim" nav item, discount %, hover |
| Border/line | `#e5e5e5` | Search border, dividers, card outlines |
| Muted | `≈#6b7280` | Product names, footer links |
| Hero left top | `#f3f1ea` | Promo card upper block |
| Hero left bottom | `#b3a069` | Coupon block (khaki) |
| Cart-price badge | text `#3f8f2e` on `#eaf7e1` | "Sepette X TL" |

## Geometry
- Search input: 36–44px tall, radius 8px→full, 1px `#e5e5e5` border.
- Cards: rounded (product `rounded-xl` ~12px; hero/category `rounded-2xl` ~16px).
- Content max-width: ~1400px, gutter 16–32px.
- Announcement bar height: 56px. Header (incl. nav): ~113px.

## Assets
- Image CDN: `cdn3.hipicon.com`, proxy `cdn-proxy.hipicon.com/img?url=…&width=…&quality=…`.
- Product images 700×700 (square); featured-category images 1000×691 (landscape); hero promos ~990×854.
- Logo: inline SVG wordmark, viewBox `0 0 150 46` (saved as `HipiconLogo` in `src/components/icons.tsx`).
- 0 `<video>` elements on load (Hip Reels lazy-loaded — out of scope).

## Page Topology (full site, top→bottom)
1. Announcement bar (lime) — **built**
2. Header: logo + search + Giriş Yap / Sepetim — **built**
3. Category nav (Ev…İndirim | Hediye, Tasarımcılar) — **built**
4. Hero: 3-up (promo card / image / "Yeni Tasarımlar") — **built**
5. Öne Çıkan Kategoriler (carousel) — **built**
6. Bu Hafta En Sevilenler (product carousel) — **built**
7. Hip Reels (video) — not in scope
8. Hipicon Seçkiler (curations) — not in scope
9. Yeni Gelenler — not in scope
10. Yeni Tasarımcılar — not in scope
11. Hipicon Mag (blog) — not in scope
12. SEO text + Footer (newsletter, tag clouds, columns, copyright) — **built**
