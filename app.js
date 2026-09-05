// Windows & Doors Hero — Interactive Client Demo Scripts
// Designed by Girdhari Choyal (@gchoyal_websitedeveloper)

document.addEventListener(DOMContentLoaded, function() {
    initMobileNav();
    calculateQuote();
});

// Cost Estimator Logic
function calculateQuote() {
    var serviceEl = document.getElementById(quoteService);
    var sizeEl = document.getElementById(homeSize);
    var priceDisplay = document.getElementById(estimatedPrice);

    if (!serviceEl || !sizeEl || !priceDisplay) return;

    var service = serviceEl.value;
    var size = parseInt(sizeEl.value, 10) || 1;

    var baseMin = 159;
    var baseMax = 219;

    if (service === Window Cleaning) {
        if (size === 1) { baseMin = 159; baseMax = 219; }
        else if (size === 2) { baseMin = 229; baseMax = 299; }
        else { baseMin = 339; baseMax = 469; }
    } else if (service === Window Replacement) {
        if (size === 1) { baseMin = 1250; baseMax = 2600; }
        else if (size === 2) { baseMin = 2600; baseMax = 5900; }
        else { baseMin = 5900; baseMax = 12500; }
    } else if (service === Door Installation) {
        if (size === 1) { baseMin = 890; baseMax = 1650; }
        else if (size === 2) { baseMin = 1450; baseMax = 2900; }
        else { baseMin = 2300; baseMax = 4700; }
    } else if (service === Gutter Cleaning) {
        if (size === 1) { baseMin = 139; baseMax = 189; }
        else if (size === 2) { baseMin = 199; baseMax = 259; }
        else { baseMin = 279; baseMax = 379; }
    } else if (service === Full Exterior Package) {
        if (size === 1) { baseMin = 369; baseMax = 519; }
        else if (size === 2) { baseMin = 519; baseMax = 769; }
        else { baseMin = 769; baseMax = 1249; }
    }

    priceDisplay.textContent = $ + baseMin.toLocaleString() +  – $ + baseMax.toLocaleString() +  CAD;
}

// Mobile Menu Navigation Toggle
function initMobileNav() {
    var mobileToggle = document.getElementById(mobileToggle);
    var navMenu = document.getElementById(navMenu);

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener(click, function() {
            if (navMenu.classList.contains(active)) {
                navMenu.classList.remove(active);
            } else {
                navMenu.classList.add(active);
            }
        });
    }
}