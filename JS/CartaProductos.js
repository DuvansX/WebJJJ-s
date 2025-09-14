let zoomActivo = false;
let isDragging = false;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let lastTouchTime = 0;
let touchStartTime = 0; // Para detectar tap vs drag
let lastTapTime = 0; // Agrega esta línea al inicio

function toggleCarta() {
    let carta = document.getElementById("carta");
    let cartaImg = document.getElementById("cartaImg");
    let btnUp = document.getElementById("btnUp");
    let btnDown = document.getElementById("btnDown");

    if (carta.style.display === "flex") {
        // Cerrar carta
        carta.style.display = "none";
        document.body.style.overflow = "auto";
    } else {
        // Abrir carta
        carta.style.display = "flex";
        document.body.style.overflow = "hidden";

        // Reiniciar completamente
        resetearImagen();
        btnDown.style.display = "block";
        btnUp.style.display = "none";
    }
}

function resetearImagen() {
    let cartaImg = document.getElementById("cartaImg");
    cartaImg.src = "Imagenes/carta.jpg";
    cartaImg.style.transform = "scale(1)";
    cartaImg.style.transformOrigin = "center center";
    cartaImg.style.transition = "transform 0.2s ease";
    cartaImg.style.borderRadius = "15px"; // Borde redondo
    cartaImg.style.overflow = "hidden"; // Para que el borde se vea bien
    
    // Resetear variables
    zoomActivo = false;
    isDragging = false;
    currentX = 0;
    currentY = 0;
    
    // Limpiar todos los event listeners
    limpiarEventListeners();
}

function limpiarEventListeners() {
    let cartaImg = document.getElementById("cartaImg");
    let carta = document.getElementById("carta");
    
    // Remover listeners existentes
    carta.removeEventListener("mousemove", manejarMouseMove);
    document.removeEventListener("mousedown", iniciarArrastre);
    document.removeEventListener("mousemove", arrastrarMouse);
    document.removeEventListener("mouseup", terminarArrastre);
    
    cartaImg.removeEventListener("touchstart", iniciarToque);
    cartaImg.removeEventListener("touchmove", arrastrarToque);
    document.removeEventListener("touchend", terminarToque);
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
    
    // Resetear posición si está con zoom
    if (zoomActivo) {
        currentX = 0;
        currentY = 0;
        aplicarTransform();
    }
}

function toggleZoom(event) {
    let cartaImg = document.getElementById("cartaImg");
    
    if (!zoomActivo) {
        activarZoom(event, cartaImg);
    } else {
        desactivarZoom(cartaImg);
    }
}

function activarZoom(event, cartaImg) {
    let rect = cartaImg.getBoundingClientRect();
    let offsetX = (event.clientX - rect.left) / rect.width;
    let offsetY = (event.clientY - rect.top) / rect.height;
    
    // Detectar dispositivo
    let isMobile = detectarMobile();
    let zoomLevel = isMobile ? 3 : 2.2; // Zoom más moderado
    
    cartaImg.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
    cartaImg.style.transform = `scale(${zoomLevel})`;
    cartaImg.style.transition = "transform 0.25s ease";
    
    zoomActivo = true;
    currentX = 0;
    currentY = 0;
    
    // Configurar event listeners según dispositivo
    if (isMobile) {
        configurarEventosMobile(cartaImg);
    } else {
        configurarEventosPC();
    }
}

function desactivarZoom(cartaImg) {
    cartaImg.style.transform = "scale(1)";
    cartaImg.style.transformOrigin = "center center";
    cartaImg.style.transition = "transform 0.25s ease";
    
    zoomActivo = false;
    isDragging = false;
    currentX = 0;
    currentY = 0;
    
    limpiarEventListeners();
}

function detectarMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0);
}

function configurarEventosPC() {
    let carta = document.getElementById("carta");
    carta.addEventListener("mousemove", manejarMouseMove);
    document.addEventListener("mousedown", iniciarArrastre);
    document.addEventListener("mousemove", arrastrarMouse);
    document.addEventListener("mouseup", terminarArrastre);
}

function configurarEventosMobile(cartaImg) {
    cartaImg.addEventListener("touchstart", iniciarToque, { passive: false });
    cartaImg.addEventListener("touchmove", arrastrarToque, { passive: false });
    cartaImg.addEventListener("touchend", manejarTouchEnd, { passive: false });
}

