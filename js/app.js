// ---------------------------------------------
// PRODUCT GRID RENDERING
// ---------------------------------------------

const grid = document.getElementById("product-grid");

// Render all products on page load
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  setupCategoryFilters();
});

// Render product cards
function renderProducts(list) {
  grid.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => openProductPage(product.id);

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="price">$${product.price}</div>
        <div class="rating">⭐ ${product.rating}</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ---------------------------------------------
// CATEGORY FILTERS
// ---------------------------------------------

function setupCategoryFilters() {
  const categories = [
    { id: "living-filter", category: "living" },
    { id: "bedroom-filter", category: "bedroom" },
    { id: "dining-filter", category: "dining" },
    { id: "outdoor-filter", category: "outdoor" },
    { id: "office-filter", category: "office" }
  ];

  categories.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener("click", () => {
        const filtered = products.filter(p => p.category === item.category);
        renderProducts(filtered);
      });
    }
  });
}

// ---------------------------------------------
// SEARCH BAR SUPPORT
// ---------------------------------------------

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const results = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  renderProducts(results);
}

// ---------------------------------------------
// PRODUCT DETAIL PAGE REDIRECT
// ---------------------------------------------

function openProductPage(id) {
  window.location.href = `product.html?id=${id}`;
}
