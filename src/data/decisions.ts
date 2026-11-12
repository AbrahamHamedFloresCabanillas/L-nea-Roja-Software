import type { CaseId } from "./cases";

export type Verdict = "cruza" | "no-alcanza" | "nuestra";

export interface DecisionCase {
  id: string;
  caseId: CaseId;
  title: string;
  situation: string;
  options: { key: "A" | "B" | "C"; text: string; verdict: Verdict; why: string }[];
  decision: string;
  reasoning: string[];
  sources?: string[];
}

export const verdictLabel: Record<Verdict, string> = {
  cruza: "Cruza la línea",
  "no-alcanza": "No alcanza",
  nuestra: "Nuestra decisión",
};

/** Pilar 01 · caso para decidir. */
export const deepfakeCase: DecisionCase = {
  id: "demo-deepfakes",
  caseId: "deepfakes",
  title: "Clonar a cualquiera con un minuto de audio",
  situation:
    "Un cliente quiere una función para que cualquier usuario clone la voz y el rostro de otra persona con un minuto de audio y una foto. Dice que es “para memes” y que la competencia ya la tiene.",
  options: [
    {
      key: "A",
      text: "La construimos tal cual. Lo que hagan los usuarios es su responsabilidad.",
      verdict: "cruza",
      why: "La persona clonada nunca aceptó nada y es quien paga el daño: fraude, acoso o su voz diciendo lo que nunca dijo. Que lo haga el usuario no nos quita la autoría de la herramienta.",
    },
    {
      key: "B",
      text: "La construimos con una casilla de “Tengo permiso de esta persona” y un aviso en los términos.",
      verdict: "no-alcanza",
      why: "Una casilla la marca cualquiera y no verifica nada. El consentimiento lo tiene que dar la persona clonada, no quien quiere clonarla.",
    },
    {
      key: "C",
      text: "Solo clonamos a quien da su consentimiento explícito y verificable. Todo lo generado lleva marca de agua y aviso, y si retira el permiso, su modelo se borra.",
      verdict: "nuestra",
      why: "La función sigue existiendo para quien sí quiere usar su propia voz o la de alguien que aceptó, y quien no aceptó queda protegido.",
    },
  ],
  decision: "Solo con consentimiento verificable de la persona clonada, marca de agua y borrado al retirar el permiso.",
  reasoning: [
    "El código de la ACM pide evitar daño (1.2) y ser honestos (1.3), pero se escribió antes de la IA generativa masiva. Aquí ese punto ciego se nota, así que lo cubrimos con una regla explícita.",
    "Si el cliente dice que sin esto pierde usuarios, le cotizamos la verificación de identidad. No le cotizamos el daño a terceros.",
  ],
};

