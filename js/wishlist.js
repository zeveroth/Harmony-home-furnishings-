// WISHLIST SYSTEM — stores items in localStorage

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
}

function saveWishlist(list) {
  localStorage.setItem("wishlist", JSON.stringify(list));
}

function addToWishlist(product) {
  const list = getWishlist();

  if (!list.find(item => item.id === product.id)) {
    list.push(product);
    saveWishlist(list);
  }

  // update header counter
  const el = document.getElementById("wishlist-count");
  if (el) el.textContent = list.length;
}


  // prevent duplicates
  if (!list.find(item => item.id === product.id)) {
    list.push(product);
    saveWishlist(list);
  }
}

function removeFromWishlist(id) {
  const list = getWishlist().filter(item => item.id !== id);
  saveWishlist(list);
}
