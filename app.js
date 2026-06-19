/**
 * YOYO Express Room Service - Core Application Logic
 * State Management, Interactive Tray, 10-Min Checkout, Order Tracking & Concierge
 */

// Comprehensive Express Grocery & Snack Database
const MENU_ITEMS = [
  // --- FRESH & DAIRY ---
  {
    id: "dairy-milk",
    name: "Organic Whole Milk",
    category: "dairy",
    price: 3.29,
    time: "10 min",
    size: "1 L",
    desc: "Fresh farm-sourced pasteurized whole milk, rich in calcium and essential vitamins.",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "dairy-butter",
    name: "Salted Butter",
    category: "dairy",
    price: 4.49,
    time: "10 min",
    size: "250 g",
    desc: "Premium churned creamy salted butter, perfect for warm toast and baking.",
    img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "dairy-yogurt",
    name: "Greek Yogurt Strawberry",
    category: "dairy",
    price: 1.99,
    time: "10 min",
    size: "150 g",
    desc: "Thick and creamy probiotic Greek yogurt mixed with real strawberry fruit chunks.",
    img: "https://images.unsplash.com/photo-1571244856353-ff7b62e49c71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "dairy-sourdough",
    name: "Fresh Sourdough Bread",
    category: "dairy",
    price: 3.99,
    time: "10 min",
    size: "400 g",
    desc: "Artisan sourdough bread baked locally, thick-sliced with a crisp crust.",
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "dairy-eggs",
    name: "Free Range Brown Eggs",
    category: "dairy",
    price: 4.79,
    time: "10 min",
    size: "6 Pack",
    desc: "Farm fresh free-range large brown eggs, rich in protein.",
    img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=1200&auto=format&fit=crop"
  },

  // --- MUNCHIES & SNACKS ---
  {
    id: "snacks-chips",
    name: "Classic Salted Potato Chips",
    category: "snacks",
    price: 2.49,
    time: "10 min",
    size: "150 g",
    desc: "Thinly sliced crispy golden potato chips, salted to crunchy perfection.",
    img: "https://images.unsplash.com/photo-1566478989037-eec170784dcd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "snacks-cookies",
    name: "Chocolate Chip Cookies",
    category: "snacks",
    price: 3.79,
    time: "10 min",
    size: "200 g",
    desc: "Soft-baked cookies loaded with rich, semi-sweet Belgian chocolate chips.",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "snacks-ramen",
    name: "Spicy Shin Ramen Noodles",
    category: "snacks",
    price: 5.99,
    time: "10 min",
    size: "5 Pack",
    desc: "Hot and spicy instant ramen noodles with a rich, savory broth seasoning powder.",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "snacks-almonds",
    name: "Roasted Salted Almonds",
    category: "snacks",
    price: 6.49,
    time: "10 min",
    size: "250 g",
    desc: "Crunchy oven-roasted almonds lightly seasoned with premium sea salt.",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?q=80&w=1200&auto=format&fit=crop"
  },

  // --- DRINKS & BEVERAGES ---
  {
    id: "drinks-cola",
    name: "Coca-Cola Classic",
    category: "drinks",
    price: 1.89,
    time: "10 min",
    size: "500 ml",
    desc: "Iconic sparkling carbonated soft drink, served perfectly chilled.",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "drinks-energy",
    name: "Red Bull Energy Drink",
    category: "drinks",
    price: 2.99,
    time: "10 min",
    size: "250 ml",
    desc: "Carbonated energy drink formulated to vitalize body and mind, high caffeine.",
    img: "https://images.unsplash.com/photo-1622543953490-0b70039a4ac5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "drinks-juice",
    name: "Fresh Pressed Orange Juice",
    category: "drinks",
    price: 4.99,
    time: "10 min",
    size: "1 L",
    desc: "100% cold-pressed orange juice with pulp, zero added sugar or preservatives.",
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "drinks-water",
    name: "Premium Mineral Water",
    category: "drinks",
    price: 1.29,
    time: "10 min",
    size: "1 L",
    desc: "Natural volcanic spring water, filtered organically for a clean, refreshing taste.",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop"
  },

  // --- ICE CREAMS & SWEETS ---
  {
    id: "desserts-vanilla",
    name: "Premium Vanilla Bean Tub",
    category: "desserts",
    price: 5.49,
    time: "10 min",
    size: "500 ml",
    desc: "Rich, creamy vanilla bean ice cream prepared with fresh dairy cream and vanilla pods.",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "desserts-chocobar",
    name: "Gourmet Hazelnut Choco-Bar",
    category: "desserts",
    price: 2.29,
    time: "10 min",
    size: "80 g",
    desc: "Decadent milk chocolate bar loaded with crushed caramelized hazelnuts.",
    img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "desserts-cupcake",
    name: "Red Velvet Cupcakes",
    category: "desserts",
    price: 4.99,
    time: "10 min",
    size: "2 Pack",
    desc: "Soft and fluffy red velvet cupcakes topped with a rich vanilla cream cheese swirl.",
    img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200&auto=format&fit=crop"
  },

  // --- DAILY ESSENTIALS ---
  {
    id: "essentials-handwash",
    name: "Aloe Vera Liquid Handwash",
    category: "essentials",
    price: 3.49,
    time: "10 min",
    size: "250 ml",
    desc: "Gentle moisturizing liquid hand soap enriched with organic aloe vera extracts.",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "essentials-toothpaste",
    name: "Colgate Max Fresh Toothpaste",
    category: "essentials",
    price: 2.99,
    time: "10 min",
    size: "100 g",
    desc: "Advanced cooling crystals toothpaste for breath freshness and cavity protection.",
    img: "https://images.unsplash.com/photo-1559599141-3815480a826b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "essentials-toiletpaper",
    name: "Ultra Soft Toilet Paper",
    category: "essentials",
    price: 3.99,
    time: "10 min",
    size: "4 Rolls",
    desc: "Premium 3-ply extra soft bathroom tissue rolls, absorbency-tested.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "essentials-dishsoap",
    name: "Lemon Dishwashing Liquid",
    category: "essentials",
    price: 2.49,
    time: "10 min",
    size: "500 ml",
    desc: "Concentrated cleaning liquid formulated to remove tough grease with citrus freshness.",
    img: "https://images.unsplash.com/photo-1607006342466-2a42a80693a7?q=80&w=1200&auto=format&fit=crop"
  }
];

// Application Global State
const state = {
  cart: {}, // Format: { itemId: quantity }
  activeCategory: "dairy",
  activeOrder: null, // Active tracking order details
  conciergeRequests: [] // History of quick amenity dispatches
};

