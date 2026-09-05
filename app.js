// Windows & Doors Hero — Interactive Client Demo Scripts
// Designed by Gaurav Choyal (@gchoyal_websitedeveloper)

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    calculateQuote();
});

// Instant Quote Calculator Logic
function calculateQuote() {
    const service = document.getElementById('quoteService').value;
    const size = parseInt(document.getElementById('homeSize').value, 10) || 1;
    const priceDisplay = document.getElementById('estimatedPrice');

    let baseMin = 149;
    let baseMax = 199;

    if (service === 'Window Cleaning') {
        if (size === 1) { baseMin = 149; baseMax = 199; }
        else if (size === 2) { baseMin = 219; baseMax = 289; }
        else { baseMin = 319; baseMax = 449; }
    } else if (service === 'Window Replacement') {
        if (size === 1) { baseMin = 1200; baseMax = 2500; }
        else if (size === 2) { baseMin = 2500; baseMax = 5800; }
        else { baseMin = 5500; baseMax = 12000; }
    } else if (service === 'Door Installation') {
        if (size === 1) { baseMin = 850; baseMax = 1600; }
        else if (size === 2) { baseMin = 1400; baseMax = 2800; }
        else { baseMin = 2200; baseMax = 4500; }
    } else if (service === 'Gutter Cleaning') {
        if (size === 1) { baseMin = 129; baseMax = 179; }
        else if (size === 2) { baseMin = 189; baseMax = 249; }
        else { baseMin = 269; baseMax = 369; }
    } else if (service === 'Full Exterior Package') {
        if (size === 1) { baseMin = 349; baseMax = 499; }
        else if (size === 2) { baseMin = 499; baseMax = 749; }
        else { baseMin = 749; baseMax = 1199; }
    }

    if (priceDisplay) {
        priceDisplay.textContent = $ – {baseMax.toLocaleString()} CAD;
    }
}

// Mobile Menu Navigation Toggle
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#ffffff';
                navMenu.style.padding = '24px';
                navMenu.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                navMenu.style.zIndex = '999';
            }
        });
    }
}