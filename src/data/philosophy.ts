import type { CaseId } from "./cases";

export const philosophy = {
  title: "Cobrar está bien. Cobrar con trampa, no.",
  intro:
    "Una agencia necesita ingresos para existir. Lo que no aceptamos es ganar a costa de que el usuario no entienda lo que acepta. Medimos nuestro trabajo por cuánto confía la gente en él después de usarlo, no por cuánto tiempo la tuvimos atrapada.",
  statement:
    "Un producto que funciona solo porque el usuario no entiende lo que acepta es una deuda que paga alguien más.",
  statementCase: {
    caseId: "buscador" as CaseId,
    text:
      "Lo vimos en el caso del buscador: la primera página se llenó de anuncios que parecían respuestas y los clics subieron. El producto empeoró mientras los números mejoraban. Esa distancia entre la métrica del negocio y la del usuario es justo lo que este manifiesto no permite.",
  },
};

/** Ética · Moral · Deontología. "En el taller" sale de nuestra traducción del código ACM (A6). */
export const concepts = [
  {
    num: "01",
    term: "Ética",
    def: "La pregunta de qué debemos hacer y por qué, incluso cuando nadie nos obliga.",
    workshop: "Antes de programar, le preguntamos a quien va a usar el sistema: al almacenista, no solo al gerente.",
    ref: "ACM 3.4",
  },
  {
    num: "02",
    term: "Moral",
    def: "Lo que una comunidad acepta como correcto. Cambia entre culturas y épocas.",
    workshop: "Que toda la industria esconda el botón de cancelar no lo vuelve aceptable. El piso lo ponemos nosotros.",
    ref: "ACM 3.5",
  },
  {
    num: "03",
    term: "Deontología",
    def: "Los deberes propios de una profesión frente a quienes dependen de ella.",
    workshop: "Callar por no hacer olas también es una decisión. Nadie aprueba un PR con contraseñas en texto plano para no quedar mal.",
    ref: "ACM 4.1",
  },
] as const;

/** Las cuatro decisiones de dinero contra buen software, ancladas a casos oficiales. */
export const moneyDecisions: readonly {
  id: string;
  caseId: CaseId;
  situation: string;
  money: string;
  ours: string;
}[] = [
  {
    id: "decision-cancelacion",
    caseId: "cancelacion",
    situation: "El CEO quiere bajar las cancelaciones este trimestre, cueste lo que cueste.",
    money: "Siete pantallas para irse, un bot que finge fallas técnicas y el botón final en gris claro.",
    ours: "Cancelar cuesta lo mismo que contratar. Preguntamos por qué se va la gente y arreglamos eso. Que se queden porque el producto sirve, no porque salir es difícil.",
  },
  {
    id: "decision-buscador",
    caseId: "buscador",
    situation: "El tablero premia los clics y el equipo de ventas quiere más anuncios arriba.",
    money: "Anuncios con el mismo formato que los resultados y relleno generado con IA para tener más páginas.",
    ours: "Medimos si la persona encontró lo que buscaba. El anuncio siempre se ve como anuncio y no publicamos contenido generado en masa para inflar resultados.",
  },
  {
    id: "decision-tienda-apps",
    caseId: "tienda-apps",
    situation: "La tienda de apps cobra 30% y prohíbe decirle al usuario que afuera es más barato.",
    money: "Esconder la opción externa y pasarle el 30% al usuario sin explicarlo.",
    ours: "Cumplimos el contrato, pero mostramos el precio real donde la ley lo permite y el 30% va desglosado en la cotización. Si la regla es injusta, la peleamos por la vía legal, no engañando al usuario.",
  },
  {
    id: "decision-bossware",
    caseId: "bossware",
    situation: "Nos ofrecen un contrato grande para vigilar empleados sin avisarles.",
    money: "Aceptar: foto por webcam cada 5 minutos y registro de pestañas, en secreto.",
    ours: "No lo construimos en secreto. Proponemos medir resultados por equipo, con aviso y consentimiento. Si el cliente insiste en espiar, no tomamos el contrato.",
  },
];

/** Cómo trabajamos por dentro (A4 · Rockstar, P5 · EvoPhone). */
export const internal = [
  {
    title: "No hay rockstars.",
    body: "Todo PR lleva revisión de otra persona y todo módulo, documentación mínima. La accesibilidad es requisito, no gusto. El talento no compra impunidad.",
    from: "A4 · El Rockstar arrogante",
    caseId: "rockstar" as CaseId,
  },
  {
    title: "La conducta se nombra por sus efectos.",
    body: "No decimos “eres arrogante”; decimos “llevas once semanas sin aprobar un PR ajeno”. Hablamos con datos. La corrección es en privado; el reconocimiento, en público.",
    from: "A4 · El Rockstar arrogante",
    caseId: "rockstar" as CaseId,
  },
  {
    title: "Cualquiera puede detener una tarea.",
    body: "Tenemos un botón de objeción técnica: si alguien del equipo cree que algo daña al usuario, se para y se revisa, sin represalias. Ningún LSC vuelve a programar la ralentización de un teléfono.",
    from: "P5 · EvoPhone",
    caseId: "evophone" as CaseId,
  },
] as const;
