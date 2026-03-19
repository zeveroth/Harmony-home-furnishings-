document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("cat");

  const title = document.getElementById("category-title");
  const grid = document.getElementById("product-grid");

  title.textContent = category.charAt(0).toUpperCase() + category.slice(1);

  const filtered = products.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () =>
      window.location.href = `/Harmony-home-furnishings-/product.html?id=${product.id}`;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="price">$${product.price}</div>
      <div class="rating">⭐ ${product.rating}</div>
    `;

    grid.appendChild(card);
  });
});