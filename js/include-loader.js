document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    const path = `/Harmony-home-furnishings-/${file}`;

    try {
      const response = await fetch(path);
      const html = await response.text();
      el.innerHTML = html;
    } catch (err) {
      el.innerHTML = "<p>Include failed to load.</p>";
    }
  });
});
