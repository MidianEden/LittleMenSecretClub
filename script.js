const storageKey = "littlemen-locker-v3";
const plushySupabase = {
  url: "https://agnxkonbawdvxjvriqsp.supabase.co",
  anonKey: "sb_publishable_RPCTJzjBTCb8zQNjdbdf0Q_m5WsA9K7"
};

const pageIds = ["home", "shop", "collection", "locker"];
const shopFilterOptions = ["All", "Best Sellers", "Figures", "Mystery Box", "New", "Exclusive"];
const collectionFilterOptions = ["All", "Owned", "Not Owned", "Figures", "Mystery", "Secret Variants"];
const lockerFilterOptions = ["All", "Owned", "Locked", "Figures", "Secret Variants"];

const products = [
  {
    id: "robot",
    name: "LittleRobot",
    art: "robot",
    type: "Figure",
    status: "Best Seller",
    tags: ["Best Sellers", "Figures"],
    price: "$6",
    description: "A clockwork sentinel from the first toy forge, built to keep the desk safe and the batteries charged.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-ROBOT-8K29"
  },
  {
    id: "duck",
    name: "LittleDuck",
    art: "duck",
    type: "Figure",
    status: "Fan Favorite",
    tags: ["Best Sellers", "Figures"],
    price: "$7",
    description: "A bright canal scout said to guide lost collectibles back to the shelf with a cheerful wobble.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-DUCK-3P11"
  },
  {
    id: "crash-dummy",
    name: "LittleCrashDummy",
    art: "crash-dummy",
    type: "Figure",
    status: "Trending",
    tags: ["Figures", "New"],
    price: "$7",
    description: "A test-run hero wrapped in warning stripes, always the first to volunteer for rough landings.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-DUMMY-7C45"
  },
  {
    id: "ninja",
    name: "LittleNinja",
    art: "ninja",
    type: "Figure",
    status: "Popular Pick",
    tags: ["Figures", "New"],
    price: "$7",
    description: "A silent night runner who guards the case after lights-out and leaves only a red headband trace.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-NINJA-5T62"
  },
  {
    id: "skeleton",
    name: "LittleSkeleton",
    art: "skeleton",
    type: "Figure",
    status: "Shelf Favorite",
    tags: ["Figures"],
    price: "$7",
    description: "A bone-house relic of the lineup, rattling in the dark like it knows every hidden code.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-BONE-6H10"
  },
  {
    id: "alien",
    name: "LittleAlien",
    art: "alien",
    type: "Figure",
    status: "Fresh Drop",
    tags: ["Figures", "New"],
    price: "$7",
    description: "A visitor from the last shelf over, mapping Earth in tiny steps and blinking back from the stars.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-ALIEN-8J44"
  },
  {
    id: "vigilante-hero",
    name: "LittleVigilante",
    art: "vigilante-hero",
    type: "Figure",
    status: "New",
    tags: ["Figures", "New"],
    price: "$7",
    description: "A masked rooftop watcher who keeps the locker protected with a tiny cape and sharper instincts.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-HERO-4K84"
  },
  {
    id: "astronaut",
    name: "LittleAstronaut",
    art: "astronaut",
    type: "Figure",
    status: "Orbit Ready",
    tags: ["Figures", "New"],
    price: "$7",
    description: "A moon-walking explorer on a mission to bring home rare pulls from the far side of the display.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-ASTRO-2M88"
  },
  {
    id: "exclusive-robot",
    name: "Gold LittleRobot",
    art: "exclusive-robot",
    type: "Figure",
    status: "Exclusive",
    tags: ["Figures", "Exclusive"],
    price: "$7.25",
    description: "A gilded prototype reserved for legends, rumored to power the luck of every collector who spots it.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-XBOT-9Z11"
  },
  {
    id: "reptile",
    name: "LittleReptile",
    art: "reptile",
    type: "Figure",
    status: "Wild",
    tags: ["Figures"],
    price: "$6",
    description: "A jungle-floor sneak that slips between cases and leaves a trail of bright green footprints.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-REPTILE-1P60"
  },
  {
    id: "skeleton-pirate",
    name: "LittleSkeletonPirate",
    art: "skeleton-pirate",
    type: "Figure",
    status: "Adventure Pick",
    tags: ["Figures", "New"],
    price: "$7.50",
    description: "A salt-weathered deck captain who found treasure in the dark and never stopped chasing rarities.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-PIRATE-2R70"
  },
  {
    id: "boxer",
    name: "LittleBoxer",
    art: "boxer",
    type: "Figure",
    status: "Desk Champ",
    tags: ["Figures"],
    price: "$7",
    description: "A ring-born champion who shadowboxes beside the shelf and never backs down from a collector's challenge.",
    badge: "Includes secret code card",
    ownedCopy: "In Your Locker",
    unlockCode: "LMT-BOXER-9B45"
  },
  {
    id: "mystery-box",
    name: "Mystery Box",
    art: "mystery-box",
    type: "Mystery Box",
    status: "Mystery Box",
    tags: ["Mystery Box", "Best Sellers"],
    price: "$17",
    description: "A sealed crate of rumors that only opens for collectors brave enough to trade certainty for a hidden pull.",
    badge: "May contain a surprise variant",
    ownedCopy: "Mystery pull",
    unlockCode: null
  }
];

