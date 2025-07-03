function likeProduct(btn) {
    btn.classList.toggle("liked");

    const product = btn.closest('.product');
    const productId = product.id;

    // Obtener lista actual de favoritos
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (btn.classList.contains("liked")) {
        if (!favorites.includes(productId)) {
            favorites.push(productId);
        }
    } else {
        favorites = favorites.filter(id => id !== productId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Al cargar la página, marcar los productos guardados
window.addEventListener('DOMContentLoaded', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach(productId => {
        const product = document.getElementById(productId);
        if (product) {
            const likeBtn = product.querySelector('.like-button');
            if (likeBtn) {
                likeBtn.classList.add('liked');
            }
        }
    });
});