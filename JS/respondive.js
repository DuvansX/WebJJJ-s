document.addEventListener("DOMContentLoaded", function () {
    function ajustarResponsive() {
        let anchoVentana = window.innerWidth;
        let body = document.body;

        if (anchoVentana < 768) {
            body.classList.add("modo-movil");
            body.classList.remove("modo-escritorio");
        } else {
            body.classList.add("modo-escritorio");
            body.classList.remove("modo-movil");
        }
    }

    // Ejecutar cuando se cargue la página y en cada cambio de tamaño
    ajustarResponsive();
    window.addEventListener("resize", ajustarResponsive);
});