// UI Elements mapping
const DOM = {
  menuGrid: null,
  categoryButtons: [],
  trayCount: null,
  trayDrawer: null,
  drawerOverlay: null,
  cartItemsContainer: null,
  subtotalVal: null,
  serviceFeeVal: null,
  taxVal: null,
  deliveryVal: null,
  totalVal: null,
  checkoutForm: null,
  openTrayBtn: null,
  closeTrayBtn: null,
  orderTrackerSection: null,
  trackerStatusText: null,
  trackerTimer: null,
  trackerProgressBar: null,
  trackerSteps: [],
  butlerRequestBtns: [],
  butlerLogs: null,

  // Guest Portal Cache
  userPortal: null,
  userPortalBtn: null,
  userPortalDropdown: null,
  portalSuiteNumber: null,
  headerSuiteNumber: null
};

// Pricing Parameters (YOYO Rebranded)
const TAX_RATE = 0.08; // 8% GST & Tax
const HANDLING_FEE_RATE = 0.05; // 5% Handling & Packaging Charge
const DELIVERY_FEE = 2.50; // Flat $2.50 YOYO Delivery fee

// Ticker interval references
let trackerProgressInterval = null;
let trackerTimerInterval = null;
let stayMonitorInterval = null;

// Initialize on DOM load
window.addEventListener("DOMContentLoaded", () => {
  const isLoginPage = !!document.getElementById("page-login-form") || document.body.classList.contains("auth-body");

  if (isLoginPage) {
    // Seed demo account
    seedDemoAccount();
    
    // Check if user is already logged in, if so redirect to index
    const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
    if (activeUser) {
      window.location.href = "index.html";
    }
  } else {
    // index.html or main portal pages
    
    // Redirect to login if user session does not exist
    const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
    if (!activeUser) {
      window.location.href = "login.html";
      return;
    }
    
    initDOM();
    loadStateFromStorage();
    bindEvents();
    renderMenu(state.activeCategory);
    updateCartUI();
    checkActiveOrder();
    initUserPortal();

    // Check if stay confirmation is needed (upon login)
    checkStayConfirmation();

    // Initialize Real-Time Stay Expiration Monitor
    initStayMonitorLoop();
  }
});

// Cache DOM Elements
function initDOM() {
  DOM.menuGrid = document.getElementById("menu-grid");
  DOM.categoryButtons = document.querySelectorAll(".categories button");
  DOM.trayCount = document.getElementById("tray-count");
  DOM.trayDrawer = document.getElementById("tray-drawer");
  DOM.drawerOverlay = document.getElementById("drawer-overlay");
  DOM.cartItemsContainer = document.getElementById("cart-items");
  DOM.subtotalVal = document.getElementById("price-subtotal");
  DOM.serviceFeeVal = document.getElementById("price-service");
  DOM.taxVal = document.getElementById("price-tax");
  DOM.deliveryVal = document.getElementById("price-delivery");
  DOM.totalVal = document.getElementById("price-total");
  DOM.checkoutForm = document.getElementById("checkout-form");
  DOM.openTrayBtn = document.getElementById("open-tray-btn");
  DOM.closeTrayBtn = document.getElementById("close-tray-btn");
  
  // Tracking
  DOM.orderTrackerSection = document.getElementById("order-tracker");
  DOM.trackerStatusText = document.getElementById("tracker-status-text");
  DOM.trackerTimer = document.getElementById("tracker-timer-val");
  DOM.trackerProgressBar = document.getElementById("tracker-progress-fill");
  DOM.trackerSteps = document.querySelectorAll(".tracker-step");
  
  // Quick amenities panel
  DOM.butlerRequestBtns = document.querySelectorAll(".butler-action-btn");
  DOM.butlerLogs = document.getElementById("butler-logs");

  // Portal elements
  DOM.userPortal = document.getElementById("user-portal");
  DOM.userPortalBtn = document.getElementById("user-portal-btn");
  DOM.userPortalDropdown = document.getElementById("user-portal-dropdown");
  DOM.portalSuiteNumber = document.getElementById("portal-suite-number");
  DOM.headerSuiteNumber = document.getElementById("header-suite-number");
}

// Bind event listeners
function bindEvents() {
  // Category tabs
  DOM.categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const category = btn.dataset.category || btn.textContent.toLowerCase();
      state.activeCategory = category;
      
      // Clear search input on tab change
      const searchInput = document.getElementById("product-search");
      if (searchInput) {
        searchInput.value = "";
      }
      
      renderMenu(category);
    });
  });

  // Search input filter binding
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      renderMenu(state.activeCategory, query);
    });
  }

  // Tray Drawer Controls
  if (DOM.openTrayBtn) {
    DOM.openTrayBtn.addEventListener("click", openTray);
  }
  if (DOM.closeTrayBtn) {
    DOM.closeTrayBtn.addEventListener("click", closeTray);
  }
  if (DOM.drawerOverlay) {
    DOM.drawerOverlay.addEventListener("click", closeTray);
  }

  // Checkout submission
  if (DOM.checkoutForm) {
    DOM.checkoutForm.addEventListener("submit", handleCheckout);
  }

  // Butler quick actions (Complimentary room essentials)
  DOM.butlerRequestBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const service = btn.dataset.service;
      requestConciergeService(service);
    });
  });

  // Close portal dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (DOM.userPortal && !DOM.userPortal.contains(event.target)) {
      if (DOM.userPortalDropdown && DOM.userPortalDropdown.classList.contains("active")) {
        DOM.userPortalDropdown.classList.remove("active");
      }
    }
  });
}

