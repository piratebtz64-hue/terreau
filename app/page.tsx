export default function HomePage() {
  return (
    <main className="min-h-screen bg-soil-grain text-humus">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 border-b border-humus/10 bg-parchment/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="/" className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Terreau
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-moss-dark sm:flex">
            <a href="#gestes" className="transition hover:text-humus">Les 4 gestes</a>
            <a href="#comment" className="transition hover:text-humus">Comment ça marche</a>
            <a href="#inscription" className="rounded-full bg-moss px-5 py-2 text-bone transition hover:bg-moss-dark">
              Être prévenu
            </a>
          </nav>
          <a
            href="#inscription"
            className="rounded-full bg-moss px-4 py-2 font-mono text-xs text-bone sm:hidden"
          >
            S&apos;inscrire
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:pt-28">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-clay">
              Une idée qui se propage
            </p>

            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-humus sm:text-6xl lg:text-7xl">
              La planète n&apos;a pas besoin<br className="hidden sm:block" />
              que quelques personnes<br className="hidden sm:block" />
              fassent tout.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-moss-dark sm:text-xl">
              Elle a besoin que des millions de personnes fassent quelque chose.
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-humus/80">
              Terreau est une plateforme gratuite où chacun peut agir concrètement
              pour la planète — réparer, construire, inventer, transmettre —
              et voir son idée se propager.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#inscription"
                className="inline-flex w-fit items-center justify-center rounded-full bg-moss px-7 py-3.5 font-mono text-sm text-bone transition hover:bg-moss-dark"
              >
                Être prévenu du lancement
              </a>
              <a
                href="#gestes"
                className="inline-flex w-fit items-center gap-2 font-mono text-sm text-moss-dark transition hover:text-humus"
              >
                Découvrir les 4 gestes
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>

          {/* Propagation visual */}
          <div className="mt-20 sm:mt-28">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {["Idée", "Reproduite", "Améliorée", "Transmise"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-xs font-medium sm:h-14 sm:w-14 sm:text-sm ${
                        i === 0
                          ? "border-clay bg-clay/10 text-clay"
                          : i === 3
                          ? "border-moss bg-moss text-bone"
                          : "border-humus/20 bg-bone text-humus"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span className="mt-2 font-mono text-[10px] uppercase tracking-wider text-moss-dark sm:text-[11px]">
                      {step}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="hidden h-px w-8 bg-humus/20 sm:block sm:w-12 md:w-16" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-lg font-mono text-xs leading-relaxed text-humus/60">
              Une action simple documentée → reprise par quelqu&apos;un d&apos;autre →
              améliorée → transmise à nouveau. C&apos;est ainsi qu&apos;une idée devient un mouvement.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Manifeste ─── */}
      <section className="border-y border-humus/10 bg-bone/60">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-clay">
              Manifeste
            </p>
            <blockquote className="font-display text-2xl leading-snug tracking-tight text-humus sm:text-3xl lg:text-4xl">
              « La planète n&apos;a pas besoin que quelques personnes fassent tout.
              Elle a besoin que des millions de personnes fassent quelque chose. »
            </blockquote>
            <p className="mt-10 text-base leading-relaxed text-moss-dark">
              Terreau n&apos;est pas un blog écologique, ni un réseau social, ni un système de points.
              C&apos;est un sol fertile où les petites actions individuelles prennent racine,
              se multiplient et deviennent collectives.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Les 4 Gestes ─── */}
      <section id="gestes" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-clay">
              Structure centrale
            </p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Les quatre gestes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-moss-dark sm:text-lg">
              Quatre façons d&apos;agir, accessibles à tous, sans expertise ni matériel particulier.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Agir",
                desc: "Réparer plutôt que jeter, réutiliser, économiser une ressource, protéger la biodiversité."
              },
              {
                num: "02",
                title: "Construire",
                desc: "Fabriquer un composteur, un récupérateur d'eau, un nichoir, transformer un déchet en objet utile."
              },
              {
                num: "03",
                title: "Inventer",
                desc: "Proposer une idée même sans savoir la réaliser. Elle peut devenir prototype grâce aux autres."
              },
              {
                num: "04",
                title: "Transmettre",
                desc: "Expliquer comment reproduire ce qu'on a réussi. Le site devient une bibliothèque vivante de solutions."
              }
            ].map((g) => (
              <div
                key={g.num}
                className="group rounded-2xl border border-humus/10 bg-bone/50 p-6 transition hover:border-moss/30 hover:bg-bone"
              >
                <span className="font-mono text-xs text-clay">{g.num}</span>
                <h3 className="mt-3 font-display text-xl tracking-tight">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-moss-dark">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comment ça marche ─── */}
      <section id="comment" className="scroll-mt-20 border-t border-humus/10 bg-bone/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-clay">
              La propagation
            </p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Comment une idée se répand
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                step: "1",
                title: "Quelqu'un agit",
                text: "Une personne réalise une action simple et la documente librement (sans photo obligatoire)."
              },
              {
                step: "2",
                title: "Quelqu'un d'autre la reprend",
                text: "Une autre personne voit l'action, la reproduit chez elle, avec ses moyens."
              },
              {
                step: "3",
                title: "Elle l'améliore",
                text: "Elle propose une version moins chère, plus simple, plus solide ou plus écologique."
              },
              {
                step: "4",
                title: "La nouvelle version circule",
                text: "La version améliorée est reprise à son tour. L'idée évolue et se propage."
              },
              {
                step: "5",
                title: "Le mouvement grandit",
                text: "Ce qui était une action isolée devient un cheminement collectif visible et vivant."
              }
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`flex gap-6 border-l-2 py-8 pl-6 sm:gap-10 sm:pl-10 ${
                  idx === 4 ? "border-moss" : "border-humus/15"
                }`}
              >
                <span className="font-mono text-sm text-clay">{item.step}</span>
                <div>
                  <h3 className="font-display text-xl tracking-tight">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-moss-dark sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Accessibilité ─── */}
      <section className="border-t border-humus/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-humus/10 bg-bone/50 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-clay">
                Accessible à tous
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-tight">
                Je n&apos;ai rien
              </h3>
              <p className="mt-4 text-base leading-relaxed text-moss-dark">
                Pas d&apos;argent, pas de matériel, pas de compétence particulière ?
                Terreau propose des actions gratuites et accessibles immédiatement.
                Chacun peut commencer quelque part.
              </p>
            </div>

            <div className="rounded-2xl border border-humus/10 bg-bone/50 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-clay">
                Entraide discrète
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-tight">
                Je peux aider
              </h3>
              <p className="mt-4 text-base leading-relaxed text-moss-dark">
                Vous avez une compétence (bricolage, jardinage, électronique, couture…) ?
                Vous pouvez la mettre au service d&apos;un projet, sans créer un réseau social
                à profils publics.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-humus/20 bg-parchment/50 p-8 text-center sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-moss">
              Règles du site
            </p>
            <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-left text-sm leading-relaxed text-moss-dark sm:text-base">
              <li className="flex gap-3">
                <span className="text-clay">—</span>
                Aucune photo ou preuve jamais obligatoire
              </li>
              <li className="flex gap-3">
                <span className="text-clay">—</span>
                Aucun classement, aucun système de points
              </li>
              <li className="flex gap-3">
                <span className="text-clay">—</span>
                Aucun chiffre d&apos;impact inventé
              </li>
              <li className="flex gap-3">
                <span className="text-clay">—</span>
                Le site reste gratuit. Les dons sont optionnels et sans pression.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Inscription ─── */}
      <section id="inscription" className="scroll-mt-20 border-t border-humus/10 bg-moss text-bone">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-bone/70">
              Lancement bientôt
            </p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Soyez prévenu du lancement
            </h2>
            <p className="mt-5 text-base leading-relaxed text-bone/80">
              Laissez votre email. Nous vous écrirons uniquement quand Terreau ouvrira
              ses portes. Pas de spam, pas de pression.
            </p>

            <form
              action="mailto:bonjour@terreau.fr"
              method="post"
              encType="text/plain"
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="votre@email.com"
                className="w-full rounded-full border-0 bg-bone/15 px-6 py-3.5 text-sm text-bone placeholder:text-bone/50 focus:outline-none focus:ring-2 focus:ring-bone/40 sm:max-w-xs"
              />
              <button
                type="submit"
                className="rounded-full bg-bone px-7 py-3.5 font-mono text-sm text-humus transition hover:bg-parchment"
              >
                Me prévenir
              </button>
            </form>
            <p className="mt-5 font-mono text-[11px] text-bone/50">
              En vous inscrivant, vous acceptez de recevoir un seul email de lancement.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-humus/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <span className="font-display text-lg font-semibold">Terreau</span>
            <p className="mt-1 font-mono text-xs text-moss">
              Un sol fertile pour les actions collectives
            </p>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs text-moss sm:items-end">
            <span>© 2026 Terreau — Bordeaux</span>
            <a href="mailto:bonjour@terreau.fr" className="transition hover:text-humus">
              bonjour@terreau.fr
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
