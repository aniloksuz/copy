// Downloads Hipicon homepage assets into public/images/{hero,categories,products}
// Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "public", "images");

/** @type {{url:string,dest:string}[]} */
const assets = [
  // Hero
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homeherocarous--17842746273868.jpg", dest: "hero/hero-main.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homenewdesigns--178429829299641.jpg", dest: "hero/hero-right.jpg" },

  // Featured categories
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/20/hipicon--promo-homefeaturedca--178455024184859.jpg", dest: "categories/en-sevilenler.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/20/hipicon--promo-homefeaturedca--178453426366610.jpg", dest: "categories/indirimdekiler.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429891145411.jpg", dest: "categories/bardak-fincan-kupa.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429899476612.jpg", dest: "categories/duvar-aydinlatmalari.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429912851164.jpg", dest: "categories/yastik.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429919087323.jpg", dest: "categories/elbise.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--17842992666413.jpg", dest: "categories/mayo-bikini.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429937974219.jpg", dest: "categories/sehpa-modelleri.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429944802719.jpg", dest: "categories/vazo.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429954540483.jpg", dest: "categories/spor-hobi.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homefeaturedca--178429960846952.jpg", dest: "categories/omuz-cantasi.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/22/hipicon--featured-category-v3--178473206333956.jpg", dest: "categories/tavan-aydinlatmalari.jpg" },

  // Products
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/07/01/bahar-aydnlatma--zen-meditasyon-figrl--178290183394653.jpg", dest: "products/zen-meditasyon.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/05/14/845ed3--autosave--177880059350790.jpg", dest: "products/pylones-salata.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2025/11/27/estel-bensinyor--52-sezgisel-kart-des--176425137599325.jpg", dest: "products/52-sezgisel-kart.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/07/06/banter-panther--discodeep-pareo--178337006951117.jpg", dest: "products/disco-deep-pareo.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2025/05/05/kisu--kisubon-servis-taba--174644706457226.jpg", dest: "products/kisubon-servis.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2024/01/16/pelia-company--calie-keten-gmlek-el--17054165949858.jpg", dest: "products/calie-keten-elbise.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2025/11/12/yaffy-home-design--terrazzo-sabunluk--176293406819744.jpg", dest: "products/terrazzo-sabunluk.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2022/05/20/handarte-los-angeles--etnik-desenli-kemerl--165306829056750.png", dest: "products/etnik-gomlek-elbise.png" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2022/06/30/paul-kenzie--comfort-flex-3l-erke--165657757424959.jpg", dest: "products/comfort-flex-kulot.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2024/06/20/sohomanje--deri-blmeli-araplk--171890567378120.jpg", dest: "products/deri-saraplik.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2025/05/05/beige-stone--youre-doing-fucking---174646827153131.jpg", dest: "products/cam-mesrubat-bardagi.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2022/04/12/the-newlab--lekeli-ciltler-iin-a--164977459922449.jpg", dest: "products/yuz-serumu.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2023/12/27/lwb--manta-sandalye--170366423678397.jpg", dest: "products/manta-sandalye.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/02/26/coho-objet--coho-tlsm-bakr-bal-b--177213502084755.jpg", dest: "products/coho-bileklik.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/03/24/lumina--leopar-desen-bardak---177433360067051.jpg", dest: "products/leopar-bardak-altligi.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/06/02/lumiana--mono-ift-renkli-plaf--178038232965025.jpg", dest: "products/mono-plafonyer.jpg" },
];

async function fetchOne({ url, dest }) {
  const target = join(OUT, dest);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0", Referer: "https://www.hipicon.com/" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, buf);
    return { dest, ok: true, bytes: buf.length };
  } catch (err) {
    return { dest, ok: false, error: String(err.message || err) };
  }
}

async function run() {
  const results = [];
  // batch 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    results.push(...(await Promise.all(batch.map(fetchOne))));
  }
  const ok = results.filter((r) => r.ok);
  const fail = results.filter((r) => !r.ok);
  console.log(`Downloaded ${ok.length}/${results.length} assets.`);
  ok.forEach((r) => console.log(`  ok   ${r.dest} (${r.bytes} b)`));
  fail.forEach((r) => console.log(`  FAIL ${r.dest}: ${r.error}`));
}

run();
