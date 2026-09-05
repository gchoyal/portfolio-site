/**
 * VANTAGE PRIVATE ESTATES — GLOBAL LUXURY REAL ESTATE ADVISORY
 * 30 Ultra-Luxury International Properties, Multi-Currency Converter, Investment Yield Engine
 * Author: Girdhari Choyal (@gchoyal_websitedeveloper)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. DYNAMIC MULTI-CURRENCY CONVERTER ENGINE
    // =========================================================================
    let activeCurrency = 'USD'; // 'USD', 'EUR', 'GBP', 'AED'
    const exchangeRates = {
        USD: { rate: 1.00, symbol: '$', prefix: true, code: 'USD' },
        EUR: { rate: 0.92, symbol: '€', prefix: true, code: 'EUR' },
        GBP: { rate: 0.79, symbol: '£', prefix: true, code: 'GBP' },
        AED: { rate: 3.6725, symbol: 'AED ', prefix: true, code: 'AED' }
    };

    function formatPrice(usdAmount) {
        const curr = exchangeRates[activeCurrency] || exchangeRates.USD;
        const converted = Math.round(usdAmount * curr.rate);
        return `${curr.symbol}${converted.toLocaleString()}`;
    }

    // Currency Switcher Buttons Handler
    document.querySelectorAll('.curr-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.curr-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCurrency = btn.getAttribute('data-curr');
            renderProperties();
            renderDestinations();
            renderJournal();
            renderAdvisors();
        };
    });

    // =========================================================================
    // 2. 30 FICTIONAL INTERNATIONAL LUXURY PROPERTIES DATABASE
    // =========================================================================
    const propertiesData = [
        // DUBAI, UAE (5 Properties)
        {
            id: 'vpe-dxb-101',
            title: 'The Palm Crown Royal Palace',
            city: 'Dubai',
            country: 'United Arab Emirates',
            neighborhood: 'Bespoke Frond, Palm Jumeirah',
            priceUsd: 75000000,
            beds: 8,
            baths: 11,
            sqft: 24500,
            sqm: 2276,
            category: 'villas',
            categoryLabel: 'Beachfront Royal Villa',
            yieldPct: '6.8%',
            growth5Yr: '+38%',
            featured: true,
            isOffMarket: false,
            images: [
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
            ],
            advisor: { name: 'Layla Al-Maktoum', title: 'Senior Director, Middle East', phone: '+971 4 555 0199', email: 'layla@vantage-estates.com' },
            features: ['Private 120ft White Sand Beach Frontage', 'Cantilevered Glass Infinity Pool & Sunken Firepit', 'Private Superyacht Mooring Access', 'Master Suite Spa Hammam & Crystal Chandelier Gallery', 'Automated 8-Vehicle Glass Supercar Gallery'],
            description: 'Monumental custom-built contemporary palace on the most exclusive frond of Palm Jumeirah with direct Arabian Gulf sunsets and full Burj Al Arab skyline panoramas.'
        },
        {
            id: 'vpe-dxb-102',
            title: 'Jumeirah Bay Island Sea Villa',
            city: 'Dubai',
            country: 'United Arab Emirates',
            neighborhood: 'Jumeirah Bay Island',
            priceUsd: 48000000,
            beds: 6,
            baths: 8,
            sqft: 16800,
            sqm: 1560,
            category: 'waterfront',
            categoryLabel: 'Private Island Waterfront',
            yieldPct: '7.2%',
            growth5Yr: '+42%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Layla Al-Maktoum', title: 'Senior Director, Middle East', phone: '+971 4 555 0199', email: 'layla@vantage-estates.com' },
            features: ['Direct Deep-Water Yacht Slipway', 'Italian Travertine & Calacatta Stone Architecture', 'Private Chef Scullery & Tasting Cellar', 'Zero-Horizon Heated Seawater Pool'],
            description: 'Ultra-rare waterfront parcel on the Billionaire island enclave of Jumeirah Bay, surrounded by turquoise waters and Michelin dining.'
        },
        {
            id: 'vpe-dxb-103',
            title: 'Downtown Dubai Triplex Sky Mansion',
            city: 'Dubai',
            country: 'United Arab Emirates',
            neighborhood: 'Burj Crown District',
            priceUsd: 38500000,
            beds: 5,
            baths: 7,
            sqft: 12500,
            sqm: 1161,
            category: 'penthouses',
            categoryLabel: 'Three-Story Sky Penthouse',
            yieldPct: '7.5%',
            growth5Yr: '+34%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Layla Al-Maktoum', title: 'Senior Director, Middle East', phone: '+971 4 555 0199', email: 'layla@vantage-estates.com' },
            features: ['Double-Height 30ft Glass Living Salon', 'Private Rooftop Helipad & Infinity Pool', 'Burj Khalifa Front-Row Sightlines', 'Private Bullet-Resistant Executive Suite'],
            description: 'Towering triplex aerie crowning the Dubai skyline with 360-degree fountain spectacles and private elevator access.'
        },
        {
            id: 'vpe-dxb-104',
            title: 'Emirates Hills Golf Course Mansion',
            city: 'Dubai',
            country: 'United Arab Emirates',
            neighborhood: 'Sector L, Emirates Hills',
            priceUsd: 32000000,
            beds: 7,
            baths: 9,
            sqft: 19200,
            sqm: 1783,
            category: 'mansions',
            categoryLabel: 'Palatial Golf Estate',
            yieldPct: '6.4%',
            growth5Yr: '+28%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Layla Al-Maktoum', title: 'Senior Director, Middle East', phone: '+971 4 555 0199', email: 'layla@vantage-estates.com' },
            features: ['Championship Montgomerie Golf Fairway Views', 'Private 14-Seat Dolby Atmos Cinema', 'Wine Cellar & Cigar Lounge', 'Lush Landscaped Royal Grounds'],
            description: 'Often termed the Beverly Hills of Dubai, this palatial estate features grand European classical architecture and golf course frontage.'
        },
        {
            id: 'vpe-dxb-105',
            title: 'Confidential Dubai Off-Market Island Estate',
            city: 'Dubai',
            country: 'United Arab Emirates',
            neighborhood: 'The World Islands Private Archipelago',
            priceUsd: 65000000,
            beds: 9,
            baths: 12,
            sqft: 28000,
            sqm: 2601,
            category: 'off-market',
            categoryLabel: 'Off-Market Private Island',
            yieldPct: '8.2%',
            growth5Yr: '+45%',
            featured: true,
            isOffMarket: true,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Helena De Vries', title: 'Off-Market Portfolio Lead', phone: '+44 20 7946 0912', email: 'helena@vantage-estates.com' },
            features: ['Entire Private Island Compound', 'Deep-Water Superyacht Docking (Up to 80m)', 'Full Self-Sustaining Solar & Desalination Plant', 'Helipad with Night Navigation'],
            description: 'Confidential trophy island compound offering complete sovereign seclusion minutes by private boat from Dubai Marina.'
        },

        // MIAMI, FLORIDA (5 Properties)
        {
            id: 'vpe-mia-201',
            title: 'Star Island Modern Waterfront Sanctuary',
            city: 'Miami',
            country: 'United States',
            neighborhood: 'Star Island, Miami Beach',
            priceUsd: 58000000,
            beds: 7,
            baths: 9.5,
            sqft: 15500,
            sqm: 1440,
            category: 'waterfront',
            categoryLabel: 'Biscayne Bay Mega Estate',
            yieldPct: '6.2%',
            growth5Yr: '+36%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['150ft Wide-Bay Deep-Water Dock', 'Resort Lap Pool with Dual Spa Cabanas', 'Florida 0% State Income Tax Sanctuary', 'Guarded 24/7 Gated Island Security'],
            description: 'The pinnacle of Miami Beach living on private Star Island. Sleek warm organic modern architecture with unobstructed sunset views over the Biscayne skyline.'
        },
        {
            id: 'vpe-mia-202',
            title: 'Indian Creek Island Sovereign Estate',
            city: 'Miami',
            country: 'United States',
            neighborhood: 'Indian Creek Village',
            priceUsd: 82000000,
            beds: 8,
            baths: 11,
            sqft: 21000,
            sqm: 1950,
            category: 'mansions',
            categoryLabel: 'Billionaire Bunker Compound',
            yieldPct: '5.8%',
            growth5Yr: '+40%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['200ft Private Water Frontage & Private Police Force', 'Private Tennis Court & Wellness Pavilion', 'Dual Primary Wings with Italian Onyx', 'Sub-Zero & Boffi Culinary Suite'],
            description: 'Located in America’s most exclusive private municipality, Indian Creek. An unrepeatable 2-acre waterfront compound with ultra-high security.'
        },
        {
            id: 'vpe-mia-203',
            title: 'Fisher Island Seaside Penthouse',
            city: 'Miami',
            country: 'United States',
            neighborhood: 'Fisher Island',
            priceUsd: 29500000,
            beds: 5,
            baths: 5.5,
            sqft: 8900,
            sqm: 826,
            category: 'penthouses',
            categoryLabel: 'Private Island Penthouse',
            yieldPct: '6.5%',
            growth5Yr: '+26%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['Ferry / Helicopter Access Only', 'Private Rooftop Heated Saltwater Pool', 'Direct Ocean Views & Private Beach Club', 'Private Marina Slip Included'],
            description: 'America’s wealthiest zip code. Full-floor penthouse aerie commanding views of Government Cut, South Beach, and the Atlantic Ocean.'
        },
        {
            id: 'vpe-mia-204',
            title: 'Coral Gables Mediterranean Waterfront Villa',
            city: 'Miami',
            country: 'United States',
            neighborhood: 'Gables Estates',
            priceUsd: 36000000,
            beds: 6,
            baths: 8,
            sqft: 14200,
            sqm: 1319,
            category: 'villas',
            categoryLabel: 'Gables Estates Villa',
            yieldPct: '6.0%',
            growth5Yr: '+30%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['No Bridges to Open Ocean (Deep-Draft Megayachts)', 'Historic Banyan Tree Canopy Grounds', 'Wine Vault for 2,000 Bottles', 'Full Staff Quarters'],
            description: 'Direct deep-water channel access in Gables Estates with turning basin for 130ft yachts, limestone loggias, and courtyards.'
        },
        {
            id: 'vpe-mia-205',
            title: 'Brickell Avenue Super-Tower Penthouse',
            city: 'Miami',
            country: 'United States',
            neighborhood: 'Brickell Financial District',
            priceUsd: 22500000,
            beds: 4,
            baths: 4.5,
            sqft: 6800,
            sqm: 631,
            category: 'penthouses',
            categoryLabel: 'Sky Penthouse',
            yieldPct: '7.1%',
            growth5Yr: '+29%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['Double-Height Panoramic Great Room', 'Private Glass Sky Garage with Elevator', 'Rooftop Summer Kitchen & Jacuzzi', '24/7 St. Regis White-Glove Concierge'],
            description: 'Urban luxury high above Brickell Financial District with direct Biscayne Bay horizons, private car elevator, and private butler service.'
        }
    ];


    // LONDON, UNITED KINGDOM (5 Properties)
    propertiesData.push(
        {
            id: 'vpe-lon-301',
            title: 'Belgravia Grade-I Regency Townhouse',
            city: 'London',
            country: 'United Kingdom',
            neighborhood: 'Eaton Square, Belgravia',
            priceUsd: 45000000,
            beds: 6,
            baths: 7,
            sqft: 11800,
            sqm: 1096,
            category: 'mansions',
            categoryLabel: 'Grade-I Regency Mansion',
            yieldPct: '4.8%',
            growth5Yr: '+24%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Alexander Vance', title: 'Managing Partner (London & Monaco)', phone: '+44 20 7946 0199', email: 'alexander@vantage-estates.com' },
            features: ['Private Eaton Square Garden Key Access', 'Subterranean Spa, 15m Pool & Hammam', 'Internal Passenger Lift Serving All 6 Floors', 'Dedicated Mews House & Chauffeur Garage'],
            description: 'One of the grandest freehold white-stucco Regency mansions in Eaton Square, completely rebuilt behind its historic facade with modern spa amenities.'
        },
        {
            id: 'vpe-lon-302',
            title: 'Knightsbridge Hyde Park Super-Penthouse',
            city: 'London',
            country: 'United Kingdom',
            neighborhood: 'Knightsbridge, SW1X',
            priceUsd: 62000000,
            beds: 5,
            baths: 6.5,
            sqft: 9400,
            sqm: 873,
            category: 'penthouses',
            categoryLabel: 'Hyde Park Trophy Penthouse',
            yieldPct: '4.5%',
            growth5Yr: '+22%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Alexander Vance', title: 'Managing Partner (London & Monaco)', phone: '+44 20 7946 0199', email: 'alexander@vantage-estates.com' },
            features: ['Direct Unobstructed Hyde Park Frontage', 'Mandarin Oriental Hotel Managed Residences', 'Bulletproof Glass Windows & Panic Suite', 'Private Temperature-Controlled Wine Room'],
            description: 'Ultra-prime Knightsbridge aerie offering full hotel room service, 24/7 concierge, private wine cellar, and panoramic parkland views.'
        },
        {
            id: 'vpe-lon-303',
            title: 'Mayfair Heritage Ambassadorial Mansion',
            city: 'London',
            country: 'United Kingdom',
            neighborhood: 'Grosvenor Square, Mayfair',
            priceUsd: 52000000,
            beds: 7,
            baths: 8,
            sqft: 14500,
            sqm: 1347,
            category: 'mansions',
            categoryLabel: 'Ambassadorial Mansion',
            yieldPct: '4.6%',
            growth5Yr: '+25%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Alexander Vance', title: 'Managing Partner (London & Monaco)', phone: '+44 20 7946 0199', email: 'alexander@vantage-estates.com' },
            features: ['Grand Ballroom Accommodating 120 Guests', 'Portland Stone Historic Facade', 'Private Cinema & Private Gym', 'Separate Staff Wing'],
            description: 'Monumental Mayfair residence of grand proportions on Grosvenor Square, moments from private clubs, Michelin restaurants, and Bond Street.'
        },
        {
            id: 'vpe-lon-304',
            title: 'Kensington Palace Gardens Villa',
            city: 'London',
            country: 'United Kingdom',
            neighborhood: 'Billionaires Row, Kensington',
            priceUsd: 95000000,
            beds: 8,
            baths: 10,
            sqft: 22000,
            sqm: 2043,
            category: 'villas',
            categoryLabel: 'Royal Avenue Palace',
            yieldPct: '4.2%',
            growth5Yr: '+28%',
            featured: true,
            isOffMarket: true,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Helena De Vries', title: 'Off-Market Portfolio Lead', phone: '+44 20 7946 0912', email: 'helena@vantage-estates.com' },
            features: ['Diplomatic Armed Guard Street Security', 'Private 0.75-Acre Landscaped Grounds', 'Olympic-Length Underground Swimming Pool', 'Car Museum Subterranean Vault'],
            description: 'London’s most prestigious and guarded address. An incomparable detached villa with royal neighbors and multi-acre gardens.'
        },
        {
            id: 'vpe-lon-305',
            title: 'Chelsea Embankment River Thames Penthouse',
            city: 'London',
            country: 'United Kingdom',
            neighborhood: 'Cheyne Walk, Chelsea',
            priceUsd: 26500000,
            beds: 4,
            baths: 4.5,
            sqft: 6200,
            sqm: 576,
            category: 'waterfront',
            categoryLabel: 'River Thames Penthouse',
            yieldPct: '5.2%',
            growth5Yr: '+20%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Alexander Vance', title: 'Managing Partner (London & Monaco)', phone: '+44 20 7946 0199', email: 'alexander@vantage-estates.com' },
            features: ['Direct River Thames & Albert Bridge Views', 'Wraparound Landscaped Terrace', 'Direct Key-Locked Lift Entry', 'Private Secure Underground Parking'],
            description: 'Iconic Chelsea riverside living with unobstructed river views across Albert Bridge and Battersea Park, designed with Italian minimalism.'
        }
    );

    // NEW YORK, USA (5 Properties)
    propertiesData.push(
        {
            id: 'vpe-nyc-401',
            title: 'Central Park South Triplex Crown Penthouse',
            city: 'New York',
            country: 'United States',
            neighborhood: 'Billionaires Row, Central Park South',
            priceUsd: 65000000,
            beds: 6,
            baths: 7.5,
            sqft: 10500,
            sqm: 975,
            category: 'penthouses',
            categoryLabel: 'Triplex Sky Mansion',
            yieldPct: '5.4%',
            growth5Yr: '+32%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['Unobstructed 360° Central Park & River Views', '18ft Double-Height Living Great Hall', 'Private Cantilevered Glass Rooftop Pool', 'Molteni&C Dada Custom Italian Kitchen'],
            description: 'Rising over 1,000 feet above Manhattan, this triplex aerie commands the most iconic park panoramas in the world.'
        },
        {
            id: 'vpe-nyc-402',
            title: 'Tribeca Historic Cast-Iron Townhouse',
            city: 'New York',
            country: 'United States',
            neighborhood: 'Franklin Street, Tribeca',
            priceUsd: 38000000,
            beds: 5,
            baths: 6.5,
            sqft: 11200,
            sqm: 1040,
            category: 'mansions',
            categoryLabel: 'Tribeca Mega Townhouse',
            yieldPct: '5.8%',
            growth5Yr: '+29%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['Private Curb-Cut Heated Garage Inside Home', 'Internal Heated Glass Lap Pool & Spa', 'Private Landscaped Rooftop with Fireplace', 'Wine Cellar & Screening Theater'],
            description: 'Ultra-rare single-family Tribeca townhouse with deeded curb-cut private indoor garage, radiant-heated floors, and soaring skylit atrium.'
        },
        {
            id: 'vpe-nyc-403',
            title: '5th Avenue Limestone Duplex Overlooking Central Park',
            city: 'New York',
            country: 'United States',
            neighborhood: 'Upper East Side, 5th Avenue',
            priceUsd: 42000000,
            beds: 5,
            baths: 6,
            sqft: 8600,
            sqm: 799,
            category: 'penthouses',
            categoryLabel: 'Classic Pre-War Duplex',
            yieldPct: '5.0%',
            growth5Yr: '+21%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['Architect Rosario Candela Landmark Building', 'Wood-Burning Marble Fireplaces (x4)', 'Formal Dining Room for 24 Guests', 'White-Glove Staff & Elevator Attendant'],
            description: 'Masterpiece of classic New York architecture on Museum Mile, featuring direct Central Park reservoir vistas and impeccable millwork.'
        },
        {
            id: 'vpe-nyc-404',
            title: 'West Village Mews Courtyard Compound',
            city: 'New York',
            country: 'United States',
            neighborhood: 'West Village, Perry Street',
            priceUsd: 31500000,
            beds: 4,
            baths: 5,
            sqft: 7400,
            sqm: 687,
            category: 'villas',
            categoryLabel: 'Cobblestone Mews Compound',
            yieldPct: '5.6%',
            growth5Yr: '+27%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['Private Gated Cobblestone Courtyard', 'Custom Bronze & Walnut Floating Staircase', 'Full Smart Home & Lutron Lighting Integration', 'Private Wine Vault'],
            description: 'Tucked away behind a private gated mews in the West Village, combining historic charm with ultra-modern architectural finishes.'
        },
        {
            id: 'vpe-nyc-405',
            title: 'SoHo Glass Penthouse with Private Pool',
            city: 'New York',
            country: 'United States',
            neighborhood: 'SoHo Cast-Iron District',
            priceUsd: 28000000,
            beds: 4,
            baths: 4.5,
            sqft: 6900,
            sqm: 641,
            category: 'penthouses',
            categoryLabel: 'SoHo Glass Penthouse',
            yieldPct: '6.1%',
            growth5Yr: '+25%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Sebastian Sterling', title: 'Head of Americas Prime', phone: '+1 (305) 555-0188', email: 'sebastian@vantage-estates.com' },
            features: ['Private Rooftop Heated Pool Over SoHo', 'Exposed Original Brick & Modern Glass Curtain', 'Valcucine Italian Kitchen', 'Keyed Elevator Opening Directly into Foyer'],
            description: 'Architectural synthesis of SoHo cast-iron heritage and a modern glass box penthouse complete with private heated rooftop pool.'
        }
    );

    // MONACO (5 Properties)
    propertiesData.push(
        {
            id: 'vpe-mco-501',
            title: 'Monte Carlo Superyacht Harbor Penthouse',
            city: 'Monaco',
            country: 'Monaco',
            neighborhood: 'Port Hercules, Carré d’Or',
            priceUsd: 85000000,
            beds: 5,
            baths: 6.5,
            sqft: 8800,
            sqm: 817,
            category: 'waterfront',
            categoryLabel: 'Port Hercules Super-Penthouse',
            yieldPct: '3.8%',
            growth5Yr: '+35%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Camille Laurent', title: 'Principal Advisor, French Riviera & Monaco', phone: '+377 98 06 20 00', email: 'camille@vantage-estates.com' },
            features: ['Direct Formula 1 Grand Prix Front-Row Track View', 'Private Deep-Water Yacht Berthing Privileges', 'Monaco 0% Personal Income & Capital Gains Tax', 'Private Wellness Suite & Hammam'],
            description: 'The most prestigious residence in the Principality. Unrivaled sightlines directly over Port Hercules superyachts and the Grand Prix circuit.'
        },
        {
            id: 'vpe-mco-502',
            title: 'Larvotto Beachfront Duplex Penthouse',
            city: 'Monaco',
            country: 'Monaco',
            neighborhood: 'Avenue Princesse Grace, Larvotto',
            priceUsd: 68000000,
            beds: 4,
            baths: 5,
            sqft: 7200,
            sqm: 669,
            category: 'penthouses',
            categoryLabel: 'Avenue Princesse Grace Duplex',
            yieldPct: '3.6%',
            growth5Yr: '+32%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Camille Laurent', title: 'Principal Advisor, French Riviera & Monaco', phone: '+377 98 06 20 00', email: 'camille@vantage-estates.com' },
            features: ['Direct Private Beach Access on Avenue Princesse Grace', 'Private Rooftop Solarium & Heated Pool', '24/7 Concierge & Multi-Car Underground Garage', 'Panoramic Mediterranean Horizons'],
            description: 'Situated on the world’s most expensive street, Avenue Princesse Grace. Duplex waterfront luxury with direct access to private beach clubs.'
        },
        {
            id: 'vpe-mco-503',
            title: 'Cap Martin Belle Époque Seaside Villa',
            city: 'Monaco',
            country: 'Monaco',
            neighborhood: 'Cap Martin Peninsula (Monaco Border)',
            priceUsd: 55000000,
            beds: 7,
            baths: 9,
            sqft: 13500,
            sqm: 1254,
            category: 'villas',
            categoryLabel: 'Belle Époque Waterfront Villa',
            yieldPct: '4.2%',
            growth5Yr: '+28%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Camille Laurent', title: 'Principal Advisor, French Riviera & Monaco', phone: '+377 98 06 20 00', email: 'camille@vantage-estates.com' },
            features: ['Private Direct Sea Access & Boathouse', '2-Acre Olive & Cypress Tree Estate Grounds', 'Infinity Pool Hovering Over Mediterranean', 'Separate Guest House & Staff Quarters'],
            description: 'Historic Belle Époque palace on the cliffs bordering Monaco, once frequented by European royalty with private stone steps to the sea.'
        },
        {
            id: 'vpe-mco-504',
            title: 'Carré d’Or Casino Square Residence',
            city: 'Monaco',
            country: 'Monaco',
            neighborhood: 'Casino Square, Carré d’Or',
            priceUsd: 42000000,
            beds: 4,
            baths: 4.5,
            sqft: 5800,
            sqm: 538,
            category: 'mansions',
            categoryLabel: 'Casino Square Luxury Residence',
            yieldPct: '3.9%',
            growth5Yr: '+30%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Alexander Vance', title: 'Managing Partner (London & Monaco)', phone: '+44 20 7946 0199', email: 'alexander@vantage-estates.com' },
            features: ['Steps from Hotel de Paris & Casino de Monte-Carlo', 'Custom Lalique Glass & Italian Marble Finishes', 'Room Service & Valet via Hotel Hermitage', 'Ultra-Secure Access Control'],
            description: 'The Golden Triangle of Monaco. Ultra-refined residence adjacent to world-class luxury flagships, Michelin three-star restaurants, and the Opera.'
        },
        {
            id: 'vpe-mco-505',
            title: 'Confidential Monaco Cliffside Penthouse',
            city: 'Monaco',
            country: 'Monaco',
            neighborhood: 'Monaco-Ville Rock',
            priceUsd: 72000000,
            beds: 5,
            baths: 6,
            sqft: 7900,
            sqm: 734,
            category: 'off-market',
            categoryLabel: 'Off-Market Rock Penthouse',
            yieldPct: '4.0%',
            growth5Yr: '+36%',
            featured: true,
            isOffMarket: true,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Helena De Vries', title: 'Off-Market Portfolio Lead', phone: '+44 20 7946 0912', email: 'helena@vantage-estates.com' },
            features: ['Overlooking Prince’s Palace & Fontvieille Port', 'Private Clifftop Heated Infinity Pool', 'Helipad Fast Access Privileges', 'Complete Sovereign Confidentiality'],
            description: 'Rarely available clifftop residence perched on the historic Rock of Monaco with 270-degree Mediterranean horizons.'
        }
    );

    // LOS ANGELES, USA (5 Properties -> Total 30 Properties)
    propertiesData.push(
        {
            id: 'vpe-la-601',
            title: 'The Bel Air Promontory Mega Estate',
            city: 'Los Angeles',
            country: 'United States',
            neighborhood: 'East Gate Bel Air',
            priceUsd: 95000000,
            beds: 8,
            baths: 12,
            sqft: 26500,
            sqm: 2461,
            category: 'mansions',
            categoryLabel: 'Promontory Mega Estate',
            yieldPct: '5.2%',
            growth5Yr: '+30%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Julian Montgomery', title: 'West Coast Director (Los Angeles)', phone: '+1 (310) 555-0144', email: 'julian@vantage-estates.com' },
            features: ['Unobstructed Views from Downtown LA to Catalina Island', '200ft Cantilevered Infinity Pool', '10-Car Gallery & Subterranean Auto Turntable', '24-Seat Private Dolby Atmos Theater', 'Indoor Wellness Spa with Cryo & Roman Baths'],
            description: 'An architectural tour de force crowning Bel Air. Engineered with massive cantilevered steel and glass pavilions framing the entire Los Angeles basin.'
        },
        {
            id: 'vpe-la-602',
            title: 'Beverly Hills Modern French Chateau',
            city: 'Los Angeles',
            country: 'United States',
            neighborhood: 'Beverly Hills Flats',
            priceUsd: 48500000,
            beds: 7,
            baths: 9.5,
            sqft: 17800,
            sqm: 1653,
            category: 'mansions',
            categoryLabel: 'French Classical Chateau',
            yieldPct: '5.6%',
            growth5Yr: '+28%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Julian Montgomery', title: 'West Coast Director (Los Angeles)', phone: '+1 (310) 555-0144', email: 'julian@vantage-estates.com' },
            features: ['Championship Tennis Court with Viewing Pavilion', 'Hand-Carved Limestone Facades & Slate Mansard Roof', '2-Story Master Suite with Dual Dressing Rooms', 'Guest Villa & Commercial Kitchen'],
            description: 'Flawless French classical architecture in the prime flats of Beverly Hills, surrounded by privacy hedges and formal European parterre gardens.'
        },
        {
            id: 'vpe-la-603',
            title: 'Malibu Carbon Beach Modern Waterfront',
            city: 'Los Angeles',
            country: 'United States',
            neighborhood: 'Carbon Beach (Billionaires Beach), Malibu',
            priceUsd: 56000000,
            beds: 6,
            baths: 7.5,
            sqft: 10200,
            sqm: 947,
            category: 'waterfront',
            categoryLabel: 'Carbon Beach Oceanfront',
            yieldPct: '6.4%',
            growth5Yr: '+33%',
            featured: true,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Julian Montgomery', title: 'West Coast Director (Los Angeles)', phone: '+1 (310) 555-0144', email: 'julian@vantage-estates.com' },
            features: ['80ft Direct Carbon Beach Sand Frontage', 'Zero-Threshold Motorized Fleetwood Sliders', 'Oceanfront Teak Deck with Plunge Pool', 'Master Wing with Private Sunset Balcony'],
            description: 'Located on Malibu’s ultra-exclusive "Billionaire’s Beach", this Richard Meier-inspired architectural home features seamless indoor-outdoor ocean living.'
        },
        {
            id: 'vpe-la-604',
            title: 'Holmby Hills Historic Regency Estate',
            city: 'Los Angeles',
            country: 'United States',
            neighborhood: 'Holmby Hills',
            priceUsd: 68000000,
            beds: 8,
            baths: 11,
            sqft: 20500,
            sqm: 1904,
            category: 'villas',
            categoryLabel: 'Platinum Triangle Estate',
            yieldPct: '5.1%',
            growth5Yr: '+26%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Julian Montgomery', title: 'West Coast Director (Los Angeles)', phone: '+1 (310) 555-0144', email: 'julian@vantage-estates.com' },
            features: ['3-Acre Private Botanical Grounds & Secret Gardens', 'Olympic-Length Swimming Pool & Pool House', 'Screening Room Designed by Legendary Hollywood Directors', 'Gated Long Driveway with Guardhouse'],
            description: 'Legendary Holmby Hills compound in the Platinum Triangle with 3 park-like acres of rolling lawns, championship tennis court, and guest houses.'
        },
        {
            id: 'vpe-la-605',
            title: 'Hollywood Hills Bird Streets Sky Villa',
            city: 'Los Angeles',
            country: 'United States',
            neighborhood: 'The Bird Streets, Hollywood Hills',
            priceUsd: 29500000,
            beds: 5,
            baths: 6,
            sqft: 8500,
            sqm: 789,
            category: 'villas',
            categoryLabel: 'Bird Streets Architectural',
            yieldPct: '6.8%',
            growth5Yr: '+31%',
            featured: false,
            isOffMarket: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'],
            advisor: { name: 'Julian Montgomery', title: 'West Coast Director (Los Angeles)', phone: '+1 (310) 555-0144', email: 'julian@vantage-estates.com' },
            features: ['Front-Row Jetliner Views of the Sunset Strip & LA Basin', 'Zero-Edge Floating Pool Over Skyline', 'Temperature-Controlled 1,200 Bottle Wine Room', 'Automated Smart Home & Sound Systems'],
            description: 'Perched in the celebrity enclave of the Bird Streets, offering sweeping views from downtown to the Pacific with cantilevered glass living spaces.'
        }
    );


    // =========================================================================
    // 3. 6 INTERNATIONAL SENIOR ADVISORS DATABASE
    // =========================================================================
    const advisorsData = [
        {
            name: 'Alexander Vance',
            role: 'Managing Partner',
            region: 'London & Monaco',
            volume: '$2.8B+ Career Transactions',
            initials: 'AV',
            phone: '+44 20 7946 0199',
            email: 'alexander@vantage-estates.com',
            bio: 'Advising sovereign wealth funds and ultra-high-net-worth families on prime residential acquisitions in Belgravia, Mayfair, and Monaco for over 22 years.'
        },
        {
            name: 'Layla Al-Maktoum',
            role: 'Senior Director, Middle East',
            region: 'Dubai & Abu Dhabi',
            volume: '$1.9B+ Career Transactions',
            initials: 'LM',
            phone: '+971 4 555 0199',
            email: 'layla@vantage-estates.com',
            bio: 'Leading market authority on Palm Jumeirah waterfront palaces, Jumeirah Bay Island, and off-market royal estates across the UAE.'
        },
        {
            name: 'Sebastian Sterling',
            role: 'Head of Americas Prime',
            region: 'New York & Miami',
            volume: '$2.4B+ Career Transactions',
            initials: 'SS',
            phone: '+1 (305) 555-0188',
            email: 'sebastian@vantage-estates.com',
            bio: 'Specializing in trophy Manhattan penthouses on Billionaires’ Row and ultra-exclusive waterfront compounds on Star Island and Indian Creek.'
        },
        {
            name: 'Camille Laurent',
            role: 'Principal Advisor',
            region: 'French Riviera & Monaco',
            volume: '$1.4B+ Career Transactions',
            initials: 'CL',
            phone: '+377 98 06 20 00',
            email: 'camille@vantage-estates.com',
            bio: 'Connecting international private clients with Belle Époque seaside villas, Cap d’Antibes estates, and Port Hercules superyacht penthouses.'
        },
        {
            name: 'Julian Montgomery',
            role: 'West Coast Director',
            region: 'Los Angeles & Malibu',
            volume: '$1.7B+ Career Transactions',
            initials: 'JM',
            phone: '+1 (310) 555-0144',
            email: 'julian@vantage-estates.com',
            bio: 'Architectural specialist representing iconic estates across Bel Air, Holmby Hills, and beachfront compounds on Carbon Beach Malibu.'
        },
        {
            name: 'Helena De Vries',
            role: 'Off-Market Portfolio Lead',
            region: 'Global Private Client Capital',
            volume: '$3.1B+ Career Transactions',
            initials: 'HD',
            phone: '+44 20 7946 0912',
            email: 'helena@vantage-estates.com',
            bio: 'Direct confidential access to unlisted sovereign estates, private islands, and ultra-rare family office trophy assets globally.'
        }
    ];

    // =========================================================================
    // 4. 6 EDITORIAL JOURNAL ARTICLES DATABASE
    // =========================================================================
    const journalData = [
        {
            id: 'j-01',
            category: 'Dubai Market Intelligence',
            title: 'Dubai Prime Waterfront: Record Transactions on Palm Jumeirah & Jumeirah Bay',
            date: 'September 2026',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80',
            excerpt: 'An unprecedented influx of global family offices and ultra-high-net-worth capital has driven super-prime villa values on Palm Jumeirah to historical peaks.'
        },
        {
            id: 'j-02',
            category: 'Miami Ultra-Prime',
            title: 'The Billionaire Migration: Indian Creek & Star Island Redefine American Wealth Centers',
            date: 'August 2026',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80',
            excerpt: 'How tech titans and hedge fund principals are transforming South Florida into a permanent sovereign wealth corridor with zero state income tax.'
        },
        {
            id: 'j-03',
            category: 'London Prime Central',
            title: 'Belgravia & Mayfair: Why Heritage Freehold Mansions Remain the Ultimate Safe Haven',
            date: 'July 2026',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80',
            excerpt: 'Despite global regulatory shifts, historic white-stucco Regency estates in Eaton Square and Grosvenor Square command enduring institutional premiums.'
        },
        {
            id: 'j-04',
            category: 'Monaco Real Estate',
            title: 'Monaco Waterfront: Port Hercules & Carré d’Or Superyacht Enclaves',
            date: 'June 2026',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80',
            excerpt: 'With zero personal income tax and limited geographic supply, the Principality of Monaco continues to record the highest price-per-square-meter in the world.'
        },
        {
            id: 'j-05',
            category: 'Global Wealth Allocation',
            title: 'International Portfolio Strategy: Hedging Currency Risk Through Trophy Real Estate',
            date: 'May 2026',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=700&q=80',
            excerpt: 'Analyzing diversification models across USD, EUR, GBP, and AED denominated prime residential assets for multi-generational wealth preservation.'
        },
        {
            id: 'j-06',
            category: 'Architecture & Design',
            title: 'The Evolution of Super-Penthouses: Cantilevered Sky Pools & Private Helipads',
            date: 'April 2026',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80',
            excerpt: 'Leading architectural principals explore the engineering breakthroughs behind double-height glass curtain walls and rooftop pools 1,000 feet in the sky.'
        }
    ];

    // =========================================================================
    // 5. SEARCH & FILTERING CONTROLLER
    // =========================================================================
    let filterState = {
        city: 'all',
        category: 'all',
        keyword: '',
        maxPriceUsd: 150000000,
        beds: 'all'
    };

    let showOnlyOffMarket = false;

    const propertiesGrid = document.getElementById('propertiesGrid');
    const resultsCountEl = document.getElementById('resultsCountEl');

    function getFilteredProperties() {
        return propertiesData.filter(item => {
            if (showOnlyOffMarket) {
                return item.isOffMarket;
            }

            // Keyword
            if (filterState.keyword) {
                const q = filterState.keyword.toLowerCase();
                const match = item.title.toLowerCase().includes(q) ||
                              item.city.toLowerCase().includes(q) ||
                              item.neighborhood.toLowerCase().includes(q) ||
                              item.country.toLowerCase().includes(q);
                if (!match) return false;
            }

            // City
            if (filterState.city !== 'all' && item.city.toLowerCase() !== filterState.city.toLowerCase()) {
                return false;
            }

            // Category
            if (filterState.category !== 'all' && item.category !== filterState.category) {
                return false;
            }

            // Beds
            if (filterState.beds !== 'all') {
                const reqBeds = parseInt(filterState.beds);
                if (item.beds < reqBeds) return false;
            }

            // Max Price
            if (item.priceUsd > filterState.maxPriceUsd) {
                return false;
            }

            return true;
        });
    }

    function renderProperties() {
        if (!propertiesGrid) return;
        const filtered = getFilteredProperties();

        if (resultsCountEl) {
            resultsCountEl.textContent = `Displaying ${filtered.length} Exclusive International Properties`;
        }

        if (filtered.length === 0) {
            propertiesGrid.innerHTML = `
                <div class="text-center" style="grid-column: 1/-1; padding: 4rem 1rem;">
                    <i class="fa-solid fa-gem text-gold" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.3rem; color:#fff; margin-bottom: 0.5rem;">No properties match the selected criteria</h3>
                    <p class="text-muted" style="max-width: 450px; margin: 0 auto 1.5rem;">Try adjusting your city filter, category, or expanding your price threshold.</p>
                    <button class="btn btn-gold btn-sm" id="resetFiltersBtn">Reset All Filters</button>
                </div>
            `;
            const rBtn = document.getElementById('resetFiltersBtn');
            if (rBtn) rBtn.onclick = resetFilters;
            return;
        }

        propertiesGrid.innerHTML = filtered.map(item => {
            const formattedPrice = formatPrice(item.priceUsd);
            return `
                <div class="estate-card" data-id="${item.id}">
                    <div class="estate-thumb-wrap">
                        <img src="${item.images[0]}" alt="${item.title}" class="estate-thumb" loading="lazy">
                        <span class="card-tag-badge">${item.categoryLabel}</span>
                        <div class="card-location-badge">
                            <i class="fa-solid fa-location-dot text-gold"></i> ${item.city}, ${item.country}
                        </div>
                    </div>

                    <div class="estate-body">
                        <div class="estate-price-line">${formattedPrice}</div>
                        <h3 class="estate-title open-detail-trigger" data-id="${item.id}">${item.title}</h3>
                        <p class="text-muted" style="font-size:0.82rem; margin-bottom:0.5rem;">${item.neighborhood}</p>

                        <div class="estate-specs-row">
                            <div class="spec-box"><i class="fa-solid fa-bed text-gold"></i> <strong>${item.beds}</strong> Beds</div>
                            <div class="spec-box"><i class="fa-solid fa-bath text-gold"></i> <strong>${item.baths}</strong> Baths</div>
                            <div class="spec-box"><i class="fa-solid fa-ruler-combined text-gold"></i> <strong>${item.sqft.toLocaleString()}</strong> SF</div>
                        </div>

                        <div class="estate-card-actions">
                            <button class="btn btn-outline btn-sm open-detail-trigger" data-id="${item.id}">
                                <i class="fa-regular fa-eye"></i> View Estate
                            </button>
                            <button class="btn btn-gold btn-sm trigger-viewing-btn" data-title="${item.title}" data-city="${item.city}">
                                <i class="fa-solid fa-key"></i> Inquire Access
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        attachPropertyListeners();
    }

    function resetFilters() {
        filterState = { city: 'all', category: 'all', keyword: '', maxPriceUsd: 150000000, beds: 'all' };
        showOnlyOffMarket = false;

        document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
        const allCatBtn = document.querySelector('.cat-filter-btn[data-cat="all"]');
        if (allCatBtn) allCatBtn.classList.add('active');

        document.querySelectorAll('.hub-pill-btn').forEach(b => b.classList.remove('active'));
        const allHubBtn = document.querySelector('.hub-pill-btn[data-hub="all"]');
        if (allHubBtn) allHubBtn.classList.add('active');

        const kw = document.getElementById('searchKeywordInput');
        const citySel = document.getElementById('searchCitySelect');
        const catSel = document.getElementById('searchCategorySelect');
        if (kw) kw.value = '';
        if (citySel) citySel.value = 'all';
        if (catSel) catSel.value = 'all';

        renderProperties();
    }

    // =========================================================================
    // 6. DESTINATIONS, ADVISORS & JOURNAL RENDERERS
    // =========================================================================
    function renderDestinations() {
        const destGrid = document.getElementById('destinationsGrid');
        if (!destGrid) return;

        const cities = [
            { name: 'Dubai', country: 'United Arab Emirates', count: '5 Prime Estates', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80', minPrice: 32000000 },
            { name: 'Miami', country: 'United States', count: '5 Prime Estates', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80', minPrice: 22500000 },
            { name: 'London', country: 'United Kingdom', count: '5 Prime Estates', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80', minPrice: 26500000 },
            { name: 'New York', country: 'United States', count: '5 Prime Estates', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80', minPrice: 28000000 },
            { name: 'Monaco', country: 'Monaco', count: '5 Prime Estates', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80', minPrice: 42000000 },
            { name: 'Los Angeles', country: 'United States', count: '5 Prime Estates', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80', minPrice: 29500000 }
        ];

        destGrid.innerHTML = cities.map(c => `
            <div class="city-card filter-by-city-btn" data-city-name="${c.name}">
                <img src="${c.img}" alt="${c.name}" class="city-bg-img" loading="lazy">
                <div class="city-overlay">
                    <h3 class="city-name">${c.name}</h3>
                    <div class="city-meta">${c.country} • From ${formatPrice(c.minPrice)}</div>
                </div>
            </div>
        `).join('');

        destGrid.querySelectorAll('.filter-by-city-btn').forEach(btn => {
            btn.onclick = () => {
                const city = btn.getAttribute('data-city-name');
                filterState.city = city;
                document.querySelectorAll('.hub-pill-btn').forEach(b => {
                    if (b.getAttribute('data-hub').toLowerCase() === city.toLowerCase()) b.classList.add('active');
                    else b.classList.remove('active');
                });
                renderProperties();
                document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
            };
        });
    }

    function renderAdvisors() {
        const advGrid = document.getElementById('advisorsGrid');
        if (!advGrid) return;

        advGrid.innerHTML = advisorsData.map(a => `
            <div class="advisor-card">
                <div class="advisor-avatar">${a.initials}</div>
                <h4 class="advisor-name">${a.name}</h4>
                <div class="advisor-role">${a.role}</div>
                <div class="advisor-region"><i class="fa-solid fa-globe text-gold"></i> ${a.region}</div>
                <p class="text-muted" style="font-size:0.82rem; line-height:1.6; margin-bottom:1.25rem;">${a.bio}</p>
                <div style="font-size:0.78rem; font-weight:700; color:var(--gold-primary); margin-bottom:1rem;">${a.volume}</div>
                <div class="d-flex justify-content-center gap-2">
                    <a href="tel:${a.phone}" class="btn btn-outline btn-xs"><i class="fa-solid fa-phone"></i> Direct</a>
                    <button class="btn btn-gold btn-xs trigger-consultation-btn" data-advisor="${a.name}"><i class="fa-solid fa-calendar-check"></i> Consult</button>
                </div>
            </div>
        `).join('');

        attachAdvisorListeners();
    }

    function renderJournal() {
        const jGrid = document.getElementById('journalGrid');
        if (!jGrid) return;

        jGrid.innerHTML = journalData.map(j => `
            <div class="journal-card">
                <div class="journal-thumb-wrap">
                    <img src="${j.image}" alt="${j.title}" class="journal-thumb" loading="lazy">
                </div>
                <div class="journal-body">
                    <span class="journal-category">${j.category}</span>
                    <h4 class="journal-title">${j.title}</h4>
                    <p class="journal-excerpt">${j.excerpt}</p>
                    <div class="journal-meta">
                        <span><i class="fa-regular fa-clock text-gold"></i> ${j.readTime}</span>
                        <span>${j.date}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // =========================================================================
    // 7. PROPERTY DETAIL MODAL & PRIVATE VIEWING
    // =========================================================================
    const propertyModal = document.getElementById('propertyDetailModal');

    function openPropertyDetail(id) {
        const item = propertiesData.find(x => x.id === id);
        if (!item || !propertyModal) return;

        document.getElementById('modalPropertyMainImg').src = item.images[0];
        document.getElementById('modalPropertyTitle').textContent = item.title;
        document.getElementById('modalPropertyLocation').innerHTML = `<i class="fa-solid fa-location-dot text-gold"></i> ${item.neighborhood}, ${item.city}, ${item.country}`;
        document.getElementById('modalPropertyPrice').textContent = formatPrice(item.priceUsd);
        document.getElementById('modalPropertyCategory').textContent = item.categoryLabel;

        document.getElementById('modalPropertyBeds').textContent = `${item.beds} Bedrooms`;
        document.getElementById('modalPropertyBaths').textContent = `${item.baths} Bathrooms`;
        document.getElementById('modalPropertySqft').textContent = `${item.sqft.toLocaleString()} Sq. Ft. (${item.sqm} m²)`;
        document.getElementById('modalPropertyYield').textContent = item.yieldPct;

        document.getElementById('modalPropertyDesc').textContent = item.description;

        const featList = document.getElementById('modalPropertyFeatures');
        if (featList) {
            featList.innerHTML = item.features.map(f => `
                <li style="font-size:0.86rem; color:var(--text-muted); display:flex; align-items:flex-start; gap:8px;">
                    <i class="fa-solid fa-circle-check text-gold" style="margin-top:3px;"></i> ${f}
                </li>
            `).join('');
        }

        // Assigned Advisor
        document.getElementById('modalAdvisorName').textContent = item.advisor.name;
        document.getElementById('modalAdvisorTitle').textContent = item.advisor.title;
        document.getElementById('modalAdvisorPhone').textContent = item.advisor.phone;
        document.getElementById('modalAdvisorPhoneLink').href = `tel:${item.advisor.phone}`;

        // Inquire Button inside modal
        const modalInqBtn = document.getElementById('modalInquireBtn');
        if (modalInqBtn) {
            modalInqBtn.onclick = () => {
                propertyModal.classList.remove('active');
                openConsultationModal(item.title);
            };
        }

        propertyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function attachPropertyListeners() {
        document.querySelectorAll('.open-detail-trigger').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-id');
                openPropertyDetail(id);
            };
        });

        document.querySelectorAll('.trigger-viewing-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const title = btn.getAttribute('data-title');
                openConsultationModal(title);
            };
        });
    }

    function attachAdvisorListeners() {
        document.querySelectorAll('.trigger-consultation-btn').forEach(btn => {
            btn.onclick = () => {
                const advName = btn.getAttribute('data-advisor');
                openConsultationModal(`Consultation with ${advName}`);
            };
        });
    }

    // =========================================================================
    // 8. PRIVATE CONSULTATION MODAL & FORM HANDLERS
    // =========================================================================
    const consultationModal = document.getElementById('consultationModal');
    const consultationInterestInput = document.getElementById('consultationInterestInput');

    function openConsultationModal(interestSubject) {
        if (consultationInterestInput && interestSubject) {
            consultationInterestInput.value = interestSubject;
        }
        if (consultationModal) {
            consultationModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    document.querySelectorAll('.trigger-consultation-modal').forEach(btn => {
        btn.onclick = () => openConsultationModal('General Ultra-Prime Inquiry');
    });

    const consultationForm = document.getElementById('consultationFormModal');
    if (consultationForm) {
        consultationForm.onsubmit = (e) => {
            e.preventDefault();
            if (consultationModal) consultationModal.classList.remove('active');
            const thankYouModal = document.getElementById('vantageThankYouModal');
            if (thankYouModal) thankYouModal.classList.add('active');
            consultationForm.reset();
        };
    }

    const onpageConsultationForm = document.getElementById('onpageConsultationForm');
    if (onpageConsultationForm) {
        onpageConsultationForm.onsubmit = (e) => {
            e.preventDefault();
            const thankYouModal = document.getElementById('vantageThankYouModal');
            if (thankYouModal) thankYouModal.classList.add('active');
            onpageConsultationForm.reset();
        };
    }

    // =========================================================================
    // 9. OFF-MARKET VAULT NDA UNLOCK SIMULATOR
    // =========================================================================
    const unlockVaultBtn = document.getElementById('unlockVaultBtn');
    if (unlockVaultBtn) {
        unlockVaultBtn.onclick = () => {
            showOnlyOffMarket = true;
            renderProperties();
            document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
            alert('CONFIDENTIAL OFF-MARKET ACCESS GRANTED.\nDisplaying unlisted sovereign and private island trophy assets.');
        };
    }

    // Category filter pills
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterState.category = btn.getAttribute('data-cat');
            showOnlyOffMarket = (filterState.category === 'off-market');
            renderProperties();
        };
    });

    // Hero hub pills
    document.querySelectorAll('.hub-pill-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.hub-pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterState.city = btn.getAttribute('data-hub');
            renderProperties();
        };
    });

    // Hero Search Button
    const heroSearchSubmitBtn = document.getElementById('heroSearchSubmitBtn');
    if (heroSearchSubmitBtn) {
        heroSearchSubmitBtn.onclick = () => {
            const cSel = document.getElementById('searchCitySelect');
            const catSel = document.getElementById('searchCategorySelect');
            const bSel = document.getElementById('searchBedsSelect');

            if (cSel) filterState.city = cSel.value;
            if (catSel) filterState.category = catSel.value;
            if (bSel) filterState.beds = bSel.value;

            renderProperties();
            document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
        };
    }

    // Modal Close
    document.querySelectorAll('.modal-close-btn, .modal-close-trigger').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = 'auto';
        };
    });

    window.onclick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    // Mobile nav
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.onclick = () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        };
    }

    // Initialize Everything
    renderProperties();
    renderDestinations();
    renderAdvisors();
    renderJournal();
});

