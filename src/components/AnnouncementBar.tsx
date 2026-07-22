import Link from "next/link";

export function AnnouncementBar() {
  return (
    <Link
      href="/search?matchCategories=1034"
      className="flex h-14 items-center justify-center bg-hip-lime px-4 text-center text-sm font-medium text-hip-ink transition-opacity hover:opacity-90"
    >
      Alışverişinle artan kuponlarla, stilinde güneşin ritmini yakala!
    </Link>
  );
}
