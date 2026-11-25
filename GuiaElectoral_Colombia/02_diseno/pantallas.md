# Especificación de Pantallas - Guía Electoral de Colombia

## 1. Pantalla de Bienvenida

- **Objetivo**: Punto de entrada de la aplicación, muestra marca y CTA para acceder a resultados
- **Distribución**:
  - **Header**: Marca "Guía Electoral de Colombia" a la izquierda, tamaño `font-size-xxl` peso 700 `color-primary`
  - **Contenido central**: 
    - Subtítulo: "Consulta de resultados electorales" tamaño `font-size-lg` `color-secondary`
    - CTA principal: Botón "Acceder a Resultados" tamaño `font-size-md` peso 600, fondo `color-primary`, color `color-on-primary` blanco, radio `radius-md`, altura `space-4`
    - Disclaimer inferior: "Datos de ejemplo - no oficiales" tamaño `font-size-xs` color con opacidad 0.6
  - **Footer**: Minimal, solo marca o vacío
- **Datos ficticios**: Ejemplo "Período: Oct-Dic 2023" como muestra
- **Responsive**:
  - Desktop: Contenedor ancho 1200px, contenido centrado con márgenes `space-8`
  - Tablet: Contenedor ancho 768px, layout apilado verticalmente
  - Mobile: Width full, padding laterales `space-4`, CTA full-width

## 2. Menú de Resultados (Pantalla Inicial después de Bienvenida)

- **Objetivo**: Mostrar tiles de acceso a los 4 módulos activos y tiles deshabilitados
- **Distribución de tiles** (desktop 1200px):
  - Fila 1: Gobernaciones | Alcaldías
  - Fila 2: Asambleas | Concejos
- **Distribución de tiles** (tablet 768px):
  - Columna única, 1 tile por fila
- **Distribución de tiles** (mobile 375px):
  - Scroll horizontal de tiles, cada tile ocupa ancho completo uno por vez
- **Estilo de tiles**:
  - **Activos**: Fondo `color-background`, borde `color-divider` 1px, texto `color-on-dark` peso 500, altura `space-16`
  - **Deshabilitados**: Fondo `color-surface`, borde `color-divider` 1px, opacity 0.7, leyenda "Próximamente" en centro-bottom, cursor not-allowed
- **Barra de búsqueda** (arriba del menú o dentro):
  - Campo input placeholder "Buscar departamento, municipio o partido..."
  - Botón lupa `radius-full`, tamaño `space-4`
  - En mobile: input full-width, botón debajo o icono que expande input
- **Enlace "Regresar a Resultados"** (footer): Texto link `color-primary`, tamaño `font-size-sm`, aparece después de navegar a un módulo

## 3. Gobernaciones y Asambleas (Pantalla Completa)

- **Estructura**:
  - **Barra superior**: Selector de período (left) | Botón "Actualizar" (right)
  - **Selectores**: 
    - Departamento (selector full-width o dropdown)
    - Municipio (selector full-width o dropdown, filtrado por departamento)
  - **Tabla de resultados**: 
    - Columnas: Part. | Candidatos | [Municipio] | Cierre (blancos/nulos/no marcados) | Total
    - Fila "Votación Total" al final
    - Filas con resaltado ganador/elegido en amarillo `color-warning`
- **Contenido de ejemplo**:
  - Datos ficticios por departamento/municipio
  - Números ilustrativos (no se deben usar como verdad absoluta según A2)
- **Responsive**:
  - **Desktop**: Tabla ancho completo, columnas fijas, scroll horizontal si overflow
  - **Tablet**: Columnas se apilan, "Municipio" puede ocultarse o volverse optional
  - **Mobile**: 
    - Selectores full-width, dropdown
    - Tabla: Columnas "Part." y "Candidatos" siempre visibles, otras columnas en accordion o swipe
    - Fila "Votación Total" siempre visible al final

## 4. Alcaldías y Concejos (Pantalla Completa)

- **Estructura**:
  - **Barra superior**: Selector de período (left) | Botón "Actualizar" (right)
  - **Selectores**: Departamento y Municipio (mismo estilo que Gobernaciones)
  - **Tabla de resultados simplificada**:
    - Columnas: Part. | Candidatos | Cierre RN-06 (blancos/nulos/no marcados)
    - **Sin columna municipio** (decisión D1)
    - Sin fila "Votación Total" (decisión D1/RN-08/RN-11)
- **Contenido de ejemplo**:
  - Datos ficticios por municipio
  - Enfoque en partidos/candidatos locales
- **Responsive**: Mismo patrón que Gobernaciones, pero con tabla de 3 columnas fijas en mobile

## 5. Responsividad General

| Breakpoint | Ancho | Cambios Principales |
|------------|-------|---------------------|
| `desktop` | ≥ 1024px | 4 tiles menú por fila, tabla completa con todas columnas, selectores lado a lado si espacio |
| `tablet` | ≥ 768px y < 1024px | 2 tiles menú por fila, tabla con columnas reducidas, selectores dropdown |
| `mobile` | < 768px | 1 tile menú por fila (scroll horizontal si necesario), selectores full-width dropdown, tabla en modo vertical/accordion |

### Reacomodo de Componentes en Mobile

1. **Header**: Logo se reduce tamaño a `font-size-lg`, CTA "Acceder a Resultados" se mueve abajo o se oculta hasta interacción
2. **Selector período**: Dropdown full-width en lugar de pills
3. **Selectores Departamento/Municipio**: Full-width, dropdown alfabético
4. **Tabla**:
   - Encabezados se vuelven sticky en top al scroll
   - Filas principal: "Part." y "Candidatos" siempre visibles
   - Columnas adicionales (municipio, cierre) en accordion expandible por fila
   - Fila "Votación Total" se mantiene al final, fondo `color-surface`
5. **Footer**: Buscador full-width, botón "Regresar a Resultados" full-width debajo del input
6. **Menú tiles**: Scroll horizontal, cada tile full-width uno por vez

### Patrones de Navegación Mobile-First

- **Bottom Navigation** (opcional): Para alternar entre los 4 módulos principales en mobile
- **Drawer/Slide-out**: Menú lateral que se desliza desde izquierda en mobile
- **Progressive disclosure**: Mostrar opciones avanzadas (selector período, filtros) bajo acordeón