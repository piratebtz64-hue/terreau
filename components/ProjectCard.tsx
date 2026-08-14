"use client";

import Link from "next/link";
import { Project, GESTURE_LABELS, GESTURE_COLORS } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projet/${project.id}`}
      className="hover-lift group block rounded-2xl border border-humus/10 bg-bone/70 p-6 transition hover:border-moss/25 hover:bg-bone"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${GESTURE_COLORS[project.gesture]}`}>
          {GESTURE_LABELS[project.gesture]}
        </span>
        {project.difficulty && (
          <span className="font-mono text-[10px] text-humus/50">{project.difficulty}</span>
        )}
      </div>
      <h3 className="mt-4 font-display text-lg leading-snug tracking-tight text-humus group-hover:text-moss-dark">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-moss-dark">{project.description}</p>
      <div className="mt-5 flex items-center gap-4 font-mono text-[11px] text-humus/50">
        {project.cost && <span>{project.cost}</span>}
        {project.duration && <span>· {project.duration}</span>}
        <span className="ml-auto">{project.doneCount} l’ont fait</span>
      </div>
    </Link>
  );
}
