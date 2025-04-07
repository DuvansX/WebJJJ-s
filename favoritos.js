// Lista de TODOS los productos disponibles
const productos = [
    {
        id: "Bacardi Carta B",
        nombre: "Bacardi Carta Blanca",
        precio: 62000,
        imagen: "Bebidas/Bacardi/Bicadi-Carta-Blanca.webp"
    },
    {
        id: "himoshi-vodka",
        nombre: "HiMoShi Club Licor De Vodka I",
        precio: 470000,
        imagen: "Bebidas/Vodka/Hi-Mo-Shi-Club-Licor-Morado.webp"
    },
    {
        id: "himoshi-vodka-2",
        nombre: "HiMoShi Club Licor De Vodka II",
        precio: 470000,
        imagen: "Bebidas/Vodka/Hi-Mo-Shi-Club-Licor-Verde.webp"
    },
    {
        id: "Aguila-6Pack",
        nombre: "Aguila Original-Six Pack",
        precio: 19000,
        imagen: "Bebidas/Cervezas/AGUILA-LIGHT-ORIGINAL-SIX-PACK.webp"
    },
    {
        id: "Erdinger-Dunkel",
        nombre: "Erdinger Dunkel",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Erdinger Dunkel.webp"
    },
    {
        id: "Liefmans-Fruitesse",
        nombre: "Liefmans Fruitesse",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Liefmans-Fruitesse.webp"
    },
    {
        id: "Corona-Tropical-Frutos",
        nombre: "Corona Tropical-Frutos Rojos",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Corona-Tropical-Frutos-Rojos.webp"
    },
    {
        id: "Corona-Tropical-Limon",
        nombre: "Corona Tropical-Limon",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Corona-Tropical-Limon.webp"
    },
    {
        id: "Smirnoff-Ice",
        nombre: "Smirnoff Ice",
        precio: 8000,
        imagen: "Bebidas/Cervezas/Smirnoff-Ice-Original.webp"
    },
    {
        id: "Smirnoff-Lata",
        nombre: "Smirnoff Ice Lata",
        precio: 8000,
        imagen: "Bebidas/Cervezas/Sminroff-Ice-Original-Lata.webp"
    },
    {
        id: "Coronita-Six-Pack",
        nombre: "Corona Coronita Six Pack",
        precio: 21000,
        imagen: "Bebidas/Cervezas/Coronitas-6-Pack.webp"
    },
    {
        id: "Cerveza-Andina-6-Pack",
        nombre: "Cerveza Andina Six Pack",
        precio: 19000,
        imagen: "Bebidas/Cervezas/Cerveza-Andina-Six-Pack.webp"
    },
    {
        id: "Cerveza-Poker-6-Pack",
        nombre: "Cerveza Poker Six Pack",
        precio: 19000,
        imagen: "Bebidas/Cervezas/Cerveza-Poker-Six-Pack.webp"
    },
    {
        id: "Cerveza-Club-Colombia-6-Pack",
        nombre: "Club Colombia Six Pack",
        precio: 21000,
        imagen: "Bebidas/Cervezas/Club-Colombia-Six-Pack.webp"
    },
    {
        id: "Corona-Six-Pack",
        nombre: "Corona Extra Six Pack",
        precio: 24000,
        imagen: "Bebidas/Cervezas/Corona-Extra-Six-Pack.webp"
    },
    {
        id: "Budweiser-Six",
        nombre: "Budweiser Six Pack",
        precio: 24000,
        imagen: "Bebidas/Cervezas/Budweiser-Six-Pack.webp"
    }
    // Agrega todos los productos aquí...
];

// Mostrar solo los productos favoritos
window.addEventListener('DOMContentLoaded', () => {
    const favoritosIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const contenedor = document.getElementById('favoritos-container');

    const favoritos = productos.filter(p => favoritosIds.includes(p.id));

    if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>No tienes productos en favoritos.</p>";
        return;
    }

    favoritos.forEach(p => {
        const div = document.createElement('div');
        div.className = "product";
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h2>${p.nombre}</h2>
            <p class="price">$${p.precio.toLocaleString()}</p>
            <button onclick="addToCart('${p.nombre}', ${p.precio})">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
});
