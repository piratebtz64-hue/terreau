import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-humus/10 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Terreau
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          <Link href="/" className="hidden text-sm text-moss-dark transition hover:text-humus sm:inline">
            Explorer
          </Link>
          <Link href="/publier" className="rounded-full bg-moss px-5 py-2.5 font-mono text-sm text-bone transition hover:bg-moss-dark">
            Publier
          </Link>
        </nav>
      </div>
    </header>
  );
}
