# Material del semestre — fuente de contenido

Extraído de los tableros y presentaciones del equipo en Figma. Es **nuestro propio trabajo**: se puede reutilizar, reescribir y citar dentro del sitio. Cada sección indica dónde conviene usarlo.

Todas las cifras externas ya traen su fuente en el material original; aun así, verifícalas con búsqueda web antes de publicarlas y quita la que no se sostenga.

---

## Equipo (confirmado en todos los trabajos)

Abraham Hamed Flores Cabanillas · Alexandro Fregoso Castro · Brayan Noé León Frausto · Iván Alexandro López León · Luis Fernando Cedillo Camacho · Ramón Fernando Echavarría Contreras

Carrera: Licenciatura en Sistemas Computacionales · FIM-UABC

---

## Los 10 casos que nos tocaron (lista oficial)

Estos son **los únicos casos** que el sitio usa como ejemplos. No inventes casos nuevos ni metas casos genéricos (Air Canada, FTC, etc.) como protagonistas; un dato externo solo entra si respalda uno de estos 10.

| ID en el sitio | Caso | Material del equipo |
|---|---|---|
| `cancelacion` | El muro de la cancelación (dark patterns) | Solo enunciado |
| `verguenza` | La vergüenza de confirmación (confirmshaming) | Solo enunciado |
| `buscador` | La degradación del buscador absoluto | Solo enunciado |
| `rockstar` | El Rockstar arrogante | Completo (A4) |
| `filtracion` | La filtración de infieles | Completo (Caso E · Crisis Room) |
| `tienda-apps` | El impuesto de la tienda de apps (monopolio) | Solo enunciado |
| `deepfakes` | Clonación de voz e identidad por IA | Solo enunciado |
| `bossware` | El Bossware (vigilancia corporativa) | Completo (Caso D) |
| `prompt-ia` | Un prompt de IA: 4 gatos astronautas | Completo (A8) |
| `evophone` | EvoPhone (obsolescencia forzada) | Completo (P5) |

Además usamos dos trabajos como **respaldo**, no como casos: el **Traductor deontológico (A6)** para citar el código de la ACM y el **Desfase ético · Addiction UX (A7)** para argumentar el pilar 02 y la cláusula de salud mental.

En los casos con "solo enunciado", la postura del equipo se construye a partir de las reglas del manifiesto, y los datos externos que se citen deben verificarse con búsqueda web.

---

## A4 · "En la trinchera" — Caso A: el Rockstar arrogante
**Usar en:** 01 / Filosofía ("Cómo trabajamos por dentro") y Sala de inversores.

- Caso: desarrollador senior con código brillante pero sin documentar, que rechaza todas las revisiones y maltrata a los juniors; dice que las reglas de calidad visual son "para diseñadores débiles".
- Diagnóstico del equipo: no es un problema de personalidad, es de **incentivos mal diseñados** (la organización premió velocidad y rescates heroicos, nunca mantenibilidad), identidad fusionada con el código, miedo a la exposición y analfabetismo de feedback. Descartamos "falta de capacidad técnica" y cualquier diagnóstico clínico.
- Regla de oro: **la conducta se nombra por sus efectos medibles, no por adjetivos.** No "eres arrogante", sino "llevas once semanas sin aprobar un PR ajeno".
- Impacto: factor bus = 1, deuda técnica, defectos que llegan a producción, onboarding roto; para el usuario, accesibilidad rota (sin foco de teclado ni etiquetas); para el equipo, se apaga la seguridad psicológica y se normaliza que el talento compra impunidad.
- Evidencia que usamos: 63% del core con un solo autor; 0 PRs ajenos aprobados en 11 semanas; 38 de 41 PRs propios sin revisión; integración de 9 días vs 2; 27% de tickets reabiertos vs 8%; 1 PR de juniors en 3 meses.
- Protocolo: junta privada de 30 min con agenda previa → encuadre → reconocimiento específico → hecho, impacto y petición → escucha → bifurcación según reacción → convertir el ego en activo (que él escriba la guía de documentación y enseñe la arquitectura) → acuerdo medible con fecha y consecuencia → seguimiento a 15 días. **El refuerzo se da en público; la corrección, jamás.**
- Frase útil para la defensa: *"No te pido que estés de acuerdo; te pido que el estándar se cumpla."*

**Traducción al manifiesto:** en Línea Roja no hay rockstars. Todo PR lleva revisión, todo módulo lleva documentación mínima, y la accesibilidad es un requisito, no un gusto.

---

