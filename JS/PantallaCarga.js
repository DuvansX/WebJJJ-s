// Esperar a que todos los recursos se hayan cargado
window.addEventListener("load", function() {
    // Desactivar el bloqueo de interacción
    document.body.classList.remove("locked");

    // Ocultar la pantalla de carga
    let loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("hidden");

    // Desaparecer completamente después de la animación
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1000);
    
    // Mostrar el contenido de la página
    document.getElementById("contenido").classList.remove("hidden");
  });

  // Bloquear la interacción del usuario al cargar
  document.body.classList.add("locked");