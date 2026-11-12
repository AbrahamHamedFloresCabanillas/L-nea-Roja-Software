import type { CaseId } from "./cases";

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
  intro:
    "Las presiones más probables de un inversor o de un cliente con prisa. Abre cada una: primero la postura en una línea, luego el argumento. No cedemos la regla; explicamos por qué conviene.",
};

export const investorGroups: readonly { title: string; items: QA[] }[] = [
  {
    title: "Dinero y contratos",
    items: [
      {
        id: "q-competidor", caseId: "cancelacion", sources: ["ftc-amazon"],
        q: "Su competidor cobra 40% menos porque no pierde tiempo en ética. ¿Por qué contratarlos a ustedes?",
        stance: "Porque ese ahorro es un riesgo aplazado.",
        argument: "Una brecha, una multa o una demanda cuestan más que la diferencia: a Amazon su flujo de cancelación le costó US$2,500 millones en 2025. Nosotros ponemos el costo completo en la cotización desde el primer día.",
      },
      {
        id: "q-sin-cliente", caseId: "bossware",
        q: "Este mes ustedes no tienen otro cliente. ¿De verdad van a rechazar el contrato?",
        stance: "Sí, si el contrato es espiar o engañar a alguien.",
        argument: "Un mes sin ese cliente se recupera; la reputación de la agencia que construyó un bossware, no. Antes de rechazar proponemos la versión que sí hacemos, medir equipos con aviso y consentimiento. Si no la quiere, el contrato se va. Lo decidimos en colectivo, no una persona sola.",
      },
      {
        id: "q-30", caseId: "tienda-apps", sources: ["epic", "dma"],
        q: "Todas las apps cobran el 30%. ¿Por qué nosotros no deberíamos esconder el pago externo?",
        stance: "Porque “todos lo hacen” no lo vuelve correcto, y ya ni siquiera es seguro.",
        argument: "Cumplimos la regla de la tienda donde aplica, pero no escondemos el precio real donde la ley permite mostrarlo. En 2025 Apple fue declarada en desacato en EE. UU. por bloquear los enlaces externos, y la Comisión Europea la multó con €500 millones por lo mismo. El 30% va explicado en su cotización.",
      },
      {
        id: "q-terminos", caseId: "bossware",
        q: "Los usuarios no leen los términos. ¿Para qué tanta transparencia?",
        stance: "Justamente por eso.",
        argument: "Si nadie lee, el diseño es quien tiene que explicar. Una promesa que solo protege a quien la lee no protege a casi nadie.",
      },
    ],
  },
  {
    title: "IA generativa",
    items: [
      {
        id: "q-ia-mitad", caseId: "deepfakes",
        q: "La IA generativa nos ahorra la mitad del trabajo. ¿Por qué limitarla con revisión humana?",
        stance: "La usamos y lo decimos. Lo que no aceptamos es que nadie responda por el resultado.",
        argument: "Quien firma cada entregable es una persona del equipo. Si nadie entiende un código, no está terminado: está generado.",
      },
      {
        id: "q-ia-revision", caseId: "prompt-ia",
        q: "¿Quién paga el tiempo extra de revisar todo lo que genera la IA?",
        stance: "Va en la cotización, igual que las pruebas.",
        argument: "Revisar no es un extra: es la parte del trabajo que nos hace responsables del resultado. Lo cotizamos desde el inicio. Usar el modelo más pequeño que resuelve la tarea y generar una imagen en vez de cuatro baja el costo de cómputo y compensa una parte.",
      },
      {
        id: "q-ia-sitio", caseId: "prompt-ia",
        q: "¿Ustedes usaron IA para hacer este mismo sitio?",
        stance: "Sí, y lo decimos aquí mismo.",
        argument: "Usamos herramientas de IA para programar y redactar borradores. Cada texto lo revisamos, cada cifra la verificamos con su fuente y todo lo defendemos aquí, frente a ustedes. Esconderlo violaría nuestra regla 01 en el mismo documento que la anuncia.",
      },
    ],
  },
  {
    title: "Patrones oscuros",
    items: [
      {
        id: "q-retener", caseId: "cancelacion", sources: ["ftc-amazon"],
        q: "Si cancelar es tan fácil, ¿cómo esperan retener usuarios?",
        stance: "Con un producto en el que valga la pena quedarse.",
        argument: "La fricción solo retrasa la baja y la convierte en enojo, reclamos y reembolsos: la FTC obligó a Amazon a devolver US$1,500 millones. Preguntamos por qué se va la gente y arreglamos eso. Una oferta honesta en la salida está bien; un laberinto, no.",
      },
    ],
  },
  {
    title: "Crisis",
    items: [
      {
        id: "q-aviso", caseId: "filtracion",
        q: "Ya firmé. Necesito que el aviso de la brecha espere hasta después del lanzamiento.",
        stance: "No.",
        argument: "Podemos ayudarle a ordenar el mensaje y los tiempos de respuesta, pero el aviso a las personas afectadas sale en cuanto sepamos qué datos se expusieron. Si el contrato exige lo contrario, lo rescindimos y lo dejamos por escrito.",
      },
      {
        id: "q-rescate", caseId: "filtracion",
        q: "El hacker pide un millón. Pagar sale más barato que la demanda. ¿Por qué no pagan?",
        stance: "Porque pagar no compra nada.",
        argument: "Los datos ya se copiaron: pagar no garantiza que no se publiquen y financia el siguiente ataque. Ese millón va a las personas afectadas: monitoreo de identidad, asesoría legal, apoyo psicológico y reembolsos. La demanda se enfrenta con lo que sí reduce el daño, y asumiendo en público que la responsabilidad es nuestra.",
      },
    ],
  },
  {
    title: "Impacto ambiental, según el caso EvoPhone",
    items: [
      {
        id: "q-vender-menos", caseId: "evophone",
        q: "Si los teléfonos duran más, vamos a vender menos.",
        stance: "Menos unidades, más ingreso por teléfono durante su vida.",
        argument: "Refacciones, baterías, servicios y funciones para toda la base instalada. Y quien no se siente engañado vuelve a comprar la marca.",
      },
      {
        id: "q-atras", caseId: "evophone",
        q: "Sin un sistema nuevo cada año nos quedamos atrás.",
        stance: "Funciones nuevas cada trimestre, para toda la base.",
        argument: "Lo que no hacemos es usar la actualización como castigo para el modelo viejo. Un modelo viejo recibe un perfil ligero, nunca uno lento, y la compuerta de rendimiento lo garantiza en cada release.",
      },
      {
        id: "q-laboral", caseId: "evophone",
        q: "Lo laboral es muy suave: con 40 horas no salen los releases.",
        stance: "Son topes medibles y un veto, no pláticas.",
        argument: "Si las horas extra pasan de 10% dos sprints seguidos, el alcance se recorta solo. El crunch permanente produce los errores que después pagamos en soporte.",
      },
      {
        id: "q-modular", caseId: "evophone", sources: ["eu-ecodesign"],
        q: "Lo modular sube el costo de fabricación.",
        stance: "Y baja las garantías y abre ingresos por refacciones.",
        argument: "Fairphone lo demostró. Además, en la UE garantizar refacciones por 7 años ya es obligatorio desde junio de 2025: diseñar para repararse es adelantarse a la ley.",
      },
    ],
  },
  {
    title: "Equipo, según el caso del Rockstar",
    items: [
      {
        id: "q-rockstar", caseId: "rockstar",
        q: "Su mejor programador entrega el triple. ¿Por qué arriesgarse a que se vaya por exigirle revisiones?",
        stance: "Porque un sistema que solo entiende una persona es un riesgo, no un activo.",
        argument: "Con factor bus de 1, si se enferma o renuncia, el cliente se queda sin proyecto. “No te pido que estés de acuerdo; te pido que el estándar se cumpla.” Y le damos un rol a su altura: que escriba la guía y enseñe la arquitectura.",
      },
      {
        id: "q-a11y", caseId: "rockstar",
        q: "La accesibilidad es cosa de diseñadores, no del equipo de backend.",
        stance: "La accesibilidad es requisito de entrega, no un gusto.",
        argument: "Un formulario sin etiquetas ni foco de teclado deja fuera a usuarios reales y es un defecto como cualquier otro. Si no pasa la revisión de accesibilidad, no se libera.",
      },
      {
        id: "q-talento", caseId: "rockstar",
        q: "Con tantas reglas internas, ¿no van a perder talento?",
        stance: "Perdemos al que quiere impunidad; ganamos al que quiere crecer.",
        argument: "Corregimos en privado y reconocemos en público. En un equipo con revisiones, documentación y seguridad psicológica se aprende más rápido que en uno donde manda el héroe.",
      },
    ],
  },
];
