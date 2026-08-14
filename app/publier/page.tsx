"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { addProject } from "@/lib/projects";
import { Gesture, GESTURE_LABELS } from "@/types/project";

export default function PublierPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gesture, setGesture] = useState<Gesture>("agir");
  const [material, setMaterial] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [difficulty, setDifficulty] = useState<"facile" | "moyen" | "avancé">("facile");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    setLoading(true);
    const project = addProject({
      title: title.trim(),
      description: description.trim(),
      gesture,
      material: material.trim() || undefined,
      cost: cost.trim() || undefined,
      duration: duration.trim() || undefined,
      difficulty,
      author: author.trim() || undefined
    });
    router.push(`/projet/${project.id}`);
  }

  return (
    <main className="min-h-screen bg-soil-grain text-humus">
      <Header />
      <div className="mx-auto max-w-2xl px-6 py-12 sm:px-10 sm:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-clay">Contribuer</p>
        <h1 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Publier une action</h1>
        <p className="mt-4 text-base text-moss-dark">
          Pas besoin d&apos;être parfait. Une idée simple, un geste testé, un tutoriel… tout compte.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block font-mono text-xs text-moss-dark">Geste</label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(GESTURE_LABELS) as Gesture[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGesture(g)}
                  className={`rounded-full px-4 py-2 font-mono text-xs transition ${
                    gesture === g ? "bg-moss text-bone" : "bg-bone/70 text-moss-dark hover:bg-bone"
                  }`}
                >
                  {GESTURE_LABELS[g]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs text-moss-dark">Titre</label>
            <input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex : Réparer une chaise bancale" className="w-full rounded-xl border border-humus/15 bg-bone/80 px-4 py-3 text-sm outline-none focus:border-moss/40" />
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs text-moss-dark">Description</label>
            <textarea required rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Explique simplement ce que tu as fait ou ce que tu proposes…" className="w-full rounded-xl border border-humus/15 bg-bone/80 px-4 py-3 text-sm outline-none focus:border-moss/40" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-mono text-xs text-moss-dark">Matériel</label>
              <input value={material} onChange={(e) => setMaterial(e.target.value)} placeholder="Optionnel" className="w-full rounded-xl border border-humus/15 bg-bone/80 px-4 py-3 text-sm outline-none focus:border-moss/40" />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs text-moss-dark">Coût</label>
              <input value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Ex : 0 €" className="w-full rounded-xl border border-humus/15 bg-bone/80 px-4 py-3 text-sm outline-none focus:border-moss/40" />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs text-moss-dark">Durée</label>
              <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Ex : 20 min" className="w-full rounded-xl border border-humus/15 bg-bone/80 px-4 py-3 text-sm outline-none focus:border-moss/40" />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs text-moss-dark">Difficulté</label>
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value as typeof difficulty)} className="w-full rounded-xl border border-humus/15 bg-bone/80 px-4 py-3 text-sm outline-none focus:border-moss/40">
                <option value="facile">Facile</option>
                <option value="moyen">Moyen</option>
                <option value="avancé">Avancé</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs text-moss-dark">Ton prénom (optionnel)</label>
            <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Anonyme si vide" className="w-full rounded-xl border border-humus/15 bg-bone/80 px-4 py-3 text-sm outline-none focus:border-moss/40" />
          </div>

          <button type="submit" disabled={loading || !title.trim() || !description.trim()} className="w-full rounded-full bg-moss py-4 font-mono text-sm text-bone transition hover:bg-moss-dark disabled:opacity-50 sm:w-auto sm:px-10">
            {loading ? "Publication…" : "Publier"}
          </button>
        </form>
      </div>
    </main>
  );
}
