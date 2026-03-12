// ---------------------------------------------
// PRODUCT DETAIL PAGE LOGIC
// ---------------------------------------------

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

// ---------------------------------------------
// RENDER MAIN PRODUCT
// ---------------------------------------------

function renderProductDetail(product) {
  const container = document.getElementById("product-detail");

  container.innerHTML = `
    <img src="${product.image}" alt="${product.name}">

    <div class="product-detail-info">
      <h1>${product.name}</h1>
      <div class="price">$${product.price}</div>
      <div class="rating">⭐ ${product.rating}</div>

      <p style="margin-top:20px;">
        This premium piece is crafted with high‑quality materials and designed to elevate your home.
        Perfect for modern, minimalist, or cozy interiors.
      </p>

      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>

      <button class="btn ar-button" onclick="openAR('${product.glb}', '${product.usdz}')">
        View in AR
      </button>
    </div>
  `;
}

// ---------------------------------------------
// AR BUTTON HANDLING
// ---------------------------------------------

function openAR(glb, usdz) {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isIOS) {
    window.location.href = usdz;
  } else {
    window.location.href = glb;
  }
}

// ---------------------------------------------
// RELATED PRODUCTS — CAROUSEL VERSION
// ---------------------------------------------

function renderRelatedProducts(product) {
  const container = document.getElementById("related-carousel");

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 10); // show up to 10 items in carousel

  related.forEach(item => {
    const card = document.createElement("div");
    card.className = "carousel-item";
    card.onclick = () => window.location.href = `product.html?id=${item.id}`;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="info">
        <h4>${item.name}</h4>
        <div class="price">$${item.price}</div>
        <div class="rating">⭐ ${item.rating}</div>
      </div>
    `;

    container.appendChild(card);
  });
}
