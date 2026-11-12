# DESIGN SYSTEM — Línea Roja Software
## Manifiesto de Identidad Profesional y Ética · LSC 2026

**Versión:** 2.2 (sin etiquetas monoespaciadas; todo en Inter)
**Producto:** sitio web editorial interactivo de una sola página
**Stack:** Astro (salida estática) + CSS propio con variables + TypeScript vanilla para la interacción. Sin frameworks de UI, sin Tailwind, sin librerías de animación.
**Deploy:** Vercel, conectado al repositorio en GitHub.

Este documento manda sobre el diseño. Hay dos fuentes de contenido:
- `content/semestre.md` — el material que el equipo produjo en el semestre (casos, cifras, posturas). **Tiene prioridad.** La actividad pide sintetizar lo visto en clase, así que el sitio debe apoyarse en esto, no en ejemplos genéricos.
- `reference/linea-roja-original.html` — la versión anterior del sitio (textos, demos, diagrama de crisis, preguntas de inversores). Solo contenido; su estilo visual se descarta por completo.

---

## 1. Dirección

El sitio debe sentirse como la página oficial de una firma de ingeniería de software contemporánea: mezcla de publicación editorial, documentación técnica y manifiesto profesional.

**Debe transmitir:** criterio, responsabilidad, precisión, madurez, postura.

**No debe parecer:** presentación escolar, plantilla de startup, landing de SaaS, portafolio de diseñador, sitio generado automáticamente, ni una demo de efectos.

Personalidad: **seria / humana / técnica / directa / sobria.** Nada infantil, cyberpunk, gamer ni futurista.

El contenido es el protagonista. Mucho espacio, jerarquía tipográfica fuerte, pocos elementos decorativos.

---

## 2. Concepto: la línea roja

El nombre de la agencia es el concepto visual. **Una línea roja horizontal representa un límite que no se cruza.** Es el único motivo gráfico recurrente del sitio:

- se dibuja (de izquierda a derecha) bajo el título del hero al cargar;
- marca el inicio de cada sección, junto al `h2` con el nombre de la sección (sin texto al lado);
- separa "lo que sí hacemos" de "lo que no hacemos";
- en el diagrama de crisis, marca el nodo donde la agencia se niega (ocultar una brecha);
- en el contrato, subraya la firma.

No se usa como decoración en ningún otro lugar. Si una línea roja aparece, significa *límite*.

---

## 3. Paleta

Base neutra cálida, nunca blanco puro ni negro puro.

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#F5F4EF` | Fondo principal |
| `--surface` | `#ECEBE5` | Bloques secundarios, diagramas, casos |
| `--ink` | `#161616` | Texto principal, bordes fuertes, botones primarios |
| `--graphite` | `#3F403C` | Texto secundario |
| `--muted` | `#696B65` | Texto secundario y captions (solo en tamaños ≥ 14px). Se oscureció de `#73756F` para pasar AA. |
| `--line` | `#D8D7D0` | Bordes y divisores |

### Color de identidad: Línea

| Token | Hex |
|---|---|
| `--red` | `#C23A2F` |
| `--red-soft` | `#F6E3E0` (fondos de feedback negativo) |

Es el **único color de acento** del sitio y significa *límite / no cruzamos / daño*. Úsalo con moderación: la línea junto al nombre de cada sección, el estado activo de navegación, el nodo "línea roja" del diagrama, el feedback de una decisión que viola el manifiesto. Nunca grandes superficies rojas.

**No hay azul.** La interacción (botones, enlaces, estados activos) se resuelve con `--ink`, subrayados y peso tipográfico. El hover de un botón primario cambia a `--red`.

### Semánticos (solo cuando significan algo)

| Token | Hex | Significa |
|---|---|---|
| `--positive` | `#237A4B` | Decisión correcta, protección, resolución |
| `--positive-soft` | `#E2EFE6` | Fondo de feedback positivo |
| `--warning` | `#B36A12` | Riesgo, dilema, evaluación pendiente |

"Crítico" usa `--red`: en esta marca, daño y límite son la misma idea.

### Sección oscura

