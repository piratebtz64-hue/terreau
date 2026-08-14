import WaitlistForm from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-soil-grain text-humus">
      <header className="sticky top-0 z-50 border-b border-humus/10 bg-parchment/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="/" className="font-display text-xl font-semibold tracking-tight sm:text-2xl">Terreau</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-moss-dark sm:flex">
            <a href="#gestes" className="transition-colors hover:text-humus">Les 4 gestes</a>
            <a href="#comment" className="transition-colors hover:text-humus">Comment ça marche</a>
            <a href="#inscription" className="rounded-full bg-moss px-5 py-2.5 text-bone transition hover:bg-moss-dark">Être prévenu</a>
          </nav>
          <a href="#inscription" className="rounded-full bg-moss px-4 py-2 font-mono text-xs text-bone sm:hidden">S&apos;inscrire</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:pt-28">
          <div className="max-w-3xl">
            <p className="mb-6 animate-fade-up font-mono text-[11px] uppercase tracking-[0.28em] text-clay">Une idée qui se propage</p>
            <h1 className="animate-fade-up animate-delay-1 font-display text-4xl leading-[1.08] tracking-tight text-humus sm:text-6xl lg:text-7xl">
              La planète n&apos;a pas besoin que quelques personnes fassent tout.
            </h1>
            <p className="mt-7 animate-fade-up animate-delay-2 max-w-xl text-lg leading-relaxed text-moss-dark sm:mt-8 sm:text-xl">
              Elle a besoin que des millions de personnes fassent quelque chose.
            </p>
            <p className="mt-6 animate-fade-up animate-delay-3 max-w-xl text-base leading-relaxed text-humus/80">
              Terreau est une plateforme gratuite où chacun peut agir concrètement pour la planète — réparer, construire, inventer, transmettre — et voir son idée se propager.
            </p>
            <div className="mt-10 flex animate-fade-up animate-delay-4 flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#inscription" className="inline-flex w-fit rounded-full bg-moss px-7 py-3.5 font-mono text-sm text-bone shadow-sm transition hover:bg-moss-dark">Être prévenu du lancement</a>
              <a href="#gestes" className="inline-flex w-fit items-center gap-2 font-mono text-sm text-moss-dark transition hover:text-humus">Découvrir les 4 gestes ↓</a>
            </div>
          </div>

          <div className="mt-20 animate-fade-up animate-delay-5 sm:mt-28">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {["Idée", "Reproduite", "Améliorée", "Transmise"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-xs font-medium sm:h-14 sm:w-14 ${
                      i === 0 ? "border-clay bg-clay/10 text-clay" : i === 3 ? "border-moss bg-moss text-bone" : "border-humus/15 bg-bone text-humus"
                    }`}>{i + 1}</div>
                    <span className="mt-2.5 font-mono text-[10px] uppercase tracking-wider text-moss-dark">{step}</span>
                  </div>
                  {i < 3 && <div className="hidden h-px w-8 bg-humus/15 sm:block sm:w-12" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-humus/10 bg-bone/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-clay">Manifeste</p>
            <blockquote className="font-display text-2xl leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              « La planète n&apos;a pas besoin que quelques personnes fassent tout. Elle a besoin que des millions de personnes fassent quelque chose. »
            </blockquote>
          </div>
        </div>
      </section>

      <section id="gestes" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <h2 className="mb-12 font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">Les quatre gestes</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Agir", desc: "Réparer plutôt que jeter, réutiliser, économiser une ressource, protéger la biodiversité." },
              { num: "02", title: "Construire", desc: "Fabriquer un composteur, un récupérateur d'eau, un nichoir, transformer un déchet en objet utile." },
              { num: "03", title: "Inventer", desc: "Proposer une idée même sans savoir la réaliser. Elle peut devenir prototype grâce aux autres." },
              { num: "04", title: "Transmettre", desc: "Expliquer comment reproduire ce qu'on a réussi. Le site devient une bibliothèque vivante de solutions." }
            ].map((g) => (
              <div key={g.num} className="hover-lift rounded-2xl border border-humus/10 bg-bone/60 p-6">
                <span className="font-mono text-xs text-clay">{g.num}</span>
                <h3 className="mt-3 font-display text-xl">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-moss-dark">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comment" className="scroll-mt-20 border-t border-humus/10 bg-bone/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <h2 className="mb-12 font-display text-3xl tracking-tight sm:text-4xl">Comment une idée se répand</h2>
          <div className="space-y-0">
            {[
              { step: "1", title: "Quelqu'un agit", text: "Une personne réalise une action simple et la documente librement (sans photo obligatoire)." },
              { step: "2", title: "Quelqu'un d'autre la reprend", text: "Une autre personne voit l'action, la reproduit chez elle, avec ses moyens." },
              { step: "3", title: "Elle l'améliore", text: "Elle propose une version moins chère, plus simple, plus solide ou plus écologique." },
              { step: "4", title: "La nouvelle version circule", text: "La version améliorée est reprise à son tour. L'idée évolue et se propage." },
              { step: "5", title: "Le mouvement grandit", text: "Ce qui était une action isolée devient un cheminement collectif visible et vivant." }
            ].map((item, idx) => (
              <div key={item.step} className={`flex gap-6 border-l-2 py-8 pl-6 sm:pl-10 ${idx === 4 ? "border-moss" : "border-humus/12"}`}>
                <span className="font-mono text-sm text-clay">{item.step}</span>
                <div>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm text-moss-dark sm:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-humus/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="hover-lift rounded-2xl border border-humus/10 bg-bone/60 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-clay">Accessible à tous</p>
              <h3 className="mt-4 font-display text-2xl">Je n&apos;ai rien</h3>
              <p className="mt-4 text-base leading-relaxed text-moss-dark">Pas d&apos;argent, pas de matériel, pas de compétence particulière ? Terreau propose des actions gratuites et accessibles immédiatement.</p>
            </div>
            <div className="hover-lift rounded-2xl border border-humus/10 bg-bone/60 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-clay">Entraide discrète</p>
              <h3 className="mt-4 font-display text-2xl">Je peux aider</h3>
              <p className="mt-4 text-base leading-relaxed text-moss-dark">Vous avez une compétence ? Mettez-la au service d&apos;un projet, sans créer un réseau social à profils publics.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="inscription" className="scroll-mt-20 border-t border-humus/10 bg-moss text-bone">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-bone/65">Lancement bientôt</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Soyez prévenu du lancement</h2>
            <p className="mt-5 text-base leading-relaxed text-bone/80">Laissez votre email. Nous vous écrirons uniquement quand Terreau ouvrira ses portes.</p>
            <div className="mt-10">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-humus/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span className="font-display text-lg font-semibold">Terreau</span>
          <span className="font-mono text-xs text-moss">© 2026 — Bordeaux</span>
        </div>
      </footer>
    </main>
  );
}
