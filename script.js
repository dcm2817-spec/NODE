/* ================= DATA ================= */
const CATEGORIES = ["Audio","Wearables","Home","Accessories","Power","Compute"];
const CAT_ICON = {Audio:"🎧",Wearables:"⌚",Home:"🏠",Accessories:"🔌",Power:"🔋",Compute:"🖥️"};
const CAT_GRAD = {
  Audio:"linear-gradient(150deg,#1D222B,#2A2F3A)",
  Wearables:"linear-gradient(150deg,#1F1A22,#2E2333)",
  Home:"linear-gradient(150deg,#1A2220,#233B2E)",
  Accessories:"linear-gradient(150deg,#221C16,#3B2A1A)",
  Power:"linear-gradient(150deg,#221818,#3B1F1F)",
  Compute:"linear-gradient(150deg,#161B22,#1F2A38)"
};

const PRODUCTS = [
  {id:1,sku:"NODE-AUD-001",name:"Signal-40 Wireless Headphones",category:"Audio",price:185000,oldPrice:215000,rating:4.7,reviewCount:214,stock:18,img:"audio-1-signal40-headphones.jpg",desc:"Over-ear reference headphones tuned for a flat response, with 40mm drivers and 38-hour battery life on a single charge.",specs:{Weight:"268g",Connectivity:"Bluetooth 5.3 / 3.5mm",BatteryLife:"38 hrs",Warranty:"24 months"}},
  {id:2,sku:"NODE-AUD-002",name:"Aperture Earbuds Pro",category:"Audio",price:95000,rating:4.5,reviewCount:158,stock:32,img:"audio-2-aperture-earbuds.jpg",desc:"True-wireless earbuds with adaptive ANC and a compact aluminum charging case rated for 6 additional charges.",specs:{Weight:"5.4g each",Connectivity:"Bluetooth 5.3",BatteryLife:"7 hrs + 30 case",Warranty:"12 months"}},
  {id:3,sku:"NODE-AUD-003",name:"Fieldcast Portable Speaker",category:"Audio",price:65000,rating:4.3,reviewCount:97,stock:6,img:"audio-3-fieldcast-speaker.jpg",desc:"IP67-rated speaker with a 360° driver array, built for outdoor use across 14 hours of continuous playback.",specs:{Weight:"540g",Connectivity:"Bluetooth 5.2",BatteryLife:"14 hrs",Warranty:"12 months"}},
  {id:4,sku:"NODE-WEA-001",name:"Pulse Fitness Band",category:"Wearables",price:45000,rating:4.2,reviewCount:143,stock:41,img:"wearables-1-pulse-band.jpg",desc:"Lightweight activity band with continuous heart-rate tracking, sleep staging, and a 10-day battery.",specs:{Weight:"22g",Display:"AMOLED 1.1in",BatteryLife:"10 days",Warranty:"12 months"}},
  {id:5,sku:"NODE-WEA-002",name:"Chrono-7 Smartwatch",category:"Wearables",price:220000,oldPrice:260000,rating:4.8,reviewCount:301,stock:12,img:"wearables-2-chrono7-smartwatch.jpg",desc:"Titanium-cased smartwatch with dual-frequency GPS, ECG, and always-on display for multi-day tracking.",specs:{Weight:"48g",Display:"AMOLED 1.4in",BatteryLife:"5 days",Warranty:"24 months"}},
  {id:6,sku:"NODE-WEA-003",name:"Grip Smart Ring",category:"Wearables",price:150000,rating:4.0,reviewCount:52,stock:0,img:"wearables-3-grip-ring.jpg",desc:"Titanium smart ring for recovery and sleep tracking, worn day and night with a 7-day charge cycle.",specs:{Weight:"3g",Material:"Titanium",BatteryLife:"7 days",Warranty:"12 months"}},
  {id:7,sku:"NODE-HOM-001",name:"Lumen Desk Lamp",category:"Home",price:35000,rating:4.4,reviewCount:88,stock:27,img:"home-1-lumen-lamp.jpg",desc:"Adjustable-temperature LED desk lamp with wireless charging built into the base plate.",specs:{Weight:"820g",Power:"USB-C PD",Material:"Anodized aluminum",Warranty:"12 months"}},
  {id:8,sku:"NODE-HOM-002",name:"Aria Smart Speaker",category:"Home",price:75000,rating:4.1,reviewCount:176,stock:15,img:"home-2-aria-speaker.jpg",desc:"Room-filling smart speaker with far-field mic array and multi-room sync over Wi-Fi.",specs:{Weight:"1.1kg",Connectivity:"Wi-Fi / Bluetooth",Power:"AC adapter",Warranty:"12 months"}},
  {id:9,sku:"NODE-HOM-003",name:"Current Air Purifier",category:"Home",price:145000,rating:4.6,reviewCount:64,stock:9,img:"home-3-current-purifier.jpg",desc:"HEPA H13 purifier rated for 400 sq ft rooms with real-time particulate readout.",specs:{Weight:"3.8kg",Coverage:"400 sq ft",Filter:"HEPA H13",Warranty:"24 months"}},
  {id:10,sku:"NODE-ACC-001",name:"Anchor Phone Stand",category:"Accessories",price:12000,rating:4.3,reviewCount:210,stock:60,img:"accessories-1-anchor-standphone.jpg",desc:"Folding aluminum phone stand with a weighted base and adjustable viewing angle.",specs:{Weight:"110g",Material:"Aluminum",Compatibility:"Universal",Warranty:"6 months"}},
  {id:11,sku:"NODE-ACC-002",name:"Traverse Laptop Sleeve 14\"",category:"Accessories",price:25000,rating:4.5,reviewCount:132,stock:44,img:"accessories-2-traverse-sleeve.jpg",desc:"Water-resistant sleeve with a molded EVA shell and interior microfiber lining.",specs:{Weight:"260g",Material:"EVA / Nylon",Fits:"up to 14in",Warranty:"12 months"}},
  {id:12,sku:"NODE-ACC-003",name:"Keyframe Mechanical Keyboard",category:"Accessories",price:95000,oldPrice:115000,rating:4.9,reviewCount:388,stock:21,img:"accessories-3-keyframe-keyboard.jpg",desc:"Hot-swappable 75% mechanical keyboard with a gasket-mounted plate and PBT keycaps.",specs:{Weight:"780g",Switches:"Hot-swap",Connectivity:"USB-C / BT",Warranty:"24 months"}},
  {id:13,sku:"NODE-POW-001",name:"Reserve 20K Power Bank",category:"Power",price:38000,rating:4.4,reviewCount:167,stock:3,img:"power-1-reserve-powerbank.jpg",desc:"20,000mAh power bank with 65W bidirectional fast charging and a digital charge readout.",specs:{Capacity:"20,000mAh",Output:"65W PD",Weight:"420g",Warranty:"12 months"}},
  {id:14,sku:"NODE-POW-002",name:"Voltcell 65W GaN Charger",category:"Power",price:28000,rating:4.6,reviewCount:245,stock:38,img:"power-2-voltcell-charger.jpg",desc:"Compact 3-port GaN charger delivering 65W total output across USB-C and USB-A.",specs:{Output:"65W total",Ports:"2x USB-C, 1x USB-A",Weight:"98g",Warranty:"12 months"}},
  {id:15,sku:"NODE-POW-003",name:"Gridline Power Strip",category:"Power",price:18000,rating:4.0,reviewCount:71,stock:19,img:"power-3-gridline-strip.jpg",desc:"Surge-protected power strip with 4 outlets and 2 USB-C ports in a compact housing.",specs:{Outlets:"4 AC + 2 USB-C",Surge:"1200 Joules",Weight:"310g",Warranty:"12 months"}},
  {id:16,sku:"NODE-CMP-001",name:"Nodebook Stand Riser",category:"Compute",price:30000,rating:4.5,reviewCount:118,stock:25,img:"compute-1-nodebook-riser.jpg",desc:"Adjustable aluminum laptop riser with passive airflow channels and a folding hinge.",specs:{Weight:"680g",Material:"Aluminum",Fits:"11-17in laptops",Warranty:"12 months"}},
  {id:17,sku:"NODE-CMP-002",name:"Portal USB-C Hub 7-in-1",category:"Compute",price:42000,rating:4.3,reviewCount:203,stock:33,img:"compute-2-portal-hub.jpg",desc:"7-in-1 hub with HDMI 4K60, dual USB-A, SD/microSD, and 100W passthrough charging.",specs:{Ports:"7-in-1",Video:"HDMI 4K60",Passthrough:"100W PD",Warranty:"12 months"}},
  {id:18,sku:"NODE-CMP-003",name:"Cache 1TB Portable SSD",category:"Compute",price:95000,oldPrice:115000,rating:4.8,reviewCount:276,stock:14,img:"compute-3-cache-ssd.jpg",desc:"Rugged 1TB NVMe SSD in an aluminum shell rated for 1050MB/s sequential reads.",specs:{Capacity:"1TB",Speed:"1050MB/s read",Interface:"USB-C 3.2",Warranty:"36 months"}}
];

