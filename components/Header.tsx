import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-humus/10 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Terreau
        </Link>
        <nav className="flex items-center gap-2 sm:gap-5">
          <Link
            href="/enfants"
            className="rounded-full bg-clay/10 px-3 py-1.5 font-mono text-xs text-clay transition hover:bg-clay/20 sm:px-4 sm:text-sm"
          >
            🌿 Enfants
          </Link>
          <Link
            href="/publier"
            className="rounded-full bg-moss px-4 py-2 font-mono text-xs text-bone transition hover:bg-moss-dark sm:px-5 sm:text-sm"
          >
            Publier
          </Link>
        </nav>
      </div>
    </header>
  );
}
