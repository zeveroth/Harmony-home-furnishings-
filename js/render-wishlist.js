document.addEventListener("DOMContentLoaded", renderWishlistPage);

function renderWishlistPage() {
  const list = getWishlist();
  const container = document.getElementById("wishlist-items");

  if (list.length === 0) {
    container.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  container.innerHTML = "";

  list.forEach(id => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const div = document.createElement("div");
    div.className = "wishlist-item";
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

          <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>

        <div style="text-align:right;">
          <button class="btn" onclick="toggleWishlist(${product.id})">Remove</button>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}