const DEFAULT_REVIEWS = {
  1:[{id:'d1',name:"Tomiwa A.",rating:5,date:"2026-06-14",text:"Flat, honest sound and the case fits in a jacket pocket. Battery claim checks out — I get about four days of commuting use."},
     {id:'d2',name:"K. Nwosu",rating:4,date:"2026-05-02",text:"Comfortable for long sessions but clamping force is a bit strong out of the box. Loosened up after a week."}],
  5:[{id:'d3',name:"Grace O.",rating:5,date:"2026-07-01",text:"GPS lock is fast even downtown, and the always-on display hasn't hurt battery as much as I expected."}],
  12:[{id:'d4',name:"D. Fashola",rating:5,date:"2026-06-20",text:"Gasket mount makes a real difference — noticeably softer typing feel than my previous board."},
      {id:'d5',name:"P. Iyamu",rating:5,date:"2026-04-11",text:"Hot-swap sockets worked first try when I switched switches. PBT caps feel great."}],
  18:[{id:'d6',name:"Ese U.",rating:5,date:"2026-07-10",text:"Transferred a 40GB project folder in under a minute over USB-C 3.2. Runs warm but never throttled."}]
};

/* ================= STATE ================= */
let cart = JSON.parse(localStorage.getItem('node_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('node_wishlist') || '[]');
let userReviews = JSON.parse(localStorage.getItem('node_reviews') || '{}');
let promoApplied = JSON.parse(localStorage.getItem('node_promo') || 'null');

let filters = {category:'all', search:'', maxPrice:300, minRating:0, sort:'featured'};
let currentView = 'catalog';
let currentProductId = null;
let activeTab = 'description';
let filtersOpen = false;

const TAX_RATE = 0.075; // Nigeria standard VAT
const FREE_SHIP_THRESHOLD = 60000;
const SHIP_FLAT = 4500;

/* ================= HELPERS ================= */
function saveCart(){localStorage.setItem('node_cart', JSON.stringify(cart));}
function saveWishlist(){localStorage.setItem('node_wishlist', JSON.stringify(wishlist));}
function saveReviews(){localStorage.setItem('node_reviews', JSON.stringify(userReviews));}
function savePromo(){localStorage.setItem('node_promo', JSON.stringify(promoApplied));}
function findProduct(id){return PRODUCTS.find(p=>p.id===Number(id));}
function formatPrice(n){return '₦' + Math.round(n).toLocaleString('en-NG');}
function starString(rating){
  const full = Math.round(rating);
  return '★★★★★☆☆☆☆☆'.slice(5-full,10-full);
}
function stockInfo(p){
  if(p.stock===0) return {cls:'out',label:'Out of stock'};
  if(p.stock<=5) return {cls:'low',label:`Low stock — ${p.stock} left`};
  return {cls:'in',label:'In stock'};
}
function getReviews(id){
  return (DEFAULT_REVIEWS[id]||[]).concat(userReviews[id]||[]);
}
function avgRating(p){
  const revs = getReviews(p.id);
  if(revs.length===0) return p.rating;
  const base = p.rating*p.reviewCount;
  const sum = revs.reduce((a,r)=>a+r.rating,0);
  return ((base+sum)/(p.reviewCount+revs.length));
}
function showToast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastT);
  window._toastT = setTimeout(()=>t.classList.remove('show'), 2200);
}
function cartCount(){return cart.reduce((a,c)=>a+c.qty,0);}
function cartLines(){
  return cart.map(c=>({...c, product: findProduct(c.id)})).filter(l=>l.product);
}
function computeTotals(){
  const lines = cartLines();
  const subtotal = lines.reduce((a,l)=>a+l.product.price*l.qty,0);
  let discount = 0;
  if(promoApplied==='NODE10') discount = subtotal*0.10;
  const afterDiscount = subtotal - discount;
  const shipping = (afterDiscount===0 || afterDiscount>=FREE_SHIP_THRESHOLD) ? 0 : SHIP_FLAT;
  const tax = afterDiscount*TAX_RATE;
  const total = afterDiscount + shipping + tax;
  return {subtotal,discount,shipping,tax,total,lines};
}
function updateBadges(){
  const cc = cartCount(), wc = wishlist.length;
  [['cartBadge',cc],['cartBadgeMobile',cc],['wishBadge',wc],['wishBadgeMobile',wc]].forEach(([id,v])=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.style.display = v>0 ? 'flex' : 'none';
    el.textContent = v>99?'99+':v;
  });
  document.querySelectorAll('[data-bnav]').forEach(b=>{
    b.classList.toggle('active', b.dataset.bnav===currentView || (b.dataset.bnav==='catalog' && currentView==='product'));
  });
}

