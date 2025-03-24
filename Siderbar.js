let btn1 = document.querySelector('#btn1');
let sidebar1 = document.querySelector('.sidebar1');
let srcBtn1 = document.querySelector('#srcBtn1'); 


function toggleSidebar() {
    sidebar1.classList.toggle('active1');
}


btn1.onclick = toggleSidebar;

srcBtn1.onclick = toggleSidebar;