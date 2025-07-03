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