## Caso E · Crisis Room — Filtración y extorsión
**Usar en:** 05 / Protocolo de crisis (ruta de vulnerabilidad) y Sala de inversores. **Es el caso más fuerte del semestre para el plan de crisis.**

- Caso: un atacante vulneró la base de datos de una plataforma que prometía discreción absoluta; publicó los datos de la mitad de los usuarios (2.1 de 4.2 millones de cuentas: perfiles, mensajes, contacto y pago) y exigió US$1 millón para no publicar el resto.
- Nuestra respuesta, en orden:
  1. **Contención inmediata:** sacar de internet el servidor de administración, rotar llaves y contraseñas, cerrar sesiones; dejar de almacenar datos bancarios (pasan al procesador de pagos); solicitar la baja de lo publicado; avisar a la autoridad de protección de datos y a cada persona afectada.
  2. **Investigación raíz:** servidor interno expuesto con contraseña reutilizada y sin segundo factor; se guardaban más datos de los necesarios y sin cifrar; el borrado de cuenta (que se cobraba) no borraba todo; no había monitoreo y el acceso duró semanas sin detectarse.
  3. **Compromiso ético:** reembolso automático del borrado que no se cumplió; fondo de apoyo (monitoreo de identidad, asesoría legal, apoyo psicológico); línea de atención 24 h atendida por personas; datos mínimos y cifrado; borrado verificable en máximo 30 días con constancia; auditoría externa anual publicada completa.
  4. **No pagar el rescate:** pagar no revierte nada (los datos ya se copiaron), financia nuevos ataques; ese dinero va al fondo de apoyo. Se prepara a cada usuario asumiendo que la otra mitad puede publicarse.
- Cierre: *"La responsabilidad de este incidente es nuestra."* Las fallas fueron decisiones propias.

**Traducción al manifiesto:** la ruta de vulnerabilidad del diagrama de crisis debe incluir el nodo **"¿Nos extorsionan?" → No pagamos; el recurso va a las personas afectadas**, y el nodo **"Asumimos la responsabilidad en público"**.

---

## A6 · El traductor deontológico — Código de Ética de la ACM, bloques 3 y 4
**Usar en:** 01 / Filosofía (deontología con ejemplos reales) y en el respaldo normativo de cada regla.

- El código de la ACM: 4 secciones, 24 preceptos, redactado para abogados y usado por programadores. Nosotros tradujimos el bloque 3 (liderazgo) y el 4 (cumplimiento).
- 3.1 Si lideras el repo, el sprint o el deploy, pones las reglas por escrito.
- 3.2 Diseña herramientas que quiten trabajo pesado, no que conviertan al usuario en un operador vigilado.
- 3.3 Recursos de la empresa con uso definido y documentado.
- 3.4 Pregúntale a quien va a usar el sistema antes de programarlo (el almacenista, no solo el gerente).
- 3.5 **Tu interfaz no debe humillar, excluir ni manipular.** Ejemplo de violación: esconder el botón de cancelar tras cinco pantallas.
- 3.6 Documentar también es capacitar.
- 4.1 **Callar por no hacer olas también es una decisión.** Ejemplo: aprobar un PR con contraseñas en texto plano para no quedar mal.
- 4.2 Romper el código cuesta membresía, contrato y reputación.
- Qué hacer cuando la empresa pide algo contrario al código (*"Sácalo el viernes aunque los datos viajen sin cifrar"*): 1) documentar el riesgo por escrito, 2) escalar a quien puede detener el despliegue (2.5), 3) negarse a firmar lo que se sabe roto (2.6), 4) si obligan, el 4.1 pide no callar.
- Síntesis: *"El código solo sirve si alguien lo defiende cuando cuesta trabajo defenderlo."*

---

## A7 · El desfase ético — Tema C: Addiction UX
**Usar en:** Pilar 02 / Patrones oscuros, Cláusula de Salud mental y Sala de inversores.