// Render Menu Cards dynamically with search filters
function renderMenu(category, searchFilter = "") {
  if (!DOM.menuGrid) return;
  
  // Clear grid
  DOM.menuGrid.innerHTML = "";
  
  // Filter items based on active tab OR full inventory query search
  let filtered;
  if (searchFilter) {
    filtered = MENU_ITEMS.filter(item => 
      item.name.toLowerCase().includes(searchFilter) || 
      item.desc.toLowerCase().includes(searchFilter) ||
      item.category.toLowerCase().includes(searchFilter)
    );
  } else {
    filtered = MENU_ITEMS.filter(item => item.category === category);
  }
  
  if (filtered.length === 0) {
    DOM.menuGrid.innerHTML = `<div class="empty-menu-msg">No items found matching your selection.</div>`;
    return;
  }

  // Render cards
  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    
    const qty = state.cart[item.id] || 0;
    
    // Add discount label on select snacks/drinks
    let discountBadge = "";
    if (item.price > 3.5) {
      discountBadge = `<div class="card-discount-badge">10% OFF</div>`;
    }
    
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        ${discountBadge}
        <div class="card-time-badge">⏱ ${item.time}</div>
      </div>
      <div class="content">
        <div class="top">
          <h3>${item.name}</h3>
          <span class="product-size">${item.size}</span>
        </div>
        <div class="desc">${item.desc}</div>
        <div class="price-row-grid">
          <span class="current-price">$${item.price.toFixed(2)}</span>
          ${item.price > 3.5 ? `<span class="original-price">$${(item.price / 0.9).toFixed(2)}</span>` : ""}
        </div>
        
        <div class="card-action-box">
          ${qty > 0 ? `
            <div class="qty-selector-grid">
              <button class="qty-grid-btn" onclick="updateQuantityGrid('${item.id}', -1)">-</button>
              <span class="qty-grid-val">${qty}</span>
              <button class="qty-grid-btn" onclick="updateQuantityGrid('${item.id}', 1)">+</button>
            </div>
          ` : `
            <button class="add-btn-grid" onclick="addToCartGrid('${item.id}')">
              + ADD
            </button>
          `}
        </div>
      </div>
    `;
    DOM.menuGrid.appendChild(card);
  });
}

// Global hookups for morphing buttons
window.addToCartGrid = function(itemId) {
  addToCart(itemId);
};

window.updateQuantityGrid = function(itemId, delta) {
  updateQuantity(itemId, delta);
};

// Open / Close Drawer
function openTray() {
  if (DOM.trayDrawer && DOM.drawerOverlay) {
    DOM.trayDrawer.classList.add("open");
    DOM.drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Lock background scrolling
  }
}

function closeTray() {
  if (DOM.trayDrawer && DOM.drawerOverlay) {
    DOM.trayDrawer.classList.remove("open");
    DOM.drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Add Item to Tray with animations
window.addToCart = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (state.cart[itemId]) {
    state.cart[itemId] += 1;
  } else {
    state.cart[itemId] = 1;
  }
  
  saveStateToStorage();
  updateCartUI();
  
  // Animate the Tray button badge
  if (DOM.trayCount) {
    DOM.trayCount.classList.remove("badge-pulse");
    void DOM.trayCount.offsetWidth; // Trigger reflow
    DOM.trayCount.classList.add("badge-pulse");
  }

  showToast(`Added ${item.name} to basket.`, "success");
};

// Quantitative adjustments inside tray
window.updateQuantity = function(itemId, delta) {
  if (!state.cart[itemId]) return;
  
  state.cart[itemId] += delta;
  if (state.cart[itemId] <= 0) {
    delete state.cart[itemId];
  }
  
  saveStateToStorage();
  updateCartUI();
};

window.removeFromCart = function(itemId) {
  if (state.cart[itemId]) {
    delete state.cart[itemId];
    saveStateToStorage();
    updateCartUI();
    showToast("Item removed from basket.", "info");
  }
};

// Render Cart items & dynamically calculate pricing totals
function updateCartUI() {
  if (!DOM.cartItemsContainer) return;
  
  let totalCount = 0;
  let subtotal = 0;
  
  DOM.cartItemsContainer.innerHTML = "";
  
  const itemIds = Object.keys(state.cart);
  
  if (itemIds.length === 0) {
    DOM.cartItemsContainer.innerHTML = `
      <div class="empty-tray-state">
        <div class="empty-tray-icon">🛒</div>
        <p class="empty-text-title">Your basket is empty</p>
        <p class="empty-text-subtitle">Add snacks, drinks and essentials to start your 10-min session.</p>
        <button class="checkout-submit-btn" onclick="closeTray()" style="max-width: 200px; margin: 0 auto;">Start Browsing</button>
      </div>
    `;
    
    // Set pricing to zero
    DOM.subtotalVal.textContent = "$0.00";
    DOM.serviceFeeVal.textContent = "$0.00";
    DOM.taxVal.textContent = "$0.00";
    DOM.deliveryVal.textContent = "$0.00";
    DOM.totalVal.textContent = "$0.00";
    DOM.trayCount.textContent = "0";
    DOM.trayCount.style.display = "none";
    
    // Hide checkout form when cart is empty
    if (DOM.checkoutForm) {
      DOM.checkoutForm.style.display = "none";
    }
    
    // Refresh product grid to clear selectors
    renderMenu(state.activeCategory, document.getElementById("product-search")?.value || "");
    return;
  }
  
  // Show checkout form when items are present
  if (DOM.checkoutForm) {
    DOM.checkoutForm.style.display = "block";
    const roomInput = document.getElementById("room-number");
    const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
    if (roomInput && activeUser && activeUser.suite) {
      roomInput.value = activeUser.suite;
      roomInput.readOnly = true;
      roomInput.style.background = "#f8fafc";
      roomInput.style.borderColor = "var(--border-subtle)";
    }
  }

  itemIds.forEach(itemId => {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;
    
    const qty = state.cart[itemId];
    totalCount += qty;
    
    const itemTotal = item.price * qty;
    subtotal += itemTotal;
    
    const cartRow = document.createElement("div");
    cartRow.className = "cart-item";
    cartRow.innerHTML = `
      <div class="cart-item-details">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price-desc">${qty} × $${item.price.toFixed(2)}</span>
      </div>
      <div class="cart-item-actions">
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQuantity('${itemId}', -1)">-</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" onclick="updateQuantity('${itemId}', 1)">+</button>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart('${itemId}')">✕</button>
      </div>
    `;
    DOM.cartItemsContainer.appendChild(cartRow);
  });
  
  // Update Header badge count
  DOM.trayCount.textContent = totalCount;
  DOM.trayCount.style.display = "flex";

  // Calculate pricing matrices (YOYO Rebranded)
  const serviceFee = subtotal * HANDLING_FEE_RATE; // Handling Fee
  const tax = subtotal * TAX_RATE; // GST
  // Delivery fee is waived if total is above $15
  const finalDeliveryFee = subtotal >= 15.00 ? 0.00 : DELIVERY_FEE;
  const grandTotal = subtotal + serviceFee + tax + finalDeliveryFee;
  
  // DOM Render
  DOM.subtotalVal.textContent = `$${subtotal.toFixed(2)}`;
  DOM.serviceFeeVal.textContent = `$${serviceFee.toFixed(2)}`;
  DOM.taxVal.textContent = `$${tax.toFixed(2)}`;
  DOM.deliveryVal.textContent = finalDeliveryFee === 0 ? "FREE" : `$${finalDeliveryFee.toFixed(2)}`;
  DOM.totalVal.textContent = `$${grandTotal.toFixed(2)}`;

  // Re-render menu to sync the quantity buttons in the grid in real-time
  renderMenu(state.activeCategory, document.getElementById("product-search")?.value || "");
}

// Checkout placement
function handleCheckout(event) {
  event.preventDefault();
  
  const roomNumberInput = document.getElementById("room-number");
  const deliveryTimeInput = document.getElementById("delivery-time");
  const specialNotesInput = document.getElementById("special-notes");
  
  const roomNumber = roomNumberInput.value.trim();
  const deliveryTime = deliveryTimeInput.value;
  const specialNotes = specialNotesInput.value.trim();
  
  if (!roomNumber) {
    showToast("Please specify your suite/room number.", "error");
    roomNumberInput.focus();
    return;
  }
  
  if (!/^\d{2,4}[A-Za-z]?$/.test(roomNumber)) {
    showToast("Please enter a valid room or suite number.", "error");
    roomNumberInput.focus();
    return;
  }

  let targetDeliveryTime;
  let timePrefText = "";
  const now = new Date();

  if (deliveryTime === "asap") {
    targetDeliveryTime = now.getTime() + (10 * 60 * 1000); // 10 minutes out for YOYO Express
    timePrefText = "ASAP (approx. 10 mins)";
  } else if (deliveryTime === "scheduled") {
    const scheduledTimeInput = document.getElementById("scheduled-delivery-time").value;
    if (!scheduledTimeInput) {
      showToast("Please specify your desired scheduling date & time.", "error");
      document.getElementById("scheduled-delivery-time").focus();
      return;
    }
    
    targetDeliveryTime = new Date(scheduledTimeInput).getTime();
    
    if (targetDeliveryTime <= now.getTime()) {
      showToast("Please select a future date and time for scheduled delivery.", "error");
      document.getElementById("scheduled-delivery-time").focus();
      return;
    }

    const schedDate = new Date(targetDeliveryTime);
    timePrefText = `Scheduled: ${schedDate.toLocaleDateString()} at ${schedDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
  }

  // Check stay boundaries
  const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
  const checkInTime = activeUser && activeUser.checkIn ? new Date(activeUser.checkIn).getTime() : null;
  const checkOutTime = activeUser && activeUser.checkOut ? new Date(activeUser.checkOut).getTime() : null;

  if (checkInTime && targetDeliveryTime < checkInTime) {
    const checkInString = new Date(checkInTime).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
    showToast(`⚠️ Delivery schedule falls before check-in time (${checkInString}).`, "error");
    return;
  }

  if (checkOutTime && targetDeliveryTime > checkOutTime) {
    const checkOutString = new Date(checkOutTime).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
    showToast(`⚠️ Delivery schedule falls after check-out time (${checkOutString}).`, "error");
    return;
  }

  // Construct Order Object
  const orderItems = [];
  Object.keys(state.cart).forEach(itemId => {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    orderItems.push({
      id: itemId,
      name: item.name,
      qty: state.cart[itemId],
      price: item.price
    });
  });

  const orderId = "YOYO-" + Math.floor(1000 + Math.random() * 9000);
  const totalRaw = parseFloat(DOM.totalVal.textContent.replace("$", ""));
  
  const newOrder = {
    id: orderId,
    items: orderItems,
    room: roomNumber,
    timePreference: timePrefText,
    notes: specialNotes || "No notes.",
    total: totalRaw,
    timestamp: now.getTime(),
    estimatedDeliveryTime: targetDeliveryTime,
    statusIndex: 0, // 0 = Placed, 1 = Packed, 2 = Rider En Route, 3 = Delivered
    progressPercent: 12
  };
  
  state.activeOrder = newOrder;
  state.cart = {};
  
  saveStateToStorage();
  updateCartUI();
  closeTray();
  
  // Reset form inputs
  roomNumberInput.value = "";
  specialNotesInput.value = "";
  const scheduledTimeInput = document.getElementById("scheduled-delivery-time");
  if (scheduledTimeInput) scheduledTimeInput.value = "";
  const scheduledTimeGroup = document.getElementById("scheduled-time-group");
  if (scheduledTimeGroup) scheduledTimeGroup.style.display = "none";
  if (deliveryTimeInput) deliveryTimeInput.value = "asap";
  
  showToast(`Order ${orderId} placed and charged to Suite ${roomNumber}!`, "success");
  
  checkActiveOrder();
  
  // Refresh stay itinerary timeline
  renderStayItinerary();
}

