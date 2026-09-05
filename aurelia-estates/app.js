// Aurelia Estates — Luxury Real Estate Brokerage (Miami, Florida)
// Modular JavaScript Engine for Property Filtering, Search, Sorting & Modals
// Designed & Developed by Girdhari Choyal (@gchoyal_websitedeveloper)

// 1. DATASETS
const propertiesData = [
    {
        id: 1,
        title: "Villa Solaria on Star Island",
        status: "buy",
        price: 38500000,
        formattedPrice: "$38,500,000",
        address: "44 Star Island Drive, Miami Beach, FL 33139",
        location: "Star Island",
        type: "Waterfront Villa",
        beds: 7,
        baths: 9,
        sqft: 12400,
        featured: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        agentId: 1,
        desc: "An extraordinary modern Mediterranean estate commanding 150 feet of deepwater Biscayne Bay frontage. Features a dual master wing, zero-edge heated infinity pool, private 100-foot yacht dock, and imported limestone terraces.",
        amenities: ["100ft Deepwater Dock", "Infinity Pool & Cabana", "1,200 Bottle Wine Cellar", "Subterranean 6-Car Garage", "Smart Home Automation", "Private Security Gate"]
    },
    {
        id: 2,
        title: "The Palazzo Penthouse at Fisher Island",
        status: "buy",
        price: 26900000,
        formattedPrice: "$26,900,000",
        address: "7000 Fisher Island Drive, PH 702, Miami Beach, FL 33109",
        location: "Fisher Island",
        type: "Sky Penthouse",
        beds: 5,
        baths: 6.5,
        sqft: 8650,
        featured: true,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        agentId: 1,
        desc: "Perched atop Fisher Island's premier residential enclave, this full-floor duplex penthouse offers 360-degree Atlantic Ocean and Miami skyline panoramas, private rooftop pool, and dedicated private ferry slip.",
        amenities: ["Private Rooftop Pool", "Direct Elevator Foyer", "Fisher Island Club Access", "Private Golf Cart Slips", "24/7 Island Concierge", "Staff Quarters"]
    },
    {
        id: 3,
        title: "Casa Bal Harbour Oceanfront",
        status: "buy",
        price: 19800000,
        formattedPrice: "$19,800,000",
        address: "10295 Collins Ave, Bal Harbour, FL 33154",
        location: "Sunny Isles Beach",
        type: "Oceanfront Condo",
        beds: 4,
        baths: 5,
        sqft: 6200,
        featured: true,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        agentId: 2,
        desc: "Designed by world-renowned minimalist architects, this flow-through Atlantic residence features 12-foot floor-to-ceiling glass, Italian Boffi kitchens, and private oceanfront sunrise and sunset terraces.",
        amenities: ["Oceanfront Terraces", "Boffi Designer Kitchen", "Private Spa & Sauna", "Valet & 24/7 Security", "Direct Beach Butler", "Heated Lap Pool"]
    },
    {
        id: 4,
        title: "The Gables Banyan Estate",
        status: "buy",
        price: 15400000,
        formattedPrice: "$15,400,000",
        address: "6800 Banyan Road, Coral Gables, FL 33143",
        location: "Coral Gables",
        type: "Modern Estate",
        beds: 6,
        baths: 7.5,
        sqft: 9800,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        agentId: 4,
        desc: "Nestled within an enchanted 1.8-acre canopy of century-old banyans in exclusive Gables Estates. Features seamless indoor-outdoor courtyards, championship tennis court, and detached two-bedroom guest cottage.",
        amenities: ["1.8 Acre Private Parkland", "Championship Tennis Court", "Detached Guest House", "Summer Kitchen & Pavilion", "Smart Security Grid", "Coral Gables Club Access"]
    },
    {
        id: 5,
        title: "The Glass Tower Penthouse 54",
        status: "rent",
        price: 45000,
        formattedPrice: "$45,000 / mo",
        address: "1421 Brickell Avenue, PH 54, Miami, FL 33131",
        location: "Brickell",
        type: "Sky Penthouse",
        beds: 3,
        baths: 4,
        sqft: 4900,
        featured: true,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        agentId: 3,
        desc: "The pinnacle of urban luxury in Brickell's financial district. Boasts 24-foot double-height living ceilings, a floating architectural glass staircase, private heated rooftop plunge pool, and bespoke furnishings.",
        amenities: ["Heated Rooftop Plunge Pool", "24ft Ceiling Volume", "Fully Furnished by Minotti", "Dedicated 3-Car Parking", "Sky Lounge Access", "Equinox Fitness Center"]
    },
    {
        id: 6,
        title: "Grove Sanctuary Waterfront Villa",
        status: "buy",
        price: 22500000,
        formattedPrice: "$22,500,000",
        address: "3500 Main Highway, Coconut Grove, FL 33133",
        location: "Coconut Grove",
        type: "Waterfront Villa",
        beds: 5,
        baths: 6,
        sqft: 7800,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        agentId: 4,
        desc: "Tucked inside Coconut Grove's most coveted private gated street, this tropical modern sanctuary offers direct ocean access without bridges to Biscayne Bay, lush native gardens, and organic teak craftsmanship.",
        amenities: ["No-Bridges Ocean Access", "Private Boat Slip", "Organic Teak Millwork", "Lush Zen Water Gardens", "Solar Smart Power", "Gated Security Entry"]
    },
    {
        id: 7,
        title: "Key Biscayne Oceanfront Sanctuary",
        status: "buy",
        price: 31000000,
        formattedPrice: "$31,000,000",
        address: "520 Ocean Drive, Key Biscayne, FL 33149",
        location: "Key Biscayne",
        type: "Waterfront Villa",
        beds: 6,
        baths: 8,
        sqft: 10500,
        featured: false,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
        agentId: 5,
        desc: "An ultra-rare private beach estate on Key Biscayne featuring direct private sand dunes, oceanfront lap pool, expansive entertainment verandas, and panoramic views stretching toward Cape Florida lighthouse.",
        amenities: ["Private Beach Access", "Oceanfront Lap Pool", "Outdoor Teppanyaki Kitchen", "Subterranean Theater", "Dual Elevator Shafts", "Private Dunes Walkway"]
    },
    {
        id: 8,
        title: "South Beach Architectural Loft",
        status: "rent",
        price: 28000,
        formattedPrice: "$28,000 / mo",
        address: "100 Ocean Drive, Suite 8A, Miami Beach, FL 33139",
        location: "South Beach",
        type: "Oceanfront Condo",
        beds: 3,
        baths: 3.5,
        sqft: 3600,
        featured: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        agentId: 2,
        desc: "Located South of Fifth (SoFi), this modern architectural loft features poured terrazzo floors, direct ocean and South Pointe park views, private elevator entry, and direct access to Miami's top restaurants.",
        amenities: ["South of Fifth Location", "Poured Terrazzo Floors", "Direct Park & Ocean Views", "Private Elevator Entry", "2 Assigned Garage Slips", "Resort Pool & Gym"]
    }
];