const secretVariants = [
  {
    id: "secret-shadow",
    name: "Shadow Variant",
    art: "mystery-variant",
    text: "A silhouette that slips along the back row and vanishes when the shelf light turns on."
  },
  {
    id: "secret-chrome",
    name: "Chrome Secret",
    art: "mystery-variant",
    text: "A polished rumor that flashes like moonlight before the case closes again."
  },
  {
    id: "secret-ember",
    name: "Ember Variant",
    art: "mystery-variant",
    text: "A warm-glow legend said to leave a trail of sparks across the shelf."
  }
];

const favoriteBadges = [
  { id: "robot", label: "Best Seller" },
  { id: "duck", label: "Fan Favorite" },
  { id: "crash-dummy", label: "Trending" },
  { id: "ninja", label: "Popular Pick" }
];

const howSteps = [
  { icon: "shop", title: "Pick a LittleRobot", text: "Choose your figure or try the Mystery Box." },
  { icon: "code", title: "Get your secret code", text: "Every package comes with an unlock card." },
  { icon: "locker", title: "Unlock it in your Locker", text: "Enter the package code in the app." },
  { icon: "owned", title: "Build your collection", text: "Watch your shelf fill up over time." }
];

const badgeRules = [
  {
    id: "first-unlock",
    title: "First Unlock",
    text: "Unlock your first LittleRobot.",
    icon: "owned",
    unlocked: ownedIds => ownedIds.length >= 1
  },
  {
    id: "collector",
    title: "Collector",
    text: "Own three LittleMen figures.",
    icon: "collection",
    unlocked: ownedIds => ownedIds.length >= 3
  },
  {
    id: "mystery-box-opened",
    title: "Mystery Box Opened",
    text: "Bring home the Mystery Box.",
    icon: "mystery-box",
    unlocked: () => false
  },
  {
    id: "secret-variant-found",
    title: "Secret Variant Found",
    text: "Reserved for hidden Mystery Box pulls.",
    icon: "secret-variant",
    unlocked: () => false
  },
  {
    id: "shelf-builder",
    title: "Shelf Builder",
    text: "Own six or more LittleMen.",
    icon: "home",
    unlocked: ownedIds => ownedIds.length >= 6
  }
];

const pageNodes = Array.from(document.querySelectorAll(".page"));
const pageButtons = Array.from(document.querySelectorAll("[data-page-target]"));
const featuredGrid = document.getElementById("featuredGrid");
const howGrid = document.getElementById("howGrid");
const favoritesGrid = document.getElementById("favoritesGrid");
const shopFilters = document.getElementById("shopFilters");
const shopGrid = document.getElementById("shopGrid");
const statsGrid = document.getElementById("statsGrid");
const collectionFilters = document.getElementById("collectionFilters");
const collectionGrid = document.getElementById("collectionGrid");
const secretGrid = document.getElementById("secretGrid");
const shelfGrid = document.getElementById("shelfGrid");
const lockerFilters = document.getElementById("lockerFilters");
const unlockedGrid = document.getElementById("unlockedGrid");
const lockedGrid = document.getElementById("lockedGrid");
const badgeGrid = document.getElementById("badgeGrid");
const lockerSecretGrid = document.getElementById("lockerSecretGrid");
const codeInput = document.getElementById("codeInput");
const unlockButton = document.getElementById("unlockButton");
const scanButton = document.getElementById("scanButton");
const lockerStatus = document.getElementById("lockerStatus");
const confettiLayer = document.getElementById("confettiLayer");
const unlockModal = document.getElementById("unlockModal");
const unlockModalArt = document.getElementById("unlockModalArt");
const unlockModalTitle = document.getElementById("unlockModalTitle");
const unlockModalText = document.getElementById("unlockModalText");
const closeModalButton = document.getElementById("closeModalButton");

