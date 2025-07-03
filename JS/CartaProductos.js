let zoomActivo = false;

function toggleCarta() {
    let carta = document.getElementById("carta");
    let cartaImg = document.getElementById("cartaImg");
    let btnUp = document.getElementById("btnUp");
    let btnDown = document.getElementById("btnDown");

    if (carta.style.display === "flex") {
        // Cerrar carta
        carta.style.display = "none";
        document.body.style.overflow = "auto"; // Habilitar desplazamiento nuevamente
    } else {
        // Abrir carta y bloquear el resto de la página
        carta.style.display = "flex";
        document.body.style.overflow = "hidden"; // Bloquear desplazamiento

        // Reiniciar todo al abrir la carta (como si fuera la primera vez)
        cartaImg.src = "Imagenes/carta.jpg"; // Siempre inicia con la primera imagen
        cartaImg.style.transform = "scale(1)"; // Resetear zoom
        cartaImg.style.transformOrigin = "center center";
        zoomActivo = false;
        cartaImg.removeEventListener("mousemove", moverZoom);

        // Mostrar el botón correcto
        btnDown.style.display = "block";
        btnUp.style.display = "none";
    }
}

function toggleImagen(event) {
    event.stopPropagation();
    let cartaImg = document.getElementById("cartaImg");
    let btnUp = document.getElementById("btnUp");
    let btnDown = document.getElementById("btnDown");

    if (cartaImg.src.includes("carta.jpg")) {
        cartaImg.src = "Imagenes/carta2.jpg";
        btnDown.style.display = "none";
        btnUp.style.display = "block";
    } else {
        cartaImg.src = "Imagenes/carta.jpg";
        btnDown.style.display = "block";
        btnUp.style.display = "none";
    }
}

function toggleZoom(event) {
    let cartaImg = document.getElementById("cartaImg");
    let rect = cartaImg.getBoundingClientRect();
    let offsetX = (event.clientX - rect.left) / rect.width;
    let offsetY = (event.clientY - rect.top) / rect.height;

    if (!zoomActivo) {
        cartaImg.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
        cartaImg.style.transform = "scale(2)";
        zoomActivo = true;
        cartaImg.addEventListener("mousemove", moverZoom);
    } else {
        cartaImg.style.transform = "scale(1)";
        cartaImg.style.transformOrigin = "center center"; // Resetear al centro
        zoomActivo = false;
        cartaImg.removeEventListener("mousemove", moverZoom);
    }
}

function moverZoom(event) {
    let cartaImg = document.getElementById("cartaImg");
    let rect = cartaImg.getBoundingClientRect();
    let offsetX = (event.clientX - rect.left) / rect.width;
    let offsetY = (event.clientY - rect.top) / rect.height;
    cartaImg.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
}
