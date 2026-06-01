/**
 * YOYO Luxury Room Service - Core Application Logic
 * State Management, Interactive Tray, Luxury Checkout, Order Tracking & Concierge
 */

// Comprehensive Luxury Menu Database
const MENU_ITEMS = [
  // --- FOOD ---
  {
    id: "food-truffle-pasta",
    name: "Black Truffle Tagliatelle",
    category: "food",
    price: 38,
    time: "25 min",
    desc: "Hand-rolled tagliatelle, aged parmigiano-reggiano, freshly shaved French black winter truffles.",
    img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "food-wagyu-burger",
    name: "Wagyu Signature Burger",
    category: "food",
    price: 32,
    time: "20 min",
    desc: "A5 Miyazaki Wagyu beef, melted artisan white cheddar, applewood smoked bacon, truffle aioli on brioche. Served with hand-cut pommes frites.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "food-oysters",
    name: "Oysters Rockefeller",
    category: "food",
    price: 42,
    time: "15 min",
    desc: "Half-dozen freshly shucked wild oysters baked with creamed organic spinach, Pernod anise liqueur, herb breadcrumbs, and imperial glaze.",
    img: "https://images.unsplash.com/photo-1553618551-fba689030290?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "food-caviar",
    name: "Imperial Caviar Service",
    category: "food",
    price: 150,
    time: "10 min",
    desc: "30g of Royal Oscietra Caviar served on ice. Accompanied by traditional blinis, crème fraîche, chopped egg whites, shallots, and mother-of-pearl spoon.",
    img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "food-caesar",
    name: "Garden Caesar Salad",
    category: "food",
    price: 18,
    time: "15 min",
    desc: "Crisp organic baby romaine hearts, aged parmigiano-reggiano, sourdough garlic croutons, house-made creamy Caesar vinaigrette.",
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "food-blue-lobster",
    name: "Glazed Blue Lobster",
    category: "food",
    price: 85,
    time: "30 min",
    desc: "Poached Maine blue lobster tail, copper-pot butter infusion, vintage champagne reduction, served over wild saffron-infused jasmine rice.",
    img: "https://images.unsplash.com/photo-1559742811-824289511f48?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "food-wagyu-tomahawk",
    name: "Imperial Tomahawk Steak",
    category: "food",
    price: 195,
    time: "35 min",
    desc: "45-day dry-aged Miyazaki Wagyu Tomahawk (14oz), signature edible gold-leaf butter glaze, served with wood-fired organic wild mushrooms.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "food-golden-souffle",
    name: "Golden Soufflé Grand Marnier",
    category: "food",
    price: 28,
    time: "20 min",
    desc: "Traditional hot Grand Marnier soufflé dusted with 24k edible gold flakes, served with fresh warm Madagascar bourbon vanilla bean cream.",
    img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1200&auto=format&fit=crop"
  },

  // --- BEVERAGES ---
  {
    id: "bev-royal-fizz",
    name: "YOYO Royal Fizz",
    category: "beverages",
    price: 28,
    time: "8 min",
    desc: "Empress gin, fresh lavender syrup, organic lemon juice, topped with champagne and finished with gold leaf flakes.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bev-dom-perignon",
    name: "2012 Dom Pérignon",
    category: "beverages",
    price: 450,
    time: "10 min",
    desc: "750ml bottle of prestigious vintage Champagne. Perfectly chilled, served in premium crystal flutes with custom butler presentation.",
    img: "https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bev-rose-elixir",
    name: "Hibiscus Rose Elixir",
    category: "beverages",
    price: 16,
    time: "5 min",
    desc: "Non-alcoholic infusion of fresh hibiscus petals, organic rosewater, lime juice, and sparkling volcanic water.",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bev-espresso",
    name: "Single Origin Espresso",
    category: "beverages",
    price: 12,
    time: "10 min",
    desc: "Double-shot extraction of Ethiopian Geisha heirloom coffee beans, served with dark chocolate florentines and sparkling palate cleanser.",
    img: "https://images.unsplash.com/photo-151097252790b-a48122e37936?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bev-vesper-martini",
    name: "Classic Vesper Martini",
    category: "beverages",
    price: 26,
    time: "6 min",
    desc: "Precisely shaken premium dry English gin, luxury crystal vodka, and French Lillet Blanc. Served ice-chilled with a delicate oils-spritzed lemon twist.",
    img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bev-matcha-latte",
    name: "Ceremonial Kyoto Matcha",
    category: "beverages",
    price: 18,
    time: "8 min",
    desc: "Hand-whisked stoneground Uji ceremonial grade green tea matcha, creamy organic Madagascar vanilla oat nectar, and wild comb honey.",
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1200&auto=format&fit=crop"
  },

  // --- HOUSEKEEPING/SERVICES ---
  {
    id: "service-pillow",
    name: "Silk Pillow Menu Request",
    category: "housekeeping",
    price: 0,
    time: "10 min",
    desc: "Select your preferred density. Options: Siberian goose down, hypoallergenic micro-gel, or contoured bamboo charcoal. Wrapped in 100% mulberry silk.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "service-towels",
    name: "Extra Plush Towels",
    category: "housekeeping",
    price: 0,
    time: "8 min",
    desc: "Set of three oversized bath sheets, hand towels, and washcloths. Loomed from 800 GSM long-staple Turkish organic cotton.",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "service-turndown",
    name: "Turn-Down Service Request",
    category: "housekeeping",
    price: 0,
    time: "15 min",
    desc: "Evening refreshment of your suite. Includes bed dress-down, aromatic lavender pillow mist spray, slipper placement, and dark chocolate squares.",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "service-shoeshine",
    name: "Valet Shoe Shine",
    category: "housekeeping",
    price: 15,
    time: "30 min",
    desc: "Complimentary pickup of leather footwear. Hand-cleaned, nourished with premium Saphir crème, and buffed to a luxurious mirror-shine finish.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "service-floral",
    name: "Suite Floral Curation",
    category: "housekeeping",
    price: 75,
    time: "45 min",
    desc: "A stunning arrangement of freshly cut white lilies, soft green hydrangeas, and white roses styled in a gold-trimmed crystal vase by our resident florist.",
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "service-steaming",
    name: "Valet Garment Steaming",
    category: "housekeeping",
    price: 35,
    time: "20 min",
    desc: "Professional express hand-steaming and crease-alignment for up to three evening garments. Returned to your wardrobe on plush velvet hangers.",
    img: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1200&auto=format&fit=crop"
  },

  // --- SPA & WELLNESS ---
  {
    id: "spa-aromatherapy",
    name: "In-Suite Aromatherapy Setup",
    category: "wellness",
    price: 45,
    time: "15 min",
    desc: "Ultrasonic premium brass nebulizer set up in your room with your choice of high-grade organic oil blends: Lavender-Eucalyptus (Relaxation) or Citrus-Jasmine (Focus).",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "spa-massage",
    name: "Deep Tissue Massage (60 Min)",
    category: "wellness",
    price: 180,
    time: "60 min",
    desc: "Professional therapist arrives at your suite with a portable heated massage table, botanical oils, and luxury linen. Focused pressure to target deep tension.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "spa-facial",
    name: "Jade Roller Facial Treatment",
    category: "wellness",
    price: 65,
    time: "30 min",
    desc: "Soothing lymphatic drainage facial massage in your suite using chilled jade stones, organic hyaluronic acid serum, and chilled rosewater mist.",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "spa-gold-facial",
    name: "Gold Leaf Rejuvenation Mask",
    category: "wellness",
    price: 210,
    time: "45 min",
    desc: "Ultimate luxury skin therapy featuring pure 24k gold leaf placement to stimulate collagen, paired with dynamic cooling quartz rollers and collagen mist.",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "spa-singing-bowl",
    name: "Tibetan Singing Bowl Therapy",
    category: "wellness",
    price: 120,
    time: "50 min",
    desc: "In-suite acoustic resonance sound bath conducted by an expert healing practitioner using seven hand-hammered chakra metals to restore deep tranquility.",
    img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop"
  }
];

