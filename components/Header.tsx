import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-moss/10 bg-[#EDE4D0]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-10">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl transition group-hover:scale-110" aria-hidden>🌱</span>
          <span className="font-display text-xl font-semibold tracking-tight text-humus sm:text-2xl">Terreau</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <Link href="/enfants" className="rounded-full bg-gradient-to-r from-amber-100 to-orange-50 px-3.5 py-2 font-mono text-xs text-clay shadow-sm transition hover:shadow sm:px-4 sm:text-sm">
            🌿 Enfants
          </Link>
          <Link href="/publier" className="btn-grow rounded-full bg-gradient-to-r from-[#4A7A3C] to-[#3D6B32] px-4 py-2 font-mono text-xs text-bone shadow-md shadow-moss/25 transition hover:shadow-lg sm:px-5 sm:text-sm">
            Publier
          </Link>
        </nav>
      </div>
    </header>
  );
}
