/**
 * Vista encargada de renderizar la tabla nutricional, ingredientes y alérgenos de EL ROJITO.
 */
export class VistaNutricion {
  /**
   * @param {HTMLElement} contenedorElemento
   */
  constructor(contenedorElemento) {
    this._contenedor = contenedorElemento;
  }

  /**
   * Renderiza la información nutricional en el DOM.
   * @param {import('../../dominio/modelos/EntidadNutricional.js').EntidadNutricional} nutricion
   * @returns {void}
   */
  renderizar(nutricion) {
    if (!this._contenedor) return;

    const filasIngredientes = nutricion.ingredientes
      .map((item) => `
        <li class="lista-ingredientes__item">
          <span class="lista-ingredientes__punto"></span>
          <span>${item}</span>
        </li>
      `)
      .join('');

    const etiquetasAlergenos = nutricion.alergenos
      .map((item) => `
        <span class="alergeno-insignia">
          <svg class="alergeno-insignia__icono" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <span>${item}</span>
        </span>
      `)
      .join('');

    this._contenedor.innerHTML = `
      <div class="grilla-dos-columnas">

        <article class="tarjeta-modulo">
          <header class="tarjeta-modulo__cabecera">
            <div class="tarjeta-modulo__titulo-grupo">
              <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <h2 class="tarjeta-modulo__titulo">Tabla Nutricional</h2>
            </div>
            <span style="font-size: 0.75rem; color: var(--color-texto-secundario); font-weight: 600;">
              Porci&oacute;n: 30g
            </span>
          </header>

          <table class="tabla-nutricional">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Por Porci&oacute;n</th>
                <th>Por 100 g</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Energ&iacute;a Total</td>
                <td>${nutricion.energiaPorcion} kcal</td>
                <td>${nutricion.energia100g} kcal</td>
              </tr>
              <tr>
                <td>Prote&iacute;nas</td>
                <td>${(nutricion.proteinas * 0.3).toFixed(1)} g</td>
                <td>${nutricion.proteinas} g</td>
              </tr>
              <tr>
                <td>Grasas Totales</td>
                <td>${(nutricion.grasasTotales * 0.3).toFixed(1)} g</td>
                <td>${nutricion.grasasTotales} g</td>
              </tr>
              <tr>
                <td>- Grasas Saturadas</td>
                <td>${(nutricion.grasasSaturadas * 0.3).toFixed(1)} g</td>
                <td>${nutricion.grasasSaturadas} g</td>
              </tr>
              <tr>
                <td>Carbohidratos</td>
                <td>${(nutricion.carbohidratos * 0.3).toFixed(1)} g</td>
                <td>${nutricion.carbohidratos} g</td>
              </tr>
              <tr class="tabla-nutricional__fila-destacada">
                <td>
                  Hierro Hemo Natural
                  <span class="tabla-nutricional__insignia-nutriente">Clave</span>
                </td>
                <td>${(nutricion.hierroMg * 0.3).toFixed(1)} mg</td>
                <td>${nutricion.hierroMg} mg</td>
              </tr>
              <tr class="tabla-nutricional__fila-destacada">
                <td>
                  Vitamina A
                  <span class="tabla-nutricional__insignia-nutriente">Retinol</span>
                </td>
                <td>${(nutricion.vitaminaAMcg * 0.3).toFixed(0)} mcg</td>
                <td>${nutricion.vitaminaAMcg} mcg</td>
              </tr>
              <tr class="tabla-nutricional__fila-destacada">
                <td>
                  Vitamina B12
                  <span class="tabla-nutricional__insignia-nutriente">Vital</span>
                </td>
                <td>${(nutricion.vitaminaB12Mcg * 0.3).toFixed(1)} mcg</td>
                <td>${nutricion.vitaminaB12Mcg} mcg</td>
              </tr>
              <tr>
                <td>Sodio</td>
                <td>${(nutricion.sodioMg * 0.3).toFixed(0)} mg</td>
                <td>${nutricion.sodioMg} mg</td>
              </tr>
            </tbody>
          </table>
        </article>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <article class="tarjeta-modulo">
            <header class="tarjeta-modulo__cabecera">
              <div class="tarjeta-modulo__titulo-grupo">
                <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
                <h2 class="tarjeta-modulo__titulo">Ingredientes Seleccionados</h2>
              </div>
            </header>
            <ul class="lista-ingredientes">
              ${filasIngredientes}
            </ul>
          </article>

          <article class="tarjeta-modulo">
            <header class="tarjeta-modulo__cabecera">
              <div class="tarjeta-modulo__titulo-grupo">
                <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24" style="stroke: var(--color-marca-magenta);">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
                <h2 class="tarjeta-modulo__titulo">Inocuidad y Garant&iacute;a</h2>
              </div>
            </header>
            <div class="contenedor-alergenos">
              ${etiquetasAlergenos}
            </div>
          </article>
        </div>

      </div>
    `;
  }
}
