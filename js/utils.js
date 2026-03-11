function searchProducts(query, category = null) {
  if (!products || !Array.isArray(products)) return [];

  query = query.trim().toLowerCase();

  if (!query) {
    return category
      ? products.filter(p => p.category === category)
      : products;
  }

  return products.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(query);
    const priceMatch = String(p.price).includes(query);
    const ratingMatch = String(p.rating).includes(query);
    const categoryMatch = category ? p.category === category : true;

    return (nameMatch || priceMatch || ratingMatch) && categoryMatch;
  });
}

function filterByPrice(min = 0, max = Infinity, category = null) {
  if (!products || !Array.isArray(products)) return [];

  return products.filter(p => {
    const priceMatch = p.price >= min && p.price <= max;

    const categoryMatch = category
      ? Array.isArray(category)
        ? category.includes(p.category)
        : p.category === category
      : true;

    return priceMatch && categoryMatch;
  });
}

function performSearch() {
  const q = document.getElementById("searchInput").value;
  if (!q.trim()) return;
  window.location.href = `search.html?q=${encodeURIComponent(q)}`;
}

function applyFilters(category) {
  const min = Number(document.getElementById("minPrice").value) || 0;
  const max = Number(document.getElementById("maxPrice").value) || Infinity;
  const rating = Number(document.getElementById("ratingFilter").value) || 0;

  let filtered = products.filter(p => p.category === category);
  filtered = filtered.filter(p
