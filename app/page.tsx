export default function HomePage() {
  return (
    <main className="min-h-screen bg-soil-grain text-humus">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <a
            href="/"
            className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Terreau
          </a>

          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-moss sm:text-xs">
            En préparation
          </span>
        </header>

        <div className="flex-1 py-16 sm:py-24 lg:flex lg:items-center lg:py-28">
          <div className="max-w-5xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-clay sm:text-xs">
              Faire pousser les bonnes idées
            </p>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-9xl">
              Un sol fertile
              <br />
              pour vos projets.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-moss-dark sm:text-lg">
              Terreau accompagne les projets qui veulent prendre racine,
              grandir avec sens et produire un impact durable.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:bonjour@terreau.fr"
                className="inline-flex w-fit rounded-full bg-moss px-6 py-3 font-mono text-sm text-bone transition hover:bg-moss-dark"
              >
                Nous contacter
              </a>

              <span className="font-mono text-xs uppercase tracking-[0.18em] text-humus/60">
                Bordeaux • durable • éditorial
              </span>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 border-t border-humus/20 pt-5 font-mono text-xs text-moss sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Terreau</span>
          <span>Conçu avec soin à Bordeaux</span>
        </footer>
      </section>
    </main>
  );
}
