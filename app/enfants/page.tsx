"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

type Lesson = {
  id: string;
  title: string;
  emoji: string;
  summary: string;
  content: string[];
  quiz?: { question: string; options: string[]; answer: number };
};

const LESSONS: Lesson[] = [
  {
    id: "eau",
    title: "L’eau, un trésor",
    emoji: "💧",
    summary: "Pourquoi il faut la protéger et comment en économiser tous les jours.",
    content: [
      "L’eau est précieuse. Sur Terre, une toute petite partie de l’eau est douce et utilisable.",
      "Quand on laisse le robinet ouvert en se brossant les dents, on gaspille beaucoup d’eau.",
      "Astuce simple : fermer le robinet pendant qu’on se brosse les dents ou qu’on savonne les mains.",
      "Récupérer l’eau de rinçage des légumes pour arroser les plantes, c’est aussi une super idée."
    ],
    quiz: {
      question: "Que faire pendant qu’on se brosse les dents ?",
      options: ["Laisser le robinet ouvert", "Fermer le robinet", "Ouvrir encore plus fort"],
      answer: 1
    }
  },
  {
    id: "dechets",
    title: "Moins de déchets",
    emoji: "♻️",
    summary: "Réduire, réutiliser, recycler : les 3 gestes magiques.",
    content: [
      "Avant de jeter, on se demande : est-ce que je peux encore m’en servir ?",
      "Un bocal en verre peut devenir une boîte à trésors, un pot à crayons ou un vase.",
      "Trier ses déchets aide la planète : le papier, le verre et le plastique peuvent avoir une deuxième vie.",
      "Le compost transforme les épluchures en nourriture pour la terre."
    ],
    quiz: {
      question: "Que faire d’un bocal en verre vide ?",
      options: ["Le jeter tout de suite", "Le réutiliser ou le recycler", "Le casser"],
      answer: 1
    }
  },
  {
    id: "nature",
    title: "Protéger la nature",
    emoji: "🌱",
    summary: "Les petites bêtes, les arbres et nous : on est tous liés.",
    content: [
      "Les abeilles, les oiseaux et les insectes aident les plantes à grandir.",
      "Un nichoir ou un hôtel à insectes dans le jardin (ou sur le balcon) leur offre un refuge.",
      "Ne pas cueillir toutes les fleurs : les insectes en ont besoin.",
      "Marcher sur les chemins plutôt que dans les herbes protège les petites vies cachées."
    ],
    quiz: {
      question: "Pourquoi les abeilles sont importantes ?",
      options: ["Elles font du bruit", "Elles aident les plantes", "Elles mangent les arbres"],
      answer: 1
    }
  },
  {
    id: "energie",
    title: "L’énergie maligne",
    emoji: "⚡",
    summary: "Éteindre, débrancher, profiter de la lumière du jour.",
    content: [
      "La lumière du soleil est gratuite et agréable : on ouvre les volets le matin.",
      "Éteindre la lumière en quittant une pièce, c’est un super pouvoir.",
      "Les chargeurs branchés pour rien consomment un peu d’énergie.",
      "Un pull plutôt que le chauffage trop fort : on reste au chaud autrement."
    ],
    quiz: {
      question: "Que faire en quittant une pièce ?",
      options: ["Laisser la lumière allumée", "Éteindre la lumière", "Allumer toutes les lumières"],
      answer: 1
    }
  }
];

