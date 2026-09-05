/**
 * VERDE HEIGHTS RESIDENCES — AUSTIN, TEXAS
 * High-Rise Architectural Luxury Residential Platform
 * Engine & Interactive Logic
 * Author: Girdhari Choyal (@gchoyal_websitedeveloper)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. UNIT & BUILDING ELEVATION DATABASE (Floors 01 - 20)
    // =========================================================================
    const unitsData = [
        // PENTHOUSE TIER (Floors 19 - 20)
        {
            id: 'ph-2001',
            unitNumber: 'PH-2001',
            floor: 20,
            tier: 'Grand Penthouse',
            tierCode: 'ph',
            type: 'penthouse',
            typeLabel: 'Grand Sky Penthouse',
            beds: 4,
            baths: 4.5,
            sqft: 3850,
            price: 18500,
            availability: 'Available',
            exposure: 'Panoramic 360° (Downtown Skyline & Lady Bird Lake)',
            ceilingHeight: '12 ft',
            terraceSqft: 620,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'The pinnacle of Austin living occupying the entire south-facing crown of Verde Heights with private elevator vestibule, wraparound limestone terrace, and custom Poliform Italian kitchen.',
            features: ['Private Elevator Entry', 'Wraparound 620 sqft Terrace', 'Sub-Zero & Wolf Appliance Suite', 'Dual Primary Walk-In Dressing Rooms', 'Automated Lutron Motorized Shades', 'Private Temperature-Controlled Wine Room']
        },
        {
            id: 'ph-2002',
            unitNumber: 'PH-2002',
            floor: 20,
            tier: 'Grand Penthouse',
            tierCode: 'ph',
            type: 'penthouse',
            typeLabel: 'North Skyline Penthouse',
            beds: 3,
            baths: 3.5,
            sqft: 3100,
            price: 15800,
            availability: 'Reserved',
            exposure: 'North (Downtown Austin Skyline & Capitol)',
            ceilingHeight: '12 ft',
            terraceSqft: 450,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            description: 'Dramatic high-floor penthouse framing the glittering downtown Austin skyline with double-height corner living room and marble waterfall island.',
            features: ['Direct Downtown Skyline Vistas', 'Calacatta Gold Marble Baths', 'Integrated Sonos Architectural Audio', 'Custom Millwork Library', 'Zero-Threshold Balcony Sliders']
        },
        {
            id: 'ph-1901',
            unitNumber: 'PH-1901',
            floor: 19,
            tier: 'Tower Penthouse',
            tierCode: 'ph',
            type: 'penthouse',
            typeLabel: 'Tower Penthouse Suite',
            beds: 3,
            baths: 3.5,
            sqft: 2850,
            price: 14200,
            availability: 'Available',
            exposure: 'South / West (Lady Bird Lake & Sunset Hills)',
            ceilingHeight: '11.5 ft',
            terraceSqft: 380,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'Exceptional sunset exposures over the Texas Hill Country and Lady Bird Lake with expansive deep loggia terrace and spa-inspired primary sanctuary.',
            features: ['Deep Loggia Sunset Terrace', 'Freestanding Soaking Tub with View', 'Miele Gas Range & Induction Dual Cooktop', 'Pre-Wired for Smart Home Automation']
        },
        {
            id: 'ph-1902',
            unitNumber: 'PH-1902',
            floor: 19,
            tier: 'Tower Penthouse',
            tierCode: 'ph',
            type: '3bed',
            typeLabel: 'Executive 3-Bedroom Corner',
            beds: 3,
            baths: 3.0,
            sqft: 2450,
            price: 11500,
            availability: 'Available',
            exposure: 'East / South (Morning Sunrise & River)',
            ceilingHeight: '11.5 ft',
            terraceSqft: 290,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
            description: 'Corner architectural residence with floor-to-ceiling acoustic glass walls capturing morning sunrise over the lake and tranquil parklands.',
            features: ['Corner Dual-Exposure Living', 'Walk-In Butler Pantry', 'Italian Quartz Countertops', 'Engineered European White Oak Flooring']
        },

        // SKY RESIDENCES TIER (Floors 13 - 18)
        {
            id: 'unit-1801',
            unitNumber: 'Unit 1801',
            floor: 18,
            tier: 'Sky Residences',
            tierCode: 'sky',
            type: '3bed',
            typeLabel: 'Sky 3-Bedroom Estate',
            beds: 3,
            baths: 3.0,
            sqft: 2250,
            price: 9200,
            availability: 'Available',
            exposure: 'South (Direct Lakefront Elevation)',
            ceilingHeight: '11 ft',
            terraceSqft: 240,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
            description: 'Generous 3-bedroom layout on floor 18 offering sweeping water views, private foyer, and split bedroom configuration for ultimate privacy.',
            features: ['Unobstructed Lake Views', 'Custom Built-In Bar', 'Motorized Solar Roller Shades', 'Nest Pro Dual Thermostats']
        },
        {
            id: 'unit-1802',
            unitNumber: 'Unit 1802',
            floor: 18,
            tier: 'Sky Residences',
            tierCode: 'sky',
            type: '2bed',
            typeLabel: 'Sky 2-Bedroom Corner',
            beds: 2,
            baths: 2.5,
            sqft: 1480,
            price: 5800,
            availability: 'Available',
            exposure: 'North / East (Skyline & River)',
            ceilingHeight: '11 ft',
            terraceSqft: 180,
            image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
            description: 'Modern two-bedroom corner residence with expansive social living area, open-concept chef kitchen, and private primary balcony.',
            features: ['Corner Glass Living Zone', 'Custom Italian Cabinetry', 'Spacious Primary Walk-In Closet', 'Acoustic Sound Insulation']
        },
        {
            id: 'unit-1701',
            unitNumber: 'Unit 1701',
            floor: 17,
            tier: 'Sky Residences',
            tierCode: 'sky',
            type: '2bed',
            typeLabel: 'Sky 2-Bedroom Terrace',
            beds: 2,
            baths: 2.0,
            sqft: 1390,
            price: 5450,
            availability: 'Model Home',
            exposure: 'South (Lady Bird Lake)',
            ceilingHeight: '11 ft',
            terraceSqft: 160,
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
            description: 'Designer-furnished model residence highlighting Verde Heights bespoke finishes, organic stone accents, and seamless indoor-outdoor living.',
            features: ['Fully Furnished Designer Suite', 'Seamless Glass Railing Terrace', 'Kohler Purist Matte Black Fixtures', 'Keyless Smart Entry']
        },
        {
            id: 'unit-1601',
            unitNumber: 'Unit 1601',
            floor: 16,
            tier: 'Sky Residences',
            tierCode: 'sky',
            type: '2bed',
            typeLabel: 'Sky 2-Bedroom Deluxe',
            beds: 2,
            baths: 2.0,
            sqft: 1320,
            price: 5150,
            availability: 'Available',
            exposure: 'West (Hill Country Sunsets)',
            ceilingHeight: '11 ft',
            terraceSqft: 140,
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
            description: 'Light-filled residence designed for modern entertaining with western sunset views and expansive kitchen island.',
            features: ['Sunset Balcony', 'Wine Beverage Center', 'Full-Sized In-Unit Laundry', 'Smart Climate Control']
        },
        {
            id: 'unit-1501',
            unitNumber: 'Unit 1501',
            floor: 15,
            tier: 'Sky Residences',
            tierCode: 'sky',
            type: '3bed',
            typeLabel: 'Sky 3-Bedroom Signature',
            beds: 3,
            baths: 2.5,
            sqft: 1980,
            price: 7900,
            availability: 'Available',
            exposure: 'South / East',
            ceilingHeight: '11 ft',
            terraceSqft: 210,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Spacious 3-bedroom residence with dedicated home office alcove, floor-to-ceiling glazing, and direct lake views.',
            features: ['Dedicated Work-From-Home Alcove', 'Dornbracht Polished Chrome Fixtures', 'Floor-to-Ceiling Thermal Glass']
        },
        {
            id: 'unit-1402',
            unitNumber: 'Unit 1402',
            floor: 14,
            tier: 'Sky Residences',
            tierCode: 'sky',
            type: '1bed',
            typeLabel: 'Sky 1-Bedroom + Den',
            beds: 1,
            baths: 1.5,
            sqft: 920,
            price: 3900,
            availability: 'Available',
            exposure: 'North (Downtown Skyline)',
            ceilingHeight: '11 ft',
            terraceSqft: 110,
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
            description: 'Sophisticated 1-bedroom plus flexible den/office with breathtaking downtown views and half-bath for guests.',
            features: ['Separate Flex Den / Office Space', 'Powder Room for Guests', 'Porcelain Slab Backsplash', 'High-Speed Fiber Ready']
        },
        {
            id: 'unit-1301',
            unitNumber: 'Unit 1301',
            floor: 13,
            tier: 'Sky Residences',
            tierCode: 'sky',
            type: '1bed',
            typeLabel: 'Sky 1-Bedroom Suite',
            beds: 1,
            baths: 1.0,
            sqft: 850,
            price: 3600,
            availability: 'Available',
            exposure: 'South (Lake View)',
            ceilingHeight: '11 ft',
            terraceSqft: 95,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
            description: 'Efficient luxury 1-bedroom home with direct lake views, spa bath with glass walk-in shower, and private balcony.',
            features: ['Direct Lakefront Balcony', 'Floating Bathroom Vanity', 'Bosch Integrated Dishwasher']
        },

        // CITY VIEW COLLECTION TIER (Floors 07 - 12)
        {
            id: 'unit-1201',
            unitNumber: 'Unit 1201',
            floor: 12,
            tier: 'City View Collection',
            tierCode: 'city',
            type: '2bed',
            typeLabel: 'City 2-Bedroom Residence',
            beds: 2,
            baths: 2.0,
            sqft: 1280,
            price: 4950,
            availability: 'Available',
            exposure: 'North (City Skyline)',
            ceilingHeight: '10.5 ft',
            terraceSqft: 120,
            image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
            description: 'Modern two-bedroom plan showcasing the urban rhythm of Austin with private covered outdoor living space.',
            features: ['Covered Terrace', 'Quartz Island with Seating Bar', 'Custom Closet Organizers']
        },
        {
            id: 'unit-1104',
            unitNumber: 'Unit 1104',
            floor: 11,
            tier: 'City View Collection',
            tierCode: 'city',
            type: 'studio',
            typeLabel: 'Executive Studio Residence',
            beds: 0,
            baths: 1.0,
            sqft: 640,
            price: 2850,
            availability: 'Available',
            exposure: 'East (Morning Light)',
            ceilingHeight: '10.5 ft',
            terraceSqft: 75,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
            description: 'Architecturally maximized studio with separate sleeping alcove, full chef kitchen, and floor-to-ceiling windows.',
            features: ['Private Sleeping Alcove', 'Built-In Credenza & Storage', 'Full Bosch Kitchen', 'Balcony with East Exposure']
        },
        {
            id: 'unit-1002',
            unitNumber: 'Unit 1002',
            floor: 10,
            tier: 'City View Collection',
            tierCode: 'city',
            type: '2bed',
            typeLabel: 'City 2-Bedroom Vista',
            beds: 2,
            baths: 2.0,
            sqft: 1240,
            price: 4850,
            availability: 'Reserved',
            exposure: 'South / West',
            ceilingHeight: '10.5 ft',
            terraceSqft: 130,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            description: 'Balanced 2-bedroom home featuring warm neutral palettes, high-efficiency low-E glass, and covered balcony.',
            features: ['Energy-Efficient Design', 'Frameless Glass Walk-In Shower', 'Smart Lock Access']
        },
        {
            id: 'unit-0902',
            unitNumber: 'Unit 0902',
            floor: 9,
            tier: 'City View Collection',
            tierCode: 'city',
            type: '1bed',
            typeLabel: 'City 1-Bedroom Classic',
            beds: 1,
            baths: 1.0,
            sqft: 810,
            price: 3450,
            availability: 'Available',
            exposure: 'North (Downtown Vistas)',
            ceilingHeight: '10.5 ft',
            terraceSqft: 90,
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
            description: 'Popular 1-bedroom residence with expansive window wall, linear kitchen design, and spacious bedroom suite.',
            features: ['Linear Open Kitchen', 'Walk-In Wardrobe', 'In-Unit Washer/Dryer']
        },
        {
            id: 'unit-0804',
            unitNumber: 'Unit 0804',
            floor: 8,
            tier: 'City View Collection',
            tierCode: 'city',
            type: 'studio',
            typeLabel: 'Urban Studio Suite',
            beds: 0,
            baths: 1.0,
            sqft: 610,
            price: 2650,
            availability: 'Available',
            exposure: 'East (Parklands)',
            ceilingHeight: '10.5 ft',
            terraceSqft: 65,
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
            description: 'Smart urban studio with sleek cabinetry, integrated appliances, and serene treetop views over Austin parklands.',
            features: ['Integrated Panel Appliances', 'Floor-to-Ceiling Windows', 'LVT Hardwood Style Floors']
        },
        {
            id: 'unit-0701',
            unitNumber: 'Unit 0701',
            floor: 7,
            tier: 'City View Collection',
            tierCode: 'city',
            type: '2bed',
            typeLabel: 'City 2-Bedroom Corner',
            beds: 2,
            baths: 2.0,
            sqft: 1310,
            price: 4900,
            availability: 'Available',
            exposure: 'South / East',
            ceilingHeight: '10.5 ft',
            terraceSqft: 145,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Corner layout on floor 7 with dual exposure, split bedrooms, and quick access to building amenity levels.',
            features: ['Split Bedroom Privacy', 'Dual Vanity Primary Bath', 'Subtle Verde Wall Accents']
        },

        // GARDEN FLATS & URBAN TIER (Floors 01 - 06)
        {
            id: 'unit-0601',
            unitNumber: 'Unit 0601',
            floor: 6,
            tier: 'Garden Flats',
            tierCode: 'garden',
            type: '1bed',
            typeLabel: 'Garden 1-Bedroom Terrace',
            beds: 1,
            baths: 1.0,
            sqft: 790,
            price: 3300,
            availability: 'Available',
            exposure: 'South (Canopy & Lake)',
            ceilingHeight: '10 ft',
            terraceSqft: 120,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
            description: 'Overlooks the lush green treetops of the trail with an extended outdoor terrace perfect for al fresco dining.',
            features: ['Oversized 120 sqft Terrace', 'Direct Park Canopy Views', 'Quartz Waterfall Island']
        },
        {
            id: 'unit-0504',
            unitNumber: 'Unit 0504',
            floor: 5,
            tier: 'Garden Flats',
            tierCode: 'garden',
            type: 'studio',
            typeLabel: 'Garden Studio Flat',
            beds: 0,
            baths: 1.0,
            sqft: 590,
            price: 2550,
            availability: 'Available',
            exposure: 'East (Courtyard)',
            ceilingHeight: '10 ft',
            terraceSqft: 60,
            image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
            description: 'Tranquil garden studio facing the private interior landscaped courtyard with floor-to-ceiling glass.',
            features: ['Private Courtyard Outlook', 'Full Tile Backsplash', 'Smart Lighting Controls']
        },
        {
            id: 'unit-0402',
            unitNumber: 'Unit 0402',
            floor: 4,
            tier: 'Garden Flats',
            tierCode: 'garden',
            type: '1bed',
            typeLabel: 'Garden 1-Bedroom Suite',
            beds: 1,
            baths: 1.0,
            sqft: 780,
            price: 3200,
            availability: 'Available',
            exposure: 'North (Tree-lined Avenue)',
            ceilingHeight: '10 ft',
            terraceSqft: 80,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
            description: 'Charming 1-bedroom overlooking the tree-lined pedestrian avenue, steps from neighborhood cafes and boutiques.',
            features: ['Avenue Streetscape View', 'Walk-In Shower', 'Built-In Dining Bar']
        },
        {
            id: 'unit-0301',
            unitNumber: 'Unit 0301',
            floor: 3,
            tier: 'Garden Flats',
            tierCode: 'garden',
            type: '2bed',
            typeLabel: 'Garden 2-Bedroom Terrace',
            beds: 2,
            baths: 2.0,
            sqft: 1260,
            price: 4600,
            availability: 'Reserved',
            exposure: 'South / West (Courtyard & Trail)',
            ceilingHeight: '10 ft',
            terraceSqft: 180,
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
            description: 'Spacious lower-tier residence featuring a dramatic extended 180 sqft terrace immersed in native Texas landscaping.',
            features: ['180 sqft Extended Terrace', 'Direct Courtyard Elevation', 'Dual Primary Closets']
        },
        {
            id: 'unit-0304',
            unitNumber: 'Unit 0304',
            floor: 3,
            tier: 'Garden Flats',
            tierCode: 'garden',
            type: 'studio',
            typeLabel: 'Garden Studio Flat',
            beds: 0,
            baths: 1.0,
            sqft: 580,
            price: 2450,
            availability: 'Available',
            exposure: 'East',
            ceilingHeight: '10 ft',
            terraceSqft: 50,
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
            description: 'Efficient, peaceful garden studio with custom Italian millwork, integrated appliances, and warm natural finishes.',
            features: ['Custom Built-In Storage', 'Soft-Close Cabinets', 'Keyless Digital Access']
        },
        {
            id: 'unit-0202',
            unitNumber: 'Unit 0202',
            floor: 2,
            tier: 'Garden Flats',
            tierCode: 'garden',
            type: '1bed',
            typeLabel: 'Podium 1-Bedroom Flat',
            beds: 1,
            baths: 1.0,
            sqft: 780,
            price: 3150,
            availability: 'Available',
            exposure: 'North',
            ceilingHeight: '10 ft',
            terraceSqft: 75,
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
            description: 'Podium-level residence offering tranquil living and convenient direct access to the 2nd-floor wellness club and coworking lounge.',
            features: ['Adjacent to Wellness Club', 'Quartz Kitchen Island', 'Spa Bathroom']
        },
        {
            id: 'unit-0101',
            unitNumber: 'Unit 0101',
            floor: 1,
            tier: 'Garden Townhome',
            tierCode: 'garden',
            type: '2bed',
            typeLabel: 'Ground Terrace Townhome',
            beds: 2,
            baths: 2.5,
            sqft: 1550,
            price: 5600,
            availability: 'Available',
            exposure: 'South (Private Gated Garden Entry)',
            ceilingHeight: '12 ft',
            terraceSqft: 320,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Rare ground-level architectural townhome with 12-foot ceilings, private gated garden entry, and direct access to Lady Bird Lake Trail.',
            features: ['Private Gated Street Entry', '12 ft Soaring Ceilings', 'Private 320 sqft Gated Courtyard', 'Direct Trail Access']
        }
    ];

    // Floor Metadata (Floors 01 to 20)
    const floorsMeta = [
        { floor: 20, name: 'Grand Penthouse Level', tier: 'Penthouses', code: 'ph', ceiling: '12.0 ft', unitsCount: 2, highlights: 'Wraparound terraces, 360° Austin Skyline views, private elevator vestibules' },
        { floor: 19, name: 'Tower Penthouse Level', tier: 'Penthouses', code: 'ph', ceiling: '11.5 ft', unitsCount: 2, highlights: 'Panoramic sunsets over Texas Hill Country, spa soaking tubs, Wolf appliances' },
        { floor: 18, name: 'Sky Residence 18', tier: 'Sky Residences', code: 'sky', ceiling: '11.0 ft', unitsCount: 3, highlights: 'Expansive 3-bed & corner 2-bed layouts, deep balconies, uninterrupted water views' },
        { floor: 17, name: 'Sky Residence 17', tier: 'Sky Residences', code: 'sky', ceiling: '11.0 ft', unitsCount: 4, highlights: 'Designer-furnished model homes, acoustic glass, seamless indoor/outdoor flow' },
        { floor: 16, name: 'Sky Residence 16', tier: 'Sky Residences', code: 'sky', ceiling: '11.0 ft', unitsCount: 4, highlights: 'Dramatic western sunset exposures, wine beverage coolers, private balconies' },
        { floor: 15, name: 'Sky Residence 15', tier: 'Sky Residences', code: 'sky', ceiling: '11.0 ft', unitsCount: 4, highlights: 'Dedicated work-from-home alcoves, split bedroom suites, custom millwork' },
        { floor: 14, name: 'Sky Residence 14', tier: 'Sky Residences', code: 'sky', ceiling: '11.0 ft', unitsCount: 5, highlights: '1-bed + den configurations, downtown high-rise skyline orientation' },
        { floor: 13, name: 'Sky Residence 13', tier: 'Sky Residences', code: 'sky', ceiling: '11.0 ft', unitsCount: 5, highlights: 'Linear chef kitchens, spa bathrooms, private covered outdoor loggias' },
        { floor: 12, name: 'City Collection 12', tier: 'City View Collection', code: 'city', ceiling: '10.5 ft', unitsCount: 6, highlights: 'Open-concept living rooms, downtown vistas, oversized quartz islands' },
        { floor: 11, name: 'City Collection 11', tier: 'City View Collection', code: 'city', ceiling: '10.5 ft', unitsCount: 6, highlights: 'Executive studios with sleeping alcoves, morning sunrise light' },
        { floor: 10, name: 'City Collection 10', tier: 'City View Collection', code: 'city', ceiling: '10.5 ft', unitsCount: 6, highlights: 'Energy-efficient low-E glass, custom closet systems, smart thermostats' },
        { floor: 9, name: 'City Collection 09', tier: 'City View Collection', code: 'city', ceiling: '10.5 ft', unitsCount: 6, highlights: 'Light-filled 1 & 2 bedroom homes, full-size washer/dryer, high ceilings' },
        { floor: 8, name: 'City Collection 08', tier: 'City View Collection', code: 'city', ceiling: '10.5 ft', unitsCount: 7, highlights: 'Urban studio suites, integrated Bosch panel appliances, balcony views' },
        { floor: 7, name: 'City Collection 07', tier: 'City View Collection', code: 'city', ceiling: '10.5 ft', unitsCount: 7, highlights: 'Corner dual-exposure floor plans, steps to building skybridge' },
        { floor: 6, name: 'Garden Flats 06', tier: 'Garden Flats', code: 'garden', ceiling: '10.0 ft', unitsCount: 7, highlights: 'Treetop canopy views over Lady Bird Lake Hike & Bike Trail' },
        { floor: 5, name: 'Garden Flats 05', tier: 'Garden Flats', code: 'garden', ceiling: '10.0 ft', unitsCount: 8, highlights: 'Tranquil residences facing the private interior landscaped courtyard' },
        { floor: 4, name: 'Garden Flats 04', tier: 'Garden Flats', code: 'garden', ceiling: '10.0 ft', unitsCount: 8, highlights: 'Overlooks tree-lined pedestrian avenue, close to neighborhood dining' },
        { floor: 3, name: 'Garden Flats 03', tier: 'Garden Flats', code: 'garden', ceiling: '10.0 ft', unitsCount: 8, highlights: 'Extended 180 sqft garden terraces with native Texas landscaping' },
        { floor: 2, name: 'Podium Level 02', tier: 'Garden Flats & Wellness', code: 'garden', ceiling: '10.0 ft', unitsCount: 6, highlights: 'Direct covered access to the Wellness Athletic Club & Coworking Suites' },
        { floor: 1, name: 'Ground Townhomes 01', tier: 'Garden Townhomes', code: 'garden', ceiling: '12.0 ft', unitsCount: 4, highlights: 'Private gated street-level entries, soaring 12ft ceilings, private courtyards' }
    ];

    // =========================================================================
    // 2. HELPER FUNCTIONS: SVG FLOOR PLAN GENERATOR
    // =========================================================================
    function getFloorPlanSvg(type, unitNumber, sqft) {
        if (type === 'penthouse') {
            return `
            <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="380" height="230" fill="none" stroke="#234836" stroke-width="2.5" rx="4"/>
                <!-- Wraparound Terrace -->
                <path d="M 10 10 L 390 10 L 390 60 L 330 60 L 330 190 L 390 190 L 390 240 L 10 240 Z" fill="#234836" fill-opacity="0.04" stroke="#c4a77d" stroke-dasharray="4,4"/>
                <text x="200" y="32" font-size="10" fill="#c4a77d" font-weight="700" text-anchor="middle">WRAPAROUND SKY TERRACE (620 SQFT)</text>
                <!-- Great Room -->
                <rect x="30" y="55" width="180" height="110" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="120" y="105" font-size="11" fill="#13171a" font-weight="700" text-anchor="middle">GREAT ROOM / LIVING</text>
                <text x="120" y="122" font-size="9" fill="#8e979e" text-anchor="middle">32' x 20' • 12' Ceiling</text>
                <!-- Chef Kitchen -->
                <rect x="30" y="170" width="180" height="60" fill="#f4f1ea" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="120" y="200" font-size="10" fill="#234836" font-weight="700" text-anchor="middle">CHEF'S POLIFORM KITCHEN</text>
                <text x="120" y="215" font-size="8" fill="#8e979e" text-anchor="middle">Waterfall Quartz Island</text>
                <!-- Primary Suite -->
                <rect x="220" y="55" width="150" height="100" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="295" y="100" font-size="10" fill="#13171a" font-weight="700" text-anchor="middle">PRIMARY SUITE</text>
                <text x="295" y="115" font-size="8" fill="#8e979e" text-anchor="middle">20' x 16'</text>
                <!-- Spa Bath -->
                <rect x="220" y="160" width="150" height="70" fill="#fbfaf7" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="295" y="195" font-size="9" fill="#234836" font-weight="700" text-anchor="middle">CALACATTA SPA BATH</text>
                <text x="295" y="210" font-size="8" fill="#8e979e" text-anchor="middle">Dual Dressing Rooms</text>
            </svg>`;
        } else if (type === '3bed') {
            return `
            <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="370" height="210" fill="none" stroke="#234836" stroke-width="2" rx="4"/>
                <!-- Terrace -->
                <rect x="250" y="25" width="125" height="45" fill="#234836" fill-opacity="0.05" stroke="#c4a77d" stroke-dasharray="3,3"/>
                <text x="312" y="50" font-size="9" fill="#c4a77d" font-weight="700" text-anchor="middle">COVERED BALCONY</text>
                <!-- Living / Dining -->
                <rect x="25" y="25" width="215" height="110" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="132" y="75" font-size="11" fill="#13171a" font-weight="700" text-anchor="middle">LIVING / DINING SALON</text>
                <text x="132" y="92" font-size="8.5" fill="#8e979e" text-anchor="middle">24' x 18'</text>
                <!-- Kitchen -->
                <rect x="25" y="145" width="215" height="70" fill="#f4f1ea" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="132" y="180" font-size="10" fill="#234836" font-weight="700" text-anchor="middle">GOURMET KITCHEN</text>
                <text x="132" y="196" font-size="8" fill="#8e979e" text-anchor="middle">Center Island • Pantry</text>
                <!-- Bedrooms 1 & 2 -->
                <rect x="250" y="80" width="125" height="70" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="312" y="115" font-size="9.5" fill="#13171a" font-weight="700" text-anchor="middle">PRIMARY SUITE</text>
                <rect x="250" y="155" width="125" height="60" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="312" y="185" font-size="9" fill="#13171a" font-weight="600" text-anchor="middle">BEDROOM 2 & 3</text>
            </svg>`;
        } else if (type === '2bed') {
            return `
            <svg viewBox="0 0 380 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="350" height="190" fill="none" stroke="#234836" stroke-width="2" rx="4"/>
                <!-- Balcony -->
                <rect x="25" y="25" width="140" height="35" fill="#234836" fill-opacity="0.05" stroke="#c4a77d" stroke-dasharray="3,3"/>
                <text x="95" y="47" font-size="9" fill="#c4a77d" font-weight="700" text-anchor="middle">OUTDOOR LOGGIA</text>
                <!-- Living -->
                <rect x="25" y="65" width="140" height="85" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="95" y="110" font-size="10.5" fill="#13171a" font-weight="700" text-anchor="middle">LIVING ROOM</text>
                <!-- Kitchen -->
                <rect x="25" y="155" width="140" height="40" fill="#f4f1ea" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="95" y="180" font-size="9.5" fill="#234836" font-weight="700" text-anchor="middle">CHEF KITCHEN</text>
                <!-- Primary Bed -->
                <rect x="175" y="25" width="180" height="85" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="265" y="68" font-size="10" fill="#13171a" font-weight="700" text-anchor="middle">PRIMARY BEDROOM</text>
                <text x="265" y="84" font-size="8" fill="#8e979e" text-anchor="middle">Walk-In Closet & Bath</text>
                <!-- Bed 2 -->
                <rect x="175" y="115" width="180" height="80" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="265" y="155" font-size="9.5" fill="#13171a" font-weight="600" text-anchor="middle">GUEST BEDROOM 2</text>
            </svg>`;
        } else if (type === '1bed') {
            return `
            <svg viewBox="0 0 360 210" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="330" height="180" fill="none" stroke="#234836" stroke-width="2" rx="4"/>
                <!-- Terrace -->
                <rect x="25" y="25" width="100" height="35" fill="#234836" fill-opacity="0.05" stroke="#c4a77d" stroke-dasharray="3,3"/>
                <text x="75" y="47" font-size="8.5" fill="#c4a77d" font-weight="700" text-anchor="middle">BALCONY</text>
                <!-- Living Room -->
                <rect x="25" y="65" width="140" height="120" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="95" y="115" font-size="10.5" fill="#13171a" font-weight="700" text-anchor="middle">LIVING / DINING</text>
                <text x="95" y="132" font-size="8" fill="#8e979e" text-anchor="middle">Open Concept</text>
                <!-- Bedroom -->
                <rect x="175" y="25" width="160" height="100" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="255" y="75" font-size="10" fill="#13171a" font-weight="700" text-anchor="middle">PRIMARY SUITE</text>
                <!-- Bath & Kitchen -->
                <rect x="175" y="130" width="160" height="55" fill="#f4f1ea" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="255" y="160" font-size="9" fill="#234836" font-weight="700" text-anchor="middle">SPA BATH & LAUNDRY</text>
            </svg>`;
        } else {
            // Studio
            return `
            <svg viewBox="0 0 340 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="310" height="170" fill="none" stroke="#234836" stroke-width="2" rx="4"/>
                <!-- Balcony -->
                <rect x="25" y="25" width="80" height="30" fill="#234836" fill-opacity="0.05" stroke="#c4a77d" stroke-dasharray="3,3"/>
                <text x="65" y="44" font-size="8" fill="#c4a77d" font-weight="700" text-anchor="middle">BALCONY</text>
                <!-- Main Studio Space -->
                <rect x="25" y="60" width="160" height="115" fill="#ffffff" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="105" y="110" font-size="10.5" fill="#13171a" font-weight="700" text-anchor="middle">STUDIO LIVING</text>
                <text x="105" y="126" font-size="8" fill="#8e979e" text-anchor="middle">Integrated Alcove</text>
                <!-- Kitchen & Bath -->
                <rect x="195" y="25" width="120" height="80" fill="#f4f1ea" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="255" y="68" font-size="9" fill="#234836" font-weight="700" text-anchor="middle">BOSCH KITCHEN</text>
                <rect x="195" y="110" width="120" height="65" fill="#fbfaf7" stroke="#e6e1d6" stroke-width="1.5"/>
                <text x="255" y="145" font-size="9" fill="#13171a" font-weight="600" text-anchor="middle">LUXURY BATH</text>
            </svg>`;
        }
    }

    // =========================================================================
    // 3. ELEVATION STACK & FLOOR SELECTOR (Floors 01 - 20)
    // =========================================================================
    const floorStackContainer = document.getElementById('floorStackScroll');
    const activeFloorTitle = document.getElementById('activeFloorTitle');
    const activeFloorTier = document.getElementById('activeFloorTier');
    const activeFloorCeiling = document.getElementById('activeFloorCeiling');
    const activeFloorUnitsCount = document.getElementById('activeFloorUnitsCount');
    const activeFloorHighlights = document.getElementById('activeFloorHighlights');
    const floorUnitsGrid = document.getElementById('floorUnitsGrid');

    let currentSelectedFloor = 20; // Default to Top Penthouse Floor

    function initFloorStack() {
        if (!floorStackContainer) return;
        floorStackContainer.innerHTML = '';

        floorsMeta.forEach(fm => {
            const btn = document.createElement('button');
            btn.className = `floor-bar-btn ${fm.floor === currentSelectedFloor ? 'active' : ''}`;
            btn.setAttribute('data-floor', fm.floor);
            btn.setAttribute('aria-label', `Select Floor ${fm.floor}`);

            const numFormatted = fm.floor < 10 ? `0${fm.floor}` : `${fm.floor}`;
            const tierDotClass = fm.code;

            btn.innerHTML = `
                <div class="floor-bar-left">
                    <span class="tier-dot ${tierDotClass}"></span>
                    <span class="floor-num-badge">${numFormatted}</span>
                    <span class="floor-name-label">${fm.floor >= 19 ? 'PH Level ' + fm.floor : 'Floor ' + numFormatted}</span>
                </div>
                <span class="floor-units-tag">${fm.unitsCount} Units</span>
            `;

            btn.addEventListener('click', () => {
                selectFloor(fm.floor);
            });

            floorStackContainer.appendChild(btn);
        });

        renderSelectedFloor(currentSelectedFloor);
    }

    function selectFloor(floorNum) {
        currentSelectedFloor = floorNum;

        // Update active class on buttons
        const allBtns = floorStackContainer.querySelectorAll('.floor-bar-btn');
        allBtns.forEach(btn => {
            if (parseInt(btn.getAttribute('data-floor')) === floorNum) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        renderSelectedFloor(floorNum);
    }

    function renderSelectedFloor(floorNum) {
        const meta = floorsMeta.find(m => m.floor === floorNum) || floorsMeta[0];
        const numFormatted = meta.floor < 10 ? `0${meta.floor}` : `${meta.floor}`;

        if (activeFloorTitle) activeFloorTitle.textContent = meta.floor >= 19 ? `Penthouse Level ${numFormatted}` : `Floor ${numFormatted} — ${meta.name}`;
        if (activeFloorTier) activeFloorTier.textContent = meta.tier;
        if (activeFloorCeiling) activeFloorCeiling.textContent = meta.ceiling;
        if (activeFloorUnitsCount) activeFloorUnitsCount.textContent = `${meta.unitsCount} Residences`;
        if (activeFloorHighlights) activeFloorHighlights.textContent = meta.highlights;

        // Find available units matching this floor or tier
        let unitsOnThisFloor = unitsData.filter(u => u.floor === floorNum);

        // Fallback demo matching if exact unit wasn't keyed to single floor
        if (unitsOnThisFloor.length === 0) {
            unitsOnThisFloor = unitsData.filter(u => u.tierCode === meta.code).slice(0, 3);
        }

        if (!floorUnitsGrid) return;
        floorUnitsGrid.innerHTML = '';

        unitsOnThisFloor.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'unit-card';

            const statusClass = unit.availability.toLowerCase().replace(/\s+/g, '-');
            const priceFormatted = `$${unit.price.toLocaleString()}`;

            card.innerHTML = `
                <div>
                    <div class="unit-card-header">
                        <div>
                            <div class="unit-number-title">${unit.unitNumber}</div>
                            <div class="unit-type-sub">${unit.typeLabel}</div>
                        </div>
                        <span class="unit-status-pill ${statusClass}">${unit.availability}</span>
                    </div>

                    <div class="unit-blueprint-thumb">
                        ${getFloorPlanSvg(unit.type, unit.unitNumber, unit.sqft)}
                    </div>

                    <div class="unit-specs-strip">
                        <div class="unit-spec-cell">
                            <div class="val">${unit.beds === 0 ? 'Studio' : unit.beds + ' BD'}</div>
                            <div class="lbl">Bedrooms</div>
                        </div>
                        <div class="unit-spec-cell">
                            <div class="val">${unit.baths} BA</div>
                            <div class="lbl">Bathrooms</div>
                        </div>
                        <div class="unit-spec-cell">
                            <div class="val">${unit.sqft.toLocaleString()}</div>
                            <div class="lbl">Sq. Ft.</div>
                        </div>
                    </div>
                </div>

                <div class="unit-card-footer">
                    <div class="unit-price-box">
                        <div class="price-amount">${priceFormatted}</div>
                        <div class="price-period">/ month</div>
                    </div>
                    <button class="btn btn-primary btn-sm open-unit-modal-btn" data-unit-id="${unit.id}">
                        View Details <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;

            floorUnitsGrid.appendChild(card);
        });

        attachModalOpenListeners();
    }

    // =========================================================================
    // 4. RESIDENCES MATRIX & FLOOR PLAN FILTER TABS
    // =========================================================================
    const residenceTabBtns = document.querySelectorAll('.residence-tab-btn');
    const residencesMatrixGrid = document.getElementById('residencesMatrixGrid');

    function renderResidencesMatrix(filterType = 'all') {
        if (!residencesMatrixGrid) return;
        residencesMatrixGrid.innerHTML = '';

        const filtered = filterType === 'all' 
            ? unitsData 
            : unitsData.filter(u => u.type === filterType);

        filtered.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'residence-full-card';

            const statusClass = unit.availability.toLowerCase().replace(/\s+/g, '-');
            const priceFormatted = `$${unit.price.toLocaleString()}`;

            const featuresTagsHtml = unit.features.slice(0, 3).map(f => `<span class="residence-feature-pill"><i class="fa-solid fa-check text-verde"></i> ${f}</span>`).join('');

            card.innerHTML = `
                <div class="residence-card-img-wrap">
                    <img src="${unit.image}" alt="${unit.unitNumber} - Verde Heights" loading="lazy">
                    <span class="residence-tier-tag">${unit.tier}</span>
                </div>
                <div class="residence-card-body">
                    <div>
                        <div class="residence-head-row">
                            <h3 class="residence-name">${unit.unitNumber}</h3>
                            <div class="residence-price">${priceFormatted}<span style="font-size:0.8rem; font-family:var(--font-body); color:var(--text-muted); font-weight:400;">/mo</span></div>
                        </div>
                        <div style="font-size:0.85rem; color:var(--primary); font-weight:600; margin-bottom:0.6rem;">${unit.typeLabel} • Floor ${unit.floor < 10 ? '0' + unit.floor : unit.floor}</div>
                        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.55;">${unit.description}</p>
                        
                        <div class="unit-specs-strip" style="margin-top:1.2rem;">
                            <div class="unit-spec-cell">
                                <div class="val">${unit.beds === 0 ? 'Studio' : unit.beds + ' Bed'}</div>
                                <div class="lbl">Layout</div>
                            </div>
                            <div class="unit-spec-cell">
                                <div class="val">${unit.baths} Bath</div>
                                <div class="lbl">Baths</div>
                            </div>
                            <div class="unit-spec-cell">
                                <div class="val">${unit.sqft.toLocaleString()}</div>
                                <div class="lbl">Interior SqFt</div>
                            </div>
                        </div>

                        <div class="residence-features-tags">
                            ${featuresTagsHtml}
                        </div>
                    </div>

                    <div style="display:flex; gap:10px; margin-top:1rem;">
                        <button class="btn btn-outline btn-sm open-unit-modal-btn" data-unit-id="${unit.id}" style="flex:1;">
                            <i class="fa-solid fa-compass-drafting"></i> Floor Plan
                        </button>
                        <button class="btn btn-primary btn-sm open-inquiry-prefill-btn" data-unit-number="${unit.unitNumber}" style="flex:1;">
                            <i class="fa-solid fa-calendar-check"></i> Inquire
                        </button>
                    </div>
                </div>
            `;

            residencesMatrixGrid.appendChild(card);
        });

        attachModalOpenListeners();
    }

    if (residenceTabBtns.length > 0) {
        residenceTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                residenceTabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-type');
                renderResidencesMatrix(filter);
            });
        });
    }

    // =========================================================================
    // 5. UNIT DETAIL & FLOOR PLAN MODAL
    // =========================================================================
    const unitDetailModal = document.getElementById('unitDetailModal');
    const modalUnitTitle = document.getElementById('modalUnitTitle');
    const modalUnitType = document.getElementById('modalUnitType');
    const modalUnitFloorplanSvg = document.getElementById('modalUnitFloorplanSvg');
    const modalSpecFloor = document.getElementById('modalSpecFloor');
    const modalSpecSqft = document.getElementById('modalSpecSqft');
    const modalSpecBeds = document.getElementById('modalSpecBeds');
    const modalSpecBaths = document.getElementById('modalSpecBaths');
    const modalSpecCeiling = document.getElementById('modalSpecCeiling');
    const modalSpecTerrace = document.getElementById('modalSpecTerrace');
    const modalSpecExposure = document.getElementById('modalSpecExposure');
    const modalSpecPrice = document.getElementById('modalSpecPrice');
    const modalSpecAvailability = document.getElementById('modalSpecAvailability');
    const modalFeaturesList = document.getElementById('modalFeaturesList');
    const modalReserveBtn = document.getElementById('modalReserveBtn');

    function openUnitDetailModal(unitId) {
        const unit = unitsData.find(u => u.id === unitId);
        if (!unit || !unitDetailModal) return;

        if (modalUnitTitle) modalUnitTitle.textContent = `${unit.unitNumber} — Architectural Specifications`;
        if (modalUnitType) modalUnitType.textContent = `${unit.tier} • ${unit.typeLabel}`;
        if (modalUnitFloorplanSvg) modalUnitFloorplanSvg.innerHTML = getFloorPlanSvg(unit.type, unit.unitNumber, unit.sqft);

        if (modalSpecFloor) modalSpecFloor.textContent = `Floor ${unit.floor < 10 ? '0' + unit.floor : unit.floor} (${unit.tier})`;
        if (modalSpecSqft) modalSpecSqft.textContent = `${unit.sqft.toLocaleString()} Sq. Ft.`;
        if (modalSpecBeds) modalSpecBeds.textContent = unit.beds === 0 ? 'Open Studio' : `${unit.beds} Bedroom(s)`;
        if (modalSpecBaths) modalSpecBaths.textContent = `${unit.baths} Bathroom(s)`;
        if (modalSpecCeiling) modalSpecCeiling.textContent = unit.ceilingHeight;
        if (modalSpecTerrace) modalSpecTerrace.textContent = `${unit.terraceSqft} Sq. Ft. Private Outdoor Loggia`;
        if (modalSpecExposure) modalSpecExposure.textContent = unit.exposure;
        if (modalSpecPrice) modalSpecPrice.textContent = `$${unit.price.toLocaleString()} / month`;
        if (modalSpecAvailability) {
            modalSpecAvailability.innerHTML = `<span class="unit-status-pill ${unit.availability.toLowerCase()}">${unit.availability}</span>`;
        }

        if (modalFeaturesList) {
            modalFeaturesList.innerHTML = unit.features.map(f => `<li><i class="fa-solid fa-circle-check text-verde"></i> ${f}</li>`).join('');
        }

        if (modalReserveBtn) {
            modalReserveBtn.setAttribute('data-unit-number', unit.unitNumber);
            modalReserveBtn.onclick = () => {
                unitDetailModal.classList.remove('active');
                openTourModalPrefilled(unit.unitNumber);
            };
        }

        unitDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function attachModalOpenListeners() {
        document.querySelectorAll('.open-unit-modal-btn').forEach(btn => {
            btn.onclick = () => {
                const unitId = btn.getAttribute('data-unit-id');
                openUnitDetailModal(unitId);
            };
        });

        document.querySelectorAll('.open-inquiry-prefill-btn').forEach(btn => {
            btn.onclick = () => {
                const unitNum = btn.getAttribute('data-unit-number');
                openTourModalPrefilled(unitNum);
            };
        });
    }

    // =========================================================================
    // 6. TOUR BOOKING & INQUIRY MODALS
    // =========================================================================
    const tourModal = document.getElementById('tourModal');
    const tourForm = document.getElementById('tourForm');
    const tourResidenceSelect = document.getElementById('tourResidenceSelect');
    const thankYouModal = document.getElementById('thankYouModal');

    function openTourModalPrefilled(unitNumber) {
        if (tourResidenceSelect && unitNumber) {
            tourResidenceSelect.value = unitNumber;
        }
        if (tourModal) {
            tourModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Global Tour Buttons
    document.querySelectorAll('.trigger-tour-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (tourModal) {
                tourModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (tourForm) {
        tourForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (tourModal) tourModal.classList.remove('active');
            if (thankYouModal) thankYouModal.classList.add('active');
            tourForm.reset();
        });
    }

    const contactSectionForm = document.getElementById('contactSectionForm');
    if (contactSectionForm) {
        contactSectionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (thankYouModal) thankYouModal.classList.add('active');
            contactSectionForm.reset();
        });
    }

    // Modal Close Triggers
    document.querySelectorAll('.modal-close-btn, .modal-close-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('active'));
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
    // 7. GALLERY TAB FILTER
    // =========================================================================
    const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryTabBtns.forEach(tab => {
        tab.addEventListener('click', () => {
            galleryTabBtns.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.getAttribute('data-gallery-filter');

            galleryItems.forEach(item => {
                const itemCat = item.getAttribute('data-category');
                if (cat === 'all' || itemCat.includes(cat)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // =========================================================================
    // 8. MOBILE NAVIGATION DRAWER & SCROLL
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

    // Scroll Navbar blur
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize Components
    initFloorStack();
    renderResidencesMatrix('all');
});
