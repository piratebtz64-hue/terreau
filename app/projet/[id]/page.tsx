"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { getProjectById, incrementDone, incrementDoing } from "@/lib/projects";
import { Project, GESTURE_LABELS, GESTURE_COLORS } from "@/types/project";

export default function ProjetPage() {
  const params = useParams();
  const id = params.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [done, setDone] = useState(false);
  const [doing, setDoing] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !localStorage.getItem("terreau_projects_v2")) {
        localStorage.removeItem("terreau_projects");
      }
    } catch {}
    setProject(getProjectById(id) || null);
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen bg-soil-grain text-humus">
        <Header />
        <div className="mx-auto max-w-2xl px-5 py-24 text-center">
          <p className="text-moss-dark">Projet introuvable.</p>
          <Link href="/" className="mt-6 inline-block font-mono text-sm underline">Retour</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-soil-grain text-humus">
      <Header />
      <article className="mx-auto max-w-2xl px-5 py-10 sm:px-10 sm:py-14">
        <Link href="/" className="font-mono text-xs text-moss-dark transition hover:text-humus">← Retour</Link>

        <div className="mt-8">
          <span className={`inline-flex rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${GESTURE_COLORS[project.gesture]}`}>
            {GESTURE_LABELS[project.gesture]}
          </span>
        </div>

        <h1 className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl">{project.title}</h1>
        {project.author && <p className="mt-3 font-mono text-xs text-humus/50">Proposé par {project.author}</p>}
        <p className="mt-8 text-base leading-relaxed text-moss-dark">{project.description}</p>

        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-humus/10 bg-bone/70 p-5 sm:grid-cols-4">
          {project.cost && <div><p className="font-mono text-[10px] uppercase tracking-wider text-humus/40">Coût</p><p className="mt-1.5 text-sm font-medium">{project.cost}</p></div>}
          {project.duration && <div><p className="font-mono text-[10px] uppercase tracking-wider text-humus/40">Durée</p><p className="mt-1.5 text-sm font-medium">{project.duration}</p></div>}
          {project.difficulty && <div><p className="font-mono text-[10px] uppercase tracking-wider text-humus/40">Difficulté</p><p className="mt-1.5 text-sm font-medium capitalize">{project.difficulty}</p></div>}
          {project.material && <div><p className="font-mono text-[10px] uppercase tracking-wider text-humus/40">Matériel</p><p className="mt-1.5 text-sm font-medium">{project.material}</p></div>}
        </div>

        {project.steps && project.steps.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl tracking-tight sm:text-2xl">Comment faire</h2>
            <ol className="mt-6 space-y-4">
              {project.steps.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-xl border border-humus/8 bg-bone/60 px-4 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-moss/15 font-mono text-xs font-medium text-moss">{i + 1}</span>
                  <p className="pt-0.5 text-sm leading-relaxed text-moss-dark">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <button onClick={() => { if (!doing) { incrementDoing(project.id); setDoing(true); setProject({ ...project, doingCount: project.doingCount + 1 }); } }} disabled={doing} className="flex-1 rounded-full border border-moss/30 bg-moss/10 py-3.5 font-mono text-sm text-moss transition hover:bg-moss/20 disabled:opacity-60">
            {doing ? "C’est noté" : "Je le fais"}
          </button>
          <button onClick={() => { if (!done) { incrementDone(project.id); setDone(true); setProject({ ...project, doneCount: project.doneCount + 1 }); } }} disabled={done} className="flex-1 rounded-full bg-moss py-3.5 font-mono text-sm text-bone transition hover:bg-moss-dark disabled:opacity-60">
            {done ? "Bravo" : "Je l’ai fait"}
          </button>
        </div>

        <p className="mt-6 font-mono text-xs text-humus/45">{project.doingCount} en cours · {project.doneCount} l’ont fait</p>
        <p className="mt-3 text-xs text-humus/40">Aucune photo ni preuve n’est demandée.</p>

        <div className="mt-12 rounded-2xl border border-dashed border-humus/20 bg-parchment/40 p-6 text-center">
          <p className="text-sm text-moss-dark">Tu as une version plus simple, moins chère ou plus solide ?</p>
          <Link href="/publier" className="mt-4 inline-block font-mono text-sm text-moss underline-offset-2 hover:underline">Proposer une amélioration</Link>
        </div>
      </article>
    </main>
  );
}
