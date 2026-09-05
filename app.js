// AURA Living — E-Commerce Demo Interactive Engine
// Designed by Gaurav Choyal (@gchoyal_websitedeveloper)

let cart = [
    { name: Artisanal Flora Ceramic Vase, price: 120, qty: 1, img: assets/hero-vase.jpg },
    { name: Mulberry Botanical Silk Scarf, price: 185, qty: 1, img: assets/silk-scarf.jpg },
    { name: Brushed Brass Travertine Globe Lamp, price: 240, qty: 1, img: assets/globe-lamp.jpg }
];

document.addEventListener('DOMContentLoaded', () => {
    initCartDrawer();
    initFilters();
    initMobileMenu();
    renderCart();
});

// Cart Drawer Handlers
function initCartDrawer() {
    const cartToggle = document.getElementById('cartToggle');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');

    if (cartToggle && cartDrawer && cartOverlay) {
        cartToggle.addEventListener('click', () => {
            cartDrawer.classList.add('active');
            cartOverlay.classList.add('active');
        });

        closeCart.addEventListener('click', closeDrawer);
        cartOverlay.addEventListener('click', closeDrawer);
    }
}

function closeDrawer() {
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

function addToCart(name, price, img) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name, price, qty: 1, img });
    }
    renderCart();
    
    // Open cart drawer to confirm addition
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    }
}

function updateItemQty(index, change) {
    if (cart[index]) {
        cart[index].qty += change;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        renderCart();
    }
}

function removeItem(index) {
    if (cart[index]) {
        cart.splice(index, 1);
        renderCart();
    }
}

function renderCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    const cartCount = document.getElementById('cartCount');
    const drawerItemCount = document.getElementById('drawerItemCount');
    const cartSubtotal = document.getElementById('cartSubtotal');

    if (!cartItemsList) return;

    let totalQty = 0;
    let totalPrice = 0;

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div style=text-align: center; color: #a8a29e; padding: 40px 0;>Your shopping bag is empty.</div>';
    } else {
        cart.forEach((item, index) => {
            totalQty += item.qty;
            totalPrice += item.price * item.qty;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = 
                <img src=" alt=>
 <div class=cart-item-info>
 <h4></h4>
 <span class=cart-item-price>{item.price.toFixed(2)}</span>
 <div class=cart-qty-control>
 <button class=qty-btn onclick=updateItemQty(, -1)>-</button>
 <span></span>
 <button class=qty-btn onclick=updateItemQty(, 1)>+</button>
 </div>
 </div>
 <button class=remove-btn onclick=removeItem()>&times;</button>
 ;
 cartItemsList.appendChild(itemEl);
 });
 }

 if (cartCount) cartCount.textContent = totalQty;
 if (drawerItemCount) drawerItemCount.textContent = totalQty;
 if (cartSubtotal) cartSubtotal.textContent = $;
}

// Category Filter Handling
function initFilters() {
 const filterPills = document.querySelectorAll('.filter-pill');
 const productCards = document.querySelectorAll('.product-card');

 filterPills.forEach(pill => {
 pill.addEventListener('click', () => {
 filterPills.forEach(p => p.classList.remove('active'));
 pill.classList.add('active');

 const category = pill.getAttribute('data-category');

 productCards.forEach(card => {
 const itemCat = card.getAttribute('data-category');
 if (category === 'all' || itemCat === category) {
 card.style.display = 'block';
 } else {
 card.style.display = 'none';
 }
 });
 });
 });
}

// Mobile Menu Toggle
function initMobileMenu() {
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const navLinks = document.getElementById('navLinks');

 if (mobileMenuBtn && navLinks) {
 mobileMenuBtn.addEventListener('click', () => {
 if (navLinks.style.display === 'flex') {
 navLinks.style.display = 'none';
 } else {
 navLinks.style.display = 'flex';
 navLinks.style.flexDirection = 'column';
 navLinks.style.position = 'absolute';
 navLinks.style.top = '100%';
 navLinks.style.left = '0';
 navLinks.style.width = '100%';
 navLinks.style.background = '#fcfbf9';
 navLinks.style.padding = '20px';
 navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
 }
 });
 }
}