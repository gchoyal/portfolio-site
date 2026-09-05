// Windows & Doors Hero — Interactive Client Demo Scripts
// Designed by Gaurav Choyal (@gchoyal_websitedeveloper)

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    calculateQuote();
});

// Cost Estimator Logic
function calculateQuote() {
    const service = document.getElementById('quoteService').value;
    const size = parseInt(document.getElementById('homeSize').value, 10) || 1;
    const priceDisplay = document.getElementById('estimatedPrice');

    let baseMin = 159;
    let baseMax = 219;

    if (service === 'Window Cleaning') {
        if (size === 1) { baseMin = 159; baseMax = 219; }
        else if (size === 2) { baseMin = 229; baseMax = 299; }
        else { baseMin = 339; baseMax = 469; }
    } else if (service === 'Window Replacement') {
        if (size === 1) { baseMin = 1250; baseMax = 2600; }
        else if (size === 2) { baseMin = 2600; baseMax = 5900; }
        else { baseMin = 5900; baseMax = 12500; }
    } else if (service === 'Door Installation') {
        if (size === 1) { baseMin = 890; baseMax = 1650; }
        else if (size === 2) { baseMin = 1450; baseMax = 2900; }
        else { baseMin = 2300; baseMax = 4700; }
    } else if (service === 'Gutter Cleaning') {
        if (size === 1) { baseMin = 139; baseMax = 189; }
        else if (size === 2) { baseMin = 199; baseMax = 259; }
        else { baseMin = 279; baseMax = 379; }
    } else if (service === 'Full Exterior Package') {
        if (size === 1) { baseMin = 369; baseMax = 519; }
        else if (size === 2) { baseMin = 519; baseMax = 769; }
        else { baseMin = 769; baseMax = 1249; }
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