// Windows & Doors Hero — Interactive Client Engine
// Designed & Developed by Girdhari Choyal (@gchoyal_websitedeveloper)

document.addEventListener("DOMContentLoaded", function() {
    initMobileNav();
    calculateQuote();
    initScrollAnimations();
});

// Cost Estimator Logic
function calculateQuote() {
    var serviceEl = document.getElementById("quoteService");
    var sizeEl = document.getElementById("homeSize");
    var priceDisplay = document.getElementById("estimatedPrice");

    if (!serviceEl || !sizeEl || !priceDisplay) return;

    var service = serviceEl.value;
    var size = parseInt(sizeEl.value, 10) || 1;

    var baseMin = 159;
    var baseMax = 219;

    if (service === "Window Cleaning") {
        if (size === 1) { baseMin = 159; baseMax = 219; }
        else if (size === 2) { baseMin = 229; baseMax = 299; }
        else { baseMin = 339; baseMax = 469; }
    } else if (service === "Window Replacement") {
        if (size === 1) { baseMin = 1250; baseMax = 2600; }
        else if (size === 2) { baseMin = 2600; baseMax = 5900; }
        else { baseMin = 5900; baseMax = 12500; }
    } else if (service === "Door Installation") {
        if (size === 1) { baseMin = 890; baseMax = 1650; }
        else if (size === 2) { baseMin = 1450; baseMax = 2900; }
        else { baseMin = 2300; baseMax = 4700; }
    } else if (service === "Gutter Cleaning") {
        if (size === 1) { baseMin = 139; baseMax = 189; }
        else if (size === 2) { baseMin = 199; baseMax = 259; }
        else { baseMin = 279; baseMax = 379; }
    } else if (service === "Full Exterior Package") {
        if (size === 1) { baseMin = 369; baseMax = 519; }
        else if (size === 2) { baseMin = 519; baseMax = 769; }
        else { baseMin = 769; baseMax = 1249; }
    }

    priceDisplay.textContent = "$" + baseMin.toLocaleString() + " – $" + baseMax.toLocaleString() + " CAD";
}

// Quote Form Submit Handler
function handleQuoteSubmit() {
    var postal = document.getElementById("postalCode").value;
    var service = document.getElementById("quoteService").value;
    var price = document.getElementById("estimatedPrice").textContent;

    var modal = document.getElementById("thankYouModal");
    var msg = document.getElementById("thankYouMsg");

    if (msg) {
        msg.textContent = "Your " + service + " baseline estimate (" + price + ") for postal area " + postal + " has been locked in! A Windows & Doors Hero specialist will reach out within 2 hours.";
    }

    if (modal) {
        modal.classList.add("active");
    }
}

// Contact Form Submit Handler
function handleContactSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("fullName").value;
    var service = document.getElementById("serviceType").value;

    var modal = document.getElementById("thankYouModal");
    var msg = document.getElementById("thankYouMsg");

    if (msg) {
        msg.textContent = "Thank you " + name + "! Your consultation request for " + service + " has been recorded. Our team will contact you shortly.";
    }

    if (modal) {
        modal.classList.add("active");
    }

    document.getElementById("consultationForm").reset();
}

// Close Thank You Modal
function closeThankYouModal() {
    var modal = document.getElementById("thankYouModal");
    if (modal) {
        modal.classList.remove("active");
    }
}

// FAQ Accordion Toggle
function toggleFaq(button) {
    var item = button.parentElement;
    var allItems = document.querySelectorAll(".faq-item");

    allItems.forEach(function(el) {
        if (el !== item) {
            el.classList.remove("active");
        }
    });

    item.classList.toggle("active");
}

// Mobile Menu Navigation Toggle
function initMobileNav() {
    var mobileToggle = document.getElementById("mobileToggle");
    var navMenu = document.getElementById("navMenu");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });

        // Close when clicking nav items
        var navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navMenu.classList.remove("active");
            });
        });
    }
}

// Scroll Micro-Animations
function initScrollAnimations() {
    var widget = document.getElementById("floatingWidget");

    window.addEventListener("scroll", function() {
        if (widget) {
            var scrollPos = window.scrollY;
            widget.style.transform = "rotate(" + (scrollPos % 360) + "deg)";
        }
    });
}