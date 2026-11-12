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
  intro:
    "Antes del incidente la prioridad es entregar. Durante el incidente es proteger a las personas afectadas, aunque eso nos cueste el contrato. Este es el árbol completo y, encima, un recorrido para probarlo.",
  closing: "La responsabilidad es nuestra.",
  counter: [
    { value: 2.1, unit: "millones", label: "de cuentas publicadas", fmt: "decimal" },
    { value: 1, unit: "millón de dólares", label: "exigido por el atacante", prefix: "US$", fmt: "int" },
    { value: 0, unit: "dólares", label: "pagados por nosotros", prefix: "US$", fmt: "int" },
  ],
  counterNote:
    "Cifras del Caso E (Crisis Room) que respondimos en clase: una plataforma que prometía discreción absoluta perdió los datos de 4.2 millones de cuentas y el atacante publicó la mitad.",
};

const A = 124, B = 400, C = 676, D = 912, M = 1032, E = 1152;

export const nodes: readonly CrisisNode[] = [
  {
    id: "start", route: "inicio", x: C, row: 0,
    title: "Alerta recibida", time: "0–15 min",
    body: "Alguien del equipo, un usuario o una auditoría reporta un problema grave en producción. Quien lo recibe avisa a todo el equipo en menos de 15 minutos. Nadie se queda con el problema para sí.",
    q: "¿Qué detectamos?", qShort: "¿Qué detectamos?",
    choices: [
      { label: "Una vulnerabilidad en nuestro código", to: "v_contener", edge: "Vulnerabilidad" },
      { label: "Un daño ambiental medible", to: "e_medir", edge: "Daño ambiental" },
    ],
  },
  {
    id: "v_contener", route: "vulnerabilidad", x: B, row: 1, caseIds: ["filtracion"],
    title: "Contener", time: "0–1 h",
    body: "Sacamos de internet el servidor afectado, rotamos llaves y contraseñas y cerramos todas las sesiones. Dejamos de almacenar lo que no debíamos guardar: los datos bancarios pasan al procesador de pagos. Una persona coordina y nadie improvisa por su cuenta.",
    q: "¿Hay datos de usuarios expuestos?", qShort: "¿Hay datos expuestos?",
    choices: [
      { label: "Sí", to: "v_avisar", edge: "Sí" },
      { label: "Aún no lo sabemos", to: "v_suponer", edge: "No sabemos" },
    ],
  },
  {
    id: "v_suponer", route: "vulnerabilidad", x: A, row: 2,
    title: "Suponer lo peor", time: "hasta 24 h",
    body: "Mientras no se demuestre lo contrario, tratamos el incidente como si hubiera exposición. Revisamos los registros en máximo 24 horas.",
    q: "¿Qué muestran los registros?", qShort: "¿Qué dicen los registros?",
    choices: [
      { label: "Hubo exposición", to: "v_avisar", edge: "Hubo" },
      { label: "No hubo exposición", to: "v_raiz", edge: "No hubo" },
    ],
  },
  {
    id: "v_avisar", route: "vulnerabilidad", x: B, row: 3, caseIds: ["filtracion"],
    title: "Avisar a las personas", time: "hasta 72 h",
    body: "Avisamos a la autoridad de protección de datos y a cada persona afectada, sin eufemismos: qué datos se expusieron, desde cuándo y qué hacer ahora. Pedimos la baja de lo que se publicó.",
    q: "¿El cliente pide retrasar o suavizar el aviso?", qShort: "¿Piden retrasar el aviso?",
    choices: [
      { label: "Sí, quiere esperar al lanzamiento", to: "v_ocultar", edge: "Sí" },
      { label: "No", to: "v_extorsion", edge: "No" },
    ],
  },
  {
    id: "v_ocultar", route: "vulnerabilidad", x: C, row: 4, redline: true,
    title: "Línea roja: no se oculta", time: "decisión del equipo",
    body: "Le explicamos al cliente el riesgo legal y de confianza de callarlo y le ofrecemos redactar el aviso juntos. Si insiste en esconderlo, terminamos el contrato y lo dejamos por escrito. Callar por no hacer olas también es una decisión.",
    next: "v_extorsion",
  },
  {
    id: "v_extorsion", route: "vulnerabilidad", x: B, row: 5, caseIds: ["filtracion"],
    title: "¿Nos extorsionan?", time: "en cualquier momento",
    body: "El atacante publica una parte y exige dinero para no publicar el resto. En el caso que trabajamos: 2.1 de 4.2 millones de cuentas y US$1 millón.",
    q: "¿Hay una exigencia de rescate?", qShort: "¿Hay rescate?",
    choices: [
      { label: "Sí, piden dinero", to: "v_nopagamos", edge: "Sí" },
      { label: "No", to: "v_raiz", edge: "No" },
    ],
  },
  {
    id: "v_nopagamos", route: "vulnerabilidad", x: C, row: 6, redline: true, caseIds: ["filtracion"],
    title: "Línea roja: no pagamos", time: "decisión del equipo",
    body: "Pagar no revierte nada: los datos ya se copiaron y el dinero financia el siguiente ataque. Ese recurso va a un fondo para las personas afectadas: monitoreo de identidad, asesoría legal y apoyo psicológico. Preparamos a cada usuario asumiendo que el resto puede publicarse.",
    next: "v_raiz",
  },
  {
    id: "v_raiz", route: "vulnerabilidad", x: B, row: 7, caseIds: ["filtracion"],
    title: "Investigación raíz", time: "hasta 7 días",
    body: "Buscamos qué falló de verdad, no a quién culpar. En el caso: un servidor interno expuesto con contraseña reutilizada y sin segundo factor, datos de más guardados sin cifrar, un borrado de cuenta que se cobraba y no borraba todo, y nada de monitoreo: el acceso duró semanas sin que nadie lo viera.",
    next: "v_reparar",
  },
  {
    id: "v_reparar", route: "vulnerabilidad", x: B, row: 8,
    title: "Reparar y corregir", time: "hasta 30 días",
    body: "Parche con prueba independiente de que cierra el hueco. Reembolso automático de lo que se cobró y no se cumplió. Línea de atención 24 h atendida por personas. Datos mínimos y cifrados, borrado verificable en máximo 30 días con constancia y auditoría externa anual publicada completa.",
    next: "v_resp",
  },
  {
    id: "v_resp", route: "vulnerabilidad", x: B, row: 9,
    title: "Asumir en público", time: "con el reporte",
    body: "Lo decimos sin rodeos: las fallas fueron decisiones nuestras. “La responsabilidad de este incidente es nuestra.”",
    next: "end",
  },
  {
    id: "e_medir", route: "ambiental", x: M, row: 1, caseIds: ["evophone", "prompt-ia"],
    title: "Medir y confirmar", time: "hasta 48 h",
    body: "Reunimos datos propios: energía y cómputo por función, almacenamiento, peso de la app y dispositivos que dejamos sin soporte. Si algo no se puede medir, lo decimos así.",
    q: "¿El daño viene de una decisión que podemos revertir?", qShort: "¿Se puede revertir?",
    choices: [
      { label: "Sí, es una decisión de diseño", to: "e_revertir", edge: "Sí" },
      { label: "No, es estructural", to: "e_redisenar", edge: "No" },
    ],
  },
  {
    id: "e_revertir", route: "ambiental", x: D, row: 2, caseIds: ["prompt-ia"],
    title: "Revertir y reducir", time: "hasta 7 días",
    body: "Quitamos la causa: autoplay, sondeos constantes, retención infinita. En IA bajamos el n por defecto a 1, cambiamos al modelo más pequeño que resuelve la tarea y cacheamos lo que se repite. Volvemos a medir para confirmar.",
    next: "e_compuerta",
  },
  {
    id: "e_redisenar", route: "ambiental", x: E, row: 2, caseIds: ["evophone"],
    title: "Rediseñar y compensar", time: "plan en 14 días",
    body: "Reporte público del daño y plan con fechas: perfiles por hardware para que un modelo viejo reciba un sistema ligero, nunca uno lento, y si se limita el rendimiento por batería, se avisa y el usuario decide. Mientras tanto, un límite de uso del servicio afectado.",
    next: "e_compuerta",
  },
  {
    id: "e_compuerta", route: "ambiental", x: M, row: 3, caseIds: ["evophone"],
    title: "Compuerta de rendimiento", time: "desde ese día",
    body: "El caso se vuelve una prueba automática: la granja de dispositivos corre cada versión en teléfonos de hasta 7 años y, si un modelo viejo empeora más de 5%, el release no sale.",
    next: "end",
  },
  {
    id: "end", route: "cierre", x: C, row: 9, final: true,
    title: "Postmortem público", time: "hasta 30 días",
    body: "Documento sin buscar culpables: qué pasó, qué tardamos en ver y qué cambia en el proceso. Se publica y, si hace falta, se agrega una regla al Código.",
  },
];

export const nodeById = (id: NodeId) => nodes.find((n) => n.id === id)!;

export const routes = [
  { id: "vulnerabilidad", title: "Ruta de vulnerabilidad", from: "Caso E · La filtración de infieles", caseId: "filtracion" as CaseId },
  { id: "ambiental", title: "Ruta ambiental", from: "P5 · EvoPhone y A8 · el gato astronauta", caseId: "evophone" as CaseId },
] as const;
