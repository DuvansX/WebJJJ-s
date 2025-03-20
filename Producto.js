let cart = JSON.parse(localStorage.getItem("carrito")) || [];
let cartTotal = 0;
const MAX_PRODUCTS = 20; // Límite de productos en el carrito
const MAX_VISIBLE_PRODUCTS = 5; // Máximo de productos visibles antes de mostrar scroll

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
        let productText = `${item.name} - ${formatPrice(item.price * item.quantity)}`;
        if (item.quantity >= 2) {
            productText += ` (x${item.quantity})`;
        }
        nameSpan.textContent = productText;
        nameSpan.style.fontWeight = "bold";

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = "flex";
        buttonContainer.style.gap = "5px";

        const incrementBtn = document.createElement('button');
        incrementBtn.textContent = "+";
        incrementBtn.style.backgroundColor = "black";
        incrementBtn.style.color = "white";
        incrementBtn.style.border = "none";
        incrementBtn.style.padding = "5px 10px";
        incrementBtn.style.cursor = "pointer";
        incrementBtn.style.borderRadius = "5px";
        incrementBtn.style.fontWeight = "bold";
        incrementBtn.onclick = () => incrementQuantity(index);

        const decrementBtn = document.createElement('button');
        decrementBtn.textContent = "-";
        decrementBtn.style.backgroundColor = "black";
        decrementBtn.style.color = "white";
        decrementBtn.style.border = "none";
        decrementBtn.style.padding = "5px 10px";
        decrementBtn.style.cursor = "pointer";
        decrementBtn.style.borderRadius = "5px";
        decrementBtn.style.fontWeight = "bold";
        decrementBtn.onclick = () => decrementQuantity(index);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Eliminar";
        removeBtn.style.backgroundColor = "#ffb700";
        removeBtn.style.color = "black";
        removeBtn.style.border = "none";
        removeBtn.style.padding = "5px 10px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.borderRadius = "5px";
        removeBtn.style.fontWeight = "bold";
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
        mensaje += `- ${item.name} x${item.quantity}: $${formatPrice(item.price * item.quantity)}\n`;
    });

    mensaje += `\nTotal: $${formatPrice(cartTotal)}`;

    const numeroWhatsApp = "573105813873"; // Reemplaza con tu número real
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
}


updateCart();

