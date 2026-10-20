import { EntidadProducto } from '../../dominio/modelos/EntidadProducto.js';
import { EntidadTrazabilidad } from '../../dominio/modelos/EntidadTrazabilidad.js';
import { EntidadNutricional } from '../../dominio/modelos/EntidadNutricional.js';

/**
 * Servicio de aplicación encargado de proveer los datos oficiales de EL ROJITO.
 */
export class ServicioProducto {
  /**
   * Obtiene la entidad del producto untable según el lote especificado o el predeterminado.
   * @param {string} [codigoLote]
   * @returns {EntidadProducto}
   */
  obtenerProductoPorLote(codigoLote) {
    const loteFinal = codigoLote && codigoLote.trim() !== '' ? codigoLote.trim() : 'T22G250800';

    const trazabilidad = new EntidadTrazabilidad(
      loteFinal,
      '2026-10-19',
      '2026-12-15',
      'El Toque de Jes\u00fas C.A., Rubio, Estado T\u00e1chira, Venezuela',
      `(01)12345678912343(10)${loteFinal}`,
      '12345678912343'
    );

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
      ingredientes: [
        'H\u00edgado de pollo fresco seleccionado',
        'Coraz\u00f3n de pollo seleccionado',
        'Tocino de cerdo de primera calidad',
        'Especias naturales seleccionadas',
        'Sal marina yodada'
      ],
      alergenos: [
        'Sin Gluten (Gluten Free)',
        'Sin Colorantes Artificiales',
        'Sin Soya',
        'Elaborado bajo estrictas normas BPM'
      ]
    });

    return new EntidadProducto({
      marca: 'EL ROJITO',
      nombre: 'Pat\u00e9 de H\u00edgado',
      descripcion: 'Pasta untable nutritiva elaborada con materias primas locales de la m\u00e1s alta calidad e inocuidad alimentaria.',
      fabricante: 'El Toque de Jes\u00fas C.A., Rubio, Estado T\u00e1chira, Venezuela',
      rif: 'J-123456-7',
      cpe: '01234567',
      contenidoNeto: '180 g',
      texturaSabor: 'Consistencia suave y cremosa, f\u00e1cil de untar en tostadas o galletas.',
      mision: 'Elaborar y comercializar productos untables a base de h\u00edgado de pollo de la m\u00e1s alta calidad, inocuidad y valor nutricional, aprovechando materias primas locales y aplicando procesos estrictos de higiene y control, para ofrecer a las familias una alternativa pr\u00e1ctica, deliciosa y saludable en su alimentaci\u00f3n diaria.',
      vision: 'Ser una marca l\u00edder y referente en el mercado de alimentos procesados y derivados av\u00edcolas, reconocida por la excelencia, trazabilidad y sostenibilidad de sus productos, expandiendo nuestra presencia a nivel regional y nacional a trav\u00e9s de la innovaci\u00f3n continua en empaques y la confianza de nuestros consumidores.',
      trazabilidad: trazabilidad,
      nutricion: nutricion,
      temperaturaConservacion: 'Cons\u00e9rvese refrigerado entre 5 \u00b0C y 8 \u00b0C.',
      tiempoConsumoApertura: 'Una vez abierto, consumir en un plazo m\u00e1ximo de 48 a 72 horas.',
      registroSanitario: 'S.A.C.S. (M.P.P.S.) N\u00b0 A-144.410',
      certificaciones: [
        'Certificaci\u00f3n BPM (Buenas Pr\u00e1cticas de Manufactura)',
        'Registro Sanitario Oficial S.A.C.S. M.P.P.S. N\u00b0 A-144.410',
        'Control de Empaque C.P.E.: 01234567 | RIF: J-123456-7',
        'Fabricado en Rubio, Estado T\u00e1chira, Venezuela',
        'F\u00f3rmula Rica y Nutritiva con Alto Hierro Hemo'
      ],
      sugerenciasRecetas: [
        'Consistencia cremosa perfecta para untar sobre rodajas de pan tostado o canap\u00e9s.',
        'Dip gourmet para galletas saladas artesanales y crackers en reuniones familiares.',
        'Maridaje recomendado con quesos frescos de Los Andes y vinos j\u00f3venes.',
        'Merienda proteica y nutritiva de r\u00e1pida preparaci\u00f3n para el hogar.'
      ],
      canalesContacto: {
        whatsapp: '(0424) 7368426',
        whatsappUrl: 'https://wa.me/584247368426?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20el%20Pat%C3%A9%20El%20Rojito',
        instagram: '@ELTOQUEDEJESUS',
        instagramUrl: 'https://instagram.com/ELTOQUEDEJESUS',
        fabricanteUbicacion: 'El Toque de Jes\u00fas C.A., Rubio, Estado T\u00e1chira, Venezuela'
      }
    });
  }
}
