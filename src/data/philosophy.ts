import type { CaseId } from "./cases";

export const philosophy = {
  title: "Cobrar está bien. Cobrar con trampa, no.",
  intro: "Una agencia necesita ingresos. No los ganamos a costa de que el usuario no entienda lo que acepta.",
  statement:
    "Un producto que funciona solo porque el usuario no entiende lo que acepta es una deuda que paga alguien más.",
  statementCase: {
    caseId: "buscador" as CaseId,
    text: "Lo vimos en el caso del buscador: los clics subieron mientras las respuestas empeoraban.",
  },
};

/** Ética · Moral · Deontología. "En el taller" sale de nuestra traducción del código ACM. */
export const concepts = [
  {
    term: "Ética",
    def: "Qué debemos hacer y por qué, aunque nadie nos obligue.",
    workshop: "Antes de programar, preguntamos a quien va a usar el sistema.",
  },
  {
    term: "Moral",
    def: "Lo que una comunidad acepta como correcto. Cambia con el tiempo.",
    workshop: "Que la industria esconda el botón de cancelar no lo vuelve aceptable.",
  },
  {
    term: "Deontología",
    def: "Los deberes de una profesión con quienes dependen de ella.",
    workshop: "Callar por no hacer olas también es una decisión.",
  },
] as const;

/** Las cuatro decisiones de dinero contra buen software. Máximo 15 palabras por lado. */
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
    situation: "El CEO quiere bajar las cancelaciones este trimestre.",
    money: "Siete pantallas para irse y el botón final en gris claro.",
    ours: "Cancelar cuesta lo mismo que contratar. Arreglamos lo que hace que la gente se vaya.",
  },
  {
    id: "decision-buscador",
    caseId: "buscador",
    situation: "El tablero premia los clics y ventas quiere más anuncios arriba.",
    money: "Anuncios con el mismo formato que los resultados normales.",
    ours: "El anuncio siempre se ve como anuncio. Medimos si la persona encontró su respuesta.",
  },
  {
    id: "decision-tienda-apps",
    caseId: "tienda-apps",
    situation: "La tienda cobra 30% y prohíbe avisar que afuera es más barato.",
    money: "Esconder la opción externa y cobrarle el 30% al usuario sin explicarlo.",
    ours: "Mostramos el precio real donde la ley lo permite. El 30% va en la cotización.",
  },
  {
    id: "decision-bossware",
    caseId: "bossware",
    situation: "Nos ofrecen un contrato grande para vigilar empleados sin avisarles.",
    money: "Foto por webcam cada 5 minutos y registro de pestañas, en secreto.",
    ours: "Medimos resultados por equipo, con aviso y consentimiento. Si no hay acuerdo, declinamos.",
  },
];
