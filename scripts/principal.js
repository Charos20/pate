import { ControladorPrincipal } from './presentacion/controladores/ControladorPrincipal.js';

/**
 * Clase de arranque (Bootstrap) para la inicialización orientada a objetos de la aplicación.
 */
export class IniciadorAplicacion {
  /**
   * Arranca la aplicación cuando el árbol DOM está completamente cargado.
   * @returns {void}
   */
  static arrancar() {
    const controlador = new ControladorPrincipal(document, window);
    controlador.inicializar();
  }
}

// Inicialización controlada tras la carga del DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    IniciadorAplicacion.arrancar();
  });
} else {
  IniciadorAplicacion.arrancar();
}
