import { ServicioProducto } from '../../aplicacion/servicios/ServicioProducto.js';
import { VistaTrazabilidad } from '../vistas/VistaTrazabilidad.js';
import { VistaSeguridad } from '../vistas/VistaSeguridad.js';
import { VistaMarca } from '../vistas/VistaMarca.js';

/**
 * Controlador principal encargado de coordinar eventos, vistas, galería y datos de EL ROJITO.
 */
export class ControladorPrincipal {
  /**
   * @param {Document} documento
   * @param {Window} ventana
   */
  constructor(documento, ventana) {
    this._documento = documento;
    this._ventana = ventana;
    this._servicioProducto = new ServicioProducto();

    this._vistaTrazabilidad = null;
    this._vistaSeguridad = null;
    this._vistaMarca = null;

    this._pestanasBotones = [];
    this._panelesContenido = [];
    this._botonesGaleria = [];
    this._imagenPrincipalGaleria = null;
  }

  /**
   * Inicializa la aplicación, enlaza elementos del DOM y renderiza los componentes.
   * @returns {void}
   */
  inicializar() {
    this._capturarElementosDom();
    this._instanciarVistas();

    const codigoLote = this._extraerParametroLote();
    const producto = this._servicioProducto.obtenerProductoPorLote(codigoLote);

    this._renderizarCabecera(producto);
    this._renderizarVistas(producto);
    this._enlazarEventosPestanas();
    this._enlazarEventosGaleria();
  }

  /**
   * Captura y almacena las referencias de los elementos del DOM.
   * @private
   */
  _capturarElementosDom() {
    this._contenedorTrazabilidad = this._documento.getElementById('panel-trazabilidad');
    this._contenedorSeguridad = this._documento.getElementById('panel-seguridad');
    this._contenedorMarca = this._documento.getElementById('panel-marca');

    this._elementoTituloProducto = this._documento.getElementById('titulo-producto');
    this._elementoDescripcionProducto = this._documento.getElementById('descripcion-producto');
    this._elementoLoteInsignia = this._documento.getElementById('insignia-lote-actual');
    this._elementoMarcaEtiqueta = this._documento.getElementById('marca-etiqueta');
    this._elementoMisionHero = this._documento.getElementById('hero-mision-texto');
    this._elementoVisionHero = this._documento.getElementById('hero-vision-texto');
    this._elementoGramajeHero = this._documento.getElementById('hero-gramaje');
    this._elementoTemperaturaHero = this._documento.getElementById('hero-temperatura');
    this._elementoSacsHero = this._documento.getElementById('hero-sacs');
    this._elementoFabricanteHero = this._documento.getElementById('hero-fabricante');

    this._pestanasBotones = Array.from(this._documento.querySelectorAll('.boton-pestana'));
    this._panelesContenido = Array.from(this._documento.querySelectorAll('.seccion-panel'));

    this._botonesGaleria = Array.from(this._documento.querySelectorAll('.selector-galeria__boton'));
    this._imagenPrincipalGaleria = this._documento.getElementById('imagen-producto-principal');
  }

  /**
   * Instancia las clases especializadas de vista activas.
   * @private
   */
  _instanciarVistas() {
    this._vistaTrazabilidad = new VistaTrazabilidad(this._contenedorTrazabilidad);
    this._vistaSeguridad = new VistaSeguridad(this._contenedorSeguridad);
    this._vistaMarca = new VistaMarca(this._contenedorMarca);
  }

  /**
   * Extrae el código de lote de los parámetros de la URL si existe.
   * @returns {string|null}
   * @private
   */
  _extraerParametroLote() {
    const parametros = new URLSearchParams(this._ventana.location.search);
    return parametros.get('lote');
  }

