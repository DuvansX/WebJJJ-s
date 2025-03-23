let cart = JSON.parse(localStorage.getItem("carrito")) || [];

function formatPrice(price) {
  return (price * 1000).toLocaleString("es-CO");
}

function mostrarPedido() {
  const listaPedidos = document.getElementById("pedido-lista");
  const totalPrecio = document.getElementById("total-precio");

  let total = 0;
  listaPedidos.innerHTML = '';

  cart.forEach((producto, index) => {
    const item = document.createElement("div");
    item.classList.add("producto-item");

    const info = document.createElement("div");
    info.classList.add("producto-info");

    const nombre = document.createElement("span");
    nombre.classList.add("producto-nombre");

    // ⬇️ DETECCIÓN DE ÍCONO SEGÚN FUENTE
    let icono = producto.fuente === "licor" ? "wine" : "utensils";
    nombre.innerHTML = `<i data-lucide="${icono}" class="icon-inline"></i> ${producto.name}`;

    const precio = document.createElement("span");
    precio.classList.add("producto-precio");
    precio.textContent = `$${formatPrice(producto.price * producto.quantity)}`;

    info.appendChild(nombre);
    info.appendChild(precio);

    const controles = document.createElement("div");
    controles.classList.add("cantidad-controles");

    const btnMenos = document.createElement("button");
    btnMenos.classList.add("cantidad-btn");
    btnMenos.textContent = "-";
    btnMenos.onclick = () => disminuirCantidad(index);

    const cantidadTexto = document.createElement("span");
    cantidadTexto.classList.add("cantidad-numero");
    cantidadTexto.textContent = producto.quantity;

    const btnMas = document.createElement("button");
    btnMas.classList.add("cantidad-btn");
    btnMas.textContent = "+";
    btnMas.onclick = () => aumentarCantidad(index);

    controles.appendChild(btnMenos);
    controles.appendChild(cantidadTexto);
    controles.appendChild(btnMas);

    item.appendChild(info);
    item.appendChild(controles);
    listaPedidos.appendChild(item);

    total += producto.price * producto.quantity;
  });

  totalPrecio.textContent = `$${formatPrice(total)}`;
  localStorage.setItem("carrito", JSON.stringify(cart));
  lucide.createIcons();
}

function aumentarCantidad(index) {
  cart[index].quantity += 1;
  mostrarPedido();
}

function disminuirCantidad(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  mostrarPedido();
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

  let cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  mensaje += `\nTotal: $${formatPrice(cartTotal)}`;

  const numeroWhatsApp = "573105813873";
  const mensajeCodificado = encodeURIComponent(mensaje);
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
  window.open(urlWhatsApp, "_blank");
}

document.addEventListener("DOMContentLoaded", mostrarPedido);