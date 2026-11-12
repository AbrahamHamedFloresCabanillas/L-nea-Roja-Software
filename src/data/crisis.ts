/**
 * Protocolo de crisis. Nodos del sitio original reforzados con nuestra respuesta al Caso E (Crisis Room · filtracion)
 * y con la compuerta de rendimiento de EvoPhone (P5) y las prácticas de A8 para la ruta ambiental.
 */
import type { CaseId } from "./cases";

export type NodeId =
  | "start" | "v_contener" | "v_suponer" | "v_avisar" | "v_ocultar" | "v_extorsion" | "v_nopagamos"
  | "v_raiz" | "v_reparar" | "v_resp" | "e_medir" | "e_revertir" | "e_redisenar" | "e_compuerta" | "end";

export interface CrisisNode {
  id: NodeId;
  title: string;
  time: string;
  body: string;
  /** Pregunta completa para el recorrido. */
  q?: string;
  /** Versión corta que cabe en el diagrama. */
  qShort?: string;
  choices?: { label: string; to: NodeId; edge: string }[];
  next?: NodeId;
  redline?: boolean;
  final?: boolean;
  route: "inicio" | "vulnerabilidad" | "ambiental" | "cierre";
  /** Posición en el diagrama: columna (centro x) y fila. */
  x: number;
  row: number;
  caseIds?: CaseId[];
}

export const crisisIntro = {
  title: "Cuando el problema es nuestro, la prioridad cambia.",
  intro: "Durante un incidente, primero van las personas afectadas, aunque cueste el contrato.",
  closing: "La responsabilidad es nuestra.",
  counter: [
    { value: 2.1, unit: "millones", label: "de cuentas publicadas", fmt: "decimal" },
    { value: 1, unit: "millón de dólares", label: "exigido por el atacante", prefix: "US$", fmt: "int" },
    { value: 0, unit: "dólares", label: "pagados por nosotros", prefix: "US$", fmt: "int" },
  ],
  counterNote: "Del caso que respondimos en clase: 4.2 millones de cuentas robadas.",
};

const A = 124, B = 400, C = 676, D = 912, M = 1032, E = 1152;

