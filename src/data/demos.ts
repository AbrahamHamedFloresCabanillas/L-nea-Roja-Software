/* Contenido de las demos del Código LSC. Los componentes solo lo presentan. */

/* ---------- Pilar 01 · ¿Cuánto cuesta un gato astronauta? (A8 · prompt-ia) ---------- */

export const TEXT_WH = 0.24; // mediana de un prompt de texto en Gemini, Google (2025)

export interface PromptOption {
  id: string;
  label: string;
  detail: string;
  /** Energía estimada en Wh: [bajo, alto]. Si es un solo valor, bajo = alto. */
  wh: [number, number];
  sources: string[];
}

export const promptOptions: readonly PromptOption[] = [
  { id: "texto", label: "Una pregunta de texto", detail: "Mediana medida por Google para Gemini.", wh: [0.24, 0.24], sources: ["google-gemini"] },
  { id: "razonamiento", label: "Una pregunta con razonamiento largo", detail: "Modelo que “piensa” miles de palabras antes de responder.", wh: [3.91, 3.91], sources: ["oviedo"] },
  { id: "imagen", label: "1 imagen de un gato astronauta", detail: "De un modelo abierto en alta calidad al promedio de modelos de imagen.", wh: [1.22, 2.9], sources: ["mittr", "luccioni"] },
  { id: "imagenes", label: "4 imágenes del gato (n = 4)", detail: "Lo mismo, multiplicado por el parámetro que alguien dejó en 4.", wh: [4.89, 11.63], sources: ["mittr", "luccioni"] },
  { id: "video", label: "Video de 5 segundos del gato", detail: "Modelo abierto de video, versión más reciente medida.", wh: [944, 944], sources: ["mittr"] },
];

export const promptFacts = {
  path: "Teléfono → antena → fibra y cables submarinos → centro de datos → racks de GPUs → enfriamiento (aquí se evapora agua) → regreso.",
  water:
    "Google reporta 0.26 mL de agua por cada prompt de texto. Un estudio de UC Riverside estimó unos 500 mL por cada 10 a 50 respuestas de GPT-3 si se cuenta también el agua de generar la electricidad.",
  grid: "Hoy, cerca de 30% de la electricidad de los centros de datos sale del carbón.",
  datacenters: "Los centros de datos usaron unos 415 TWh en 2024 y la IEA proyecta unos 945 TWh para 2030.",
  scale: "Un millón de personas pidiendo sus 4 gatos al día son hasta 11.6 MWh diarios.",
  thesis: "El costo no lo decide el usuario, lo decide quien diseña el sistema.",
  practices: [
    "Una imagen por defecto, no cuatro.",
    "El modelo más pequeño que resuelva la tarea.",
    "Cachear y reutilizar lo que ya se generó.",
    "Mostrarle al usuario el costo estimado antes de generar.",
    "Cargas pesadas en horarios y regiones con energía más limpia.",
  ],
  note: "Estimaciones publicadas con métodos distintos. Sirven para comparar órdenes de magnitud, no para facturar.",
};

/* ---------- Pilar 02 · El muro de la cancelación (cancelacion) ---------- */

export interface CancelScreen {
  title: string;
  body: string;
  primary: string; // el botón grande que te retiene
  exit: string; // la salida, pequeña
  kind?: "survey" | "bot" | "code";
  options?: string[];
}

export const cancelWall: readonly CancelScreen[] = [
  { title: "Mi cuenta", body: "Plan Premium · $189 al mes", primary: "Ver mis beneficios", exit: "Administrar suscripción" },
  { title: "¿Seguro que quieres irte?", body: "Perderás tus listas, tu historial y tus descuentos para siempre.", primary: "Conservar mis beneficios", exit: "Continuar" },
  { title: "Cuéntanos por qué te vas", body: "Esta encuesta es obligatoria para continuar.", primary: "Mejor me quedo", exit: "Siguiente", kind: "survey", options: ["Es muy caro", "No lo uso", "Encontré otra opción", "Otro motivo"] },
  { title: "Espera: 3 meses al 50%", body: "Solo por hoy. Esta oferta no se repetirá.", primary: "Aceptar la oferta", exit: "No me interesa" },
  { title: "Asistente virtual", body: "Para cancelar necesitas hablar con nuestro asistente.", primary: "Volver al inicio", exit: "Hablar con el asistente", kind: "bot" },
  { title: "Confirma tu identidad", body: "Te enviamos un código a tu correo. Puede tardar unos minutos.", primary: "Mejor no", exit: "Ya escribí el código", kind: "code" },
  { title: "Último paso", body: "Si cancelas hoy, pierdes el precio especial que tienes desde 2023.", primary: "Volver a mi plan", exit: "confirmar cancelación" },
];

export const cancelFair = {
  title: "Cancelar tu plan",
  body: "Tu plan termina el 30 de noviembre. No habrá más cobros. Tus listas se guardan 30 días por si regresas.",
  cancel: "Cancelar suscripción",
  keep: "Mantener mi plan",
};

export const cancelBot = {
  waiting: "El asistente está procesando tu solicitud…",
  error: "Ocurrió un error técnico. Intenta de nuevo más tarde.",
  retry: "Reintentar",
};

/* ---------- Pilar 02 · La vergüenza de confirmación (verguenza) ---------- */

