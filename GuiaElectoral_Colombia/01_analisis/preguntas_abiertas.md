# Preguntas Abiertas - Guía Electoral Colombia

## Contexto
- Taller independiente SENA ADSO
- Alcance: 4 módulos (Gobernaciones, Asambleas, Alcaldías, Concejos)
- Pantallas: Bienvenida, Menú de Resultados
- RN aplicables: RN-01..RN-13
- Decisiones confirmadas: A1, A2, A3, D1, D2, R1, R2

---

## 1. Buscador en Menú

**Pregunta:** ¿El componente de buscador en la pantalla Menú de Resultados es un campo de texto libre con sugerencias automáticas, o un selector de tiles con funcionalidad de filtro? ¿Qué comportamiento se espera al no encontrar coincidencias?

**Contexto:** Se definen 4 módulos activos, cada uno con su tile en el menú. La interacción con el buscador debe ser consistente en todos los módulos.

---

## 2. Comportamiento "Regresar a Resultados"

**Pregunta:** Al hacer clic en "Regresar a Resultados" después de ver el detalle de un candidato, ¿el sistema debe:
(a) Volver a la lista completa del módulo seleccionado, o
(b) Volver a la lista filtrada por el último término de búsqueda, o
(c) Preguntar al usuario si desea volver a la lista completa o filtrada?

**Adicional:** ¿Se debe conservar el estado del buscador (texto ingresado, filtros activos) al regresar, o se debe limpiar automáticamente?

---

## 3. Etiquetas del Menú

**Pregunta:** ¿Cómo deben etiquetarse los tiles del Menú de Resultados para los 4 módulos activos? Opciones propuestas:
- "Gobernaciones", "Asambleas", "Alcaldías", "Concejos"
- Nombres abreviados o iconos-only con tooltip
- Incluir estado activo/deshabilitado en la etiqueta visual

**Contexto:** Los tiles pueden estar activos (con datos disponibles) o deshabilitados (sin datos). La etiqueta debe reflejar esto sin sobrecargar la interfaz.

---

## 4. Ubicación del Disclaimer

**Pregunta:** ¿Dónde debe ubicarse el disclaimer o pie de página que indica "Datos oficiales de la Guía Electoral - SENA ADSO" o similar?
- Opciones: fijo en la parte inferior de la pantalla, en un modal de "Acerca de", o en la pantalla de Bienvenida.
- ¿El disclaimer debe ser visible en todos los módulos o solo en la pantalla principal?

**Contexto:** El alcance confirma que está fuera de alcance la sección "Nosotros", lo que sugiere que la información institucional debe ser mínima y estratégica.

---

## 5. Uso de Nombres Reales vs. Ficticios

**Pregunta:** ¿Los nombres de candidatos, Gobernaciones, Asambleas, Alcaldías y Concejos en la interfaz deben ser nombres reales extraídos de los resultados oficiales, o nombres ficticios/genéricos para efectos de demostración?

**Impacto en RN:**
- Si se usan nombres reales: requiere validación contra fuente oficial, posible actualización automática.
- Si se usan nombres ficticios: permite flexibilidad en el desarrollo, pero debe aclararse en la documentación que son datos de ejemplo.

**Subpregunta:** ¿El esquema JSON propuesto debe llevar la marca "Datos de ejemplo - no oficiales" en todos los campos, o solo en la sección de metadatos?

---

## 6. Tiles deshabilitados

**Pregunta:** Cuando un tile del Menú de Resultados está deshabilitado (sin datos disponibles), ¿mostrar:
- Un mensaje genérico "Sin datos disponibles"
- El nombre del módulo en gris con un ícono de advertencia
- Un tooltip al pasar el cursor con la razón ("Datos pendientes de carga" / "Fuera de alcance")

**Contexto:** Esto afecta la usabilidad y la expectativa del usuario al interactuar con el menú.

---

## 7. Decisiones confirmadas (A1, A2, A3, D1, D2, R1, R2)

**Pregunta:** ¿Las decisiones A1, A2, A3, D1, D2, R1, R2 definen restricciones específicas sobre el comportamiento del buscador, visibilidad de tiles o navegación que aún no están reflejadas en las historias de usuario? ¿Requieren definición de criterios de aceptación adicionales?

**Llamado a la acción:** El equipo debe validar si estas decisiones están cubiertas por las RF propuestas o si generan nuevas historias.

---
*Fin de preguntas abiertas*