window.toggleScheduledTimeInput = function() {
  const deliveryTimeVal = document.getElementById("delivery-time").value;
  const group = document.getElementById("scheduled-time-group");
  if (group) {
    if (deliveryTimeVal === "scheduled") {
      group.style.display = "block";
      const scheduledTimeInput = document.getElementById("scheduled-delivery-time");
      if (scheduledTimeInput) {
        const now = new Date();
        const tzoffset = now.getTimezoneOffset() * 60000;
        const localISOTime = (new Date(now.getTime() - tzoffset)).toISOString().slice(0, 16);
        scheduledTimeInput.min = localISOTime;
        
        const inOneHour = new Date(now.getTime() + (60 * 60 * 1000) - tzoffset);
        scheduledTimeInput.value = inOneHour.toISOString().slice(0, 16);
      }
    } else {
      group.style.display = "none";
    }
  }
};

// Check active order states on page load/refreshes
function checkActiveOrder() {
  if (state.activeOrder) {
    if (DOM.orderTrackerSection) {
      DOM.orderTrackerSection.style.display = "block";
      setTimeout(() => {
        DOM.orderTrackerSection.scrollIntoView({ behavior: "smooth" });
      }, 500);
      
      initOrderTrackingLoop();
    }
  } else {
    if (DOM.orderTrackerSection) {
      DOM.orderTrackerSection.style.display = "none";
    }
  }
}