// Application Global State
const state = {
  cart: {}, // Format: { itemId: quantity }
  activeCategory: "food",
  activeOrder: null, // Active tracking order details
  conciergeRequests: [] // History of quick butler notifications
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

  // Guest Portal Portal Caching
  userPortal: null,
  userPortalBtn: null,
  userPortalDropdown: null,
  portalSuiteNumber: null
};

// Pricing Multipliers
const TAX_RATE = 0.08; // 8% Luxury Tax
const SERVICE_FEE_RATE = 0.15; // 15% Butler service charge
const DELIVERY_FEE = 10.00; // Flat $10 Delivery Fee for paid items, free if cart consists only of free services.

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
  
  // Butler Quick panel
  DOM.butlerRequestBtns = document.querySelectorAll(".butler-action-btn");
  DOM.butlerLogs = document.getElementById("butler-logs");

  // Portal elements
  DOM.userPortal = document.getElementById("user-portal");
  DOM.userPortalBtn = document.getElementById("user-portal-btn");
  DOM.userPortalDropdown = document.getElementById("user-portal-dropdown");
  DOM.portalSuiteNumber = document.getElementById("portal-suite-number");
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
      renderMenu(category);
    });
  });

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

  // Butler quick actions
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

// Render Menu Cards dynamically with fluid animations
function renderMenu(category) {
  if (!DOM.menuGrid) return;
  
  // Clear grid
  DOM.menuGrid.innerHTML = "";
  
  // Filter items
  const filtered = MENU_ITEMS.filter(item => item.category === category);
  
  if (filtered.length === 0) {
    DOM.menuGrid.innerHTML = `<div class="empty-menu-msg">No offerings currently available in this category.</div>`;
    return;
  }

  // Render cards
  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    // Inline style delay for stagged animation entrances
    card.style.animationDelay = `${index * 0.08}s`;
    
    const formattedPrice = item.price === 0 ? "Complimentary" : `$${item.price}`;
    
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="card-time-badge">⏱ ${item.time}</div>
      </div>
      <div class="content">
        <div class="top">
          <h3>${item.name}</h3>
          <div class="price">${formattedPrice}</div>
        </div>
        <div class="desc">${item.desc}</div>
        <div class="bottom">
          <button class="add" onclick="addToCart('${item.id}')">
            <span>+ Add to tray</span>
          </button>
        </div>
      </div>
    `;
    DOM.menuGrid.appendChild(card);
  });
}

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

// Add Item to Tray with badge animations
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
    void DOM.trayCount.offsetWidth; // Trigger reflow to restart animation
    DOM.trayCount.classList.add("badge-pulse");
  }

  // Custom Toast notification for premium feedback
  showToast(`Added ${item.name} to your luxury tray.`);
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
    showToast("Item removed from tray.");
  }
};

// Render Cart items & dynamically calculate pricing totals
function updateCartUI() {
  if (!DOM.cartItemsContainer) return;
  
  // Total count
  let totalCount = 0;
  let subtotal = 0;
  let hasPaidItems = false;
  
  DOM.cartItemsContainer.innerHTML = "";
  
  const itemIds = Object.keys(state.cart);
  
  if (itemIds.length === 0) {
    DOM.cartItemsContainer.innerHTML = `
      <div class="empty-tray-state">
        <div class="empty-tray-icon">🛎</div>
        <p class="empty-text-title">Your tray is empty</p>
        <p class="empty-text-subtitle">Exquisite offerings are awaiting your curation.</p>
        <button class="browse-btn" onclick="closeTray()">Start Browsing</button>
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
      roomInput.style.background = "rgba(212, 175, 55, 0.03)";
      roomInput.style.borderColor = "var(--border-gold)";
    }
  }

  itemIds.forEach(itemId => {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;
    
    const qty = state.cart[itemId];
    totalCount += qty;
    
    const itemTotal = item.price * qty;
    subtotal += itemTotal;
    
    if (item.price > 0) {
      hasPaidItems = true;
    }
    
    const formattedPrice = item.price === 0 ? "Complimentary" : `$${item.price}`;
    
    const cartRow = document.createElement("div");
    cartRow.className = "cart-item";
    cartRow.innerHTML = `
      <div class="cart-item-details">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price-desc">${qty} × ${formattedPrice}</span>
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

  // Calculate pricing matrices
  const serviceFee = subtotal * SERVICE_FEE_RATE;
  const tax = subtotal * TAX_RATE;
  // Delivery fee is waived if the room service strictly contains free services/housekeeping items
  const finalDeliveryFee = (hasPaidItems || subtotal > 0) ? DELIVERY_FEE : 0.00;
  const grandTotal = subtotal + serviceFee + tax + finalDeliveryFee;
  
  // DOM Render
  DOM.subtotalVal.textContent = `$${subtotal.toFixed(2)}`;
  DOM.serviceFeeVal.textContent = `$${serviceFee.toFixed(2)}`;
  DOM.taxVal.textContent = `$${tax.toFixed(2)}`;
  DOM.deliveryVal.textContent = finalDeliveryFee === 0 ? "Complimentary" : `$${finalDeliveryFee.toFixed(2)}`;
  DOM.totalVal.textContent = `$${grandTotal.toFixed(2)}`;
}

// Form validations and Checkout placement
function handleCheckout(event) {
  event.preventDefault();
  
  const roomNumberInput = document.getElementById("room-number");
  const deliveryTimeInput = document.getElementById("delivery-time");
  const specialNotesInput = document.getElementById("special-notes");
  
  const roomNumber = roomNumberInput.value.trim();
  const deliveryTime = deliveryTimeInput.value;
  const specialNotes = specialNotesInput.value.trim();
  
  // Basic strict luxury validations
  if (!roomNumber) {
    showToast("Please specify your suite/room number.", "error");
    roomNumberInput.focus();
    return;
  }
  
  if (!/^\d{2,4}[A-Za-z]?$/.test(roomNumber)) {
    showToast("Please enter a valid room or suite number (e.g. 402, 1005A).", "error");
    roomNumberInput.focus();
    return;
  }

  // Calculate target delivery time and text preference
  let targetDeliveryTime;
  let timePrefText = "";
  const now = new Date();

  if (deliveryTime === "asap") {
    targetDeliveryTime = now.getTime() + (25 * 60 * 1000); // 25 minutes out
    timePrefText = "ASAP (approx. 20-30 min)";
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
    showToast(`⚠️ Scheduled delivery falls before check-in time (${checkInString}).`, "error");
    return;
  }

  if (checkOutTime && targetDeliveryTime > checkOutTime) {
    const checkOutString = new Date(checkOutTime).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
    showToast(`⚠️ Scheduled delivery falls after check-out time (${checkOutString}).`, "error");
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
    notes: specialNotes || "No special requests.",
    total: totalRaw,
    timestamp: now.getTime(),
    estimatedDeliveryTime: targetDeliveryTime, // Use calculated delivery time
    statusIndex: 0, // 0 = Placed, 1 = Preparing, 2 = En Route, 3 = Delivered
    progressPercent: 12
  };
  
  // Save order and clear cart state
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
  
  // Trigger tracking layout & notification
  showToast(`Order ${orderId} successfully charged to Suite ${roomNumber}!`, "success");
  
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
      // Smooth scroll tracker into view
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
  // Clear any existing active timer intervals to prevent double ticking
  clearInterval(trackerProgressInterval);
  clearInterval(trackerTimerInterval);
  
  // Tracker loop ticker
  updateTrackingUI();
  
  // Increment statuses sequentially based on real-time simulation
  // 1 Placed -> Preparing (30s) -> En Route (60s) -> Delivered (90s)
  trackerProgressInterval = setInterval(() => {
    if (!state.activeOrder) {
      clearInterval(trackerProgressInterval);
      return;
    }
    
    const elapsedSeconds = Math.floor((new Date().getTime() - state.activeOrder.timestamp) / 1000);
    
    let currentStatusIndex = 0;
    let progress = 12;
    
    if (elapsedSeconds >= 90) {
      currentStatusIndex = 3; // Delivered
      progress = 100;
    } else if (elapsedSeconds >= 60) {
      currentStatusIndex = 2; // En Route
      progress = 75;
    } else if (elapsedSeconds >= 30) {
      currentStatusIndex = 1; // Preparing
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
          statusAlert = "YOYO Chef has accepted your order and began preparation.";
          break;
        case 2:
          statusAlert = "Your private butler has collected your order and is en route.";
          break;
        case 3:
          statusAlert = "Delivered. Bon appétit!";
          break;
      }
      showToast(statusAlert, "info");
      saveStateToStorage();
    }
    
    updateTrackingUI();
    
    if (currentStatusIndex === 3) {
      clearInterval(trackerProgressInterval);
    }
  }, 2000); // Poll status index updates frequently
  
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

// Dynamic elements renderer for stateful tracking progress bar & timeline steppers
function updateTrackingUI() {
  const order = state.activeOrder;
  if (!order) return;

  const statuses = [
    "Order Received & Authenticated",
    "Chef Preparing Gastronomy Offerings",
    "Private Butler is En Route to Your Suite",
    "Delivered. Exquisite Dining Awaits"
  ];
  
  // Update title details
  DOM.trackerStatusText.textContent = statuses[order.statusIndex];
  
  // Set progress fill line
  if (DOM.trackerProgressBar) {
    DOM.trackerProgressBar.style.width = `${order.progressPercent}%`;
  }
  
  // Update stepper circles
  DOM.trackerSteps.forEach((step, idx) => {
    step.classList.remove("active", "completed");
    
    if (idx < order.statusIndex) {
      step.classList.add("completed");
    } else if (idx === order.statusIndex) {
      step.classList.add("active");
    }
  });

  // Render ordered items in dynamic tracker list
  const listContainer = document.getElementById("tracker-items-list");
  if (listContainer) {
    listContainer.innerHTML = "";
    order.items.forEach(item => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.marginBottom = "8px";
      li.innerHTML = `
        <span style="color:#f4f1ea;">${item.name} <em style="color:#8e9c95; font-size:13px; font-style:normal;">(x${item.qty})</em></span>
        <span style="color:#d4af37; font-weight:bold;">${item.price === 0 ? "Free" : `$${(item.price * item.qty).toFixed(2)}`}</span>
      `;
      listContainer.appendChild(li);
    });
  }

  // Order Details Subtext
  const orderDetailsSubtext = document.getElementById("tracker-order-details");
  if (orderDetailsSubtext) {
    orderDetailsSubtext.innerHTML = `
      <strong>Order ID:</strong> ${order.id} &nbsp;|&nbsp; 
      <strong>Suite:</strong> ${order.room} &nbsp;|&nbsp; 
      <strong>Preference:</strong> ${order.timePreference} <br>
      <strong>Butler Notes:</strong> <em>"${order.notes}"</em>
    `;
  }
}

// Clear order tracking (Finish Order session)
window.dismissTracker = function() {
  state.activeOrder = null;
  saveStateToStorage();
  checkActiveOrder();
  showToast("Order tracking closed. Have a pleasant day.");
};

// Concierge Quick Service Requests
function requestConciergeService(service) {
  const butlerReplies = {
    "ice": "My pleasure. Freshly crushed ice blocks are being scooped and will be delivered in silver canisters shortly.",
    "towels": "Of course, Madame/Monsieur. Extra oversized 800 GSM plush Egyptian cotton bath sheets are being prepared and sent up immediately.",
    "hangers": "Naturally. Custom satin-padded garment hangers will be brought to your wardrobe closet inside 10 minutes.",
    "turndown": "Indeed. A butler will arrive shortly to prepare your suite linens, mist aromatic lavender spray, and lay out your matching cotton slippers."
  };

  const serviceNames = {
    "ice": "Ice Bucket Request",
    "towels": "Oversized Towels Delivery",
    "hangers": "Satin Hangers Request",
    "turndown": "Evening Turn-Down Service"
  };

  const notificationText = butlerReplies[service] || "Your private concierge butler has logged your request and is attending to it immediately.";
  const serviceTitle = serviceNames[service] || "Concierge Request";

  // Create mock Butler Request state
  const reqId = "REQ-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  
  const newRequest = {
    id: reqId,
    service: serviceTitle,
    time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    timestamp: now.getTime(),
    status: "Butler En Route"
  };

  state.conciergeRequests.unshift(newRequest);
  saveStateToStorage();
  
  // Render Toast
  showToast(`${serviceTitle} placed. Butler is dispatched.`, "success");
  
  renderButlerLogs();
  
  // Refresh stay itinerary timeline
  renderStayItinerary();
}

// Render dynamic list of housekeeper butler actions in secondary card panel
function renderButlerLogs() {
  if (!DOM.butlerLogs) return;

  if (state.conciergeRequests.length === 0) {
    DOM.butlerLogs.innerHTML = `
      <div style="color: #8e9c95; text-align: center; padding: 20px; font-family: 'Outfit', sans-serif; font-size: 14px;">
        🛎 No active concierge logs. Place a quick-action request above.
      </div>
    `;
    return;
  }

  DOM.butlerLogs.innerHTML = "";
  
  // Limit to last 3 requests for clean layouts
  state.conciergeRequests.slice(0, 3).forEach(req => {
    const log = document.createElement("div");
    log.className = "butler-log-item";
    log.style.background = "rgba(14, 30, 23, 0.6)";
    log.style.border = "1px solid #1b2c26";
    log.style.padding = "12px 18px";
    log.style.borderRadius = "15px";
    log.style.marginBottom = "10px";
    log.style.display = "flex";
    log.style.justifyContent = "space-between";
    log.style.alignItems = "center";
    log.style.animation = "slideIn 0.3s ease-out forwards";

    log.innerHTML = `
      <div>
        <div style="color: #f4f1ea; font-family: 'Outfit', sans-serif; font-weight: 500; font-size: 15px;">${req.service}</div>
        <div style="color: #8e9c95; font-family: 'Outfit', sans-serif; font-size: 12px; margin-top: 2px;">ID: ${req.id} • Sent at ${req.time}</div>
      </div>
      <div style="background: rgba(212, 175, 55, 0.15); color: #d4af37; font-family: 'Outfit', sans-serif; font-size: 12px; padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.3); font-weight: 600;">
        ${req.status}
      </div>
    `;
    DOM.butlerLogs.appendChild(log);
  });
}

// Premium Toast Notification system
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  // Icon selector
  let icon = "🔔";
  if (type === "success") icon = "✨";
  if (type === "error") icon = "⚠️";
  if (type === "info") icon = "🛎";

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Automatically clear notification after 4 seconds
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
    // Authenticated state UI changes
    if (DOM.userPortalBtn) {
      DOM.userPortalBtn.innerHTML = `🛎 ${activeUser.name}`;
      // Remove default redirect click handler and make it toggle the dropdown
      DOM.userPortalBtn.removeAttribute("onclick");
      DOM.userPortalBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        togglePortalDropdown();
      });
    }

    if (DOM.portalSuiteNumber) {
      DOM.portalSuiteNumber.textContent = activeUser.suite;
    }

    // Pre-greet active guest with a stateful single-session luxury welcome toast notification
    const greeted = sessionStorage.getItem("yoyo_greeted");
    if (!greeted) {
      setTimeout(() => {
        showToast(`Welcome back, ${activeUser.name}. Your private butler awaits.`, "success");
        sessionStorage.setItem("yoyo_greeted", "true");
      }, 1200);
    }

    // Render stay itinerary timeline
    renderStayItinerary();
  } else {
    // Unauthenticated state resets
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
  showToast("Suite logged out successfully. Returning to portal...", "info");
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
    // Ensure demo account is seeded in db
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

  // Reset notifications
  if (notification) notification.style.display = "none";

  // Hide all views
  if (loginView) loginView.style.display = "none";
  if (signupView) signupView.style.display = "none";
  if (forgotView) forgotView.style.display = "none";

  // Switch views
  if (view === "login") {
    if (loginView) loginView.style.display = "block";
    if (subtitle) subtitle.textContent = "Guest Suite Access";
  } else if (view === "signup") {
    if (signupView) signupView.style.display = "block";
    if (subtitle) subtitle.textContent = "Authenticate Suite";
  } else if (view === "forgot") {
    if (forgotView) forgotView.style.display = "block";
    if (subtitle) subtitle.textContent = "Recover Suite Credentials";
    
    // Reset recovery sub-views
    const recoveryForm = document.getElementById("modal-recovery-form-block");
    const recoverySuccess = document.getElementById("modal-recovery-success");
    if (recoveryForm) recoveryForm.style.display = "block";
    if (recoverySuccess) recoverySuccess.style.display = "none";
  }
};

function seedDemoAccount() {
  const db = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
  
  // Dynamically generate stay dates so they are always current for Lord Hamilton
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const checkoutDate = new Date();
  checkoutDate.setDate(today.getDate() + 3);
  checkoutDate.setHours(11, 0, 0, 0);

  // Format to YYYY-MM-DDTHH:MM for datetime-local value compatibility
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
    // Update existing seed dates to stay dynamic on reload
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
      notification.style.background = "rgba(8, 24, 16, 0.85)";
      notification.style.border = "1px solid rgba(212, 175, 55, 0.4)";
      notification.style.color = "#d4af37";
      notification.innerHTML = `✨ Welcome back, ${guest.name}. Opening suite...`;
    }

    setTimeout(() => {
      toggleAuthModal();
      initUserPortal();
      
      // Update checkout suite number if tray is open
      const roomInput = document.getElementById("room-number");
      if (roomInput) {
        roomInput.value = guest.suite;
        roomInput.readOnly = true;
        roomInput.style.background = "rgba(212, 175, 55, 0.03)";
        roomInput.style.borderColor = "var(--border-gold)";
      }
      showToast(`Welcome back, ${guest.name}. Your private butler awaits.`, "success");
    }, 1500);
  } else {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "rgba(40, 10, 10, 0.85)";
      notification.style.border = "1px solid #c94f4f";
      notification.style.color = "#ff6b6b";
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
    notification.style.background = "rgba(8, 24, 16, 0.85)";
    notification.style.border = "1px solid rgba(212, 175, 55, 0.4)";
    notification.style.color = "#d4af37";
    notification.innerHTML = "✨ Suite successfully authenticated! Loading login portal...";
  }

  setTimeout(() => {
    switchAuthView("login");
  }, 1500);

  function showModalError(msg) {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "rgba(40, 10, 10, 0.85)";
      notification.style.border = "1px solid #c94f4f";
      notification.style.color = "#ff6b6b";
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

  // Reset notifications
  if (notification) {
    notification.style.display = "none";
    notification.innerHTML = "";
  }

  // Hide all views
  if (loginView) loginView.style.display = "none";
  if (signupView) signupView.style.display = "none";
  if (forgotView) forgotView.style.display = "none";

  // Switch views
  if (view === "login") {
    if (loginView) loginView.style.display = "block";
    if (subtitle) subtitle.textContent = "Guest Suite Access";
  } else if (view === "signup") {
    if (signupView) signupView.style.display = "block";
    if (subtitle) subtitle.textContent = "Authenticate Suite";
  } else if (view === "forgot") {
    if (forgotView) forgotView.style.display = "block";
    if (subtitle) subtitle.textContent = "Recover Suite Credentials";
    
    // Reset recovery sub-views
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
      notification.style.background = "rgba(8, 24, 16, 0.85)";
      notification.style.border = "1px solid rgba(212, 175, 55, 0.4)";
      notification.style.color = "#d4af37";
      notification.innerHTML = `✨ Welcome back, ${guest.name}. Opening suite...`;
    }

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "rgba(40, 10, 10, 0.85)";
      notification.style.border = "1px solid #c94f4f";
      notification.style.color = "#ff6b6b";
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
    notification.style.background = "rgba(8, 24, 16, 0.85)";
    notification.style.border = "1px solid rgba(212, 175, 55, 0.4)";
    notification.style.color = "#d4af37";
    notification.innerHTML = "✨ Suite successfully authenticated! Loading login portal...";
  }

  setTimeout(() => {
    switchPageAuthView("login");
  }, 1500);

  function showPageError(msg) {
    if (notification) {
      notification.style.display = "block";
      notification.style.background = "rgba(40, 10, 10, 0.85)";
      notification.style.border = "1px solid #c94f4f";
      notification.style.color = "#ff6b6b";
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
      <div style="color: #8e9c95; text-align: center; padding: 20px; font-family: 'Outfit', sans-serif; font-size: 14px;">
        🛎 Check-in and check-out dates are not available for this session.
      </div>
    `;
    return;
  }

  const checkInDate = new Date(activeUser.checkIn);
  const checkOutDate = new Date(activeUser.checkOut);

  // Format dates for the header
  const formatHeaderDate = (d) => {
    return d.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  };
  if (stayDatesEl) {
    stayDatesEl.innerHTML = `<strong>Stay Duration:</strong> ${formatHeaderDate(checkInDate)} &mdash; ${formatHeaderDate(checkOutDate)}`;
  }

  // Assemble events
  const events = [];

  // 1. Check-In Event
  events.push({
    timestamp: checkInDate.getTime(),
    icon: "🔑",
    title: "Arrival & Suite Check-In",
    desc: `Welcomed to Suite ${activeUser.suite}. Private butler service activated.`,
    status: new Date() >= checkInDate ? "Completed" : "Scheduled",
    statusClass: new Date() >= checkInDate ? "completed" : "scheduled"
  });

  // 2. Check-Out Event
  events.push({
    timestamp: checkOutDate.getTime(),
    icon: "🚪",
    title: "Departure & Suite Check-Out",
    desc: `Valet service finalized and keycard deactivated for Suite ${activeUser.suite}.`,
    status: "Scheduled",
    statusClass: "scheduled"
  });

  // 3. Active Order Event
  if (state.activeOrder) {
    const order = state.activeOrder;
    const orderItemsDesc = order.items.map(item => `${item.name} (x${item.qty})`).join(", ");
    
    events.push({
      timestamp: order.estimatedDeliveryTime,
      icon: "🍽",
      title: `In-Suite Dining Delivery (Order ${order.id})`,
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
      icon: "🛎",
      title: `${req.service} (Concierge Dispatch)`,
      desc: `Request ID: ${req.id} • Confirmed and dispatched to your door.`,
      status: "Delivered",
      statusClass: "completed"
    });
  });

  // Sort events chronologically
  events.sort((a, b) => a.timestamp - b.timestamp);

  // Clear container
  container.innerHTML = "";

  // Render events
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

  // Safeguard date parsing
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

    // Sync back to main guest database
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
    
    // Revive and restart the stay expiration monitor loop
    initStayMonitorLoop();
    
    // Refresh timeline and UI
    renderStayItinerary();
    showToast("Stay dates successfully confirmed. Welcome to YOYO!", "success");
  }
};

