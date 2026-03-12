// ---------------------------------------------
// CART SYSTEM
// ---------------------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in header
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const el = document.getElementById("cart-count");
  if (el) el.textContent = count;
}

// Add item to cart
function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  alert("Added to cart!");
}

// Remove item
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

// Change quantity
function changeQuantity(id, amount) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    renderCart();
  }
}

// ---------------------------------------------
// RENDER CART PAGE
// ---------------------------------------------

function renderCart() {
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    summary.textContent = "";
    checkoutBtn.style.display = "none";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.justifyContent = "space-between";
    row.style.marginBottom = "20px";
    row.style.padding = "20px";
    row.style.background = "#fff";
    row.style.borderRadius = "12px";
    row.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";

    row.innerHTML = `
      <div style="display:flex; align-items:center; gap:20px;">
        <img src="${product.image}" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
        <div>
          <h3>${product.name}</h3>
          <p>$${product.price} each</p>
        </div>
      </div>

      <div style="display:flex; align-items:center; gap:10px;">
        <button class="btn" style="padding:6px 12px;" onclick="changeQuantity(${item.id}, -1)">-</button>
        <span style="font-size:18px; width:30px; text-align:center;">${item.quantity}</span>
        <button class="btn" style="padding:6px 12px;" onclick="changeQuantity(${item.id}, 1)">+</button>
      </div>

      <div style="font-weight:600;">$${itemTotal}</div>

      <button class="btn" style="background:#b00020;" onclick="removeFromCart(${item.id})">
        Remove
      </button>
    `;

    container.appendChild(row);
  });

  summary.textContent = `Total: $${total}`;
  checkoutBtn.style.display = "inline-block";
}

// ---------------------------------------------
// INIT
// ---------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCart();
});

// Update floating cart button count
function updateFloatingCartCount() {
  const el = document.getElementById("cart-count-floating");
  if (el) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    el.textContent = count;
  }
}

// Update both counts on load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateFloatingCartCount();
});
