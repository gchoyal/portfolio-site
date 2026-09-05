// Harborstone Realty — Modern California Real Estate Platform
// Advanced Search & Filter Engine, Mortgage Calculator & Interactive Map
// Designed & Developed by Girdhari Choyal (@gchoyal_websitedeveloper)

// 1. DATASET: 30 REALISTIC CALIFORNIA PROPERTY LISTINGS
const californiaProperties = [
    {
        id: 1,
        title: "The Pacific Heights Modernist",
        status: "buy",
        price: 12850000,
        formattedPrice: "$12,850,000",
        address: "2840 Broadway Street, San Francisco, CA 94115",
        city: "San Francisco",
        zip: "94115",
        type: "Architectural Estate",
        beds: 5,
        baths: 6,
        sqft: 6800,
        garage: 3,
        pool: false,
        newConstruction: true,
        waterfront: true,
        yearBuilt: 2023,
        daysOnMarket: 14,
        mls: "ML8194012",
        mapX: 25, mapY: 30,
        featured: true,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "A breathtaking four-level architectural showcase commanding unobstructed Golden Gate Bridge and San Francisco Bay panoramas with floor-to-ceiling glass and smart home integration."
    },
    {
        id: 2,
        title: "Bel Air Promontory Contemporary",
        status: "buy",
        price: 24900000,
        formattedPrice: "$24,900,000",
        address: "10771 Bellagio Road, Los Angeles, CA 90077",
        city: "Los Angeles",
        zip: "90077",
        type: "Single Family Home",
        beds: 6,
        baths: 8,
        sqft: 11200,
        garage: 4,
        pool: true,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2021,
        daysOnMarket: 28,
        mls: "ML8194013",
        mapX: 42, mapY: 65,
        featured: true,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Perched high above Bel Air on a private 1.2-acre promontory with 180-degree city-to-ocean views, zero-edge infinity pool, subterranean screening room, and 1,000-bottle wine gallery."
    },
    {
        id: 3,
        title: "Newport Coast Oceanfront Sanctuary",
        status: "buy",
        price: 18750000,
        formattedPrice: "$18,750,000",
        address: "18 Pelican Crest Drive, Newport Beach, CA 92657",
        city: "Newport Beach",
        zip: "92657",
        type: "Coastal Villa",
        beds: 5,
        baths: 7,
        sqft: 9400,
        garage: 4,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2019,
        daysOnMarket: 42,
        mls: "ML8194014",
        mapX: 52, mapY: 72,
        featured: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Front-row Pelican Crest estate featuring Italian limestone courtyards, heated infinity pool with Catalina Island sunset vistas, and seamless disappearing glass pocket doors."
    },
    {
        id: 4,
        title: "Silicon Valley Tech Modernist",
        status: "buy",
        price: 9450000,
        formattedPrice: "$9,450,000",
        address: "1450 Cowper Street, Palo Alto, CA 94301",
        city: "Palo Alto",
        zip: "94301",
        type: "Single Family Home",
        beds: 4,
        baths: 4.5,
        sqft: 4800,
        garage: 2,
        pool: true,
        newConstruction: true,
        waterfront: false,
        yearBuilt: 2024,
        daysOnMarket: 7,
        mls: "ML8194015",
        mapX: 28, mapY: 35,
        featured: false,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Ultra-energy-efficient net-zero home in Old Palo Alto. Features solar glass walls, radiant heated terrazzo floors, smart home operating system, and private zen garden."
    },
    {
        id: 5,
        title: "Montecito Spanish Colonial Revival",
        status: "buy",
        price: 15900000,
        formattedPrice: "$15,900,000",
        address: "780 San Ysidro Road, Santa Barbara, CA 93108",
        city: "Santa Barbara",
        zip: "93108",
        type: "Architectural Estate",
        beds: 6,
        baths: 7,
        sqft: 8200,
        garage: 3,
        pool: true,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2018,
        daysOnMarket: 35,
        mls: "ML8194016",
        mapX: 36, mapY: 55,
        featured: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Iconic George Washington Smith inspired estate on 2.2 manicured acres with ancient olive groves, equestrian barn, lighted tennis court, and panoramic Santa Ynez mountain backdrop."
    },
    {
        id: 6,
        title: "La Jolla Cove Glass Villa",
        status: "buy",
        price: 11200000,
        formattedPrice: "$11,200,000",
        address: "1280 Coast Boulevard, San Diego, CA 92037",
        city: "San Diego",
        zip: "92037",
        type: "Coastal Villa",
        beds: 4,
        baths: 5,
        sqft: 5900,
        garage: 3,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2020,
        daysOnMarket: 21,
        mls: "ML8194017",
        mapX: 58, mapY: 88,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Perched directly above the Pacific surf in La Jolla with private beach stairs, cantilevered limestone terraces, temperature-controlled wine room, and private rooftop stargazing deck."
    },
    {
        id: 7,
        title: "The Lumina Tower Penthouse 42",
        status: "buy",
        price: 6800000,
        formattedPrice: "$6,800,000",
        address: "201 Folsom Street, PH 42A, San Francisco, CA 94105",
        city: "San Francisco",
        zip: "94105",
        type: "Luxury Penthouse",
        beds: 3,
        baths: 3.5,
        sqft: 3400,
        garage: 2,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2017,
        daysOnMarket: 19,
        mls: "ML8194018",
        mapX: 26, mapY: 31,
        featured: false,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Corner skyline duplex penthouse boasting 270-degree Bay Bridge to City Hall views, 11-foot volume ceilings, custom Poliform cabinetry, and full luxury concierge amenities."
    },
    {
        id: 8,
        title: "Malibu Colony Beachfront Retreat",
        status: "buy",
        price: 21500000,
        formattedPrice: "$21,500,000",
        address: "23450 Malibu Colony Road, Malibu, CA 90265",
        city: "Malibu",
        zip: "90265",
        type: "Coastal Villa",
        beds: 5,
        baths: 6,
        sqft: 5800,
        garage: 2,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2019,
        daysOnMarket: 45,
        mls: "ML8194019",
        mapX: 40, mapY: 62,
        featured: false,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Inside the historic 24-hour guard gated Malibu Colony. Features 60 feet of direct sandy beach frontage, wrap-around oceanfront deck, and separate private guest studio."
    },
    {
        id: 9,
        title: "Shady Canyon Custom Hilltop Estate",
        status: "buy",
        price: 13995000,
        formattedPrice: "$13,995,000",
        address: "42 Boulder View, Irvine, CA 92603",
        city: "Irvine",
        zip: "92603",
        type: "Single Family Home",
        beds: 6,
        baths: 7.5,
        sqft: 8900,
        garage: 4,
        pool: true,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2020,
        daysOnMarket: 31,
        mls: "ML8194020",
        mapX: 53, mapY: 74,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Tuscan-inspired hillside estate with golf course vistas in Shady Canyon. Includes a 10-seat private theater, detached casita, subterranean wine cellar, and private motor court."
    },
    {
        id: 10,
        title: "Beverly Hills Trousdale Estates Mid-Century",
        status: "rent",
        price: 35000,
        formattedPrice: "$35,000 / mo",
        address: "1120 Loma Linda Drive, Beverly Hills, CA 90210",
        city: "Beverly Hills",
        zip: "90210",
        type: "Single Family Home",
        beds: 4,
        baths: 5,
        sqft: 5200,
        garage: 2,
        pool: true,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2022,
        daysOnMarket: 8,
        mls: "ML8194021",
        mapX: 43, mapY: 64,
        featured: false,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Restored architectural masterpiece in Trousdale Estates with explosive Downtown Los Angeles skyline views, terrazzo fire pit lounge, and custom Italian furnishings."
    },
    {
        id: 11,
        title: "Carmel Point Stone Cottage Estate",
        status: "buy",
        price: 8900000,
        formattedPrice: "$8,900,000",
        address: "26350 Scenic Road, Carmel-by-the-Sea, CA 93921",
        city: "Carmel-by-the-Sea",
        zip: "93921",
        type: "Coastal Villa",
        beds: 3,
        baths: 3.5,
        sqft: 3400,
        garage: 2,
        pool: false,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2016,
        daysOnMarket: 50,
        mls: "ML8194022",
        mapX: 30, mapY: 48,
        featured: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Handcrafted Carmel stone exterior overlooking Carmel River Beach and Point Lobos. Features exposed timber beam ceilings, radiant stone floors, and seaside courtyard."
    },
    {
        id: 12,
        title: "Pasadena Historic Oak Knoll Craftsman",
        status: "buy",
        price: 5750000,
        formattedPrice: "$5,750,000",
        address: "1155 South Oak Knoll Avenue, Pasadena, CA 91106",
        city: "Pasadena",
        zip: "91106",
        type: "Single Family Home",
        beds: 5,
        baths: 5.5,
        sqft: 6100,
        garage: 3,
        pool: true,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2015,
        daysOnMarket: 22,
        mls: "ML8194023",
        mapX: 46, mapY: 63,
        featured: false,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Greene & Greene inspired estate adjacent to the Langham Huntington Hotel. Boasts meticulously restored mahogany woodwork, leaded glass lighting, and private lap pool."
    },
    {
        id: 13,
        title: "Laguna Beach Cliffside Modernist",
        status: "buy",
        price: 16400000,
        formattedPrice: "$16,400,000",
        address: "31807 Coast Highway, Laguna Beach, CA 92651",
        city: "Laguna Beach",
        zip: "92651",
        type: "Coastal Villa",
        beds: 4,
        baths: 5,
        sqft: 5600,
        garage: 3,
        pool: true,
        newConstruction: true,
        waterfront: true,
        yearBuilt: 2023,
        daysOnMarket: 11,
        mls: "ML8194024",
        mapX: 54, mapY: 76,
        featured: false,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Dramatic oceanfront cliffside residence in South Laguna with private funicular down to sandy Thousand Steps Beach, glass cantilevered spa, and 14ft floor-to-ceiling glass."
    },
    {
        id: 14,
        title: "Marina Del Rey Channel View Loft",
        status: "rent",
        price: 14500,
        formattedPrice: "$14,500 / mo",
        address: "4211 Admiralty Way, Marina Del Rey, CA 90292",
        city: "Los Angeles",
        zip: "90292",
        type: "Modern Condo",
        beds: 2,
        baths: 2.5,
        sqft: 2200,
        garage: 2,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2021,
        daysOnMarket: 5,
        mls: "ML8194025",
        mapX: 41, mapY: 66,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Marina-front corner residence with private 45ft boat slip option, double-height ceilings, automated shades, and direct boardwalk access."
    },
    {
        id: 15,
        title: "Coronado Island Historic Landmark",
        status: "buy",
        price: 8450000,
        formattedPrice: "$8,450,000",
        address: "1015 Ocean Boulevard, Coronado, CA 92118",
        city: "San Diego",
        zip: "92118",
        type: "Single Family Home",
        beds: 5,
        baths: 6,
        sqft: 5400,
        garage: 2,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2018,
        daysOnMarket: 39,
        mls: "ML8194026",
        mapX: 59, mapY: 90,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Directly across from Coronado Beach with panoramic Point Loma views, wraparound porch, basement speakeasy bar, and separate carriage guest house."
    },
    {
        id: 16,
        title: "San Francisco Marina Waterfront Flat",
        status: "buy",
        price: 4950000,
        formattedPrice: "$4,950,000",
        address: "1850 Marina Boulevard, San Francisco, CA 94123",
        city: "San Francisco",
        zip: "94123",
        type: "Modern Condo",
        beds: 3,
        baths: 3,
        sqft: 2800,
        garage: 2,
        pool: false,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2019,
        daysOnMarket: 16,
        mls: "ML8194027",
        mapX: 25, mapY: 29,
        featured: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Full floor flat directly fronting the Marina Green with unobstructed Golden Gate Bridge views, open chef kitchen, and private landscaped courtyard."
    },
    {
        id: 17,
        title: "Santa Monica North of Montana Modern",
        status: "buy",
        price: 7850000,
        formattedPrice: "$7,850,000",
        address: "415 16th Street, Santa Monica, CA 90402",
        city: "Los Angeles",
        zip: "90402",
        type: "Single Family Home",
        beds: 5,
        baths: 5.5,
        sqft: 5100,
        garage: 2,
        pool: true,
        newConstruction: true,
        waterfront: false,
        yearBuilt: 2023,
        daysOnMarket: 9,
        mls: "ML8194028",
        mapX: 40, mapY: 65,
        featured: false,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Warm organic architectural design North of Montana with Fleetwood pocket doors, zero-edge pool, private rooftop terrace, and custom rift-sawn white oak millwork."
    },
    {
        id: 18,
        title: "Downtown San Diego Bayside Penthouse",
        status: "buy",
        price: 3450000,
        formattedPrice: "$3,450,000",
        address: "888 West E Street, PH 36, San Diego, CA 92101",
        city: "San Diego",
        zip: "92101",
        type: "Luxury Penthouse",
        beds: 3,
        baths: 3.5,
        sqft: 3100,
        garage: 2,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2020,
        daysOnMarket: 25,
        mls: "ML8194029",
        mapX: 59, mapY: 89,
        featured: false,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Pacific Gate penthouse with 10-foot ceilings, automated Lutron system, Sub-Zero appliances, private wine room, and private yacht share access."
    },
    {
        id: 19,
        title: "Irvine Great Park Modern Townhome",
        status: "buy",
        price: 1650000,
        formattedPrice: "$1,650,000",
        address: "105 Cadence, Irvine, CA 92618",
        city: "Irvine",
        zip: "92618",
        type: "Townhome",
        beds: 3,
        baths: 3.5,
        sqft: 2400,
        garage: 2,
        pool: true,
        newConstruction: true,
        waterfront: false,
        yearBuilt: 2024,
        daysOnMarket: 4,
        mls: "ML8194030",
        mapX: 54, mapY: 73,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Brand new tri-level townhome in Irvine with private rooftop observation deck, solar panels, EV charging garage, and resort-style pool amenities."
    },
    {
        id: 20,
        title: "Tiburon Belvedere Panoramic Ridge",
        status: "buy",
        price: 14200000,
        formattedPrice: "$14,200,000",
        address: "320 Golden Gate Avenue, Belvedere, CA 94920",
        city: "San Francisco",
        zip: "94920",
        type: "Architectural Estate",
        beds: 5,
        baths: 6.5,
        sqft: 7200,
        garage: 3,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2021,
        daysOnMarket: 33,
        mls: "ML8194031",
        mapX: 24, mapY: 27,
        featured: false,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Architectural masterpiece on Belvedere Island with 240-degree panoramic views of the San Francisco skyline, Alcatraz, and the Golden Gate Bridge."
    },
    {
        id: 21,
        title: "Hollywood Hills Bird Streets Glasshouse",
        status: "rent",
        price: 26000,
        formattedPrice: "$26,000 / mo",
        address: "1520 Blue Jay Way, Los Angeles, CA 90069",
        city: "Los Angeles",
        zip: "90069",
        type: "Single Family Home",
        beds: 3,
        baths: 4,
        sqft: 4200,
        garage: 2,
        pool: true,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2022,
        daysOnMarket: 12,
        mls: "ML8194032",
        mapX: 43, mapY: 63,
        featured: false,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "World-class architectural aerie perched high in the Bird Streets above the Sunset Strip. Features infinity pool, outdoor fire lounge, and designer furnishings."
    },
    {
        id: 22,
        title: "Rancho Santa Fe Covenant Oasis",
        status: "buy",
        price: 9850000,
        formattedPrice: "$9,850,000",
        address: "16820 El Vuelo, Rancho Santa Fe, CA 92067",
        city: "San Diego",
        zip: "92067",
        type: "Architectural Estate",
        beds: 6,
        baths: 7.5,
        sqft: 8500,
        garage: 4,
        pool: true,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2019,
        daysOnMarket: 48,
        mls: "ML8194033",
        mapX: 57, mapY: 85,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Sprawling single-story estate on 3 gated acres in the historic RSF Covenant. Includes private citrus orchard, 50ft pool, guest house, and equestrian access."
    },
    {
        id: 23,
        title: "Menlo Park West Modern Estate",
        status: "buy",
        price: 7450000,
        formattedPrice: "$7,450,000",
        address: "850 Sharon Park Drive, Menlo Park, CA 94025",
        city: "Palo Alto",
        zip: "94025",
        type: "Single Family Home",
        beds: 5,
        baths: 5.5,
        sqft: 5300,
        garage: 3,
        pool: true,
        newConstruction: true,
        waterfront: false,
        yearBuilt: 2024,
        daysOnMarket: 6,
        mls: "ML8194034",
        mapX: 28, mapY: 34,
        featured: false,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Modern luxury home near Sand Hill Road with temperature-controlled wine room, smart lighting, outdoor kitchen, and award-winning Las Lomitas schools."
    },
    {
        id: 24,
        title: "Santa Barbara Hope Ranch Blufftop",
        status: "buy",
        price: 18500000,
        formattedPrice: "$18,500,000",
        address: "4200 Marina Drive, Santa Barbara, CA 93110",
        city: "Santa Barbara",
        zip: "93110",
        type: "Coastal Villa",
        beds: 6,
        baths: 8,
        sqft: 9100,
        garage: 4,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2020,
        daysOnMarket: 37,
        mls: "ML8194035",
        mapX: 35, mapY: 54,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Blufftop sanctuary in Hope Ranch with private gated equestrian beach access, tennis court, infinity pool overlooking the Channel Islands, and wine vineyard."
    },
    {
        id: 25,
        title: "Corona Del Mar South of PCH Villa",
        status: "rent",
        price: 22000,
        formattedPrice: "$22,000 / mo",
        address: "215 Carnation Avenue, Corona Del Mar, CA 92625",
        city: "Newport Beach",
        zip: "92625",
        type: "Coastal Villa",
        beds: 4,
        baths: 4.5,
        sqft: 3900,
        garage: 2,
        pool: false,
        newConstruction: true,
        waterfront: true,
        yearBuilt: 2023,
        daysOnMarket: 10,
        mls: "ML8194036",
        mapX: 53, mapY: 73,
        featured: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Steps from China Cove beach with harbor channel views, rooftop ocean view deck with fire table, and elevator serving all three levels."
    },
    {
        id: 26,
        title: "San Francisco SOMA Luxury Loft",
        status: "rent",
        price: 7500,
        formattedPrice: "$7,500 / mo",
        address: "310 Townsend Street, Unit 402, San Francisco, CA 94107",
        city: "San Francisco",
        zip: "94107",
        type: "Modern Condo",
        beds: 2,
        baths: 2,
        sqft: 1650,
        garage: 1,
        pool: false,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2018,
        daysOnMarket: 14,
        mls: "ML8194037",
        mapX: 27, mapY: 32,
        featured: false,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Brick & timber converted warehouse loft across from Caltrain with 16ft ceiling heights, concrete floors, and custom chef kitchen."
    },
    {
        id: 27,
        title: "Mission Hills Historic Craftsman",
        status: "buy",
        price: 2850000,
        formattedPrice: "$2,850,000",
        address: "1830 Sunset Boulevard, San Diego, CA 92103",
        city: "San Diego",
        zip: "92103",
        type: "Single Family Home",
        beds: 4,
        baths: 3.5,
        sqft: 3400,
        garage: 2,
        pool: false,
        newConstruction: false,
        waterfront: false,
        yearBuilt: 2016,
        daysOnMarket: 18,
        mls: "ML8194038",
        mapX: 58, mapY: 88,
        featured: false,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Marcus Sterling", phone: "(949) 555-0195", email: "msterling@harborstone.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
        desc: "Charming Mission Hills residence with panoramic San Diego Bay and harbor views, updated gourmet kitchen, and private flagstone garden patio."
    },
    {
        id: 28,
        title: "Pasadena San Rafael Hills Modern",
        status: "buy",
        price: 3895000,
        formattedPrice: "$3,895,000",
        address: "410 San Rafael Avenue, Pasadena, CA 91105",
        city: "Pasadena",
        zip: "91105",
        type: "Single Family Home",
        beds: 4,
        baths: 4.5,
        sqft: 4100,
        garage: 2,
        pool: true,
        newConstruction: true,
        waterfront: false,
        yearBuilt: 2023,
        daysOnMarket: 8,
        mls: "ML8194039",
        mapX: 45, mapY: 62,
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "New construction architectural home in San Rafael Hills with swimming pool, canyon views, custom Italian cabinetry, and solar battery storage."
    },
    {
        id: 29,
        title: "Beverly Hills Post Office Modern Compound",
        status: "buy",
        price: 14750000,
        formattedPrice: "$14,750,000",
        address: "9820 Deep Canyon Drive, Beverly Hills, CA 90210",
        city: "Beverly Hills",
        zip: "90210",
        type: "Single Family Home",
        beds: 6,
        baths: 7.5,
        sqft: 8200,
        garage: 4,
        pool: true,
        newConstruction: true,
        waterfront: false,
        yearBuilt: 2024,
        daysOnMarket: 15,
        mls: "ML8194040",
        mapX: 44, mapY: 65,
        featured: false,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        agent: { name: "Elena Rostova", phone: "(310) 555-0188", email: "erostova@harborstone.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        desc: "Ultra-private gated compound with security gate, private tennis court, two-story detached guest house, 12-seat Dolby Atmos screening room, and zero-edge pool."
    },
    {
        id: 30,
        title: "Carmel Highlands Oceanfront Cliffside",
        status: "buy",
        price: 19500000,
        formattedPrice: "$19,500,000",
        address: "154 Spindrift Road, Carmel, CA 93923",
        city: "Carmel-by-the-Sea",
        zip: "93923",
        type: "Coastal Villa",
        beds: 5,
        baths: 6.5,
        sqft: 7100,
        garage: 3,
        pool: true,
        newConstruction: false,
        waterfront: true,
        yearBuilt: 2021,
        daysOnMarket: 29,
        mls: "ML8194041",
        mapX: 30, mapY: 49,
        featured: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        agent: { name: "David Chen", phone: "(415) 555-0142", email: "dchen@harborstone.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
        desc: "Legendary oceanfront position along Spindrift Road with crashing surf directly below, heated oceanfront pool, private wine cellar, and cypress tree canopy."
    }
];

// 2. FAVORITES STATE
let savedFavorites = new Set([1, 2, 3]);

// 3. PAGINATION & VIEW STATE
let currentPage = 1;
const itemsPerPage = 9;
let currentFilteredList = [...californiaProperties];
let currentStatus = 'buy';
let currentViewMode = 'grid'; // 'grid', 'list', 'map'

document.addEventListener('DOMContentLoaded', () => {
    const propertiesGrid = document.getElementById('propertiesGrid');
    const mapViewContainer = document.getElementById('mapViewContainer');
    const resultsCountEl = document.getElementById('resultsCountEl');
    const favCountBadge = document.getElementById('favCountBadge');
    const searchForm = document.getElementById('mainSearchForm');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const sortSelect = document.getElementById('sortSelect');
    const btnToggleAdvanced = document.getElementById('btnToggleAdvanced');
    const advancedFiltersPanel = document.getElementById('advancedFiltersPanel');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const paginationContainer = document.getElementById('paginationContainer');

    // View Mode Buttons
    const btnModeGrid = document.getElementById('btnModeGrid');
    const btnModeList = document.getElementById('btnModeList');
    const btnModeMap = document.getElementById('btnModeMap');

    // 4. FAVORITES UPDATE
    function updateFavCounter() {
        if (favCountBadge) {
            favCountBadge.innerText = savedFavorites.size;
        }
    }
    updateFavCounter();

    // 5. TAB BUTTONS (Buy / Rent / All)
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStatus = btn.getAttribute('data-status');
            currentPage = 1;
            applyFilters();
        });
    });

    // 6. ADVANCED FILTERS TOGGLE
    if (btnToggleAdvanced && advancedFiltersPanel) {
        btnToggleAdvanced.addEventListener('click', () => {
            advancedFiltersPanel.classList.toggle('open');
            const icon = btnToggleAdvanced.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    }

    // 7. VIEW MODE SWITCHING (Grid / List / Map)
    function setViewMode(mode) {
        currentViewMode = mode;
        [btnModeGrid, btnModeList, btnModeMap].forEach(b => b?.classList.remove('active'));

        if (mode === 'grid') {
            btnModeGrid?.classList.add('active');
            propertiesGrid.style.display = 'grid';
            propertiesGrid.classList.remove('list-mode');
            mapViewContainer.classList.remove('active');
            paginationContainer.style.display = 'flex';
        } else if (mode === 'list') {
            btnModeList?.classList.add('active');
            propertiesGrid.style.display = 'grid';
            propertiesGrid.classList.add('list-mode');
            mapViewContainer.classList.remove('active');
            paginationContainer.style.display = 'flex';
        } else if (mode === 'map') {
            btnModeMap?.classList.add('active');
            propertiesGrid.style.display = 'none';
            mapViewContainer.classList.add('active');
            paginationContainer.style.display = 'none';
            renderMapPins();
        }
    }

    if (btnModeGrid) btnModeGrid.addEventListener('click', () => setViewMode('grid'));
    if (btnModeList) btnModeList.addEventListener('click', () => setViewMode('list'));
    if (btnModeMap) btnModeMap.addEventListener('click', () => setViewMode('map'));

    // 8. RENDER PROPERTY CARDS
    function renderProperties() {
        if (!propertiesGrid) return;
        propertiesGrid.innerHTML = '';

        if (resultsCountEl) {
            resultsCountEl.innerHTML = `Showing <strong>${currentFilteredList.length}</strong> California Properties`;
        }

        if (currentFilteredList.length === 0) {
            propertiesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: #ffffff; border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
                    <i class="fa-solid fa-magnifying-glass-chart" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No Properties Matched Your Exact Criteria</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Try relaxing your price limits, bedrooms, or location search.</p>
                    <button class="btn btn-primary btn-sm" id="btnResetFiltersInline">Clear All Filters</button>
                </div>
            `;
            const btnReset = document.getElementById('btnResetFiltersInline');
            if (btnReset) btnReset.addEventListener('click', resetAllFilters);
            renderPagination(0);
            return;
        }

        // Pagination Slice
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = currentFilteredList.slice(startIndex, endIndex);

        pageItems.forEach(prop => {
            const isFav = savedFavorites.has(prop.id);
            const card = document.createElement('div');
            card.className = 'property-card-tech';
            card.innerHTML = `
                <div class="property-media-box">
                    <img src="${prop.image}" alt="${prop.title}" class="property-main-img" loading="lazy">
                    <span class="status-badge-chip ${prop.newConstruction ? 'badge-new' : ''}">${prop.status === 'buy' ? (prop.newConstruction ? 'New Build' : 'For Sale') : 'For Rent'}</span>
                    <button class="btn-fav-card ${isFav ? 'active' : ''}" data-id="${prop.id}" aria-label="Save Favorite">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <span class="price-tag-overlay">${prop.formattedPrice}</span>
                </div>
                <div class="property-body-content">
                    <span class="location-chip">${prop.city}, CA ${prop.zip} • ${prop.type}</span>
                    <h3 class="property-title-text">${prop.title}</h3>
                    <p class="property-address-sub"><i class="fa-solid fa-location-dot"></i> ${prop.address}</p>
                    <div class="stats-pill-grid">
                        <span><i class="fa-solid fa-bed"></i> ${prop.beds} Beds</span>
                        <span><i class="fa-solid fa-bath"></i> ${prop.baths} Baths</span>
                        <span><i class="fa-solid fa-vector-square"></i> ${prop.sqft.toLocaleString()} SqFt</span>
                    </div>
                    <div class="property-card-actions">
                        <button class="btn btn-outline btn-sm btn-open-detail" data-id="${prop.id}">
                            View Details <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <button class="btn btn-primary btn-sm btn-quick-calc" data-id="${prop.id}">
                            <i class="fa-solid fa-calculator"></i> Mortgage
                        </button>
                    </div>
                </div>
            `;
            propertiesGrid.appendChild(card);
        });

        attachCardHandlers();
        renderPagination(currentFilteredList.length);
    }

    // 9. MAP VIEW PINS RENDER
    function renderMapPins() {
        if (!mapViewContainer) return;
        const pinsLayer = document.getElementById('mapPinsLayer');
        if (!pinsLayer) return;
        pinsLayer.innerHTML = '';

        currentFilteredList.forEach(prop => {
            const pin = document.createElement('div');
            pin.className = 'map-pin';
            pin.style.left = `${prop.mapX}%`;
            pin.style.top = `${prop.mapY}%`;
            pin.innerText = prop.formattedPrice;
            pin.setAttribute('data-id', prop.id);

            pin.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('.map-pin').forEach(p => p.classList.remove('active'));
                pin.classList.add('active');
                showMapPreview(prop);
            });

            pinsLayer.appendChild(pin);
        });
    }

    function showMapPreview(prop) {
        const popup = document.getElementById('mapPreviewPopup');
        if (!popup) return;
        popup.innerHTML = `
            <div style="display: flex; gap: 10px; margin-bottom: 8px;">
                <img src="${prop.image}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 4px;">
                <div>
                    <span style="font-size: 0.72rem; color: var(--primary); font-weight: 700; text-transform: uppercase;">${prop.city}</span>
                    <h5 style="font-size: 0.95rem; margin-bottom: 2px;">${prop.title}</h5>
                    <strong style="color: var(--text-main); font-size: 1.1rem;">${prop.formattedPrice}</strong>
                </div>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 10px;">
                ${prop.beds} Beds • ${prop.baths} Baths • ${prop.sqft.toLocaleString()} Sq Ft
            </div>
            <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="openPropertyModal(${prop.id})">Open Full Details</button>
        `;
        popup.classList.add('active');
    }

    // 10. ATTACH CARD HANDLERS
    function attachCardHandlers() {
        document.querySelectorAll('.btn-fav-card').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                if (savedFavorites.has(id)) {
                    savedFavorites.delete(id);
                    btn.classList.remove('active');
                    btn.querySelector('i').className = 'fa-regular fa-heart';
                } else {
                    savedFavorites.add(id);
                    btn.classList.add('active');
                    btn.querySelector('i').className = 'fa-solid fa-heart';
                }
                updateFavCounter();
            });
        });

        document.querySelectorAll('.btn-open-detail').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                openPropertyModal(id);
            });
        });

        document.querySelectorAll('.btn-quick-calc').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                openPropertyModal(id, true);
            });
        });
    }

    // 11. PAGINATION CONTROLS
    function renderPagination(totalCount) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';

        const totalPages = Math.ceil(totalCount / itemsPerPage);
        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `btn-page-number ${i === currentPage ? 'active' : ''}`;
            pageBtn.innerText = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderProperties();
                document.getElementById('propertiesSection')?.scrollIntoView({ behavior: 'smooth' });
            });
            paginationContainer.appendChild(pageBtn);
        }
    }

    // 12. FILTER & SORT ENGINE
    function applyFilters() {
        const cityVal = document.getElementById('filterCity')?.value || '';
        const zipVal = document.getElementById('filterZip')?.value.trim().toLowerCase() || '';
        const typeVal = document.getElementById('filterType')?.value || '';
        const minPrice = parseInt(document.getElementById('filterMinPrice')?.value) || 0;
        const maxPrice = parseInt(document.getElementById('filterMaxPrice')?.value) || Infinity;
        const bedsVal = parseInt(document.getElementById('filterBeds')?.value) || 0;
        const bathsVal = parseInt(document.getElementById('filterBaths')?.value) || 0;
        const minSqftVal = parseInt(document.getElementById('filterMinSqft')?.value) || 0;
        const checkGarage = document.getElementById('checkGarage')?.checked;
        const checkPool = document.getElementById('checkPool')?.checked;
        const checkNew = document.getElementById('checkNew')?.checked;
        const checkWaterfront = document.getElementById('checkWaterfront')?.checked;
        const sortVal = sortSelect?.value || 'newest';

        currentFilteredList = californiaProperties.filter(item => {
            if (currentStatus !== 'all' && item.status !== currentStatus) return false;
            if (cityVal && item.city !== cityVal) return false;
            if (zipVal && !item.zip.includes(zipVal)) return false;
            if (typeVal && item.type !== typeVal) return false;
            if (item.price < minPrice || item.price > maxPrice) return false;
            if (bedsVal && item.beds < bedsVal) return false;
            if (bathsVal && item.baths < bathsVal) return false;
            if (minSqftVal && item.sqft < minSqftVal) return false;
            if (checkGarage && item.garage < 2) return false;
            if (checkPool && !item.pool) return false;
            if (checkNew && !item.newConstruction) return false;
            if (checkWaterfront && !item.waterfront) return false;
            return true;
        });

        // Sorting
        if (sortVal === 'newest') {
            currentFilteredList.sort((a, b) => a.daysOnMarket - b.daysOnMarket);
        } else if (sortVal === 'price-asc') {
            currentFilteredList.sort((a, b) => a.price - b.price);
        } else if (sortVal === 'price-desc') {
            currentFilteredList.sort((a, b) => b.price - a.price);
        } else if (sortVal === 'beds-desc') {
            currentFilteredList.sort((a, b) => b.beds - a.beds);
        } else if (sortVal === 'sqft-desc') {
            currentFilteredList.sort((a, b) => b.sqft - a.sqft);
        }

        renderProperties();
        if (currentViewMode === 'map') {
            renderMapPins();
        }
    }

    function resetAllFilters() {
        if (searchForm) searchForm.reset();
        currentStatus = 'buy';
        tabButtons.forEach(b => {
            if (b.getAttribute('data-status') === 'buy') b.classList.add('active');
            else b.classList.remove('active');
        });
        currentPage = 1;
        applyFilters();
    }

    if (searchForm) {
        searchForm.addEventListener('input', () => { currentPage = 1; applyFilters(); });
        searchForm.addEventListener('change', () => { currentPage = 1; applyFilters(); });
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            currentPage = 1;
            applyFilters();
            document.getElementById('propertiesSection')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', resetAllFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);

    // Initial Execution
    applyFilters();

    // 13. MORTGAGE CALCULATOR LOGIC
    const calcPriceInput = document.getElementById('calcPriceInput');
    const calcDownPayment = document.getElementById('calcDownPayment');
    const calcInterestRate = document.getElementById('calcInterestRate');
    const calcLoanTerm = document.getElementById('calcLoanTerm');
    const monthlyPaymentDisplay = document.getElementById('monthlyPaymentDisplay');
    const breakdownPiBar = document.getElementById('breakdownPiBar');
    const breakdownTaxBar = document.getElementById('breakdownTaxBar');
    const breakdownInsBar = document.getElementById('breakdownInsBar');
    const legendPiVal = document.getElementById('legendPiVal');
    const legendTaxVal = document.getElementById('legendTaxVal');
    const legendInsVal = document.getElementById('legendInsVal');

    function calculateMortgage() {
        const homePrice = parseFloat(calcPriceInput?.value) || 12000000;
        const downPercent = parseFloat(calcDownPayment?.value) || 20;
        const interestRate = parseFloat(calcInterestRate?.value) || 6.5;
        const loanYears = parseInt(calcLoanTerm?.value) || 30;

        const downAmount = homePrice * (downPercent / 100);
        const principal = homePrice - downAmount;
        const monthlyRate = (interestRate / 100) / 12;
        const numberOfPayments = loanYears * 12;

        let monthlyPI = 0;
        if (monthlyRate > 0) {
            monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        } else {
            monthlyPI = principal / numberOfPayments;
        }

        const monthlyTax = (homePrice * 0.0115) / 12; // California average 1.15%
        const monthlyInsurance = Math.max(120, (homePrice * 0.003) / 12);
        const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;

        if (monthlyPaymentDisplay) {
            monthlyPaymentDisplay.innerText = "$" + Math.round(totalMonthly).toLocaleString() + " / mo";
        }

        // Breakdown percentages
        const piPct = (monthlyPI / totalMonthly) * 100;
        const taxPct = (monthlyTax / totalMonthly) * 100;
        const insPct = (monthlyInsurance / totalMonthly) * 100;

        if (breakdownPiBar) breakdownPiBar.style.width = `${piPct}%`;
        if (breakdownTaxBar) breakdownTaxBar.style.width = `${taxPct}%`;
        if (breakdownInsBar) breakdownInsBar.style.width = `${insPct}%`;

        if (legendPiVal) legendPiVal.innerText = "$" + Math.round(monthlyPI).toLocaleString();
        if (legendTaxVal) legendTaxVal.innerText = "$" + Math.round(monthlyTax).toLocaleString();
        if (legendInsVal) legendInsVal.innerText = "$" + Math.round(monthlyInsurance).toLocaleString();
    }

    [calcPriceInput, calcDownPayment, calcInterestRate, calcLoanTerm].forEach(input => {
        input?.addEventListener('input', calculateMortgage);
    });

    calculateMortgage();

    // 14. PROPERTY DETAIL MODAL SYSTEM
    window.openPropertyModal = function(id, focusCalculator = false) {
        const prop = californiaProperties.find(p => p.id === id);
        if (!prop) return;

        const modal = document.getElementById('propertyDetailModal');
        if (!modal) return;

        document.getElementById('modalPropImg').src = prop.image;
        document.getElementById('modalPropPrice').innerText = prop.formattedPrice;
        document.getElementById('modalPropTitle').innerText = prop.title;
        document.getElementById('modalPropAddress').innerText = prop.address;
        document.getElementById('modalPropBeds').innerText = `${prop.beds} Beds`;
        document.getElementById('modalPropBaths').innerText = `${prop.baths} Baths`;
        document.getElementById('modalPropSqft').innerText = `${prop.sqft.toLocaleString()} SqFt`;
        document.getElementById('modalPropType').innerText = prop.type;
        document.getElementById('modalPropMls').innerText = `MLS #${prop.mls}`;
        document.getElementById('modalPropYear').innerText = `Built ${prop.yearBuilt}`;
        document.getElementById('modalPropDays').innerText = `${prop.daysOnMarket} Days on Market`;
        document.getElementById('modalPropDesc').innerText = prop.desc;

        // Populate Mortgage Calculator with this property's price
        if (calcPriceInput) {
            calcPriceInput.value = prop.price;
            calculateMortgage();
        }

        // Populate Agent
        document.getElementById('modalAgentName').innerText = prop.agent.name;
        document.getElementById('modalAgentPhone').innerText = prop.agent.phone;
        document.getElementById('modalAgentPhone').href = `tel:${prop.agent.phone.replace(/[^0-9]/g, '')}`;
        document.getElementById('modalAgentEmail').innerText = prop.agent.email;
        document.getElementById('modalAgentPhoto').src = prop.agent.photo;
        document.getElementById('tourPropTitleHidden').value = `${prop.title} (${prop.formattedPrice})`;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (focusCalculator) {
            setTimeout(() => {
                document.getElementById('mortgageCalcSection')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    // Close Modals
    document.querySelectorAll('.btn-close-modal').forEach(btn => {
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

    // 15. SCHEDULE SHOWING & VALUATION FORMS
    const scheduleTourForm = document.getElementById('scheduleTourForm');
    const homeValuationForm = document.getElementById('homeValuationForm');
    const genericConfirmModal = document.getElementById('genericConfirmModal');

    function handleFormConfirm(e, title, message) {
        e.preventDefault();
        document.getElementById('propertyDetailModal')?.classList.remove('active');
        if (genericConfirmModal) {
            document.getElementById('confirmTitle').innerText = title;
            document.getElementById('confirmMessage').innerText = message;
            genericConfirmModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        e.target.reset();
    }

    if (scheduleTourForm) {
        scheduleTourForm.addEventListener('submit', (e) => {
            handleFormConfirm(e, "Private Showing Requested", "Your showing request has been received by Harborstone Realty. The listing specialist will contact you within 2 business hours to confirm security access.");
        });
    }

    if (homeValuationForm) {
        homeValuationForm.addEventListener('submit', (e) => {
            handleFormConfirm(e, "Comparative Market Analysis Requested", "Thank you. Our California valuation desk will analyze recent closed comps in your neighborhood and email your detailed equity report within 24 hours.");
        });
    }

    // 16. MOBILE MENU
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
