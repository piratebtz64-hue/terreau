"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";
import { Project, Gesture, GESTURE_LABELS } from "@/types/project";
import Link from "next/link";

const FILTERS: (Gesture | "tous")[] = ["tous", "agir", "construire", "inventer", "transmettre"];

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<Gesture | "tous">("tous");

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const filtered =
    filter === "tous" ? projects : projects.filter((p) => p.gesture === filter);

  return (
    <main className="min-h-screen bg-soil-grain text-humus">
      <Header />

      <section className="relative overflow-hidden border-b border-moss/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <span className="leaf animate-float absolute left-[4%] top-[12%] text-4xl sm:text-5xl">🌿</span>
          <span className="leaf animate-sway absolute right-[6%] top-[18%] text-3xl sm:text-4xl" style={{ animationDelay: "0.5s" }}>🍃</span>
          <span className="leaf animate-float absolute bottom-[15%] left-[8%] text-3xl opacity-40" style={{ animationDelay: "1s" }}>🌱</span>
          <span className="leaf animate-sway absolute bottom-[20%] right-[10%] text-2xl opacity-30" style={{ animationDelay: "1.5s" }}>☘️</span>
          <svg className="vine absolute -left-2 top-0 h-full w-16 sm:w-24" viewBox="0 0 80 400" fill="none">
            <path d="M40 0 C20 80, 60 120, 35 200 C10 280, 55 320, 40 400" stroke="#4A7A3C" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
            <circle cx="35" cy="100" r="4" fill="#5A8C4A" opacity="0.5"/>
            <circle cx="50" cy="180" r="3" fill="#6B9B5A" opacity="0.45"/>
            <circle cx="30" cy="260" r="5" fill="#4A7A3C" opacity="0.4"/>
          </svg>
          <svg className="vine absolute -right-2 top-10 h-[90%] w-14 sm:w-20" viewBox="0 0 70 350" fill="none">
            <path d="M30 0 C50 60, 15 110, 40 180 C65 250, 20 300, 35 350" stroke="#C97A3D" strokeWidth="1.8" strokeLinecap="round" opacity="0.35"/>
            <circle cx="40" cy="90" r="3.5" fill="#D4894A" opacity="0.4"/>
            <circle cx="28" cy="200" r="4" fill="#C97A3D" opacity="0.35"/>
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
          <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.32em] text-clay">
            Un sol fertile pour les actions collectives
          </p>
          <h1 className="animate-fade-up animate-delay-1 mt-5 max-w-2xl font-display text-[2.15rem] leading-[1.1] tracking-tight text-humus sm:text-5xl lg:text-[3.5rem]">
            Agir, construire,<br className="hidden sm:block" /> inventer, transmettre.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 max-w-lg text-base leading-relaxed text-moss-dark sm:text-lg">
            Des actions concrètes qui germent et se propagent.
            Reprends-les, améliore-les, fais-les pousser.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-3">
            <Link
              href="/publier"
              className="btn-grow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4A7A3C] to-[#3D6B32] px-7 py-3.5 font-mono text-sm text-bone shadow-lg shadow-[#4A7A3C]/25 transition hover:shadow-xl"
            >
              <span>🌱</span> Publier une action
            </Link>
            <Link
              href="/enfants"
              className="inline-flex items-center gap-2 rounded-full border-2 border-clay/30 bg-gradient-to-r from-amber-50 to-orange-50/80 px-7 py-3.5 font-mono text-sm text-clay transition hover:border-clay/50"
            >
              🌿 Espace enfants
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-10 sm:py-16">
        <div className="mb-9 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition ${
                filter === f
                  ? "bg-gradient-to-r from-[#4A7A3C] to-[#3D6B32] text-bone shadow-md"
                  : "bg-bone/80 text-moss-dark hover:bg-bone hover:text-humus"
              }`}
            >
              {f === "tous" ? "Tous" : GESTURE_LABELS[f]}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="relative border-t border-moss/10 bg-gradient-to-b from-[#E8DFC8]/80 to-[#E4D9BE]/60">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:px-10 lg:grid-cols-2">
          <div className="hover-lift rounded-2xl border border-[#4A7A3C]/15 bg-gradient-to-br from-bone to-[#E8F0E4] p-7 sm:p-9">
            <span className="text-3xl">🌱</span>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Accessible</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-[#2F5A28]">Je n&apos;ai rien</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Pas d&apos;argent, pas de matériel ? Filtre sur « Agir » et commence par les gestes qui poussent tout seuls.
            </p>
          </div>
          <div className="hover-lift rounded-2xl border border-clay/15 bg-gradient-to-br from-bone to-[#F5EDE0] p-7 sm:p-9">
            <span className="text-3xl">🤝</span>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Entraide</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-[#8A4A3B]">Je peux aider</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Une compétence à partager ? Publie un tutoriel dans « Transmettre » et fais germer les idées des autres.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-moss/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 sm:px-10">
          <span className="flex items-center gap-2 font-display text-lg font-semibold">
            <span>🌱</span> Terreau
          </span>
          <span className="font-mono text-xs text-[#4A7A3C]/70">© 2026 · ça pousse</span>
        </div>
      </footer>
    </main>
  );
}
