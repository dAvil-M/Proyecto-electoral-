# Componentes de Diseño - Guía Electoral de Colombia

## Header / App Shell

- **Estructura**: 
  - Logo/identificador "Guía Electoral de Colombia" a la izquierda
  - Menú de navegación principal a la derecha con tiles por módulo
  - Barra de búsqueda superior dentro del header
- **Navegación a los cuatro módulos activos**:
  - Gobernaciones (tile activo)
  - Asambleas (tile activo)
  - Alcaldías (tile activo)
  - Concejos (tile activo)
- **Tiles deshabilitados** (con `aria-disabled="true"` y leyenda "Próximamente"):
  - JAL (Presidente, Senado, Cámara)
  - Bogotá D.C./JAL (combinado)
- **Marca**: Texto "Datos de ejemplo - no oficiales" en pequeño en el lado derecho
- **Comportamiento**: Click en tile activo navega al módulo correspondiente; click en tile deshabilitado no tiene acción (solo visual)

## Selector de Período

- **Visualización**: 
  - Período activo destacado con fondo `color-primary-light` (tono más claro)
  - Texto en `color-primary` negrita
  - Ejemplo: "Período: Oct-Dic 2023"
- **Comportamiento al cambiar**:
  - Dropdown o pills selector con los 4 períodos de RN-01
  - Al seleccionar nuevo período, todos los datos se actualizan
  - Estados: default, hover, focus, disabled (cuando período no disponible)
- **Estados**:
  - `default`: Período activo visible
  - `hover`: Fondo resaltado suavemente
  - `focus`: Outline `focus-color` 2px
  - `disabled`: Fondo `color-surface`, texto `color-secondary`, cursor not-allowed

## Selectores Departamento / Municipio

- **Departamento**:
  - Lista alfabética de departamentos (23 + DC)
  - Estado deshabilitado para períodos no activos (`aria-disabled="true"`)
  - Fondo `color-surface`, borde `color-divider`
  - Altura mínima 44px para touch target
- **Municipio**:
  - Lista dinámica filtrada por departamento seleccionado
  - Alfabética dentro del departamento
  - Mismo estilo que departamento
  - Estado deshabilitado para períodos no activos
- **Comportamiento**:
  - Al seleccionar departamento, municipios se cargan
  - Si período está deshabilitado, ambos selectores muestran estado disabled
  - Mobile: selector full-width, dropdown style

## Tabla de Resultados - Gobernaciones/Asambleas

| Columna | Descripción | Token/Estilo |
|---------|-------------|--------------|
| `Part.` | Número de partido/lista | `font-size-table-header`, peso 600 |
| `Candidatos` | Nombres de candidatos o lista | `font-size-table-header`, peso 600 |
| `Municipio` | Nombre del municipio (columna 3) | `font-size-table-cell` |
| `Cierre` | Blancos/Nulos/No marcados | `font-size-table-cell` |
| `Total` | VOTACIÓN TOTAL calculada | `font-size-table-cell`, negrita |

- **Resaltado ganador/elegido**: Fondo amarillo `color-warning` en toda la fila, o celdas específicas con fondo amarillo y texto `color-on-primary` blanco
- **Fila "Votación Total"**: Fondo `color-surface`, borde superior `color-primary`, texto negrita
- **Orden de columnas**: Part. | Candidatos | [Municipio] | Cierre (blancos/nulos/no marcados) | Total
- **Regla A2**: VOTACIÓN TOTAL = suma de candidatos/listas + "Por la Lista" + Votos en Blanco + Votos Nulos + Votos No Marcados
- **Nota**: En Gobernaciones/Asambleas hay columna "Por la Lista"; en Alcaldías/Concejos no

## Tabla de Resultados - Alcaldías/Concejos

| Columna | Descripción | Token/Estilo |
|---------|-------------|--------------|
| `Part.` | Número de partido/lista | `font-size-table-header`, peso 600 |
| `Candidatos` | Nombres de candidatos o lista | `font-size-table-header`, peso 600 |
| `Cierre RN-06` | Blancos + Nulos + No marcados | `font-size-table-cell` |

- **Sin columna municipio**: Tabla simplificada, solo 2 columnas de datos + cierre
- **Resaltado ganador**: Fondo amarillo `color-warning` en fila o celdas ganadoras
- **Fila "Votación Total"**: No se muestra (RN-08/RN-11 y decisión D1 prevalecen)
- **Orden de columnas**: Part. | Candidatos | Cierre RN-06

## Footer

- **Estructura**:
  - Izquierda: Enlace "Regresar a Resultados" (botón o texto link)
  - Derecha: Texto copyright con marca "Datos de ejemplo - no oficiales"
- **Buscador**:
  - Campo de texto input con placeholder "Buscar resultados..."
  - Botón "Buscar" o lupa dentro del mismo input
  - Estado: default, focus (outline `focus-color`), disabled
  - En mobile: full-width input con botón debajo o icono de búsqueda que expande el input

## Menú (Pantalla Bienvenida / Inicial)

- **Distribución de tiles**:
  - **Tiles activos** (habilitados, click navegable):
    - Gobernaciones
    - Asambleas
    - Alcaldías
    - Concejos
  - **Tiles deshabilitados** (con `aria-disabled="true"`, leyenda "Próximamente"):
    - JAL (Presidente, Senado, Cámara)
    - Bogotá D.C./JAL (combinado)
- **Estilo de tiles**:
  - Tarjetas cuadradas o rectangulares con nombre del módulo
  - Tiles activos: fondo `color-background`, borde `color-divider`
  - Tiles deshabilitados: fondo `color-surface`, borde `color-divider`, opacity 0.7, leyenda "Próximamente" debajo del nombre
- **Comportamiento**:
  - Click en tile activo: navega al módulo correspondiente
  - Click en tile deshabilitado: no tiene acción (estado visual solo)
- **Responsive**:
  - Desktop: 4 tiles en fila (2x2 o 1x4 dependiendo width)
  - Tablet: 2 tiles por fila
  - Mobile: 1 tile por fila, scroll horizontal si necesario

## Estados por Componente

### Estados Default

| Componente | Estados Definidos |
|------------|-------------------|
| Header | default, hover (sobre tiles), focus |
| Selector período | default, hover, focus, disabled |
| Selector departamento | default, hover, focus, disabled |
| Selector municipio | default, hover, focus, disabled |
| Tabla (fila) | normal, ganador/elegido, vacío |
| Footer | default, focus (sobre buscador) |
| Menú tile | default, hover, disabled |

### Estados de Fila de Tabla

| Estado | Descripción | Estilo |
|--------|-------------|--------|
| `normal` | Fila normal, sin selección | Fondo `color-background` o `color-surface` (alternado) |
| `ganador/elegido` | Fila resaltada, candidato ganador | Fondo amarillo `color-warning` en toda fila, o celdas específicas amarillo |
| `vacío` | Fila sin datos disponibles | Fondo `color-surface`, texto `color-on-surface` con opacidad 0.5 |
| `error` | Datos inconsistentes o carga fallida | Fondo rojo muy claro `color-danger-light`, borde `color-danger` |

### Estados Adicionales

- **Loading**: Fila o tabla con spinner en primera columna, resto grisáceo
- **Empty state**: Mensaje "No hay datos para el período seleccionado" con ilustración ligera