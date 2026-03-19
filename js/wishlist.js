/* ============================
   WISHLIST SYSTEM (Harmony 2.0)
============================ */

const WISHLIST_KEY = "harmony_wishlist";

/* Load wishlist */
function getWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

/* Save wishlist */
function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateWishlistCount();
}

/* Add/remove toggle */
function toggleWishlist(id) {
  let list = getWishlist();

  if (list.includes(id)) {
    list = list.filter(item => item !== id);
  } else {
    list.push(id);
  }

  saveWishlist(list);
}

/* Mini-heart counter */
function updateWishlistCount() {
  const list = getWishlist();
  const count = list.length;

  const heart = document.querySelector(".wishlist-icon");
  if (heart) {
    heart.textContent = `❤️ (${count})`;
  }
}

/* Initialize on load */
document.addEventListener("DOMContentLoaded", updateWishlistCount);
