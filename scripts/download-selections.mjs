// Downloads the "Hipicon Seçkiler" (curations) card images into public/images/selections
// Run: node scripts/download-selections.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "public", "images", "selections");

const assets = [
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homeselections--178429862494061.jpg", dest: "dingin-calisma.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homeselections--17842986600423.jpg", dest: "krom-askina.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homeselections--178429869030522.jpg", dest: "rengarenk-hediyeler.jpg" },
  { url: "https://cdn3.hipicon.com/images/bd/admin/2026/07/17/hipicon--promo-homeselections--178429872405930.jpg", dest: "hasir-parcalar.jpg" },
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
  const results = await Promise.all(assets.map(fetchOne));
  const ok = results.filter((r) => r.ok);
  console.log(`Downloaded ${ok.length}/${results.length} selection images.`);
  results.forEach((r) => console.log(`  ${r.ok ? "ok  " : "FAIL"} ${r.dest}${r.ok ? ` (${r.bytes} b)` : `: ${r.error}`}`));
}

run();
