// Elementos
const btn1 = document.querySelector('#btn1');
const sidebar1 = document.querySelector('.sidebar1');
const srcBtn1 = document.querySelector('#srcBtn1');

// Alternar visibilidad de la barra lateral
function toggleSidebar() {
    sidebar1.classList.toggle('active1');
}

// Abrir y cerrar según dirección
function openSidebar() {
    sidebar1.classList.add('active1');
}

function closeSidebar() {
    sidebar1.classList.remove('active1');
}

// Asignar eventos de clic
if (btn1) btn1.addEventListener('click', toggleSidebar);
if (srcBtn1) srcBtn1.addEventListener('click', toggleSidebar);

// Variables para detección de gesto táctil
let touchStartX = 0;
let touchEndX = 0;

// Manejar gesto táctil
function handleGesture() {
    const deltaX = touchEndX - touchStartX;

    // Umbral mínimo de deslizamiento
    if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            openSidebar(); // deslizó hacia la derecha
        } else {
            closeSidebar(); // deslizó hacia la izquierda
        }
    }
}

// Escuchar gestos táctiles (para móviles)
document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
}, false);