window.initStayMonitorLoop = function() {
  // Clear any existing poller to avoid duplicates
  clearInterval(stayMonitorInterval);
  
  stayMonitorInterval = setInterval(checkStayExpiration, 3000);
};

function checkStayExpiration() {
  const activeUser = JSON.parse(localStorage.getItem("yoyo_active_user"));
  if (!activeUser) {
    clearInterval(stayMonitorInterval);
    return;
  }

  // If stay checkout is not confirmed/available, return early but KEEP poller alive
  if (!activeUser.checkOut) {
    return;
  }

  const checkoutTime = new Date(activeUser.checkOut.replace('T', ' ')).getTime();
  const now = new Date().getTime();

  if (isNaN(checkoutTime)) {
    return; // Safely ignore invalid date formats without breaking interval
  }

  if (now >= checkoutTime) {
    const extendModal = document.getElementById("extend-stay-modal");
    if (extendModal && extendModal.style.display !== "flex") {
      // Clear tray drawer if open to prevent visual clutter
      closeTray();
      // Show extension modal
      extendModal.style.display = "flex";
      
      // Auto-set the min date-time constraint for new extension selection
      const extendInput = document.getElementById("extend-checkout-date");
      if (extendInput) {
        const d = new Date();
        const tzoffset = d.getTimezoneOffset() * 60000;
        const localISOTime = (new Date(d.getTime() - tzoffset)).toISOString().slice(0, 16);
        extendInput.min = localISOTime;
        // Pre-fill with now + 1 day
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

    // Sync back to main guest database
    const guests = JSON.parse(localStorage.getItem("yoyo_guests") || "[]");
    const index = guests.findIndex(g => g.email.toLowerCase() === activeUser.email.toLowerCase());
    if (index !== -1) {
      guests[index].checkOut = newCheckoutVal;
      localStorage.setItem("yoyo_guests", JSON.stringify(guests));
    }

    // Hide extension modal and reset sub-panels
    const extendModal = document.getElementById("extend-stay-modal");
    if (extendModal) extendModal.style.display = "none";
    cancelExtension(); // resets back to decision block for next time
    
    // Revive and restart the stay expiration monitor loop
    initStayMonitorLoop();
    
    // Refresh timeline and UI
    renderStayItinerary();
    showToast("Your stay has been successfully extended. Thank you!", "success");
  }
};