let activePage = "home";
let activeShopFilter = "All";
let activeCollectionFilter = "All";
let activeLockerFilter = "All";
let ownedIds = loadOwnedIds();

function loadOwnedIds() {
  const raw = localStorage.getItem(storageKey);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveOwnedIds() {
  localStorage.setItem(storageKey, JSON.stringify(ownedIds));
}

function getProductById(id) {
  return products.find(product => product.id === id);
}

function renderSvgIcon(type) {
  const icons = {
    home: `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.8 11.2 12 4.7l8.2 6.5v7.8a1.7 1.7 0 0 1-1.7 1.7H5.5a1.7 1.7 0 0 1-1.7-1.7Z" fill="#8dd1ff" stroke="#2d3a69" stroke-width="1.8" stroke-linejoin="round"></path>
        <path d="M8.1 10.4h7.8v10.3H8.1Z" fill="#fff6d1" stroke="#2d3a69" stroke-width="1.8"></path>
        <path d="M10.1 14.2h3.8v6.5h-3.8Z" fill="#ff9f73" stroke="#2d3a69" stroke-width="1.6"></path>
        <path d="M7 10.8h10" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" opacity=".7"></path>
      </svg>
    `,
    shop: `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.2 8.3h11.6l-1.1 11.1H7.3Z" fill="#ffd86b" stroke="#2d3a69" stroke-width="1.8" stroke-linejoin="round"></path>
        <path d="M8.4 8.3V7.1a3.6 3.6 0 0 1 7.2 0v1.2" fill="none" stroke="#2d3a69" stroke-width="1.8" stroke-linecap="round"></path>
        <rect x="8.2" y="10.2" width="7.6" height="5.4" rx="2.2" fill="#8fe2c9" stroke="#2d3a69" stroke-width="1.6"></rect>
        <circle cx="10.3" cy="12.9" r=".8" fill="#2d3a69"></circle>
        <circle cx="13.7" cy="12.9" r=".8" fill="#2d3a69"></circle>
        <path d="M10.5 14.7c1.2.7 2.8.7 4 0" stroke="#2d3a69" stroke-width="1.4" stroke-linecap="round"></path>
      </svg>
    `,
    collection: `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.3 17.3h15.4" stroke="#2d3a69" stroke-width="2" stroke-linecap="round"></path>
        <path d="M5.4 17.3V7.7h4.4v9.6" fill="#8dd1ff" stroke="#2d3a69" stroke-width="1.7"></path>
        <path d="M9.8 17.3V5.5h4.4v11.8" fill="#ffd86b" stroke="#2d3a69" stroke-width="1.7"></path>
        <path d="M14.2 17.3V8.9h4.4v8.4" fill="#b9a3ff" stroke="#2d3a69" stroke-width="1.7"></path>
        <circle cx="7.6" cy="10.5" r=".8" fill="#2d3a69"></circle>
        <circle cx="12" cy="8.2" r=".8" fill="#2d3a69"></circle>
        <circle cx="16.4" cy="11.6" r=".8" fill="#2d3a69"></circle>
      </svg>
    `,
    locker: `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.8" y="4" width="14.4" height="16" rx="2.4" fill="#bfa7ff" stroke="#2d3a69" stroke-width="1.8"></rect>
        <path d="M12 4v16" stroke="#2d3a69" stroke-width="1.8"></path>
        <rect x="6.8" y="6.2" width="4" height="5.2" rx="1.2" fill="#8fe2c9" stroke="#2d3a69" stroke-width="1.4"></rect>
        <rect x="13.2" y="6.2" width="4" height="5.2" rx="1.2" fill="#ffd86b" stroke="#2d3a69" stroke-width="1.4"></rect>
        <path d="m15.4 13.1.45.95 1.05.14-.78.67.2 1.02-.92-.52-.92.52.2-1.02-.78-.67 1.05-.14Z" fill="#fff" stroke="#2d3a69" stroke-width=".9" stroke-linejoin="round"></path>
        <circle cx="9" cy="14" r=".8" fill="#2d3a69"></circle>
      </svg>
    `,
    code: `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.3 8.5 8.4 5h11.3v14H8.4l-4.1-3.5Z" fill="#c1adff" stroke="#2d3a69" stroke-width="1.8" stroke-linejoin="round"></path>
        <path d="M8.3 9.2h8.7" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".75"></path>
        <path d="M9.8 10.6h6.2v1.5H9.8zM9.8 13.7h4.6v1.5H9.8z" fill="#fff2b3" stroke="#2d3a69" stroke-width="1.2"></path>
        <path d="m17.3 7.8.45.9 1.02.14-.76.66.18 1-.89-.5-.89.5.18-1-.76-.66 1.02-.14Z" fill="#ffd86b" stroke="#2d3a69" stroke-width=".9" stroke-linejoin="round"></path>
      </svg>
    `,
    "mystery-box": `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 9.2h13.6v9.6H5.2z" fill="#bb9cff" stroke="#2d3a69" stroke-width="1.8"></path>
        <path d="M4 9.2h16l-2.1-4.2H6.1Z" fill="#8a71ff" stroke="#2d3a69" stroke-width="1.8" stroke-linejoin="round"></path>
        <path d="M12 9.2v9.6" stroke="#2d3a69" stroke-width="1.7"></path>
        <rect x="10.9" y="11.6" width="2.2" height="4.6" rx="1.1" fill="#ffd86b" stroke="#2d3a69" stroke-width="1.1"></rect>
        <path d="m17.4 4.8.5 1 .98.14-.74.64.18 1-.92-.5-.92.5.18-1-.74-.64.98-.14Z" fill="#ffd86b" stroke="#2d3a69" stroke-width=".9" stroke-linejoin="round"></path>
      </svg>
    `,
    "secret-variant": `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="secretRing" x1="0" x2="1">
            <stop offset="0%" stop-color="#78c4ff"></stop>
            <stop offset="50%" stop-color="#ff90b5"></stop>
            <stop offset="100%" stop-color="#ffd86b"></stop>
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="9" fill="#1b2139" stroke="url(#secretRing)" stroke-width="2.2"></circle>
        <path d="M10 9.6a2.4 2.4 0 1 1 4.3 1.2c-.8.5-1.3 1.1-1.3 2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"></path>
        <circle cx="12" cy="16.9" r=".95" fill="#fff"></circle>
      </svg>
    `,
    owned: `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#92dda0" stroke="#2d3a69" stroke-width="1.8"></circle>
        <path d="m7.2 12 3.1 3.2 6.6-6.6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
    locked: `
      <svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 10V8a4 4 0 1 1 8 0v2" fill="none" stroke="#9dcfff" stroke-width="1.8" stroke-linecap="round"></path>
        <rect x="6" y="10" width="12" height="10" rx="2.2" fill="#1f2540" stroke="#7abdfd" stroke-width="1.8"></rect>
        <circle cx="12" cy="14.3" r="1.1" fill="#ffd86b"></circle>
      </svg>
    `
  };

  return icons[type] || icons.home;
}

function renderCharacterArt(type) {
  const imageMap = {
    robot: "assets/littlemen-icons/little-robot.png",
    duck: "assets/littlemen-icons/little-duck.png",
    "crash-dummy": "assets/littlemen-icons/little-crash-dummy.png",
    ninja: "assets/littlemen-icons/little-ninja.png",
    skeleton: "assets/littlemen-icons/little-skeleton.png",
    alien: "assets/littlemen-icons/little-alien.png",
    astronaut: "assets/littlemen-icons/little-astronaut.png",
    "vigilante-hero": "assets/littlemen-icons/little-vigilante.png",
    reptile: "assets/littlemen-icons/little-reptile.png",
    "skeleton-pirate": "assets/littlemen-icons/little-skele-pirate.png",
    boxer: "assets/littlemen-icons/little-boxer.png",
    "exclusive-robot": "assets/littlemen-icons/gold-little-robot.png"
  };

  if (imageMap[type]) {
    return `<img class="littlemen-asset littlemen-asset--${type}" src="${imageMap[type]}" alt="${type.replace(/-/g, " ")}">`;
  }

  const variantPieces = {
    robot: '',
    duck: '<span class="littleman__beak"></span>',
    "crash-dummy": '',
    ninja: '<span class="littleman__band"></span>',
    skeleton: '',
    alien: '',
    astronaut: '<span class="littleman__visor"></span>',
    "vigilante-hero": '<span class="littleman__cape"></span>',
    reptile: '<span class="littleman__tail"></span>',
    "skeleton-pirate": '<span class="littleman__hat"></span>',
    boxer: '<span class="littleman__glove littleman__glove--left"></span><span class="littleman__glove littleman__glove--right"></span>',
    "exclusive-robot": '',
    "mystery-variant": ''
  };

  return `
    <span class="littleman littleman--${type}">
      <span class="littleman__peg"></span>
      <span class="littleman__head"></span>
      ${type === "mystery-variant" ? "" : '<span class="littleman__detail"></span>'}
      <span class="littleman__neck"></span>
      <span class="littleman__torso"></span>
      <span class="littleman__arm littleman__arm--left"></span>
      <span class="littleman__joint littleman__joint--shoulder-left"></span>
      <span class="littleman__forearm littleman__forearm--left"></span>
      <span class="littleman__joint littleman__joint--elbow-left"></span>
      <span class="littleman__arm littleman__arm--right"></span>
      <span class="littleman__joint littleman__joint--shoulder-right"></span>
      <span class="littleman__forearm littleman__forearm--right"></span>
      <span class="littleman__joint littleman__joint--elbow-right"></span>
      <span class="littleman__leg littleman__leg--left"></span>
      <span class="littleman__joint littleman__joint--hip-left"></span>
      <span class="littleman__shin littleman__shin--left"></span>
      <span class="littleman__joint littleman__joint--knee-left"></span>
      <span class="littleman__leg littleman__leg--right"></span>
      <span class="littleman__joint littleman__joint--hip-right"></span>
      <span class="littleman__shin littleman__shin--right"></span>
      <span class="littleman__joint littleman__joint--knee-right"></span>
      ${variantPieces[type] || ""}
    </span>
  `;
}

function renderMysteryBoxArt() {
  return `
    <span class="mystery-box">
      <span class="mystery-box__lid"></span>
      <span class="mystery-box__base"></span>
      <span class="mystery-box__tag"></span>
      <span class="mystery-box__spark"></span>
    </span>
  `;
}

function setSharedArt() {
  document.querySelectorAll("[data-icon]").forEach(node => {
    node.innerHTML = renderSvgIcon(node.dataset.icon);
  });

  document.querySelectorAll("[data-character-art]").forEach(node => {
    node.innerHTML = renderCharacterArt(node.dataset.characterArt);
  });

  document.querySelectorAll("[data-product-art]").forEach(node => {
    node.innerHTML = renderMysteryBoxArt();
  });
}

function renderFilterButtons(container, options, activeValue, dataName) {
  container.innerHTML = options.map(option => `
    <button class="filter-pill ${option === activeValue ? "active" : ""}" data-${dataName}="${option}">
      ${option}
    </button>
  `).join("");
}

function getFeaturedProducts() {
  return ["robot", "duck", "crash-dummy", "ninja", "astronaut", "mystery-box"]
    .map(getProductById)
    .filter(Boolean);
}

function productCard(product, options = {}) {
  const isMysteryBox = product.id === "mystery-box";
  const isExclusive = product.id === "exclusive-robot";
  const isSecret = options.secret === true;
  const cardClasses = [
    "product-card",
    `product-card--${product.id}`,
    isMysteryBox ? "product-card--mystery-box" : "",
    isExclusive ? "product-card--exclusive" : "",
    isSecret ? "product-card--secret" : ""
  ].filter(Boolean).join(" ");

  const artMarkup = isMysteryBox ? renderMysteryBoxArt() : renderCharacterArt(product.art);
  const badgeClass = isMysteryBox ? "mini-pill mini-pill--gold" : isExclusive ? "mini-pill mini-pill--gold" : "mini-pill mini-pill--blue";
  const actionLabel = isMysteryBox ? "Try Mystery Box" : "Add to Cart";
  const badgeMarkup = product.badge === "Includes secret code card"
    ? ""
    : `<span class="mini-pill ${isMysteryBox ? "mini-pill--charcoal" : "mini-pill--orange"}">${product.badge}</span>`;

  return `
    <article class="${cardClasses}">
      <div class="product-card__top">
        <div>
          <span class="${badgeClass}">${product.status}</span>
          <h3>${product.name}</h3>
        </div>
        <span class="product-card__price">${product.price}</span>
      </div>
      <div class="product-art">${artMarkup}</div>
      <p>${product.description}</p>
      ${badgeMarkup}
      <div class="hero-actions">
        <button class="ghost-button" data-page-target="collection">View Toy</button>
        <button class="button button--primary">${actionLabel}</button>
      </div>
    </article>
  `;
}

function renderFeaturedGrid() {
  featuredGrid.innerHTML = getFeaturedProducts().map(product => productCard(product)).join("");
}

function renderHowGrid() {
  howGrid.innerHTML = howSteps.map(step => `
    <article class="how-card">
      <span class="chip chip--blue">${renderSvgIcon(step.icon)}</span>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </article>
  `).join("");
}

function renderFavoritesGrid() {
  favoritesGrid.innerHTML = favoriteBadges.map(item => {
    const product = getProductById(item.id);

    return `
      <article class="favorite-card">
        <div class="favorite-card__top">
          <span class="mini-pill mini-pill--pink">${item.label}</span>
          <h3>${product.name}</h3>
        </div>
        <div class="card-art">${renderCharacterArt(product.art)}</div>
        <p>${product.description}</p>
      </article>
    `;
  }).join("");
}

function getShopProducts() {
  if (activeShopFilter === "All") {
    return products;
  }

  if (activeShopFilter === "Mystery Box") {
    return products.filter(product => product.type === "Mystery Box");
  }

  return products.filter(product => product.tags.includes(activeShopFilter));
}

function renderShop() {
  renderFilterButtons(shopFilters, shopFilterOptions, activeShopFilter, "shop-filter");
  shopGrid.innerHTML = getShopProducts().map(product => productCard(product, { secret: product.id === "mystery-box" })).join("");
}

function ownedProducts() {
  return products.filter(product => ownedIds.includes(product.id));
}

function figureProducts() {
  return products.filter(product => product.type === "Figure");
}

function collectionStatsData() {
  const owned = ownedProducts();
  const figures = figureProducts();
  const locked = figures.filter(product => !ownedIds.includes(product.id));
  const secretCount = secretVariants.length;

  return [
    { title: "Total Figures", value: String(figures.length), text: "Current LittleMen lineup", icon: "collection" },
    { title: "Owned", value: String(owned.length), text: "Already in your Locker", icon: "owned" },
    { title: "Not Owned", value: String(locked.length), text: "Still waiting for the shelf", icon: "locked" },
    { title: "Secret Variants", value: String(secretCount), text: "Mystery Box silhouettes", icon: "secret-variant" }
  ];
}

function renderStats() {
  statsGrid.innerHTML = collectionStatsData().map(stat => `
    <article class="stat-card">
      <span class="chip chip--blue">${renderSvgIcon(stat.icon)}</span>
      <h3>${stat.title}</h3>
      <div class="stat-card__value">${stat.value}</div>
      <p>${stat.text}</p>
    </article>
  `).join("");
}

function filterCollectionProducts() {
  const figures = figureProducts();

  switch (activeCollectionFilter) {
    case "Owned":
      return figures.filter(product => ownedIds.includes(product.id));
    case "Not Owned":
      return figures.filter(product => !ownedIds.includes(product.id));
    case "Figures":
      return figures;
    case "Mystery":
      return [getProductById("mystery-box")].filter(Boolean);
    case "Secret Variants":
      return [];
    default:
      return [...figures, getProductById("mystery-box")].filter(Boolean);
  }
}

function collectionCard(product) {
  const isOwned = ownedIds.includes(product.id);
  const isMysteryBox = product.id === "mystery-box";
  const locked = !isOwned && !isMysteryBox;
  const cardClass = locked ? "collection-card collection-card--locked" : "collection-card";
  const art = isMysteryBox
    ? renderMysteryBoxArt()
    : renderCharacterArt(locked ? "mystery-variant" : product.art);

  return `
    <article class="${cardClass}">
      <div class="collection-card__top">
        <span class="mini-pill ${isOwned || isMysteryBox ? "mini-pill--mint" : "mini-pill--charcoal"}">
          ${isMysteryBox ? "Mystery Box" : isOwned ? "In Your Locker" : "Locked"}
        </span>
        <span class="status-pill ${isOwned || isMysteryBox ? "status-pill--owned" : "status-pill--locked"}">
          ${isMysteryBox ? "Package" : isOwned ? "Owned" : "Locked"}
        </span>
      </div>
      <div class="card-art">${art}</div>
      <h3>${locked ? "???" : product.name}</h3>
      <p>${locked ? "Unlock with your code." : product.description}</p>
    </article>
  `;
}

function renderCollection() {
  renderFilterButtons(collectionFilters, collectionFilterOptions, activeCollectionFilter, "collection-filter");
  const list = filterCollectionProducts();

  if (activeCollectionFilter === "Secret Variants") {
    collectionGrid.innerHTML = secretVariants.map(secret => `
      <article class="secret-card secret-card--hidden">
        <div class="card-art">${renderCharacterArt(secret.art)}</div>
        <h3>${secret.name}</h3>
        <p>${secret.text}</p>
      </article>
    `).join("");
    return;
  }

  collectionGrid.innerHTML = list.map(collectionCard).join("");
}

function renderSecretSections() {
  const html = secretVariants.map(secret => `
    <article class="secret-card secret-card--hidden">
      <div class="card-art">${renderCharacterArt(secret.art)}</div>
      <h3>${secret.name}</h3>
      <p>${secret.text}</p>
    </article>
  `).join("");

  secretGrid.innerHTML = html;
  lockerSecretGrid.innerHTML = html;
}

function renderShelfGrid() {
  shelfGrid.innerHTML = figureProducts()
    .filter(product => !ownedIds.includes(product.id))
    .slice(0, 6)
    .map(product => `
      <article class="shelf-card">
        <div class="card-art">${renderCharacterArt("mystery-variant")}</div>
        <h3>${product.name}</h3>
        <p>Unlock with your code</p>
      </article>
    `)
    .join("");
}

function visibleLockerGroups() {
  const figures = figureProducts();
  const owned = figures.filter(product => ownedIds.includes(product.id));
  const locked = figures.filter(product => !ownedIds.includes(product.id));

  switch (activeLockerFilter) {
    case "Owned":
      return { owned, locked: [] };
    case "Locked":
      return { owned: [], locked };
    case "Figures":
      return { owned, locked };
    case "Secret Variants":
      return { owned: [], locked: [] };
    default:
      return { owned, locked };
  }
}

function lockerCard(product, locked = false) {
  return `
    <article class="locker-card ${locked ? "locker-card--locked" : ""}">
      <div class="locker-card__top">
        <span class="mini-pill ${locked ? "mini-pill--charcoal" : "mini-pill--mint"}">
          ${locked ? "Locked" : "Unlocked"}
        </span>
        <span class="status-pill ${locked ? "status-pill--locked" : "status-pill--owned"}">
          ${locked ? "Locked" : "Owned"}
        </span>
      </div>
      <div class="card-art">${renderCharacterArt(locked ? "mystery-variant" : product.art)}</div>
      <h3>${locked ? product.name : product.name}</h3>
      <p>${locked ? "Unlock with your code." : "Ready for posing, fidgeting, and shelf display."}</p>
    </article>
  `;
}

function renderLocker() {
  renderFilterButtons(lockerFilters, lockerFilterOptions, activeLockerFilter, "locker-filter");
  const groups = visibleLockerGroups();

  if (activeLockerFilter === "Secret Variants") {
    unlockedGrid.innerHTML = `
      <article class="empty-locker">
        <div>
          <h3>Secret variants stay hidden.</h3>
          <p>Try the Mystery Box to chase a surprise pull.</p>
        </div>
      </article>
    `;
    lockedGrid.innerHTML = "";
  } else {
    unlockedGrid.innerHTML = groups.owned.length
      ? groups.owned.map(product => lockerCard(product)).join("")
      : `
        <article class="empty-locker">
          <div>
            <h3>Your Locker is waiting.</h3>
          <p>Enter a toy code to unlock your first LittleRobot.</p>
          </div>
        </article>
      `;

    lockedGrid.innerHTML = groups.locked.map(product => lockerCard(product, true)).join("");
  }

  badgeGrid.innerHTML = badgeRules.map(rule => {
    const unlocked = rule.unlocked(ownedIds);
    return `
      <article class="badge-card ${unlocked ? "" : "badge-card--locked"}">
        <span class="badge-card__icon">${renderSvgIcon(unlocked ? rule.icon : "locked")}</span>
        <h3>${rule.title}</h3>
        <p>${rule.text}</p>
      </article>
    `;
  }).join("");
}

function setActivePage(pageId) {
  if (!pageIds.includes(pageId)) {
    return;
  }

  activePage = pageId;

  pageNodes.forEach(page => {
    page.classList.toggle("active", page.id === pageId);
  });

  pageButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.pageTarget === pageId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setLockerStatus(message, state = "") {
  lockerStatus.textContent = message;
  lockerStatus.classList.remove("success", "error");

  if (state) {
    lockerStatus.classList.add(state);
  }
}

function launchConfetti() {
  confettiLayer.innerHTML = "";
  const colors = ["#78c4ff", "#ffd86b", "#ff90b5", "#92dda0", "#a69bff", "#ffbb7d"];

  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--drift-x", `${Math.random() * 220 - 110}px`);
    piece.style.animationDelay = `${Math.random() * 180}ms`;
    confettiLayer.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 1500);
}

function openUnlockModal(product) {
  unlockModalArt.innerHTML = renderCharacterArt(product.art);
  unlockModalTitle.textContent = `${product.name} unlocked!`;
  unlockModalText.textContent = "He’s now in your Locker.";
  unlockModal.classList.remove("hidden");
  unlockModal.setAttribute("aria-hidden", "false");
}

function closeUnlockModal() {
  unlockModal.classList.add("hidden");
  unlockModal.setAttribute("aria-hidden", "true");
}

function unlockWithCode() {
  const code = codeInput.value.trim().toUpperCase();

  if (!code) {
    setLockerStatus("Enter a code to unlock your LittleRobot.", "error");
    return;
  }

  const product = products.find(item => item.unlockCode === code);

  if (!product) {
    setLockerStatus("That code didn’t work. Check your card and try again.", "error");
    return;
  }

  if (ownedIds.includes(product.id)) {
    setLockerStatus(`${product.name} is already in your Locker.`, "success");
    codeInput.value = "";
    return;
  }

  ownedIds = [...ownedIds, product.id];
  saveOwnedIds();
  renderAll();
  launchConfetti();
  openUnlockModal(product);
  setLockerStatus(
    product.id === "robot"
      ? "LittleRobot unlocked! He’s now in your Locker."
      : `${product.name} unlocked! He’s now in your Locker.`,
    "success"
  );
  codeInput.value = "";
}

function bindEvents() {
  document.addEventListener("click", event => {
    const pageButton = event.target.closest("[data-page-target]");
    const shopFilterButton = event.target.closest("[data-shop-filter]");
    const collectionFilterButton = event.target.closest("[data-collection-filter]");
    const lockerFilterButton = event.target.closest("[data-locker-filter]");

    if (pageButton) {
      setActivePage(pageButton.dataset.pageTarget);
    }

    if (shopFilterButton) {
      activeShopFilter = shopFilterButton.dataset.shopFilter;
      renderShop();
    }

    if (collectionFilterButton) {
      activeCollectionFilter = collectionFilterButton.dataset.collectionFilter;
      renderCollection();
    }

    if (lockerFilterButton) {
      activeLockerFilter = lockerFilterButton.dataset.lockerFilter;
      renderLocker();
    }
  });

  unlockButton.addEventListener("click", unlockWithCode);
  codeInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      unlockWithCode();
    }
  });
  scanButton.addEventListener("click", () => {
    setLockerStatus("Scan Code is coming soon. Type the code from the card for now.", "success");
  });
  closeModalButton.addEventListener("click", closeUnlockModal);
  unlockModal.addEventListener("click", event => {
    if (event.target === unlockModal) {
      closeUnlockModal();
    }
  });
}

function renderAll() {
  renderFeaturedGrid();
  renderHowGrid();
  renderFavoritesGrid();
  renderShop();
  renderStats();
  renderCollection();
  renderSecretSections();
  renderShelfGrid();
  renderLocker();
  setSharedArt();
}

function bindPlushyWaitlist() {
  const stage = document.querySelector("[data-waitlist-stage]");
  const openButton = document.querySelector("[data-open-envelope]");
  const form = document.querySelector("[data-plushy-form]");
  const status = document.querySelector("[data-waitlist-status]");

  if (!stage || !openButton || !form || !status) {
    return;
  }

  openButton.addEventListener("click", () => {
    stage.classList.add("is-open");
    document.body.classList.add("waitlist-open");
    window.setTimeout(() => {
      form.querySelector("input")?.focus();
    }, 520);
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    status.textContent = "Sending...";
    status.classList.remove("success", "error");

    try {
      if (!plushySupabase.url || !plushySupabase.anonKey) {
        throw new Error("Supabase is not configured");
      }

      const row = {
        email: String(data.email || "").trim().toLowerCase(),
        would_buy: data.would_buy,
        preferred_size: data.preferred_size,
        price_comfort: data.price_comfort,
        favorite_character: String(data.favorite_character || "").trim() || null,
        guardian_email: String(data.guardian_email || "").trim().toLowerCase() || null
      };

      const response = await fetch(`${plushySupabase.url}/rest/v1/plushymen_waitlist`, {
        method: "POST",
        headers: {
          apikey: plushySupabase.anonKey,
          Authorization: `Bearer ${plushySupabase.anonKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify(row)
      });

      if (!response.ok) {
        throw new Error("Waitlist submission failed");
      }

      form.reset();
      status.textContent = "You are on the list. Thank you.";
      status.classList.add("success");
    } catch {
      status.textContent = "Supabase needs to be connected before launch.";
      status.classList.add("error");
    }
  });
}

function init() {
  if (document.body.classList.contains("waitlist-mode")) {
    bindPlushyWaitlist();
    return;
  }

  document.querySelectorAll("[data-app-logo-src]").forEach(image => {
    image.src = image.dataset.appLogoSrc;
  });

  renderAll();
  bindEvents();
  setActivePage(activePage);
}

init();