- Qué es: productos diseñados para maximizar tiempo de uso explotando sesgos: recompensas variables, scroll infinito, autoplay, rachas, notificaciones de reenganche, pruebas A/B que eligen el diseño más "pegajoso".
- Casos reales que citamos: Facebook Files (2021), documentos internos sobre efectos de Instagram en adolescentes; más de 40 fiscales estatales de EE. UU. demandaron a Meta (2023) por funciones adictivas dirigidas a menores; el creador del scroll infinito expresó públicamente su arrepentimiento.
- Regla antigua: ACM 1.1 (bienestar humano), apoyada por 1.2 (evitar daño físico y mental) y 3.1. El código es de 1992, actualizado en 2018: anterior a la IA generativa masiva (2022).
- El punto ciego: *"El código pide promover el bienestar, pero no prohíbe diseñar para explotar vulnerabilidades cognitivas cuando el daño es lento y el modelo de negocio lo premia."*
- Las excusas corporativas que identificamos (útiles como "lo que diría la competencia"): "el usuario decide cuánto tiempo pasa"; "optimizamos engagement, no adicción"; "los términos dicen mayores de 13" (sin verificación); "ofrecemos herramientas de bienestar" (apagadas por defecto); "no hay evidencia causal concluyente"; "el algoritmo aprendió solo".
- Nuestras propuestas: prohibir dark patterns y scroll infinito para menores; defaults seguros (autoplay apagado, límite nocturno); métricas de bienestar dentro de los KPIs; auditorías externas de diseño persuasivo.

**Traducción al manifiesto:** la regla 02 debe cubrir dark patterns **y** diseño adictivo. Las "excusas corporativas" pueden ser un componente interactivo: el usuario toca la excusa y aparece nuestra respuesta.

---

## Caso D · Bossware (mapa mental)
**Usar en:** Caso interactivo de datos/vigilancia (sustituye o complementa "ubicación para publicidad") y en la decisión de Filosofía "rastrear empleados sin avisarles".

- Orden del caso: instalar software espía en secreto, foto por webcam cada 5 minutos y registro de pestañas.
- Escala: Gartner reportó que los grandes empleadores que vigilan se duplicaron a 60% con la pandemia; ExpressVPN, 78–80% de empleadores vigila y 54% de empleados renunciaría.
- Ya existe: Crossover WorkSmart (webcam cada 10 min), Time Doctor (capturas cada 3 min), Teleperformance Colombia (cámaras con IA en casa).
- Costo legal: Chetu (Países Bajos) ~€75,000 por despedir a alguien que no prendió la webcam 8 h; H&M (Alemania) €35.3 M por perfilar empleados; Amazon Francia, multa de la CNIL de €32 M, reducida a €15 M; despidos con base en datos de monitoreo en Wells Fargo e IAG.
- Costo humano: APA 2023, 56% de monitoreados reporta estrés vs 40% de no monitoreados.
- Otro camino: Microsoft quitó nombres de usuario de Productivity Score (mide equipos, no personas); Google Project Maven, ~4,000 firmas: la negativa colectiva se negocia.
- Marco: LFT art. 330-I (supervisión proporcional, cámaras solo extraordinariamente); nueva ley de datos 2025 (aviso de privacidad y consentimiento informado); ACM/IEEE 1.03 y 1.04; AI Act de la UE prohíbe reconocer emociones de trabajadores (2025).
- Postura: no somos solo ejecutores de órdenes; "solo seguía órdenes" no exime; redirigir: documentar, citar la ley y proponer medir resultados por equipo; actuar en colectivo.

---

## A8 · El costo oculto de la nube — Caso A: un prompt de IA
**Usar en:** Pilar 01 / IA generativa (su costo físico) y Pilar 03 / Impacto ambiental. Ideal para el interactivo ambiental.

- Pregunta: ¿qué cuesta pedirle a un modelo 4 imágenes de un gato astronauta frente a una búsqueda de texto?
- Ruta física: dispositivo → antena → fibra y cables submarinos → centro de datos → racks de GPUs → enfriamiento (aquí se evapora agua) → regreso. Alimentado por la red eléctrica (~30% carbón) y por hardware que se renueva en ciclos cortos.
- Cifras: prompt de texto ≈ 0.24–0.3 Wh; una imagen ≈ 1.35 Wh (mediana) a 2.9 Wh (promedio); 4 imágenes ≈ 5.4–11.6 Wh = 18 a 39 veces una pregunta de texto; video de 6 s ≈ 115 Wh. Agua: Google reporta 0.26 mL directos por prompt; UC Riverside estimó 500 mL por cada 5–50 prompts contando la electricidad. CO₂ ≈ 1.3 g por imagen vs 0.03–0.13 g por prompt de texto. Centros de datos: 415 TWh en 2024 → 945 TWh proyectados en 2030 (IEA). Modelos de razonamiento: de 0.31 a 3.91 Wh por consulta. Cálculo del equipo: 1 millón de personas pidiendo sus 4 gatos al día = 11.6 MWh diarios.
- La idea central: *el costo no lo decide el usuario, lo decide quien diseña el sistema.* Un `n=4` en una llamada a la API es 4 veces el agua y la energía.
- Prácticas de software verde: 1 imagen por defecto (no 4); el modelo más pequeño que resuelva la tarea; cachear y reutilizar; mostrar al usuario el costo estimado; cargas pesadas en horarios y regiones con energía limpia.
- Postura en el debate: aunque el hardware sea más eficiente, el consumo total crece (paradoja de Jevons). Contra "un prompt gasta lo que unos segundos de TV": pequeño × miles de millones de usos = nuevas centrales, presión sobre el agua local y más e-waste.
- Fuentes del equipo: IEA (2025) *Energy and AI*; Luccioni, Jernite y Strubell (2024) *Power Hungry Processing*, ACM FAccT; Google (2025) sobre Gemini; Li et al., UC Riverside, *Making AI Less Thirsty*; MIT Technology Review (2025); UNITAR/ITU (2024) *Global E-waste Monitor*.