/* ================= ROUTER ================= */
function navigate(view, id){
  currentView = view;
  currentProductId = id || null;
  if(view==='product') activeTab='description';
  window.scrollTo({top:0,behavior:'instant'});
  render();
}

/* ================= RENDER: SHELL ================= */
function renderCatStrip(){
  const el = document.getElementById('catStrip');
  const all = ['all',...CATEGORIES];
  el.innerHTML = all.map(c=>`<button class="chip ${filters.category===c?'active':''}" data-action="set-cat" data-cat="${c}">${c==='all'?'All':CAT_ICON[c]+' '+c}</button>`).join('');
}

function productCard(p){
  const s = stockInfo(p);
  const inWish = wishlist.includes(p.id);
  const r = avgRating(p);
  return `
  <div class="card clickable" data-action="open-product" data-id="${p.id}">
    <div class="thumb" style="background:${CAT_GRAD[p.category]}">
      <img class="thumb-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
      <button class="wish-toggle ${inWish?'on':''}" data-action="toggle-wish" data-id="${p.id}" title="Toggle wishlist">
        <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/></svg>
      </button>
      <span class="thumb-icon">${CAT_ICON[p.category]}</span>
      <span class="sku-tag">${p.sku}</span>
    </div>
    <div class="card-body">
      <span class="eyebrow">${p.category}</span>
      <h3>${p.name}</h3>
      <div class="rating-row"><span class="stars">${starString(r)}</span><span>${r.toFixed(1)} · ${p.reviewCount+((userReviews[p.id]||[]).length)}</span></div>
      <div class="price-row">
        <span class="price">${formatPrice(p.price)}</span>
        ${p.oldPrice?`<span class="price-old">${formatPrice(p.oldPrice)}</span>`:''}
      </div>
      <div class="stock-row"><span class="dot ${s.cls}"></span><span style="color:var(--muted)">${s.label}</span></div>
      <button class="add-btn" data-action="add-cart" data-id="${p.id}" ${p.stock===0?'disabled':''}>${p.stock===0?'Unavailable':'Add to cart'}</button>
    </div>
  </div>`;
}

