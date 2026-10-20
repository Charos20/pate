/**
 * Vista encargada de renderizar la conservación e inocuidad alimentaria sin redundancias.
 */
export class VistaSeguridad {
  /**
   * @param {HTMLElement} contenedorElemento
   */
  constructor(contenedorElemento) {
    this._contenedor = contenedorElemento;
  }

  /**
   * Renderiza las pautas de conservación y registros sanitarios oficiales.
   * @param {import('../../dominio/modelos/EntidadProducto.js').EntidadProducto} producto
   * @returns {void}
   */
  renderizar(producto) {
    if (!this._contenedor) return;

    this._contenedor.innerHTML = `
      <div class="grilla-dos-columnas">

        <article class="tarjeta-modulo">
          <header class="tarjeta-modulo__cabecera">
            <div class="tarjeta-modulo__titulo-grupo">
              <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="tarjeta-modulo__titulo">Cadena de Fr&iacute;o y Manejo</h2>
            </div>
            <span style="font-size: 0.75rem; color: var(--color-marca-magenta); font-weight: 700; text-transform: uppercase;">
              Inocuidad
            </span>
          </header>

          <div class="alerta-caja alerta-caja--exito">
            <svg class="alerta-caja__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 14 14"></polyline>
            </svg>
            <div>
              <strong>Refrigeraci&oacute;n Ininterrumpida:</strong> ${producto.temperaturaConservacion}
            </div>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Plazo tras apertura:</span>
            <span class="tarjeta-modulo__valor">${producto.tiempoConsumoApertura}</span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Consistencia y Untabilidad:</span>
            <span class="tarjeta-modulo__valor">${producto.texturaSabor}</span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Envase:</span>
            <span class="tarjeta-modulo__valor">Frasco de vidrio herm&eacute;tico con tapa dorada</span>
          </div>
        </article>

        <article class="tarjeta-modulo">
          <header class="tarjeta-modulo__cabecera">
            <div class="tarjeta-modulo__titulo-grupo">
              <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <h2 class="tarjeta-modulo__titulo">Registros Oficiales y Fiscales</h2>
            </div>
          </header>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Registro Oficial S.A.C.S.:</span>
            <span class="tarjeta-modulo__valor" style="font-family: var(--fuente-tecnica); color: var(--color-marca-magenta); font-weight: 700;">
              ${producto.registroSanitario}
            </span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Control de Empaque C.P.E.:</span>
            <span class="tarjeta-modulo__valor" style="font-family: var(--fuente-tecnica);">${producto.cpe}</span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">N&uacute;mero de RIF:</span>
            <span class="tarjeta-modulo__valor" style="font-family: var(--fuente-tecnica);">${producto.rif}</span>
          </div>

          <div class="cuadricula-sellos" style="margin-top: 0.5rem;">
            <div class="sello-item">
              <svg class="sello-item__icono-svg" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
              <span class="sello-item__texto">Certificaci&oacute;n BPM</span>
            </div>
            <div class="sello-item">
              <svg class="sello-item__icono-svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <span class="sello-item__texto">Control S.A.C.S.</span>
            </div>
            <div class="sello-item">
              <svg class="sello-item__icono-svg" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              <span class="sello-item__texto">Inocuidad M.P.P.S.</span>
            </div>
          </div>
        </article>

      </div>
    `;
  }
}
