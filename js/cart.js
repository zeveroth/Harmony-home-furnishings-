let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCart();
  updateCartCount();
}

function updateCart() {
  const container = document.querySelector('.cart-items');
  const totalEl = document.querySelector('.cart-total');

  if (!container || !totalEl) return;

  container.innerHTML = '';

  cart.forEach((p, index) => {
    const div = document.createElement('div');
    div.className = 'product';

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price} × ${p.qty}</p>

      <div style="margin:10px 0;">
        <button onclick="changeQty(${index}, -1)">-</button>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>

      <button onclick="removeItem(${index})">Remove</button>
    `;

    container.appendChild(div);
  });

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);
  totalEl.innerText = `Total: $${total}`;
}

function changeQty(index, amount) {
  cart[index].qty += amount;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCart();
  updateCartCount();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
  updateCartCount();
}

function checkout() {
  alert('Checkout feature coming soon!');
}

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  countEl.innerText = totalQty;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCart();
  updateCartCount();
});