function getFilteredProducts(){
  let list = PRODUCTS.filter(p=>{
    if(filters.category!=='all' && p.category!==filters.category) return false;
    if(filters.search && !(p.name.toLowerCase().includes(filters.search.toLowerCase()) || p.category.toLowerCase().includes(filters.search.toLowerCase()))) return false;
    if(p.price>filters.maxPrice) return false;
    if(avgRating(p)<filters.minRating) return false;
    return true;
  });
  switch(filters.sort){
    case 'price-asc': list.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
    case 'rating': list.sort((a,b)=>avgRating(b)-avgRating(a)); break;
    case 'name': list.sort((a,b)=>a.name.localeCompare(b.name)); break;
    default: break;
  }
  return list;
}

function renderFilters(){
  return `
  <div class="filters ${filtersOpen?'open':''}" id="filtersPanel">
    <button class="filters-close" data-action="close-filters">✕ Close filters</button>
    <div class="filter-group">
      <h4>Category</h4>
      ${['all',...CATEGORIES].map(c=>`<div class="filter-row ${filters.category===c?'active':''}" data-action="set-cat" data-cat="${c}"><span>${c==='all'?'All items':c}</span><span class="count">${c==='all'?PRODUCTS.length:PRODUCTS.filter(p=>p.category===c).length}</span></div>`).join('')}
    </div>
    <div class="filter-group">
      <h4>Max price</h4>
      <input type="range" min="15" max="300" step="5" value="${filters.maxPrice}" id="priceRange">
      <div class="range-val">Up to ${formatPrice(filters.maxPrice)}</div>
    </div>
    <div class="filter-group">
      <h4>Minimum rating</h4>
      <div class="star-filter">
        ${[0,3,4,4.5].map(v=>`<button class="${filters.minRating===v?'active':''}" data-action="set-rating" data-rating="${v}">${v===0?'Any':v+'★+'}</button>`).join('')}
      </div>
    </div>
    <button class="clear-filters" data-action="clear-filters">Reset filters</button>
  </div>`;
}

function renderCatalog(){
  const list = getFilteredProducts();
  return `
  <div class="hero">
    <div>
      <h1>Build your<br><span>everyday</span> kit.</h1>
      <p>Eighteen pieces of gear across audio, wearables, power, and the desk — each spec'd, reviewed, and ready to ship.</p>
    </div>
    <div class="hero-index">
      SKU INDEX / 001–018<br>
      6 CATEGORIES<br>
      UPDATED FW26
    </div>
  </div>
  <div class="layout">
    ${renderFilters()}
    <div>
      <div class="toolbar">
        <button class="mobile-filter-btn" data-action="open-filters">⚙ Filters</button>
        <span class="result-count">${list.length} item${list.length!==1?'s':''}</span>
        <select class="sort-select" id="sortSelect">
          <option value="featured" ${filters.sort==='featured'?'selected':''}>Featured</option>
          <option value="price-asc" ${filters.sort==='price-asc'?'selected':''}>Price: Low to High</option>
          <option value="price-desc" ${filters.sort==='price-desc'?'selected':''}>Price: High to Low</option>
          <option value="rating" ${filters.sort==='rating'?'selected':''}>Rating</option>
          <option value="name" ${filters.sort==='name'?'selected':''}>Name A–Z</option>
        </select>
      </div>
      <div class="grid">
        ${list.length ? list.map(productCard).join('') : `<div class="empty-state"><div class="big">No matches</div>No items fit those filters. Try widening your search.</div>`}
      </div>
    </div>
  </div>`;
}

