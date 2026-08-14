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
    steps: [
      "Identifier le pied trop court en faisant balancer la chaise",
      "Découper un coin de bois de la bonne épaisseur",
      "Le glisser sous le pied et vérifier la stabilité",
      "Ajuster si besoin en limant un peu le bois"
    ],
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
    steps: [
      "Trouver une caisse ou un bac déjà percé (ou percer le fond)",
      "Mettre une première couche de terreau ou de feuilles mortes",
      "Ajouter les déchets verts (épluchures) et bruns (carton, coquilles) en alternance",
      "Remuer de temps en temps et garder légèrement humide"
    ],
    author: "Marc",
    createdAt: "2026-08-08",
    doneCount: 27,
    doingCount: 8
  },
  {
    id: "3",
    title: "Idée : récupérer l’eau de rinçage des légumes",
    description: "Quand on lave les légumes, l’eau part dans l’évier. Et si on la récupérait pour arroser les plantes ?",
    gesture: "inventer",
    material: "Bassine ou saladier, arrosoir",
    cost: "0 €",
    duration: "2 min",
    difficulty: "facile",
    steps: [
      "Placer une bassine dans l’évier avant de rincer les légumes",
      "Récupérer l’eau après le rinçage",
      "La verser dans un arrosoir",
      "Arroser les plantes (éviter l’eau trop savonneuse)"
    ],
    author: "Inès",
    createdAt: "2026-08-12",
    doneCount: 2,
    doingCount: 5
  },
  {
    id: "4",
    title: "Comment fabriquer un nichoir simple",
    description: "Tutoriel clair pour fabriquer un nichoir à mésanges avec des planches de récupération. Transmis après l’avoir testé deux saisons.",
    gesture: "transmettre",
    material: "Planches, vis, scie, mètre, perceuse",
    cost: "5–15 €",
    duration: "2 h",
    difficulty: "moyen",
    steps: [
      "Découper les planches : fond 15×15 cm, côtés 15×25 cm, façade avec trou de 32 mm, dos et toit",
      "Assembler le fond et les deux côtés avec des vis",
      "Fixer la façade (trou d’entrée à environ 15 cm du fond) et le dos",
      "Poser le toit légèrement en pente pour l’eau de pluie",
      "Percer deux petits trous d’aération en haut des côtés",
      "Fixer le nichoir en hauteur (2–3 m), orienté sud-est, à l’abri du vent fort"
    ],
    author: "Paul",
    createdAt: "2026-08-05",
    doneCount: 41,
    doingCount: 12
  },
  {
    id: "5",
    title: "Réutiliser les bocaux en verre comme boîtes à épices",
    description: "Au lieu d’acheter des pots à épices, on lave et on réutilise les bocaux de confiture ou de sauce.",
    gesture: "agir",
    material: "Bocaux vides, marqueur ou étiquettes",
    cost: "0 €",
    duration: "15 min",
    difficulty: "facile",
    steps: [
      "Bien laver les bocaux et les laisser sécher",
      "Retirer les étiquettes d’origine (eau chaude + bicarbonate si besoin)",
      "Écrire le nom de l’épice au marqueur ou coller une étiquette",
      "Les ranger dans un tiroir ou sur une étagère à portée de main"
    ],
    author: "Sophie",
    createdAt: "2026-08-11",
    doneCount: 33,
    doingCount: 6
  }
];

const STORAGE_KEY = "terreau_projects_v2";

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
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
    createdAt: new Date().toISOString().slice(0, 10),
    doneCount: 0,
    doingCount: 0
  };
  saveProjects([newProject, ...getProjects()]);
  return newProject;
}

export function incrementDone(id: string) {
  saveProjects(getProjects().map((p) => p.id === id ? { ...p, doneCount: p.doneCount + 1 } : p));
}

export function incrementDoing(id: string) {
  saveProjects(getProjects().map((p) => p.id === id ? { ...p, doingCount: p.doingCount + 1 } : p));
}
