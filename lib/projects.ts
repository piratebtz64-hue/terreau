import { Project } from "@/types/project";

export const SEED_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Réparer une chaise bancale avec un coin de bois",
    description: "Au lieu de jeter une chaise qui penche, on glisse un petit coin de bois sous le pied trop court. Simple, gratuit, et la chaise redevient stable.",
    gesture: "agir",
    material: "Un petit morceau de bois, un cutter",
    cost: "0 €",
    duration: "10 min",
    difficulty: "facile",
    steps: ["Identifier le pied trop court", "Découper un coin de bois de la bonne épaisseur", "Le glisser sous le pied et vérifier la stabilité"],
    author: "Léa",
    createdAt: "2026-08-10",
    doneCount: 14,
    doingCount: 3
  },
  {
    id: "2",
    title: "Composteur de balcon en caisse de récup",
    description: "Transformer une caisse en bois ou un grand bac en composteur d’appartement. Idéal pour ceux qui n’ont pas de jardin.",
    gesture: "construire",
    material: "Caisse en bois, terreau, coquilles d’œufs, déchets de cuisine",
    cost: "0–5 €",
    duration: "1 h",
    difficulty: "facile",
    steps: ["Trouver une caisse ou un bac percé", "Ajouter une couche de terreau", "Y mettre les déchets verts et bruns en alternance", "Remuer de temps en temps"],
    author: "Marc",
    createdAt: "2026-08-08",
    doneCount: 27,
    doingCount: 8
  },
  {
    id: "3",
    title: "Idée : récupérer l’eau de rinçage des légumes",
    description: "Quand on lave les légumes, l’eau part dans l’évier. Et si on la récupérait pour arroser les plantes ? Je ne sais pas encore comment faire proprement.",
    gesture: "inventer",
    material: "À définir",
    cost: "?",
    duration: "?",
    difficulty: "facile",
    author: "Inès",
    createdAt: "2026-08-12",
    doneCount: 2,
    doingCount: 5
  },
  {
    id: "4",
    title: "Comment fabriquer un nichoir simple (tutoriel transmis)",
    description: "Tutoriel clair pour fabriquer un nichoir à mésanges avec des planches de récupération. Transmis après l’avoir testé deux saisons.",
    gesture: "transmettre",
    material: "Planches, vis, scie, mètre",
    cost: "5–15 €",
    duration: "2 h",
    difficulty: "moyen",
    steps: ["Découper les planches aux bonnes dimensions", "Assembler le fond, les côtés et le toit", "Percer le trou d’entrée (32 mm pour mésanges)", "Fixer solidement en hauteur, à l’abri"],
    author: "Paul",
    createdAt: "2026-08-05",
    doneCount: 41,
    doingCount: 12
  },
  {
    id: "5",
    title: "Réutiliser les bocaux en verre comme boîtes à épices",
    description: "Au lieu d’acheter des pots à épices, on lave et on réutilise les bocaux de confiture ou de sauce. Étiquettes au marqueur ou au papier.",
    gesture: "agir",
    material: "Bocaux vides, marqueur ou étiquettes",
    cost: "0 €",
    duration: "15 min",
    difficulty: "facile",
    author: "Sophie",
    createdAt: "2026-08-11",
    doneCount: 33,
    doingCount: 6
  }
];

const STORAGE_KEY = "terreau_projects";

export function getProjects(): Project[] {
  if (typeof window === "undefined") return SEED_PROJECTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PROJECTS));
      return SEED_PROJECTS;
    }
    return JSON.parse(raw) as Project[];
  } catch {
    return SEED_PROJECTS;
  }
}

export function saveProjects(projects: Project[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find((p) => p.id === id);
}

export function addProject(project: Omit<Project, "id" | "createdAt" | "doneCount" | "doingCount">): Project {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
    createdAt: new Date().toISOString().slice(0, 10),
    doneCount: 0,
    doingCount: 0
  };
  const updated = [newProject, ...projects];
  saveProjects(updated);
  return newProject;
}

export function incrementDone(id: string) {
  const projects = getProjects().map((p) =>
    p.id === id ? { ...p, doneCount: p.doneCount + 1 } : p
  );
  saveProjects(projects);
}

export function incrementDoing(id: string) {
  const projects = getProjects().map((p) =>
    p.id === id ? { ...p, doingCount: p.doingCount + 1 } : p
  );
  saveProjects(projects);
}
