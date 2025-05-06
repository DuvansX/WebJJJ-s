let btn1 = document.querySelector('#btn1');
let sidebar1 = document.querySelector('.sidebar1');
let srcBtn1 = document.querySelector('#srcBtn1');

function toggleSidebar() {
    sidebar1.classList.toggle('active1');
}

btn1.onclick = toggleSidebar;
srcBtn1.onclick = toggleSidebar;

// Variables para el gesto táctil
let touchStartX = 0;
let touchEndX = 0;

// Función para manejar el gesto
function handleGesture() {
    let deltaX = touchEndX - touchStartX;

    // Umbral mínimo para considerar que es un deslizamiento
    if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            // Deslizó hacia la derecha
            sidebar1.classList.add('active1');
        } else {
            // Deslizó hacia la izquierda
            sidebar1.classList.remove('active1');
        }
    }
}

// Escuchamos los eventos táctiles
document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
}, false);