| Token | Hex |
|---|---|
| `--dark` | `#181917` |
| `--dark-surface` | `#222320` |
| `--dark-text` | `#F3F2ED` |
| `--dark-muted` | `#A9ABA5` |
| `--red-on-dark` | `#E8574B` |

Una sola sección oscura: **02 / Código LSC.** El sitio no tiene modo oscuro global.

---

## 4. Tipografía

- **Inter** (variable, 400–700) es la **única** familia del sitio: títulos, cuerpo, UI, números, tiempos del diagrama y cláusulas. Fallback `"Helvetica Neue", Arial, sans-serif`. Autohospedada con `@fontsource-variable/inter` (no depender de Google Fonts en runtime).
- **No hay fuente monoespaciada.** No se usa IBM Plex Mono ni ninguna otra, y no existe la variable `--font-mono`.
- **No hay etiquetas** (eyebrows, kickers, "labels"): nada de texto pequeño en mayúsculas forzadas (`text-transform: uppercase`) ni con `letter-spacing` positivo. El único tracking permitido es el negativo de los títulos.
- El texto secundario que sí aporta va en Inter, **tipo oración**, tamaño small (`.875rem`), color `--graphite` o `--muted` (clase `.meta`).
- Los subtítulos internos ("Lo que sí hacemos", "Lo que no haremos", "Lo que empuja el dinero", "Lo que hacemos", "Cómo lo compruebas", "Nuestra decisión", "Lo que aprendimos") son `h4`/`h5` en Inter semibold, tipo oración (clase `.sub`).
- Los números (01/02/03 de las reglas, cifras, tiempos del diagrama, numeración de fuentes) van en Inter con `font-variant-numeric: tabular-nums` cuando se alinean (clase `.tnum`).
- Antes de agregar un texto chico, pregúntate si es decoración. Si solo repite lo que ya dice el título, no va.

| Estilo | Valor |
|---|---|
| Hero | `clamp(3.25rem, 7vw, 7rem)` · lh .94 · ls -.055em · 600 |
| Display | `clamp(2.75rem, 5vw, 5rem)` · lh .98 · ls -.045em · 600 |
| H2 | `clamp(2rem, 3vw, 3.25rem)` · lh 1.05 · ls -.035em · 600 |
| H3 | `clamp(1.5rem, 2vw, 2rem)` · lh 1.15 · ls -.025em · 600 |
| H4 | `1.25rem` · lh 1.25 · 600 |
| Lead | `clamp(1.15rem, 1.5vw, 1.4rem)` · lh 1.55 |
| Body | `1rem` · lh 1.65 |
| Small / meta | `.875rem` · lh 1.5 · `--graphite` o `--muted` · tipo oración |
| Sub (h4/h5 internos) | `1rem` · lh 1.35 · 600 · tipo oración |

Párrafos: `max-width: 68ch`. Intros: `52ch`. Títulos del hero: `18ch`.

---

## 5. Layout

- Contenedor: `width: min(100% - 64px, 1440px)` desktop, `min(100% - 48px, 1440px)` tablet, `calc(100% - 40px)` mobile.
- Grid de 12 / 8 / 4 columnas. Mobile-first.
- Breakpoints: 480, 768, 1024, 1280, 1440.
- Espaciado base 4px: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160.
- Entre secciones: 128–160px desktop, 96–120px tablet, 72–96px mobile.
- Debe funcionar sin scroll horizontal desde **320px**.

Bordes: `1px solid var(--line)` estándar, `1px solid var(--ink)` fuerte. Radios: 6 / 10 / 16px; pill solo para tags. Sombra única permitida: `0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.04)`.

Preferir divisiones horizontales a encerrar todo en tarjetas.

---

## 6. Arquitectura de la página

```
HEADER (sticky)
HERO
01 / FILOSOFÍA
02 / CÓDIGO LSC          ← sección oscura, 3 reglas
03 / PROMESA AL USUARIO  ← contrato
04 / PON A PRUEBA NUESTRO CRITERIO ← casos interactivos
05 / PROTOCOLO DE CRISIS ← diagrama de flujo interactivo
06 / SALA DE INVERSORES  ← preguntas difíciles
07 / DE DÓNDE SALE ESTO  ← el semestre: 10 casos → 1 manifiesto
EQUIPO
DECLARACIÓN FINAL
FUENTES
FOOTER
```

