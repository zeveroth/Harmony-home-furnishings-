/* ============================
   CART SYSTEM (Harmony 2.0)
============================ */

const CART_KEY = "harmony_cart";

/* Load cart from localStorage */
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

/* Save cart */
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

/* Add product to cart */
function addToCart(id) {
  const cart = getCart();
  const item = cart.find(p => p.id === id);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart(cart);
  alert("Added to cart!");
}

/* Remove product */
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
}

/* Update quantity */
function updateQty(id, qty) {
  const cart = getCart();
  const item = cart.find(p => p.id === id);

  if (item) {
    item.qty = qty;
    saveCart(cart);
  }
}

/* Mini-cart counter in header */
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  const counter = document.querySelector(".cart-icon");
  if (counter) {
    counter.textContent = `🛒 (${count})`;
  }
}

/* Initialize counter on page load */
document.addEventListener("DOMContentLoaded", updateCartCount);