// Active tracking ticker loops
function initOrderTrackingLoop() {
  clearInterval(trackerProgressInterval);
  clearInterval(trackerTimerInterval);
  
  // YOYO order ticker (Placing -> Packed (20s) -> Rider (40s) -> Delivered (60s))
  trackerProgressInterval = setInterval(() => {
    if (!state.activeOrder) {
      clearInterval(trackerProgressInterval);
      return;
    }
    
    const elapsedSeconds = Math.floor((new Date().getTime() - state.activeOrder.timestamp) / 1000);
    
    let currentStatusIndex = 0;
    let progress = 12;
    
    if (elapsedSeconds >= 60) {
      currentStatusIndex = 3; // Delivered
      progress = 100;
    } else if (elapsedSeconds >= 40) {
      currentStatusIndex = 2; // Rider En Route
      progress = 75;
    } else if (elapsedSeconds >= 20) {
      currentStatusIndex = 1; // Packed
      progress = 45;
    } else {
      currentStatusIndex = 0; // Placed
      progress = 12;
    }
    
    // Status advance triggers toast notifications
    if (state.activeOrder.statusIndex !== currentStatusIndex) {
      state.activeOrder.statusIndex = currentStatusIndex;
      state.activeOrder.progressPercent = progress;
      
      let statusAlert = "";
      switch (currentStatusIndex) {
        case 1:
          statusAlert = "YOYO partner store has packed your items.";
          break;
        case 2:
          statusAlert = "YOYO Rider has picked up your order and is en route.";
          break;
        case 3:
          statusAlert = "YOYO Order Delivered! Enjoy your items.";
          break;
      }
      showToast(statusAlert, "info");
      saveStateToStorage();
    }
    
    updateTrackingUI();
    
    if (currentStatusIndex === 3) {
      clearInterval(trackerProgressInterval);
    }
  }, 2000);
  
  // Ticking estimated delivery clock timer
  trackerTimerInterval = setInterval(() => {
    if (!state.activeOrder) {
      clearInterval(trackerTimerInterval);
      return;
    }
    
    const now = new Date().getTime();
    const diff = state.activeOrder.estimatedDeliveryTime - now;
    
    if (diff <= 0 || state.activeOrder.statusIndex === 3) {
      DOM.trackerTimer.textContent = "Delivered";
      clearInterval(trackerTimerInterval);
      return;
    }
    
    // Convert to MM:SS format
    const totalSecs = Math.floor(diff / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    
    DOM.trackerTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

// Dynamic elements renderer for tracking progress bar & stepper
function updateTrackingUI() {
  const order = state.activeOrder;
  if (!order) return;

  const statuses = [
    "Order Received & Confirmed",
    "Packed by YOYO Partner Store",
    "YOYO Rider heading to your Suite",
    "Delivered. Enjoy your goodies!"
  ];
  
  DOM.trackerStatusText.textContent = statuses[order.statusIndex];
  
  if (DOM.trackerProgressBar) {
    DOM.trackerProgressBar.style.width = `${order.progressPercent}%`;
  }
  
  DOM.trackerSteps.forEach((step, idx) => {
    step.classList.remove("active", "completed");
    
    if (idx < order.statusIndex) {
      step.classList.add("completed");
    } else if (idx === order.statusIndex) {
      step.classList.add("active");
    }
  });

  // Render ordered items in tracking list
  const listContainer = document.getElementById("tracker-items-list");
  if (listContainer) {
    listContainer.innerHTML = "";
    order.items.forEach(item => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.marginBottom = "8px";
      li.innerHTML = `
        <span style="color:var(--text-primary); font-weight: 500;">${item.name} <em style="color:var(--text-muted); font-size:12px; font-style:normal;">(x${item.qty})</em></span>
        <span style="color:var(--primary-purple); font-weight:700;">$${(item.price * item.qty).toFixed(2)}</span>
      `;
      listContainer.appendChild(li);
    });
  }

  // Order Details Subtext
  const orderDetailsSubtext = document.getElementById("tracker-order-details");
  if (orderDetailsSubtext) {
    orderDetailsSubtext.innerHTML = `
      <strong>Order ID:</strong> ${order.id} <br>
      <strong>Suite:</strong> ${order.room} &nbsp;|&nbsp; 
      <strong>Time:</strong> ${order.timePreference} <br>
      <strong>Instructions:</strong> <em>"${order.notes}"</em>
    `;
  }
}

// Clear order tracking
window.dismissTracker = function() {
  state.activeOrder = null;
  saveStateToStorage();
  checkActiveOrder();
  showToast("Tracking panel closed.", "info");
};

// Amenities Quick Service Requests (Rebranded to YOYO)
function requestConciergeService(service) {
  const butlerReplies = {
    "ice": "Request registered. A chilled bag of ice cubes is being dispatched.",
    "towels": "Sure! Fresh plush suite hand towels are being sent to your door.",
    "hangers": "Perfect. A pack of wooden garment hangers is en route.",
    "turndown": "Sure. Complimentary room slippers and toiletries are heading your way."
  };

  const serviceNames = {
    "ice": "Chilled Ice Cubes",
    "towels": "Fresh Hand Towels",
    "hangers": "Garment Hangers",
    "turndown": "Amenities Pack"
  };

  const notificationText = butlerReplies[service] || "YOYO Express has logged your request and will deliver shortly.";
  const serviceTitle = serviceNames[service] || "Amenity Request";

  const reqId = "AMN-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  
  const newRequest = {
    id: reqId,
    service: serviceTitle,
    time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    timestamp: now.getTime(),
    status: "Rider En Route"
  };

  state.conciergeRequests.unshift(newRequest);
  saveStateToStorage();
  
  showToast(`${serviceTitle} requested. Dispatching en route!`, "success");
  
  renderButlerLogs();
  
  // Refresh stay itinerary timeline
  renderStayItinerary();
}

// Render list of amenity dispatches
function renderButlerLogs() {
  if (!DOM.butlerLogs) return;

  if (state.conciergeRequests.length === 0) {
    DOM.butlerLogs.innerHTML = `
      <div style="color: var(--text-muted); text-align: center; padding: 20px; font-size: 13px;">
        🛎 No active logs. Tap an amenity to request.
      </div>
    `;
    return;
  }

  DOM.butlerLogs.innerHTML = "";
  
  state.conciergeRequests.slice(0, 3).forEach(req => {
    const log = document.createElement("div");
    log.className = "butler-log-item";
    log.innerHTML = `
      <div>
        <div style="color: var(--text-primary); font-weight: 600; font-size: 14px;">${req.service}</div>
        <div style="color: var(--text-muted); font-size: 11px; margin-top: 1px;">ID: ${req.id} • Sent at ${req.time}</div>
      </div>
      <div style="background: var(--primary-purple-light); color: var(--primary-purple); font-size: 11px; padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(92, 44, 144, 0.2); font-weight: 700;">
        ${req.status}
      </div>
    `;
    DOM.butlerLogs.appendChild(log);
  });
}

// Toast Notification system
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "🔔";
  if (type === "success") icon = "⚡";
  if (type === "error") icon = "⚠️";
  if (type === "info") icon = "📦";

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("toast-fade-out");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 4000);
}

// LocalStorage Persistent State helpers
function saveStateToStorage() {
  localStorage.setItem("yoyo_cart", JSON.stringify(state.cart));
  localStorage.setItem("yoyo_active_order", JSON.stringify(state.activeOrder));
  localStorage.setItem("yoyo_concierge_reqs", JSON.stringify(state.conciergeRequests));
}

function loadStateFromStorage() {
  const savedCart = localStorage.getItem("yoyo_cart");
  const savedOrder = localStorage.getItem("yoyo_active_order");
  const savedReqs = localStorage.getItem("yoyo_concierge_reqs");
  
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  }
  if (savedOrder) {
    state.activeOrder = JSON.parse(savedOrder);
  }
  if (savedReqs) {
    state.conciergeRequests = JSON.parse(savedReqs);
    renderButlerLogs();
  }
}

// --- Guest Portal Authentication Integration ---
function initUserPortal() {
  const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
  
  if (activeUser) {
    if (DOM.userPortalBtn) {
      DOM.userPortalBtn.innerHTML = `⚡ ${activeUser.name}`;
      DOM.userPortalBtn.removeAttribute("onclick");
      DOM.userPortalBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        togglePortalDropdown();
      });
    }

    if (DOM.portalSuiteNumber) {
      DOM.portalSuiteNumber.textContent = activeUser.suite;
    }
    if (DOM.headerSuiteNumber) {
      DOM.headerSuiteNumber.textContent = activeUser.suite;
    }

    const greeted = sessionStorage.getItem("yoyo_greeted");
    if (!greeted) {
      setTimeout(() => {
        showToast(`Logged in to Suite ${activeUser.suite}. YOYO delivery activated!`, "success");
        sessionStorage.setItem("yoyo_greeted", "true");
      }, 1200);
    }

    renderStayItinerary();
  } else {
    if (DOM.userPortalBtn) {
      DOM.userPortalBtn.innerHTML = `🔑 Guest Portal`;
      DOM.userPortalBtn.setAttribute("onclick", "toggleAuthModal()");
    }
  }
}