Recorrido emocional: **declaración → principios → compromisos → decisiones → protocolo → personas.**

En los primeros segundos el visitante debe entender: quiénes somos, qué defendemos, qué no haremos.

---

## 7. Header

Desktop (72px, sticky, `background: rgba(245,244,239,.92)`, `backdrop-filter: blur(16px)`, borde inferior fino, sin sombra):

```
— Línea Roja/      Nuestra Filosofía  El Código LSC Moderno  La Promesa al Usuario  Casos
  software practice  Plan de Acción de Crisis  Inversores  De dónde sale esto
```

Las cuatro secciones obligatorias usan el nombre exacto de la actividad. "software practice" va en Inter `.75rem`, `--graphite`, sin mayúsculas. La navegación completa se muestra desde 1280px; abajo de eso, botón "Menú".

El wordmark es texto en Inter 600 precedido de un trazo rojo corto (24×3px). Nada de isotipos complejos ni símbolos de IA o robots.

El enlace de la sección visible se marca con un subrayado rojo (IntersectionObserver).

Mobile: `Línea Roja/` + botón "Menú" (texto, no hamburguesa animada) que abre un panel a pantalla completa con la lista de secciones (los números 1–7 van en Inter `--graphite` con `tabular-nums`, nunca en rojo ni en mono). `aria-expanded`, cierre con Esc y al elegir enlace, foco atrapado mientras está abierto.

---

## 8. Hero (80–95vh en desktop, libre en mobile)

```
No escribimos software
a cualquier costo.
━━━━━━━━━━━━━━━━━━━━  ← línea roja que se dibuja

Construimos lo que el cliente necesita hasta donde la ética lo
permite. Este documento dice dónde termina ese punto.

[Leer el manifiesto ↓]
```

Sin kicker arriba del título ni línea de metadata abajo: el `h1` abre la página.

Composición tipográfica sobre grid. A la derecha (solo ≥1024px) puede ir **una** fotografía documental en blanco y negro ligero relacionada con el concepto (ver §16).

---

## 9. Nuestra Filosofía

Responde: *¿quiénes somos y cómo entendemos la diferencia entre hacer dinero y hacer buen software?*

**Encabezado de todas las secciones:** el `h2` es el nombre de la sección ("Nuestra Filosofía", "El Código LSC Moderno", "La Promesa al Usuario", "Casos", "Plan de Acción de Crisis", "Inversores", "De dónde sale esto", "Equipo", "Fuentes"), con la línea roja corta a la izquierda y sin texto al lado. Justo debajo, la frase editorial de la sección como subtítulo grande (tamaño H2, `<p>`), y a la derecha la intro. No hay eyebrows tipo `01 / …`.

1. Subtítulo: **"Cobrar está bien. Cobrar con trampa, no."** + intro a la derecha en desktop.
2. Declaración editorial grande:
   > Un producto que funciona solo porque el usuario no entiende lo que acepta es una deuda que paga alguien más.
3. **Ética / Moral / Deontología** en composición horizontal separada por líneas verticales (no tres tarjetas idénticas): término (sin número encima), definición corta, y "En el taller" (subtítulo `.sub`) con la aplicación práctica y la referencia al código de la ACM en texto `.meta`.
   La columna "En el taller" usa ejemplos de nuestra traducción del código ACM (`semestre.md` · A6): p. ej. Deontología → *"Callar por no hacer olas también es una decisión"* (4.1).
