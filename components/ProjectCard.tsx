"use client";

import Link from "next/link";
import { Project, GESTURE_LABELS, GESTURE_COLORS } from "@/types/project";

const BORDER_CLASS: Record<string, string> = {
  agir: "card-gesture-agir",
  construire: "card-gesture-construire",
  inventer: "card-gesture-inventer",
  transmettre: "card-gesture-transmettre"
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projet/${project.id}`}
      className={`hover-lift group block rounded-2xl border border-humus/10 bg-bone/85 p-6 shadow-sm ${BORDER_CLASS[project.gesture]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${GESTURE_COLORS[project.gesture]}`}
        >
          {GESTURE_LABELS[project.gesture]}
        </span>
        {project.difficulty && (
          <span className="font-mono text-[10px] text-humus/40">{project.difficulty}</span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg leading-snug tracking-tight text-humus transition group-hover:text-moss-dark">
        {project.title}
      </h3>

      <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-moss-dark/90">
        {project.description}
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-humus/6 pt-4 font-mono text-[11px] text-humus/45">
        {project.cost && <span>{project.cost}</span>}
        {project.duration && <span>· {project.duration}</span>}
        <span className="ml-auto text-moss/70">{project.doneCount} l’ont fait</span>
      </div>
    </Link>
  );
}
