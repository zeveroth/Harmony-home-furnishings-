document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const product = products.find(p => p.id === id);

  if (!product) {
    document.getElementById("product-detail").innerHTML = "<p>Product not found.</p>";
    return;
  }

  renderProductDetail(product);
  renderRelatedProducts(product);
});

/* ============================
   MAIN PRODUCT RENDER
============================ */
function renderProductDetail(product) {
  const container = document.getElementById("product-detail");

  container.innerHTML = `
    <img src="${product.image}" alt="${product.name}">

    <div class="product-detail-info">
      <h1>${product.name}</h1>
      <div class="price">$${product.price}</div>
      <div class="rating">⭐ ${product.rating}</div>

      <p style="margin-top:20px;">${product.description}</p>

      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
}

/* ============================
   RELATED PRODUCTS
============================ */
function renderRelatedProducts(product) {
  const container = document.getElementById("related-carousel");

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 10);

  related.forEach(item => {
    const card = document.createElement("div");
    card.className = "carousel-item";
    card.onclick = () =>
      window.location.href = `/Harmony-home-furnishings-/product.html?id=${item.id}`;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <div class="price">$${item.price}</div>
    `;

    container.appendChild(card);
  });
}
