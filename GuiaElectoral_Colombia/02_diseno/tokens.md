# Tokens de Diseño - Guía Electoral de Colombia

## Paleta de Colores

| Token | Valor | Uso | Modo |
|-------|-------|-----|------|
| `color-primary` | `#0066CC` | Títulos principales, enlaces activos, headers | Modo claro |
| `color-primary-dark` | `#0055AA` | Hover/active estado primary | Modo claro |
| `color-secondary` | `#666666` | Texto secundario, labels, subtítulos | Modo claro |
| `color-success` | `#2E7D32` | Éxito, estados "Al Día" | Modo claro |
| `color-warning` | `#F57F17` | Advertencia, período próximo, "Próximamente" | Modo claro |
| `color-danger` | `#C62828` | Error, vencido, estados críticos | Modo claro |
| `color-info` | `#1565C0` | Información general, labels | Modo claro |
| `color-background` | `#FFFFFF` | Fondo general | Modo claro |
| `color-surface` | `#F5F5F5` | Superficies alternadas, celdas de tabla | Modo claro |
| `color-on-primary` | `#FFFFFF` | Texto sobre primary | Modo claro |
| `color-on-surface` | `#212121` | Texto sobre superficies | Modo claro |
| `color-divider` | `#B0B0B0` | Divisores de sección | Modo claro |
| `color-bg-dark` | `#212121` | Fondo modo oscuro | Modo oscuro |
| `color-surface-dark` | `#333333` | Superficies modo oscuro | Modo oscuro |
| `color-on-dark` | `#FFFFFF` | Texto modo oscuro | Modo oscuro |
| `color-on-dark-secondary` | `#B0B0B0` | Texto secundario modo oscuro | Modo oscuro |
| `color-warning-dark` | `#E65100` | Advertencia modo oscuro | Modo oscuro |
| `color-danger-dark` | `#B71C1C` | Peligro modo oscuro | Modo oscuro |

## Marca "Datos de ejemplo - no oficiales"

- **Ubicación**: Header superior derecho, footer inferior y como watermark sutil en tablas
- **Estilo**: Fuente monospace, tamaño 10px, color `color-secondary` con opacidad 0.6
- **Texto exacto**: "Datos de ejemplo - no oficiales"
- **Aplicación**: 
  - Header: Como parte del texto del título o subtítulo
  - Footer: En el texto del copyright/notice
  - Tablas: Watermark detrás de los datos en celdas

## Tipografía

| Token | Familia | Tamaño | Peso | Uso |
|-------|---------|--------|------|-----|
| `font-family` | "Inter", "Roboto", sans-serif | N/A | N/A | Fuente base para todo el UI |
| `font-size-xs` | Inter | 12px | 400 | Etiquetas pequeñas, captions |
| `font-size-sm` | Inter | 14px | 400 | Texto cuerpo general |
| `font-size-md` | Inter | 16px | 400 | Texto cuerpo principal, filas de tabla |
| `font-size-lg` | Inter | 20px | 400 | Títulos de sección, headers de módulo |
| `font-size-xl` | Inter | 24px | 700 | Título principal de pantalla |
| `font-size-xxl` | Inter | 32px | 700 | Título de pantalla principal (Bienvenida) |
| `font-weight-normal` | Inter | N/A | 400 | Texto normal, body |
| `font-weight-medium` | Inter | N/A | 500 | Etiquetas activas, hover |
| `font-weight-bold` | Inter | N/A | 700 | Títulos principales, primary text |
| `font-size-table-header` | Inter | 13px | 600 | Encabezados de tabla |
| `font-size-table-cell` | Inter | 14px | 400 | Celdas de datos en tabla |

## Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `space-2` | 8px | Márgenes mínimos, padding interno |
| `space-4` | 16px | Espaciado entre elementos, row gap |
| `space-6` | 24px | Espaciado entre secciones, column gap |
| `space-8` | 32px | Márgenes de pantalla, padding de header/footer |
| `space-12` | 48px | Espaciado entre módulos grandes |
| `space-16` | 64px | Margen superior/inferior de pantalla completa |

## Foco/Outline

| Token | Valor | Uso |
|-------|-------|-----|
| `focus-color` | `#0066CC` | Color del outline/focus |
| `focus-width` | 2px | Grosor del outline |
| `focus-style` | `solid` | Estilo del outline |
| `focus-radius` | 4px | Radio del borde enfocado |

## Radio de Bordes

| Token | Valor | Uso |
|-------|-------|-----|
| `radius-sm` | 4px | Bordes de inputs, celdas de tabla pequeñas |
| `radius-md` | 8px | Cards, headers, módulos |
| `radius-lg` | 12px | Estados selected/active, modals |
| `radius-full` | 9999px | Píldoras, botones de selector |

## Sombra

| Token | Valor | Uso |
|-------|-------|-----|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Inputs, elementos elevados mínimos |
| `shadow-md` | `0 2px 4px rgba(0,0,0,0.1)` | Cards, headers |
| `shadow-lg` | `0 4px 12px rgba(0,0,0,0.15)` | Modals, pantallas completas |