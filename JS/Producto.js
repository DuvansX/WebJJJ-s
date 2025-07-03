

let cart = JSON.parse(localStorage.getItem("carrito")) || [];
let cartTotal = 0;
const MAX_PRODUCTS = 20;

let tipoProducto = localStorage.getItem("tipoProducto");
if (!tipoProducto) {
    const url = window.location.href;
    tipoProducto = url.includes("Productocigarreria.html") ? "licor" : "comida";
    localStorage.setItem("tipoProducto", tipoProducto);
}

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
        const tipoProducto = localStorage.getItem("tipoProducto") || "comida";
        cart.push({ name: productName, price: price, quantity: 1, fuente: tipoProducto });
    }
    cartTotal += price;
    updateCart();
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cartTotal = Math.max(0, cartTotal - cart[index].price * cart[index].quantity);
        cart.splice(index, 1);
        updateCart();
    }
}

function incrementQuantity(index) {
    const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalProducts < MAX_PRODUCTS && index >= 0 && index < cart.length) {
        cart[index].quantity += 1;
        cartTotal += cart[index].price;
        updateCart();
    }
}

function decrementQuantity(index) {
    if (index >= 0 && index < cart.length) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            cartTotal = Math.max(0, cartTotal - cart[index].price);
            updateCart();
        } else {
            removeFromCart(index);
        }
    }
}

function updateCart() {
    cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);

    document.getElementById('cart-count').textContent = totalProducts;
    document.getElementById('cart-total').textContent = formatPrice(cartTotal);

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cartItems.style.maxHeight = "200px";
    cartItems.style.overflowY = "auto";

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "5px 0";

        const nameSpan = document.createElement('span');
        nameSpan.style.fontWeight = "bold";
        nameSpan.style.display = "flex";
        nameSpan.style.alignItems = "center";
        nameSpan.style.gap = "5px";

        // Crear icono Lucide
        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-lucide', item.fuente === "licor" ? "wine" : "utensils");
        iconElement.style.width = "18px";
        iconElement.style.height = "18px";

        const productText = document.createElement('span');
        productText.textContent = `${item.name} - ${formatPrice(item.price * item.quantity)}${item.quantity >= 2 ? ` (x${item.quantity})` : ''}`;

        nameSpan.appendChild(iconElement);
        nameSpan.appendChild(productText);

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = "flex";
        buttonContainer.style.gap = "5px";

        const incrementBtn = document.createElement('button');
        incrementBtn.textContent = "+";
        styleButton(incrementBtn, "black", "white");
        incrementBtn.onclick = () => incrementQuantity(index);

        const decrementBtn = document.createElement('button');
        decrementBtn.textContent = "-";
        styleButton(decrementBtn, "black", "white");
        decrementBtn.onclick = () => decrementQuantity(index);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Eliminar";
        styleButton(removeBtn, "#ffb700", "black");
        removeBtn.onclick = () => removeFromCart(index);

        buttonContainer.appendChild(incrementBtn);
        buttonContainer.appendChild(decrementBtn);
        buttonContainer.appendChild(removeBtn);

        li.appendChild(nameSpan);
        li.appendChild(buttonContainer);
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
    lucide.createIcons();  // Cargar iconos Lucide en la lista
}

function styleButton(btn, bgColor, textColor) {
    btn.style.backgroundColor = bgColor;
    btn.style.color = textColor;
    btn.style.border = "none";
    btn.style.padding = "5px 10px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "5px";
    btn.style.fontWeight = "bold";
}

function toggleCart() {
    const cartDetails = document.getElementById('cart-details');
    cartDetails.classList.toggle('active');
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "¡Hola! Quiero hacer un pedido:\n\n";

    cart.forEach(item => {
        const iconoTexto = item.fuente === "licor" ? "🍷" : "🍔";  // Emojis solo para WhatsApp
        mensaje += `- ${iconoTexto} ${item.name} x${item.quantity}: $${formatPrice(item.price * item.quantity)}\n`;
    });

    mensaje += `\nTotal: $${formatPrice(cartTotal)}`;

    const numeroWhatsApp = "573105813873";
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
}

// Mostrar carrito al cargar
updateCart();
