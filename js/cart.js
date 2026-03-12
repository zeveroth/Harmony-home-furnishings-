// CART SYSTEM — stores items in localStorage

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);

  // update header counter
  const el = document.getElementById("cart-count");
  if (el) el.textContent = cart.length;
}


function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem("cart");
}
