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
        <div className="absolute inset-0 bg-gradient-to-b from-moss/[0.03] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.3em] text-clay">
            Un sol fertile pour les actions collectives
          </p>
          <h1 className="animate-fade-up animate-delay-1 mt-5 max-w-2xl font-display text-3xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Agir, construire,
            <br />
            inventer, transmettre.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 max-w-xl text-base leading-relaxed text-moss-dark sm:text-lg">
            Des actions concrètes, accessibles à tous.
            Reprends-les, améliore-les, transmets-les.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-9 flex flex-wrap gap-3">
            <Link
              href="/publier"
              className="inline-flex rounded-full bg-moss px-7 py-3.5 font-mono text-sm text-bone shadow-md transition hover:bg-moss-dark hover:shadow-lg"
            >
              Publier une action
            </Link>
            <Link
              href="/enfants"
              className="inline-flex rounded-full border border-clay/25 bg-gradient-to-r from-clay/10 to-transparent px-7 py-3.5 font-mono text-sm text-clay transition hover:border-clay/40 hover:from-clay/15"
            >
              🌿 Espace enfants
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="mb-9 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition ${
                filter === f
                  ? "bg-moss text-bone shadow-sm"
                  : "bg-bone/70 text-moss-dark hover:bg-bone"
              }`}
            >
              {f === "tous" ? "Tous" : GESTURE_LABELS[f]}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-humus/8 bg-bone/30">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-2">
          <div className="hover-lift rounded-2xl border border-humus/10 bg-bone/80 p-8 shadow-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Accessible</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight">Je n&apos;ai rien</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Pas d&apos;argent, pas de matériel, pas de compétence ?
              Filtre sur « Agir » et commence par les actions gratuites.
            </p>
          </div>
          <div className="hover-lift rounded-2xl border border-humus/10 bg-bone/80 p-8 shadow-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Entraide</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight">Je peux aider</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Une compétence à partager ? Publie un tutoriel dans « Transmettre »
              ou améliore un projet existant.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-humus/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
          <span className="font-display font-semibold tracking-tight">Terreau</span>
          <span className="font-mono text-xs text-moss/70">© 2026</span>
        </div>
      </footer>
    </main>
  );
}
