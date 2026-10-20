/**
 * Vista encargada de renderizar la trazabilidad y control logístico exclusivo del lote T22G250800.
 */
export class VistaTrazabilidad {
  /**
   * @param {HTMLElement} contenedorElemento
   */
  constructor(contenedorElemento) {
    this._contenedor = contenedorElemento;
  }

  /**
   * Renderiza la información de trazabilidad sin datos redundantes de otras secciones.
   * @param {import('../../dominio/modelos/EntidadTrazabilidad.js').EntidadTrazabilidad} trazabilidad
   * @returns {void}
   */
  renderizar(trazabilidad) {
    if (!this._contenedor) return;

    const estaVencido = trazabilidad.estaVencido();
    const diasRestantes = trazabilidad.calcularDiasParaVencimiento();

    const estadoAlertaClase = estaVencido ? 'alerta-caja--peligro' : 'alerta-caja--exito';
    const iconoAlertaSvg = estaVencido
      ? `<svg class="alerta-caja__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
      : `<svg class="alerta-caja__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

    const estadoAlertaTexto = estaVencido
      ? 'Atenci&oacute;n Sanitaria: Este lote ha superado la fecha l&iacute;mite recomendada.'
      : `Lote Oficial Verificado: Apto para consumo humano directo (${diasRestantes} d&iacute;as de vida &uacute;til estimada).`;

    this._contenedor.innerHTML = `
      <div class="grilla-dos-columnas">

        <article class="tarjeta-modulo">
          <header class="tarjeta-modulo__cabecera">
            <div class="tarjeta-modulo__titulo-grupo">
              <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <h2 class="tarjeta-modulo__titulo">Control de Lote y Partida</h2>
            </div>
            <span style="font-size: 0.75rem; color: var(--color-marca-magenta); font-weight: 700;">
              LOTE OFICIAL
            </span>
          </header>

          <div class="alerta-caja ${estadoAlertaClase}">
            ${iconoAlertaSvg}
            <div>${estadoAlertaTexto}</div>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">N&uacute;mero de Lote:</span>
            <span class="tarjeta-modulo__valor" style="font-family: var(--fuente-tecnica); color: var(--color-marca-magenta); font-size: 1.15rem; font-weight: 800;">
              ${trazabilidad.numeroLote}
            </span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Hora de Fabricaci&oacute;n:</span>
            <span class="tarjeta-modulo__valor" style="font-family: var(--fuente-tecnica); font-weight: 700;">17:02</span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Fecha de Envasado:</span>
            <span class="tarjeta-modulo__valor">${trazabilidad.fechaElaboracion}</span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Fecha de Caducidad:</span>
            <span class="tarjeta-modulo__valor">${trazabilidad.fechaVencimiento}</span>
          </div>
        </article>

        <article class="tarjeta-modulo">
          <header class="tarjeta-modulo__cabecera">
            <div class="tarjeta-modulo__titulo-grupo">
              <svg class="tarjeta-modulo__icono-svg" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
              </svg>
              <h2 class="tarjeta-modulo__titulo">Lectura Digital GS1 Link</h2>
            </div>
          </header>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">C&oacute;digo GTIN / EAN:</span>
            <span class="tarjeta-modulo__valor" style="font-family: var(--fuente-tecnica); font-weight: 700;">${trazabilidad.gtin}</span>
          </div>

          <div class="tarjeta-modulo__campo">
            <span class="tarjeta-modulo__etiqueta">Enlace Digital de Trazabilidad:</span>
            <span class="tarjeta-modulo__valor" style="word-break: break-all; font-family: var(--fuente-tecnica); font-size: 0.82rem; color: var(--color-texto-secundario);">
              ${trazabilidad.codigoGs1}
            </span>
          </div>

          <div style="background-color: var(--color-fondo-coral-suave); border: 1px dashed var(--color-borde-cristal); border-radius: 0.85rem; padding: 0.85rem; margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.5; color: var(--color-marca-burdeos-titulo);">
            🔍 <strong>Verificaci&oacute;n Inmutable:</strong> Este c&oacute;digo permite la auditor&iacute;a inmediata de la partida en puntos de distribuci&oacute;n y organismos sanitarios.
          </div>
        </article>

      </div>
    `;
  }
}