4. **"Dinero contra buen software, en cuatro decisiones":** las 4 situaciones del HTML original como acordeón. Al abrir, dos columnas: *Lo que empuja el dinero* (borde izquierdo rojo) / *Lo que hacemos* (borde izquierdo verde). `<details>` nativo o botón con `aria-expanded`. Las cuatro decisiones se reescriben con los casos oficiales: retención (`cancelacion`), métricas de clics contra respuestas útiles (`buscador`), comisión del 30% y pagos externos (`tienda-apps`) y rastrear empleados sin avisarles (`bossware`). La declaración editorial grande puede usar el caso del buscador: el producto empeoró mientras los números subían.
5. **"Cómo trabajamos por dentro"** (sale del caso del Rockstar): tres compromisos internos en una fila separada por líneas:
   - **No hay rockstars.** Todo PR lleva revisión y todo módulo, documentación mínima. El talento no compra impunidad.
   - **La conducta se nombra por sus efectos.** Hablamos con datos, no con adjetivos. La corrección es en privado; el reconocimiento, en público.
   - **Cualquiera puede detener una tarea.** Botón de objeción técnica: si alguien del equipo cree que algo daña al usuario, se para y se revisa (EvoPhone, P5).

---

## 10. 02 / Código LSC (sección oscura)

Subtítulo: **"Tres reglas que no negociamos."** Intro: por qué elegimos estos tres dilemas.

Los tres pilares, en este orden:

| # | Pilar | Regla |
|---|---|---|
| 01 | IA generativa | La IA propone, una persona responde. Nada generado sale sin revisión humana ni sin avisar que lo es, nadie es clonado sin su consentimiento, y usamos el modelo más pequeño que resuelva la tarea. |
| 02 | Patrones oscuros y diseño adictivo | Si el usuario no lo aceptaría viendo el cuadro completo, no lo diseñamos. Cancelar cuesta lo mismo que contratar, y no medimos el éxito en minutos atrapados. |
| 03 | Impacto ambiental | Todo lo que ponemos en producción tiene un presupuesto de recursos y una fecha de retiro. Nunca volvemos lento un equipo que funciona. |

Cada regla cierra con una línea de **respaldo** en texto normal: "Respaldo: Código de la ACM 1.2, 1.3 y 4.1." (02 → 1.1, 1.2 y 3.5; 03 → código ACM/IEEE-CS 1.03, 1.06 y 3.10), seguida de "De los casos: …" con enlaces.

Cada regla ocupa casi un bloque completo:

```
01                                   ← número enorme, Inter 600 tabular-nums, rojo sobre oscuro
IA generativa                        ← nombre del pilar en texto normal, tipo oración
La IA propone, una persona responde.

Lo que sí hacemos      │  Lo que no haremos
· …                    │  · …
━━━━━━━ (línea roja entre columnas en mobile)

[Caso real]  → tarjeta corta: el año va en el título o en la primera frase.  (ver §17)
[Demo]       → el interactivo de ese pilar, sin etiqueta "Demo · …": su título basta
```

**Interacción desktop (≥1024px):** sticky storytelling. La columna izquierda (número + título del pilar) queda fija mientras el contenido de la derecha avanza; el número cambia al entrar cada regla. **Mobile:** las reglas se apilan, sin sticky.

**Demos por pilar** (contenido del HTML original, rediseñados con este sistema):
- 01 → **Deepfakes** (`deepfakes`): caso para decidir. Un cliente pide una función para que cualquiera clone la voz y el rostro de otra persona con un minuto de audio. Opciones A/B/C; nuestra decisión: solo con consentimiento explícito y verificable de la persona clonada, marca de agua y borrado al retirar el consentimiento. Debajo, la calculadora **"¿Cuánto cuesta un gato astronauta?"** (`prompt-ia`): el usuario elige qué pedirle a la IA (pregunta de texto, 1 imagen, 4 imágenes, video de 6 s) y ve la energía estimada en Wh y su equivalencia en preguntas de texto, con las cifras y fuentes del equipo.
- 02 → **El muro de la cancelación** (`cancelacion`): flujo de cancelación clicable con la versión que pidió el CEO (7 pantallas, bot que finge fallas técnicas, botón final en gris claro) contra la versión Línea Roja (una pantalla, dos botones del mismo peso). Un contador muestra pasos y segundos de cada versión. Junto a él, **La vergüenza de confirmación** (`verguenza`): el modal de la farmacia tal como venía en el caso ("No, prefiero arriesgar mi salud…") y nuestro rediseño honesto lado a lado; tocar cada parte del original explica qué truco usa. Las maquetas se renderizan en claro dentro de la sección oscura, como un dispositivo.
- 03 → **EvoPhone** (`evophone`): interruptores de decisiones de diseño (ralentizar modelos viejos con la actualización, batería sellada, SO nuevo cada año, autoplay, imágenes sin optimizar) con un medidor que baja; mantener la nota de que es un índice ilustrativo, no una medición de emisiones. Junto al medidor, la **compuerta de rendimiento** como mini-diagrama: commit → build → granja de dispositivos → ¿regresión > 5%? → sí: no se publica.

