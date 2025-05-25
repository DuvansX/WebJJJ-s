function toggleCategories() {
    const list = document.getElementById('category-list');
    list.classList.toggle('show');
}

function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'flex';
        } else if (product.getAttribute('data-category') === category) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });

    document.querySelectorAll('.categories button').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`.categories button[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    } else {
        document.querySelector('.categories button').classList.add('active');
    }

    // Cerrar el menú después de seleccionar
    const list = document.getElementById('category-list');
    list.classList.remove('show');
}

window.onload = function() {
    filterCategory('all'); // Mostrar todos los productos al cargar la página

    const firstBtn = document.querySelector('.categories button');
    if (firstBtn) firstBtn.classList.add('active');

    document.querySelectorAll('.categories button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.categories button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Cerrar el menú al hacer clic
            const list = document.getElementById('category-list');
            list.classList.remove('show');
        });
    });
};

  // Obtener el botón
  const btnSubir = document.getElementById("btnSubir");

  // Mostrar el botón cuando se baja 100px
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btnSubir.style.display = "block";
    } else {
      btnSubir.style.display = "none";
    }
  };

  // Al hacer clic, volver arriba suavemente
  btnSubir.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };