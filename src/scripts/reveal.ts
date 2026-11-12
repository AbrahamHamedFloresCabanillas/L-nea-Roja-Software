// Aparición suave de bloques al entrar en pantalla. Sin JS o con reduced-motion, todo se ve desde el inicio.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  items.forEach((el) => io.observe(el));
}