---

## 11. 03 / Promesa al usuario

Subtítulo: **"Esto es lo que puedes exigirnos."**

Debe parecer un documento firmado: fondo `--surface`, borde `--ink`, una línea roja de 4px arriba, cláusulas numeradas ("Cláusula 1") en Inter `.meta`. Sin código de documento tipo "LRS-PROMESA · Versión 1.0".

Tres cláusulas obligatorias (texto del HTML original): **Autonomía, Dinero, Salud mental.** Cada una con: la promesa, *Cómo lo compruebas*, y un botón **"Ver en el producto"** que despliega 2–3 decisiones concretas de producto (ej. Salud mental → notificaciones apagadas por defecto, sin rachas que castigan, límite de tiempo visible). Nada de checkboxes falsos.

Cierre del documento:

```
Si no lo cumplimos: te devolvemos lo cobrado desde el incumplimiento,
lo decimos públicamente y lo corregimos en un plazo que publicamos.

Firmado por:  [6 nombres en dos columnas]
━━━━━━━━━━━━━━━━  ← línea roja de firma
Línea Roja Software · Mexicali, B.C. · 2026
```

---

## 12. 04 / Pon a prueba nuestro criterio

Casos de decisión sin puntuación ni gamificación. El objetivo es comunicar criterio, no un examen.

Formato de cada caso:

```
[Título del caso]                ← sin "Caso 0X" encima
[Situación en 2–3 líneas]

A — …
B — …
C — …

→ al elegir: "Nuestra decisión" (h4, tipo oración) + razonamiento, y por qué las otras no.
```

Cuatro casos de la lista oficial (`semestre.md`), los que no se usan como demo en otra sección:
1. **El Bossware** (`bossware`): instalar en secreto software que toma foto por webcam cada 5 minutos y registra pestañas. Opciones: hacerlo / hacerlo con aviso en letra chica / rediseñarlo para medir resultados por equipo, con aviso y consentimiento. Razonamiento con LFT 330-I, la ley de datos de 2025 y las multas a H&M y Amazon Francia.
2. **El impuesto de la tienda de apps** (`tienda-apps`): el cliente quiere que su app esconda que existe un precio más barato fuera de la tienda. Nuestra decisión y por qué: transparencia de precio donde la ley lo permite y el 30% explicado en la cotización.
3. **La degradación del buscador** (`buscador`): el cliente pide meter anuncios con el mismo formato que los resultados orgánicos para subir clics. Nuestra decisión: el anuncio siempre se ve como anuncio.
4. **El Rockstar arrogante** (`rockstar`): el mejor programador del equipo se aprueba sus propios PRs y dice que la accesibilidad es "para diseñadores débiles". Respuesta: datos, junta privada y acuerdo medible.

Selector con `role="radiogroup"` o botones `aria-pressed`, navegable con teclado.

---

## 13. 05 / Protocolo de crisis

Subtítulo: **"Cuando el problema es nuestro, la prioridad cambia."**

Dos vistas de lo mismo:

1. **Diagrama completo** (SVG generado en código, no imagen): todos los nodos y ramas visibles a la vez, incluida la ruta ambiental. Así el profesor ve el árbol entero.
2. **Recorrido interactivo:** "Inicia el incidente". El usuario elige en cada bifurcación; el nodo actual se resalta en el diagrama (borde `--ink` 2px), el camino recorrido se dibuja con trazo `--ink`, y el nodo **"Línea roja: no se oculta"** usa `--red`. Botón "Reiniciar".

