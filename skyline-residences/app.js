/**
 * SKYLINE RESIDENCES — 111 CENTRAL PARK SOUTH, NEW YORK, NY
 * Ultra-Luxury Manhattan Residential Skyscraper Platform
 * Engine & 60-Floor Interactive Controller
 * Author: Girdhari Choyal (@gchoyal_websitedeveloper)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. 20 ULTRA-LUXURY MANHATTAN RESIDENCES DATABASE
    // =========================================================================
    const unitsData = [
        // THE SKY PENTHOUSES & TRIPLEX MANSIONS (Floors 51 - 60)
        {
            id: 'ph-6001',
            unitNumber: 'The Triplex Crown Penthouse',
            floor: 60,
            tier: 'The Sky Penthouses',
            tierCode: 'penthouse',
            type: 'penthouse',
            typeLabel: 'Three-Story Triplex Sky Mansion',
            beds: 6,
            baths: 7.5,
            sqft: 10500,
            price: 65000000,
            view: 'Unobstructed 360° Panorama (Full Central Park & Both Rivers)',
            ceilingHeight: '18 ft Soaring Double-Height',
            balconySqft: 1450,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'The crowning architectural masterpiece of Manhattan. Occupying the entire top three floors of the tower with private cantilevered glass rooftop pool, internal sculptural bronze staircase, private key-locked elevators, and full Central Park views.',
            features: ['Private Rooftop Heated Glass Infinity Pool & Solarium', 'Double-Height 32 ft Great Hall with Wood-Burning Fireplaces', 'Dual Primary Wing Galleries with Calacatta Gold Slab Baths', 'Private Temperature-Controlled 1,000-Bottle Wine Vault', 'Dedicated Staff Quarters & Commercial Catering Scullery']
        },
        {
            id: 'ph-5801',
            unitNumber: 'Penthouse 58 — Central Park Crown',
            floor: 58,
            tier: 'The Sky Penthouses',
            tierCode: 'penthouse',
            type: 'penthouse',
            typeLabel: 'Full-Floor Sky Penthouse',
            beds: 5,
            baths: 5.5,
            sqft: 7200,
            price: 48500000,
            view: 'Direct Central Park North & Midtown Skyline South',
            ceilingHeight: '15 ft Single-Slab',
            balconySqft: 680,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            description: 'A full-floor aerie framed by 80 feet of continuous Central Park frontage. Features private elevator vestibule, custom Molteni&C Dada kitchen, and midnight cocktail terrace.',
            features: ['80 ft Direct Central Park North Frontage', 'Full-Floor Privacy with Dual Key-Locked High-Speed Elevators', 'Custom Poliform Italian Dressing Suites', 'Zero-Threshold Architectural Bronze Loggia Sliders']
        },
        {
            id: 'ph-5501',
            unitNumber: 'Penthouse 55 — Sunset Duplex',
            floor: 55,
            tier: 'The Sky Penthouses',
            tierCode: 'penthouse',
            type: 'penthouse',
            typeLabel: 'Two-Story Duplex Penthouse',
            beds: 4,
            baths: 4.5,
            sqft: 5800,
            price: 38000000,
            view: 'West Sunset (Hudson River) & South Midtown',
            ceilingHeight: '14 ft',
            balconySqft: 450,
            availability: 'Reserved',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Dramatic two-level duplex penthouse capturing golden-hour sunsets over the Hudson River and glittering night views of the Empire State Building.',
            features: ['Double-Height Sunset Living Salon', 'Sculptural Floating Travertine Staircase', 'Custom Sub-Zero & Gaggenau Grand Kitchen', 'Lutron Homeworks Smart Architectural Lighting']
        },
        {
            id: 'ph-5201',
            unitNumber: 'Residence 52A — Park View Penthouse',
            floor: 52,
            tier: 'The Sky Penthouses',
            tierCode: 'penthouse',
            type: '4bed',
            typeLabel: 'Corner Penthouse Residence',
            beds: 4,
            baths: 4.5,
            sqft: 4650,
            price: 29500000,
            view: 'Direct Central Park & East River Sunrise',
            ceilingHeight: '14 ft',
            balconySqft: 320,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            description: 'Corner penthouse with expansive gallery foyer, north-facing formal dining salon overlooking the reservoir, and private library with custom bronze shelving.',
            features: ['Corner Dual-Exposure Living & Dining Salons', 'Floor-to-Ceiling Thermal Acoustic Glass Curtain Wall', 'Dornbracht Platinum Matte Fixtures Throughout', 'Chevron-Patterned European White Oak Flooring']
        },

        // THE TOWER RESIDENCES (Floors 31 - 50)
        {
            id: 'unit-4801',
            unitNumber: 'Residence 48A',
            floor: 48,
            tier: 'The Tower Residences',
            tierCode: 'tower',
            type: '4bed',
            typeLabel: 'Tower 4-Bedroom Estate',
            beds: 4,
            baths: 4.5,
            sqft: 4100,
            price: 22500000,
            view: 'Direct Central Park & Midtown South',
            ceilingHeight: '13 ft',
            balconySqft: 220,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
            description: 'Generous half-floor tower home with uninterrupted Central Park vistas, split bedroom wing for privacy, and sound-insulated acoustic glazing.',
            features: ['Direct Central Park Panorama', 'Private Service Entrance for Deliveries', 'Calacatta Paonazzo Marble Kitchen Island', 'Zoned Circadian Smart LED Lighting']
        },
        {
            id: 'unit-4501',
            unitNumber: 'Residence 45B',
            floor: 45,
            tier: 'The Tower Residences',
            tierCode: 'tower',
            type: '3bed',
            typeLabel: 'Tower 3-Bedroom Corner',
            beds: 3,
            baths: 3.5,
            sqft: 3350,
            price: 18200000,
            view: 'East River Sunrise & Central Park East',
            ceilingHeight: '13 ft',
            balconySqft: 180,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
            description: 'Light-drenched corner home greeting the morning sun over the East River bridges and Central Park East tree line.',
            features: ['Corner Morning Sun Exposure', 'Custom Built-In Marble Wet Bar', 'Walk-In Primary Wardrobe by Rimadesio', 'Underfloor Radiant Heating in all Baths']
        },
        {
            id: 'unit-4001',
            unitNumber: 'Residence 40A',
            floor: 40,
            tier: 'The Tower Residences',
            tierCode: 'tower',
            type: '3bed',
            typeLabel: 'Tower 3-Bedroom Signature',
            beds: 3,
            baths: 3.5,
            sqft: 3150,
            price: 16800000,
            view: 'Central Park North',
            ceilingHeight: '13 ft',
            balconySqft: 150,
            availability: 'Reserved',
            image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
            description: 'Sophisticated 3-bedroom tower layout with formal entry foyer leading into an expansive 30-foot great room centered on Central Park.',
            features: ['30 ft Park-Facing Great Room', 'Miele Diamond Appliance Suite', 'Soaking Tub with Park Views', 'Motorized Blackout & Solar Shades']
        },
        {
            id: 'unit-3601',
            unitNumber: 'Residence 36C',
            floor: 36,
            tier: 'The Tower Residences',
            tierCode: 'tower',
            type: '2bed',
            typeLabel: 'Tower 2-Bedroom + Study',
            beds: 2,
            baths: 2.5,
            sqft: 2450,
            price: 13500000,
            view: 'South Midtown Skyline & Empire State',
            ceilingHeight: '13 ft',
            balconySqft: 120,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
            description: 'Iconic south-facing perspective looking down Avenue of the Americas toward the Empire State Building with private study and powder room.',
            features: ['Empire State Architectural Vistas', 'Custom Walnut Panelled Library / Study', 'Wine Refrigerator & Coffee Bar', 'Keyless Biometric Entry Lock']
        },
        {
            id: 'unit-3301',
            unitNumber: 'Residence 33A',
            floor: 33,
            tier: 'The Tower Residences',
            tierCode: 'tower',
            type: '3bed',
            typeLabel: 'Tower 3-Bedroom Classic',
            beds: 3,
            baths: 3.0,
            sqft: 2950,
            price: 15200000,
            view: 'Central Park & Hudson River',
            ceilingHeight: '13 ft',
            balconySqft: 140,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            description: 'Dual-aspect residence balancing tranquil Central Park greenery with dramatic western water views.',
            features: ['Dual Park & River Exposures', 'Gaggenau 36-Inch Induction Cooktop', 'Lutron Palladiom Thermostats', 'Sound-Isolated Primary Suite']
        },

        // THE CENTRAL PARK SUITES (Floors 16 - 30)
        {
            id: 'unit-3001',
            unitNumber: 'Residence 30A',
            floor: 30,
            tier: 'The Central Park Suites',
            tierCode: 'suites',
            type: '3bed',
            typeLabel: 'Parkside 3-Bedroom Suite',
            beds: 3,
            baths: 3.0,
            sqft: 2800,
            price: 12900000,
            view: 'Direct Central Park Tree Line',
            ceilingHeight: '12 ft',
            balconySqft: 110,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
            description: 'Level 30 positioning offers intimate treetop connection to Central Park while clearing surrounding buildings for expansive sky light.',
            features: ['Eye-Level Canopy Connection to Central Park', 'Custom Poliform Kitchen Island', 'Freestanding Stone Soaking Tub', 'Full-Size Vented Laundry Room']
        },
        {
            id: 'unit-2701',
            unitNumber: 'Residence 27B',
            floor: 27,
            tier: 'The Central Park Suites',
            tierCode: 'suites',
            type: '2bed',
            typeLabel: 'Parkside 2-Bedroom Corner',
            beds: 2,
            baths: 2.5,
            sqft: 2150,
            price: 9800000,
            view: 'Central Park East & Fifth Avenue',
            ceilingHeight: '12 ft',
            balconySqft: 95,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
            description: 'Corner 2-bedroom home overlooking Fifth Avenue luxury row and Central Park South with split bedrooms and private dressing gallery.',
            features: ['Fifth Avenue & Park Views', 'Split Bedroom Privacy Configuration', 'Custom Italian Millwork Closets', 'En-Suite Marble Baths in Both Bedrooms']
        },
        {
            id: 'unit-2401',
            unitNumber: 'Residence 24C',
            floor: 24,
            tier: 'The Central Park Suites',
            tierCode: 'suites',
            type: '2bed',
            typeLabel: 'Parkside 2-Bedroom Deluxe',
            beds: 2,
            baths: 2.0,
            sqft: 1850,
            price: 8400000,
            view: 'South Midtown Skyline',
            ceilingHeight: '12 ft',
            balconySqft: 80,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Architectural 2-bedroom with floor-to-ceiling glass, linear chef kitchen, and dramatic evening views of the Midtown skyline.',
            features: ['Midtown Architectural Skyline Views', 'Sleek Linear Dada Kitchen with Miele Appliances', 'Acoustic Soundproofing Insulation', 'Smart Climate & Roller Shades']
        },
        {
            id: 'unit-2101',
            unitNumber: 'Residence 21A',
            floor: 21,
            tier: 'The Central Park Suites',
            tierCode: 'suites',
            type: '3bed',
            typeLabel: 'Parkside 3-Bedroom Corner',
            beds: 3,
            baths: 3.5,
            sqft: 2650,
            price: 11800000,
            view: 'Direct Central Park North',
            ceilingHeight: '12 ft',
            balconySqft: 100,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            description: 'Stunning north-facing park home with oversized corner living area and direct access to Level 16 lap pool and wellness spa.',
            features: ['Direct Central Park Exposure', 'Wide-Plank European Chevron Oak Floors', 'Powder Room for Entertaining Guests', 'Direct Private Elevator Access']
        },
        {
            id: 'unit-1801',
            unitNumber: 'Residence 18B',
            floor: 18,
            tier: 'The Central Park Suites',
            tierCode: 'suites',
            type: '1bed',
            typeLabel: 'Executive 1-Bedroom Suite',
            beds: 1,
            baths: 1.5,
            sqft: 1250,
            price: 5600000,
            view: 'Central Park South Treetops',
            ceilingHeight: '12 ft',
            balconySqft: 65,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
            description: 'The ultimate Manhattan pied-à-terre. 1,250 sqft of pure luxury with powder room, walk-in dressing suite, and Central Park views.',
            features: ['Perfect Executive Pied-à-Terre', 'Powder Room for Guests', 'Walk-In Dressing Room with Custom LED Lighting', 'Steps from Level 16 Pool & Athletic Club']
        },

        // THE PODIUM COLLECTION (Floors 01 - 15)
        {
            id: 'unit-1401',
            unitNumber: 'Residence 14A',
            floor: 14,
            tier: 'The Podium Collection',
            tierCode: 'podium',
            type: '2bed',
            typeLabel: 'Podium 2-Bedroom Terrace',
            beds: 2,
            baths: 2.5,
            sqft: 1950,
            price: 7600000,
            view: 'Central Park & Courtyard Gardens',
            ceilingHeight: '11.5 ft',
            balconySqft: 280,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
            description: 'Features an expansive 280 sqft private landscaped stone terrace overlooking the private courtyard garden and Central Park.',
            features: ['Oversized 280 sqft Private Landscaped Terrace', 'Seamless Indoor/Outdoor Entertaining', 'Custom Italian Kitchen with Wine Cooler', 'Adjoining Private Library / Den']
        },
        {
            id: 'unit-1101',
            unitNumber: 'Residence 11B',
            floor: 11,
            tier: 'The Podium Collection',
            tierCode: 'podium',
            type: '2bed',
            typeLabel: 'Podium 2-Bedroom Deluxe',
            beds: 2,
            baths: 2.0,
            sqft: 1680,
            price: 6400000,
            view: 'Cityscape & Garden',
            ceilingHeight: '11 ft',
            balconySqft: 75,
            availability: 'Reserved',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
            description: 'Thoughtfully planned two-bedroom residence with warm neutral stone palettes and floor-to-ceiling acoustic glass.',
            features: ['Private Balcony overlooking Garden', 'Poliform Kitchen Island', 'Spa Bathroom with Rain Shower']
        },
        {
            id: 'unit-0801',
            unitNumber: 'Residence 08A',
            floor: 8,
            tier: 'The Podium Collection',
            tierCode: 'podium',
            type: '1bed',
            typeLabel: 'Podium 1-Bedroom + Home Office',
            beds: 1,
            baths: 1.5,
            sqft: 1180,
            price: 4950000,
            view: 'Central Park South Avenue',
            ceilingHeight: '11 ft',
            balconySqft: 60,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
            description: 'Efficient luxury 1-bedroom with dedicated glass-enclosed home office, guest powder room, and high ceilings.',
            features: ['Separate Glass-Enclosed Home Office', 'Powder Room for Guests', 'Integrated Bosch/Miele Kitchen']
        },
        {
            id: 'unit-0501',
            unitNumber: 'Residence 05C',
            floor: 5,
            tier: 'The Podium Collection',
            tierCode: 'podium',
            type: '1bed',
            typeLabel: 'Podium 1-Bedroom Suite',
            beds: 1,
            baths: 1.0,
            sqft: 980,
            price: 4200000,
            view: 'Tree-lined Streetscape',
            ceilingHeight: '11 ft',
            balconySqft: 45,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
            description: 'Peaceful treetop residence with custom millwork, marble bath, and quiet courtyard orientation.',
            features: ['Quiet Courtyard Orientation', 'Custom Italian Cabinetry', 'Smart Lock & Climate Control']
        },
        {
            id: 'unit-0301',
            unitNumber: 'Residence 03A',
            floor: 3,
            tier: 'The Podium Collection',
            tierCode: 'podium',
            type: '1bed',
            typeLabel: 'Podium 1-Bedroom Classic',
            beds: 1,
            baths: 1.0,
            sqft: 920,
            price: 3850000,
            view: 'Streetscape & Garden',
            ceilingHeight: '11 ft',
            balconySqft: 40,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            description: 'Elegant starter residence or pied-à-terre with full building amenity privileges and 24/7 white-glove concierge.',
            features: ['Full White-Glove Building Privileges', 'Marble Bath with Deep Soaking Tub', 'Keyless Digital Access']
        },
        {
            id: 'unit-0201',
            unitNumber: 'Maisonette 02 — Townhome Suite',
            floor: 2,
            tier: 'The Podium Collection',
            tierCode: 'podium',
            type: '2bed',
            typeLabel: 'Private Maisonette Duplex',
            beds: 2,
            baths: 2.5,
            sqft: 2350,
            price: 8900000,
            view: 'Private Landscaped Garden',
            ceilingHeight: '13 ft',
            balconySqft: 350,
            availability: 'Available',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Rare private maisonette with independent street-level entrance, 13-foot ceilings, and 350 sqft private walled garden terrace.',
            features: ['Private Street Entrance & Lobby Access', '350 sqft Private Walled English Garden', '13 ft Ceilings with Double-Height Windows']
        }
    ];

    // =========================================================================
    // 2. 60-FLOOR ELEVATION CONTROLLER (Floors 01 - 60)
    // =========================================================================
    const floorStackContainer = document.getElementById('floorStackScroll');
    const activeFloorTitle = document.getElementById('activeFloorTitle');
    const activeFloorTier = document.getElementById('activeFloorTier');
    const activeFloorCeiling = document.getElementById('activeFloorCeiling');
    const activeFloorUnitsCount = document.getElementById('activeFloorUnitsCount');
    const activeFloorHighlights = document.getElementById('activeFloorHighlights');
    const floorUnitsGrid = document.getElementById('floorUnitsGrid');

    let currentFloor = 60; // Default to Top Crown Triplex Penthouse

    function getFloorTierMeta(floorNum) {
        if (floorNum >= 51) {
            return {
                tier: 'The Sky Penthouses',
                code: 'penthouse',
                ceiling: floorNum === 60 ? '18.0 ft' : '15.0 ft',
                unitsCount: floorNum >= 58 ? 1 : 2,
                highlights: 'Double-height great halls, 360° panoramic Central Park & river views, private elevator vestibules'
            };
        } else if (floorNum >= 31) {
            return {
                tier: 'The Tower Residences',
                code: 'tower',
                ceiling: '13.0 ft',
                unitsCount: 2,
                highlights: 'Unobstructed Central Park North and Empire State Midtown South horizons'
            };
        } else if (floorNum >= 16) {
            return {
                tier: 'The Central Park Suites',
                code: 'suites',
                ceiling: '12.0 ft',
                unitsCount: 3,
                highlights: 'Treetop canopy views over Central Park, corner dual-exposure salons'
            };
        } else {
            return {
                tier: 'The Podium Collection',
                code: 'podium',
                ceiling: '11.0 ft',
                unitsCount: 4,
                highlights: 'Private landscaped garden loggias, direct access to building spa and dining salons'
            };
        }
    }

    function init60FloorStack() {
        if (!floorStackContainer) return;
        floorStackContainer.innerHTML = '';

        for (let f = 60; f >= 1; f--) {
            const meta = getFloorTierMeta(f);
            const btn = document.createElement('button');
            btn.className = `floor-item-btn ${f === currentFloor ? 'active' : ''}`;
            btn.setAttribute('data-floor', f);
            btn.setAttribute('aria-label', `Select Floor ${f}`);

            const numFmt = f < 10 ? `0${f}` : `${f}`;

            btn.innerHTML = `
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="tier-indicator ${meta.code}"></span>
                    <span class="floor-num-tag">${numFmt}</span>
                    <span style="font-size:0.8rem; font-weight:600;">${f >= 51 ? 'PH Level ' + numFmt : 'Floor ' + numFmt}</span>
                </div>
                <span style="font-size:0.7rem; color:var(--text-light); text-transform:uppercase; font-weight:700;">${meta.unitsCount} ${meta.unitsCount === 1 ? 'Mansion' : 'Residences'}</span>
            `;

            btn.addEventListener('click', () => {
                selectFloor(f);
            });

            floorStackContainer.appendChild(btn);
        }

        renderFloorDetails(currentFloor);
    }

    function selectFloor(floorNum) {
        currentFloor = floorNum;

        // Update active class
        const allBtns = floorStackContainer.querySelectorAll('.floor-item-btn');
        allBtns.forEach(btn => {
            if (parseInt(btn.getAttribute('data-floor')) === floorNum) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        renderFloorDetails(floorNum);
    }

    function renderFloorDetails(floorNum) {
        const meta = getFloorTierMeta(floorNum);
        const numFmt = floorNum < 10 ? `0${floorNum}` : `${floorNum}`;

        if (activeFloorTitle) activeFloorTitle.textContent = floorNum >= 51 ? `Sky Penthouse Level ${numFmt}` : `Tower Level ${numFmt}`;
        if (activeFloorTier) activeFloorTier.textContent = meta.tier;
        if (activeFloorCeiling) activeFloorCeiling.textContent = meta.ceiling;
        if (activeFloorUnitsCount) activeFloorUnitsCount.textContent = `${meta.unitsCount} Luxury Unit(s)`;
        if (activeFloorHighlights) activeFloorHighlights.textContent = meta.highlights;

        // Match units on this floor or matching tier
        let matched = unitsData.filter(u => u.floor === floorNum);
        if (matched.length === 0) {
            matched = unitsData.filter(u => u.tierCode === meta.code).slice(0, 2);
        }

        if (!floorUnitsGrid) return;
        floorUnitsGrid.innerHTML = '';

        matched.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'skyline-unit-card';

            const priceFmt = `$${(unit.price / 1000000).toFixed(1)}M`;
            const statusClass = unit.availability.toLowerCase();

            card.innerHTML = `
                <div>
                    <div class="skyline-card-header">
                        <div>
                            <div class="unit-number-title">${unit.unitNumber}</div>
                            <div style="font-size:0.8rem; color:var(--gold-primary); font-weight:700;">${unit.typeLabel}</div>
                        </div>
                        <span class="unit-status-pill ${statusClass}">${unit.availability}</span>
                    </div>

                    <div class="blueprint-thumb-box">
                        ${getFloorPlanSvg(unit.type, unit.unitNumber, unit.sqft)}
                    </div>

                    <div class="unit-specs-strip">
                        <div class="unit-spec-cell">
                            <div class="val">${unit.beds} Beds</div>
                            <div class="lbl">Bedrooms</div>
                        </div>
                        <div class="unit-spec-cell">
                            <div class="val">${unit.baths} Baths</div>
                            <div class="lbl">Bathrooms</div>
                        </div>
                        <div class="unit-spec-cell">
                            <div class="val">${unit.sqft.toLocaleString()}</div>
                            <div class="lbl">Interior SqFt</div>
                        </div>
                    </div>

                    <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:1rem; line-height:1.4;">
                        <strong style="color:var(--gold-primary);">View:</strong> ${unit.view}
                    </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.8rem; border-top:1px solid var(--border);">
                    <div>
                        <div style="font-size:0.68rem; text-transform:uppercase; color:var(--text-light); font-weight:700;">Offered At</div>
                        <div style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--gold-primary); line-height:1;">${priceFmt}</div>
                    </div>
                    <button class="btn btn-gold btn-sm open-unit-modal-btn" data-unit-id="${unit.id}">
                        View Details <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;

            floorUnitsGrid.appendChild(card);
        });

        attachModalOpenListeners();
    }

    // =========================================================================
    // 3. SVG ARCHITECTURAL BLUEPRINT GENERATOR
    // =========================================================================
    function getFloorPlanSvg(type, unitNumber, sqft) {
        if (type === 'penthouse') {
            return `
            <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="380" height="220" fill="none" stroke="#c4a36e" stroke-width="2.5" rx="3"/>
                <!-- Wraparound Terrace -->
                <path d="M 10 10 L 390 10 L 390 50 L 330 50 L 330 190 L 390 190 L 390 230 L 10 230 Z" fill="#c4a36e" fill-opacity="0.06" stroke="#c4a36e" stroke-dasharray="3,3"/>
                <text x="200" y="32" font-size="9" fill="#c4a36e" font-weight="700" text-anchor="middle" font-family="'Cinzel', serif">WRAPAROUND PARK & RIVER SKY TERRACE</text>
                <!-- Great Hall -->
                <rect x="25" y="55" width="190" height="110" fill="#161d24" stroke="#232c36" stroke-width="1.5"/>
                <text x="120" y="105" font-size="11" fill="#ffffff" font-weight="700" text-anchor="middle" font-family="'Cinzel', serif">DOUBLE-HEIGHT GREAT HALL</text>
                <text x="120" y="122" font-size="8.5" fill="#8d9aa8" text-anchor="middle">38' x 24' • 18' Ceiling Height</text>
                <!-- Chef Kitchen -->
                <rect x="25" y="170" width="190" height="50" fill="#1c242d" stroke="#232c36" stroke-width="1.5"/>
                <text x="120" y="198" font-size="9.5" fill="#c4a36e" font-weight="700" text-anchor="middle">MOLTENI&C DADA KITCHEN & SCULLERY</text>
                <!-- Primary Wing -->
                <rect x="225" y="55" width="150" height="95" fill="#161d24" stroke="#232c36" stroke-width="1.5"/>
                <text x="300" y="98" font-size="10" fill="#ffffff" font-weight="700" text-anchor="middle" font-family="'Cinzel', serif">PRIMARY SUITE WING</text>
                <!-- Spa Bath -->
                <rect x="225" y="155" width="150" height="65" fill="#10151a" stroke="#232c36" stroke-width="1.5"/>
                <text x="300" y="190" font-size="9" fill="#c4a36e" font-weight="700" text-anchor="middle">CALACATTA GOLD SPA BATH</text>
            </svg>`;
        } else if (type === '4bed' || type === '3bed') {
            return `
            <svg viewBox="0 0 380 230" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="350" height="200" fill="none" stroke="#c4a36e" stroke-width="2" rx="3"/>
                <!-- Loggia -->
                <rect x="240" y="25" width="115" height="40" fill="#c4a36e" fill-opacity="0.05" stroke="#c4a36e" stroke-dasharray="3,3"/>
                <text x="297" y="48" font-size="8.5" fill="#c4a36e" font-weight="700" text-anchor="middle">PRIVATE LOGGIA</text>
                <!-- Living Salon -->
                <rect x="25" y="25" width="205" height="110" fill="#161d24" stroke="#232c36" stroke-width="1.5"/>
                <text x="127" y="75" font-size="11" fill="#ffffff" font-weight="700" text-anchor="middle" font-family="'Cinzel', serif">PARK VIEW SALON</text>
                <text x="127" y="92" font-size="8.5" fill="#8d9aa8" text-anchor="middle">30' x 20' • 14' Ceilings</text>
                <!-- Kitchen -->
                <rect x="25" y="140" width="205" height="65" fill="#1c242d" stroke="#232c36" stroke-width="1.5"/>
                <text x="127" y="175" font-size="9.5" fill="#c4a36e" font-weight="700" text-anchor="middle">CHEF KITCHEN & ISLAND</text>
                <!-- Primary Bed -->
                <rect x="240" y="75" width="115" height="65" fill="#161d24" stroke="#232c36" stroke-width="1.5"/>
                <text x="297" y="110" font-size="9.5" fill="#ffffff" font-weight="700" text-anchor="middle">PRIMARY SUITE</text>
                <!-- Bed 2 -->
                <rect x="240" y="145" width="115" height="60" fill="#10151a" stroke="#232c36" stroke-width="1.5"/>
                <text x="297" y="178" font-size="9" fill="#8d9aa8" font-weight="600" text-anchor="middle">BEDROOM SUITES</text>
            </svg>`;
        } else {
            // 2bed / 1bed
            return `
            <svg viewBox="0 0 360 210" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="330" height="180" fill="none" stroke="#c4a36e" stroke-width="2" rx="3"/>
                <!-- Balcony -->
                <rect x="25" y="25" width="110" height="35" fill="#c4a36e" fill-opacity="0.05" stroke="#c4a36e" stroke-dasharray="3,3"/>
                <text x="80" y="47" font-size="8.5" fill="#c4a36e" font-weight="700" text-anchor="middle">OUTDOOR LOGGIA</text>
                <!-- Living / Dining -->
                <rect x="25" y="65" width="150" height="120" fill="#161d24" stroke="#232c36" stroke-width="1.5"/>
                <text x="100" y="115" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle" font-family="'Cinzel', serif">LIVING SALON</text>
                <!-- Primary Bed -->
                <rect x="185" y="25" width="150" height="95" fill="#161d24" stroke="#232c36" stroke-width="1.5"/>
                <text x="260" y="72" font-size="10" fill="#ffffff" font-weight="700" text-anchor="middle">PRIMARY SUITE</text>
                <!-- Kitchen & Bath -->
                <rect x="185" y="125" width="150" height="60" fill="#1c242d" stroke="#232c36" stroke-width="1.5"/>
                <text x="260" y="158" font-size="9" fill="#c4a36e" font-weight="700" text-anchor="middle">DADA KITCHEN & SPA BATH</text>
            </svg>`;
        }
    }

    // =========================================================================
    // 4. RESIDENCES MATRIX & TIER FILTER
    // =========================================================================
    const tierTabBtns = document.querySelectorAll('.tier-tab-btn');
    const residencesMatrixGrid = document.getElementById('residencesMatrixGrid');

    function renderResidencesMatrix(filterTier = 'all') {
        if (!residencesMatrixGrid) return;
        residencesMatrixGrid.innerHTML = '';

        const filtered = filterTier === 'all'
            ? unitsData
            : unitsData.filter(u => u.type === filterTier || u.tierCode === filterTier);

        filtered.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'residence-full-card';

            const priceFmt = `$${unit.price.toLocaleString()}`;
            const featuresHtml = unit.features.slice(0, 3).map(f => `<li style="font-size:0.84rem; color:var(--text-muted); display:flex; align-items:flex-start; gap:8px;"><i class="fa-solid fa-check text-gold" style="margin-top:3px;"></i> ${f}</li>`).join('');

            card.innerHTML = `
                <div class="residence-media-holder">
                    <img src="${unit.image}" alt="${unit.unitNumber}" loading="lazy">
                    <span class="residence-tier-badge">${unit.tier}</span>
                </div>
                <div class="residence-card-body">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:0.4rem;">
                            <h3 style="font-family:var(--font-heading); font-size:1.35rem; color:#ffffff; font-weight:700;">${unit.unitNumber}</h3>
                            <div style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--gold-primary);">${priceFmt}</div>
                        </div>
                        <div style="font-size:0.82rem; color:var(--gold-primary); font-weight:700; margin-bottom:0.8rem;">
                            ${unit.typeLabel} • Level ${unit.floor} • ${unit.ceilingHeight} Ceilings
                        </div>
                        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:1rem;">
                            ${unit.description}
                        </p>

                        <div class="unit-specs-strip">
                            <div class="unit-spec-cell">
                                <div class="val">${unit.beds} Beds</div>
                                <div class="lbl">Bedrooms</div>
                            </div>
                            <div class="unit-spec-cell">
                                <div class="val">${unit.baths} Baths</div>
                                <div class="lbl">Bathrooms</div>
                            </div>
                            <div class="unit-spec-cell">
                                <div class="val">${unit.sqft.toLocaleString()}</div>
                                <div class="lbl">Interior Area</div>
                            </div>
                        </div>

                        <ul style="list-style:none; display:flex; flex-direction:column; gap:6px; margin-bottom:1.5rem;">
                            ${featuresHtml}
                        </ul>
                    </div>

                    <div style="display:flex; gap:10px;">
                        <button class="btn btn-outline-gold btn-sm open-unit-modal-btn" data-unit-id="${unit.id}" style="flex:1;">
                            <i class="fa-solid fa-compass-drafting"></i> Floor Plan
                        </button>
                        <button class="btn btn-gold btn-sm open-appointment-btn" data-unit-number="${unit.unitNumber}" style="flex:1;">
                            <i class="fa-solid fa-calendar-check"></i> Inquire
                        </button>
                    </div>
                </div>
            `;

            residencesMatrixGrid.appendChild(card);
        });

        attachModalOpenListeners();
    }

    if (tierTabBtns.length > 0) {
        tierTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tierTabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tier = btn.getAttribute('data-tier');
                renderResidencesMatrix(tier);
            });
        });
    }

    // =========================================================================
    // 5. 360° MANHATTAN HORIZON VIEW SWITCHER
    // =========================================================================
    const viewsData = [
        {
            id: 'v-north',
            title: 'Central Park North Panorama',
            description: 'Unobstructed direct vista stretching across the entire 843-acre expanse of Central Park to the Harlem River and George Washington Bridge.',
            elevation: 'Floor 58 (850 ft Elevation)',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'v-south',
            title: 'Midtown & Empire State South',
            description: 'Dramatic architectural perspective looking down the canyon of Avenue of the Americas framing the Empire State Building, Chrysler Building, and Freedom Tower.',
            elevation: 'Floor 52 (780 ft Elevation)',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'v-west',
            title: 'Hudson River Golden Sunset',
            description: 'Sweeping western orientation capturing sunset reflections off the Hudson River, Lincoln Center, and the hills of New Jersey.',
            elevation: 'Floor 55 (820 ft Elevation)',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'v-east',
            title: 'East River & Queensboro Bridges',
            description: 'Early morning sunrise perspectives framing the historic steel arches of the Queensboro Bridge, Roosevelt Island tram, and Long Island Sound.',
            elevation: 'Floor 45 (680 ft Elevation)',
            image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80'
        }
    ];

    const viewTabBtns = document.querySelectorAll('.view-tab-btn');
    const viewDisplayImg = document.getElementById('viewDisplayImg');
    const viewCaptionTitle = document.getElementById('viewCaptionTitle');
    const viewCaptionDesc = document.getElementById('viewCaptionDesc');
    const viewCaptionElevation = document.getElementById('viewCaptionElevation');

    if (viewTabBtns.length > 0) {
        viewTabBtns.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                viewTabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const v = viewsData[idx];
                if (viewDisplayImg) viewDisplayImg.src = v.image;
                if (viewCaptionTitle) viewCaptionTitle.textContent = v.title;
                if (viewCaptionDesc) viewCaptionDesc.textContent = v.description;
                if (viewCaptionElevation) viewCaptionElevation.textContent = v.elevation;
            });
        });
    }

    // =========================================================================
    // 6. UNIT DETAIL & BLUEPRINT MODAL
    // =========================================================================
    const unitDetailModal = document.getElementById('unitDetailModal');
    const modalUnitTitle = document.getElementById('modalUnitTitle');
    const modalUnitTier = document.getElementById('modalUnitTier');
    const modalUnitSvg = document.getElementById('modalUnitSvg');
    const modalSpecPrice = document.getElementById('modalSpecPrice');
    const modalSpecSqft = document.getElementById('modalSpecSqft');
    const modalSpecBeds = document.getElementById('modalSpecBeds');
    const modalSpecBaths = document.getElementById('modalSpecBaths');
    const modalSpecCeiling = document.getElementById('modalSpecCeiling');
    const modalSpecBalcony = document.getElementById('modalSpecBalcony');
    const modalSpecView = document.getElementById('modalSpecView');
    const modalSpecAvailability = document.getElementById('modalSpecAvailability');
    const modalFeaturesList = document.getElementById('modalFeaturesList');
    const modalAppointmentBtn = document.getElementById('modalAppointmentBtn');

    function openUnitDetail(unitId) {
        const unit = unitsData.find(u => u.id === unitId);
        if (!unit || !unitDetailModal) return;

        if (modalUnitTitle) modalUnitTitle.textContent = unit.unitNumber;
        if (modalUnitTier) modalUnitTier.textContent = `${unit.tier} • ${unit.typeLabel}`;
        if (modalUnitSvg) modalUnitSvg.innerHTML = getFloorPlanSvg(unit.type, unit.unitNumber, unit.sqft);

        if (modalSpecPrice) modalSpecPrice.textContent = `$${unit.price.toLocaleString()}`;
        if (modalSpecSqft) modalSpecSqft.textContent = `${unit.sqft.toLocaleString()} Sq. Ft.`;
        if (modalSpecBeds) modalSpecBeds.textContent = `${unit.beds} Bedroom(s)`;
        if (modalSpecBaths) modalSpecBaths.textContent = `${unit.baths} Bathroom(s)`;
        if (modalSpecCeiling) modalSpecCeiling.textContent = unit.ceilingHeight;
        if (modalSpecBalcony) modalSpecBalcony.textContent = `${unit.balconySqft} Sq. Ft. Loggia`;
        if (modalSpecView) modalSpecView.textContent = unit.view;
        if (modalSpecAvailability) modalSpecAvailability.innerHTML = `<span class="unit-status-pill ${unit.availability.toLowerCase()}">${unit.availability}</span>`;

        if (modalFeaturesList) {
            modalFeaturesList.innerHTML = unit.features.map(f => `<li style="font-size:0.86rem; color:var(--text-muted); display:flex; align-items:flex-start; gap:8px;"><i class="fa-solid fa-circle-check text-gold" style="margin-top:3px;"></i> ${f}</li>`).join('');
        }

        if (modalAppointmentBtn) {
            modalAppointmentBtn.onclick = () => {
                unitDetailModal.classList.remove('active');
                openAppointmentModalPrefilled(unit.unitNumber);
            };
        }

        unitDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function attachModalOpenListeners() {
        document.querySelectorAll('.open-unit-modal-btn').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-unit-id');
                openUnitDetail(id);
            };
        });

        document.querySelectorAll('.open-appointment-btn').forEach(btn => {
            btn.onclick = () => {
                const num = btn.getAttribute('data-unit-number');
                openAppointmentModalPrefilled(num);
            };
        });
    }

    // =========================================================================
    // 7. PRIVATE SALES APPOINTMENT & INQUIRY MODALS
    // =========================================================================
    const appointmentModal = document.getElementById('appointmentModal');
    const appointmentTargetUnit = document.getElementById('appointmentTargetUnit');
    const appointmentForm = document.getElementById('appointmentForm');
    const skylineThankYouModal = document.getElementById('skylineThankYouModal');

    function openAppointmentModalPrefilled(unitNumber) {
        if (appointmentTargetUnit && unitNumber) {
            appointmentTargetUnit.value = unitNumber;
        }
        if (appointmentModal) {
            appointmentModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    document.querySelectorAll('.trigger-appointment-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (appointmentModal) {
                appointmentModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (appointmentModal) appointmentModal.classList.remove('active');
            if (skylineThankYouModal) skylineThankYouModal.classList.add('active');
            appointmentForm.reset();
        });
    }

    const contactSectionForm = document.getElementById('contactSectionForm');
    if (contactSectionForm) {
        contactSectionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (skylineThankYouModal) skylineThankYouModal.classList.add('active');
            contactSectionForm.reset();
        });
    }

    // Modal Close Triggers
    document.querySelectorAll('.modal-close-btn, .modal-close-trigger').forEach(btn => {
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

    // =========================================================================
    // 8. MOBILE NAV DRAWER
    // =========================================================================
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

    // Initialize Everything
    init60FloorStack();
    renderResidencesMatrix('all');
});
