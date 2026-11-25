# Estados de Componente y Fila - Guía Electoral de Colombia

## Estados por Componente

### 1. Header / App Shell

| Estado | Descripción | Estilo Visual |
|--------|-------------|---------------|
| `default` | Estado inicial, tiles activos visibles | Fondo `color-background`, tiles con borde `color-divider` |
| `hover` | Mouse sobre un tile activo | Fondo ligeramente resaltado `color-primary-light`, cursor pointer |
| `focus` | Tab enfocado o navegación por teclado | Outline `focus-color` 2px alrededor del header |
| `disabled` | Período sin datos disponibles | Opacidad 0.7, cursor not-allowed, leyenda "Próximamente" |
| `selected/active` | Tile actualmente navegando | Fondo `color-primary`, color `color-on-primary` blanco |

### 2. Selector de Período

| Estado | Descripción | Estilo Visual |
|--------|-------------|---------------|
| `default` | Período activo mostrado | Fondo `color-primary-light`, texto `color-primary` 700 |
| `hover` | Mouse sobre el selector | Fondo `color-surface`, borde `color-primary` |
| `focus` | Selector enfocado por teclado | Outline `focus-color` 2px, sombra `shadow-sm` |
| `disabled` | Período no disponible (fuera de rango) | Fondo `color-surface`, texto `color-on-dark-secondary`, cursor not-allowed |
| `empty` | No hay períodos definidos | Mensaje "No hay períodos disponibles" centrado |

### 3. Selectores Departamento / Municipio

| Estado | Descripción | Estilo Visual |
|--------|-------------|---------------|
| `default` | Departamento/municipio seleccionado | Fondo `color-background`, borde `color-divider` |
| `hover` | Mouse sobre opción | Fondo `color-primary-light` |
| `focus` | Opción seleccionada por teclado | Outline `focus-color` 2px, fondo `color-primary-light` |
| `disabled` | Período no activo | Fondo `color-surface`, texto `color-on-dark-secondary`, opacity 0.5 |
| `empty` | Lista vacía | Mensaje "No hay departamentos/municipios disponibles" |

### 4. Tabla de Resultados

| Componente | Estado | Descripción |
|------------|--------|-------------|
| Fila de tabla | `normal` | Fondo alternado `color-background` / `color-surface`, texto `color-on-dark` |
| Fila de tabla | `ganador/elegido` | Fondo amarillo `color-warning` en toda fila, o celdas específicas con fondo amarillo y texto blanco `color-on-primary` |
| Fila de tabla | `vacío` | Fondo `color-surface`, texto con opacidad 0.5, mensaje "Sin datos" en primera celda |
| Fila de tabla | `error` | Fondo rojo muy claro `rgba(198,40,40,0.1)`, borde `color-danger` |
| Fila de tabla | `loading` | Spinner en primera celda, resto del fondo `color-surface` con 30% opacidad |

### 5. Footer

| Estado | Descripción | Estilo Visual |
|--------|-------------|---------------|
| `default` | Estado normal | Fondo `color-surface`, texto `color-on-dark-secondary` |
| `focus` | Buscador enfocado | Outline `focus-color` 2px en campo de búsqueda |
| `disabled` | Búsqueda no disponible | Campo con opacidad 0.7, cursor not-allowed |

### 6. Menú (Tiles)

| Estado | Descripción | Estilo Visual |
|--------|-------------|---------------|
| `default` | Tile activo sin hover | Fondo `color-background`, borde `color-divider` |
| `hover` | Mouse sobre tile activo | Fondo `color-primary-light`, cursor pointer |
| `disabled` | Tile "Próximamente" | Fondo `color-surface`, borde `color-divider`, opacity 0.7, leyenda "Próximamente" en negrita `color-on-dark-secondary` |
| `selected` | Tile navegando actualmente | Fondo `color-primary`, color `color-on-primary` blanco |

## Estados de Fila de Tabla (Detalle)

| Estado | Cuándo Aplica | Estilo Visual |
|--------|---------------|---------------|
| `normal` | Fila por defecto, sin resaltar | Fondo blanco `color-background` (Gobernaciones/Asambleas) o `color-surface` (Alcaldías/Concejos), texto `color-on-dark` |
| `ganador/elegido` | Cuando un partido/candidato ganó el municipio/departamento | **Gobernaciones/Asambleas**: Fondo entero en amarillo `color-warning`; **Alcaldías/Concejos**: Fondo entero en amarillo `color-warning` o resaltado en celdas específicas |
| `vacío` | Cuando no hay lecturas de datos para el período | Fondo `color-surface`, texto `color-on-dark-secondary` con opacidad 0.5, ícono de estado vacío |
| `error` | Cuando los datos no pudieron cargarse o son inconsistentes | Fondo `rgba(198,40,40,0.1)`, borde 1px `color-danger`, texto `color-danger` |

## Estados Especiales

### Empty State (Pantalla completa)

- **Cuándo**: Cuando no hay datos para el período seleccionado, o el usuario aún no ha seleccionado departamento/municipio
- **Contenido**: 
  - Ícono ligero (32px) de "sin datos"
  - Texto: "No hay resultados para el período seleccionado"
  - Botón "Seleccionar nuevo período" o "Volver a menú"
- **Estilo**: Fondo `color-surface`, centro de pantalla, texto `color-on-dark` tamaño `font-size-md`, margen vertical `space-8`

### Loading State

- **Cuándo**: Durante la carga inicial de datos o al cambiar de período
- **Visual**: Spinner circular en centro de tabla, o skeleton lines en filas de tabla
- **Color**: Spinner en `color-primary`, skeleton lines en `color-surface` con 80% brillo

### Focus State (Teclado/Navegación)

- **Aplicación**: Todos los componentes interactivos (inputs, selectores, botones, tiles)
- **Requisito**: Outline `focus-color` `#0066CC` 2px alrededor del elemento enfocado
- **Contraste**: Debe cumplir WCAG AA para contraste de focus (mínimo 3:1 contra color de fondo inmediato)