Nodos y tiempos: los del HTML original (Alerta 0–15 min → Contener 0–1 h / Medir 48 h → … → Postmortem público 30 días), **reforzados con nuestra respuesta al caso de la filtración**:
- *Contener* incluye sacar el servidor de internet, rotar llaves, cerrar sesiones y dejar de almacenar lo que no debíamos guardar.
- Nuevo nodo **Investigación raíz**: qué falló de verdad (credenciales reutilizadas, sin segundo factor, datos de más, sin monitoreo).
- Nueva bifurcación **"¿Nos extorsionan?"** → *Línea roja: no pagamos.* Pagar no revierte la copia y financia el siguiente ataque; ese dinero se va a las personas afectadas.
- *Avisar* incluye a la autoridad de protección de datos y a cada persona afectada; *Reparar* incluye reembolso automático y línea de atención atendida por personas.
- El cierre de la ruta muestra la frase del equipo: **"La responsabilidad es nuestra."**
- La ruta ambiental usa la compuerta de rendimiento y las reglas de EvoPhone (P5) y de A8 (bajar el `n` por defecto, modelo más pequeño, cachear).

Debajo del diagrama, un **contador de ejemplo** con el caso real: "2.1 millones de cuentas publicadas · US$1 M exigido · US$0 pagado".

Estilo de nodo: `border: 1px solid var(--line); border-radius: 10px; background: var(--paper);` tiempo en Inter small (`tabular-nums`) arriba. Las etiquetas de ruta del SVG van en tipo oración ("Ruta ambiental"), no en mayúsculas. Nada de diagramas estilo PowerPoint, sombras ni flechas gruesas.

Mobile: el diagrama se convierte en secuencia vertical; el recorrido interactivo se mantiene.

---

## 14. 06 / Sala de inversores

Subtítulo: **"Las preguntas que nos harán."** Acordeón con las preguntas del HTML original más las nuevas y las que ya respondimos en clase: el escrutinio de la Mesa Directiva de EvoPhone y las contrarréplicas del caso del Rockstar. Sin etiquetas de origen ("Pregunta original", "Contrarréplica…") ni contador de preguntas; cada respuesta cierra con "Del caso: …". Cada respuesta: postura en una línea en negritas + argumento en 2–4 líneas. Tono firme, sin ceder.

---

## 14b. 07 / De dónde sale esto

Subtítulo: **"Diez casos, un manifiesto."** Es la prueba de que el manifiesto sintetiza el semestre (lo pide la actividad).

Línea de tiempo horizontal en desktop y vertical en mobile, con la línea roja como eje. Cada parada:

```
El Rockstar arrogante            ← h3, nombre del caso (sin número ni "CASO ·")
Código brillante, equipo roto    ← frase del caso
Lo que aprendimos                ← h4 .sub
El talento no compra impunidad.
→ Filosofía · cómo trabajamos por dentro
```

Paradas: los 10 casos de la lista oficial de `semestre.md`, con su título del caso. El traductor deontológico y el desfase ético (diseño adictivo) aparecen al final como "Herramientas que usamos", no como casos. Cada parada enlaza (ancla) a la sección del sitio que alimentó. La tabla "Cómo se conecta todo" al final de `semestre.md` define las conexiones.

**Nunca** aparecen en texto visible los códigos internos de clase (A4, A6, A7, A8, P5, Caso D, Caso E, "mapa mental", "Crisis Room"). Al lector le basta el nombre del caso; los códigos solo pueden vivir en comentarios del código o en este documento.

---

## 15. Equipo, declaración final, fuentes y footer

**Equipo:** lista separada por líneas, sin tarjetas tipo LinkedIn. Nombre completo + rol. Los nombres van **escritos en el código**, nunca editables ni en `localStorage`.

**Declaración final** (Display, centrada a la izquierda):
> El software que construimos habla de las decisiones que estamos dispuestos a tomar.
> Y también de las que no.

**Fuentes:** lista numerada pequeña con cada caso real citado (título, medio, año, enlace) y créditos de fotografías con licencia.

