export type Gesture = "agir" | "construire" | "inventer" | "transmettre";

export type Project = {
  id: string;
  title: string;
  description: string;
  gesture: Gesture;
  material?: string;
  cost?: string;
  duration?: string;
  difficulty?: "facile" | "moyen" | "avancé";
  steps?: string[];
  author?: string;
  createdAt: string;
  improvedFrom?: string;
  doneCount: number;
  doingCount: number;
};

export const GESTURE_LABELS: Record<Gesture, string> = {
  agir: "Agir",
  construire: "Construire",
  inventer: "Inventer",
  transmettre: "Transmettre"
};

export const GESTURE_COLORS: Record<Gesture, string> = {
  agir: "text-clay border-clay/30 bg-clay/10",
  construire: "text-moss border-moss/30 bg-moss/10",
  inventer: "text-root border-root/30 bg-root/10",
  transmettre: "text-moss-dark border-moss-dark/30 bg-moss-dark/10"
};
