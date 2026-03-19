document.addEventListener("DOMContentLoaded", renderCartPage);

function renderCartPage() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.textContent = "";
    return;
  }

  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const itemTotal = product.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.style.margin = "20px 0";
    div.style.padding = "15px";
    div.style.background = "#fff";
    div.style.border = "1px solid #ddd";
    div.style.borderRadius = "6px";

    div.innerHTML = `
      <div style="display:flex; gap:20px; align-items:center;">
        <img src="${product.image}" style="width:120px; border-radius:6px;">

        <div style="flex:1;">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>

          <label>Qty:</label>
          <input type="number" min="1" value="${item.qty}" 
                 onchange="updateQty(${item.id}, this.value)"
                 style="width:60px; padding:5px; margin-left:10px;">
        </div>

        <div style="text-align:right;">
          <p><strong>$${itemTotal.toFixed(2)}</strong></p>
          <button class="btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `;

    container.appendChild(div);
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}