function renderProductDetail(){
  const p = findProduct(currentProductId);
  if(!p){ navigate('catalog'); return ''; }
  const s = stockInfo(p);
  const inWish = wishlist.includes(p.id);
  const inCart = cart.find(c=>c.id===p.id);
  const r = avgRating(p);
  const revs = getReviews(p.id);
  const specRows = Object.entries(p.specs).map(([k,v])=>`<tr><td>${k.replace(/([A-Z])/g,' $1')}</td><td>${v}</td></tr>`).join('') + `<tr><td>SKU</td><td class="mono">${p.sku}</td></tr>`;
  return `
  <div class="detail">
    <div class="breadcrumb"><button data-action="nav" data-view="catalog">Catalog</button> / <button data-action="set-cat-nav" data-cat="${p.category}">${p.category}</button> / ${p.name}</div>
    <div class="detail-grid">
      <div class="detail-thumb" style="background:${CAT_GRAD[p.category]}">
        <img class="thumb-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="thumb-icon">${CAT_ICON[p.category]}</span>
      </div>
      <div class="detail-info">
        <span class="eyebrow">${p.category} · ${p.sku}</span>
        <h1>${p.name}</h1>
        <div class="detail-rating"><span class="stars">${starString(r)}</span><span>${r.toFixed(1)} (${revs.length} review${revs.length!==1?'s':''})</span></div>
        <div class="detail-price-row">
          <span class="detail-price">${formatPrice(p.price)}</span>
          ${p.oldPrice?`<span class="price-old">${formatPrice(p.oldPrice)}</span>`:''}
        </div>
        <div class="stock-row detail-stock"><span class="dot ${s.cls}"></span><span style="color:var(--muted)">${s.label}</span></div>
        <p class="detail-desc">${p.desc}</p>
        <div class="qty-stepper" id="detailQtyStepper">
          <button data-action="detail-qty" data-delta="-1">−</button>
          <span id="detailQtyVal">1</span>
          <button data-action="detail-qty" data-delta="1">+</button>
        </div>
        <div class="detail-actions">
          <button class="btn btn-primary" data-action="add-cart-detail" data-id="${p.id}" ${p.stock===0?'disabled':''}>${inCart?'Add another':'Add to cart'}</button>
          <button class="btn btn-ghost ${inWish?'on':''}" data-action="toggle-wish" data-id="${p.id}">${inWish?'♥ Saved':'♡ Save for later'}</button>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button class="tab-btn ${activeTab==='description'?'active':''}" data-action="set-tab" data-tab="description">Description</button>
      <button class="tab-btn ${activeTab==='specs'?'active':''}" data-action="set-tab" data-tab="specs">Specs</button>
      <button class="tab-btn ${activeTab==='reviews'?'active':''}" data-action="set-tab" data-tab="reviews">Reviews (${revs.length})</button>
    </div>
    <div class="tab-panel ${activeTab==='description'?'active':''}"><p class="detail-desc" style="max-width:640px">${p.desc}</p></div>
    <div class="tab-panel ${activeTab==='specs'?'active':''}"><table class="spec-table">${specRows}</table></div>
    <div class="tab-panel ${activeTab==='reviews'?'active':''}">
      <div class="rating-summary">
        <div>
          <div class="rs-big">${r.toFixed(1)}</div>
          <div class="rs-stars">${starString(r)}</div>
          <div class="eyebrow" style="text-transform:none;letter-spacing:0">${revs.length} review${revs.length!==1?'s':''}</div>
        </div>
      </div>
      ${revs.length ? revs.map(rv=>`
        <div class="review">
          <div class="review-head"><span class="review-name">${rv.name}</span><span class="review-date">${rv.date}</span></div>
          <div class="stars" style="margin-bottom:6px;">${starString(rv.rating)}</div>
          <div class="review-text">${rv.text}</div>
        </div>`).join('') : `<p style="color:var(--muted);font-size:13.5px;">No reviews yet — be the first to leave one.</p>`}

      <div class="review-form">
        <h4>Write a review</h4>
        <div class="form-field">
          <label>Your name</label>
          <input type="text" id="revName" placeholder="e.g. Marvforge">
        </div>
        <div class="form-field">
          <label>Rating</label>
          <div class="star-select" id="revStars">
            ${[1,2,3,4,5].map(n=>`<button data-action="set-rev-star" data-val="${n}">★</button>`).join('')}
          </div>
        </div>
        <div class="form-field">
          <label>Review</label>
          <textarea id="revText" placeholder="Share how it's held up..."></textarea>
        </div>
        <button class="btn btn-primary btn-full" data-action="submit-review" data-id="${p.id}">Post review</button>
      </div>
    </div>
  </div>`;
}