window.togglePortalDropdown = function() {
  if (DOM.userPortalDropdown) {
    DOM.userPortalDropdown.classList.toggle("active");
  }
};

window.handlePortalLogout = function() {
  localStorage.removeItem("yoyo_active_user");
  sessionStorage.removeItem("yoyo_greeted");
  showToast("Logged out successfully.", "info");
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

// --- Unified Authentication Modal Controllers ---
window.toggleAuthModal = function() {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  
  if (modal.style.display === "none") {
    modal.style.display = "flex";
    switchAuthView("login");
    seedDemoAccount();
  } else {
    modal.style.display = "none";
  }
};

window.switchAuthView = function(view) {
  const loginView = document.getElementById("auth-view-login");
  const signupView = document.getElementById("auth-view-signup");
  const forgotView = document.getElementById("auth-view-forgot");
  const subtitle = document.getElementById("auth-modal-subtitle");
  const notification = document.getElementById("auth-modal-notification");

  if (notification) notification.style.display = "none";

  if (loginView) loginView.style.display = "none";
  if (signupView) signupView.style.display = "none";
  if (forgotView) forgotView.style.display = "none";

  if (view === "login") {
    if (loginView) loginView.style.display = "block";
    if (subtitle) subtitle.textContent = "Suite Guest Access";
  } else if (view === "signup") {
    if (signupView) signupView.style.display = "block";
    if (subtitle) subtitle.textContent = "Authenticate Suite";
  } else if (view === "forgot") {
    if (forgotView) forgotView.style.display = "block";
    if (subtitle) subtitle.textContent = "Recover Suite Credentials";
    
    const recoveryForm = document.getElementById("modal-recovery-form-block");
    const recoverySuccess = document.getElementById("modal-recovery-success");
    if (recoveryForm) recoveryForm.style.display = "block";
    if (recoverySuccess) recoverySuccess.style.display = "none";
  }
};

function seedDemoAccount() {
  const db = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
  
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const checkoutDate = new Date();
  checkoutDate.setDate(today.getDate() + 3);
  checkoutDate.setHours(11, 0, 0, 0);

  const formatDateTimeLocal = (date) => {
    const pad = (n) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

  const defaultUser = {
    title: "Lord",
    name: "Lord Hamilton",
    suite: "402",
    email: "hamilton@yoyo.com",
    password: "luxurypassword",
    checkIn: formatDateTimeLocal(today),
    checkOut: formatDateTimeLocal(checkoutDate)
  };

  const index = db.findIndex(g => g.email === defaultUser.email);
  if (index === -1) {
    db.push(defaultUser);
    localStorage.setItem("yoyo_guests", JSON.stringify(db));
  } else {
    db[index].checkIn = defaultUser.checkIn;
    db[index].checkOut = defaultUser.checkOut;
    localStorage.setItem("yoyo_guests", JSON.stringify(db));
  }
}

window.handleModalLogin = function(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById("modal-login-email").value.trim().toLowerCase();
  const passwordInput = document.getElementById("modal-login-password").value;
  const notification = document.getElementById("auth-modal-notification");

  const guests = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
  const guest = guests.find(g => g.email.toLowerCase() === emailInput && g.password === passwordInput);

  if (guest) {
    localStorage.setItem("yoyo_active_user", JSON.stringify({
      title: guest.title,
      name: guest.name,
      suite: guest.suite,
      email: guest.email,
      checkIn: guest.checkIn || "",
      checkOut: guest.checkOut || ""
    }));

    sessionStorage.setItem("confirm_stay_needed", "true");

    if (notification) {
      notification.style.display = "block";
      notification.style.background = "var(--primary-purple-light)";
      notification.style.border = "1px solid var(--primary-purple)";
      notification.style.color = "var(--primary-purple)";
      notification.innerHTML = `⚡ Welcome back, ${guest.name}. Loading portal...`;
    }

    setTimeout(() => {
      toggleAuthModal();
      initUserPortal();
      
      const roomInput = document.getElementById("room-number");
      if (roomInput) {
        roomInput.value = guest.suite;
        roomInput.readOnly = true;
        roomInput.style.background = "#f8fafc";
        roomInput.style.borderColor = "var(--border-subtle)";
      }
      showToast(`Welcome back, ${guest.name}.`, "success");
    }, 1500);
  } else {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "var(--accent-pink-light)";
      notification.style.border = "1px solid var(--accent-pink)";
      notification.style.color = "var(--accent-pink)";
      notification.innerHTML = "⚠️ Invalid credentials. Please try again.";
    }
  }
};

window.handleModalSignup = function(event) {
  event.preventDefault();

  const title = document.getElementById("modal-signup-title").value;
  const name = document.getElementById("modal-signup-name").value.trim();
  const suite = document.getElementById("modal-signup-suite").value.trim();
  const email = document.getElementById("modal-signup-email").value.trim().toLowerCase();
  const password = document.getElementById("modal-signup-password").value;
  const confirmPassword = document.getElementById("modal-signup-confirm").value;
  const notification = document.getElementById("auth-modal-notification");

  if (password.length < 6) {
    showModalError("⚠️ Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    showModalError("⚠️ Passwords do not match.");
    return;
  }

  const checkIn = document.getElementById("modal-signup-checkin").value;
  const checkOut = document.getElementById("modal-signup-checkout").value;

  if (new Date(checkOut) <= new Date(checkIn)) {
    showModalError("⚠️ Departure check-out time must be after check-in time.");
    return;
  }

  const guests = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
  if (guests.some(g => g.email.toLowerCase() === email)) {
    showModalError("⚠️ A suite account with this email already exists.");
    return;
  }

  const newGuest = {
    title,
    name: title + " " + name,
    suite,
    email,
    password,
    checkIn,
    checkOut
  };
  guests.push(newGuest);
  localStorage.setItem("yoyo_guests", JSON.stringify(guests));

  if (notification) {
    notification.style.display = "block";
    notification.style.background = "var(--primary-purple-light)";
    notification.style.border = "1px solid var(--primary-purple)";
    notification.style.color = "var(--primary-purple)";
    notification.innerHTML = "✨ Suite successfully authenticated! Loading login...";
  }

  setTimeout(() => {
    switchAuthView("login");
  }, 1500);

  function showModalError(msg) {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "var(--accent-pink-light)";
      notification.style.border = "1px solid var(--accent-pink)";
      notification.style.color = "var(--accent-pink)";
      notification.innerHTML = msg;
    }
  }
};

window.handleModalForgot = function(event) {
  event.preventDefault();
  
  const email = document.getElementById("modal-recovery-email").value.trim();
  const recoveryForm = document.getElementById("modal-recovery-form-block");
  const recoverySuccess = document.getElementById("modal-recovery-success");
  const targetEmailSpan = document.getElementById("modal-recovery-target-email");

  if (targetEmailSpan) targetEmailSpan.textContent = email;

  if (recoveryForm) recoveryForm.style.display = "none";
  if (recoverySuccess) recoverySuccess.style.display = "block";
};

// --- Page-Level Authentication Handlers for login.html ---
window.switchPageAuthView = function(view) {
  const loginView = document.getElementById("auth-view-login");
  const signupView = document.getElementById("auth-view-signup");
  const forgotView = document.getElementById("auth-view-forgot");
  const subtitle = document.getElementById("auth-modal-subtitle");
  const notification = document.getElementById("auth-page-notification");

  if (notification) {
    notification.style.display = "none";
    notification.innerHTML = "";
  }

  if (loginView) loginView.style.display = "none";
  if (signupView) signupView.style.display = "none";
  if (forgotView) forgotView.style.display = "none";

  if (view === "login") {
    if (loginView) loginView.style.display = "block";
    if (subtitle) subtitle.textContent = "Suite Guest Access";
  } else if (view === "signup") {
    if (signupView) signupView.style.display = "block";
    if (subtitle) subtitle.textContent = "Authenticate Suite";
  } else if (view === "forgot") {
    if (forgotView) forgotView.style.display = "block";
    if (subtitle) subtitle.textContent = "Recover Suite Credentials";
    
    const recoveryForm = document.getElementById("page-recovery-form-block");
    const recoverySuccess = document.getElementById("page-recovery-success");
    if (recoveryForm) recoveryForm.style.display = "block";
    if (recoverySuccess) recoverySuccess.style.display = "none";
  }
};

window.handlePageLogin = function(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById("page-login-email").value.trim().toLowerCase();
  const passwordInput = document.getElementById("page-login-password").value;
  const notification = document.getElementById("auth-page-notification");

  const guests = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
  const guest = guests.find(g => g.email.toLowerCase() === emailInput && g.password === passwordInput);

  if (guest) {
    localStorage.setItem("yoyo_active_user", JSON.stringify({
      title: guest.title,
      name: guest.name,
      suite: guest.suite,
      email: guest.email,
      checkIn: guest.checkIn || "",
      checkOut: guest.checkOut || ""
    }));

    sessionStorage.setItem("confirm_stay_needed", "true");

    if (notification) {
      notification.style.display = "block";
      notification.style.background = "var(--primary-purple-light)";
      notification.style.border = "1px solid var(--primary-purple)";
      notification.style.color = "var(--primary-purple)";
      notification.innerHTML = `⚡ Welcome back, ${guest.name}. Opening suite...`;
    }

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "var(--accent-pink-light)";
      notification.style.border = "1px solid var(--accent-pink)";
      notification.style.color = "var(--accent-pink)";
      notification.innerHTML = "⚠️ Invalid credentials. Please try again.";
    }
  }
};

