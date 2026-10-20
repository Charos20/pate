/**
 * Entidad principal que agrupa el dominio completo del producto untable EL ROJITO.
 */
export class EntidadProducto {
  /**
   * @param {object} parametros
   * @param {string} parametros.marca
   * @param {string} parametros.nombre
   * @param {string} parametros.descripcion
   * @param {string} parametros.fabricante
   * @param {string} parametros.rif
   * @param {string} parametros.cpe
   * @param {string} parametros.contenidoNeto
   * @param {string} parametros.texturaSabor
   * @param {string} parametros.mision
   * @param {string} parametros.vision
   * @param {import('./EntidadTrazabilidad.js').EntidadTrazabilidad} parametros.trazabilidad
   * @param {import('./EntidadNutricional.js').EntidadNutricional} parametros.nutricion
   * @param {string} parametros.temperaturaConservacion
   * @param {string} parametros.tiempoConsumoApertura
   * @param {string} parametros.registroSanitario
   * @param {string[]} parametros.certificaciones
   * @param {string[]} parametros.sugerenciasRecetas
   * @param {object} parametros.canalesContacto
   */
  constructor(parametros) {
    this._marca = parametros.marca;
    this._nombre = parametros.nombre;
    this._descripcion = parametros.descripcion;
    this._fabricante = parametros.fabricante;
    this._rif = parametros.rif;
    this._cpe = parametros.cpe;
    this._contenidoNeto = parametros.contenidoNeto;
    this._texturaSabor = parametros.texturaSabor;
    this._mision = parametros.mision;
    this._vision = parametros.vision;
    this._trazabilidad = parametros.trazabilidad;
    this._nutricion = parametros.nutricion;
    this._temperaturaConservacion = parametros.temperaturaConservacion;
    this._tiempoConsumoApertura = parametros.tiempoConsumoApertura;
    this._registroSanitario = parametros.registroSanitario;
    this._certificaciones = Array.isArray(parametros.certificaciones) ? [...parametros.certificaciones] : [];
    this._sugerenciasRecetas = Array.isArray(parametros.sugerenciasRecetas) ? [...parametros.sugerenciasRecetas] : [];
    this._canalesContacto = { ...parametros.canalesContacto };
  }

  get marca() { return this._marca; }
  get nombre() { return this._nombre; }
  get descripcion() { return this._descripcion; }
  get fabricante() { return this._fabricante; }
  get rif() { return this._rif; }
  get cpe() { return this._cpe; }
  get contenidoNeto() { return this._contenidoNeto; }
  get texturaSabor() { return this._texturaSabor; }
  get mision() { return this._mision; }
  get vision() { return this._vision; }
  get trazabilidad() { return this._trazabilidad; }
  get nutricion() { return this._nutricion; }
  get temperaturaConservacion() { return this._temperaturaConservacion; }
  get tiempoConsumoApertura() { return this._tiempoConsumoApertura; }
  get registroSanitario() { return this._registroSanitario; }
  get certificaciones() { return [...this._certificaciones]; }
  get sugerenciasRecetas() { return [...this._sugerenciasRecetas]; }
  get canalesContacto() { return { ...this._canalesContacto }; }
}
