import { EntidadTrazabilidad } from '../../scripts/dominio/modelos/EntidadTrazabilidad.js';
import { EntidadNutricional } from '../../scripts/dominio/modelos/EntidadNutricional.js';
import { ServicioProducto } from '../../scripts/aplicacion/servicios/ServicioProducto.js';

/**
 * Suite de pruebas unitarias orientada a objetos para validar el dominio de EL ROJITO.
 */
export class PruebaProducto {
  constructor() {
    this._pruebasPasadas = 0;
    this._pruebasFallidas = 0;
    this._errores = [];
  }

  /**
   * Ejecuta todas las pruebas unitarias del módulo.
   * @returns {{ pasadas: number, fallidas: number, errores: string[] }}
   */
  ejecutarPruebas() {
    this._probarEntidadTrazabilidad();
    this._probarEntidadNutricional();
    this._probarServicioProducto();

    return {
      pasadas: this._pruebasPasadas,
      fallidas: this._pruebasFallidas,
      errores: this._errores
    };
  }

  _afirmar(condicion, descripcionPrueba) {
    if (condicion) {
      this._pruebasPasadas++;
      console.log(`✅ PASÓ: ${descripcionPrueba}`);
    } else {
      this._pruebasFallidas++;
      const mensajeError = `❌ FALLÓ: ${descripcionPrueba}`;
      this._errores.push(mensajeError);
      console.error(mensajeError);
    }
  }

  _probarEntidadTrazabilidad() {
    const trazabilidad = new EntidadTrazabilidad(
      'T22G250800',
      '2026-10-19',
      '2026-12-15',
      'El Toque de Jesús C.A., Rubio, Táchira',
      '(01)12345678912343(10)T22G250800',
      '12345678912343'
    );

    this._afirmar(trazabilidad.numeroLote === 'T22G250800', 'El número de lote oficial T22G250800 coincide');
    this._afirmar(trazabilidad.gtin === '12345678912343', 'El código GTIN de la etiqueta es asignado correctamente');
    this._afirmar(typeof trazabilidad.calcularDiasParaVencimiento() === 'number', 'El cálculo de días restantes retorna un valor numérico');
  }

  _probarEntidadNutricional() {
    const nutricion = new EntidadNutricional({
      energiaPorcion: 72,
      energia100g: 238,
      proteinas: 17.5,
      grasasTotales: 16.8,
      grasasSaturadas: 5.2,
      carbohidratos: 2.0,
      hierroMg: 9.8,
      vitaminaAMcg: 4350,
      vitaminaB12Mcg: 17.2,
      sodioMg: 390,
      ingredientes: ['Hígado de pollo', 'Corazón de pollo', 'Tocino', 'Especias seleccionadas'],
      alergenos: ['Sin Gluten', 'Sin Colorantes']
    });

    this._afirmar(nutricion.energiaPorcion === 72, 'La energía por porción es asignada correctamente');
    this._afirmar(nutricion.hierroMg === 9.8, 'El contenido de hierro hemo es correcto');
    this._afirmar(nutricion.contieneAlergeno('Sin Gluten'), 'Valida la etiqueta de alérgeno Sin Gluten');
    this._afirmar(!nutricion.contieneAlergeno('Lácteos'), 'Descarta alérgenos no presentes');
  }

  _probarServicioProducto() {
    const servicio = new ServicioProducto();
    const producto = servicio.obtenerProductoPorLote();

    this._afirmar(producto.marca === 'EL ROJITO', 'La marca oficial es EL ROJITO');
    this._afirmar(producto.contenidoNeto === '180 g', 'El contenido neto es 180 g');
    this._afirmar(producto.cpe === '01234567', 'El código C.P.E. oficial coincide con 01234567');
    this._afirmar(producto.rif === 'J-123456-7', 'El RIF del fabricante coincide con J-123456-7');
    this._afirmar(producto.registroSanitario.includes('A-144.410'), 'El registro sanitario S.A.C.S. contiene N° A-144.410');
    this._afirmar(producto.trazabilidad.numeroLote === 'T22G250800', 'El lote por defecto es el de la etiqueta T22G250800');
  }
}

// Ejecución directa en Node.js
const suite = new PruebaProducto();
const resultados = suite.ejecutarPruebas();
console.log(`\nResumen: ${resultados.pasadas} pruebas pasadas, ${resultados.fallidas} fallidas.`);
if (resultados.fallidas > 0) {
  process.exit(1);
}
