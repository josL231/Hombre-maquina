document.addEventListener("DOMContentLoaded", () => {
  const btnContraste = document.getElementById("btn-contraste");
  const btnFuente = document.getElementById("btn-fuente");
  const parrafo = document.getElementById("parrafo-ti");
  const notificacion = document.getElementById("notificacion-accesible");
  const imagen = document.getElementById("imagen-interactiva");

  // Configuración inicial de la fuente (extraída del CSS renderizado o 16px por defecto)
  let tamanoFuente = parseInt(window.getComputedStyle(parrafo).fontSize) || 16;

  // 1. Toggle Modo Alto Contraste
  btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    const estaActivado = document.body.classList.contains("alto-contraste");

    if (estaActivado) {
      notificacion.textContent = "Alto contraste activado";
    } else {
      notificacion.textContent = "Alto contraste desactivado";
    }
  });

  // 2. Incrementar tamaño de fuente en 2px por clic
  btnFuente.addEventListener("click", () => {
    tamanoFuente += 2;
    parrafo.style.fontSize = `${tamanoFuente}px`;
    notificacion.textContent = `Tamaño de fuente aumentado a ${tamanoFuente} píxeles`;
  });

  // 3. Imagen interactiva: Aumentar/restablecer tamaño al dar clic
  function cambiarTamanoImagen() {
    imagen.classList.toggle("ampliada");
    if (imagen.classList.contains("ampliada")) {
      notificacion.textContent = "Imagen ampliada";
    } else {
      notificacion.textContent = "Imagen restablecida a tamaño normal";
    }
  }

  imagen.addEventListener("click", cambiarTamanoImagen);

  // Soporte de accesibilidad por teclado para la imagen (tecla Enter)
  imagen.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      cambiarTamanoImagen();
    }
  });
});