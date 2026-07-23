// Downloads Hipicon favorites-listing product images into public/images/favorites
// Run: node scripts/download-favorites.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "public", "images", "favorites");

const assets = [
  { url: "https://cdn3.hipicon.com/images/bd/admin/2023/03/23/hipicon--images-products-2023--167957662288066.jpg", dest: "studio-ays-kulluk.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/02/24/milnoi--photobooth-fotoraf-e--177194040472584.jpg", dest: "milnoi-photobooth.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2025/05/23/evayna--como-ayna--174799017590030.jpg", dest: "evayna-como-ayna.jpg" },
  { url: "https://cdn3.hipicon.com/images/Products/2019/11/12/1573570002_1.jpeg", dest: "modesign-espresso.jpg" },
  { url: "https://cdn3.hipicon.com/images/Products/2021/08/10/1628592941_1.jpeg", dest: "bouffee-bulut-abajur.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/products/2026/04/08/atlye-minimalist--auru-priz--177568168328457.jpg", dest: "atolye-auru-priz.jpg" },
  { url: "https://cdn3.hipicon.com/images/Products/2021/01/16/1610796118_1.jpeg", dest: "nobodinoz-yildiz-yastik.jpg" },
  { url: "https://cdn3.hipicon.com/images/Products/2020/07/28/1595937733_1.jpeg", dest: "pinuts-kimono.jpg" },
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
  for (let i = 0; i < assets.length; i += 4) {
    results.push(...(await Promise.all(assets.slice(i, i + 4).map(fetchOne))));
  }
  const ok = results.filter((r) => r.ok);
  console.log(`Downloaded ${ok.length}/${results.length} favorites images.`);
  results.forEach((r) => console.log(`  ${r.ok ? "ok  " : "FAIL"} ${r.dest}${r.ok ? ` (${r.bytes} b)` : `: ${r.error}`}`));
}

run();
