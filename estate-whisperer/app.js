// Averline Private Estates / Estate Whisperer Studio — Interactive Logic
// Designed & Developed by Girdhari Choyal (@gchoyal_websitedeveloper)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu on nav item click
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Property Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');

            propertyCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat.includes(category)) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });

    // 3. Property Detail & Tour Modal
    const propertyModal = document.getElementById('propertyModal');
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    const tourButtons = document.querySelectorAll('.btn-tour');

    const modalImg = document.getElementById('modalPropertyImg');
    const modalTitle = document.getElementById('modalPropertyTitle');
    const modalLocation = document.getElementById('modalPropertyLocation');
    const modalPrice = document.getElementById('modalPropertyPrice');
    const modalSpecs = document.getElementById('modalPropertySpecs');
    const modalDesc = document.getElementById('modalPropertyDesc');
    const hiddenPropertyInput = document.getElementById('selectedPropertyName');

    tourButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.property-card');
            if (!card || !propertyModal) return;

            const name = card.querySelector('.property-name')?.innerText || 'Exclusive Estate';
            const location = card.querySelector('.property-location')?.innerText || 'Private Location';
            const price = card.querySelector('.property-price')?.innerText || 'Price Upon Request';
            const img = card.querySelector('.property-img')?.src || '';
            const desc = card.querySelector('.property-desc')?.innerText || '';
            const specs = card.querySelector('.property-specs')?.innerHTML || '';

            if (modalTitle) modalTitle.innerText = name;
            if (modalLocation) modalLocation.innerText = location;
            if (modalPrice) modalPrice.innerText = price;
            if (modalImg) modalImg.src = img;
            if (modalDesc) modalDesc.innerText = desc;
            if (modalSpecs) modalSpecs.innerHTML = specs;
            if (hiddenPropertyInput) hiddenPropertyInput.value = name + ' (' + location + ')';

            propertyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = 'auto';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 4. VIP Form Submissions & Confirmation Modal
    const vipConsultForm = document.getElementById('vipConsultForm');
    const tourBookingForm = document.getElementById('tourBookingForm');
    const thankYouModal = document.getElementById('thankYouModal');
    const vipRefCode = document.getElementById('vipRefCode');

    function handleVipSubmit(e) {
        e.preventDefault();
        
        // Generate random VIP dossier reference code
        const refNumber = 'AV-' + Math.floor(100000 + Math.random() * 900000);
        if (vipRefCode) {
            vipRefCode.innerText = refNumber;
        }

        // Close any open property modals
        if (propertyModal) propertyModal.classList.remove('active');

        // Show thank you confirmation
        if (thankYouModal) {
            thankYouModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        e.target.reset();
    }

    if (vipConsultForm) vipConsultForm.addEventListener('submit', handleVipSubmit);
    if (tourBookingForm) tourBookingForm.addEventListener('submit', handleVipSubmit);

    // 5. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close other items
                faqItems.forEach(i => i.classList.remove('active'));

                // Toggle clicked
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});