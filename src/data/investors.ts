import type { CaseId } from "./cases";

/** Respuesta ≤ 40 palabras: postura en negritas + una o dos frases. */
export interface QA {
  id: string;
  q: string;
  stance: string;
  argument: string;
  caseId: CaseId;
  sources?: string[];
}

export const investorsIntro = {
  title: "Las preguntas que nos harán.",
};

export const investors: readonly QA[] = [
  {
    id: "q-competidor", caseId: "cancelacion", sources: ["ftc-amazon"],
    q: "Su competencia cobra 40% menos. ¿Por qué contratarlos?",
    stance: "Porque ese ahorro es un riesgo aplazado.",
    argument: "Una multa o una demanda cuestan más que la diferencia: a Amazon su flujo de cancelación le costó US$2,500 millones.",
  },
  {
    id: "q-sin-cliente", caseId: "bossware",
    q: "Este mes no tienen otro cliente. ¿De verdad van a rechazar el contrato?",
    stance: "Sí, si el contrato es espiar o engañar a alguien.",
    argument: "Un mes sin cliente se recupera; la fama de haber construido bossware, no. Antes proponemos la versión que sí hacemos.",
  },
  {
    id: "q-ia-sitio", caseId: "prompt-ia",
    q: "¿Ustedes usaron IA para hacer este sitio?",
    stance: "Sí, y lo decimos aquí mismo.",
    argument: "La usamos para programar y redactar borradores. Cada texto y cada cifra los revisamos y los defendemos nosotros.",
  },
  {
    id: "q-retener", caseId: "cancelacion",
    q: "Si cancelar es tan fácil, ¿cómo retienen usuarios?",
    stance: "Con un producto en el que valga la pena quedarse.",
    argument: "La fricción solo aplaza la baja y la vuelve enojo. Preguntamos por qué se va la gente y arreglamos eso.",
  },
  {
    id: "q-rescate", caseId: "filtracion",
    q: "Pagar el rescate sale más barato que la demanda. ¿Por qué no pagan?",
    stance: "Porque pagar no compra nada.",
    argument: "Los datos ya se copiaron y el pago financia el siguiente ataque. Ese dinero va a las personas afectadas.",
  },
  {
    id: "q-30", caseId: "tienda-apps", sources: ["epic", "dma"],
    q: "Todas las apps cobran el 30%. ¿Por qué no esconder el pago externo?",
    stance: "Porque “todos lo hacen” no lo vuelve correcto.",
    argument: "Mostramos el precio real donde la ley lo permite. En 2025 Apple perdió en EE. UU. y la UE por bloquear esos enlaces.",
  },
  {
    id: "q-vender-menos", caseId: "evophone",
    q: "Si los teléfonos duran más, vamos a vender menos.",
    stance: "Menos unidades, más ingreso por teléfono.",
    argument: "Refacciones, baterías y servicios para toda la base instalada. Quien no se siente engañado vuelve a comprar.",
  },
  {
    id: "q-ia-revision", caseId: "prompt-ia",
    q: "¿Quién paga el tiempo de revisar lo que genera la IA?",
    stance: "Va en la cotización, igual que las pruebas.",
    argument: "Revisar es lo que nos hace responsables del resultado. Usar modelos más pequeños compensa parte del costo.",
  },
];