export default function EnfantsPage() {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [answered, setAnswered] = useState(false);
  const [stars, setStars] = useState(0);

  function openLesson(lesson: Lesson) {
    setActiveLesson(lesson);
    setAnswered(false);
  }

  function answerQuiz(optionIndex: number) {
    if (!activeLesson?.quiz || answered) return;
    setAnswered(true);
    if (optionIndex === activeLesson.quiz.answer) {
      setStars((s) => s + 1);
    }
  }

  return (
    <main className="min-h-screen bg-soil-grain text-humus">
      <Header />

      <section className="relative overflow-hidden border-b border-humus/10">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
            <div className="flex flex-col items-center">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-moss/20 to-clay/20 shadow-inner sm:h-44 sm:w-44">
                <span className="text-7xl sm:text-8xl" role="img" aria-label="Lila">🌿👧</span>
              </div>
              <p className="mt-4 font-display text-xl tracking-tight">Lila</p>
              <p className="font-mono text-xs text-moss">la fille de l’écologie</p>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-clay">Espace enfants</p>
              <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Apprendre à protéger la planète en s’amusant
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-moss-dark">
                Avec Lila, découvre des gestes simples pour respecter la Terre. Chaque leçon te donne une étoile ⭐
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
                <span className="font-mono text-sm text-moss-dark">Tes étoiles :</span>
                <span className="font-display text-2xl text-clay">{stars}</span>
                <span className="text-xl">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!activeLesson ? (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Les aventures de Lila</h2>
          <p className="mt-2 text-sm text-moss-dark">Choisis une leçon pour commencer</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {LESSONS.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => openLesson(lesson)}
                className="hover-lift group rounded-2xl border border-humus/10 bg-bone/80 p-6 text-left transition hover:border-moss/30 hover:bg-bone"
              >
                <span className="text-4xl">{lesson.emoji}</span>
                <h3 className="mt-4 font-display text-xl tracking-tight group-hover:text-moss-dark">{lesson.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-moss-dark">{lesson.summary}</p>
                <span className="mt-5 inline-block font-mono text-xs text-clay">Commencer →</span>
              </button>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-dashed border-moss/25 bg-moss/5 p-8 text-center">
            <p className="font-display text-lg">Tu as appris un geste ?</p>
            <p className="mt-2 text-sm text-moss-dark">Publie-le sur Terreau pour inspirer les autres (avec l’aide d’un adulte).</p>
            <Link href="/publier" className="mt-5 inline-flex rounded-full bg-moss px-6 py-3 font-mono text-sm text-bone transition hover:bg-moss-dark">
              Publier mon geste
            </Link>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-2xl px-6 py-12 sm:px-10 sm:py-16">
          <button onClick={() => setActiveLesson(null)} className="font-mono text-xs text-moss-dark transition hover:text-humus">
            ← Toutes les leçons
          </button>

          <div className="mt-8">
            <span className="text-5xl">{activeLesson.emoji}</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight">{activeLesson.title}</h2>
          </div>

          <div className="mt-8 space-y-5">
            {activeLesson.content.map((para, i) => (
              <p key={i} className="rounded-xl border border-humus/8 bg-bone/60 px-5 py-4 text-base leading-relaxed text-moss-dark">
                {para}
              </p>
            ))}
          </div>

          {activeLesson.quiz && (
            <div className="mt-12 rounded-2xl border border-clay/20 bg-clay/5 p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-clay">Mini-quiz de Lila</p>
              <p className="mt-3 font-display text-lg">{activeLesson.quiz.question}</p>
              <div className="mt-5 space-y-3">
                {activeLesson.quiz.options.map((opt, i) => {
                  const isCorrect = i === activeLesson.quiz!.answer;
                  return (
                    <button
                      key={i}
                      onClick={() => answerQuiz(i)}
                      disabled={answered}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                        answered && isCorrect
                          ? "border-moss bg-moss/15 text-moss-dark"
                          : answered && !isCorrect
                          ? "border-humus/10 bg-bone/40 text-humus/40"
                          : "border-humus/15 bg-bone/80 hover:border-moss/30"
                      }`}
                    >
                      {opt}{answered && isCorrect && " ✓"}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <p className="mt-5 font-mono text-sm text-moss">Bravo ! Tu gagnes une étoile ⭐</p>
              )}
            </div>
          )}

          <button
            onClick={() => setActiveLesson(null)}
            className="mt-10 w-full rounded-full bg-moss py-3.5 font-mono text-sm text-bone transition hover:bg-moss-dark"
          >
            Retour aux leçons
          </button>
        </section>
      )}

      <footer className="border-t border-humus/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
          <span className="font-display font-semibold">Terreau</span>
          <span className="font-mono text-xs text-moss">Espace enfants · Lila</span>
        </div>
      </footer>
    </main>
  );
}
