"use client";

import Link from "next/link";
import { Project, GESTURE_LABELS, GESTURE_COLORS } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projet/${project.id}`}
      className={`hover-lift group relative block overflow-hidden rounded-2xl border border-humus/10 p-5 shadow-sm sm:p-6 card-gesture-${project.gesture}`}
    >
      <span className="absolute -right-1 -top-1 text-2xl opacity-20 transition group-hover:opacity-40 group-hover:rotate-12" aria-hidden>🍃</span>
      <div className="flex items-start justify-between gap-3">
        <span className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider ${GESTURE_COLORS[project.gesture]}`}>
          {GESTURE_LABELS[project.gesture]}
        </span>
        {project.difficulty && (
          <span className="rounded-full bg-humus/5 px-2 py-0.5 font-mono text-[10px] text-humus/45">{project.difficulty}</span>
        )}
      </div>
      <h3 className="mt-4 font-display text-[1.05rem] leading-snug tracking-tight text-humus transition group-hover:text-[#2F5A28] sm:text-lg">
        {project.title}
      </h3>
      <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-moss-dark/90">{project.description}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-humus/8 pt-4 font-mono text-[11px] text-humus/50">
        {project.cost && <span className="rounded-md bg-[#4A7A3C]/10 px-2 py-0.5 text-[#3D6B32]">{project.cost}</span>}
        {project.duration && <span>{project.duration}</span>}
        <span className="ml-auto flex items-center gap-1 text-[#4A7A3C]/80">
          <span aria-hidden>🌱</span> {project.doneCount} l’ont fait
        </span>
      </div>
    </Link>
  );
}
