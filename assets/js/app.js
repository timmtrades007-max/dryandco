/* dry&co â€” catalogue, cart, interactions */

const PRODUCTS = [
  {
    id: "dry-robe-sand",
    name: "Cape Dry Robe",
    category: "drying",
    catLabel: "Drying",
    price: 690,
    badge: "bestseller",
    desc: "Double-layer microfibre robe that drinks water after beach, bath or pool. Machine washable. Made for SA sun & splash.",
    colors: "Sand / Navy trim",
    sizes: "S Â· M Â· L Â· XL",
    source: "Local sew Â· Cape Town",
    image: "assets/images/products/product-dry-robe-sand.png",
    motif: "ROBE"
  },
  {
    id: "dry-robe-navy",
    name: "Harbour Dry Coat",
    category: "drying",
    catLabel: "Drying",
    price: 790,
    badge: "new",
    desc: "Longer coverage coat with leather badge. Ideal for wet Labradors and muddy walks home.",
    colors: "Navy",
    sizes: "S Â· M Â· L Â· XL",
    source: "Local sew Â· Cape Town",
    image: "assets/images/products/product-dry-robe-navy.png",
    motif: "COAT"
  },
  {
    id: "check-blanket",
    name: "Estate Check Blanket",
    category: "home",
    catLabel: "Home",
    price: 850,
    badge: "bestseller",
    desc: "Heavy navy & ivory buffalo check throw with stitched leather DRY & CO. patch. Sofa, car boot, picnic.",
    colors: "Navy / Ivory",
    sizes: "120 Ã— 150 cm",
    source: "Woven import Â· finished in SA",
    image: "assets/images/products/product-check-blanket.png",
    motif: "CHECK"
  },
  {
    id: "travel-mat",
    name: "Winelands Travel Mat",
    category: "home",
    catLabel: "Home",
    price: 490,
    desc: "Fold-flat waterproof mat with soft face. Protects car seats, guest beds and Airbnb floors.",
    colors: "Stone",
    sizes: "70 Ã— 100 cm",
    source: "Local cut & sew",
    image: "assets/images/products/product-travel-mat.png",
    motif: "MAT"
  },
  {
    id: "boucle-bed",
    name: "Constantia BouclÃ© Bed",
    category: "home",
    catLabel: "Home",
    price: 1890,
    badge: "bestseller",
    desc: "Furniture-grade orthopedic bed in soft bouclÃ©. Removable cover. Looks like lounge seating, not a dog crate.",
    colors: "Oatmeal Â· Charcoal",
    sizes: "M Â· L",
    source: "Local upholstery",
    image: "assets/images/products/product-boucle-bed.png",
    motif: "BED"
  },
  {
    id: "leather-collar",
    name: "Karoo Leather Collar",
    category: "leather",
    catLabel: "Leather",
    price: 420,
    badge: "bestseller",
    desc: "Full-grain vegetable-tanned collar, solid brass hardware, hand-finished edges. Ages beautifully.",
    colors: "Tan Â· Navy Â· Olive",
    sizes: "S Â· M Â· L",
    source: "SA leather goods",
    image: "assets/images/products/product-leather-collar.png",
    motif: "COLLAR"
  },
  {
    id: "leather-lead",
    name: "Long Walk Lead",
    category: "leather",
    catLabel: "Leather",
    price: 480,
    desc: "1.4 m matching lead with soft hand-feel and reinforced stitch points. Pair with the Karoo collar.",
    colors: "Tan Â· Navy Â· Olive",
    sizes: "Standard",
    source: "SA leather goods",
    image: "assets/images/products/product-leather-lead.png",
    motif: "LEAD"
  },
  {
    id: "harness",
    name: "Quiet Y-Harness",
    category: "leather",
    catLabel: "Leather",
    price: 620,
    badge: "new",
    desc: "Minimal Y-front harness in leather & webbing. Even pull distribution, no choke, brass fittings.",
    colors: "Tan / Navy",
    sizes: "S Â· M Â· L",
    source: "SA leather + webbing",
    image: "assets/images/products/product-harness.png",
    motif: "HARNESS"
  },
  {
    id: "treat-pouch",
    name: "Pocket Treat Pouch",
    category: "leather",
    catLabel: "Leather",
    price: 280,
    desc: "Belt-clip leather pouch for treats & bags. Quiet magnetic closure â€” no plastic rattle on walks.",
    colors: "Tan",
    sizes: "One size",
    source: "SA leather goods",
    image: "assets/images/products/product-treat-pouch.png",
    motif: "POUCH"
  },
  {
    id: "ceramic-bowls",
    name: "Stone Pair Bowls",
    category: "dining",
    catLabel: "Dining",
    price: 560,
    badge: "bestseller",
    desc: "Weighted matte ceramic bowls â€” food & water â€” that sit beautifully on stone floors and kitchen counters.",
    colors: "Ivory Â· Slate",
    sizes: "Medium pair",
    source: "Local ceramics studio",
    image: "assets/images/products/product-ceramic-bowls.png",
    motif: "BOWLS"
  },
  {
    id: "elevated-feeder",
    name: "Oak Elevated Feeder",
    category: "dining",
    catLabel: "Dining",
    price: 980,
    desc: "Solid oak stand with ceramic inserts. Better posture for mediumâ€“large dogs. Wipe-clean.",
    colors: "Natural oak",
    sizes: "M Â· L",
    source: "Local joinery",
    image: "assets/images/products/product-elevated-feeder.png",
    motif: "FEEDER"
  },
  {
    id: "boot-liner",
    name: "Weekend Boot Liner",
    category: "travel",
    catLabel: "Travel",
    price: 790,
    badge: "new",
    desc: "Quilted waterproof boot cover with raised bumpers. Keeps mud in, leather seats safe, dogs steady.",
    colors: "Navy",
    sizes: "Universal hatch / SUV",
    source: "Imported shell Â· local finish",
    image: "assets/images/products/product-boot-liner.png",
    motif: "LINER"
  },
  {
    id: "bandana",
    name: "Olive Grove Bandana",
    category: "apparel",
    catLabel: "Apparel",
    price: 150,
    desc: "Soft cotton bandana in estate olive check. Easy gift, high margin, photogenic.",
    colors: "Olive check",
    sizes: "S Â· M Â· L",
    source: "Local print & sew",
    image: "assets/images/products/product-bandana.png",
    motif: "BANDANA"
  },
  {
    id: "knit-jumper",
    name: "Knit Companion Jumper",
    category: "apparel",
    catLabel: "Apparel",
    price: 450,
    desc: "Fine-gauge cotton-blend jumper for cooler Cape evenings. Neutral enough for any interior.",
    colors: "Cream Â· Navy",
    sizes: "XSâ€“XL",
    source: "Knit import Â· branded SA",
    image: "assets/images/products/product-knit-jumper.png",
    motif: "KNIT"
  },
  {
    id: "calm-mist",
    name: "After-Walk Calm Mist",
    category: "grooming",
    catLabel: "Grooming",
    price: 220,
    desc: "Light linen-and-cedar grooming mist. Freshens coats between baths without soaking fur.",
    colors: "100 ml glass",
    sizes: "100 ml",
    source: "Local fill & label",
    image: "assets/images/products/product-calm-mist.png",
    motif: "MIST"
  },
  {
    id: "dry-shampoo",
    name: "No-Bath Dry Clean",
    category: "grooming",
    catLabel: "Grooming",
    price: 190,
    badge: "bestseller",
    desc: "Powder dry shampoo for in-between washes â€” the namesake ritual. Leaves coat soft, not chalky.",
    colors: "Apothecary tin",
    sizes: "80 g",
    source: "Local fill & label",
    image: "assets/images/products/product-dry-shampoo.png",
    motif: "DRY"
  },
  {
    id: "towel-set",
    name: "Double Dry Towel Set",
    category: "drying",
    catLabel: "Drying",
    price: 380,
    desc: "Two ultra-absorbent microfibre towels with leather loop tags. Pack in the boot, hang by the pool.",
    colors: "Sand pair",
    sizes: "2 Ã— large",
    source: "Import textile Â· local brand",
    image: "assets/images/products/product-towel-set.png",
    motif: "TOWEL"
  },
  {
    id: "name-tag",
    name: "Brass Name Disc",
    category: "leather",
    catLabel: "Leather",
    price: 120,
    desc: "Solid brass ID disc, engraved locally. Pair with any collar. Quiet luxury detail that sells itself.",
    colors: "Brass",
    sizes: "Engraved",
    source: "Local engraving",
    image: "assets/images/products/product-name-tag.png",
    motif: "BRASS"
  }
];

