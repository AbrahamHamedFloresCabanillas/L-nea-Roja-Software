import type { CaseId } from "./cases";

export const promiseIntro = {
  title: "Esto es lo que puedes exigirnos.",
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
    id: "clausula-autonomia", num: "Cláusula 1", name: "Tu autonomía",
    promise: "Tú decides: cada permiso se explica en una línea y se retira igual de fácil.",
    check: "En Ajustes ves todo lo que aceptaste y desde cuándo.",
    product: ["Cámara y ubicación se piden solo al usarlas.", "Tu voz o tu rostro, solo con tu permiso."],
    caseIds: ["bossware", "deepfakes"],
  },
  {
    id: "clausula-dinero", num: "Cláusula 2", name: "Tu dinero",
    promise: "Cobramos lo que dijimos, sin cargos escondidos ni renovaciones sorpresa.",
    check: "Te avisamos antes de cada cobro y guardas tu historial.",
    product: ["Cancelar toma los mismos pasos que contratar.", "El precio final aparece antes de pagar."],
    caseIds: ["cancelacion", "tienda-apps"],
  },
  {
    id: "clausula-salud", num: "Cláusula 3", name: "Tu salud mental",
    promise: "No fabricamos hábitos compulsivos ni vendemos con miedo.",
    check: "Las notificaciones empiezan apagadas.",
    product: ["Sin rachas que castigan.", "Rechazar una oferta siempre dice “No, gracias”."],
    caseIds: ["verguenza"],
  },
];

export const breach = "Si no lo cumplimos, te devolvemos lo cobrado y lo corregimos en público.";
