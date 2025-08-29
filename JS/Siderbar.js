const btn1 = document.querySelector('#btn1');
const sidebar1 = document.querySelector('.sidebar1');
const srcBtn1 = document.querySelector('#srcBtn1');

function toggleSidebar() {
    sidebar1.classList.toggle('active1');
}

function openSidebar() {
    sidebar1.classList.add('active1');
}

function closeSidebar() {
    sidebar1.classList.remove('active1');
}

if (btn1) btn1.addEventListener('click', toggleSidebar);
if (srcBtn1) srcBtn1.addEventListener('click', toggleSidebar);

document.addEventListener('click', function(event) {
    if (sidebar1.classList.contains('active1')) {
        if (!sidebar1.contains(event.target)) {
            closeSidebar();
        }
    }
});

if (sidebar1) {
    sidebar1.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}