**Footer:**
```
Línea Roja Software
Manifiesto de Identidad Profesional · LSC 2026
[Materia] · Facultad de Ingeniería Mexicali · UABC
Construido con apoyo de herramientas de IA. Cada texto fue revisado y es defendido por el equipo.
↑ Volver arriba
```

La línea de IA no es opcional en espíritu: nuestra regla 01 exige avisar cuando algo fue generado con IA. Ocultarlo sería contradecir el manifiesto en el mismo sitio.

---

## 16. Imágenes

La actividad exige refuerzos visuales; el sitio necesita **entre 4 y 6 fotografías documentales**, cada una con función narrativa:

- Hero o Filosofía: personas usando tecnología en contexto real.
- Pilar 01: centro de datos / servidores.
- Pilar 02: persona frente a una pantalla de pago o suscripción.
- Pilar 03: residuos electrónicos (e-waste).
- Crisis (opcional): infraestructura, cables, sala de operaciones.

Fuente: **Wikimedia Commons** (CC BY / CC BY-SA / dominio público) o **Unsplash**. Guardar en `src/assets/`, optimizar con `astro:assets` (AVIF/WebP, `width`/`height`, `loading="lazy"` salvo el hero). Crédito y licencia en "Fuentes".

Tratamiento: `border-radius: 10px; filter: grayscale(.15);`. `alt` descriptivo en español.

**Prohibido:** robots, cerebros digitales, manos tocando hologramas, circuitos brillantes, stock corporativo de oficinas, renders futuristas, imágenes generadas con estética de IA.

Iconos: Lucide, trazo 1.5–2px, inline SVG. Útiles: Shield, Eye, Lock, Bot (solo si es imprescindible, preferir MessageSquare), Leaf, TriangleAlert, ArrowRight, Check, X. Nada de emojis en la interfaz.

---

## 17. Casos reales (anclaje al semestre)

Cada pilar lleva una tarjeta con un hecho real **que respalda uno de los 10 casos oficiales**, nunca un caso nuevo. Candidatos (todos a verificar):

- **IA** (`deepfakes`, `prompt-ia`): el fraude de 2024 contra Arup en Hong Kong con una videollamada deepfake (~US$25 M); las cifras de energía de la IEA (2025) que ya usó el equipo.
- **Patrones oscuros** (`cancelacion`, `verguenza`): el acuerdo de la FTC con Amazon por la cancelación de Prime (2025).
- **Ambiental** (`evophone`): *batterygate* de Apple (hasta US$500 M en EE. UU. y €25 M en Francia, 2020) y el Global E-waste Monitor 2024 (62 Mt en 2022, 22.3% reciclado formalmente).
- **Monopolio** (`tienda-apps`, `buscador`), para Filosofía o inversores: *Epic contra Apple* (2025), la multa de la UE a Apple bajo la Ley de Mercados Digitales (2025) y *Estados Unidos contra Google* (2024).

Todo dato se verifica con búsqueda web antes de publicarlo; si no se sostiene, se quita.

Formato: título en H4 con el año dentro ("Hong Kong, 2024: …"), qué pasó en 2 líneas, "Qué aprendimos:" en 1 línea, referencia numerada a Fuentes y "Del caso: …". Sin etiqueta "Caso real · año".

---

## 18. Botones

- **Primario:** `background: var(--ink); color: var(--paper); height: 48px; padding-inline: 20px; border-radius: 8px;` hover `background: var(--red)`.
- **Secundario:** transparente, `color: var(--ink)`, `border: 1px solid #C7C6BF`; hover borde `--ink`.
- **Texto:** "Leer el manifiesto ↓", subrayado al hover.

Todo interactivo con estados default / hover / focus / active / disabled.

---

## 19. Movimiento

- Microinteracción 120–180ms; elementos 200–300ms; entrada de sección 400–600ms.
- Easing: `cubic-bezier(.22,1,.36,1)`.
- Permitido: fade + translateY(20px → 0), líneas que se dibujan, el número del código que cambia, el camino del diagrama que avanza, el medidor ambiental.
- Prohibido: parallax, rotaciones, zoom continuo, elementos volando, animaciones en bucle (excepto el contador falso de la demo de patrones oscuros, que es parte del argumento).
- `prefers-reduced-motion: reduce` desactiva todo lo no esencial. El contenido debe entenderse sin animaciones y con JS desactivado (todo visible por defecto; las animaciones solo se agregan si hay JS).