export const shameParts = [
  { n: 1, trick: "Miedo como argumento de venta", why: "El título asusta en lugar de informar. En una farmacia, usar el miedo para vender es doblemente grave." },
  { n: 2, trick: "Presión social sin fuente", why: "Una cifra inventada para que sientas que eres el único que no se protege." },
  { n: 3, trick: "Precio real escondido", why: "El precio grande es promocional y el que vas a pagar después está en un asterisco de 10 px." },
  { n: 4, trick: "Rechazo con vergüenza", why: "Para decir que no tienes que llamarte irresponsable. La culpa sustituye a la información." },
  { n: 5, trick: "Salida casi invisible", why: "La X para cerrar es diminuta y de bajo contraste. Existe, pero está hecha para no encontrarse." },
] as const;

export const shameOriginal = {
  title: "¡ESPERA! Tu salud está en riesgo",
  social: "El 87% de nuestros clientes ya se protegió.",
  price: "Solo $199 al mes*",
  fine: "*Precio promocional el primer mes. Después, $349 al mes.",
  accept: "¡Sí, quiero cuidar mi salud!",
  reject: "No, prefiero arriesgar mi salud, pagar más caro y ser irresponsable",
};

export const shameRedesign = {
  title: "Recibe tu tratamiento cada mes",
  facts: [
    "$249 al mes, se cobra el día 5.",
    "Ahorras $60 contra comprarlo suelto.",
    "Llega cada 30 días y puedes cambiar la fecha.",
    "Cancelas en un clic desde tu cuenta.",
  ],
  accept: "Suscribirme",
  reject: "No, gracias",
  note: "Si tu médico cambia la dosis, pausamos el envío sin costo.",
};

/* ---------- Pilar 02 · Excusas corporativas (A7 · Addiction UX) ---------- */

export const excuses = [
  { excuse: "“El usuario decide cuánto tiempo pasa.”", answer: "Decide dentro de un diseño que alguien hizo para que no pare. Si el default es infinito, la decisión ya la tomamos nosotros." },
  { excuse: "“Optimizamos engagement, no adicción.”", answer: "Si la métrica sube cuando la persona pierde el control de su tiempo, la diferencia es de nombre. Nosotros medimos tareas resueltas." },
  { excuse: "“Los términos dicen mayores de 13.”", answer: "Sin verificación, es una frase para el abogado, no una protección para el menor." },
  { excuse: "“Ofrecemos herramientas de bienestar.”", answer: "Si vienen apagadas por defecto, son decoración. Las nuestras empiezan encendidas." },
  { excuse: "“No hay evidencia causal concluyente.”", answer: "Más de 40 fiscales estatales de EE. UU. demandaron a Meta en 2023 por funciones adictivas dirigidas a menores. Con niños de por medio, no esperamos a la prueba perfecta.", sources: ["meta-states"] },
  { excuse: "“El algoritmo aprendió solo.”", answer: "Alguien eligió qué optimizar. Un modelo aprende lo que le pedimos que maximice." },
] as const;

/* ---------- Pilar 03 · EvoPhone (evophone) ---------- */

export const evoToggles = [
  { id: "ralentizar", weight: 30, label: "La actualización vuelve lentos los modelos de más de 3 años", note: "Lo que EvoPhone les pedía a sus ingenieros. Es la decisión que más empuja una renovación." },
  { id: "bateria", weight: 20, label: "Batería sellada y sin refacciones", note: "Una batería gastada manda el teléfono entero al cajón." },
  { id: "so-unico", weight: 20, label: "El mismo sistema pesado para todos los modelos", note: "Sin perfil por hardware, el modelo viejo recibe el mismo sistema que el nuevo." },
  { id: "autoplay", weight: 15, label: "Autoplay de video en cada tarjeta", note: "Nadie lo pidió, y gasta datos, batería y atención." },
  { id: "imagenes", weight: 15, label: "Imágenes sin optimizar", note: "Archivos mucho más grandes de lo que la pantalla muestra." },
] as const;

export const evoFacts = {
  diagnosis: "“EvoPhone no vende teléfonos. Vende su fecha de caducidad.”",
  manufacturing:
    "Alrededor de 80% de las emisiones de un smartphone ocurren al fabricarlo (81% en el iPhone 13, según Apple). El teléfono más verde es el que no hay que fabricar otra vez.",
  ewaste: "En 2022 el mundo generó 62 millones de toneladas de basura electrónica. Solo 22.3% se documentó como recolectada y reciclada formalmente.",
  eu: "En la UE, desde junio de 2025 los fabricantes deben garantizar refacciones por 7 años y actualizaciones de sistema por al menos 5 años después de dejar de vender un modelo (Reglamento 2023/1670). Desde febrero de 2027, las baterías portátiles deberán poder cambiarse por el usuario, con algunas excepciones (Reglamento 2023/1542).",
  promise: "Ningún LSC volverá a programar la ralentización de un teléfono.",
  note: "Índice ilustrativo para comparar decisiones de diseño. No es una medición de emisiones.",
};

export const gateSteps = [
  { label: "Commit", detail: "Cada cambio entra por un PR revisado." },
  { label: "Build", detail: "Se compila la versión candidata." },
  { label: "Granja de dispositivos", detail: "Corre en teléfonos reales de hasta 7 años." },
  { label: "¿Regresión mayor a 5% en un modelo viejo?", detail: "Arranque, apps, batería.", question: true },
] as const;
