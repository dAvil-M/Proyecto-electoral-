# Historias de Usuario y Criterios de Aceptación - Guía Electoral Colombia

## Contexto
- **Proyecto:** Guía Electoral de Colombia (Taller SENA ADSO)
- **Módulos activos:** Gobernaciones, Asambleas, Alcaldías, Concejos
- **Fuera de alcance:** Presidente, Senado, Cámara, Bogotá D.C./JAL, Partidos, Nosotros
- **RNs aplicables:** RN-01 a RN-13
- **Decisiones confirmadas:** A1, A2, A3, D1, D2, R1, R2

## Pantallas identificadas
1. **Bienvenida**
2. **Menú de Resultados** (con tiles activos/deshabilitados)

---

### Módulo: Gobernaciones

**RF-01:** Como ciudadano, quiero ver el resultado de las Gobernaciones para mi región, para enterarme del ganador.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados
- **WHEN:** Selecciono el tile de Gobernaciones
- **THEN:** Se muestra la lista de candidatos con sus votos y porcentaje, ordenado de mayor a menor
- **Criterio de aceptación resumido:** Tile activo → lista renderizada en ≤ 3s; tile deshabilitado → mensaje "Datos no disponibles"

**RF-02:** Como ciudadano, quiero usar el buscador para encontrar una Gobernación específica, para localizarla rápidamente.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados con el módulo Gobernaciones visible
- **WHEN:** Ingreso nombre o código en el buscador y presiono Enter
- **THEN:** El sistema filtra la lista mostrando solo coincidencias exactas o parciales
- **Criterio de aceptación resumido:** Búsqueda por nombre o código → resultados filtrados en tiempo real

**RF-03:** Como ciudadano, quiero ver el detalle de una Gobernación seleccionada, para conocer su plataforma o perfil.
- **GIVEN:** Lista de resultados de Gobernaciones filtrada o completa
- **WHEN:** Hago clic en un Gobernación de la lista
- **THEN:** Se abre una vista de detalle con información completa del candidato Gobernación
- **Criterio de aceptación resumido:** Navegación a vista detalle → datos coherentes con RN-01..RN-13

---

### Módulo: Asambleas

**RF-04:** Como ciudadano, quiero ver el resultado de las Asambleas para mi región, para enterarme del ganador.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados
- **WHEN:** Selecciono el tile de Asambleas
- **THEN:** Se muestra la lista de candidatos con sus votos y porcentaje, ordenado de mayor a menor
- **Criterio de aceptación resumido:** Tile activo → lista renderizada en ≤ 3s; tile deshabilitado → mensaje "Datos no disponibles"

**RF-05:** Como ciudadano, quiero usar el buscador para encontrar una Asamblea específica, para localizarla rápidamente.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados con el módulo Asambleas visible
- **WHEN:** Ingreso nombre o código en el buscador y presiona Enter
- **THEN:** El sistema filtra la lista mostrando solo coincidencias exactas o parciales
- **Criterio de aceptación resumido:** Búsqueda por nombre o código → resultados filtrados en tiempo real

**RF-06:** Como ciudadano, quiero ver el detalle de una Asamblea seleccionada, para conocer su plataforma o perfil.
- **GIVEN:** Lista de resultados de Asambleas filtrada o completa
- **WHEN:** Hago clic en una Asamblea de la lista
- **THEN:** Se abre una vista de detalle con información completa del candidato Asamblea
- **Criterio de aceptación resumido:** Navegación a vista detalle → datos coherentes

---

### Módulo: Alcaldías

**RF-07:** Como ciudadano, quiero ver el resultado de las Alcaldías para mi región, para enterarme del ganador.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados
- **WHEN:** Selecciono el tile de Alcaldías
- **THEN:** Se muestra la lista de candidatos con sus votos y porcentaje, ordenado de mayor a menor
- **Criterio de aceptación resumido:** Tile activo → lista renderizada en ≤ 3s; tile deshabilitado → mensaje "Datos no disponibles"

