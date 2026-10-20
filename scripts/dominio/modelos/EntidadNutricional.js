/**
 * Entidad de dominio encargada de gestionar los valores nutricionales e ingredientes.
 */
export class EntidadNutricional {
  /**
   * @param {object} parametros
   * @param {number} parametros.energiaPorcion
   * @param {number} parametros.energia100g
   * @param {number} parametros.proteinas
   * @param {number} parametros.grasasTotales
   * @param {number} parametros.grasasSaturadas
   * @param {number} parametros.carbohidratos
   * @param {number} parametros.hierroMg
   * @param {number} parametros.vitaminaAMcg
   * @param {number} parametros.vitaminaB12Mcg
   * @param {number} parametros.sodioMg
   * @param {string[]} parametros.ingredientes
   * @param {string[]} parametros.alergenos
   */
  constructor(parametros) {
    this._energiaPorcion = parametros.energiaPorcion;
    this._energia100g = parametros.energia100g;
    this._proteinas = parametros.proteinas;
    this._grasasTotales = parametros.grasasTotales;
    this._grasasSaturadas = parametros.grasasSaturadas;
    this._carbohidratos = parametros.carbohidratos;
    this._hierroMg = parametros.hierroMg;
    this._vitaminaAMcg = parametros.vitaminaAMcg;
    this._vitaminaB12Mcg = parametros.vitaminaB12Mcg;
    this._sodioMg = parametros.sodioMg;
    this._ingredientes = Array.isArray(parametros.ingredientes) ? [...parametros.ingredientes] : [];
    this._alergenos = Array.isArray(parametros.alergenos) ? [...parametros.alergenos] : [];
  }

  get energiaPorcion() { return this._energiaPorcion; }
  get energia100g() { return this._energia100g; }
  get proteinas() { return this._proteinas; }
  get grasasTotales() { return this._grasasTotales; }
  get grasasSaturadas() { return this._grasasSaturadas; }
  get carbohidratos() { return this._carbohidratos; }
  get hierroMg() { return this._hierroMg; }
  get vitaminaAMcg() { return this._vitaminaAMcg; }
  get vitaminaB12Mcg() { return this._vitaminaB12Mcg; }
  get sodioMg() { return this._sodioMg; }
  get ingredientes() { return [...this._ingredientes]; }
  get alergenos() { return [...this._alergenos]; }

  /**
   * Verifica si el producto contiene un alérgeno específico.
   * @param {string} nombreAlergeno
   * @returns {boolean}
   */
  contieneAlergeno(nombreAlergeno) {
    return this._alergenos.some(
      (elemento) => elemento.toLowerCase() === nombreAlergeno.toLowerCase()
    );
  }
}
