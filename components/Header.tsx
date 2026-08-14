import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-humus/8 bg-parchment/92 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-10 sm:py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-humus sm:text-2xl">
          Terreau
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/enfants"
            className="rounded-full bg-gradient-to-r from-clay/15 to-clay/8 px-3.5 py-2 font-mono text-xs text-clay transition hover:from-clay/25 hover:to-clay/15 sm:px-4 sm:text-sm"
          >
            🌿 Enfants
          </Link>
          <Link
            href="/publier"
            className="rounded-full bg-moss px-4 py-2 font-mono text-xs text-bone shadow-sm transition hover:bg-moss-dark hover:shadow-md sm:px-5 sm:text-sm"
          >
            Publier
          </Link>
        </nav>
      </div>
    </header>
  );
}
