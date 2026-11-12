import type { CaseId } from "./cases";

export interface RealCase {
  title: string;
  what: string;
  learned: string;
  sources: string[];
  caseId: CaseId;
}

export interface Rule {
  num: string;
  id: string;
  pillar: string;
  rule: string;
  detail: string;
  backing: string;
  yes: string[];
  no: string[];
  realCase: RealCase;
  photo: { file: "centro-datos-cern" | "pantalla-frustracion" | "agbogbloshie"; alt: string; caption: string };
  caseIds: CaseId[];
}

export const codeIntro = {
  title: "Tres reglas que no negociamos.",
  intro:
    "Elegimos los tres dilemas donde, en el semestre, vimos que el código puede dañar a una persona real sin que nadie lo note a tiempo: la IA generativa, los patrones oscuros y diseño adictivo, y el costo ambiental. Cada regla trae lo que sí hacemos, lo que no haremos, un caso real y una demo para probarla.",
};

export const rules: readonly Rule[] = [
  {
    num: "01",
    id: "regla-ia",
    pillar: "IA generativa",
    rule: "La IA propone, una persona responde.",
    detail:
      "Nada generado sale sin revisión humana ni sin avisar que lo es, nadie es clonado sin su consentimiento, y usamos el modelo más pequeño que resuelva la tarea.",
    backing: "Código de la ACM 1.2, 1.3 y 4.1",
    yes: [
      "Avisamos cuando un texto, una imagen o una voz se generó con IA.",
      "Una persona del equipo lee, entiende y firma todo lo que la IA produce antes de entregarlo.",
      "Usamos el modelo más pequeño que resuelve la tarea y generamos una imagen por defecto, no cuatro.",
      "Pedimos consentimiento explícito y verificable antes de usar la voz o el rostro de alguien.",
    ],
    no: [
      "Hacer pasar a un sistema de IA por una persona.",
      "Clonar la voz o el rostro de alguien sin su permiso, aunque el cliente pague.",
      "Llenar un sitio o un buscador con contenido generado en masa para inflar clics.",
      "Entrenar modelos con datos de usuarios que no lo aceptaron.",
    ],
    realCase: {
      title: "Hong Kong, 2024: la videollamada donde todos eran falsos",
      what:
        "Un empleado de Arup en Hong Kong entró a una videollamada con el director financiero y otros colegas. Todos, menos él, eran deepfakes. Hizo 15 transferencias por HK$200 millones, unos US$25 millones.",
      learned: "La voz y la cara ya no prueban identidad. Por eso no hay clonación sin consentimiento ni sin marca de agua.",
      sources: ["arup"],
      caseId: "deepfakes",
    },
    photo: {
      file: "centro-datos-cern",
      alt: "Pasillo largo entre racks de servidores en el centro de cómputo del CERN.",
      caption: "Cada respuesta de una IA pasa por un lugar así. Centro de cómputo del CERN, Ginebra, 2019.",
    },
    caseIds: ["deepfakes", "prompt-ia", "buscador"],
  },
  {
    num: "02",
    id: "regla-patrones",
    pillar: "Patrones oscuros y diseño adictivo",
    rule: "Si el usuario no lo aceptaría viendo el cuadro completo, no lo diseñamos.",
    detail: "Cancelar cuesta lo mismo que contratar, y no medimos el éxito en minutos atrapados.",
    backing: "Código de la ACM 1.1, 1.2 y 3.5",
    yes: [
      "Cancelar toma los mismos pasos que contratar, con botones del mismo tamaño.",
      "El rechazo dice “No, gracias”. Sin culpa y sin miedo.",
      "Autoplay, notificaciones y rachas empiezan apagados.",
      "Medimos si la persona resolvió lo que vino a hacer, no cuánto tiempo se quedó.",
    ],
    no: [
      "Esconder la salida detrás de pantallas, bots o texto gris.",
      "Inventar urgencia o contadores que se reinician.",
      "Premarcar casillas de consentimiento.",
      "Scroll infinito o recompensas variables en productos para menores.",
    ],
    realCase: {
      title: "Amazon, 2025: cancelar Prime le costó US$2,500 millones",
      what:
        "La FTC demandó a Amazon por inscribir gente en Prime sin consentimiento claro y por complicar la cancelación. En septiembre de 2025 Amazon aceptó pagar US$1,000 millones de multa civil y US$1,500 millones en reembolsos, y cambiar su flujo de cancelación.",
      learned: "Esconder la salida no retiene clientes: aplaza una factura que llega con intereses.",
      sources: ["ftc-amazon"],
      caseId: "cancelacion",
    },
    photo: {
      file: "pantalla-frustracion",
      alt: "Una mujer frente a su laptop se cubre la cara con la mano, frustrada.",
      caption: "La fricción se diseña. Quitarla también.",
    },
    caseIds: ["cancelacion", "verguenza"],
  },
  {
    num: "03",
    id: "regla-ambiental",
    pillar: "Impacto ambiental",
    rule: "Todo lo que ponemos en producción tiene un presupuesto de recursos y una fecha de retiro.",
    detail: "Nunca volvemos lento un equipo que funciona.",
    backing: "Código de ética de ingeniería de software ACM/IEEE-CS 1.03, 1.06 y 3.10",
    yes: [
      "Probamos cada versión en teléfonos de hasta 7 años antes de publicarla.",
      "Si limitamos el rendimiento por la batería, lo avisamos y el usuario decide.",
      "Imágenes optimizadas, nada de sondeos en segundo plano y datos con fecha de caducidad.",
      "Publicamos cómo medimos lo que llamamos “eficiente”.",
    ],
    no: [
      "Programar la ralentización de un teléfono para empujar una renovación.",
      "Sellar la batería o bloquear refacciones sin una razón técnica.",
      "Lanzar a escala algo cuyo consumo no podemos medir.",
      "Llamar “verde” a un producto sin publicar el método.",
    ],
    realCase: {
      title: "Apple, 2017–2020: batterygate",
      what:
        "Apple limitó el rendimiento de iPhones con baterías desgastadas sin avisar con claridad. En 2020 aceptó un acuerdo de hasta US$500 millones en EE. UU. y una multa de €25 millones en Francia por práctica comercial engañosa por omisión.",
      learned: "Limitar el rendimiento puede tener una razón técnica. Esconderlo, no.",
      sources: ["batterygate-us", "batterygate-fr"],
      caseId: "evophone",
    },
    photo: {
      file: "agbogbloshie",
      alt: "Dos hombres queman cables entre humo negro para recuperar cobre en el tiradero de Agbogbloshie, Ghana.",
      caption: "Aquí terminan muchos teléfonos que “ya no sirven”. Agbogbloshie, Accra, Ghana, 2019.",
    },
    caseIds: ["evophone", "prompt-ia"],
  },
];