window.handlePageSignup = function(event) {
  event.preventDefault();

  const title = document.getElementById("page-signup-title").value;
  const name = document.getElementById("page-signup-name").value.trim();
  const suite = document.getElementById("page-signup-suite").value.trim();
  const email = document.getElementById("page-signup-email").value.trim().toLowerCase();
  const password = document.getElementById("page-signup-password").value;
  const confirmPassword = document.getElementById("page-signup-confirm").value;
  const notification = document.getElementById("auth-page-notification");

  if (password.length < 6) {
    showPageError("⚠️ Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    showPageError("⚠️ Passwords do not match.");
    return;
  }

  const checkIn = document.getElementById("page-signup-checkin").value;
  const checkOut = document.getElementById("page-signup-checkout").value;

  if (new Date(checkOut) <= new Date(checkIn)) {
    showPageError("⚠️ Departure check-out time must be after check-in time.");
    return;
  }

  const guests = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
  if (guests.some(g => g.email.toLowerCase() === email)) {
    showPageError("⚠️ A suite account with this email already exists.");
    return;
  }

  const newGuest = {
    title,
    name: title + " " + name,
    suite,
    email,
    password,
    checkIn,
    checkOut
  };
  guests.push(newGuest);
  localStorage.setItem("yoyo_guests", JSON.stringify(guests));

  if (notification) {
    notification.style.display = "block";
    notification.style.background = "var(--primary-purple-light)";
    notification.style.border = "1px solid var(--primary-purple)";
    notification.style.color = "var(--primary-purple)";
    notification.innerHTML = "✨ Suite successfully authenticated! Loading login...";
  }

  setTimeout(() => {
    switchPageAuthView("login");
  }, 1500);

  function showPageError(msg) {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "var(--accent-pink-light)";
      notification.style.border = "1px solid var(--accent-pink)";
      notification.style.color = "var(--accent-pink)";
      notification.innerHTML = msg;
    }
  }
};

window.handlePageForgot = function(event) {
  event.preventDefault();
  
  const email = document.getElementById("page-recovery-email").value.trim();
  const recoveryForm = document.getElementById("page-recovery-form-block");
  const recoverySuccess = document.getElementById("page-recovery-success");
  const targetEmailSpan = document.getElementById("page-recovery-target-email");

  if (targetEmailSpan) targetEmailSpan.textContent = email;

  if (recoveryForm) recoveryForm.style.display = "none";
  if (recoverySuccess) recoverySuccess.style.display = "block";
};

// --- Stay Itinerary Timeline Renderer ---
window.renderStayItinerary = function() {
  const container = document.getElementById("itinerary-timeline-events");
  const stayDatesEl = document.getElementById("itinerary-stay-dates");
  if (!container) return;

  const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
  if (!activeUser || !activeUser.checkIn || !activeUser.checkOut) {
    if (stayDatesEl) stayDatesEl.textContent = "Stay duration: Not configured.";
    container.innerHTML = `
      <div style="color: var(--text-muted); text-align: center; padding: 20px; font-size: 13px;">
        🛎 Check-in and check-out dates are not available for this session.
      </div>
    `;
    return;
  }

  const checkInDate = new Date(activeUser.checkIn);
  const checkOutDate = new Date(activeUser.checkOut);

  const formatHeaderDate = (d) => {
    return d.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  };
  if (stayDatesEl) {
    stayDatesEl.innerHTML = `<strong>Active Stay:</strong> ${formatHeaderDate(checkInDate)} &mdash; ${formatHeaderDate(checkOutDate)}`;
  }

  const events = [];

  // 1. Check-In Event
  events.push({
    timestamp: checkInDate.getTime(),
    icon: "🔑",
    title: "Arrival & Suite Access",
    desc: `Suite ${activeUser.suite} guest card verified. YOYO 10-Min suite delivery activated.`,
    status: new Date() >= checkInDate ? "Completed" : "Scheduled",
    statusClass: new Date() >= checkInDate ? "completed" : "scheduled"
  });

  // 2. Check-Out Event
  events.push({
    timestamp: checkOutDate.getTime(),
    icon: "🚪",
    title: "Departure & Suite Check-Out",
    desc: `Valet finalized and checkout completed for Suite ${activeUser.suite}.`,
    status: "Scheduled",
    statusClass: "scheduled"
  });

  // 3. Active Order Event
  if (state.activeOrder) {
    const order = state.activeOrder;
    const orderItemsDesc = order.items.map(item => `${item.name} (x${item.qty})`).join(", ");
    
    events.push({
      timestamp: order.estimatedDeliveryTime,
      icon: "📦",
      title: `YOYO Express Delivery (Order ${order.id})`,
      desc: `Items ordered: ${orderItemsDesc}. Notes: ${order.notes}`,
      status: order.statusIndex === 3 ? "Delivered" : `Preparing (${order.timePreference})`,
      statusClass: order.statusIndex === 3 ? "completed" : "scheduled"
    });
  }

  // 4. Concierge Requests Events
  state.conciergeRequests.forEach(req => {
    const reqTimestamp = req.timestamp || new Date().getTime();
    events.push({
      timestamp: reqTimestamp,
      icon: "⚡",
      title: `${req.service} (Amenity Delivery)`,
      desc: `Request ID: ${req.id} • Dispatched complementary to suite.`,
      status: "Delivered",
      statusClass: "completed"
    });
  });

  events.sort((a, b) => a.timestamp - b.timestamp);

  container.innerHTML = "";

  events.forEach(evt => {
    const timeStr = new Date(evt.timestamp).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
    const eventNode = document.createElement("div");
    eventNode.className = "timeline-event-node";
    eventNode.setAttribute("data-icon", evt.icon);
    
    eventNode.innerHTML = `
      <div class="event-info">
        <span class="event-title">${evt.title}</span>
        <span class="event-time">${timeStr}</span>
      </div>
      <div class="event-desc">${evt.desc}</div>
      <div class="event-status ${evt.statusClass}">${evt.status}</div>
    `;
    container.appendChild(eventNode);
  });
};

