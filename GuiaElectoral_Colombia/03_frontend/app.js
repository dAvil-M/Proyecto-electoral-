// ============================================================
// APP.JS - Guía Electoral de Colombia (Vanilla JS)
// Datos de ejemplo - no oficiales
// ============================================================

/**
 * Inicialización de la aplicación
 * - Carga datos JSON
 * - Configura eventos
 * - Gestiona navegación entre pantallas
 */
document.addEventListener('DOMContentLoaded', function() {
  // Referencias a elementos DOM
  const ctaBtn = document.getElementById('btn-acceder');
  const marcaDatos = document.querySelector('.marca-datos');
  const marcaFooter = document.querySelector('.marca-footer');

  // Verificar que los elementos existen
  if (!ctaBtn) {
    console.error('ERROR: No se encontró el botón CTA #btn-acceder');
    return;
  }

  // Mostrar marca de datos de ejemplo (obligatorio)
  if (marcaDatos) {
    marcaDatos.textContent = '"Datos de ejemplo - no oficiales"';
  } else {
    console.warn('WARNING: Elemento .marca-datos no encontrado, agregando banner temporal');
    // Crear banner temporal si no existe
    const banner = document.createElement('div');
    banner.className = 'marca-datos';
    banner.textContent = '"Datos de ejemplo - no oficiales"';
    banner.style.cssText = 'font-size: 10px; color: #666666; opacity: 0.6; text-align: right; padding: 4px; background: transparent;';
    document.body.insertBefore(banner, document.body.firstChild);
  }

  if (marcaFooter) {
    marcaFooter.textContent = '"Datos de ejemplo - no oficiales"';
  }

  // Datos JSON incrustados (ya están en el HTML, pero los hacemos disponibles)
  const datosJSONEl = document.getElementById('datos-json');
  let datosApp = null;

  if (datosJSONEl) {
    try {
      datosApp = JSON.parse(datosJSONEl.textContent);
      console.log('Datos JSON cargados exitosamente', datosApp);
    } catch (e) {
      console.error('ERROR al parsear datos JSON:', e);
      datosApp = generarDatosEjemploFallback();
    }
  } else {
    datosApp = generarDatosEjemploFallback();
  }

  // CTA: navegar al menú de resultados
  ctaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navegarAMenuResultados();
  });

  // Tecla Enter en el CTA
  ctaBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navegarAMenuResultados();
    }
  });

  /**
   * Navega a la pantalla de Menú de Resultados
   */
  function navegarAMenuResultados() {
    // Ocultar contenido de bienvenida
    const heroSection = document.querySelector('.hero-section');
    const contenidoPrincipal = document.querySelector('.contenido-principal');

    if (heroSection) {
      heroSection.style.display = 'none';
    }
    if (contenidoPrincipal) {
      contenidoPrincipal.innerHTML = generarHTMLMenuResultados();
      // Re-aplicar eventos después de cambiar el contenido
      aplicarEventosMenuResultados();
    }
  }

  /**
   * Genera el HTML del Menú de Resultados
   */
  function generarHTMLMenuResultados() {
    const modulos = datosApp.modulos;
    const periodos = datosApp.periodos;
    const periodoActivo = periodos.find(p => p.activo) || periodos[0];

    let html = `
      <header class="app-header" id="header-menu">
        <h1 class="titulo-principal">Guía Electoral de Colombia</h1>
        <p class="subtitulo">Consulta de resultados electorales</p>
        <span class="marca-header">"Datos de ejemplo - no oficiales"</span>
      </header>

      <main class="contenido-principal">
        <section class="selector-periodo">
          <label for="periodo-selector" style="display: block; font-size: var(--font-size-sm); color: var(--color-secondary); margin-bottom: var(--space-4);">Período:</label>
          <select id="periodo-selector" style="width: 100%; padding: var(--space-4); font-size: var(--font-size-sm); border: 1px solid var(--color-divider); border-radius: var(--radius-sm); background: var(--color-background);">
    `;

    periodos.forEach(periodo => {
      const selected = periodo.activo ? 'selected' : '';
      html += `<option value="${periodo.id}" ${selected}>${periodo.nombre}</option>`;
    });

    html += `
          </select>
        </section>

        <section class="menu-tiles">
          <div class="tiles-container">
    `;

    // Tiles activos (4 módulos del alcance)
    const modulosActivos = ['gobernaciones', 'asambleas', 'alcaldias', 'concejos'];
    modulosActivos.forEach((moduloKey, index) => {
      const modulo = modulos[moduloKey];
      const esActivo = true;
      const estiloFondo = esActivo ? 'var(--color-background)' : 'var(--color-surface)';
      const borde = '1px solid var(--color-divider)';
      const opacidad = esActivo ? '1' : '0.7';
      const cursor = esActivo ? 'pointer' : 'not-allowed';

      html += `
        <div class="tile-module" data-modulo="${moduloKey}" style="
          background: ${estiloFondo};
          border: ${borde};
          color: var(--color-on-surface);
          cursor: ${cursor};
          padding: var(--space-16) var(--space-8);
          margin: var(--space-4) var(--space-4) 0 var(--space-4);
          border-radius: var(--radius-md);
          text-align: center;
          transition: all 0.2s ease;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <span style="font-weight: var(--font-weight-bold); font-size: var(--font-size-lg); color: var(--color-primary);">${modulo.nombre}</span>
        </div>
      `;
    });

    // Tiles deshabilitados (JAL, Presidente, Senado, Cámara, Bogotá D.C/JAL)
    const modulosDeshabilitados = ['jal', 'presidente', 'senado', 'camara', 'bogota-jal'];
    modulosDeshabilitados.forEach(moduloKey => {
      html += `
        <div class="tile-module tile-deshabilitado" data-modulo="${moduloKey}" style="
          background: var(--color-surface);
          border: 1px solid var(--color-divider);
          color: var(--color-on-dark-secondary);
          cursor: not-allowed;
          padding: var(--space-16) var(--space-8);
          margin: var(--space-4) var(--space-4) 0 var(--space-4);
          border-radius: var(--radius-md);
          text-align: center;
          opacity: 0.7;
        ">
          <span style="font-size: var(--font-size-lg);">Próximamente</span>
        </div>
      `;
    });

    html += `
          </div>
        </section>

        <section class="barra-busqueda" style="margin-top: var(--space-24); padding-top: var(--space-12); border-top: 1px solid var(--color-divider);">
          <div class="buscador-wrapper" style="width: 100%; max-width: 400px; margin: 0 auto;">
            <input type="text" id="buscador-input" placeholder="Buscar departamento, municipio o partido..." style="width: 100%; padding: var(--space-4); font-size: var(--font-size-sm); border: 1px solid var(--color-divider); border-radius: var(--radius-full); background: var(--color-background);">
            <button type="button" class="btn-lupa" style="display: none;">🔍</button>
          </div>
        </section>
      </main>

      <footer class="app-footer" id="footer-menu">
        <a href="#" class="link-regresar" style="color: var(--color-primary); font-size: var(--font-size-sm); text-decoration: none;">Regresar a Resultados</a>
        <div class="marca-footer" style="opacity: 0.6;">
          "Datos de ejemplo - no oficiales"
        </div>
      </footer>
    `;

    return html;
  }

  /**
   * Aplica eventos después de navegar al menú
   */
  function aplicarEventosMenuResultados() {
    // Selector de período
    const periodoSelect = document.getElementById('periodo-selector');
    if (periodoSelect) {
      periodoSelect.addEventListener('change', function() {
        // En una implementación real, esto recargarían los datos
        console.log('Período cambiado a:', this.value);
      });
    }

    // Tiles activos - navegar a módulo
    const tiles = document.querySelectorAll('.tile-module:not(.tile-deshabilitado)');
    tiles.forEach(tile => {
      tile.addEventListener('click', function() {
        const modulo = this.getAttribute('data-modulo');
        navegarAModulo(modulo);
      });
    });

    // Tiles deshabilitados - no hacer nada (solo visual)
    const tilesDeshabilitados = document.querySelectorAll('.tile-deshabilitado');
    tilesDeshabilitados.forEach(tile => {
      tile.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // No navegar, solo feedback visual
        alert('Este módulo está por venir. Próximamente.');
      });
    });

    // Buscador
    const buscadorInput = document.getElementById('buscador-input');
    if (buscadorInput) {
      buscadorInput.addEventListener('input', function() {
        // En una implementación real, filtrarían los resultados
        console.log('Búsqueda:', this.value);
      });
    }

    // Enlace "Regresar a Resultados"
    const linkRegresar = document.querySelector('.link-regresar');
    if (linkRegresar) {
      linkRegresar.addEventListener('click', function(e) {
        e.preventDefault();
        // Volver a la pantalla de bienvenida
        const headerMenu = document.getElementById('header-menu');
        const contenidoPrincipal = document.querySelector('.contenido-principal');
        const footerMenu = document.getElementById('footer-menu');

        if (headerMenu) headerMenu.style.display = 'none';
        if (contenidoPrincipal) {
          contenidoPrincipal.innerHTML = '';
        }
        if (footerMenu) footerMenu.style.display = 'none';

        // Re-mostrar bienvenida (simplificado)
        setTimeout(() => {
          window.location.reload();
        }, 100);
      });
    }
  }

  /**
   * Navega a un módulo específico (Gobernaciones, Asambleas, etc.)
   * @param {string} moduloKey - clave del módulo en datosApp.modulos
   */
  function navegarAModulo(moduloKey) {
    const modulo = datosApp.modulos[moduloKey];
    if (!modulo) {
      console.error(`Módulo ${moduloKey} no encontrado en datos`);
      return;
    }

    // Guardar el período seleccionado si hay un selector
    const periodoSeleccionado = document.getElementById('periodo-selector');
    const paramsBusqueda = new URLSearchParams();
    if (periodoSeleccionado) {
      paramsBusqueda.set('periodo', periodoSeleccionado.value);
    }

    // Construir HTML del módulo
    const htmlModulo = construirHTMLModulo(moduloKey, modulo, paramsBusqueda);

    // Reemplazar contenido principal
    const contenidoPrincipal = document.querySelector('.contenido-principal');
    const headerActual = document.querySelector('.app-header');

    if (headerActual) {
      headerActual.innerHTML = `
        <h1 class="titulo-principal">Guía Electoral de Colombia - ${modulo.nombre}</h1>
        <span class="marca-header" style="margin-left: auto;">"Datos de ejemplo - no oficiales"</span>
      `;
    }

    if (contenidoPrincipal) {
      contenidoPrincipal.innerHTML = htmlModulo;
    }

    // Aplicar eventos del módulo
    aplicarEventosModulo(moduloKey, modulo);
  }

  /**
   * Construye el HTML de un módulo específico
   * @param {string} moduloKey - clave del módulo
   * @param {object} modulo - configuración del módulo
   * @param {URLSearchParams} params - parámetros de búsqueda/período
   * @returns {string} HTML del módulo
   */
  function construirHTMLModulo(moduloKey, modulo, params) {
    const datos = modulo.datos;
    const columnas = modulo.columnas;
    const tienePorLista = modulo.tienePorLista || false;

    // Determinar si este módulo muestra fila "Votación Total" separada
    // Según decisión D1: Asambleas y Concejos NO muestran fila Total separada
    const moduloSinFilaTotal = moduloKey === 'asambleas' || moduloKey === 'concejos';

    let html = `
      <section class="barra-superior">
        <label for="periodo-selector-modulo" style="font-size: var(--font-size-sm); color: var(--color-secondary); margin-right: var(--space-8);">Período:</label>
        <select id="periodo-selector-modulo" style="padding: var(--space-4); font-size: var(--font-size-sm); border: 1px solid var(--color-divider); border-radius: var(--radius-sm); background: var(--color-background);">
    `;

    // Agregar períodos disponibles
    datosApp.periodos.forEach(periodo => {
      const selected = periodo.id === params.get('periodo') ? 'selected' : '';
      html += `<option value="${periodo.id}" ${selected}>${periodo.nombre}</option>`;
    });

    html += `
        </select>
        <button class="btn-actualizar" style="font-size: var(--font-size-sm); padding: var(--space-4) var(--space-8); background: var(--color-primary); color: var(--color-on-primary); border: none; border-radius: var(--radius-md); cursor: pointer;">Actualizar</button>
      </section>

      <div class="tarjeta-datos" style="margin-top: var(--space-16); padding: var(--space-12); background: var(--color-background); border-radius: var(--radius-md);">
        <h2 style="font-size: var(--font-size-lg); color: var(--color-primary); margin-bottom: var(--space-12);">${modulo.nombre}</h2>
    `;

    // Tabla de resultados
    if (datos && datos.length > 0) {
      html += `
        <table style="width: 100%; border-collapse: collapse; font-size: var(--font-size-table-cell);">
          <thead>
            <tr style="border-bottom: 2px solid var(--color-divider);">
      `;

      // Generar encabezados de columna
      // RN-13 y decisiones A2/D1: order es Part. | Candidatos | [Municipio] | Cierre | Total
      // D1: En Asambleas/Concejos NO hay fila Total separada, por lo que la columna Total no se muestra en encabezado
      const columnasMostrar = moduloSinFilaTotal
        ? columnas.filter(c => c !== 'Total')
        : columnas;

      columnasMostrar.forEach(col => {
        const estilo = col === 'Total' && !moduloSinFilaTotal ? 'font-weight: bold; color: var(--color-primary);' : '';
        html += `<th style="${estilo} padding: var(--space-4) var(--space-6); font-size: var(--font-size-table-header); text-align: left; color: var(--color-secondary);">${col}</th>`;
      });

      // Si el módulo muestra fila Total, agregar encabezado de total vacío para alineación
      if (!moduloSinFilaTotal) {
        html += `<th style="padding: var(--space-4) var(--space-6); font-size: var(--font-size-table-header); text-align: left; color: var(--color-secondary);">Total</th>`;
      }

      html += `</tr></thead><tbody>`;

      // Filas de datos
      datos.forEach((fila, index) => {
        const esGanador = fila.ganador || false;
        const fondoFila = esGanador ? `background: rgba(245, 127, 23, 0.15);` : 'background: var(--color-surface)';
        const resaltado = esGanador ? 'style="color: var(--color-on-primary);"' : '';

        // Calcular votación total por fila según RN-13 y decisiones A2/D1
        // RN-13: datos/orden/ganador se calculan desde el JSON
        // A2: VOTACIÓN TOTAL = suma de candidatos/listas + "Por la Lista" + blancos + nulos + no marcados
        // D1: En Asambleas/Concejos NO hay fila Total separada que duplique
        // Pero los datos sí tienen el cálculo interno para consistencia

        // Calcular total por fila (para posible columna Total)
        let totalPorFila = 0;
        if (modulo.tienePorLista || !moduloSinFilaTotal) {
          // Módulos con "Por la Lista" (Gobernaciones) o que sí muestran Total
          totalPorFila = (fila.votosLista || 0) + (fila.votosBlancos || 0) + (fila.votosNulos || 0) + (fila.votosNoMarcados || 0);
        } else {
          // Alcaldías/Concejos sin "Por la Lista" y sin fila Total: total calculado pero no mostrado
          totalPorFila = (fila.votosLista || 0) + (fila.votosBlancos || 0) + (fila.votosNulos || 0) + (fila.votosNoMarcados || 0);
        }

        html += `
          <tr style="${fondoFila}" ${resaltado}>
        `;

        // Determinar qué columnas mostrar en esta fila
        const columnasAMostrar = moduloSinFilaTotal
          ? columnas.filter(c => c !== 'Total')
          : columnas;

        columnasAMostrar.forEach(col => {
          let valor = '';

          switch (col) {
            case 'Part.':
              valor = fila.partido || '--';
              break;
            case 'Candidatos':
              valor = fila.candidatos ? fila.candidatos.join(', ') : '--';
              break;
            case 'Municipio':
              valor = fila.municipio || '';
              break;
            case 'Cierre':
              // Blancos + Nulos + No marcados (RN-06)
              const cierrePartes = [];
              if (fila.votosBlancos !== undefined) cierrePartes.push(`Blanco: ${fila.votosBlancos}`);
              if (fila.votosNulos !== undefined) cierrePartes.push(`Nulo: ${fila.votosNulos}`);
              if (fila.votosNoMarcados !== undefined) cierrePartes.push(`No marcado: ${fila.votosNoMarcados}`);
              valor = cierrePartes.join(' | ');
              break;
            case 'Total':
              // Solo mostrar Total si el módulo lo permite (no Asambleas/Concejos con D1)
              if (moduloSinFilaTotal) {
                // En modo sin fila Total, no mostramos la celda Total en cada fila
                // La fila Total se oculta completamente al final de la tabla
                valor = '';
              } else {
                valor = totalPorFila.toLocaleString();
              }
              break;
            default:
              valor = '--';
          }

          html += `<td style="padding: var(--space-4) var(--space-6);" ${resaltado}>${valor}</td>`;
        });

        // Si el módulo NO muestra fila Total separada, no agregamos celda extra
        // Si sí muestra, agregamos la celda Total al final de la fila
        if (!moduloSinFilaTotal) {
          html += `<td style="padding: var(--space-4) var(--space-6); font-weight: bold; color: var(--color-primary);">${totalPorFila.toLocaleString()}</td>`;
        }

        html += `</tr>`;
      });

      // Agregar fila "Votación Total" al final de la tabla SOLO si el módulo lo permite
      // Según D1: Asambleas y Concejos NO tienen fila Total separada
      if (!moduloSinFilaTotal) {
        html += `</tbody>`;
        html += `<tfoot>`;
        html += `<tr style="background: var(--color-surface); border-top: 2px solid var(--color-primary);">`;
        
        // Calcular total general sumando todos los totales de fila
        let totalGeneral = 0;
        datos.forEach(() => { totalGeneral += totalPorFila; });

        // Determinar cuántas columnas de datos hay (sin contar la columna Total)
        const dataColumnCount = moduloSinFilaTotal ? columnas.length : columnas.length - 1; // -1 porque Total es la última

        html += `<td colspan="${dataColumnCount}" style="padding: var(--space-4) var(--space-6); font-size: var(--font-size-table-cell); text-align: right;"></td>`;
        html += `<td style="padding: var(--space-4) var(--space-6); font-weight: bold; color: var(--color-primary); text-align: right; font-size: var(--font-size-table-cell);">VOTACIÓN TOTAL: ${totalGeneral.toLocaleString()}</td>`;
        html += `</tr>`;
        html += `</tfoot>`;
      } else {
        html += `</tbody>`;
        // No agregar tfoot para Asambleas/Concejos (D1)
      }
    } else {
      html += `<p style="color: var(--color-secondary); padding: var(--space-8); text-align: center;">No hay datos disponibles para el período seleccionado.</p>`;
    }

    html += `</div>`;

    // Footer con búsqueda y regresar
    html += `
      <footer class="app-footer" style="margin-top: var(--space-24); padding-top: var(--space-12); border-top: 1px solid var(--color-divider);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 200px;">
            <input type="text" placeholder="Buscar resultados, departamentos, municipios o partidos..." style="width: 100%; padding: var(--space-4); font-size: var(--font-size-sm); border: 1px solid var(--color-divider); border-radius: var(--radius-full); margin-bottom: var(--space-8);">
            <button style="width: 100%; padding: var(--space-4); font-size: var(--font-size-sm); background: var(--color-primary); color: var(--color-on-primary); border: none; border-radius: var(--radius-md);">Buscar</button>
          </div>
          <a href="#" style="color: var(--color-primary); font-size: var(--font-size-sm); text-decoration: none;">Regresar a Resultados</a>
        </div>
        <div style="margin-top: var(--space-8); font-size: var(--font-size-xs); color: rgba(var(--color-on-surface-rgb), 0.6); text-align: right;">"Datos de ejemplo - no oficiales"</div>
      </footer>
    `;

    return html;
  }

  /**
   * Aplica eventos después de navegar a un módulo
   * @param {string} moduloKey - clave del módulo
   * @param {object} modulo - configuración del módulo
   */
  function aplicarEventosModulo(moduloKey, modulo) {
    // Selector de período dentro del módulo
    const periodoSelect = document.getElementById('periodo-selector-modulo');
    if (periodoSelect) {
      periodoSelect.addEventListener('change', function() {
        // En una implementación real, esto recargarían los datos
        console.log(`Módulo ${moduloKey}: período cambiado a ${this.value}`);
      });
    }

    // Botón Actualizar
    const btnActualizar = document.querySelector('.btn-actualizar');
    if (btnActualizar) {
      btnActualizar.addEventListener('click', function() {
        const periodoSelect = document.getElementById('periodo-selector-modulo');
        if (periodoSelect) {
          console.log(`Módulo ${moduloKey}: actualizando para período ${periodoSelect.value}`);
        }
      });
    }

    // Buscador dentro del módulo
    const buscadorInput = document.querySelector('#contenido-principal input[type="text"]');
    if (buscadorInput) {
      buscadorInput.addEventListener('input', function() {
        console.log('Búsqueda en módulo:', this.value);
      });
    }
  }

  /**
   * Genera datos de ejemplo de fallback si no hay JSON disponible
   * @returns {object} objeto de datos de ejemplo
   */
  function generarDatosEjemploFallback() {
    return {
      marca: "Datos de ejemplo - no oficiales",
      version: "1.0.0",
      ultimaActualizacion: "2024-11",
      periodos: [
        { id: "periodo-1", nombre: "Oct-Dic 2023", activo: true },
        { id: "periodo-2", nombre: "Ene-Mar 2024", activo: false },
        { id: "periodo-3", nombre: "Abr-Jun 2024", activo: false },
        { id: "periodo-4", nombre: "Jul-Sep 2024", activo: false }
      ],
      departamentos: [
        { id: "antioquia", nombre: "Antioquia" },
        { id: "bolivar", nombre: "Bolivar" }
      ],
      municipios: {
        antioquia: [
          { id: "medellin", nombre: "Medellín" }
        ]
      },
      modulos: {
        gobernaciones: {
          nombre: "Gobernaciones",
          tienePorLista: true,
          columnas: ["Part.", "Candidatos", "Municipio", "Cierre", "Total"],
          datos: [
            {
              departamento: "Antioquia",
              municipio: "Medellín",
              partido: "Partido Verde",
              candidatos: ["Juan Pérez", "Maria Gomez"],
              votosLista: 12500,
              votosBlancos: 800,
              votosNulos: 500,
              votosNoMarcados: 200,
              ganador: true,
              elegido: true
            }
          ]
        },
        asambleas: {
          nombre: "Asambleas",
          tienePorLista: true,
          columnas: ["Part.", "Candidatos", "Municipio", "Cierre", "Total"],
          datos: [
            {
              departamento: "Antioquia",
              municipio: "Medellín",
              partido: "Partido Verde",
              candidatos: ["Juan Pérez", "Maria Gomez"],
              votosLista: 15000,
              votosBlancos: 1000,
              votosNulos: 600,
              votosNoMarcados: 300,
              ganador: true,
              elegido: true
            }
          ]
        },
        alcaldias: {
          nombre: "Alcaldías",
          tienePorLista: false,
          columnas: ["Part.", "Candidatos", "Cierre"],
          datos: [
            {
              departamento: "Antioquia",
              municipio: "Medellín",
              partido: "Partido Verde",
              candidatos: ["Juan Pérez", "Maria Gomez"],
              votosLista: 12000,
              votosBlancos: 900,
              votosNulos: 550,
              votosNoMarcados: 250,
              ganador: true,
              elegido: true
            }
          ]
        },
        concejos: {
          nombre: "Concejos",
          tienePorLista: true,
          columnas: ["Part.", "Candidatos", "Cierre", "Total"],
          datos: [
            {
              departamento: "Antioquia",
              municipio: "Medellín",
              partido: "Partido Verde",
              candidatos: ["Juan Pérez", "Maria Gomez"],
              votosLista: 3500,
              votosBlancos: 250,
              votosNulos: 180,
              votosNoMarcados: 100,
              ganador: true,
              elegido: true
            }
          ]
        }
      }
    };
  }
});