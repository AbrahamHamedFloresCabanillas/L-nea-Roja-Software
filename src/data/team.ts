import type { SectionId } from "./site";

/**
 * Equipo. Fijo en el código: no se edita desde el sitio ni se guarda en el navegador.
 * `owns` dice de qué secciones responde cada quien (lo usa el índice); `respondsFor` son los enlaces visibles.
 */
export interface Member {
  name: string;
  short: string;
  role: string;
  does: string;
  respondsFor: { label: string; href: string }[];
  owns: SectionId[];
}

export const team: readonly Member[] = [
  {
    name: "Abraham Hamed Flores Cabanillas", short: "Abraham Flores",
    role: "Director de Ingeniería",
    does: "Define la arquitectura, revisa cada entrega antes de que llegue al cliente y puede detener cualquier despliegue.",
    respondsFor: [{ label: "Nuestra Filosofía", href: "#filosofia" }, { label: "Casos", href: "#casos" }],
    owns: ["filosofia", "casos"],
  },
  {
    name: "Iván Alexandro López León", short: "Iván López",
    role: "Ingeniero de IA y Datos",
    does: "Integra los modelos de IA, revisa lo que generan y decide qué datos se guardan y por cuánto tiempo.",
    respondsFor: [{ label: "Regla 01", href: "#regla-ia" }],
    owns: ["codigo"],
  },
  {
    name: "Alexandro Fregoso Castro", short: "Alexandro Fregoso",
    role: "Diseñador de Producto (UX/UI)",
    does: "Diseña pantallas y flujos. Si una interfaz confunde o presiona al usuario, no sale de su mesa.",
    respondsFor: [{ label: "Regla 02", href: "#regla-patrones" }],
    owns: ["codigo"],
  },
  {
    name: "Luis Fernando Cedillo Camacho", short: "Luis Cedillo",
    role: "Ingeniero de Calidad y Rendimiento",
    does: "Prueba cada versión en equipos reales, incluidos los viejos, y mide cuánto consume antes de publicarla.",
    respondsFor: [{ label: "Regla 03", href: "#regla-ambiental" }],
    owns: ["codigo"],
  },
  {
    name: "Brayan Noé León Frausto", short: "Brayan León",
    role: "Ingeniero de Seguridad e Infraestructura",
    does: "Administra servidores, accesos y credenciales, y coordina la respuesta cuando hay un incidente.",
    respondsFor: [{ label: "Plan de Acción de Crisis", href: "#crisis" }],
    owns: ["crisis"],
  },
  {
    name: "Ramón Fernando Echavarría Contreras", short: "Ramón Echavarría",
    role: "Ética y Relación con Clientes",
    does: "Negocia con el cliente qué se construye y qué no, y lleva el registro de cada línea roja que defendimos.",
    respondsFor: [{ label: "La Promesa al Usuario", href: "#promesa" }, { label: "Inversores", href: "#inversores" }],
    owns: ["promesa", "inversores"],
  },
];

/** Quién responde por una sección, en texto corto ("Iván López, Alexandro Fregoso y Luis Cedillo"). */
export function ownersOf(id: SectionId): string | null {
  const names = team.filter((m) => m.owns.includes(id)).map((m) => m.short);
  if (!names.length) return null;
  return names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} y ${names[names.length - 1]}`;
}

/** Cómo trabajamos: los tres compromisos internos (antes en Filosofía). */
export const howWeWork = [
  { title: "No hay rockstars.", body: "Todo PR lleva revisión de otra persona y todo módulo, documentación." },
  { title: "La conducta se nombra por sus efectos.", body: "Hablamos con datos. Corregimos en privado y reconocemos en público." },
  { title: "Cualquiera puede detener una tarea.", body: "Si alguien cree que algo daña al usuario, se para y se revisa." },
];

export const aboutText =
  "Línea Roja Software es un equipo de seis ingenieros de la FIM-UABC. Hacemos sitios, apps y sistemas a la medida. Antes de cotizar, el cliente lee lo que no vamos a hacer. Si no está de acuerdo, no trabajamos juntos.";