const CART_KEY = "dryco_cart_v1";

function money(n) {
  return "R " + Number(n).toLocaleString("en-ZA");
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = String(count);
    el.hidden = count === 0;
  });
}

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart(cart);
  showToast(`${product.name} added`);
  openCart();
}

function setQty(id, qty) {
  let cart = getCart();
  if (qty <= 0) cart = cart.filter((i) => i.id !== id);
  else {
    const line = cart.find((i) => i.id === id);
    if (line) line.qty = qty;
  }
  saveCart(cart);
}

function productCardHTML(p) {
  const badge =
    p.badge === "bestseller"
      ? '<span class="badge best">Bestseller</span>'
      : p.badge === "new"
        ? '<span class="badge">New</span>'
        : "";

  const media = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="placeholder"><strong>DRY & CO.</strong><span>${p.motif}</span></div>`;

  return `
  <article class="product-card reveal" data-category="${p.category}">
    <div class="product-media">
      ${badge}
      ${media}
    </div>
    <div class="product-body">
      <div class="product-cat">${p.catLabel}</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="product-meta">
        <div class="price">${money(p.price)}</div>
        <button class="btn btn-outline btn-sm" data-add="${p.id}">Add</button>
      </div>
    </div>
  </article>`;
}

function renderProducts(filter = "all", target = "#product-grid") {
  const el = document.querySelector(target);
  if (!el) return;
  const list =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  el.innerHTML = list.map(productCardHTML).join("");
  observeReveals();
}

function renderCart() {
  const box = document.querySelector(".cart-items");
  const totalEl = document.querySelector("[data-cart-total]");
  if (!box) return;
  const cart = getCart();
  if (!cart.length) {
    box.innerHTML = `<div class="cart-empty">Your bag is empty.<br>Add something beautiful.</div>`;
    if (totalEl) totalEl.textContent = money(0);
    return;
  }
  let total = 0;
  box.innerHTML = cart
    .map((line) => {
      const p = PRODUCTS.find((x) => x.id === line.id);
      if (!p) return "";
      total += p.price * line.qty;
      const thumb = p.image
        ? `<img class="thumb" src="${p.image}" alt="">`
        : `<div class="thumb">${p.motif}</div>`;
      return `
      <div class="cart-line">
        ${thumb}
        <div>
          <h4>${p.name}</h4>
          <div class="meta">${money(p.price)}</div>
          <div class="qty-row">
            <button type="button" data-qty="${p.id}" data-delta="-1" aria-label="Decrease">âˆ’</button>
            <span>${line.qty}</span>
            <button type="button" data-qty="${p.id}" data-delta="1" aria-label="Increase">+</button>
          </div>
        </div>
        <button type="button" data-remove="${p.id}" aria-label="Remove">âœ•</button>
      </div>`;

    })
    .join("");
  if (totalEl) totalEl.textContent = money(total);
}

function openCart() {
  document.querySelector(".cart-drawer")?.classList.add("open");
  document.querySelector(".cart-overlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.querySelector(".cart-drawer")?.classList.remove("open");
  document.querySelector(".cart-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function showToast(msg) {
  const t = document.querySelector(".toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

function initHeader() {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => {
    links?.classList.toggle("open");
    toggle.classList.toggle("open");
  });
  links?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function initFilters() {
  const valid = ["all", "drying", "leather", "home", "dining", "travel", "apparel", "grooming"];

  function applyFilter(filter, updateHash = true) {
    const key = valid.includes(filter) ? filter : "all";
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === key);
    });
    if (document.querySelector("#product-grid")) renderProducts(key);
    if (updateHash && location.pathname.toLowerCase().includes("shop")) {
      const next = key === "all" ? "#shop" : `#${key}`;
      if (location.hash !== next) history.replaceState(null, "", next);
    }
    const target =
      document.getElementById(key === "all" ? "shop" : key) ||
      document.getElementById("shop");
    if (target && location.pathname.toLowerCase().includes("shop")) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter || "all"));
  });

  // Collection chips / hash links on shop page
  document.querySelectorAll('a[href^="#drying"], a[href^="#leather"], a[href^="#home"], a[href^="#dining"], a[href^="#travel"], a[href^="#apparel"], a[href^="#grooming"], a[href="#shop"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      if (!document.querySelector("#product-grid")) return;
      const hash = (a.getAttribute("href") || "").replace("#", "") || "shop";
      if (hash === "shop") {
        e.preventDefault();
        applyFilter("all");
        return;
      }
      if (valid.includes(hash)) {
        e.preventDefault();
        applyFilter(hash);
      }
    });
  });

  const hash = location.hash.replace("#", "");
  if (document.querySelector("#product-grid")) {
    if (valid.includes(hash)) applyFilter(hash, false);
    else if (hash === "shop" || !hash) {
      /* stay on all */
    }
  }
}

