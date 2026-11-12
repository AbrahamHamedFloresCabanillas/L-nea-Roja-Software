/**
 * Integrantes del equipo. Fijos en el código: no se editan desde el sitio ni se guardan en el navegador.
 * Si un rol sigue como "[rol]", el sitio muestra solo el nombre.
 */
export interface Member {
  name: string;
  role: string;
}

export const team: readonly Member[] = [
  { name: "Abraham Hamed Flores Cabanillas", role: "[rol]" },
  { name: "Alexandro Fregoso Castro", role: "[rol]" },
  { name: "Brayan Noé León Frausto", role: "[rol]" },
  { name: "Iván Alexandro López León", role: "[rol]" },
  { name: "Luis Fernando Cedillo Camacho", role: "[rol]" },
  { name: "Ramón Fernando Echavarría Contreras", role: "[rol]" },
];

export function visibleRole(m: Member): string | null {
  const r = m.role.trim();
  return r === "" || r === "[rol]" ? null : r;
}
