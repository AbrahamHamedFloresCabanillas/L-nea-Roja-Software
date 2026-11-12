export const site = {
  name: "Línea Roja Software",
  title: "Línea Roja Software · Manifiesto de Identidad Profesional",
  description:
    "Manifiesto de identidad profesional y ética de Línea Roja Software: qué defendemos, qué no haremos y cómo respondemos cuando el problema es nuestro. LSC · FIM-UABC · 2026.",
  // PENDIENTE (equipo): confirmar el nombre exacto de la materia antes de entregar.
  course: "Ética y Desarrollo Profesional",
  school: "Facultad de Ingeniería Mexicali · UABC",
  schoolShort: "FIM-UABC",
  career: "Licenciatura en Sistemas Computacionales",
  place: "Mexicali, B.C.",
  year: 2026,
};

/** Navegación principal. Las cuatro secciones obligatorias usan el nombre exacto de la actividad. */
export const nav = [
  { id: "filosofia", num: "01", label: "Nuestra Filosofía", required: true },
  { id: "codigo", num: "02", label: "El Código LSC Moderno", required: true },
  { id: "promesa", num: "03", label: "La Promesa al Usuario", required: true },
  { id: "casos", num: "04", label: "Casos", required: false },
  { id: "crisis", num: "05", label: "Plan de Acción de Crisis", required: true },
  { id: "inversores", num: "06", label: "Inversores", required: false },
  { id: "semestre", num: "07", label: "De dónde sale esto", required: false },
] as const;

export type SectionId = (typeof nav)[number]["id"];

export function sectionName(id: SectionId): string {
  return nav.find((n) => n.id === id)!.label;
}