function renderCart(){
  const {subtotal,discount,shipping,tax,total,lines} = computeTotals();
  return `
  <div class="detail">
    <h1 class="page-title">Your cart</h1>
    ${lines.length===0 ? `
      <div class="empty-state" style="padding:60px 0;">
        <div class="big">Cart is empty</div>
        Browse the catalog to add something.
        <div style="margin-top:18px;"><button class="btn btn-primary" data-action="nav" data-view="catalog">Browse catalog</button></div>
      </div>` : `
    <div class="cart-layout">
      <div>
        ${lines.map(l=>`
          <div class="cart-row">
            <div class="cart-thumb" style="background:${CAT_GRAD[l.product.category]}">
              <img class="thumb-img" src="${l.product.img}" alt="${l.product.name}" loading="lazy" onerror="this.style.display='none'">
              <span class="thumb-icon">${CAT_ICON[l.product.category]}</span>
            </div>
            <div>
              <div class="cart-item-name">${l.product.name}</div>
              <div class="cart-item-sku">${l.product.sku}</div>
            </div>
            <div class="qty-stepper">
              <button data-action="cart-qty" data-id="${l.id}" data-delta="-1">−</button>
              <span>${l.qty}</span>
              <button data-action="cart-qty" data-id="${l.id}" data-delta="1">+</button>
            </div>
            <div class="cart-price">${formatPrice(l.product.price*l.qty)}</div>
            <button class="cart-remove" data-action="remove-cart" data-id="${l.id}" title="Remove">✕</button>
          </div>`).join('')}
      </div>
      <div class="summary-box">
        <h3>Order summary</h3>
        <div class="summary-row"><span>Subtotal</span><span class="mono">${formatPrice(subtotal)}</span></div>
        ${discount>0?`<div class="summary-row" style="color:var(--green)"><span>Promo NODE10</span><span class="mono">−${formatPrice(discount)}</span></div>`:''}
        <div class="summary-row"><span>Shipping</span><span class="mono">${shipping===0?'Free':formatPrice(shipping)}</span></div>
        <div class="summary-row"><span>VAT (7.5%)</span><span class="mono">${formatPrice(tax)}</span></div>
        <div class="summary-row total"><span>Total</span><span class="val">${formatPrice(total)}</span></div>
        <div class="promo-row">
          <input type="text" id="promoInput" placeholder="Promo code" value="${promoApplied||''}">
          <button data-action="apply-promo">Apply</button>
        </div>
        <div id="promoMsg"></div>
        <button class="btn btn-primary btn-full" data-action="nav" data-view="checkout" style="margin-top:6px;">Proceed to checkout</button>
      </div>
    </div>`}
  </div>`;
}

function renderWishlist(){
  const items = wishlist.map(findProduct).filter(Boolean);
  return `
  <div class="detail">
    <h1 class="page-title">Wishlist</h1>
    ${items.length===0 ? `
      <div class="empty-state" style="padding:60px 0;">
        <div class="big">Nothing saved yet</div>
        Tap the heart on any item to save it for later.
        <div style="margin-top:18px;"><button class="btn btn-primary" data-action="nav" data-view="catalog">Browse catalog</button></div>
      </div>` : `<div class="wl-grid">${items.map(productCard).join('')}</div>`}
  </div>`;
}

function renderCheckout(){
  const {subtotal,discount,shipping,tax,total,lines} = computeTotals();
  if(lines.length===0){
    return `<div class="detail"><div class="empty-state" style="padding:60px 0;"><div class="big">Cart is empty</div>Add items before checking out.<div style="margin-top:18px;"><button class="btn btn-primary" data-action="nav" data-view="catalog">Browse catalog</button></div></div></div>`;
  }
  return `
  <div class="detail">
    <h1 class="page-title">Checkout</h1>
    <div class="checkout-layout">
      <div>
        <div class="checkout-section">
          <h3><span class="num">01</span> Contact</h3>
          <div class="form-grid">
            <div class="form-field span2" id="f-email"><label>Email</label><input type="email" id="email" placeholder="you@example.com"><div class="field-error">Enter a valid email address.</div></div>
          </div>
        </div>
        <div class="checkout-section">
          <h3><span class="num">02</span> Shipping address</h3>
          <div class="form-grid">
            <div class="form-field span2" id="f-name"><label>Full name</label><input type="text" id="fullName"><div class="field-error">Full name is required.</div></div>
            <div class="form-field span2" id="f-address"><label>Address</label><input type="text" id="address" placeholder="Street, house / apt no."><div class="field-error">Address is required.</div></div>
            <div class="form-field" id="f-city"><label>City</label><input type="text" id="city"><div class="field-error">City is required.</div></div>
            <div class="form-field" id="f-state"><label>State</label><input type="text" id="state"><div class="field-error">State is required.</div></div>
            <div class="form-field" id="f-zip"><label>Postal code</label><input type="text" id="zip"><div class="field-error">Postal code is required.</div></div>
            <div class="form-field" id="f-country"><label>Country</label><input type="text" id="country" value="Nigeria"><div class="field-error">Country is required.</div></div>
          </div>
        </div>
        <div class="checkout-section">
          <h3><span class="num">03</span> Payment</h3>
          <div class="form-grid">
            <div class="form-field span2" id="f-card"><label>Card number</label><input type="text" id="cardNum" placeholder="0000 0000 0000 0000" maxlength="19"><div class="field-error">Enter a 16-digit card number.</div></div>
            <div class="form-field" id="f-exp"><label>Expiry</label><input type="text" id="cardExp" placeholder="MM/YY" maxlength="5"><div class="field-error">Enter expiry as MM/YY.</div></div>
            <div class="form-field" id="f-cvc"><label>CVC</label><input type="text" id="cardCvc" placeholder="123" maxlength="4"><div class="field-error">Enter a valid CVC.</div></div>
          </div>
          <p style="font-family:var(--font-mono);font-size:11px;color:var(--muted-dim);margin-top:8px;">Demo checkout — no payment is actually processed.</p>
        </div>
      </div>
      <div class="summary-box">
        <h3>Order summary</h3>
        ${lines.map(l=>`<div class="mini-line"><span>${l.product.name} × ${l.qty}</span><span>${formatPrice(l.product.price*l.qty)}</span></div>`).join('')}
        <div class="summary-row" style="margin-top:10px;"><span>Subtotal</span><span class="mono">${formatPrice(subtotal)}</span></div>
        ${discount>0?`<div class="summary-row" style="color:var(--green)"><span>Promo NODE10</span><span class="mono">−${formatPrice(discount)}</span></div>`:''}
        <div class="summary-row"><span>Shipping</span><span class="mono">${shipping===0?'Free':formatPrice(shipping)}</span></div>
        <div class="summary-row"><span>VAT</span><span class="mono">${formatPrice(tax)}</span></div>
        <div class="summary-row total"><span>Total</span><span class="val">${formatPrice(total)}</span></div>
        <button class="btn btn-primary btn-full" data-action="place-order" style="margin-top:14px;">Place order</button>
      </div>
    </div>
  </div>`;
}

