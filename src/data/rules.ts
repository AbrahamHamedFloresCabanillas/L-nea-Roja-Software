import type { CaseId } from "./cases";

export interface RealCase {
  title: string;
  what: string;
  sources: string[];
  caseId: CaseId;
}

export interface Rule {
  num: string;
  id: string;
  pillar: string;
  rule: string;
  backing: string;
  yes: string[];
  no: string[];
  realCase: RealCase;
  photo: { file: "centro-datos-cern" | "pantalla-frustracion" | "agbogbloshie"; alt: string; caption: string };
  caseIds: CaseId[];
}

export const codeIntro = {
  title: "Tres reglas que no negociamos.",
  intro: "Elegimos los tres dilemas donde el código puede dañar a alguien sin que nadie lo note a tiempo.",
};

export const rules: readonly Rule[] = [
  {
    num: "01",
    id: "regla-ia",
    pillar: "IA generativa",
    rule: "La IA propone, una persona responde.",
    backing: "Código de la ACM 1.2, 1.3 y 4.1",
    yes: [
      "Avisamos cuando algo se generó con IA.",
      "Una persona revisa y firma todo lo que la IA produce.",
      "Usamos el modelo más pequeño y una imagen por defecto.",
    ],
    no: [
      "Hacer pasar a una IA por una persona.",
      "Clonar la voz o el rostro de alguien sin su permiso.",
      "Llenar un buscador con contenido generado en masa.",
    ],
    realCase: {
      title: "Hong Kong, 2024: la videollamada falsa",
      what: "Un empleado de Arup transfirió unos US$25 millones tras una videollamada donde todos los demás eran deepfakes.",
      sources: ["arup"],
      caseId: "deepfakes",
    },
    photo: {
      file: "centro-datos-cern",
      alt: "Pasillo largo entre racks de servidores en el centro de cómputo del CERN.",
      caption: "Centro de datos del CERN, 2019.",
    },
    caseIds: ["deepfakes", "prompt-ia", "buscador"],
  },
  {
    num: "02",
    id: "regla-patrones",
    pillar: "Patrones oscuros y diseño adictivo",
    rule: "Si el usuario no lo aceptaría viendo el cuadro completo, no lo diseñamos.",
    backing: "Código de la ACM 1.1, 1.2 y 3.5",
    yes: [
      "Cancelar toma los mismos pasos que contratar.",
      "El rechazo dice “No, gracias”, sin culpa.",
      "Autoplay, notificaciones y rachas empiezan apagados.",
    ],
    no: [
      "Esconder la salida detrás de pantallas o texto gris.",
      "Inventar urgencia o contadores que se reinician.",
      "Scroll infinito en productos para menores.",
    ],
    realCase: {
      title: "Amazon, 2025: cancelar Prime le costó US$2,500 millones",
      what: "La FTC la acusó de complicar la cancelación. Pagó US$1,000 millones de multa y US$1,500 millones en reembolsos.",
      sources: ["ftc-amazon"],
      caseId: "cancelacion",
    },
    photo: {
      file: "pantalla-frustracion",
      alt: "Una mujer frente a su laptop se cubre la cara con la mano, frustrada.",
      caption: "La fricción se diseña.",
    },
    caseIds: ["cancelacion", "verguenza"],
  },
  {
    num: "03",
    id: "regla-ambiental",
    pillar: "Impacto ambiental",
    rule: "Todo lo que publicamos tiene un presupuesto de recursos y una fecha de retiro.",
    backing: "Código de ética de ingeniería de software ACM/IEEE-CS 1.03, 1.06 y 3.10",
    yes: [
      "Probamos cada versión en teléfonos de hasta 7 años.",
      "Si limitamos el rendimiento, lo avisamos.",
      "Imágenes optimizadas y datos con fecha de caducidad.",
    ],
    no: [
      "Programar la ralentización de un teléfono.",
      "Sellar la batería sin razón técnica.",
      "Llamar “verde” a algo sin publicar cómo se mide.",
    ],
    realCase: {
      title: "Apple, 2020: batterygate",
      what: "Limitó iPhones con baterías gastadas sin avisar. Acordó pagar hasta US$500 millones en EE. UU. y €25 millones en Francia.",
      sources: ["batterygate-us", "batterygate-fr"],
      caseId: "evophone",
    },
    photo: {
      file: "agbogbloshie",
      alt: "Dos hombres queman cables entre humo negro para recuperar cobre en el tiradero de Agbogbloshie, Ghana.",
      caption: "Basura electrónica en Agbogbloshie, Ghana, 2019.",
    },
    caseIds: ["evophone", "prompt-ia"],
  },
];
