/**
 * Vista encargada de renderizar la comunidad, redes sociales, fabricante y recetas de EL ROJITO.
 */
export class VistaMarca {
  /**
   * @param {HTMLElement} contenedorElemento
   */
  constructor(contenedorElemento) {
    this._contenedor = contenedorElemento;
  }

  /**
   * Renderiza el contenido de redes sociales, fabricante y recetas sin redundancias.
   * @param {import('../../dominio/modelos/EntidadProducto.js').EntidadProducto} producto
   * @returns {void}
   */
  renderizar(producto) {
    if (!this._contenedor) return;

    const sugerenciasHtml = producto.sugerenciasRecetas
      .map((receta) => `
        <li class="lista-ingredientes__item">
          <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24" style="stroke: var(--color-tapa-dorada); width: 1.15rem; height: 1.15rem; margin-top: 0.15rem;">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span style="line-height: 1.5;">${receta}</span>
        </li>
      `)
      .join('');

    this._contenedor.innerHTML = `
      <div class="grilla-dos-columnas">

        <article class="tarjeta-modulo">
          <header class="tarjeta-modulo__cabecera">
            <div class="tarjeta-modulo__titulo-grupo">
              <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <h2 class="tarjeta-modulo__titulo">Redes Oficiales y Contacto</h2>
            </div>
          </header>
          
          <p style="font-size: var(--tamano-sm); color: var(--color-texto-secundario); line-height: 1.6;">
            &iexcl;Sigue nuestras cuentas oficiales para conocer puntos de venta, nuevas tandas de elaboraci&oacute;n y recetas recomendadas!
          </p>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Instagram Oficial:</span>
            <a href="${producto.canalesContacto.instagramUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-instagram); font-weight: 700; text-decoration: none;">
              ${producto.canalesContacto.instagram} &nearr;
            </a>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">WhatsApp de Atenci&oacute;n:</span>
            <a href="${producto.canalesContacto.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-whatsapp); font-weight: 700; text-decoration: none;">
              ${producto.canalesContacto.whatsapp} &nearr;
            </a>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Empresa Fabricante:</span>
            <span class="tarjeta-modulo__valor" style="font-weight: 700; color: var(--color-marca-burdeos-titulo);">
              ${producto.fabricante}
            </span>
          </div>

          <div class="barra-contacto-rapido" style="margin-top: 0.5rem;">
            <a href="${producto.canalesContacto.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="boton-social boton-social--whatsapp">
              <svg style="width: 1.2rem; height: 1.2rem; fill: currentColor;" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
              </svg>
              <span>Escribir al WhatsApp</span>
            </a>
            <a href="${producto.canalesContacto.instagramUrl}" target="_blank" rel="noopener noreferrer" class="boton-social boton-social--instagram">
              <svg style="width: 1.2rem; height: 1.2rem; fill: currentColor;" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Ver Instagram</span>
            </a>
          </div>
        </article>

        <article class="tarjeta-modulo">
          <header class="tarjeta-modulo__cabecera">
            <div class="tarjeta-modulo__titulo-grupo">
              <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              <h2 class="tarjeta-modulo__titulo">Sugerencias y Degustaci&oacute;n</h2>
            </div>
          </header>
          <ul class="lista-ingredientes">
            ${sugerenciasHtml}
          </ul>
        </article>

      </div>
    `;
  }
}