// FUNCIONES PC
function manejarMouseMove(event) {
    if (!isDragging && zoomActivo) {
        let cartaImg = document.getElementById("cartaImg");
        let rect = cartaImg.getBoundingClientRect();
        let offsetX = (event.clientX - rect.left) / rect.width;
        let offsetY = (event.clientY - rect.top) / rect.height;
        
        // Solo si está sobre la imagen
        if (offsetX >= 0 && offsetX <= 1 && offsetY >= 0 && offsetY <= 1) {
            cartaImg.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
            cartaImg.style.transition = "none";
            aplicarTransform();
        }
    }
}

function iniciarArrastre(event) {
    let cartaImg = document.getElementById("cartaImg");
    let rect = cartaImg.getBoundingClientRect();
    let offsetX = (event.clientX - rect.left) / rect.width;
    let offsetY = (event.clientY - rect.top) / rect.height;
    
    // Solo iniciar arrastre si está sobre la imagen y hay zoom
    if (zoomActivo && offsetX >= 0 && offsetX <= 1 && offsetY >= 0 && offsetY <= 1) {
        isDragging = true;
        startX = event.clientX - currentX;
        startY = event.clientY - currentY;
        document.body.style.cursor = "grabbing";
        event.preventDefault();
    }
}

function arrastrarMouse(event) {
    if (isDragging && zoomActivo) {
        // Calcular nueva posición
        let newX = event.clientX - startX;
        let newY = event.clientY - startY;
        
        // Aplicar límites más estrictos
        let maxLimit = 150;
        currentX = Math.max(-maxLimit, Math.min(maxLimit, newX));
        currentY = Math.max(-maxLimit, Math.min(maxLimit, newY));
        
        let cartaImg = document.getElementById("cartaImg");
        cartaImg.style.transition = "none";
        aplicarTransform();
        event.preventDefault();
    }
}

function terminarArrastre() {
    if (isDragging) {
        isDragging = false;
        document.body.style.cursor = "default";
    }
}

// FUNCIONES MOBILE
function iniciarToque(event) {
    if (zoomActivo && event.touches.length === 1) {
        // Detectar doble tap en móvil
        let currentTime = Date.now();
        if (currentTime - lastTapTime < 350) { // 350ms para doble tap
            let cartaImg = document.getElementById("cartaImg");
            desactivarZoom(cartaImg);
            lastTapTime = 0;
            event.preventDefault();
            return;
        }
        lastTapTime = currentTime;

        isDragging = true;
        startX = event.touches[0].clientX - currentX;
        startY = event.touches[0].clientY - currentY;
        lastTouchTime = Date.now();
        event.preventDefault();
    }
}

function arrastrarToque(event) {
    if (isDragging && zoomActivo && event.touches.length === 1) {
        // Throttle para mejor rendimiento
        let now = Date.now();
        if (now - lastTouchTime < 16) return; // ~60fps
        lastTouchTime = now;
        
        // Calcular movimiento con MUCHA menos sensibilidad en mobile
        let deltaX = (event.touches[0].clientX - startX) * 0.4; // 40% sensibilidad (era 80%)
        let deltaY = (event.touches[0].clientY - startY) * 0.4;
        
        // Límites más restrictivos para mobile
        let maxLimit = 120;
        currentX = Math.max(-maxLimit, Math.min(maxLimit, deltaX));
        currentY = Math.max(-maxLimit, Math.min(maxLimit, deltaY));
        
        let cartaImg = document.getElementById("cartaImg");
        cartaImg.style.transition = "none";
        aplicarTransform();
        event.preventDefault();
    }
}

function terminarToque() {
    if (isDragging) {
        isDragging = false;
        
        // Suavizar la parada
        let cartaImg = document.getElementById("cartaImg");
        if (cartaImg) {
            cartaImg.style.transition = "transform 0.1s ease-out";
        }
    }
}

function aplicarTransform() {
    let cartaImg = document.getElementById("cartaImg");
    let isMobile = detectarMobile();
    let zoomLevel = isMobile ? 3 : 2.2;
    
    cartaImg.style.transform = `scale(${zoomLevel}) translate(${currentX}px, ${currentY}px)`;
}