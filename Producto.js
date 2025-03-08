let cart = JSON.parse(localStorage.getItem("carrito")) || [];
let cartTotal = 0;
const MAX_PRODUCTS = 20; // Límite de productos en el carrito

cart.forEach(producto => {
    cartTotal += producto.price * producto.quantity;
});

function formatPrice(price) {
    return (price * 1000).toLocaleString("es-CO");
}

function addToCart(productName, price) {
    const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalProducts >= MAX_PRODUCTS) return;

    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    cartTotal += price;
    updateCart();
}

function removeFromCart(index) {
    cartTotal -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
    updateCart();
}

function incrementQuantity(index) {
    const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalProducts < MAX_PRODUCTS) {
        cart[index].quantity += 1;
        cartTotal += cart[index].price;
        updateCart();
    }
}

function decrementQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        cartTotal -= cart[index].price;
        updateCart();
    } else {
        removeFromCart(index);
    }
}

function updateCart() {
    const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalProducts;
    document.getElementById('cart-total').textContent = formatPrice(cartTotal);

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${formatPrice(item.price * item.quantity)}
            <button onclick="incrementQuantity(${index})">+</button>
            <button onclick="decrementQuantity(${index})">-</button>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(li);
    });

    const cartWarning = document.getElementById('cart-warning');
    if (totalProducts >= MAX_PRODUCTS) {
        cartWarning.innerHTML = "⚠️ Máximo alcanzado";
        cartWarning.style.display = "inline-block";
    } else {
        cartWarning.innerHTML = "";
        cartWarning.style.display = "none";
    }

    localStorage.setItem("carrito", JSON.stringify(cart));
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    let message = "Hola, quiero hacer un pedido de:\n";
    cart.forEach(item => {
        message += `- ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `Total: ${formatPrice(cartTotal)}`;

    const phoneNumber = "573105813873";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function toggleCart() {
    const cartDetails = document.getElementById('cart-details');
    cartDetails.classList.toggle('active');
}

updateCart();
