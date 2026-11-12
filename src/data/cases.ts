/** Los 10 casos oficiales del semestre (content/semestre.md). Ningún otro caso es protagonista en el sitio. */
export type CaseId =
  | "cancelacion"
  | "verguenza"
  | "buscador"
  | "rockstar"
  | "filtracion"
  | "tienda-apps"
  | "deepfakes"
  | "bossware"
  | "prompt-ia"
  | "evophone";

export interface CourseCase {
  id: CaseId;
  title: string;
  /** Lo que aprendimos, en una línea. */
  lesson: string;
  /** Dónde se usa en el sitio. */
  href: string;
}

export const cases: readonly CourseCase[] = [
  { id: "cancelacion", title: "El muro de la cancelación", lesson: "Si la gente se va, se arregla el producto, no la salida.", href: "#demo-cancelacion" },
  { id: "verguenza", title: "La vergüenza de confirmación", lesson: "Se puede vender una suscripción sin culpa.", href: "#demo-verguenza" },
  { id: "buscador", title: "La degradación del buscador", lesson: "Si la métrica se separa del usuario, el producto empeora.", href: "#caso-buscador" },
  { id: "rockstar", title: "El Rockstar arrogante", lesson: "El talento no compra impunidad.", href: "#nosotros" },
  { id: "filtracion", title: "La filtración de infieles", lesson: "Las fallas fueron nuestras; el rescate no se paga.", href: "#crisis" },
  { id: "tienda-apps", title: "El impuesto de la tienda de apps", lesson: "Cumplimos el contrato sin esconder el precio real.", href: "#caso-tienda-apps" },
  { id: "deepfakes", title: "Clonación de voz e identidad por IA", lesson: "Sin consentimiento de la persona clonada, no se construye.", href: "#regla-ia" },
  { id: "bossware", title: "El Bossware", lesson: "Se miden equipos, no personas, y con aviso.", href: "#caso-bossware" },
  { id: "prompt-ia", title: "Un prompt de IA: 4 gatos astronautas", lesson: "El costo lo decide quien diseña el sistema.", href: "#demo-gato" },
  { id: "evophone", title: "EvoPhone", lesson: "El teléfono más verde es el que no hay que fabricar.", href: "#demo-evophone" },
];

export const caseById = (id: CaseId): CourseCase => cases.find((c) => c.id === id)!;
