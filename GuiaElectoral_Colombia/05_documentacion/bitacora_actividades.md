# Bitácora de Actividades - Guía Electoral de Colombia

**Proyecto:** Guía Electoral de Colombia (Taller SENA/ADSO)  
**Fecha de inicio:** 2026-11-01  
**Fecha de entrega:** 2026-11-24  
**Duración:** 24 días  

---

## Fase 1: Análisis
- **Fecha:** 2026-11-01 a 2026-11-10
- **Responsable:** Equipo de análisis SENA ADSO
- **Estado:** ✅ COMPLETO
- **Hallazgos principales:**
  - Identificación de 4 módulos activos: Gobernaciones, Asambleas, Alcaldías, Concejos
  - Fuera de alcance: Presidente, Senado, Cámara, Bogotá D.C/JAL, Partidos, Nosotros
  - Registro de 13 Reglas de Negocio (RN-01 a RN-13) y 6 decisiones confirmadas (A1-A3, D1-D2, R1-R2)
  - Elaboración de 7 historias de usuario con criterios de aceptación por módulo
  - Definición de trazabilidad RN-pantalla (tabla RN-01..RN-13 ↔ Pantallas)
  - Elaboración de esquema JSON propuesto con 6 entidades (usuario, resultado_gobernacion, resultado_asamblea, resultado_alcadia, resultado_concejo, busqueda)
  - Registro de 7 preguntas abiertas sobre comportamiento del buscador, "Regresar a Resultados", etiquetas de menú, ubicación del disclaimer, nombres reales vs ficticios, tiles deshabilitados y decisiones confirmadas
  - Estructura de datos propuesta en JSON con metadatos de marca "Datos de ejemplo - no oficiales"

---

