import type { SectionId } from "./site";

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
  /** Frase corta que resume el dilema. */
  hook: string;
  /** Lo que aprendimos, en una línea. */
  lesson: string;
  /** Secciones del sitio que alimentó, con el ancla exacta. */
  feeds: { label: string; href: string; section: SectionId }[];
}

export const cases: readonly CourseCase[] = [
  {
    id: "cancelacion",
    title: "El muro de la cancelación",
    hook: "Siete pantallas para irse, una para entrar",
    lesson: "Si la gente se va, se arregla el producto, no la salida.",
    feeds: [
      { label: "Regla 02 · demo del muro", href: "#demo-cancelacion", section: "codigo" },
      { label: "Promesa · Tu dinero", href: "#clausula-dinero", section: "promesa" },
    ],
  },
  {
    id: "verguenza",
    title: "La vergüenza de confirmación",
    hook: "“No, prefiero arriesgar mi salud”",
    lesson: "Se puede vender una suscripción sin culpa: con precio, ahorro y salida claros.",
    feeds: [
      { label: "Regla 02 · rediseño del modal", href: "#demo-verguenza", section: "codigo" },
      { label: "Promesa · Tu salud mental", href: "#clausula-salud", section: "promesa" },
    ],
  },
  {
    id: "buscador",
    title: "La degradación del buscador absoluto",
    hook: "Más clics, peores respuestas",
    lesson: "Cuando la métrica del negocio se separa de la del usuario, el producto empeora aunque los números suban.",
    feeds: [
      { label: "Filosofía · declaración", href: "#filosofia", section: "filosofia" },
      { label: "Caso 03 · el anuncio disfrazado", href: "#caso-buscador", section: "casos" },
    ],
  },
  {
    id: "rockstar",
    title: "El Rockstar arrogante",
    hook: "Código brillante, equipo roto",
    lesson: "El talento no compra impunidad: la conducta se nombra por sus efectos.",
    feeds: [
      { label: "Filosofía · cómo trabajamos por dentro", href: "#por-dentro", section: "filosofia" },
      { label: "Caso 04", href: "#caso-rockstar", section: "casos" },
      { label: "Sala de inversores", href: "#inversores", section: "inversores" },
    ],
  },
  {
    id: "filtracion",
    title: "La filtración de infieles",
    hook: "2.1 millones de cuentas publicadas y un rescate",
    lesson: "Las fallas fueron decisiones propias. La responsabilidad es nuestra y no se paga el rescate.",
    feeds: [
      { label: "Plan de crisis · ruta de vulnerabilidad", href: "#crisis", section: "crisis" },
      { label: "Sala de inversores · no pagamos", href: "#q-rescate", section: "inversores" },
    ],
  },
  {
    id: "tienda-apps",
    title: "El impuesto de la tienda de apps",
    hook: "30% inamovible y prohibido avisar que hay otra opción",
    lesson: "Cumplimos el contrato, pero no le escondemos al usuario el precio real.",
    feeds: [
      { label: "Filosofía · decisión 03", href: "#decision-tienda-apps", section: "filosofia" },
      { label: "Caso 02", href: "#caso-tienda-apps", section: "casos" },
      { label: "Promesa · Tu dinero", href: "#clausula-dinero", section: "promesa" },
    ],
  },
  {
    id: "deepfakes",
    title: "Clonación de voz e identidad por IA",
    hook: "Un minuto de audio basta para ser otra persona",
    lesson: "Sin consentimiento explícito y verificable de la persona clonada, no se construye.",
    feeds: [
      { label: "Regla 01 · caso para decidir", href: "#demo-deepfakes", section: "codigo" },
      { label: "Promesa · Tu autonomía", href: "#clausula-autonomia", section: "promesa" },
    ],
  },
  {
    id: "bossware",
    title: "El Bossware",
    hook: "Una foto por webcam cada 5 minutos",
    lesson: "“Solo seguía órdenes” no exime: se documenta, se cita la ley y se propone medir equipos, no personas.",
    feeds: [
      { label: "Filosofía · decisión 04", href: "#decision-bossware", section: "filosofia" },
      { label: "Caso 01", href: "#caso-bossware", section: "casos" },
      { label: "Promesa · Tu autonomía", href: "#clausula-autonomia", section: "promesa" },
    ],
  },
  {
    id: "prompt-ia",
    title: "Un prompt de IA: 4 gatos astronautas",
    hook: "Un n=4 es cuatro veces la energía",
    lesson: "El costo no lo decide el usuario, lo decide quien diseña el sistema.",
    feeds: [
      { label: "Regla 01 · calculadora", href: "#demo-gato", section: "codigo" },
      { label: "Plan de crisis · ruta ambiental", href: "#crisis", section: "crisis" },
    ],
  },
  {
    id: "evophone",
    title: "EvoPhone",
    hook: "No vende teléfonos, vende su fecha de caducidad",
    lesson: "El teléfono más verde es el que no hay que fabricar otra vez.",
    feeds: [
      { label: "Regla 03 · medidor y compuerta", href: "#demo-evophone", section: "codigo" },
      { label: "Plan de crisis · ruta ambiental", href: "#crisis", section: "crisis" },
      { label: "Sala de inversores", href: "#inversores", section: "inversores" },
    ],
  },
];

export const caseById = (id: CaseId): CourseCase => cases.find((c) => c.id === id)!;

/** Trabajos de respaldo: no son casos, son herramientas que usamos. */
export const tools = [
  {
    id: "a6",
    title: "El traductor deontológico",
    use: "Tradujimos los bloques 3 y 4 del código de la ACM a decisiones de taller. De ahí salen la columna “En el taller” y el respaldo de cada regla.",
    href: "#conceptos",
  },
  {
    id: "a7",
    title: "El desfase ético: diseño adictivo",
    use: "Identificamos el punto ciego del código frente al diseño adictivo y las excusas corporativas. Sostiene la regla 02 y la cláusula de salud mental.",
    href: "#excusas",
  },
] as const;