---

## 20. Accesibilidad (WCAG AA)

- Contraste AA en todo texto. `--muted` solo ≥14px.
- HTML semántico: `header`, `nav`, `main`, `section` con `aria-labelledby`, un solo `h1`.
- Teclado completo: tabs con flechas, acordeones, selector de casos, diagrama, menú mobile.
- Focus visible: `outline: 2px solid var(--ink); outline-offset: 3px;` (en sección oscura, `--dark-text`).
- `aria-expanded`, `aria-pressed`, `aria-live="polite"` para feedback de decisiones.
- `alt` en todas las imágenes.
- `lang="es-MX"`.

---

## 21. Microcopy y tono

Directo, concreto, humano, defendible frente al profesor.

Prohibido: "revolucionamos", "transformamos el mundo", "potenciamos soluciones", "tecnología de vanguardia", "innovación sin límites", "en un mundo cada vez más…".

Siempre convertir:
"Creemos firmemente en la importancia de la privacidad." → **"Si no necesitamos un dato, no lo pedimos."**

Sin etiquetas: el sitio no usa eyebrows, kickers ni rótulos en mayúsculas ("DEMO · …", "CASO 01", "PREGUNTA ORIGINAL", "LRS-PROMESA"). Si un dato vale la pena, se escribe como frase en tipo oración:
- "Caso del semestre · X" / "Respalda el caso · X" → "Del caso: X" (enlace en texto normal).
- "Respaldo · ACM 1.2 · 1.3" → "Respaldo: Código de la ACM 1.2 y 1.3."
- "Caso real · 2024" → el año dentro del título o de la primera frase.
- Nada de códigos internos de clase en texto visible.

---

## 22. Prohibido

Gradientes, glassmorphism (salvo el blur leve del header), glow, blobs, partículas, grids digitales de fondo, terminales falsas, código decorativo, iconos 3D, emojis como iconos, tarjetas flotando, sombras grandes, texto con gradiente, cursores personalizados, scroll horizontal, exceso de pills, azul como acento.

---

## 23. Variables CSS

```css
:root {
  --paper: #F5F4EF;
  --surface: #ECEBE5;
  --ink: #161616;
  --graphite: #3F403C;
  --muted: #696B65;
  --line: #D8D7D0;

  --red: #C23A2F;
  --red-soft: #F6E3E0;
  --positive: #237A4B;
  --positive-soft: #E2EFE6;
  --warning: #B36A12;

  --dark: #181917;
  --dark-surface: #222320;
  --dark-text: #F3F2ED;
  --dark-muted: #A9ABA5;
  --red-on-dark: #E8574B;

  --font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --content-width: 1440px;
  --ease: cubic-bezier(.22,1,.36,1);
}
```

---

## 24. Componentes (Astro)

```
Header · MobileMenu · SectionHeader · RedLine · CaseTag ("Del caso: …")
Statement · ConceptRow · DecisionAccordion
ManifestoRule · RealCase · AICaseDemo · DarkPatternDemo · EnvDemo
PromiseClause · Contract
CaseStudy · DecisionSelector
CrisisDiagram · CrisisWalkthrough · FlowNode
InvestorQA · TeamList · Sources · Footer · Button · Tag
```

El contenido (textos, casos, nodos del diagrama, preguntas, equipo, fuentes) vive en `src/data/*.ts`, no hardcodeado dentro de los componentes.

---

## 25. Criterio de éxito

- Parece un manifiesto profesional, no una tarea.
- Funciona de 320px a monitores grandes, sin scroll horizontal.
- Lighthouse ≥ 95 en Performance, Accessibility y Best Practices.
- Se entiende sin animaciones y sin JS.
- Cualquier integrante puede explicar por qué existe cada sección.
- Las 4 secciones obligatorias de la actividad son evidentes al navegar.

Pregunta final ante cada decisión visual: **¿esto hace más clara nuestra postura?** Si no, se elimina.