// --- Stay Confirmation, Monitoring, and Extension Handlers ---
window.checkStayConfirmation = function() {
  const confirmModal = document.getElementById("confirm-stay-modal");
  if (!confirmModal) return;

  const confirmNeeded = sessionStorage.getItem("confirm_stay_needed");
  if (confirmNeeded === "true") {
    const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
    if (activeUser) {
      const checkInInput = document.getElementById("confirm-checkin-date");
      const checkOutInput = document.getElementById("confirm-checkout-date");
      
      if (checkInInput) checkInInput.value = activeUser.checkIn || "";
      if (checkOutInput) checkOutInput.value = activeUser.checkOut || "";
      
      confirmModal.style.display = "flex";
    }
  }
};

window.handleStayConfirm = function(event) {
  event.preventDefault();
  
  const checkIn = document.getElementById("confirm-checkin-date").value;
  const checkOut = document.getElementById("confirm-checkout-date").value;

  const checkInTime = new Date(checkIn.replace('T', ' ')).getTime();
  const checkOutTime = new Date(checkOut.replace('T', ' ')).getTime();

  if (isNaN(checkInTime) || isNaN(checkOutTime)) {
    showToast("⚠️ Please enter valid check-in and check-out dates.", "error");
    return;
  }

  if (checkOutTime <= checkInTime) {
    showToast("⚠️ Departure check-out time must be after check-in time.", "error");
    return;
  }

  const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
  if (activeUser) {
    activeUser.checkIn = checkIn;
    activeUser.checkOut = checkOut;
    localStorage.setItem("yoyo_active_user", JSON.stringify(activeUser));

    const guests = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
    const index = guests.findIndex(g => g.email.toLowerCase() === activeUser.email.toLowerCase());
    if (index !== -1) {
      guests[index].checkIn = checkIn;
      guests[index].checkOut = checkOut;
      localStorage.setItem("yoyo_guests", JSON.stringify(guests));
    }

    sessionStorage.removeItem("confirm_stay_needed");
    
    const confirmModal = document.getElementById("confirm-stay-modal");
    if (confirmModal) confirmModal.style.display = "none";
    
    initStayMonitorLoop();
    renderStayItinerary();
    showToast("Stay dates successfully confirmed. Welcome to YOYO!", "success");
  }
};

window.initStayMonitorLoop = function() {
  clearInterval(stayMonitorInterval);
  stayMonitorInterval = setInterval(checkStayExpiration, 3000);
};

function checkStayExpiration() {
  const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
  if (!activeUser) {
    clearInterval(stayMonitorInterval);
    return;
  }

  if (!activeUser.checkOut) {
    return;
  }

  const checkoutTime = new Date(activeUser.checkOut.replace('T', ' ')).getTime();
  const now = new Date().getTime();

  if (isNaN(checkoutTime)) {
    return;
  }

  if (now >= checkoutTime) {
    const extendModal = document.getElementById("extend-stay-modal");
    if (extendModal && extendModal.style.display !== "flex") {
      closeTray();
      extendModal.style.display = "flex";
      
      const extendInput = document.getElementById("extend-checkout-date");
      if (extendInput) {
        const d = new Date();
        const tzoffset = d.getTimezoneOffset() * 60000;
        const localISOTime = (new Date(d.getTime() - tzoffset)).toISOString().slice(0, 16);
        extendInput.min = localISOTime;
        const inOneDay = new Date(d.getTime() + (24 * 60 * 60 * 1000) - tzoffset);
        extendInput.value = inOneDay.toISOString().slice(0, 16);
      }
    }
  }
}

window.showExtensionForm = function() {
  const decisionBlock = document.getElementById("extend-decision-block");
  const formBlock = document.getElementById("extend-form-block");
  
  if (decisionBlock) decisionBlock.style.display = "none";
  if (formBlock) formBlock.style.display = "block";
};

window.cancelExtension = function() {
  const decisionBlock = document.getElementById("extend-decision-block");
  const formBlock = document.getElementById("extend-form-block");
  
  if (decisionBlock) decisionBlock.style.display = "block";
  if (formBlock) formBlock.style.display = "none";
};

window.handleStayExtension = function(event) {
  event.preventDefault();
  
  const newCheckoutVal = document.getElementById("extend-checkout-date").value;
  if (!newCheckoutVal) {
    showToast("Please specify a valid departure date & time.", "error");
    return;
  }

  const newCheckoutTime = new Date(newCheckoutVal.replace('T', ' ')).getTime();
  const now = new Date().getTime();

  if (isNaN(newCheckoutTime) || newCheckoutTime <= now) {
    showToast("⚠️ Extension departure time must be in the future.", "error");
    return;
  }

  const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
  if (activeUser) {
    activeUser.checkOut = newCheckoutVal;
    localStorage.setItem("yoyo_active_user", JSON.stringify(activeUser));

    const guests = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
    const index = guests.findIndex(g => g.email.toLowerCase() === activeUser.email.toLowerCase());
    if (index !== -1) {
      guests[index].checkOut = newCheckoutVal;
      localStorage.setItem("yoyo_guests", JSON.stringify(guests));
    }

    const extendModal = document.getElementById("extend-stay-modal");
    if (extendModal) extendModal.style.display = "none";
    cancelExtension();
    
    initStayMonitorLoop();
    renderStayItinerary();
    showToast("Your stay has been successfully extended.", "success");
  }
};