function renderConfirmation(){
  const num = window._lastOrderNum || 'NODE-000000';
  return `
  <div class="confirmation">
    <div class="check">✓</div>
    <h1>Order placed</h1>
    <p>Thanks — your gear is being packed for shipment.</p>
    <div class="order-num">${num}</div>
    <p>A receipt would normally be sent to your email in a live store.</p>
    <button class="btn btn-primary" style="margin-top:24px;" data-action="nav" data-view="catalog">Continue shopping</button>
  </div>`;
}

function render(){
  renderCatStrip();
  const app = document.getElementById('app');
  if(currentView==='catalog') app.innerHTML = renderCatalog();
  else if(currentView==='product') app.innerHTML = renderProductDetail();
  else if(currentView==='cart') app.innerHTML = renderCart();
  else if(currentView==='wishlist') app.innerHTML = renderWishlist();
  else if(currentView==='checkout') app.innerHTML = renderCheckout();
  else if(currentView==='confirmation') app.innerHTML = renderConfirmation();

  document.querySelectorAll('.nav-links button').forEach(b=>b.classList.toggle('active', b.dataset.view===currentView));
  updateBadges();

  const pr = document.getElementById('priceRange');
  if(pr) pr.addEventListener('input', e=>{ filters.maxPrice = Number(e.target.value); render(); });
  const sortSel = document.getElementById('sortSelect');
  if(sortSel) sortSel.addEventListener('change', e=>{ filters.sort = e.target.value; render(); });
  const search = document.getElementById('searchInput');
  if(search){ search.value = filters.search; }

  const cardNum = document.getElementById('cardNum');
  if(cardNum) cardNum.addEventListener('input', e=>{
    let v = e.target.value.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
    e.target.value = v;
  });
  const cardExp = document.getElementById('cardExp');
  if(cardExp) cardExp.addEventListener('input', e=>{
    let v = e.target.value.replace(/\D/g,'').slice(0,4);
    if(v.length>2) v = v.slice(0,2)+'/'+v.slice(2);
    e.target.value = v;
  });
}

/* ================= ACTIONS ================= */
let selectedRevStar = 0;
let detailQty = 1;