**Traducción al manifiesto:** la regla 01 incluye que la IA también tiene costo físico: usamos el modelo más pequeño que resuelva la tarea y no generamos de más por defecto.

---

## Práctica 5 · EvoPhone — Plan de Rescate Ético
**Usar en:** Pilar 03 / Impacto ambiental, ruta ambiental del protocolo de crisis, Sala de inversores ("¿cómo ganan dinero?").

- Caso: empresa cuyo modelo de negocio es volver lentos sus propios teléfonos cada año con un nuevo sistema operativo; equipos sellados, crunch permanente e ingenieros obligados a programar la ralentización.
- Diagnóstico: *"EvoPhone no vende teléfonos. Vende su fecha de caducidad."* Dos frentes (laboral y ambiental), una sola causa.
- Lo que está en juego: 62 Mt de residuos electrónicos en 2022, solo 22.3% reciclado formalmente (Global E-waste Monitor 2024); batterygate: Apple pagó hasta US$500 M en EE. UU. y €25 M de multa en Francia (2020); UE: 7 años de refacciones y 5 de actualizaciones (Reglamento 2023/1670, desde junio 2025); baterías reemplazables desde febrero de 2027 (Reglamento 2023/1542).
- Dato que cambia la estrategia: **~80–85% de las emisiones de un smartphone ocurren al fabricarlo.** El teléfono más verde es el que no hay que fabricar.
- Propuestas técnicas: **compuerta de rendimiento en CI** (si un modelo viejo empeora más de 5%, el release no sale); granja de dispositivos con teléfonos de hasta 7 años; perfiles por hardware (un modelo viejo recibe un SO ligero, nunca uno lento); batería transparente (si se limita el rendimiento, se avisa y el usuario decide); actualizaciones delta en horarios de menor intensidad de carbono.
- Propuestas laborales: tope de 40 h; si las horas extra pasan de 10% dos sprints seguidos, el alcance se recorta solo; pago de ley (LFT arts. 67 y 68); NOM-035; software de gestión que **mide equipos, no personas**; **botón de objeción técnica** con un comité de ética con poder de veto y protección contra represalias.
- Compromiso no negociable: *"Ningún LSC volverá a programar la ralentización de un teléfono."*
- Respaldo deontológico (ACM/IEEE-CS): 1.03, 1.06, 3.10, 5.05, 5.07, 5.11 y 5.12.
- Escrutinio de la Mesa Directiva y nuestras respuestas: "venderemos menos" → menos unidades, más ingreso por teléfono durante su vida; "nos quedamos atrás" → funciones cada trimestre para toda la base; "lo laboral es muy suave" → son topes medibles y un veto, no pláticas; "lo modular sube el costo" → baja garantías y abre ingresos por refacciones (Fairphone lo demostró).
- Cierre: *"Un teléfono que dura. Un equipo que descansa."*

---

## Casos con solo enunciado

### `cancelacion` · El muro de la cancelación
**Enunciado:** el CEO ordena que cancelar requiera pasar por 7 pantallas confusas, hablar con un bot que simule retrasos técnicos y esconder el botón final en texto gris claro, porque el índice de cancelación es "muy alto".
**Usar en:** Pilar 02 (demo principal) y cláusula de Dinero.
**Postura:** cancelar cuesta lo mismo que contratar: mismos pasos, mismo tamaño de botón. Si la gente se va, se arregla el producto, no la salida. Respaldo: ACM 3.5 (A6 ya usaba este ejemplo: esconder el botón de cancelar tras cinco pantallas). Dato externo candidato, a verificar: el acuerdo de la FTC con Amazon por el proceso de cancelación de Prime (2025).