  /**
   * Renderiza los textos principales de la cabecera, Misión, Visión y especificaciones rápidas.
   * @param {import('../../dominio/modelos/EntidadProducto.js').EntidadProducto} producto
   * @private
   */
  _renderizarCabecera(producto) {
    if (this._elementoTituloProducto) {
      this._elementoTituloProducto.innerHTML = `${producto.nombre}`;
    }
    if (this._elementoMarcaEtiqueta) {
      this._elementoMarcaEtiqueta.innerHTML = `⭐ MARCA: ${producto.marca}`;
    }
    if (this._elementoDescripcionProducto) {
      this._elementoDescripcionProducto.innerHTML = `${producto.descripcion}`;
    }
    if (this._elementoMisionHero) {
      this._elementoMisionHero.innerHTML = `&ldquo;${producto.mision}&rdquo;`;
    }
    if (this._elementoVisionHero) {
      this._elementoVisionHero.innerHTML = `&ldquo;${producto.vision}&rdquo;`;
    }
    if (this._elementoLoteInsignia) {
      this._elementoLoteInsignia.innerHTML = `Lote: ${producto.trazabilidad.numeroLote}`;
    }
    if (this._elementoGramajeHero) {
      this._elementoGramajeHero.innerHTML = producto.contenidoNeto;
    }
    if (this._elementoTemperaturaHero) {
      this._elementoTemperaturaHero.innerHTML = `5 &deg;C a 8 &deg;C`;
    }
    if (this._elementoSacsHero) {
      this._elementoSacsHero.innerHTML = `N&deg; A-144.410`;
    }
    if (this._elementoFabricanteHero) {
      this._elementoFabricanteHero.innerHTML = `Rubio, T&aacute;chira`;
    }
  }

  /**
   * Ejecuta el renderizado de cada vista especializada activa.
   * @param {import('../../dominio/modelos/EntidadProducto.js').EntidadProducto} producto
   * @private
   */
  _renderizarVistas(producto) {
    if (this._vistaTrazabilidad) {
      this._vistaTrazabilidad.renderizar(producto.trazabilidad);
    }
    if (this._vistaSeguridad) {
      this._vistaSeguridad.renderizar(producto);
    }
    if (this._vistaMarca) {
      this._vistaMarca.renderizar(producto);
    }
  }

  /**
   * Configura los escuchadores de eventos para el cambio de pestaña táctil.
   * @private
   */
  _enlazarEventosPestanas() {
    this._pestanasBotones.forEach((boton) => {
      boton.addEventListener('click', () => {
        const objetivoId = boton.getAttribute('data-objetivo');
        if (!objetivoId) return;

        this._cambiarPestanaActiva(boton, objetivoId);
      });
    });
  }

  /**
   * Alterna la visibilidad entre paneles según la pestaña seleccionada.
   * @param {HTMLButtonElement} botonSeleccionado
   * @param {string} objetivoId
   * @private
   */
  _cambiarPestanaActiva(botonSeleccionado, objetivoId) {
    this._pestanasBotones.forEach((btn) => {
      btn.classList.remove('boton-pestana--activo');
      btn.setAttribute('aria-selected', 'false');
    });

    botonSeleccionado.classList.add('boton-pestana--activo');
    botonSeleccionado.setAttribute('aria-selected', 'true');

    this._panelesContenido.forEach((panel) => {
      if (panel.id === objetivoId) {
        panel.classList.add('seccion-panel--visible');
      } else {
        panel.classList.remove('seccion-panel--visible');
      }
    });
  }

  /**
   * Configura la interactividad para alternar entre la foto de frascos y el logo oficial.
   * @private
   */
  _enlazarEventosGaleria() {
    if (!this._imagenPrincipalGaleria || this._botonesGaleria.length === 0) return;

    this._botonesGaleria.forEach((boton) => {
      boton.addEventListener('click', () => {
        const rutaImagen = boton.getAttribute('data-imagen');
        if (!rutaImagen) return;

        this._botonesGaleria.forEach((btn) => btn.classList.remove('selector-galeria__boton--activo'));
        boton.classList.add('selector-galeria__boton--activo');

        this._imagenPrincipalGaleria.style.opacity = '0';
        setTimeout(() => {
          this._imagenPrincipalGaleria.src = rutaImagen;
          this._imagenPrincipalGaleria.style.opacity = '1';
        }, 150);
      });
    });
  }
}