document.addEventListener('click', e=>{
  const btn = e.target.closest('[data-action]');
  if(!btn) return;
  const action = btn.dataset.action;

  if(btn.closest('.bottom-nav')){
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size+'px';
    ripple.style.left = (e.clientX-rect.left-size/2)+'px';
    ripple.style.top = (e.clientY-rect.top-size/2)+'px';
    btn.style.position='relative';
    btn.appendChild(ripple);
    setTimeout(()=>ripple.remove(),500);
  }

  switch(action){
    case 'nav':
      navigate(btn.dataset.view);
      break;
    case 'open-product':
      detailQty = 1;
      navigate('product', btn.dataset.id);
      break;
    case 'set-cat':
      filters.category = btn.dataset.cat;
      filtersOpen = false;
      render();
      break;
    case 'set-cat-nav':
      filters.category = btn.dataset.cat;
      navigate('catalog');
      break;
    case 'set-rating':
      filters.minRating = Number(btn.dataset.rating);
      render();
      break;
    case 'clear-filters':
      filters = {category:'all', search:'', maxPrice:300, minRating:0, sort:'featured'};
      render();
      break;
    case 'open-filters':
      filtersOpen = true; render();
      break;
    case 'close-filters':
      filtersOpen = false; render();
      break;
    case 'toggle-wish': {
      const id = Number(btn.dataset.id);
      if(wishlist.includes(id)){ wishlist = wishlist.filter(w=>w!==id); showToast('Removed from wishlist'); }
      else { wishlist.push(id); showToast('Saved to wishlist'); }
      saveWishlist(); render();
      break;
    }
    case 'add-cart': {
      const id = Number(btn.dataset.id);
      addToCart(id, 1);
      break;
    }
    case 'add-cart-detail': {
      const id = Number(btn.dataset.id);
      addToCart(id, detailQty);
      break;
    }
    case 'detail-qty': {
      const d = Number(btn.dataset.delta);
      detailQty = Math.max(1, detailQty + d);
      document.getElementById('detailQtyVal').textContent = detailQty;
      break;
    }
    case 'cart-qty': {
      const id = Number(btn.dataset.id);
      const d = Number(btn.dataset.delta);
      const line = cart.find(c=>c.id===id);
      if(line){ line.qty = Math.max(1, line.qty+d); saveCart(); render(); }
      break;
    }
    case 'remove-cart': {
      const id = Number(btn.dataset.id);
      cart = cart.filter(c=>c.id!==id);
      saveCart(); render(); showToast('Removed from cart');
      break;
    }
    case 'set-tab':
      activeTab = btn.dataset.tab;
      render();
      break;
    case 'set-rev-star':
      selectedRevStar = Number(btn.dataset.val);
      document.querySelectorAll('#revStars button').forEach((b,i)=>b.classList.toggle('sel', i<selectedRevStar));
      break;
    case 'submit-review': {
      const id = Number(btn.dataset.id);
      const name = document.getElementById('revName').value.trim() || 'Anonymous';
      const text = document.getElementById('revText').value.trim();
      if(!text || selectedRevStar===0){ showToast('Add a rating and a comment first'); return; }
      if(!userReviews[id]) userReviews[id] = [];
      userReviews[id].push({id:'u'+Date.now(), name, rating:selectedRevStar, date:new Date().toISOString().slice(0,10), text});
      saveReviews();
      selectedRevStar = 0;
      showToast('Review posted');
      render();
      break;
    }
    case 'apply-promo': {
      const code = document.getElementById('promoInput').value.trim().toUpperCase();
      const msgEl = document.getElementById('promoMsg');
      if(code==='NODE10'){ promoApplied='NODE10'; savePromo(); render(); setTimeout(()=>{ const m=document.getElementById('promoMsg'); if(m){m.innerHTML='<div class="promo-msg ok">NODE10 applied — 10% off</div>';} },0); }
      else { promoApplied=null; savePromo(); if(msgEl) msgEl.innerHTML = '<div class="promo-msg err">Invalid code</div>'; }
      break;
    }
    case 'place-order':
      placeOrder();
      break;
    case 'focus-search':
      navigate('catalog');
      setTimeout(()=>{ const s=document.getElementById('searchInput'); if(s) s.focus(); }, 50);
      break;
  }
});

document.addEventListener('input', e=>{
  if(e.target.id==='searchInput'){
    filters.search = e.target.value;
    const app = document.getElementById('app');
    if(currentView==='catalog'){
      // re-render only the grid+toolbar area to avoid stealing focus
      const list = getFilteredProducts();
      const gridWrap = app.querySelector('.grid').parentElement;
      app.querySelector('.result-count').textContent = `${list.length} item${list.length!==1?'s':''}`;
      app.querySelector('.grid').innerHTML = list.length ? list.map(productCard).join('') : `<div class="empty-state"><div class="big">No matches</div>No items fit those filters. Try a different search.</div>`;
    }
  }
});

function addToCart(id, qty){
  const p = findProduct(id);
  if(!p || p.stock===0) return;
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty += qty;
  else cart.push({id, qty});
  saveCart();
  updateBadges();
  showToast(`Added ${p.name} × ${qty}`);
  if(currentView==='product') render();
}

function validateCheckout(){
  const fields = [
    {id:'email', check:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},
    {id:'fullName', check:v=>v.trim().length>1},
    {id:'address', check:v=>v.trim().length>3},
    {id:'city', check:v=>v.trim().length>0},
    {id:'state', check:v=>v.trim().length>0},
    {id:'zip', check:v=>v.trim().length>2},
    {id:'country', check:v=>v.trim().length>0},
    {id:'cardNum', check:v=>v.replace(/\s/g,'').length===16},
    {id:'cardExp', check:v=>/^\d{2}\/\d{2}$/.test(v)},
    {id:'cardCvc', check:v=>/^\d{3,4}$/.test(v)},
  ];
  const idToBox = {email:'f-email',fullName:'f-name',address:'f-address',city:'f-city',state:'f-state',zip:'f-zip',country:'f-country',cardNum:'f-card',cardExp:'f-exp',cardCvc:'f-cvc'};
  let valid = true;
  fields.forEach(f=>{
    const el = document.getElementById(f.id);
    const box = document.getElementById(idToBox[f.id]);
    if(!el) return;
    const ok = f.check(el.value);
    box.classList.toggle('invalid', !ok);
    if(!ok) valid = false;
  });
  return valid;
}

function placeOrder(){
  if(!validateCheckout()){ showToast('Check the highlighted fields'); return; }
  window._lastOrderNum = 'NODE-' + Math.floor(100000 + Math.random()*899999);
  cart = [];
  promoApplied = null;
  saveCart(); savePromo();
  navigate('confirmation');
}

/* ================= INIT ================= */
render();
