export const site = {
  name: "Línea Roja Software",
  title: "Línea Roja Software · Manifiesto de Identidad Profesional",
  description:
    "Línea Roja Software, agencia de software de Mexicali: qué defendemos, qué no haremos y cómo respondemos cuando el problema es nuestro. LSC · FIM-UABC · 2026.",
  // PENDIENTE (equipo): confirmar el nombre exacto de la materia antes de entregar.
  course: "Ética y Desarrollo Profesional",
  school: "Facultad de Ingeniería Mexicali · UABC",
  schoolShort: "FIM-UABC",
  career: "Licenciatura en Sistemas Computacionales",
  place: "Mexicali, B.C.",
  year: 2026,
};

/**
 * Secciones. `label` es el nombre completo (h2, índice, footer); `short` es el del header.
 * Las cuatro obligatorias usan el nombre exacto de la actividad.
 */
export const sections = [
  { id: "nosotros", label: "Quiénes somos", short: "Nosotros", header: true },
  { id: "filosofia", label: "Nuestra Filosofía", short: "Filosofía", header: true, required: true, num: "01", blurb: "Cómo separamos hacer dinero de hacer buen software." },
  { id: "codigo", label: "El Código LSC Moderno", short: "Código", header: true, required: true, num: "02", blurb: "Tres reglas sobre IA, patrones oscuros y medio ambiente." },
  { id: "promesa", label: "La Promesa al Usuario", short: "Promesa", header: true, required: true, num: "03", blurb: "Lo que puedes exigirnos sobre tu autonomía, tu dinero y tu salud mental." },
  { id: "crisis", label: "Plan de Acción de Crisis", short: "Crisis", header: true, required: true, num: "04", blurb: "Qué hacemos cuando el problema es nuestro." },
  { id: "casos", label: "Casos", short: "Casos", header: true },
  { id: "inversores", label: "Inversores", short: "Inversores", header: true },
  { id: "semestre", label: "De dónde sale esto", short: "Semestre", header: false },
  { id: "fuentes", label: "Fuentes", short: "Fuentes", header: false },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const headerNav = sections.filter((s) => s.header);

export function sectionName(id: SectionId): string {
  return sections.find((s) => s.id === id)!.label;
}