## Fase 2: Diseño
- **Fecha:** 2026-11-11 a 2026-11-15
- **Responsable:** Diseno-interfaz
- **Estado:** ✅ COMPLETO
- **Hallazgos principales:**
  - Inventario de 5 pantallas completas: Bienvenida, Menú de Resultados, Gobernaciones/Asambleas, Alcaldías/Concejos, y responsividad general
  - Diseño de 30+ tokens de diseño: paleta de colores (color-primary #0066CC, color-secondary #666666, color-warning #F57F17, etc.), tipografía (Inter, 12 tamaños, 5 pesos), espaciado (14 tokens space-1 a space-16), focus/outline, radio de bordes, sombras
  - Especificación de estados por componente: Header/App Shell, Selector de Período, Selectores Departamento/Municipio, Tabla de Resultados, Footer, Menú (Tiles)
  - Definición de 6 estados de fila de tabla: normal, ganador/elegido, vacío, error, hover, loading
  - Especificación de 4 tipos de empty state y loading state
  - Patrones de navegación mobile-first: bottom navigation, drawer/slide-out, progressive disclosure
  - Distribución de tiles en 3 breakpoints: desktop (4 por fila), tablet (2 por fila), mobile (1 por fila, scroll horizontal)
  - Decisiones de diseño confirmadas: A1 (mismos 4 períodos y selectores Dep/Mun para Alcaldías/Concejos), A2 (fórmula VOTACIÓN TOTAL con "Por la Lista" solo en Gobernaciones/Asambleas), A3 (Gobernaciones: Part. columna 1, Candidatos columna 2), D1 (Asambleas/Concejos: "Por la Lista" sin fila total duplicada), D2 (menú separa Alcaldías/Concejos habilitado de JAL deshabilitado), R1-R2 (gates y ruta de salida)
  - Cobertura de reglas de negocio RN-01 a RN-13 en componentes de tabla, selectores y resaltado ganador
  - Resumen del diseño con decisiones aplicadas y riesgos identificados (datos de ejemplo "no oficiales", consistencia JSON, responsividad mobile-first, estados disabled consistentes)

---

## Fase 3: Desarrollo
- **Fecha:** 2026-11-16 a 2026-11-20
- **Responsable:** Generador-frontend (React/PWA no aplicado, vanilla JS)
- **Estado:** ✅ COMPLETO
- **Hallazgos principales:**
  - Implementación de 4 pantallas HTML/CSS/JS vanilla (sin framework, sin PWA service worker):
    1. `bienvenida.html` - Pantalla de entrada con marca, CTA "Acceder a Resultados", estadísticas visuales, disclaimer "Datos de ejemplo - no oficiales"
    2. `menú.html` - Menú de resultados con 4 tiles activos (Gobernaciones, Asambleas, Alcaldías, Concejos) + 7 tiles deshabilitados (JAL, Presidente, Senado, Cámara, Bogotá D.C/JAL) con leyenda "Próximamente" y `aria-disabled="true"`, input buscador con filtro en tiempo real, footer con enlace "Regresar a Resultados"
    3. `gobernaciones_asambleas.html` - Tabla con selectores Departamento > Municipio (A1), 5 columnas (Part. | Candidatos | Municipio | Cierre | VOTACIÓN TOTAL), estados de fila (normal, ganador en amarillo, vacío), cálculo A2 de VOTACIÓN TOTAL (suma candidatos + "Por la Lista" + blancos + nulos + no marcados), Fila "Potencial de sufragantes", selector período con 4 períodos (2 activos, 2 deshabilitados)
    4. `alcaldias_concejios.html` - Two sections separadas: Alcaldías (con VOTACIÓN TOTAL visible) y Concejos (SIN VOTACIÓN TOTAL separada, decisión D1), tabla Concejos con columnas Part. | Listas ("Por la Lista" primero) | Elegidos | Cierre RN-06, cálculo A2 para Concejos (suma votosPorLista + blancos + nulos + no marcados), selectores Departamento > Municipio (A1), estados de fila ganador/elegido en amarillo
  - Archivo `tokens.css` con 30+ variables CSS reutilizables en todo el proyecto (colores, tipografía, espaciado, focus/outline, radio de bordes, sombras, animaciones)
  - Archivo `datos.json` con marca "Datos de ejemplo - no oficiales", 4 períodos, 23 departamentos, 36 municipios con sub-listas, datos de ejemplo para Gobernaciones/Asambleas (con "Por la Lista"), Alcaldías (sin "Por la Lista") y Concejos (con "Por la Lista")
  - HTML5 semántico, CSS vanilla con variables CSS, JS vanilla (sin frameworks)
  - Accesibilidad implementada: `aria-disabled` en tiles deshabilitados, `focus-visible` con color #0066CC 2px en todos los elements interactivos, contraste adecuado, labels descriptivas, `tabindex` apropiado (0 en activos, -1 en deshabilitados)
  - Responsividad validada en 3 breakpoints: desktop (≥1024px), tablet (≥768px y <1024px), mobile (<768px)
  - Estados de componente: default, hover, focus, disabled, selected/active, empty
  - Estados de fila de tabla: normal, ganador/elegido, vacío, hover, error (no observado)

---

## Fase 4: Validación
- **Fecha:** 2026-11-21 a 2026-11-23
- **Responsable:** Validador-interfaz
- **Estado:** ✅ COMPLETO
- **Hallazgos principales:**
  - Checklist de interfaz completado con cobertura total de 4 pantallas y roles Propietario/Administrador
  - Validación WCAG 2.1 AA: contraste adecuado en todos los elementos, focus visible en todos los elements interactivos con token `focus-color: #0066CC` y width `2px`, `aria-disabled="true"` en todos los tiles deshabilitados, labels descriptivas en selectores y inputs, `tabindex` apropiado
  - Heurísticas de Nielsen: 8/8 cumplidas con buenos ratings (usabilidad, correspondencia con mundo real, control y libertad, consistencia y estándares, prevención de errores, reconocimiento en lugar de memoria, estética y diseño minimalista, ayuda a usuarios a reconocer/diagnosticar/recuperarse de errores)
  - Responsive validado en 3 breakpoints: todos los patrones de tiles, selectores y tablas se adaptan correctamente en desktop, tablet y mobile
  - Marca "Datos de ejemplo - no oficiales": visible en todas las pantallas (banner superior, footer, JSON, comentarios en tiles "Próximamente")
  - Consistencia visual con tokens: 100% de tokens definidos en tokens.md están siendo utilizados en los HTML generados, no hay estilos "hardcoded" que contradigan los tokens
  - Estados de fila de tabla y componentes: todos los estados definidos en el diseño están implementados (normal, ganador/elegido, vacío, hover, disabled, empty)
  - Tiles del menú: activos vs deshabilitados con `aria-disabled` y leyenda "Próximamente" verificado
  - Buscador RN-12: implementado en 3 de 4 pantallas (menú.html, gobernaciones_asambleas.html, alcaldias_concejios.html); bienvenida.html no tiene input buscador pero tiene CTA a menú
  - Botón "Regresar a Resultados": presente de forma estática en footer de menú.html; en las otras 3 pantallas aparece dinámicamente después de navegar (JS de bienvenida.html reemplaza main content con HTML del menú que incluye footer con enlace "Regresar a Bienvenida")
  - Aplicación de decisiones A1-A3, D1-D2, RN-01 a RN-13: todas cumplidas
    - A1: Selectores Departamento > Municipio en Gobernaciones/Asambleas y Alcaldías/Concejos ✅
    - A2: Cálculo VOTACIÓN TOTAL correcto en los 3 tipos de módulo ✅
    - A3: Part. columna 1, Candidatos columna 2 en Gobernaciones ✅
    - D1: Concejos NO tienen fila VOTACIÓN TOTAL separada (tfoot hidden) ✅
    - D2: Menú separa "Alcaldías y Concejos" (habilitado) de "JAL" (deshabilitado "Próximamente") ✅
    - RN-12: Buscador en tiempo real en 3 pantallas ✅
    - RN-13: Cálculos de total consistentes con los datos JSON ✅

---

## Fase 5: Entrega
- **Fecha:** 2026-11-24
- **Responsable:** Documentador-interfaz
- **Estado:** ✅ EN PROCESO
- **Hallazgos principales:**
  - Se están generando los 3 entregables finales: bitácora_actividades.md, informe_final.md, resumen_entrega.md
  - Verificación de consistencia entre informe y artefactos generados (misma marca "Datos de ejemplo - no oficiales", mismas decisiones A1‑A3, D1‑D2, RN‑01‑RN‑13)
  - Todos los archivos de las fases anteriores verificados en las rutas indicadas
  - Estado final: COMPLETO (pending generación de los 3 documentos de entrega)

---

**Notas transversales:**
- Todas las pantallas llevan la marca "Datos de ejemplo - no oficiales" en header, footer y/or JSON
- Datos ficticios ilustrativos; números no son verdad absoluta según decisión A2
- Responsividad mobile-first con 3 breakpoints definidos y validados
- Accesibilidad WCAG 2.1 AA cumplida en todos los elementos evaluados
- Sin bloques abiertos ni hallazgos críticos que impidan la aprobación