function initSectionScroll() {
  const hash = location.hash.replace("#", "");
  if (!hash || document.querySelector("#product-grid")) return;
  const el = document.getElementById(hash);
  if (!el) return;
  setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
}

function initNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input")?.value?.trim();
      if (!email) return;
      showToast("Youâ€™re on the list");
      form.reset();
    });
  });
}

function initContact() {
  const form = document.querySelector("[data-contact]");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message received â€” weâ€™ll reply soon");
    form.reset();
  });
}

function whatsappCheckout() {
  const cart = getCart();
  if (!cart.length) {
    showToast("Add items first");
    return;
  }
  let total = 0;
  const lines = cart.map((line) => {
    const p = PRODUCTS.find((x) => x.id === line.id);
    if (!p) return "";
    total += p.price * line.qty;
    return `â€¢ ${p.name} Ã— ${line.qty} â€” ${money(p.price * line.qty)}`;
  });
  const text = encodeURIComponent(
    `Hi dry&co â€” Iâ€™d like to order:\n\n${lines.join("\n")}\n\nTotal: ${money(total)}\n\nDelivery suburb: `
  );
  // Replace with Charne's WhatsApp business number when ready
  window.open(`https://wa.me/27600000000?text=${text}`, "_blank");
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);

  if (e.target.closest("[data-open-cart]")) openCart();
  if (e.target.closest("[data-close-cart]")) closeCart();

  const qtyBtn = e.target.closest("[data-qty]");
  if (qtyBtn) {
    const id = qtyBtn.dataset.qty;
    const delta = Number(qtyBtn.dataset.delta);
    const line = getCart().find((i) => i.id === id);
    if (line) setQty(id, line.qty + delta);
  }

  const remove = e.target.closest("[data-remove]");
  if (remove) setQty(remove.dataset.remove, 0);

  if (e.target.closest("[data-whatsapp-checkout]")) whatsappCheckout();
});

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initFilters();
  initNewsletter();
  initContact();
  initSectionScroll();
  updateCartCount();
  renderCart();

  if (document.querySelector("#product-grid") && !location.hash.replace("#", "")) {
    renderProducts("all");
  } else if (document.querySelector("#product-grid") && !["drying","leather","home","dining","travel","apparel","grooming"].includes(location.hash.replace("#",""))) {
    renderProducts("all");
  }
  if (document.querySelector("#home-featured-grid")) {
    const featured = PRODUCTS.filter((p) => p.badge === "bestseller").slice(0, 6);
    const el = document.querySelector("#home-featured-grid");
    el.innerHTML = featured.map(productCardHTML).join("");
  }

  observeReveals();
});

window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");
  const valid = ["all", "drying", "leather", "home", "dining", "travel", "apparel", "grooming"];
  if (document.querySelector("#product-grid") && valid.includes(hash)) {
    document.querySelector(`.filter-btn[data-filter="${hash}"]`)?.click();
  } else {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

window.DRYCO = { PRODUCTS, money, addToCart };
