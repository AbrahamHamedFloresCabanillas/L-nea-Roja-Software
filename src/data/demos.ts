/* Contenido de las demos del Código LSC. Los componentes solo lo presentan. */

/* ---------- Regla 01 · ¿Cuánto cuesta un gato astronauta? (prompt-ia) ---------- */

export const TEXT_WH = 0.24; // mediana de un prompt de texto en Gemini, Google (2025)

export interface PromptOption {
  id: string;
  label: string;
  /** Energía estimada en Wh: [bajo, alto]. Si es un solo valor, bajo = alto. */
  wh: [number, number];
  sources: string[];
}

export const promptOptions: readonly PromptOption[] = [
  { id: "texto", label: "Una pregunta de texto", wh: [0.24, 0.24], sources: ["google-gemini"] },
  { id: "imagen", label: "1 imagen de un gato astronauta", wh: [1.22, 2.9], sources: ["mittr", "luccioni"] },
  { id: "imagenes", label: "4 imágenes del gato (n = 4)", wh: [4.89, 11.63], sources: ["mittr", "luccioni"] },
  { id: "video", label: "Video de 5 segundos del gato", wh: [944, 944], sources: ["mittr"] },
];

export const promptFacts = {
  thesis: "El costo no lo decide el usuario, lo decide quien diseña el sistema.",
  note: "Estimaciones publicadas con métodos distintos: sirven para comparar, no para facturar.",
  method: [
    "Texto: 0.24 Wh, mediana de Gemini medida por Google (2025).",
    "Imágenes: de 4,402 J por imagen (Stable Diffusion 3, MIT Technology Review, 2025) a 2.9 Wh de promedio (Luccioni et al., 2024), por 4.",
    "Video: 3.4 millones de J por un video de 5 s (CogVideoX, MIT Technology Review, 2025) ≈ 944 Wh. La versión anterior, de 6 s, gastaba unos 30 Wh.",
  ],
};

/* ---------- Regla 02 · El muro de la cancelación (cancelacion) ---------- */

export interface CancelScreen {
  title: string;
  body: string;
  primary: string; // el botón grande que te retiene
  exit: string; // la salida, pequeña
  kind?: "survey" | "bot" | "code";
  options?: string[];
}

export const cancelWall: readonly CancelScreen[] = [
  { title: "Mi cuenta", body: "Plan Premium · $189 al mes", primary: "Ver mis beneficios", exit: "Administrar suscripción" },
  { title: "¿Seguro que quieres irte?", body: "Perderás todo para siempre.", primary: "Conservar mis beneficios", exit: "Continuar" },
  { title: "¿Por qué te vas?", body: "Encuesta obligatoria.", primary: "Mejor me quedo", exit: "Siguiente", kind: "survey", options: ["Es caro", "No lo uso", "Otro motivo"] },
  { title: "3 meses al 50%", body: "Solo por hoy.", primary: "Aceptar la oferta", exit: "No me interesa" },
  { title: "Asistente virtual", body: "Para cancelar, habla con el asistente.", primary: "Volver al inicio", exit: "Hablar con el asistente", kind: "bot" },
  { title: "Confirma tu identidad", body: "Te enviamos un código.", primary: "Mejor no", exit: "Ya escribí el código", kind: "code" },
  { title: "Último paso", body: "Perderás tu precio especial.", primary: "Volver a mi plan", exit: "confirmar cancelación" },
];

export const cancelFair = {
  title: "Cancelar tu plan",
  body: "Termina el 30 de noviembre. No habrá más cobros.",
  cancel: "Cancelar suscripción",
  keep: "Mantener mi plan",
};

export const cancelBot = {
  waiting: "Procesando tu solicitud…",
  error: "Error técnico. Intenta más tarde.",
  retry: "Reintentar",
};

/* ---------- Regla 02 · La vergüenza de confirmación (verguenza) ---------- */

export const shameParts = [
  { n: 1, trick: "Miedo", why: "Asusta en vez de informar." },
  { n: 2, trick: "Precio escondido", why: "El precio real va en un asterisco." },
  { n: 3, trick: "Rechazo con culpa", why: "Para decir que no, te llamas irresponsable." },
] as const;

export const shameOriginal = {
  title: "¡ESPERA! Tu salud está en riesgo",
  price: "Solo $199 al mes*",
  fine: "*Primer mes. Después, $349 al mes.",
  accept: "¡Sí, quiero cuidar mi salud!",
  reject: "No, prefiero arriesgar mi salud, pagar más caro y ser irresponsable",
};

export const shameRedesign = {
  title: "Recibe tu tratamiento cada mes",
  facts: ["$249 al mes, cobro el día 5.", "Ahorras $60 al mes.", "Cancelas en un clic."],
  accept: "Suscribirme",
  reject: "No, gracias",
};

/* ---------- Regla 03 · EvoPhone (evophone) ---------- */

export const evoToggles = [
  { id: "ralentizar", weight: 40, label: "La actualización vuelve lentos los modelos viejos" },
  { id: "bateria", weight: 35, label: "Batería sellada y sin refacciones" },
  { id: "pesado", weight: 25, label: "Autoplay e imágenes sin optimizar" },
] as const;

export const evoFacts = {
  manufacturing: "Cerca de 80% de las emisiones de un teléfono ocurren al fabricarlo.",
  note: "Índice ilustrativo, no una medición de emisiones.",
};

export const gateSteps = [
  { label: "Commit" },
  { label: "Build" },
  { label: "Teléfonos de hasta 7 años" },
  { label: "¿Empeora más de 5%?", question: true },
] as const;