/** 04 · Pon a prueba nuestro criterio. */
export const decisionCases: readonly DecisionCase[] = [
  {
    id: "caso-bossware",
    caseId: "bossware",
    title: "El Bossware",
    situation:
      "Una empresa nos pide instalar, sin avisar a sus empleados, un programa que toma una foto por webcam cada 5 minutos y registra cada pestaña abierta. Es el contrato más grande del año.",
    options: [
      { key: "A", text: "Lo instalamos como lo piden. Las computadoras son de la empresa.", verdict: "cruza", why: "Vigilar en secreto a personas que no pueden negarse es justo lo que nuestra regla de autonomía prohíbe. Y en México, la LFT solo permite cámaras para supervisar el teletrabajo de forma extraordinaria." },
      { key: "B", text: "Lo instalamos, pero agregamos un párrafo en el reglamento interno, en letra chica.", verdict: "no-alcanza", why: "Un aviso que nadie lee no es consentimiento informado. La ley de datos de 2025 pide aviso de privacidad claro y consentimiento, no un trámite escondido." },
      { key: "C", text: "Lo rediseñamos: medimos resultados por equipo, con aviso visible y consentimiento, y sin webcam ni registro de pestañas.", verdict: "nuestra", why: "La empresa obtiene lo que de verdad necesita (saber si el trabajo avanza) sin convertir a su gente en sospechosa." },
    ],
    decision: "Rediseñarlo para medir equipos, no personas, con aviso y consentimiento. Si insisten en espiar, no tomamos el contrato.",
    reasoning: [
      "La LFT (art. 330-I) pide que la supervisión del teletrabajo sea proporcional y que cámaras y micrófonos se usen solo de manera extraordinaria. La nueva ley de datos personales (DOF, 20 de marzo de 2025) exige aviso de privacidad y consentimiento.",
      "Afuera ya cuesta caro: H&M pagó €35.3 millones en Alemania (2020) por perfilar a sus empleados, y la CNIL multó a Amazon France Logistique con €32 millones (2024), monto que el Consejo de Estado francés redujo a €15 millones en 2025. En Países Bajos, un tribunal ordenó a Chetu pagar unos €75,000 a un empleado despedido por no dejar la webcam prendida (2022).",
      "El costo humano también existe: en la encuesta de la APA (2023), 56% de quienes son monitoreados se sienten tensos o estresados en el trabajo, contra 40% de quienes no lo son.",
      "“Solo seguía órdenes” no exime. Documentamos el riesgo, citamos la ley y proponemos la alternativa. Si hace falta, lo decidimos en colectivo.",
    ],
    sources: ["lft", "lfpdppp", "hm", "cnil-amazon", "ce-amazon", "chetu", "apa"],
  },
  {
    id: "caso-tienda-apps",
    caseId: "tienda-apps",
    title: "El impuesto de la tienda de apps",
    situation:
      "La tienda dominante obliga a usar su pasarela con una comisión fija de 30% y prohíbe botones que lleven a pagar afuera. El cliente quiere ir más lejos: esconder que en su sitio web el mismo plan cuesta menos.",
    options: [
      { key: "A", text: "Escondemos el precio externo y subimos el precio en la app sin explicarlo.", verdict: "cruza", why: "El usuario paga 30% más sin saber que tenía otra opción. Eso es ocultarle información sobre su propio dinero." },
      { key: "B", text: "Ignoramos la regla de la tienda y ponemos el botón aunque nos bajen la app.", verdict: "no-alcanza", why: "Romper un contrato a escondidas pone en riesgo al cliente y a sus usuarios, que se quedan sin app. Defender al usuario no es actuar por la libre." },
      { key: "C", text: "Cumplimos la regla donde aplica, mostramos el precio real y los enlaces externos donde la ley lo permite, y el 30% va explicado en la cotización.", verdict: "nuestra", why: "El cliente sabe cuánto le cuesta la tienda, el usuario ve sus opciones donde se pueden mostrar y nadie engaña a nadie." },
    ],
    decision: "Transparencia de precio donde la ley lo permite y el 30% explicado en la cotización. La regla injusta se combate por la vía legal.",
    reasoning: [
      "La regla ya se está cayendo por la vía legal: en abril de 2025 una jueza de EE. UU. declaró a Apple en desacato por seguir bloqueando los enlaces a pagos externos (Epic contra Apple); en apelación se confirmó el desacato. Ese mismo mes, la Comisión Europea multó a Apple con €500 millones por impedir que los desarrolladores avisaran de ofertas fuera de su tienda.",
      "Cumplimos la ley y los contratos, pero no escondemos al usuario el precio real ni sus opciones donde se pueden mostrar.",
    ],
    sources: ["epic", "dma"],
  },
  {
    id: "caso-buscador",
    caseId: "buscador",
    title: "La degradación del buscador",
    situation:
      "El cliente tiene un buscador. Los clics en anuncios bajaron y pide que los anuncios usen el mismo formato que los resultados normales, sin etiqueta visible, y que se llene la primera página con artículos generados por IA.",
    options: [
      { key: "A", text: "Lo hacemos. Los clics suben y el usuario igual encuentra algo.", verdict: "cruza", why: "Disfrazar un anuncio de respuesta es mentirle al usuario sobre lo que está viendo. Los clics suben porque se equivoca, no porque encontró algo." },
      { key: "B", text: "Ponemos la etiqueta “Patrocinado” en gris claro y tamaño 9.", verdict: "no-alcanza", why: "Una etiqueta diseñada para no verse es el mismo truco con mejor coartada." },
      { key: "C", text: "El anuncio siempre se ve como anuncio. Medimos si la persona encontró su respuesta, y no publicamos relleno generado con IA.", verdict: "nuestra", why: "El buscador vale mientras la gente confíe en su primera página. Esa confianza es lo que vende los anuncios." },
    ],
    decision: "El anuncio siempre se ve como anuncio, y la métrica principal es si la persona encontró lo que buscaba.",
    reasoning: [
      "Cuando la métrica del negocio (clics) se separa de la del usuario (encontrar la respuesta), el producto se degrada aunque los números suban.",
      "El caso no es teoría. En agosto de 2024 un juez federal de EE. UU. concluyó que Google mantuvo de forma ilegal un monopolio en búsqueda general y su publicidad de texto. En septiembre de 2025 le prohibió los contratos de exclusividad y le ordenó compartir datos con competidores.",
    ],
    sources: ["google-doj"],
  },
  {
    id: "caso-rockstar",
    caseId: "rockstar",
    title: "El Rockstar arrogante",
    situation:
      "El mejor programador del equipo se aprueba sus propios PRs, no documenta, maltrata a los juniors y dice que las reglas de accesibilidad son “para diseñadores débiles”. Si se va, se lleva medio sistema en la cabeza.",
    options: [
      { key: "A", text: "Lo dejamos. Entrega rápido y el cliente está contento.", verdict: "cruza", why: "Así se normaliza que el talento compra impunidad. El costo lo pagan los juniors y los usuarios que no pueden navegar con teclado." },
      { key: "B", text: "Lo exhibimos en la junta semanal para que aprenda.", verdict: "no-alcanza", why: "Corregir en público humilla y endurece la defensa. El refuerzo se da en público; la corrección, jamás." },
      { key: "C", text: "Junta privada con datos, acuerdo medible con fecha, y que él escriba la guía de documentación y enseñe la arquitectura.", verdict: "nuestra", why: "Nombramos la conducta por sus efectos y convertimos su ego en un activo para el equipo." },
    ],
    decision: "Datos, junta privada de 30 minutos y un acuerdo medible con fecha, consecuencia y seguimiento a 15 días.",
    reasoning: [
      "Llegamos con evidencia, no con adjetivos: 63% del core con un solo autor, 0 PRs ajenos aprobados en 11 semanas, 38 de 41 PRs propios sin revisión, 27% de tickets reabiertos contra 8% del resto.",
      "No es un problema de personalidad: la organización premió la velocidad y los rescates heroicos, nunca la mantenibilidad. Por eso también cambiamos el incentivo.",
      "La frase que usamos en la junta: “No te pido que estés de acuerdo; te pido que el estándar se cumpla.”",
    ],
  },
];
