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

      <section className="border-b border-humus/10">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-clay">
            Un sol fertile pour les actions collectives
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Agir, construire, inventer, transmettre.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-moss-dark">
            Des actions concrètes, accessibles à tous. Reprends-les, améliore-les, transmets-les.
          </p>
          <div className="mt-8">
            <Link href="/publier" className="inline-flex rounded-full bg-moss px-7 py-3.5 font-mono text-sm text-bone transition hover:bg-moss-dark">
              Publier une action
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition ${
                filter === f ? "bg-moss text-bone" : "bg-bone/60 text-moss-dark hover:bg-bone"
              }`}
            >
              {f === "tous" ? "Tous" : GESTURE_LABELS[f]}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-moss-dark">
            Aucune action pour le moment.{" "}
            <Link href="/publier" className="underline">Publier la première</Link>
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-humus/10 bg-bone/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:px-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-humus/10 bg-bone/70 p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Accessible</p>
            <h2 className="mt-3 font-display text-2xl">Je n&apos;ai rien</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Pas d&apos;argent, pas de matériel, pas de compétence ? Filtre sur « Agir » et commence par les actions gratuites.
            </p>
          </div>
          <div className="rounded-2xl border border-humus/10 bg-bone/70 p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">Entraide</p>
            <h2 className="mt-3 font-display text-2xl">Je peux aider</h2>
            <p className="mt-3 text-sm leading-relaxed text-moss-dark">
              Une compétence à partager ? Publie un tutoriel dans « Transmettre » ou améliore un projet existant.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-humus/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
          <span className="font-display font-semibold">Terreau</span>
          <span className="font-mono text-xs text-moss">© 2026</span>
        </div>
      </footer>
    </main>
  );
}
