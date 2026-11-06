// Tastes of Africa: interactivity (filter, favorites, scaler, theme, validation)
document.addEventListener("DOMContentLoaded", () => {
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  // Dark / light mode
  const root = document.documentElement, toggle = document.getElementById("theme-toggle");
  const applyTheme = t => { root.dataset.theme = t; toggle.textContent = t === "dark" ? "Light mode" : "Dark mode"; };
  applyTheme(store.get("theme", "light"));
  toggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next); store.set("theme", next);
  });

  // Recipe filter by region
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");
  filterBtns.forEach(btn => btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.toggle("active", b === btn));
    const region = btn.dataset.region;
    cards.forEach(card => card.classList.toggle("hidden", region !== "all" && card.dataset.region !== region));
  }));

  // Favorites saved in localStorage
  let favs = store.get("favorites", []);
  const favBtns = document.querySelectorAll(".fav-btn");
  const paint = () => favBtns.forEach(b => {
    const on = favs.includes(b.dataset.id);
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
  favBtns.forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.id;
    favs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
    store.set("favorites", favs); paint();
  }));
  paint();

  // Ingredient scaler
  const servings = document.getElementById("servings");
  if (servings) {
    const fmt = n => String(Math.round(n * 100) / 100);
    const scale = () => {
      const factor = (Number(servings.value) || servings.dataset.base) / servings.dataset.base;
      document.querySelectorAll(".ing").forEach(el => {
        el.textContent = `${fmt(el.dataset.amt * factor)} ${el.dataset.unit}`.trim();
      });
    };
    servings.addEventListener("input", scale);
  }

  // Contact form validation
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.elements.name.value.trim(), email = form.elements.email.value.trim(), msg = form.elements.message.value.trim();
    const err = document.getElementById("form-error");
    if (!name) return err.textContent = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return err.textContent = "Enter a valid email address.";
    if (msg.length <= 20) return err.textContent = `Your message needs more than 20 characters (${msg.length} so far).`;
    form.hidden = true;
    const thanks = document.getElementById("thanks");
    thanks.textContent = `Thank you, ${name}! We've received your message.`;
    thanks.hidden = false;
  });

  // Newsletter
  const nl = document.getElementById("newsletter");
  nl.addEventListener("submit", e => {
    e.preventDefault();
    const ok = /^\S+@\S+\.\S+$/.test(nl.querySelector("input").value);
    document.getElementById("nl-msg").textContent = ok ? "Thanks for signing up!" : "Enter a valid email address.";
  });
});