### `verguenza` · La vergüenza de confirmación
**Enunciado:** una farmacia en línea con suscripción mensual; para cerrar la ventana de cobro el usuario debe pulsar "No, prefiero arriesgar mi salud, pagar más caro y ser irresponsable". **El reto del caso es rediseñar el modal** para promover la suscripción de forma honesta, sin culpa ni manipulación.
**Usar en:** Pilar 02 (demo antes/después: el modal original y nuestro rediseño) y cláusula de Salud mental.
**Postura:** se puede vender la suscripción con beneficios reales y verificables (precio, ahorro, cada cuándo llega, cómo se cancela); el rechazo dice "No, gracias" y pesa lo mismo que aceptar. En salud, usar el miedo para vender es doblemente grave.

### `buscador` · La degradación del buscador absoluto
**Enunciado:** basado en la evolución de Google Search: de entregar la respuesta más limpia y útil a llenar la primera página con enlaces patrocinados, anuncios disfrazados de respuestas y spam generado por IA, para satisfacer métricas de clics.
**Usar en:** 01 / Filosofía (el ejemplo central de "dinero contra buen software") y Pilar 01 (la IA usada para producir spam).
**Postura:** cuando la métrica de negocio (clics) se separa de la métrica del usuario (encontrar la respuesta), el producto se degrada aunque los números suban. Un anuncio siempre se ve como anuncio. Dato externo candidato, a verificar: el fallo de 2024 en *Estados Unidos contra Google* que determinó monopolio en búsqueda, y los remedios de 2025.

### `tienda-apps` · El impuesto de la tienda de apps
**Enunciado:** un monopolio obliga a todos los desarrolladores a usar exclusivamente su pasarela de pago, con comisión inamovible del 30%, y prohíbe a los LSC programar botones que lleven a pagos externos.
**Usar en:** 01 / Filosofía (una de las decisiones) y Sala de inversores. Es nuestro ejemplo de **monopolios**, uno de los dilemas que menciona la actividad.
**Postura:** cumplimos la ley y los contratos, pero no escondemos al usuario el precio real ni sus opciones donde la ley permite mostrarlas; documentamos el costo del 30% en la cotización del cliente y apoyamos los canales legales para cambiar la regla. Datos externos candidatos, a verificar: *Epic Games contra Apple* (orden de 2025 sobre enlaces a pagos externos) y la Ley de Mercados Digitales de la UE con su multa a Apple (2025).

### `deepfakes` · Clonación de voz e identidad por IA
**Enunciado:** el código habla de "honestidad", pero ¿qué pasa cuando un LSC programa un modelo que permite a cualquiera usurpar la voz y el rostro de otra persona sin su consentimiento explícito?
**Usar en:** Pilar 01 (caso principal del pilar de IA).
**Postura:** no construimos clonación de voz o rostro sin consentimiento explícito y verificable de la persona clonada; todo contenido sintético lleva marca de agua y aviso; el consentimiento se puede retirar y el modelo de esa persona se borra. Respaldo: ACM 1.2 (evitar daño) y 1.3 (honestidad); como en A7, el código es anterior a la IA generativa y aquí se nota el punto ciego. Dato externo candidato, a verificar: el fraude de 2024 en Hong Kong con una videollamada deepfake que costó unos US$25 M a la firma Arup.

---

## Cómo se conecta todo con los 3 pilares

| Sección | Casos que la respaldan |
|---|---|
| 01 · Filosofía | `buscador` (dinero contra buen software), `tienda-apps` (monopolio), `rockstar` (cómo trabajamos por dentro), A6 |
| Pilar 01 · IA generativa | `deepfakes` (caso principal), `prompt-ia` (costo físico), `buscador` (spam generado por IA) |
| Pilar 02 · Patrones oscuros y diseño adictivo | `cancelacion` (demo principal), `verguenza` (rediseño del modal); respaldo A7 |
| Pilar 03 · Impacto ambiental | `evophone`, `prompt-ia` |
| Promesa al usuario | Autonomía: `bossware`, `deepfakes` · Dinero: `cancelacion`, `tienda-apps` · Salud mental: `verguenza` (respaldo A7) |
| Plan de crisis | `filtracion` (ruta de vulnerabilidad), `evophone` (ruta ambiental) |
| Sala de inversores | `evophone` (escrutinio), `rockstar` (contrarréplicas), `filtracion` (no pagar), `tienda-apps`, `cancelacion` |