const agentsData = [
    {
        id: 1,
        name: "Elena Rostova",
        role: "Managing Broker & Founding Principal",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        phone: "+1 (305) 555-0190",
        email: "elena@aureliaestates.com",
        areas: "Star Island, Fisher Island, Indian Creek",
        listingsCount: 14,
        volume: "$420M+",
        bio: "With over 18 years specializing exclusively in ultra-high-net-worth acquisitions across South Florida, Elena is trusted by family offices and global business leaders for unmatched discretion and record-breaking representation."
    },
    {
        id: 2,
        name: "Marcus Sterling",
        role: "Director of Coastal Estates",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        phone: "+1 (305) 555-0192",
        email: "marcus@aureliaestates.com",
        areas: "South Beach, Bal Harbour, Sunny Isles",
        listingsCount: 9,
        volume: "$280M+",
        bio: "Specializing in oceanfront compounds and architectural branded residences, Marcus delivers analytical market intelligence and decisive negotiation power for high-profile clients."
    },
    {
        id: 3,
        name: "Sophia De Luca",
        role: "High-Rise & Penthouse Specialist",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
        phone: "+1 (305) 555-0194",
        email: "sophia@aureliaestates.com",
        areas: "Brickell, Downtown Miami, Edgewater",
        listingsCount: 12,
        volume: "$195M+",
        bio: "Sophia represents premier developers and private investors in acquiring iconic skyline penthouses, combining deep architectural insight with bespoke off-market access."
    },
    {
        id: 4,
        name: "Julian Vance",
        role: "Historic & Gated Communities Advisor",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
        phone: "+1 (305) 555-0196",
        email: "julian@aureliaestates.com",
        areas: "Coral Gables, Coconut Grove, Pinecrest",
        listingsCount: 8,
        volume: "$310M+",
        bio: "A native of South Florida, Julian's encyclopedic knowledge of Coral Gables and Coconut Grove acreage estates ensures seamless transactions for discerning estate buyers."
    },
    {
        id: 5,
        name: "Camila Morales",
        role: "Private Wealth & Latin America Desk",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        phone: "+1 (305) 555-0198",
        email: "camila@aureliaestates.com",
        areas: "Key Biscayne, Coconut Grove, Brickell",
        listingsCount: 11,
        volume: "$160M+",
        bio: "Leading cross-border transactions for international principals across São Paulo, Mexico City, and Madrid seeking trophy real estate diversification in South Florida."
    },
    {
        id: 6,
        name: "Alexander Hayes",
        role: "Off-Market & Development Director",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        phone: "+1 (305) 555-0199",
        email: "alexander@aureliaestates.com",
        areas: "Miami Beach, Palm Beach, Venetians",
        listingsCount: 7,
        volume: "$240M+",
        bio: "Alexander oversees Aurelia's confidential off-market register, matching ultra-prime pocket listings with vetted principals prior to public syndication."
    }
];

