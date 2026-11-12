// Libera, uno por uno y en tiempo ocioso, los bloques que empezaron con content-visibility: auto.
// Así la carga inicial no maqueta toda la página de golpe, y poco después todo queda en flujo normal
// (necesario para que las anclas, el lector de pantalla y las herramientas de accesibilidad vean la página completa).
const blocks = Array.from(document.querySelectorAll<HTMLElement>(".cv"));

const releaseAll = () => blocks.forEach((b) => b.classList.remove("cv"));

if (location.hash) {
  // Llegando con un ancla: se libera todo y se vuelve a ubicar el destino.
  releaseAll();
  requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: "instant" }));
} else {
  const idle = (cb: () => void) =>
    "requestIdleCallback" in window ? window.requestIdleCallback(cb, { timeout: 1500 }) : window.setTimeout(cb, 60);
  const next = () => {
    const b = blocks.shift();
    if (!b) return;
    b.classList.remove("cv");
    requestAnimationFrame(() => idle(next));
  };
  const start = () => idle(next);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}

// Un clic en un ancla interna antes de terminar: libera todo para que el salto sea exacto.
document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (a && blocks.length) releaseAll();
}, { capture: true });
