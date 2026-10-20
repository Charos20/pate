/**
 * Entidad de dominio encargada de representar y validar la trazabilidad del lote.
 */
export class EntidadTrazabilidad {
  /**
   * @param {string} numeroLote
   * @param {string} fechaElaboracion
   * @param {string} fechaVencimiento
   * @param {string} origenMateriaPrima
   * @param {string} codigoGs1
   * @param {string} gtin
   */
  constructor(numeroLote, fechaElaboracion, fechaVencimiento, origenMateriaPrima, codigoGs1, gtin) {
    this._numeroLote = numeroLote;
    this._fechaElaboracion = fechaElaboracion;
    this._fechaVencimiento = fechaVencimiento;
    this._origenMateriaPrima = origenMateriaPrima;
    this._codigoGs1 = codigoGs1;
    this._gtin = gtin;
  }

  get numeroLote() {
    return this._numeroLote;
  }

  get fechaElaboracion() {
    return this._fechaElaboracion;
  }

  get fechaVencimiento() {
    return this._fechaVencimiento;
  }

  get origenMateriaPrima() {
    return this._origenMateriaPrima;
  }

  get codigoGs1() {
    return this._codigoGs1;
  }

  get gtin() {
    return this._gtin;
  }

  /**
   * Determina si el lote actual ha expirado respecto a la fecha actual.
   * @returns {boolean}
   */
  estaVencido() {
    const fechaLimite = new Date(this._fechaVencimiento);
    const fechaActual = new Date();
    return fechaActual > fechaLimite;
  }

  /**
   * Calcula los días restantes de vida útil antes de la caducidad.
   * @returns {number}
   */
  calcularDiasParaVencimiento() {
    const fechaLimite = new Date(this._fechaVencimiento);
    const fechaActual = new Date();
    const diferenciaMilisegundos = fechaLimite.getTime() - fechaActual.getTime();
    return Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
  }
}