export const nodes: readonly CrisisNode[] = [
  {
    id: "start", route: "inicio", x: C, row: 0,
    title: "Alerta recibida", time: "0–15 min",
    body: "Alguien reporta un problema grave. Todo el equipo lo sabe en menos de 15 minutos.",
    q: "¿Qué detectamos?", qShort: "¿Qué detectamos?",
    choices: [
      { label: "Una vulnerabilidad en nuestro código", to: "v_contener", edge: "Vulnerabilidad" },
      { label: "Un daño ambiental medible", to: "e_medir", edge: "Daño ambiental" },
    ],
  },
  {
    id: "v_contener", route: "vulnerabilidad", x: B, row: 1, caseIds: ["filtracion"],
    title: "Contener", time: "0–1 h",
    body: "Sacamos el servidor de internet, rotamos llaves y cerramos sesiones. Dejamos de guardar lo que sobra.",
    q: "¿Hay datos de usuarios expuestos?", qShort: "¿Hay datos expuestos?",
    choices: [
      { label: "Sí", to: "v_avisar", edge: "Sí" },
      { label: "Aún no lo sabemos", to: "v_suponer", edge: "No sabemos" },
    ],
  },
  {
    id: "v_suponer", route: "vulnerabilidad", x: A, row: 2,
    title: "Suponer lo peor", time: "hasta 24 h",
    body: "Lo tratamos como si hubiera exposición hasta probar lo contrario.",
    q: "¿Qué muestran los registros?", qShort: "¿Qué dicen los registros?",
    choices: [
      { label: "Hubo exposición", to: "v_avisar", edge: "Hubo" },
      { label: "No hubo exposición", to: "v_raiz", edge: "No hubo" },
    ],
  },
  {
    id: "v_avisar", route: "vulnerabilidad", x: B, row: 3, caseIds: ["filtracion"],
    title: "Avisar a las personas", time: "hasta 72 h",
    body: "Avisamos a la autoridad y a cada persona afectada, sin eufemismos.",
    q: "¿El cliente pide retrasar o suavizar el aviso?", qShort: "¿Piden retrasar el aviso?",
    choices: [
      { label: "Sí, quiere esperar al lanzamiento", to: "v_ocultar", edge: "Sí" },
      { label: "No", to: "v_extorsion", edge: "No" },
    ],
  },
  {
    id: "v_ocultar", route: "vulnerabilidad", x: C, row: 4, redline: true,
    title: "Línea roja: no se oculta", time: "decisión del equipo",
    body: "Si el cliente insiste en esconderlo, terminamos el contrato por escrito.",
    next: "v_extorsion",
  },
  {
    id: "v_extorsion", route: "vulnerabilidad", x: B, row: 5, caseIds: ["filtracion"],
    title: "¿Nos extorsionan?", time: "en cualquier momento",
    body: "El atacante publica una parte y pide dinero por el resto.",
    q: "¿Hay una exigencia de rescate?", qShort: "¿Hay rescate?",
    choices: [
      { label: "Sí, piden dinero", to: "v_nopagamos", edge: "Sí" },
      { label: "No", to: "v_raiz", edge: "No" },
    ],
  },
  {
    id: "v_nopagamos", route: "vulnerabilidad", x: C, row: 6, redline: true, caseIds: ["filtracion"],
    title: "Línea roja: no pagamos", time: "decisión del equipo",
    body: "Pagar no borra la copia y financia el siguiente ataque. Ese dinero va a las personas afectadas.",
    next: "v_raiz",
  },
  {
    id: "v_raiz", route: "vulnerabilidad", x: B, row: 7, caseIds: ["filtracion"],
    title: "Investigación raíz", time: "hasta 7 días",
    body: "Buscamos qué falló de verdad: contraseña reutilizada, sin segundo factor, datos de más, sin monitoreo.",
    next: "v_reparar",
  },
  {
    id: "v_reparar", route: "vulnerabilidad", x: B, row: 8,
    title: "Reparar y corregir", time: "hasta 30 días",
    body: "Parche verificado, reembolso automático y una línea de atención con personas.",
    next: "v_resp",
  },
  {
    id: "v_resp", route: "vulnerabilidad", x: B, row: 9,
    title: "Asumir en público", time: "con el reporte",
    body: "Lo decimos en público: las fallas fueron decisiones nuestras.",
    next: "end",
  },
  {
    id: "e_medir", route: "ambiental", x: M, row: 1, caseIds: ["evophone", "prompt-ia"],
    title: "Medir y confirmar", time: "hasta 48 h",
    body: "Medimos energía, cómputo y equipos que dejamos sin soporte.",
    q: "¿El daño viene de una decisión que podemos revertir?", qShort: "¿Se puede revertir?",
    choices: [
      { label: "Sí, es una decisión de diseño", to: "e_revertir", edge: "Sí" },
      { label: "No, es estructural", to: "e_redisenar", edge: "No" },
    ],
  },
  {
    id: "e_revertir", route: "ambiental", x: D, row: 2, caseIds: ["prompt-ia"],
    title: "Revertir y reducir", time: "hasta 7 días",
    body: "Quitamos la causa: autoplay, n=4 por defecto, modelos más grandes de lo necesario.",
    next: "e_compuerta",
  },
  {
    id: "e_redisenar", route: "ambiental", x: E, row: 2, caseIds: ["evophone"],
    title: "Rediseñar y compensar", time: "plan en 14 días",
    body: "Perfiles ligeros para modelos viejos y un plan público con fechas.",
    next: "e_compuerta",
  },
  {
    id: "e_compuerta", route: "ambiental", x: M, row: 3, caseIds: ["evophone"],
    title: "Compuerta de rendimiento", time: "desde ese día",
    body: "Si un modelo viejo empeora más de 5%, el release no sale.",
    next: "end",
  },
  {
    id: "end", route: "cierre", x: C, row: 9, final: true,
    title: "Postmortem público", time: "hasta 30 días",
    body: "Qué pasó, qué tardamos en ver y qué cambia. Se publica.",
  },
];

export const nodeById = (id: NodeId) => nodes.find((n) => n.id === id)!;

export const routes = [
  { id: "vulnerabilidad", title: "Ruta de vulnerabilidad", caseId: "filtracion" as CaseId },
  { id: "ambiental", title: "Ruta ambiental", caseId: "evophone" as CaseId },
] as const;
