import type { CaseId } from "./cases";

export type Verdict = "cruza" | "no-alcanza" | "nuestra";

/** Situación ≤ 40 palabras · opciones ≤ 12 · decisión ≤ 50. */
export interface DecisionCase {
  id: string;
  caseId: CaseId;
  title: string;
  situation: string;
  options: { key: "A" | "B" | "C"; text: string; verdict: Verdict; why?: string }[];
  decision: string;
  sources?: string[];
}

export const verdictLabel: Record<Verdict, string> = {
  cruza: "Cruza la línea",
  "no-alcanza": "No alcanza",
  nuestra: "Nuestra decisión",
};

export const decisionCases: readonly DecisionCase[] = [
  {
    id: "caso-bossware",
    caseId: "bossware",
    title: "El Bossware",
    situation: "Una empresa pide instalar en secreto un programa que fotografía a sus empleados cada 5 minutos y registra sus pestañas.",
    options: [
      { key: "A", text: "Lo instalamos: las computadoras son de la empresa.", verdict: "cruza", why: "Vigilar en secreto a quien no puede negarse viola su autonomía." },
      { key: "B", text: "Lo instalamos con un aviso en letra chica.", verdict: "no-alcanza", why: "Un aviso que nadie lee no es consentimiento." },
      { key: "C", text: "Medimos resultados por equipo, con aviso y consentimiento.", verdict: "nuestra" },
    ],
    decision: "Medimos equipos, no personas. La LFT limita las cámaras y la ley de datos de 2025 exige consentimiento. H&M pagó €35.3 millones por perfilar empleados.",
    sources: ["lft", "lfpdppp", "hm"],
  },
  {
    id: "caso-tienda-apps",
    caseId: "tienda-apps",
    title: "El impuesto de la tienda de apps",
    situation: "La tienda cobra 30% y prohíbe enlaces a pagos externos. El cliente quiere ir más lejos y esconder que en su web el mismo plan cuesta menos.",
    options: [
      { key: "A", text: "Escondemos el precio externo y subimos el de la app.", verdict: "cruza", why: "El usuario paga 30% más sin saber que tenía otra opción." },
      { key: "B", text: "Ponemos el enlace aunque nos bajen la app.", verdict: "no-alcanza", why: "Romper el contrato a escondidas deja al usuario sin app." },
      { key: "C", text: "Mostramos el precio real donde la ley lo permite.", verdict: "nuestra" },
    ],
    decision: "Cumplimos el contrato sin engañar al usuario. En 2025 Apple fue declarada en desacato en EE. UU. y multada con €500 millones en la UE.",
    sources: ["epic", "dma"],
  },
  {
    id: "caso-buscador",
    caseId: "buscador",
    title: "La degradación del buscador",
    situation: "Los clics en anuncios bajaron. El cliente pide que los anuncios se vean igual que los resultados normales y llenar la primera página con artículos generados por IA.",
    options: [
      { key: "A", text: "Lo hacemos: los clics suben.", verdict: "cruza", why: "Un anuncio disfrazado de respuesta confunde al usuario." },
      { key: "B", text: "Ponemos “Patrocinado” en gris claro y tamaño 9.", verdict: "no-alcanza", why: "Una etiqueta hecha para no verse es el mismo truco." },
      { key: "C", text: "El anuncio se ve como anuncio y no publicamos relleno.", verdict: "nuestra" },
    ],
    decision: "Si los clics suben porque el usuario se equivoca, el producto empeora. En 2024 un juez declaró a Google monopolio ilegal en búsqueda.",
    sources: ["google-doj"],
  },
  {
    id: "caso-rockstar",
    caseId: "rockstar",
    title: "El Rockstar arrogante",
    situation: "El mejor programador se aprueba sus propios PRs, no documenta, maltrata a los juniors y dice que la accesibilidad es “para diseñadores débiles”.",
    options: [
      { key: "A", text: "Lo dejamos: entrega rápido.", verdict: "cruza", why: "Así se normaliza que el talento compra impunidad." },
      { key: "B", text: "Lo exhibimos en la junta semanal.", verdict: "no-alcanza", why: "Corregir en público lastima y pone a la persona a la defensiva." },
      { key: "C", text: "Junta privada con datos y un acuerdo medible.", verdict: "nuestra" },
    ],
    decision: "Llegamos con hechos: once semanas sin aprobar un PR ajeno. “No te pido que estés de acuerdo; te pido que el estándar se cumpla.”",
  },
];