// 2. FAVORITES STATE
let favorites = new Set([1, 2]);

// 3. CORE FILTER & RENDER ENGINE
document.addEventListener('DOMContentLoaded', () => {
    const propertiesGrid = document.getElementById('propertiesGrid');
    const propertyCountSpan = document.getElementById('propertyCountSpan');
    const favCountBadge = document.getElementById('favCountBadge');
    const searchForm = document.getElementById('propertySearchForm');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const sortSelect = document.getElementById('sortSelect');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const advancedToggleBtn = document.getElementById('advancedToggleBtn');
    const advancedFiltersRow = document.getElementById('advancedFiltersRow');
    const searchTabs = document.querySelectorAll('.search-tab-btn');

    let currentStatus = 'buy';

    // Update Favorites Counter
    function updateFavBadge() {
        if (favCountBadge) {
            favCountBadge.innerText = favorites.size;
        }
    }
    updateFavBadge();

    // Toggle Search Buy/Rent Tab
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentStatus = tab.getAttribute('data-status');
            filterAndRender();
        });
    });

    // Toggle Advanced Filters
    if (advancedToggleBtn && advancedFiltersRow) {
        advancedToggleBtn.addEventListener('click', () => {
            advancedFiltersRow.classList.toggle('active');
            const icon = advancedToggleBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    }

    // Grid vs List View
    if (gridViewBtn && listViewBtn && propertiesGrid) {
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            propertiesGrid.classList.remove('list-view');
        });
        listViewBtn.addEventListener('click', () => {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            propertiesGrid.classList.add('list-view');
        });
    }

    // Render Property Cards
    function renderProperties(list) {
        if (!propertiesGrid) return;
        propertiesGrid.innerHTML = '';

        if (list.length === 0) {
            propertiesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: #fff; border: 1px dashed var(--border-card); border-radius: var(--radius-sm);">
                    <i class="fa-solid fa-house-chimney-crack" style="font-size: 2.5rem; color: var(--gold); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No Matching Properties Found</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Try adjusting your filters or clearing search criteria.</p>
                    <button class="btn btn-primary btn-sm" id="resetEmptyBtn">Clear All Filters</button>
                </div>
            `;
            const resetBtn = document.getElementById('resetEmptyBtn');
            if (resetBtn) resetBtn.addEventListener('click', resetFilters);
            if (propertyCountSpan) propertyCountSpan.innerText = '0';
            return;
        }

        if (propertyCountSpan) {
            propertyCountSpan.innerText = list.length;
        }

        list.forEach(prop => {
            const isFav = favorites.has(prop.id);
            const card = document.createElement('div');
            card.className = 'property-card';
            card.innerHTML = `
                <div class="property-card-media">
                    <img src="${prop.image}" alt="${prop.title}" class="property-thumb-img" loading="lazy">
                    <span class="card-status-badge">${prop.status === 'buy' ? 'For Sale' : 'For Lease'}</span>
                    <button class="card-fav-btn ${isFav ? 'favorited' : ''}" data-id="${prop.id}" aria-label="Save to Favorites">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <span class="card-price-tag">${prop.formattedPrice}</span>
                </div>
                <div class="property-card-body">
                    <span class="property-location-tag">${prop.location} • ${prop.type}</span>
                    <h3 class="property-card-title">${prop.title}</h3>
                    <p class="property-card-address"><i class="fa-solid fa-location-dot"></i> ${prop.address}</p>
                    <div class="property-specs-strip">
                        <span class="spec-item"><i class="fa-solid fa-bed"></i> ${prop.beds} Beds</span>
                        <span class="spec-item"><i class="fa-solid fa-bath"></i> ${prop.baths} Baths</span>
                        <span class="spec-item"><i class="fa-solid fa-vector-square"></i> ${prop.sqft.toLocaleString()} Sq Ft</span>
                    </div>
                    <div class="property-card-footer">
                        <button class="btn btn-outline btn-sm btn-view-detail" data-id="${prop.id}">
                            View Details <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <button class="btn btn-gold btn-sm btn-schedule-tour" data-id="${prop.id}">
                            <i class="fa-solid fa-calendar-check"></i> Private Tour
                        </button>
                    </div>
                </div>
            `;
            propertiesGrid.appendChild(card);
        });

        attachCardEvents();
    }

    // Attach Event Handlers to Rendered Cards
    function attachCardEvents() {
        // Favorite Hearts
        document.querySelectorAll('.card-fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                if (favorites.has(id)) {
                    favorites.delete(id);
                    btn.classList.remove('favorited');
                    btn.querySelector('i').className = 'fa-regular fa-heart';
                } else {
                    favorites.add(id);
                    btn.classList.add('favorited');
                    btn.querySelector('i').className = 'fa-solid fa-heart';
                }
                updateFavBadge();
            });
        });

        // View Details & Tour Triggers
        document.querySelectorAll('.btn-view-detail').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                openPropertyDetail(id);
            });
        });

        document.querySelectorAll('.btn-schedule-tour').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                openPropertyDetail(id, true);
            });
        });
    }

    // Filter Logic
    function filterAndRender() {
        const locationVal = document.getElementById('filterLocation')?.value || '';
        const typeVal = document.getElementById('filterType')?.value || '';
        const minPriceVal = parseInt(document.getElementById('filterMinPrice')?.value) || 0;
        const maxPriceVal = parseInt(document.getElementById('filterMaxPrice')?.value) || Infinity;
        const bedsVal = parseInt(document.getElementById('filterBeds')?.value) || 0;
        const bathsVal = parseInt(document.getElementById('filterBaths')?.value) || 0;
        const minSqftVal = parseInt(document.getElementById('filterMinSqft')?.value) || 0;
        const sortVal = sortSelect?.value || 'featured';

        let filtered = propertiesData.filter(item => {
            if (currentStatus !== 'all' && item.status !== currentStatus) return false;
            if (locationVal && item.location !== locationVal) return false;
            if (typeVal && item.type !== typeVal) return false;
            if (item.price < minPriceVal) return false;
            if (item.price > maxPriceVal) return false;
            if (bedsVal && item.beds < bedsVal) return false;
            if (bathsVal && item.baths < bathsVal) return false;
            if (minSqftVal && item.sqft < minSqftVal) return false;
            return true;
        });

        // Sorting
        if (sortVal === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortVal === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortVal === 'sqft-desc') {
            filtered.sort((a, b) => b.sqft - a.sqft);
        } else if (sortVal === 'featured') {
            filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }

        renderProperties(filtered);
    }

    function resetFilters() {
        if (searchForm) searchForm.reset();
        currentStatus = 'buy';
        searchTabs.forEach(t => {
            if (t.getAttribute('data-status') === 'buy') t.classList.add('active');
            else t.classList.remove('active');
        });
        filterAndRender();
    }

    if (searchForm) {
        searchForm.addEventListener('change', filterAndRender);
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            filterAndRender();
            // Smooth scroll to results
            document.getElementById('properties-section')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', resetFilters);
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndRender);
    }

    // Initial Render
    filterAndRender();

    // 4. PROPERTY DETAIL MODAL
    const propertyModal = document.getElementById('propertyDetailModal');
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

    function openPropertyDetail(id, focusTour = false) {
        const prop = propertiesData.find(p => p.id === id);
        if (!prop || !propertyModal) return;

        const agent = agentsData.find(a => a.id === prop.agentId) || agentsData[0];

        document.getElementById('modalDetailImg').src = prop.image;
        document.getElementById('modalDetailPrice').innerText = prop.formattedPrice;
        document.getElementById('modalDetailTitle').innerText = prop.title;
        document.getElementById('modalDetailAddress').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${prop.address}`;
        document.getElementById('modalDetailBeds').innerText = `${prop.beds} Beds`;
        document.getElementById('modalDetailBaths').innerText = `${prop.baths} Baths`;
        document.getElementById('modalDetailSqft').innerText = `${prop.sqft.toLocaleString()} Sq Ft`;
        document.getElementById('modalDetailType').innerText = prop.type;
        document.getElementById('modalDetailDesc').innerText = prop.desc;

        // Amenities Checklist
        const amenitiesList = document.getElementById('modalDetailAmenities');
        if (amenitiesList) {
            amenitiesList.innerHTML = prop.amenities.map(a => `<li><i class="fa-solid fa-circle-check"></i> ${a}</li>`).join('');
        }

        // Agent Info
        document.getElementById('modalAgentName').innerText = agent.name;
        document.getElementById('modalAgentRole').innerText = agent.role;
        document.getElementById('modalAgentPhoto').src = agent.photo;
        document.getElementById('modalAgentPhone').innerText = agent.phone;
        document.getElementById('modalAgentPhone').href = `tel:${agent.phone.replace(/[^0-9+]/g, '')}`;
        document.getElementById('modalAgentEmail').innerText = agent.email;
        document.getElementById('modalAgentEmail').href = `mailto:${agent.email}`;
        document.getElementById('modalTourPropTitle').value = `${prop.title} (${prop.formattedPrice})`;

        propertyModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (focusTour) {
            setTimeout(() => {
                document.getElementById('tourBookingForm')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }

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

    // 5. TOUR BOOKING & CONSULTATION FORMS
    const tourBookingForm = document.getElementById('tourBookingForm');
    const consultationForm = document.getElementById('consultationForm');
    const confirmationModal = document.getElementById('confirmationModal');

    function handleSubmission(e, messageTitle, messageBody) {
        e.preventDefault();
        if (propertyModal) propertyModal.classList.remove('active');
        if (confirmationModal) {
            document.getElementById('confirmModalTitle').innerText = messageTitle;
            document.getElementById('confirmModalBody').innerText = messageBody;
            confirmationModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        e.target.reset();
    }

    if (tourBookingForm) {
        tourBookingForm.addEventListener('submit', (e) => {
            handleSubmission(e, "Private Tour Scheduled", "Your private showing appointment has been requested. Elena Rostova or the designated estate advisor will reach out to confirm your security clearance and arrival window.");
        });
    }

    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            handleSubmission(e, "Consultation Inquiry Received", "Thank you for contacting Aurelia Estates. Our private advisory desk has received your request and will provide a confidential portfolio review within 2 business hours.");
        });
    }

    // 6. NEIGHBORHOOD CARD CLICKS
    document.querySelectorAll('.neighborhood-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const neighborhood = card.getAttribute('data-neighborhood');
            const locationSelect = document.getElementById('filterLocation');
            if (locationSelect && neighborhood) {
                locationSelect.value = neighborhood;
                filterAndRender();
                document.getElementById('properties-section')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 7. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }
});
