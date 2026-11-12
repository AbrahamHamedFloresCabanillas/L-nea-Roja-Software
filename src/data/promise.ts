import type { CaseId } from "./cases";

export const promiseIntro = {
  title: "Esto es lo que puedes exigirnos.",
  intro:
    "Tres cláusulas escritas para quien usa nuestros productos, no para un abogado. Cada una dice cómo comprobar que la cumplimos y qué decisiones concretas de producto la sostienen.",
  documentTitle: "Contrato de uso responsable",
};

export interface Clause {
  id: string;
  num: string;
  name: string;
  promise: string;
  check: string;
  product: string[];
  caseIds: CaseId[];
}

export const clauses: readonly Clause[] = [
  {
    id: "clausula-autonomia",
    num: "Cláusula 1",
    name: "Tu autonomía",
    promise:
      "Tú decides. Cada permiso se pide cuando hace falta, se explica en una línea y se retira en los mismos pasos en que se dio. Nadie te vigila ni usa tu voz o tu cara sin que lo sepas.",
    check: "En Ajustes ves todo lo que aceptaste y desde cuándo, y lo puedes retirar ahí mismo.",
    product: [
      "Cámara, micrófono y ubicación se piden en el momento de usarlos, nunca al abrir la app.",
      "Ningún sistema de monitoreo laboral sin aviso visible y consentimiento. Medimos equipos, no personas.",
      "Tu voz o tu rostro solo se usan con tu consentimiento. Si lo retiras, se borran.",
    ],
    caseIds: ["bossware", "deepfakes"],
  },
  {
    id: "clausula-dinero",
    num: "Cláusula 2",
    name: "Tu dinero",
    promise:
      "Cobramos lo que dijimos. Sin cargos escondidos ni renovaciones sorpresa. Avisamos antes de cada cobro recurrente y cancelar cuesta lo mismo que contratar.",
    check: "Recibes un aviso antes de cada renovación y tienes un historial de cobros que puedes descargar.",
    product: [
      "Cancelar toma los mismos pasos que contratar, con botones del mismo tamaño.",
      "El precio final aparece antes de pagar, con impuestos y comisión de la tienda explicados.",
      "Si hay un precio más barato fuera de la tienda y la ley permite decirlo, lo decimos.",
    ],
    caseIds: ["cancelacion", "tienda-apps"],
  },
  {
    id: "clausula-salud",
    num: "Cláusula 3",
    name: "Tu salud mental",
    promise:
      "No fabricamos hábitos compulsivos ni vendemos con miedo. Sin scroll infinito por defecto, sin rachas que castigan y sin notificaciones que no pediste.",
    check: "Las notificaciones empiezan apagadas y puedes ver y limitar tu tiempo de uso.",
    product: [
      "Notificaciones apagadas por defecto: tú eliges cuáles activar.",
      "Sin rachas que castigan. Si un día no entras, no pierdes nada.",
      "Límite de tiempo visible y descanso nocturno activado para menores.",
      "Rechazar una oferta siempre dice “No, gracias”.",
    ],
    caseIds: ["verguenza"],
  },
];

export const breach =
  "Si no lo cumplimos: te devolvemos lo cobrado desde el incumplimiento, lo decimos públicamente y lo corregimos en un plazo que publicamos.";