**RF-08:** Como ciudadano, quiero usar el buscador para encontrar una Alcaldía específica, para localizarla rápidamente.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados con el módulo Alcaldías visible
- **WHEN:** Ingreso nombre o código en el buscador y presiona Enter
- **THEN:** El sistema filtra la lista mostrando solo coincidencias exactas o parciales
- **Criterio de aceptación resumido:** Búsqueda por nombre o código → resultados filtrados en tiempo real

**RF-09:** Como ciudadano, quiero ver el detalle de una Alcaldía seleccionada, para conocer su plataforma o perfil.
- **GIVEN:** Lista de resultados de Alcaldías filtrada o completa
- **WHEN:** Hago clic en una Alcaldía de la lista
- **THEN:** Se abre una vista de detalle con información completa del candidato Alcaldía
- **Criterio de aceptación resumido:** Navegación a vista detalle → datos coherentes

---

### Módulo: Concejos

**RF-10:** Como ciudadano, quiero ver el resultado de los Concejos para mi región, para enterarme del ganador.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados
- **WHEN:** Selecciono el tile de Concejos
- **THEN:** Se muestra la lista de candidatos con sus votos y porcentaje, ordenado de mayor a menor
- **Criterio de aceptación resumido:** Tile activo → lista renderizada en ≤ 3s; tile deshabilitado → mensaje "Datos no disponibles"

**RF-11:** Como ciudadano, quiero usar el buscador para encontrar un Concejo específico, para localizarlo rápidamente.
- **GIVEN:** Estoy en la pantalla de Menú de Resultados con el módulo Concejos visible
- **WHEN:** Ingreso nombre o código en el buscador y presiona Enter
- **THEN:** El sistema filtra la lista mostrando solo coincidencias exactas o parciales
- **Criterio de aceptación resumido:** Búsqueda por nombre o código → resultados filtrados en tiempo real

**RF-12:** Como ciudadano, quiero ver el detalle de un Concejo seleccionado, para conocer su plataforma o perfil.
- **GIVEN:** Lista de resultados de Concejos filtrada o completa
- **WHEN:** Hago clic en un Concejo de la lista
- **THEN:** Se abre una vista de detalle con información completa del candidato Concejo
- **Criterio de aceptación resumido:** Navegación a vista detalle → datos coherentes

---

### Trazabilidad RN-01..RN-13 ↔ Pantallas

| RN | Descripción | Pantallas afectadas | Decisión |
|----|-------------|---------------------|----------|
| RN-01 | [Descripción RN-01] | Bienvenida, Menú Resultados | A1 |
| RN-02 | [Descripción RN-02] | Menú Resultados | A2 |
| RN-03 | [Descripción RN-03] | Menú Resultados | A3 |
| RN-04 | [Descripción RN-04] | Menú Resultados | D1 |
| RN-05 | [Descripción RN-05] | Menú Resultados | D2 |
| RN-06 | [Descripción RN-06] | Bienvenida, Menú Resultados | R1 |
| RN-07 | [Descripción RN-07] | Menú Resultados | R2 |
| RN-08 | [Descripción RN-08] | Menú Resultados | — |
| RN-09 | [Descripción RN-09] | Menú Resultados | — |
| RN-10 | [Descripción RN-10] | Menú Resultados | — |
| RN-11 | [Descripción RN-11] | Menú Resultados | — |
| RN-12 | [Descripción RN-12] | Menú Resultados | — |
| RN-13 | [Descripción RN-13] | Menú Resultados | — |

*Notar: Las descripciones completas de RN-01..RN-13 deben consultarse en el documento de requisitos. Esta tabla mapea el enlace a pantallas.*

---

### Comportamiento de tiles
- **Tile activo:** Muestra datos en tiempo real, es clickeable, renderiza lista en ≤ 3 segundos.
- **Tile deshabilitado:** Muestra estado "Sin datos disponibles" o mensaje informativo, no es clickeable.

### Regresar a Resultados
- Después de ver el detalle de cualquier Gobernación/Asamblea/Alcaldía/Concejo, el botón "Regresar a Resultados" debe devolver al usuario a la lista filtrada o completa del módulo seleccionado, conservando el estado del buscador si estaba activo.

---
*Fin de historias y criterios de aceptación*