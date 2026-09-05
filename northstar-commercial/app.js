/**
 * NORTHSTAR COMMERCIAL REAL ESTATE & CAPITAL MARKETS
 * Institutional CRE Platform & Investment Intelligence Engine
 * Author: Girdhari Choyal (@gchoyal_websitedeveloper)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. 30 COMPREHENSIVE COMMERCIAL PROPERTIES DATABASE
    // =========================================================================
    const creProperties = [
        // 1. INDUSTRIAL & LOGISTICS
        {
            id: 'cre-01',
            name: 'Alliance Gateway Logistics Center',
            listingType: 'buy',
            propertyType: 'industrial',
            typeLabel: 'Industrial Distribution',
            address: '14800 Intermodal Pkwy',
            city: 'Dallas-Fort Worth',
            state: 'TX',
            price: 34500000,
            leaseRate: null,
            buildingSqft: 285000,
            lotAcres: 18.4,
            capRate: 6.45,
            noi: 2225250,
            occupancy: 100,
            yearBuilt: 2021,
            zoning: 'Heavy Industrial (I-2)',
            tenantType: '100% Leased NNN (Fortune 50 Logistics)',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            description: 'State-of-the-art cross-dock distribution facility featuring 36ft clear heights, 64 dock doors, ESFR sprinklers, and a 12-year remaining corporate NNN lease with 3% annual rent escalations.',
            highlights: ['100% Leased to Global Fortune 50 E-Commerce Tenant', '12 Years Remaining on Absolute NNN Lease', '36 ft Clear Ceilings & 185 ft Truck Courts', 'Prime Direct Access to DFW Intermodal & I-35W'],
            brokerId: 'b-sarah'
        },
        {
            id: 'cre-02',
            name: 'Sky Harbor Air Logistics Park',
            listingType: 'buy',
            propertyType: 'warehouse',
            typeLabel: 'Aviation Warehouse / Cold Storage',
            address: '2800 E Air Lane',
            city: 'Phoenix',
            state: 'AZ',
            price: 21800000,
            leaseRate: null,
            buildingSqft: 165000,
            lotAcres: 11.2,
            capRate: 6.80,
            noi: 1482400,
            occupancy: 100,
            yearBuilt: 2019,
            zoning: 'A-1 Light Industrial',
            tenantType: 'Dual-Tenant Cold Storage Logistics',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
            description: 'Modern refrigerated cold-storage and air cargo distribution terminal located adjacent to Phoenix Sky Harbor International Airport with immediate runway taxiway access.',
            highlights: ['Sub-Zero Multi-Zone Refrigerated Storage Infrastructure', 'Direct Access to Phoenix Sky Harbor Airfield', 'Dual Credit Tenancy with 8.5 Year WALT', '100% Concrete Paved Truck & Trailer Staging'],
            brokerId: 'b-sarah'
        },
        {
            id: 'cre-03',
            name: 'Port of Savannah Inland Hub',
            listingType: 'lease',
            propertyType: 'industrial',
            typeLabel: 'Class A Cross-Dock Facility',
            address: '920 Logistics Way',
            city: 'Atlanta',
            state: 'GA',
            price: null,
            leaseRate: 9.75, // $ / sqft / yr NNN
            buildingSqft: 420000,
            lotAcres: 26.5,
            capRate: 6.10,
            noi: 3850000,
            occupancy: 92,
            yearBuilt: 2023,
            zoning: 'M-1 Industrial',
            tenantType: 'Direct Sublease & Speculative Expansion',
            image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
            description: 'Brand new Class A cross-dock industrial facility ready for immediate occupancy with 40ft clear heights, 88 dock levelers, and 120 dedicated trailer parking stalls.',
            highlights: ['Divisible from 100,000 to 420,000 Sq. Ft.', '40 ft Clear Height with LED Motion Sensor Lighting', 'Heavy 4,000 Amp 480V 3-Phase Power', 'Immediate I-85 & I-285 Corridor Interchange Access'],
            brokerId: 'b-sarah'
        },
        {
            id: 'cre-04',
            name: 'Piedmont Advanced Manufacturing Center',
            listingType: 'buy',
            propertyType: 'industrial',
            typeLabel: 'Advanced Manufacturing & R&D',
            address: '4100 Tech Park Blvd',
            city: 'Charlotte',
            state: 'NC',
            price: 18900000,
            leaseRate: null,
            buildingSqft: 142000,
            lotAcres: 9.8,
            capRate: 7.15,
            noi: 1351350,
            occupancy: 100,
            yearBuilt: 2018,
            zoning: 'I-1 Light Industrial',
            tenantType: 'Single-Tenant Industrial Tech',
            image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
            description: 'High-spec advanced clean manufacturing facility with heavy power, ISO-7 clean room enclosures, high-capacity cranes, and corporate headquarters office space.',
            highlights: ['10-Year Master Lease to NASDAQ Aerospace Tech Leader', 'Turnkey ISO-7 Cleanroom & R&D Laboratory Suites', 'Heavy Power Capacity (8,000 Amps)', 'Expandable Footprint with Additional 3-Acre Pad'],
            brokerId: 'b-sarah'
        },

        // 2. CLASS A OFFICE & LIFE SCIENCES
        {
            id: 'cre-05',
            name: 'The Meridian Atrium Tower',
            listingType: 'buy',
            propertyType: 'office',
            typeLabel: 'Class A Office High-Rise',
            address: '600 Congress Ave',
            city: 'Austin',
            state: 'TX',
            price: 68500000,
            leaseRate: null,
            buildingSqft: 240000,
            lotAcres: 1.4,
            capRate: 6.75,
            noi: 4623750,
            occupancy: 94,
            yearBuilt: 2017,
            zoning: 'CBD Commercial',
            tenantType: 'Multi-Tenant Tech & Institutional Finance',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            description: 'Trophy 16-story Class A downtown Austin office tower with panoramic Capitol views, LEED Gold certification, rooftop lounge, and institutional tech/legal tenants.',
            highlights: ['Anchored by Top-Tier Tech & AmLaw 100 Law Firms', 'LEED Gold Certified with Low Operating Expenses', 'Full Amenities: Executive Fitness, Conference Center, Rooftop Deck', 'Direct Walkability to 2nd Street & Lady Bird Lake'],
            brokerId: 'b-marcus'
        },
        {
            id: 'cre-06',
            name: 'South Lake Union Innovation Center',
            listingType: 'buy',
            propertyType: 'office',
            typeLabel: 'Life Science & BioTech HQ',
            address: '1120 Republican St',
            city: 'Seattle',
            state: 'WA',
            price: 84000000,
            leaseRate: null,
            buildingSqft: 185000,
            lotAcres: 1.8,
            capRate: 5.95,
            noi: 4998000,
            occupancy: 100,
            yearBuilt: 2020,
            zoning: 'SM-SLU High Density Commercial',
            tenantType: 'Single-Tenant BioTech Leader',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            description: 'Premier 8-story institutional life sciences laboratory building in Seattle’s South Lake Union hub with 60% wet lab infrastructure and 100% occupancy.',
            highlights: ['15-Year Remaining Term on Corporate Life Science Lease', 'BSL-2 & BSL-3 Wet/Dry Lab Infrastructure', '14 ft Floor-to-Floor Heights with Heavy Vibration Resistance', 'Heart of Seattle Biotech & Tech Ecosystem'],
            brokerId: 'b-marcus'
        },
        {
            id: 'cre-07',
            name: 'Wacker Financial Plaza',
            listingType: 'lease',
            propertyType: 'office',
            typeLabel: 'Trophy Financial District Office',
            address: '150 N Wacker Dr',
            city: 'Chicago',
            state: 'IL',
            price: null,
            leaseRate: 38.50, // $ / sqft / yr
            buildingSqft: 310000,
            lotAcres: 1.1,
            capRate: 7.20,
            noi: 5200000,
            occupancy: 88,
            yearBuilt: 2016,
            zoning: 'DC-16 Downtown Core',
            tenantType: 'Corporate Financial & Legal Suites',
            image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
            description: 'Iconic Chicago Riverfront office tower offering full-floor speculative suites, direct water views, luxury hospitality concierge, and tenant lounge.',
            highlights: ['Full Floors Available from 18,000 to 45,000 Sq. Ft.', 'Direct Riverwalk Frontage with Private Water Taxi Access', 'Brand New Modern Amenity Floor with Golf Simulator', 'Immediate Access to CTA Elevated Rail & Union Station'],
            brokerId: 'b-marcus'
        },
        {
            id: 'cre-08',
            name: 'Century City Executive Center',
            listingType: 'buy',
            propertyType: 'office',
            typeLabel: 'Class A Creative Office',
            address: '1901 Ave of the Stars',
            city: 'Los Angeles',
            state: 'CA',
            price: 52000000,
            leaseRate: null,
            buildingSqft: 145000,
            lotAcres: 1.2,
            capRate: 6.25,
            noi: 3250000,
            occupancy: 96,
            yearBuilt: 2015,
            zoning: 'C2 Commercial',
            tenantType: 'Entertainment, Legal & Private Equity',
            image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
            description: 'Prestigious Century City office building with high-end architectural renovations, subterranean valet parking, and blue-chip entertainment/legal tenancy.',
            highlights: ['Premier Century City Location with Unobstructed Ocean Views', 'In-Place Rents 14% Below Current Submarket Peak', 'Secure Subterranean 3.5/1,000 Sq. Ft. Parking Ratio', 'Walking Distance to Westfield Century City Lifestyle Mall'],
            brokerId: 'b-marcus'
        },

        // 3. MULTIFAMILY & INSTITUTIONAL RESIDENTIAL
        {
            id: 'cre-09',
            name: 'The Broadstone South End',
            listingType: 'buy',
            propertyType: 'multifamily',
            typeLabel: 'Class A Multifamily Asset',
            address: '2200 South Blvd',
            city: 'Charlotte',
            state: 'NC',
            price: 62000000,
            leaseRate: null,
            buildingSqft: 228000,
            lotAcres: 3.4,
            capRate: 5.85,
            noi: 3627000,
            occupancy: 97,
            yearBuilt: 2022,
            zoning: 'TOD-M Transit Oriented',
            tenantType: '240 Luxury Residential Units',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            description: 'Newly constructed 240-unit institutional luxury apartment community in Charlotte’s booming South End submarket with resort pool, rooftop sky lounge, and light rail adjacency.',
            highlights: ['240 Units with Avg Effective Rent of $2,150/month', '97% Historical Occupancy with Strong In-Migration Trends', 'Resort Pool, Pet Spa, Coworking Lounge & Dog Park', 'Steps to LYNX Blue Line Light Rail Station'],
            brokerId: 'b-david'
        },
        {
            id: 'cre-10',
            name: 'Buckhead Parkside Residences',
            listingType: 'buy',
            propertyType: 'multifamily',
            typeLabel: 'Mid-Rise Multifamily Community',
            address: '3450 Peachtree Rd NE',
            city: 'Atlanta',
            state: 'GA',
            price: 48500000,
            leaseRate: null,
            buildingSqft: 195000,
            lotAcres: 2.8,
            capRate: 6.20,
            noi: 3007000,
            occupancy: 95,
            yearBuilt: 2020,
            zoning: 'MR-4 Urban Residential',
            tenantType: '192 Luxury Apartment Homes',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'Premier 192-unit luxury multifamily asset in affluent Buckhead submarket with market-leading amenities and consistent rental growth.',
            highlights: ['Affluent Demographic ($135K+ Avg Household Income)', 'Value-Add Opportunity to Upgrade Technology Packages', 'Zero Deferred Capital Maintenance Needed', 'Underwritten with Conservative 5.5% Exit Cap'],
            brokerId: 'b-david'
        },
        {
            id: 'cre-11',
            name: 'Denver RiNo Arts Flats',
            listingType: 'buy',
            propertyType: 'multifamily',
            typeLabel: 'Urban Core Mixed-Use Multifamily',
            address: '3100 Brighton Blvd',
            city: 'Denver',
            state: 'CO',
            price: 54000000,
            leaseRate: null,
            buildingSqft: 210000,
            lotAcres: 2.1,
            capRate: 5.75,
            noi: 3105000,
            occupancy: 96,
            yearBuilt: 2021,
            zoning: 'C-MX-8 Mixed Use',
            tenantType: '215 Units + 8,500 SqFt Ground Retail',
            image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
            description: 'High-energy urban multifamily property in Denver’s RiNo Arts District with ground-floor craft dining, heated pool deck, and mountain views.',
            highlights: ['215 Units with 100% Leased Ground Floor Retail', 'Panoramic Rocky Mountain & Downtown Denver Vistas', 'Strong Rental Inflows Driven by In-Migration', 'Assumable Fixed-Rate Fannie Mae Debt at 3.95%'],
            brokerId: 'b-david'
        },
        {
            id: 'cre-12',
            name: 'Wynwood Gateway Lofts',
            listingType: 'buy',
            propertyType: 'multifamily',
            typeLabel: 'Boutique Luxury Multifamily',
            address: '250 NW 24th St',
            city: 'Miami',
            state: 'FL',
            price: 39500000,
            leaseRate: null,
            buildingSqft: 135000,
            lotAcres: 1.1,
            capRate: 5.60,
            noi: 2212000,
            occupancy: 98,
            yearBuilt: 2023,
            zoning: 'T6-8-O Urban Core',
            tenantType: '128 Luxury Micro-Lofts & Studios',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'High-performing 128-unit luxury loft building in Miami’s world-famous Wynwood Arts District with rooftop infinity pool and co-living flexibility.',
            highlights: ['98% In-Place Physical Occupancy', 'Rooftop Lounge, Sound Stage & Resort Pool', 'Short-Term Rental & Corporate Stay Certified', 'Prime Heart of Wynwood Cultural Corridor'],
            brokerId: 'b-david'
        },

        // 4. RETAIL & NET LEASE (NNN)
        {
            id: 'cre-13',
            name: 'Shoppes at Preston Forest',
            listingType: 'buy',
            propertyType: 'retail',
            typeLabel: 'Grocery-Anchored Shopping Center',
            address: '11880 Preston Rd',
            city: 'Dallas-Fort Worth',
            state: 'TX',
            price: 27500000,
            leaseRate: null,
            buildingSqft: 118000,
            lotAcres: 8.5,
            capRate: 6.60,
            noi: 1815000,
            occupancy: 98,
            yearBuilt: 2014,
            zoning: 'CR Regional Commercial',
            tenantType: 'Anchored by Whole Foods & National NNN',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
            description: 'Premier grocery-anchored regional shopping center in prestigious North Dallas with strong national credit tenancy and average 7.2-year lease terms.',
            highlights: ['Anchored by High-Volume Whole Foods Market', '98% Occupancy with 7.2 Year Weighted Average Lease Term', 'Signalized Hard-Corner Intersection (62,000+ VPD)', 'Average Household Income Exceeds $165,000 within 3 Miles'],
            brokerId: 'b-elena'
        },
        {
            id: 'cre-14',
            name: 'Brickell Avenue Retail Promenade',
            listingType: 'buy',
            propertyType: 'retail',
            typeLabel: 'Urban Streetfront Retail',
            address: '1001 Brickell Ave',
            city: 'Miami',
            state: 'FL',
            price: 31000000,
            leaseRate: null,
            buildingSqft: 42000,
            lotAcres: 0.9,
            capRate: 5.45,
            noi: 1689500,
            occupancy: 100,
            yearBuilt: 2018,
            zoning: 'T6-24-O Urban Core',
            tenantType: 'Michelin-Rated Dining & Flagship Retail',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
            description: 'Ultra-prime streetfront retail asset on Brickell Avenue occupied by Michelin-recognized restaurants, luxury fitness, and global lifestyle retail.',
            highlights: ['100% Leased to High-Credit Hospitality & Retail Brands', 'Average In-Place NNN Rent of $125/Sq. Ft.', 'Massive Pedestrian Density in Miami’s Financial District', 'Long-Term Leases with 3.5% Annual Compounding Escalations'],
            brokerId: 'b-elena'
        },
        {
            id: 'cre-15',
            name: 'Bellevue Square Outparcel Portfolio',
            listingType: 'buy',
            propertyType: 'retail',
            typeLabel: 'Triple-Net (NNN) Pad Portfolio',
            address: '400 Bellevue Way NE',
            city: 'Seattle',
            state: 'WA',
            price: 19800000,
            leaseRate: null,
            buildingSqft: 28500,
            lotAcres: 2.3,
            capRate: 5.70,
            noi: 1128600,
            occupancy: 100,
            yearBuilt: 2019,
            zoning: 'CB Commercial',
            tenantType: '100% Corporate NNN (Chase, Starbucks, CVS)',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
            description: 'Trophy three-pad NNN retail portfolio on Bellevue Way directly opposite Bellevue Square Mall with investment-grade corporate guarantors.',
            highlights: ['Investment-Grade Corporate Guaranties (JPMorgan Chase, Starbucks, CVS)', 'Zero Landlord Management Responsibilities (Absolute NNN)', 'Over $210,000 Average Household Income in Bellevue Trade Area', '14.2 Years Weighted Average Lease Term Remaining'],
            brokerId: 'b-elena'
        },
        {
            id: 'cre-16',
            name: 'SoCo Plaza Commercial Center',
            listingType: 'lease',
            propertyType: 'retail',
            typeLabel: 'Prime Lifestyle & Boutique Retail',
            address: '1600 S Congress Ave',
            city: 'Austin',
            state: 'TX',
            price: null,
            leaseRate: 68.00, // $ / sqft / yr
            buildingSqft: 34000,
            lotAcres: 1.6,
            capRate: 6.15,
            noi: 2100000,
            occupancy: 91,
            yearBuilt: 2021,
            zoning: 'CS Commercial Services',
            tenantType: 'Boutique Apparel, Cafes & Lifestyle',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
            description: 'High-foot-traffic retail spaces available in the epicentre of South Congress Avenue with patio dining rights and dedicated parking.',
            highlights: ['Spaces from 1,200 to 8,500 Sq. Ft. with Grease Trap Hookups', 'Unmatched Pedestrian Tourism & Local Foot Traffic', 'Outdoor Misted Patio Dining Licences Available', 'Over 3.2M Annual Visitors along South Congress Corridor'],
            brokerId: 'b-elena'
        },

        // 5. LAND & VALUE-ADD DEVELOPMENT SITES
        {
            id: 'cre-17',
            name: 'Lady Bird Lake Waterfront Development Site',
            listingType: 'buy',
            propertyType: 'development',
            typeLabel: 'Shovel-Ready High-Density Land',
            address: '200 E Riverside Dr',
            city: 'Austin',
            state: 'TX',
            price: 26500000,
            leaseRate: null,
            buildingSqft: 0,
            lotAcres: 4.8,
            capRate: 0.0,
            noi: 0,
            occupancy: 0,
            yearBuilt: 2024,
            zoning: 'ERC South Shore District (High-Rise)',
            tenantType: 'Entitled for 450 Units or 350K SqFt Office',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
            description: 'Rare entitled waterfront development parcel on Lady Bird Lake with fully approved master development agreements for mixed-use residential tower.',
            highlights: ['Fully Entitled for Up to 28 Stories & 450 Residential Units', 'Direct Unobstructed Views of Downtown Austin & Lakefront', 'All Municipal Utilities & Environmental Clearances In-Place', 'Prime Opportunity in Austin’s High-Growth South Shore Core'],
            brokerId: 'b-jonathan'
        },
        {
            id: 'cre-18',
            name: 'Phoenix East Valley Industrial Megasite',
            listingType: 'buy',
            propertyType: 'development',
            typeLabel: 'Industrial Park Land Site',
            address: '8800 S Power Rd',
            city: 'Phoenix',
            state: 'AZ',
            price: 18200000,
            leaseRate: null,
            buildingSqft: 0,
            lotAcres: 42.0,
            capRate: 0.0,
            noi: 0,
            occupancy: 0,
            yearBuilt: 2024,
            zoning: 'I-2 Heavy Industrial / Semiconductor Corridor',
            tenantType: 'Permitted for 650,000 SqFt Logistics Park',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
            description: '42-acre shovel-ready industrial development site in the booming East Valley semiconductor corridor with power allocations and rail spur feasibility.',
            highlights: ['42 Contiguous Acres with Direct Loop 202 Freeway Frontage', 'Approved for up to 650,000 Sq. Ft. of Class A Industrial', '30 MW Power Commitment from Salt River Project (SRP)', 'Adjacent to Major Microchip & Advanced Manufacturing Hubs'],
            brokerId: 'b-jonathan'
        },
        {
            id: 'cre-19',
            name: 'Midtown Atlanta Assemblage Parcel',
            listingType: 'buy',
            propertyType: 'development',
            typeLabel: 'Urban Core Mixed-Use Land',
            address: '1050 Spring St NW',
            city: 'Atlanta',
            state: 'GA',
            price: 22500000,
            leaseRate: null,
            buildingSqft: 0,
            lotAcres: 2.2,
            capRate: 0.0,
            noi: 0,
            occupancy: 0,
            yearBuilt: 2024,
            zoning: 'SPI-16 Midtown High Density',
            tenantType: 'Entitled for 38-Story Mixed-Use High-Rise',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            description: 'Trophy urban high-rise development site in Midtown Atlanta’s Technology Square with flexible zoning allowing residential, hotel, and commercial office.',
            highlights: ['Zoned for High-Rise Mixed-Use (Max FAR 15.0)', 'Directly Adjacent to Georgia Tech Technology Square', 'Short Walk to Midtown MARTA Transit Station', 'Unmatched Demand for Institutional Student & Tech Housing'],
            brokerId: 'b-jonathan'
        },

        // 6. ADDITIONAL DIVERSIFIED COMMERCIAL ASSETS (Floors 20 to 30)
        {
            id: 'cre-20',
            name: 'Grand Central Life Sciences Center',
            listingType: 'buy',
            propertyType: 'office',
            typeLabel: 'Medical Office & Outpatient Center',
            address: '450 Lexington Ave',
            city: 'New York',
            state: 'NY',
            price: 95000000,
            leaseRate: null,
            buildingSqft: 175000,
            lotAcres: 0.8,
            capRate: 5.90,
            noi: 5605000,
            occupancy: 95,
            yearBuilt: 2017,
            zoning: 'C5-3 High Density Midtown',
            tenantType: 'Hospital Health System & Surgery Center',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            description: 'Premier Manhattan medical outpatient and life sciences facility master-leased to a major New York academic hospital network.',
            highlights: ['Master Leased to Top-Tier Academic Medical Institution', 'State-of-the-Art Ambulatory Surgery & Imaging Suites', '1 Block from Grand Central Terminal Subway & Rail', 'Recession-Resilient Healthcare Credit Cash Flows'],
            brokerId: 'b-marcus'
        },
        {
            id: 'cre-21',
            name: 'Fulton Market Creative Office Loft',
            listingType: 'buy',
            propertyType: 'office',
            typeLabel: 'Class A Creative Office',
            address: '1000 W Fulton Market',
            city: 'Chicago',
            state: 'IL',
            price: 43000000,
            leaseRate: null,
            buildingSqft: 110000,
            lotAcres: 0.9,
            capRate: 6.85,
            noi: 2945500,
            occupancy: 92,
            yearBuilt: 2019,
            zoning: 'DX-5 Downtown Mixed-Use',
            tenantType: 'Tech, Advertising & Media Leaders',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            description: 'Authentic heavy-timber and architectural brick loft office building in Fulton Market with private outdoor balconies and Michelin-caliber surrounding amenities.',
            highlights: ['Located in Chicago’s Hottest Submarket (Fulton Market)', 'Exposed Brick, Timber Ceilings & Industrial Pivot Windows', 'Surrounded by Corporate HQs (Google, McDonald’s, Dyson)', 'Private Rooftop Deck with River & Skyline Views'],
            brokerId: 'b-marcus'
        },
        {
            id: 'cre-22',
            name: 'Denver International Logistics Hub',
            listingType: 'buy',
            propertyType: 'warehouse',
            typeLabel: 'Class A Modern Logistics',
            address: '7200 Tower Rd',
            city: 'Denver',
            state: 'CO',
            price: 29500000,
            leaseRate: null,
            buildingSqft: 245000,
            lotAcres: 16.0,
            capRate: 6.35,
            noi: 1873250,
            occupancy: 100,
            yearBuilt: 2022,
            zoning: 'I-B Industrial',
            tenantType: '100% Leased to National Retail Distributor',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            description: 'Newly constructed 245,000 sqft high-cube industrial warehouse with immediate proximity to Denver International Airport (DEN) and E-470 highway.',
            highlights: ['36 ft Clear Heights with 54x50 ft Column Spacing', '10-Year Firm Term Remaining with 3.25% Annual Bumps', '135 ft Truck Courts & 68 Dedicated Trailer Parking Stalls', 'Prime Front-Range Colorado Logistics Corridor'],
            brokerId: 'b-sarah'
        },
        {
            id: 'cre-23',
            name: 'Dallas Telecom & Data Center',
            listingType: 'buy',
            propertyType: 'industrial',
            typeLabel: 'Mission-Critical Enterprise Data Center',
            address: '2323 Bryan St',
            city: 'Dallas-Fort Worth',
            state: 'TX',
            price: 58000000,
            leaseRate: null,
            buildingSqft: 155000,
            lotAcres: 4.2,
            capRate: 6.50,
            noi: 3770000,
            occupancy: 100,
            yearBuilt: 2016,
            zoning: 'I-1 Industrial',
            tenantType: 'Carrier-Neutral Telecom & Cloud Provider',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            description: 'Mission-critical Tier III enterprise data center facility with 16 MW critical IT load, redundant utility feeds from Oncor, and 2N generator backup.',
            highlights: ['16 Megawatts (MW) Dedicated Substation Power Capacity', 'Tier III Redundant (2N) Critical UPS & Generator Infrastructure', 'Direct Fiber Interconnection to DFW Carrier Hotel', '100% Leased to Enterprise S&P 500 Cloud Company'],
            brokerId: 'b-sarah'
        },
        {
            id: 'cre-24',
            name: 'South Beach Luxury Retail Galleria',
            listingType: 'buy',
            propertyType: 'retail',
            typeLabel: 'Prime Coastal Flagship Retail',
            address: '820 Lincoln Rd',
            city: 'Miami',
            state: 'FL',
            price: 24800000,
            leaseRate: null,
            buildingSqft: 19500,
            lotAcres: 0.6,
            capRate: 5.65,
            noi: 1401200,
            occupancy: 100,
            yearBuilt: 2017,
            zoning: 'CD-3 Commercial High Density',
            tenantType: 'Flagship Fashion & Jewelry NNN',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
            description: 'Iconic pedestrian mall flagship retail building on Lincoln Road in South Beach occupied by international luxury fashion and beauty boutiques.',
            highlights: ['Premier Center-Block Location on Lincoln Road Pedestrian Mall', 'Triple-Net Leases with Zero Landlord Responsibilities', 'Over 11 Million Annual International Pedestrian Shoppers', 'Historical Rental Stability with High Barriers to Entry'],
            brokerId: 'b-elena'
        },
        {
            id: 'cre-25',
            name: 'Seattle Waterfront Mixed-Use Marina',
            listingType: 'buy',
            propertyType: 'retail',
            typeLabel: 'Waterfront Retail & Marina Commercial',
            address: '2201 Alaskan Way',
            city: 'Seattle',
            state: 'WA',
            price: 36500000,
            leaseRate: null,
            buildingSqft: 65000,
            lotAcres: 3.2,
            capRate: 6.10,
            noi: 2226500,
            occupancy: 94,
            yearBuilt: 2018,
            zoning: 'W-C Waterfront Commercial',
            tenantType: 'Seafood Restaurants, Marina & Retail',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
            description: 'Trophy waterfront retail, dining, and commercial boat slip complex on Elliott Bay benefitting from Seattle’s new $1B Waterfront Park promenade.',
            highlights: ['Direct Frontage on Seattle’s Newly Completed $1B Waterfront Park', 'Includes 48 Commercial Yacht Slips & 3 Flagship Restaurants', 'Protected Unobstructed Views of Elliott Bay & Olympic Mountains', 'Strong Historical Cash Flows and Tourist Volume'],
            brokerId: 'b-elena'
        },
        {
            id: 'cre-26',
            name: 'Austin Domain Mixed-Use Portfolio',
            listingType: 'buy',
            propertyType: 'office',
            typeLabel: 'Class A Office & Ground Retail',
            address: '11501 Alterra Pkwy',
            city: 'Austin',
            state: 'TX',
            price: 74000000,
            leaseRate: null,
            buildingSqft: 215000,
            lotAcres: 2.4,
            capRate: 6.40,
            noi: 4736000,
            occupancy: 95,
            yearBuilt: 2021,
            zoning: 'Domain Specific Plan',
            tenantType: 'Enterprise Tech, Co-Working & Dining',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            description: 'High-performing Class A office and lifestyle retail building in Austin’s "Second Downtown" (The Domain) with structured parking and enterprise tech tenants.',
            highlights: ['Located in The Domain — Austin’s Premier Tech & Lifestyle Hub', 'Anchored by Tier-1 Enterprise Software Tenant on 10-Yr Lease', 'Structured Parking Garage with 3.8/1,000 Ratio', 'Surrounded by Over 200 Retailers, Hotels, and Luxury Residences'],
            brokerId: 'b-marcus'
        },
        {
            id: 'cre-27',
            name: 'Atlanta I-85 Industrial Logistics Park',
            listingType: 'buy',
            propertyType: 'industrial',
            typeLabel: 'Multi-Tenant Industrial Park',
            address: '5400 Tradeport Blvd',
            city: 'Atlanta',
            state: 'GA',
            price: 41500000,
            leaseRate: null,
            buildingSqft: 360000,
            lotAcres: 24.0,
            capRate: 6.70,
            noi: 2780500,
            occupancy: 96,
            yearBuilt: 2019,
            zoning: 'M-1 Heavy Industrial',
            tenantType: '4 National Supply Chain Distributors',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            description: 'Two-building institutional industrial park on the I-85 South corridor featuring 32ft clear heights, rear-load configuration, and stable in-place cash flows.',
            highlights: ['Two-Building Institutional Park (180,000 Sq. Ft. Each)', '96% Occupancy across 4 Strong National Tenants', 'Staggered Lease Rollover Minimizing Re-Leasing Risk', 'Direct Access to Hartsfield-Jackson Atlanta International Airport'],
            brokerId: 'b-sarah'
        },
        {
            id: 'cre-28',
            name: 'Charlotte South End Multifamily Pad',
            listingType: 'buy',
            propertyType: 'development',
            typeLabel: 'Shovel-Ready Multifamily Land',
            address: '1800 Tryon St',
            city: 'Charlotte',
            state: 'NC',
            price: 14500000,
            leaseRate: null,
            buildingSqft: 0,
            lotAcres: 2.9,
            capRate: 0.0,
            noi: 0,
            occupancy: 0,
            yearBuilt: 2024,
            zoning: 'TOD-UC Urban Center',
            tenantType: 'Entitled for 280-Unit Apartment Community',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
            description: 'Fully entitled 2.9-acre development site in Charlotte South End approved for 280 Class A luxury apartment units and 12,000 sqft ground retail.',
            highlights: ['Approved Shovel-Ready Site for 280 Residential Units', 'Located in Charlotte’s Highest Rent-Growth Submarket', 'Civil Engineering, Environmental Phase I & Site Plans Approved', 'Walking Distance to Carson Light Rail Station'],
            brokerId: 'b-jonathan'
        },
        {
            id: 'cre-29',
            name: 'Phoenix Logistics Center IV',
            listingType: 'lease',
            propertyType: 'warehouse',
            typeLabel: 'Speculative Distribution Warehouse',
            address: '9500 W Buckeye Rd',
            city: 'Phoenix',
            state: 'AZ',
            price: null,
            leaseRate: 8.95, // $ / sqft / yr
            buildingSqft: 310000,
            lotAcres: 20.5,
            capRate: 6.25,
            noi: 2774500,
            occupancy: 85,
            yearBuilt: 2023,
            zoning: 'A-1 Light Industrial',
            tenantType: 'Immediate Occupancy / Divisible',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
            description: 'Brand new high-cube industrial warehouse in the West Phoenix submarket with 40ft clear heights, solar-ready roof, and ESFR fire suppression.',
            highlights: ['Divisible to 75,000 Sq. Ft.', '40 ft Clear Ceiling Height & 68 Dock High Doors', '7-Inch Reinforced Concrete Slab Flooring', 'Immediate Access to I-10 Freeway Freight Corridor'],
            brokerId: 'b-sarah'
        },
        {
            id: 'cre-30',
            name: 'New York Financial District Landmark',
            listingType: 'buy',
            propertyType: 'office',
            typeLabel: 'Trophy Office / Conversion Candidate',
            address: '40 Wall St',
            city: 'New York',
            state: 'NY',
            price: 110000000,
            leaseRate: null,
            buildingSqft: 480000,
            lotAcres: 1.2,
            capRate: 7.45,
            noi: 8195000,
            occupancy: 88,
            yearBuilt: 2012,
            zoning: 'C5-5 Downtown Financial Core',
            tenantType: 'Financial, Legal & Tech Tenancy',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            description: 'Prestigious Wall Street institutional office asset with significant in-place cash flows and residential conversion upside on upper tower floors.',
            highlights: ['Institutional Scale in Heart of Lower Manhattan Financial Hub', 'Below-Market In-Place Leases Offering Immediate Mark-to-Market Upside', 'Upper Tower Floors Ideal for High-Density Luxury Residential Conversion', 'Steps from NYSE, Federal Hall, and 12 Subway Lines'],
            brokerId: 'b-marcus'
        }
    ];

    // =========================================================================
    // 2. 6 NATIONAL COMMERCIAL MARKET REPORTS DATA
    // =========================================================================
    const marketReports = [
        {
            market: 'Dallas-Fort Worth',
            sector: 'Industrial & Logistics',
            avgPsf: '$138 / sqft',
            avgCap: '6.35%',
            vacancy: '5.2%',
            annualChange: '+8.4%',
            trend: 'up',
            highlights: 'Record-setting logistics absorption driven by intermodal rail connectivity and e-commerce distribution.'
        },
        {
            market: 'Austin, Texas',
            sector: 'Class A Tech Office',
            avgPsf: '$385 / sqft',
            avgCap: '6.70%',
            vacancy: '14.8%',
            annualChange: '+3.2%',
            trend: 'up',
            highlights: 'Flight-to-quality trend favors trophy Downtown and Domain assets with prime wellness amenities.'
        },
        {
            market: 'Phoenix, Arizona',
            sector: 'Cold Storage & Industrial',
            avgPsf: '$165 / sqft',
            avgCap: '6.45%',
            vacancy: '4.9%',
            annualChange: '+11.2%',
            trend: 'up',
            highlights: 'Semiconductor megaprojects and Southwest supply chain expansion driving industrial rent spikes.'
        },
        {
            market: 'Atlanta, Georgia',
            sector: 'Multifamily Communities',
            avgPsf: '$248 / sqft',
            avgCap: '5.90%',
            vacancy: '6.1%',
            annualChange: '+6.8%',
            trend: 'up',
            highlights: 'Strong job migration into Midtown and Perimeter supporting sustained multi-family rental increases.'
        },
        {
            market: 'Miami, Florida',
            sector: 'Urban Streetfront Retail',
            avgPsf: '$850 / sqft',
            avgCap: '5.40%',
            vacancy: '3.8%',
            annualChange: '+14.5%',
            trend: 'up',
            highlights: 'Ultra-luxury wealth migration into Brickell, Design District, and South Beach driving peak retail sales.'
        },
        {
            market: 'Chicago, Illinois',
            sector: 'Mixed-Use & Suburban Office',
            avgPsf: '$195 / sqft',
            avgCap: '7.30%',
            vacancy: '16.5%',
            annualChange: '-1.4%',
            trend: 'down',
            highlights: 'Fulton Market outperforms while older downtown assets present attractive residential conversion discounts.'
        }
    ];

    // =========================================================================
    // 3. 5 COMMERCIAL BROKERS DATABASE
    // =========================================================================
    const brokersData = [
        {
            id: 'b-jonathan',
            name: 'Jonathan Mercer, CCIM',
            title: 'Managing Director • Capital Markets & Development',
            specialty: 'Institutional Land, Portfolios & Capital Advisory',
            volume: '$1.4B+ Closed',
            deals: '84 Transactions',
            phone: '+1 (214) 555-0144',
            email: 'j.mercer@northstarcommercial.com',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b-sarah',
            name: 'Sarah Sterling, SIOR',
            title: 'Senior Vice President • Industrial & Logistics',
            specialty: 'Big-Box Cross-Dock & Cold Storage Infrastructure',
            volume: '$890M+ Closed',
            deals: '112 Transactions',
            phone: '+1 (404) 555-0182',
            email: 's.sterling@northstarcommercial.com',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b-david',
            name: 'David Chen',
            title: 'Executive Vice President • Multifamily Investments',
            specialty: 'Class A Communities & Value-Add Portfolios',
            volume: '$760M+ Closed',
            deals: '68 Transactions',
            phone: '+1 (512) 555-0193',
            email: 'd.chen@northstarcommercial.com',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b-elena',
            name: 'Elena Rostova',
            title: 'Director • Prime Retail & Net Lease (NNN)',
            specialty: 'Grocery-Anchored Centers & High-Street Flagships',
            volume: '$520M+ Closed',
            deals: '95 Transactions',
            phone: '+1 (305) 555-0129',
            email: 'e.rostova@northstarcommercial.com',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b-marcus',
            name: 'Marcus Vance, CCIM',
            title: 'Senior Advisor • Office & Life Sciences',
            specialty: 'Corporate Headquarter Campuses & BioTech Labs',
            volume: '$640M+ Closed',
            deals: '72 Transactions',
            phone: '+1 (206) 555-0177',
            email: 'm.vance@northstarcommercial.com',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
        }
    ];

    // =========================================================================
    // 4. PROPERTY SEARCH & FILTER ENGINE
    // =========================================================================
    const crePropertiesGrid = document.getElementById('crePropertiesGrid');
    const resultsCountText = document.getElementById('resultsCountText');
    const toggleAdvancedFilterBtn = document.getElementById('toggleAdvancedFilterBtn');
    const creFilterAdvancedBox = document.getElementById('creFilterAdvancedBox');

    // Filter Controls
    const filterListingType = document.getElementById('filterListingType');
    const filterPropertyType = document.getElementById('filterPropertyType');
    const filterLocation = document.getElementById('filterLocation');
    const filterPriceMin = document.getElementById('filterPriceMin');
    const filterCapRateMin = document.getElementById('filterCapRateMin');
    const filterMinSqft = document.getElementById('filterMinSqft');
    const filterOccupancyMin = document.getElementById('filterOccupancyMin');
    const filterSortBy = document.getElementById('filterSortBy');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');

    function renderProperties() {
        if (!crePropertiesGrid) return;

        const listingType = filterListingType ? filterListingType.value : 'all';
        const propType = filterPropertyType ? filterPropertyType.value : 'all';
        const location = filterLocation ? filterLocation.value : 'all';
        const priceMin = filterPriceMin ? parseFloat(filterPriceMin.value) || 0 : 0;
        const capMin = filterCapRateMin ? parseFloat(filterCapRateMin.value) || 0 : 0;
        const sqftMin = filterMinSqft ? parseFloat(filterMinSqft.value) || 0 : 0;
        const occMin = filterOccupancyMin ? parseFloat(filterOccupancyMin.value) || 0 : 0;
        const sortBy = filterSortBy ? filterSortBy.value : 'featured';

        let filtered = creProperties.filter(prop => {
            if (listingType !== 'all' && prop.listingType !== listingType) return false;
            if (propType !== 'all' && prop.propertyType !== propType) return false;
            if (location !== 'all' && !prop.city.toLowerCase().includes(location.toLowerCase())) return false;
            if (prop.price && prop.price < priceMin) return false;
            if (prop.capRate && prop.capRate < capMin) return false;
            if (prop.buildingSqft && prop.buildingSqft < sqftMin) return false;
            if (prop.occupancy && prop.occupancy < occMin) return false;
            return true;
        });

        // Sorting
        if (sortBy === 'price-desc') {
            filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        } else if (sortBy === 'price-asc') {
            filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        } else if (sortBy === 'cap-desc') {
            filtered.sort((a, b) => (b.capRate || 0) - (a.capRate || 0));
        } else if (sortBy === 'sqft-desc') {
            filtered.sort((a, b) => (b.buildingSqft || 0) - (a.buildingSqft || 0));
        } else if (sortBy === 'noi-desc') {
            filtered.sort((a, b) => (b.noi || 0) - (a.noi || 0));
        }

        if (resultsCountText) {
            resultsCountText.textContent = `Showing ${filtered.length} Commercial Investment Properties`;
        }

        crePropertiesGrid.innerHTML = '';

        if (filtered.length === 0) {
            crePropertiesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-md);">
                    <i class="fa-solid fa-building-circle-xmark" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.5rem;">No Commercial Properties Match Criteria</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Try lowering minimum cap rate or clearing specific filters to see more commercial listings.</p>
                    <button class="btn btn-primary btn-sm" onclick="document.getElementById('clearFiltersBtn').click();">Reset Filters</button>
                </div>
            `;
            return;
        }

        filtered.forEach(prop => {
            const card = document.createElement('div');
            card.className = 'cre-card';

            const priceDisplay = prop.price 
                ? `$${(prop.price / 1000000).toFixed(1)}M` 
                : `$${prop.leaseRate.toFixed(2)} / SF/yr`;
            
            const psfDisplay = prop.price && prop.buildingSqft > 0
                ? `$${Math.round(prop.price / prop.buildingSqft)} / SF`
                : 'NNN Lease';

            const capBadge = prop.capRate > 0 
                ? `<span class="cre-cap-pill">${prop.capRate.toFixed(2)}% CAP</span>` 
                : `<span class="cre-cap-pill" style="background:var(--primary-blue);">DEV LAND</span>`;

            card.innerHTML = `
                <div class="cre-card-media">
                    <img src="${prop.image}" alt="${prop.name}" loading="lazy">
                    <span class="cre-status-badge">${prop.listingType === 'buy' ? 'Investment Sale' : 'Direct Lease'}</span>
                    ${capBadge}
                </div>
                <div class="cre-card-body">
                    <div>
                        <div class="cre-card-type">${prop.typeLabel}</div>
                        <h3 class="cre-card-title">${prop.name}</h3>
                        <div class="cre-card-location">
                            <i class="fa-solid fa-location-dot text-blue"></i> ${prop.address}, ${prop.city}, ${prop.state}
                        </div>

                        <!-- 3-Column Metrics Strip -->
                        <div class="cre-metrics-grid">
                            <div class="cre-metric-cell">
                                <div class="val">${prop.buildingSqft > 0 ? (prop.buildingSqft / 1000).toFixed(0) + 'k' : prop.lotAcres + ' ac'}</div>
                                <div class="lbl">${prop.buildingSqft > 0 ? 'Sq. Ft.' : 'Lot Acres'}</div>
                            </div>
                            <div class="cre-metric-cell">
                                <div class="val text-emerald">${prop.occupancy > 0 ? prop.occupancy + '%' : 'Entitled'}</div>
                                <div class="lbl">Occupancy</div>
                            </div>
                            <div class="cre-metric-cell">
                                <div class="val">${prop.noi > 0 ? '$' + (prop.noi / 1000000).toFixed(2) + 'M' : 'Value-Add'}</div>
                                <div class="lbl">In-Place NOI</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="cre-card-price-row">
                            <div>
                                <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-light); font-weight: 700;">Price / Guidance</div>
                                <div class="cre-price-num">${priceDisplay}</div>
                            </div>
                            <div class="cre-psf-num">${psfDisplay}</div>
                        </div>

                        <div style="display:flex; gap:8px;">
                            <button class="btn btn-navy btn-sm open-cre-modal-btn" data-prop-id="${prop.id}" style="flex:1;">
                                <i class="fa-solid fa-chart-line"></i> View Financials
                            </button>
                            <button class="btn btn-primary btn-sm open-om-form-btn" data-prop-name="${prop.name}" style="flex:1;">
                                <i class="fa-solid fa-file-shield"></i> Request OM
                            </button>
                        </div>
                    </div>
                </div>
            `;

            crePropertiesGrid.appendChild(card);
        });

        attachCreModalEvents();
    }

    // Filter Event Listeners
    [filterListingType, filterPropertyType, filterLocation, filterPriceMin, filterCapRateMin, filterMinSqft, filterOccupancyMin, filterSortBy].forEach(el => {
        if (el) el.addEventListener('change', renderProperties);
    });

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            if (filterListingType) filterListingType.value = 'all';
            if (filterPropertyType) filterPropertyType.value = 'all';
            if (filterLocation) filterLocation.value = 'all';
            if (filterPriceMin) filterPriceMin.value = '0';
            if (filterCapRateMin) filterCapRateMin.value = '0';
            if (filterMinSqft) filterMinSqft.value = '0';
            if (filterOccupancyMin) filterOccupancyMin.value = '0';
            if (filterSortBy) filterSortBy.value = 'featured';
            renderProperties();
        });
    }

    if (toggleAdvancedFilterBtn && creFilterAdvancedBox) {
        toggleAdvancedFilterBtn.addEventListener('click', () => {
            creFilterAdvancedBox.classList.toggle('active');
            toggleAdvancedFilterBtn.innerHTML = creFilterAdvancedBox.classList.contains('active')
                ? '<i class="fa-solid fa-sliders"></i> Hide Advanced Filters'
                : '<i class="fa-solid fa-sliders"></i> Advanced Financial Filters';
        });
    }

    // =========================================================================
    // 5. PROPERTY DETAIL & INVESTMENT DASHBOARD MODAL
    // =========================================================================
    const propertyDetailModal = document.getElementById('propertyDetailModal');
    const modalPropTitle = document.getElementById('modalPropTitle');
    const modalPropAddress = document.getElementById('modalPropAddress');
    const modalPropImage = document.getElementById('modalPropImage');
    const modalPropDesc = document.getElementById('modalPropDesc');

    // 4 KPI Metric Elements
    const kpiCapRate = document.getElementById('kpiCapRate');
    const kpiNoi = document.getElementById('kpiNoi');
    const kpiOccupancy = document.getElementById('kpiOccupancy');
    const kpiPsf = document.getElementById('kpiPsf');

    // Specs Table
    const modalSpecPrice = document.getElementById('modalSpecPrice');
    const modalSpecBuildingSqft = document.getElementById('modalSpecBuildingSqft');
    const modalSpecLotSize = document.getElementById('modalSpecLotSize');
    const modalSpecYearBuilt = document.getElementById('modalSpecYearBuilt');
    const modalSpecZoning = document.getElementById('modalSpecZoning');
    const modalSpecTenantType = document.getElementById('modalSpecTenantType');

    // Highlights & Broker
    const modalHighlightsList = document.getElementById('modalHighlightsList');
    const modalBrokerName = document.getElementById('modalBrokerName');
    const modalBrokerTitle = document.getElementById('modalBrokerTitle');
    const modalBrokerPhone = document.getElementById('modalBrokerPhone');
    const modalBrokerEmail = document.getElementById('modalBrokerEmail');
    const modalOmDirectBtn = document.getElementById('modalOmDirectBtn');

    function openPropertyModal(propId) {
        const prop = creProperties.find(p => p.id === propId);
        if (!prop || !propertyDetailModal) return;

        if (modalPropTitle) modalPropTitle.textContent = prop.name;
        if (modalPropAddress) modalPropAddress.innerHTML = `<i class="fa-solid fa-location-dot text-blue"></i> ${prop.address}, ${prop.city}, ${prop.state}`;
        if (modalPropImage) modalPropImage.src = prop.image;
        if (modalPropDesc) modalPropDesc.textContent = prop.description;

        // Populate 4 KPIs
        if (kpiCapRate) kpiCapRate.textContent = prop.capRate > 0 ? `${prop.capRate.toFixed(2)}%` : 'N/A (Dev)';
        if (kpiNoi) kpiNoi.textContent = prop.noi > 0 ? `$${prop.noi.toLocaleString()}` : 'Value-Add';
        if (kpiOccupancy) kpiOccupancy.textContent = prop.occupancy > 0 ? `${prop.occupancy}%` : 'Entitled Site';
        if (kpiPsf) {
            kpiPsf.textContent = prop.price && prop.buildingSqft > 0 
                ? `$${Math.round(prop.price / prop.buildingSqft)} / SF` 
                : (prop.leaseRate ? `$${prop.leaseRate.toFixed(2)} / SF/yr` : 'Land Value');
        }

        // Populate Specs Table
        if (modalSpecPrice) modalSpecPrice.textContent = prop.price ? `$${prop.price.toLocaleString()}` : `$${prop.leaseRate.toFixed(2)} / SF/yr NNN`;
        if (modalSpecBuildingSqft) modalSpecBuildingSqft.textContent = prop.buildingSqft > 0 ? `${prop.buildingSqft.toLocaleString()} Sq. Ft.` : 'Shovel-Ready Land';
        if (modalSpecLotSize) modalSpecLotSize.textContent = `${prop.lotAcres} Acres`;
        if (modalSpecYearBuilt) modalSpecYearBuilt.textContent = `${prop.yearBuilt}`;
        if (modalSpecZoning) modalSpecZoning.textContent = prop.zoning;
        if (modalSpecTenantType) modalSpecTenantType.textContent = prop.tenantType;

        // Investment Highlights Checklist
        if (modalHighlightsList) {
            modalHighlightsList.innerHTML = prop.highlights.map(h => `<li><i class="fa-solid fa-circle-check"></i> ${h}</li>`).join('');
        }

        // Assigned Broker
        const broker = brokersData.find(b => b.id === prop.brokerId) || brokersData[0];
        if (modalBrokerName) modalBrokerName.textContent = broker.name;
        if (modalBrokerTitle) modalBrokerTitle.textContent = broker.title;
        if (modalBrokerPhone) {
            modalBrokerPhone.textContent = broker.phone;
            modalBrokerPhone.href = `tel:${broker.phone.replace(/[^0-9]/g, '')}`;
        }
        if (modalBrokerEmail) {
            modalBrokerEmail.textContent = broker.email;
            modalBrokerEmail.href = `mailto:${broker.email}`;
        }

        if (modalOmDirectBtn) {
            modalOmDirectBtn.onclick = () => {
                propertyDetailModal.classList.remove('active');
                openOmModalPrefilled(prop.name);
            };
        }

        propertyDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function attachCreModalEvents() {
        document.querySelectorAll('.open-cre-modal-btn').forEach(btn => {
            btn.onclick = () => {
                const propId = btn.getAttribute('data-prop-id');
                openPropertyModal(propId);
            };
        });

        document.querySelectorAll('.open-om-form-btn').forEach(btn => {
            btn.onclick = () => {
                const propName = btn.getAttribute('data-prop-name');
                openOmModalPrefilled(propName);
            };
        });
    }

    // =========================================================================
    // 6. OFFERING MEMORANDUM (OM) REQUEST MODAL
    // =========================================================================
    const omRequestModal = document.getElementById('omRequestModal');
    const omTargetProperty = document.getElementById('omTargetProperty');
    const omForm = document.getElementById('omForm');
    const creThankYouModal = document.getElementById('creThankYouModal');

    function openOmModalPrefilled(propertyName) {
        if (omTargetProperty && propertyName) {
            omTargetProperty.value = propertyName;
        }
        if (omRequestModal) {
            omRequestModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    if (omForm) {
        omForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (omRequestModal) omRequestModal.classList.remove('active');
            if (creThankYouModal) creThankYouModal.classList.add('active');
            omForm.reset();
        });
    }

    const acquisitionCriteriaForm = document.getElementById('acquisitionCriteriaForm');
    if (acquisitionCriteriaForm) {
        acquisitionCriteriaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (creThankYouModal) creThankYouModal.classList.add('active');
            acquisitionCriteriaForm.reset();
        });
    }

    // Close Modal Events
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
    // 7. RENDER MARKET RESEARCH REPORTS
    // =========================================================================
    const marketReportsGrid = document.getElementById('marketReportsGrid');
    function renderMarketReports() {
        if (!marketReportsGrid) return;
        marketReportsGrid.innerHTML = '';

        marketReports.forEach(report => {
            const card = document.createElement('div');
            card.className = 'market-report-card';

            const trendClass = report.trend === 'up' ? 'up' : 'down';
            const trendIcon = report.trend === 'up' ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down';

            card.innerHTML = `
                <div>
                    <div class="market-card-header">
                        <div>
                            <h3 class="market-name-title">${report.market}</h3>
                            <div class="market-sector-tag">${report.sector}</div>
                        </div>
                        <span class="badge-tag dark">Q1 Report</span>
                    </div>

                    <table class="market-data-table">
                        <tr><td>Avg. Price / Guidance:</td><td>${report.avgPsf}</td></tr>
                        <tr><td>Benchmark Cap Rate:</td><td class="text-blue">${report.avgCap}</td></tr>
                        <tr><td>Market Vacancy Rate:</td><td>${report.vacancy}</td></tr>
                        <tr><td>Annual Net Absorption:</td><td><span class="trend-indicator ${trendClass}"><i class="fa-solid ${trendIcon}"></i> ${report.annualChange}</span></td></tr>
                    </table>

                    <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 1.2rem;">
                        ${report.highlights}
                    </p>
                </div>

                <button class="btn btn-outline btn-sm open-om-form-btn" data-prop-name="${report.market} ${report.sector} Report" style="width: 100%;">
                    <i class="fa-solid fa-download"></i> Download Full Q1 Market Brief
                </button>
            `;

            marketReportsGrid.appendChild(card);
        });
    }

    // =========================================================================
    // 8. RENDER BROKER ADVISORY TEAM
    // =========================================================================
    const brokersGrid = document.getElementById('brokersGrid');
    function renderBrokers() {
        if (!brokersGrid) return;
        brokersGrid.innerHTML = '';

        brokersData.forEach(broker => {
            const card = document.createElement('div');
            card.className = 'broker-card';

            card.innerHTML = `
                <div class="broker-img-holder">
                    <img src="${broker.image}" alt="${broker.name}" loading="lazy">
                </div>
                <div class="broker-body">
                    <h3 class="broker-name">${broker.name}</h3>
                    <div class="broker-title">${broker.title}</div>
                    <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.8rem; line-height: 1.45;">
                        ${broker.specialty}
                    </p>

                    <div class="broker-stats-strip">
                        <div><strong>${broker.volume}</strong><br><span style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase;">Volume</span></div>
                        <div><strong>${broker.deals}</strong><br><span style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase;">Track Record</span></div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <a href="tel:${broker.phone.replace(/[^0-9]/g, '')}" class="btn btn-outline btn-sm" style="font-size:0.78rem;">
                            <i class="fa-solid fa-phone"></i> ${broker.phone}
                        </a>
                        <a href="mailto:${broker.email}" class="btn btn-navy btn-sm" style="font-size:0.78rem;">
                            <i class="fa-solid fa-envelope"></i> Contact Direct
                        </a>
                    </div>
                </div>
            `;

            brokersGrid.appendChild(card);
        });
    }

    // =========================================================================
    // 9. MOBILE NAVIGATION & SCROLL
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

    // Hero Quick Search Sync
    const heroSearchForm = document.getElementById('heroSearchForm');
    if (heroSearchForm) {
        heroSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const hType = document.getElementById('heroPropType').value;
            const hLoc = document.getElementById('heroLocation').value;
            if (filterPropertyType && hType) filterPropertyType.value = hType;
            if (filterLocation && hLoc) filterLocation.value = hLoc;
            renderProperties();
            document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Initialize Everything
    renderProperties();
    renderMarketReports();
    renderBrokers();
});
