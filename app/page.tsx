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

      <section className="relative overflow-hidden border-b border-humus/8">
        <div className="absolute inset-0 bg-gradient-to-b from-moss/[0.04] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-10 sm:py-20">
          <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.3em] text-clay">
            Un sol fertile pour les actions collectives
          </p>
          <h1 className="animate-fade-up animate-delay-1 mt-5 max-w-2xl font-display text-[2.1rem] leading-[1.12] tracking-tight text-humus sm:text-5xl lg:text-[3.4rem]">
            Agir, construire,<br className="hidden sm:block" /> inventer, transmettre.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 max-w-lg text-base leading-relaxed text-moss-dark sm:text-lg">
            Des actions concrètes, accessibles à tous.
            Reprends-les, améliore-les, transmets-les.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-9 flex flex-wrap gap-3">
            <Link
              href="/publier"
              className="inline-flex items-center rounded-full bg-moss px-7 py-3.5 font-mono text-sm text-bone shadow-md shadow-moss/20 transition hover:bg-moss-dark hover:shadow-lg"
            >
              Publier une action
            </Link>
            <Link
              href="/enfants"
              className="inline-flex items-center rounded-full border border-clay/25 bg-gradient-to-r from-clay/12 to-transparent px-7 py-3.5 font-mono text-sm text-clay transition hover:border-clay/40 hover:from-clay/20"
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
                  ? "bg-moss text-bone shadow-sm"
                  : "bg-bone/70 text-moss-dark hover:bg-bone hover:text-humus"
              }`}
            >
              {f === "tous" ? "Tous" : GESTURE_LABELS[f]}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-moss-dark">
            Aucune action.{" "}
            <Link href="/publier" className="text-moss underline underline-offset-2">
              Publier la première
            </Link>
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-humus/8 bg-gradient-to-b from-bone/50 to-bone/20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:px-10 lg:grid-cols-2">
          <div className="hover-lift rounded-2xl border border-humus/10 bg-bone/80 p-7 sm:p-9">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-clay/10 text-lg">🌱</div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Accessible</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight">Je n&apos;ai rien</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Pas d&apos;argent, pas de matériel, pas de compétence ?
              Filtre sur « Agir » et commence par les actions gratuites.
            </p>
          </div>
          <div className="hover-lift rounded-2xl border border-humus/10 bg-bone/80 p-7 sm:p-9">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-moss/10 text-lg">🤝</div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Entraide</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight">Je peux aider</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Une compétence à partager ?
              Publie un tutoriel dans « Transmettre » ou améliore un projet existant.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-humus/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 sm:px-10">
          <span className="font-display text-lg font-semibold">Terreau</span>
          <span className="font-mono text-xs text-moss/70">© 2026</span>
        </div>
      </footer>
    </main>
  );
}
