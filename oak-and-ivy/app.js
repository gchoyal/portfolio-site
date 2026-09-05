/**
 * OAK & IVY PROPERTY GROUP — BOUTIQUE SUBURBAN REAL ESTATE
 * Interactive Application Engine & Neighborhood Intelligence
 * Author: Girdhari Choyal (@gchoyal_websitedeveloper)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. 25 RESIDENTIAL FAMILY HOMES DATABASE
    // =========================================================================
    const homesData = [
        // OAKRIDGE ESTATES
        {
            id: 'home-01',
            title: 'The Hawthorne Heritage Colonial',
            neighborhood: 'Oakridge Estates',
            neighborhoodCode: 'oakridge',
            address: '142 Oakridge Meadow Dr',
            price: 1385000,
            beds: 5,
            baths: 4.5,
            sqft: 4250,
            lotSize: '0.65 Acres',
            style: 'Colonial Revival',
            schoolDistrict: 'Oakridge Unified (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2019,
            garage: '3-Car Attached',
            backyard: 'Fenced Wooded Yard with Stone Firepit',
            hoa: 65,
            propertyTax: 12400,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            description: 'Timeless 5-bedroom brick colonial on a quiet cul-de-sac with chef kitchen, main-floor guest suite, finished daylight basement, and sprawling fenced backyard backing into nature reserve.',
            features: ['Chef Kitchen with 10 ft Marble Island', 'Main Floor In-Law / Guest Suite', 'Finished Basement with Home Theater', 'Walking Distance to Top-Ranked Oakridge Elementary'],
            agentId: 'a-clara'
        },
        {
            id: 'home-02',
            title: 'The Orchard Stone Craftsman',
            neighborhood: 'Oakridge Estates',
            neighborhoodCode: 'oakridge',
            address: '88 Whispering Pines Way',
            price: 1195000,
            beds: 4,
            baths: 3.5,
            sqft: 3650,
            lotSize: '0.48 Acres',
            style: 'Craftsman',
            schoolDistrict: 'Oakridge Unified (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2021,
            garage: '2.5-Car Attached',
            backyard: 'Covered Screened Porch & Garden Beds',
            hoa: 55,
            propertyTax: 10800,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Custom craftsman featuring exposed cedar beams, custom built-ins, screened outdoor living room, and high-efficiency geothermal heating.',
            features: ['Screened Three-Season Porch with Fireplace', 'Geothermal Heating & Cooling', 'Custom Mudroom with 5 Family Lockers', 'Hardwood Flooring Throughout Both Levels'],
            agentId: 'a-clara'
        },
        {
            id: 'home-03',
            title: 'The Linden Hill Modern Farmhouse',
            neighborhood: 'Oakridge Estates',
            neighborhoodCode: 'oakridge',
            address: '215 Linden Hill Ct',
            price: 1475000,
            beds: 5,
            baths: 5.0,
            sqft: 4600,
            lotSize: '0.72 Acres',
            style: 'Modern Farmhouse',
            schoolDistrict: 'Oakridge Unified (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2022,
            garage: '3-Car Garage',
            backyard: 'Heated Saltwater Pool & Outdoor Kitchen',
            hoa: 75,
            propertyTax: 13200,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'Stunning white oak modern farmhouse with black Marvin windows, heated saltwater pool, outdoor kitchen, and private home office with vaulted ceilings.',
            features: ['Saltwater Heated Pool & Inground Spa', 'Dedicated Dual Home Offices', 'Walk-In Scullery / Butler Pantry', 'Sub-Zero & Wolf Integrated Appliances'],
            agentId: 'a-emily'
        },
        {
            id: 'home-04',
            title: 'The Briarwood Traditional',
            neighborhood: 'Oakridge Estates',
            neighborhoodCode: 'oakridge',
            address: '310 Briarwood Ln',
            price: 985000,
            beds: 4,
            baths: 3.0,
            sqft: 3100,
            lotSize: '0.40 Acres',
            style: 'Traditional',
            schoolDistrict: 'Oakridge Unified (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2018,
            garage: '2-Car Garage',
            backyard: 'Private Level Lawn with Playset Area',
            hoa: 45,
            propertyTax: 8900,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
            description: 'Move-in ready family home in friendly sidewalk neighborhood. Open-concept kitchen and family room, upstairs bonus playroom, and mature shade trees.',
            features: ['Upstairs Kids Playroom & Study Nook', 'Renovated Quartz Kitchen in 2024', 'Fenced Backyard Perfect for Pets and Play', '2-Minute Walk to Neighborhood Park'],
            agentId: 'a-thomas'
        },

        // IVY CREEK VALLEY
        {
            id: 'home-05',
            title: 'The Meadowview Farm Estate',
            neighborhood: 'Ivy Creek Valley',
            neighborhoodCode: 'ivycreek',
            address: '4500 Ivy Valley Rd',
            price: 1650000,
            beds: 5,
            baths: 4.5,
            sqft: 4800,
            lotSize: '2.4 Acres',
            style: 'Modern Farmhouse',
            schoolDistrict: 'Ivy Creek Country Day & Public (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2021,
            garage: '3-Car Attached + Detached Barn',
            backyard: '2.4 Acres with Organic Garden & Firepit',
            hoa: 30,
            propertyTax: 14100,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            description: 'Picturesque country-estate living just 25 minutes from downtown. Wraparound cedar front porch, 2-stall hobby barn, mature fruit orchard, and designer interiors.',
            features: ['2.4 Fenced Acres with Riding Trail Access', 'Detached 1,200 sqft Workshop / Studio', 'Wraparound Sunset Porch', 'Generac Whole-Home Backup Generator'],
            agentId: 'a-marcus'
        },
        {
            id: 'home-06',
            title: 'The Sycamore Creek Cottage',
            neighborhood: 'Ivy Creek Valley',
            neighborhoodCode: 'ivycreek',
            address: '112 Creek Hollow Way',
            price: 895000,
            beds: 3,
            baths: 2.5,
            sqft: 2650,
            lotSize: '0.85 Acres',
            style: 'Craftsman Cottage',
            schoolDistrict: 'Ivy Creek Public (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2020,
            garage: '2-Car Garage',
            backyard: 'Babbling Creek Frontage & Stone Patio',
            hoa: 25,
            propertyTax: 7800,
            image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
            description: 'Charming creekside home with vaulted great room, floor-to-ceiling stone fireplace, primary on main, and peaceful sounds of Ivy Creek in your backyard.',
            features: ['Direct Creek Frontage with Private Fishing Access', 'Vaulted Living Room with Timber Trusses', 'Main-Level Primary Bedroom Suite', 'Low County Property Tax Rate'],
            agentId: 'a-thomas'
        },
        {
            id: 'home-07',
            title: 'The Valley Crest Ranch',
            neighborhood: 'Ivy Creek Valley',
            neighborhoodCode: 'ivycreek',
            address: '380 Valley Crest Dr',
            price: 1050000,
            beds: 4,
            baths: 3.0,
            sqft: 3400,
            lotSize: '1.2 Acres',
            style: 'Modern Ranch',
            schoolDistrict: 'Ivy Creek Public (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2019,
            garage: '2-Car Attached',
            backyard: 'Extensive Flagstone Patio & Hot Tub',
            hoa: 35,
            propertyTax: 9200,
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
            description: 'Single-level modern luxury with seamless indoor-outdoor living, open chef kitchen, expansive acreage, and private sunset views over the valley hills.',
            features: ['Single-Story Living with Zero Thresholds', 'Outdoor Kitchen with Built-In BBQ & Smoker', 'High-Speed Fiber Internet Connected', 'Room for Pool or Detached Guest Suite'],
            agentId: 'a-marcus'
        },
        {
            id: 'home-08',
            title: 'The Harvest Hill Homestead',
            neighborhood: 'Ivy Creek Valley',
            neighborhoodCode: 'ivycreek',
            address: '520 Harvest Hill Rd',
            price: 1280000,
            beds: 5,
            baths: 4.0,
            sqft: 3950,
            lotSize: '1.8 Acres',
            style: 'Modern Farmhouse',
            schoolDistrict: 'Ivy Creek Public (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2022,
            garage: '3-Car Garage',
            backyard: 'Pasture Views & Custom Chicken Coop / Greenhouse',
            hoa: 30,
            propertyTax: 11400,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
            description: 'Sustainable luxury modern farmhouse featuring custom greenhouse, raised vegetable beds, high-efficiency solar panel array, and sprawling open layout.',
            features: ['Owned 12 kW Solar Array (Zero Electric Bills)', 'Custom Cedar Greenhouse & Raised Garden Beds', 'Commercial-Style Thermador Cooking Suite', 'Basement In-Law Suite with Kitchenette'],
            agentId: 'a-clara'
        },

        // FOXGLOVE MEADOWS
        {
            id: 'home-09',
            title: 'The Foxglove Village Classic',
            neighborhood: 'Foxglove Meadows',
            neighborhoodCode: 'foxglove',
            address: '42 Foxglove Green',
            price: 785000,
            beds: 4,
            baths: 2.5,
            sqft: 2800,
            lotSize: '0.28 Acres',
            style: 'Classic Suburban',
            schoolDistrict: 'Foxglove Meadows School District (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2020,
            garage: '2-Car Attached',
            backyard: 'Fenced Lawn Steps to Community Pool',
            hoa: 85,
            propertyTax: 7200,
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
            description: 'Walkable neighborhood living at its best. Stroll to elementary school, community splash pad, local bakery, and Friday night farmer market.',
            features: ['Steps from Community Pool, Tennis & Clubhouse', 'Finished Flex Attic Space for Teen Lounge', 'Covered Front Porch with Swing', 'Active Family-Friendly Neighborhood Social Events'],
            agentId: 'a-thomas'
        },
        {
            id: 'home-10',
            title: 'The Buttercup Lane Craftsman',
            neighborhood: 'Foxglove Meadows',
            neighborhoodCode: 'foxglove',
            address: '118 Buttercup Ln',
            price: 745000,
            beds: 3,
            baths: 2.5,
            sqft: 2450,
            lotSize: '0.24 Acres',
            style: 'Craftsman',
            schoolDistrict: 'Foxglove Meadows School District (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2021,
            garage: '2-Car Garage',
            backyard: 'Private Patio with Pergola',
            hoa: 75,
            propertyTax: 6800,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            description: 'Bright and airy 3-bedroom craftsman with quartz countertops, wide-plank oak floors, custom shiplap accents, and low-maintenance landscape.',
            features: ['Engineered White Oak Hardwoods', 'Shiplap Fireplace Surround in Great Room', 'Walk-In Pantry & Drop Zone Mudroom', 'Energy Star Certified Low Utility Costs'],
            agentId: 'a-emily'
        },
        {
            id: 'home-11',
            title: 'The Cloverfield Manor',
            neighborhood: 'Foxglove Meadows',
            neighborhoodCode: 'foxglove',
            address: '260 Cloverfield Blvd',
            price: 865000,
            beds: 5,
            baths: 3.5,
            sqft: 3450,
            lotSize: '0.35 Acres',
            style: 'Transitional',
            schoolDistrict: 'Foxglove Meadows School District (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2022,
            garage: '3-Car Garage',
            backyard: 'Corner Lot with Expansive Lawn',
            hoa: 85,
            propertyTax: 8100,
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
            description: 'Spacious 5-bedroom corner lot home with downstairs guest suite, dedicated home office, 3-car garage, and oversized upstairs loft.',
            features: ['3-Car Garage with EV 240V Outlet', 'Main-Level Guest Bedroom & Full Bath', 'Oversized Second Floor Entertainment Loft', 'Corner Lot with Extra Yard Space'],
            agentId: 'a-thomas'
        },
        {
            id: 'home-12',
            title: 'The Primrose Parkside Haven',
            neighborhood: 'Foxglove Meadows',
            neighborhoodCode: 'foxglove',
            address: '75 Primrose Ct',
            price: 685000,
            beds: 3,
            baths: 2.0,
            sqft: 2200,
            lotSize: '0.22 Acres',
            style: 'Traditional Cottage',
            schoolDistrict: 'Foxglove Meadows School District (9/10)',
            schoolRating: '9/10',
            yearBuilt: 2019,
            garage: '2-Car Garage',
            backyard: 'Fully Fenced Yard with Tree Canopy',
            hoa: 65,
            propertyTax: 6200,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Ideal starter home or right-size retreat directly adjacent to Primrose Park. Single-story floor plan with updated kitchen and screened patio.',
            features: ['Single-Story Open Floor Plan', 'Direct Gated Access to Primrose Community Park', 'Updated Kitchen with Subway Tile Backsplash', 'Affordable Price Point in Top School District'],
            agentId: 'a-emily'
        },

        // WILLOWBROOK PARK
        {
            id: 'home-13',
            title: 'The Willowbrook Riverfront Estate',
            neighborhood: 'Willowbrook Park',
            neighborhoodCode: 'willowbrook',
            address: '1200 Willow River Dr',
            price: 1850000,
            beds: 5,
            baths: 5.5,
            sqft: 5200,
            lotSize: '1.4 Acres',
            style: 'Prairie Modern',
            schoolDistrict: 'Willowbrook Consolidated (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2023,
            garage: '3-Car Heated Garage',
            backyard: '1.4 Wooded Riverfront Acres with Infinity Spa',
            hoa: 90,
            propertyTax: 16500,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            description: 'Architectural Prairie Modern masterpiece on 1.4 private riverfront acres. Floor-to-ceiling glass walls, heated in-ground spa, wine gallery, and direct kayak launch.',
            features: ['Private River Frontage with Kayak / Canoe Launch', 'Glass-Enclosed 500-Bottle Temperature Wine Room', 'Infinity-Edge Heated Spa and Fire Pit Lounge', 'Heated 3-Car Garage with Epoxy Floors'],
            agentId: 'a-clara'
        },
        {
            id: 'home-14',
            title: 'The River Run Craftsman',
            neighborhood: 'Willowbrook Park',
            neighborhoodCode: 'willowbrook',
            address: '840 River Run Way',
            price: 1350000,
            beds: 4,
            baths: 4.0,
            sqft: 4100,
            lotSize: '0.85 Acres',
            style: 'Craftsman Estate',
            schoolDistrict: 'Willowbrook Consolidated (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2020,
            garage: '3-Car Attached',
            backyard: 'Wooded Lot with Stone Terrace',
            hoa: 80,
            propertyTax: 12100,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Nestled among towering mature oaks, this custom craftsman features an open chef kitchen, two fireplaces, finished walkout basement, and screened porch.',
            features: ['Walkout Finished Basement with Wet Bar & Gym', 'Two Custom Stone Fireplaces', 'Primary Bath with Freestanding Soaking Tub', 'Direct Access to Willowbrook Trail System'],
            agentId: 'a-marcus'
        },
        {
            id: 'home-15',
            title: 'The Whispering Creek Colonial',
            neighborhood: 'Willowbrook Park',
            neighborhoodCode: 'willowbrook',
            address: '320 Whispering Creek Rd',
            price: 1220000,
            beds: 4,
            baths: 3.5,
            sqft: 3750,
            lotSize: '0.60 Acres',
            style: 'Colonial Revival',
            schoolDistrict: 'Willowbrook Consolidated (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2018,
            garage: '2-Car Garage',
            backyard: 'Private Backyard with Trex Deck',
            hoa: 65,
            propertyTax: 10900,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'Gracious 4-bedroom colonial featuring formal dining room with wainscoting, renovated white kitchen, cozy hearth room, and tranquil wooded backyard.',
            features: ['Spacious Hearth Room off Kitchen with Fireplace', 'Formal Wainscoted Dining Room', 'Huge Primary Walk-In Dressing Suite', 'Trex Maintenance-Free Composite Deck'],
            agentId: 'a-clara'
        },
        {
            id: 'home-16',
            title: 'The Forest Edge Farmhouse',
            neighborhood: 'Willowbrook Park',
            neighborhoodCode: 'willowbrook',
            address: '510 Forest Edge Ln',
            price: 1495000,
            beds: 5,
            baths: 4.5,
            sqft: 4400,
            lotSize: '0.90 Acres',
            style: 'Modern Farmhouse',
            schoolDistrict: 'Willowbrook Consolidated (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2022,
            garage: '3-Car Garage',
            backyard: 'Borders 40-Acre Protected Nature Preserve',
            hoa: 85,
            propertyTax: 13400,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            description: 'Board-and-batten modern farmhouse directly abutting 40 acres of forever-wild forest. Double-height great room, main floor guest suite, and designer lighting.',
            features: ['Direct Border on 40-Acre Nature Sanctuary', '20 ft Double-Height Living Room Ceiling', 'Custom Reclaimed Wood Mantels & Accents', 'Main-Level Primary and Secondary Suites'],
            agentId: 'a-emily'
        },
        {
            id: 'home-17',
            title: 'The Willow Creek Retreat',
            neighborhood: 'Willowbrook Park',
            neighborhoodCode: 'willowbrook',
            address: '95 Willow Creek Path',
            price: 1150000,
            beds: 4,
            baths: 3.0,
            sqft: 3300,
            lotSize: '0.55 Acres',
            style: 'Contemporary Craftsman',
            schoolDistrict: 'Willowbrook Consolidated (10/10 Rated)',
            schoolRating: '10/10',
            yearBuilt: 2019,
            garage: '2-Car Garage',
            backyard: 'Screened Porch and Stone Fire Pit',
            hoa: 60,
            propertyTax: 10200,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
            description: 'Warm natural light floods every corner of this open layout home. Gourmet kitchen with double ovens, walk-in pantry, and private study with French doors.',
            features: ['Dedicated Study with Custom French Doors', 'Double Convection Ovens & Induction Cooktop', 'Pre-Wired for Whole-House Audio', 'Cul-de-Sac Location with No Through Traffic'],
            agentId: 'a-thomas'
        },

        // SILVERLEAF HEIGHTS
        {
            id: 'home-18',
            title: 'The Silverleaf Hilltop Manor',
            neighborhood: 'Silverleaf Heights',
            neighborhoodCode: 'silverleaf',
            address: '2200 Silverleaf Summit',
            price: 2150000,
            beds: 5,
            baths: 5.5,
            sqft: 5800,
            lotSize: '1.1 Acres',
            style: 'Transitional European',
            schoolDistrict: 'Silverleaf Academy & Public (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2022,
            garage: '4-Car Garage',
            backyard: 'Panoramic Valley Views & Resort Pool',
            hoa: 150,
            propertyTax: 19200,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            description: 'Commanding hilltop estate with 180-degree sunset valley views. Limestone facade, resort-style infinity pool, 4-car motor court, and golf club privileges.',
            features: ['180° Panoramic Sunset Valley Views', 'Resort Infinity Pool & Outdoor Cabana', '4-Car Motor Court with Paver Driveway', 'Includes Gated Country Club Golf Membership'],
            agentId: 'a-clara'
        },
        {
            id: 'home-19',
            title: 'The Summit Crest Contemporary',
            neighborhood: 'Silverleaf Heights',
            neighborhoodCode: 'silverleaf',
            address: '1840 Summit Crest Way',
            price: 1890000,
            beds: 4,
            baths: 4.5,
            sqft: 4900,
            lotSize: '0.85 Acres',
            style: 'Contemporary Modern',
            schoolDistrict: 'Silverleaf Public (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2023,
            garage: '3-Car Garage',
            backyard: 'Multi-Level Outdoor Living & Glass Railing Deck',
            hoa: 140,
            propertyTax: 16800,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Sleek architectural design with soaring glass window walls framing hillside views, floating modern staircase, Italian Poliform kitchen, and wine lounge.',
            features: ['Floor-to-Ceiling Western Window Walls', 'Floating Oak & Glass Railing Staircase', 'Italian Poliform Kitchen with Quartzite Counters', 'Custom Integrated Home Automation System'],
            agentId: 'a-marcus'
        },
        {
            id: 'home-20',
            title: 'The Fairway Green Villa',
            neighborhood: 'Silverleaf Heights',
            neighborhoodCode: 'silverleaf',
            address: '410 Fairway Green Ct',
            price: 1620000,
            beds: 4,
            baths: 4.0,
            sqft: 4200,
            lotSize: '0.60 Acres',
            style: 'Modern Craftsman',
            schoolDistrict: 'Silverleaf Public (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2021,
            garage: '3-Car + Golf Cart Bay',
            backyard: 'Backs to 14th Fairway of Championship Golf Course',
            hoa: 160,
            propertyTax: 14500,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'Direct golf course frontage overlooking the 14th fairway. Dedicated golf cart garage, main level primary retreat, and covered outdoor fireplace loggia.',
            features: ['Direct Golf Course Views & Dedicated Cart Bay', 'Outdoor Covered Loggia with Gas Fireplace', 'Primary Suite with Heated Bathroom Floors', 'Spacious Bonus Room / Billiards Lounge'],
            agentId: 'a-thomas'
        },
        {
            id: 'home-21',
            title: 'The Highridge Prairie Home',
            neighborhood: 'Silverleaf Heights',
            neighborhoodCode: 'silverleaf',
            address: '915 Highridge Dr',
            price: 1450000,
            beds: 4,
            baths: 3.5,
            sqft: 3800,
            lotSize: '0.50 Acres',
            style: 'Prairie Modern',
            schoolDistrict: 'Silverleaf Public (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2020,
            garage: '3-Car Attached',
            backyard: 'Private Hillside Terrace & Fire Table',
            hoa: 130,
            propertyTax: 12900,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            description: 'Clean horizontal lines and organic materials define this Prairie modern home. Open great room with 12ft ceilings, walk-in pantry, and peaceful sunset views.',
            features: ['12 ft Soaring Ceilings Throughout Main Level', 'Motorized Solar Roller Shades', 'Custom Closets by California Closets', 'Quiet Cul-de-Sac Setting'],
            agentId: 'a-emily'
        },

        // HERON POINT LAKEFRONT
        {
            id: 'home-22',
            title: 'The Heron Point Lakehouse',
            neighborhood: 'Heron Point Lakefront',
            neighborhoodCode: 'heronpoint',
            address: '500 Heron Point Rd',
            price: 2450000,
            beds: 5,
            baths: 5.5,
            sqft: 6100,
            lotSize: '1.2 Lakefront Acres',
            style: 'Nautical Craftsman',
            schoolDistrict: 'Heron Point & Westlake (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2022,
            garage: '3-Car Garage + Boat Storage',
            backyard: 'Private Covered Boat Dock with Lift & Sandy Beach',
            hoa: 110,
            propertyTax: 21800,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            description: 'The ultimate luxury lake lifestyle. 150 ft of shoreline with deep-water dock, motorized boat lift, sandy beach area, double-decker party porch, and 6,100 sqft of bespoke living.',
            features: ['Private Covered Dock with Power Boat & Jet Ski Lifts', '150 ft of Private Shoreline with Sandy Beach', 'Double-Decker Screened Porch with Outdoor Fireplaces', 'Walkout Lower Level with Full Second Kitchen'],
            agentId: 'a-clara'
        },
        {
            id: 'home-23',
            title: 'The Waterside Shingle Cottage',
            neighborhood: 'Heron Point Lakefront',
            neighborhoodCode: 'heronpoint',
            address: '320 Shoreline Dr',
            price: 1780000,
            beds: 4,
            baths: 4.0,
            sqft: 4200,
            lotSize: '0.75 Lakefront Acres',
            style: 'Nantucket Shingle Style',
            schoolDistrict: 'Heron Point (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2021,
            garage: '2.5-Car Garage',
            backyard: 'Private Dock & Lakeside Fire Pit',
            hoa: 95,
            propertyTax: 15900,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            description: 'Classic coastal Nantucket charm on Heron Point lake. Cedar shingles, white beadboard, sun-drenched sunroom, private boat slip, and sweeping sunrise water views.',
            features: ['Private Boat Slip with Swim Platform', 'Four-Season Lakeside Sunroom', 'Beadboard Accents & Coastal Millwork', 'Primary Suite with Private Water-Facing Balcony'],
            agentId: 'a-emily'
        },
        {
            id: 'home-24',
            title: 'The Bayview Point Villa',
            neighborhood: 'Heron Point Lakefront',
            neighborhoodCode: 'heronpoint',
            address: '180 Bayview Terrace',
            price: 1950000,
            beds: 5,
            baths: 4.5,
            sqft: 4800,
            lotSize: '0.90 Lakefront Acres',
            style: 'Modern Coastal',
            schoolDistrict: 'Heron Point (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2023,
            garage: '3-Car Garage',
            backyard: 'Lakefront Pool & Spa with Dock Access',
            hoa: 105,
            propertyTax: 17400,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'Newly completed modern coastal sanctuary with heated lakeside pool, outdoor bar, zero-edge glass sliders, and private boat dock in protected cove.',
            features: ['Heated Lakeside Pool & Inground Spa', 'Protected Deep-Water Cove for Calm Mooring', 'Thermador Kitchen with Dual Dishwashers', 'Second-Floor Bunkroom for Kids and Guests'],
            agentId: 'a-marcus'
        },
        {
            id: 'home-25',
            title: 'The Cove Lookout Lodge',
            neighborhood: 'Heron Point Lakefront',
            neighborhoodCode: 'heronpoint',
            address: '88 Lookout Cove Ct',
            price: 1450000,
            beds: 4,
            baths: 3.5,
            sqft: 3600,
            lotSize: '0.65 Lakeview Acres',
            style: 'Lakeside Craftsman',
            schoolDistrict: 'Heron Point (10/10)',
            schoolRating: '10/10',
            yearBuilt: 2020,
            garage: '2-Car Garage',
            backyard: 'Deeded Boat Slip in Community Marina',
            hoa: 125,
            propertyTax: 12900,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            description: 'Lakeview home with deeded boat slip in private community marina just steps away. Wraparound deck, exposed stone fireplace, and finished walkout basement.',
            features: ['Includes Deeded Deep-Water Boat Slip in Marina', 'Expansive Wraparound Entertaining Deck', 'Walkout Basement with Home Gym & Game Room', 'Community Tennis Courts & Marina Clubhouse'],
            agentId: 'a-thomas'
        }
    ];

    // =========================================================================
    // 2. 6 DETAILED NEIGHBORHOOD DATASETS
    // =========================================================================
    const neighborhoodsData = [
        {
            code: 'oakridge',
            name: 'Oakridge Estates',
            tagline: 'Top-Ranked Schools, Historic Village Charm & Tree-Lined Lanes',
            medianPrice: '$1,250,000',
            avgDays: '12 Days',
            schoolScore: '10/10 Rated',
            propertyTypes: 'Colonial Revival, Craftsman Estates, Modern Farmhouses',
            commute: '25 min to Downtown • 15 min to Tech Corridor • 30 min to Airport',
            overview: 'Oakridge Estates is one of the region’s most sought-after suburban communities for growing families. Known for its top 1% rated school district, sprawling mature tree canopies, active community sports leagues, and charming historic village square filled with independent coffee shops, bakeries, and farmers markets.',
            schools: 'Oakridge Elementary (10/10), Oakridge Middle (10/10), Oakridge High School (10/10 National Blue Ribbon).',
            parks: 'Oakridge Community Park (45 acres, baseball fields, tennis, splash pad), Pinecrest Nature Preserve with 8 miles of walking trails.',
            dining: 'The Oak & Anchor Tavern, Sweet Caroline Bakery, Hearthstone Wood-Fired Pizza, Provisions Organic Market.',
            shopping: 'Oakridge Village Square, Local Artisan Boutiques, Weekly Saturday Organic Farmers Market.',
            lifestyle: 'Bicycle-friendly sidewalks, annual 4th of July parades, youth swim teams, and strong multi-generational community connection.',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
        },
        {
            code: 'ivycreek',
            name: 'Ivy Creek Valley',
            tagline: 'Acreage Living, Equestrian Trails & Modern Pastoral Homesteads',
            medianPrice: '$980,000',
            avgDays: '16 Days',
            schoolScore: '9/10 Rated',
            propertyTypes: 'Modern Farmhouses, Pastoral Ranches, Craftsman Cottages',
            commute: '30 min to Downtown • 20 min to Tech Corridor • 35 min to Airport',
            overview: 'For families seeking room to breathe, Ivy Creek Valley offers rolling 1 to 5-acre properties with scenic hill country vistas, private organic hobby farms, and equestrian facilities. Experience quiet starry night skies while remaining less than 30 minutes from metropolitan business districts.',
            schools: 'Ivy Creek Elementary (9/10), Valley Crest Middle (9/10), Ivy Valley High School (9/10).',
            parks: 'Ivy Creek Equestrian Park (120 acres, riding rings, cross-country trails), Sycamore Creek Fishing Reserve.',
            dining: 'The Mill at Ivy Creek (Farm-to-Table), Thistle & Rye Cafe, Valley View Cider Mill & Taproom.',
            shopping: 'Heritage General Store, Ivy Creek Farm Stand, Countryside Antiques & Garden Nursery.',
            lifestyle: 'Backyard chicken coops, vegetable gardening, horseback riding, stargazing, and friendly barn community gatherings.',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
        },
        {
            code: 'foxglove',
            name: 'Foxglove Meadows',
            tagline: 'Walkable Planned Village, Splash Pads & Neighborly Connection',
            medianPrice: '$760,000',
            avgDays: '9 Days',
            schoolScore: '9/10 Rated',
            propertyTypes: 'Classic Suburban Homes, Craftsman Cottages, Townhomes',
            commute: '20 min to Downtown • 12 min to Tech Corridor • 22 min to Airport',
            overview: 'Foxglove Meadows is the quintessential modern planned community designed for young families and active lifestyles. Wide tree-lined sidewalks connect every cul-de-sac directly to neighborhood parks, the community resort pool, tennis courts, and neighborhood elementary schools without crossing busy arterial roads.',
            schools: 'Meadowview Elementary (9/10), Foxglove Middle (9/10), Central Regional High School (9/10).',
            parks: 'Central Meadows Park (Clubhouse, Olympic pool, splash pad, pickleball courts, playground), Buttercup Greenway.',
            dining: 'Cornerstone Bistro, Foxglove Ice Cream Shoppe, Daily Grind Espresso Bar, Little Napoli Pizzeria.',
            shopping: 'Foxglove Town Center (Target, Trader Joe’s, Pharmacy, Pediatrician Clinics, Yoga Studios).',
            lifestyle: 'Neighborhood block parties, kids riding bikes on sidewalks, Friday night food truck gatherings, and strollers at the park.',
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
        },
        {
            code: 'willowbrook',
            name: 'Willowbrook Park',
            tagline: 'Sprawling Wooded Acreage, River Paths & Architectural Elegance',
            medianPrice: '$1,450,000',
            avgDays: '14 Days',
            schoolScore: '10/10 Rated',
            propertyTypes: 'Prairie Modern, Custom Craftsman Estates, Brick Colonials',
            commute: '18 min to Downtown • 10 min to Tech Corridor • 25 min to Airport',
            overview: 'Tucked along the winding Willow River, Willowbrook Park offers secluded woodland estates with heavily treed lots of half an acre to two acres. Prestigious public and private schools, private river trail systems, and high architectural standards make this community a top choice for executive families.',
            schools: 'Willowbrook Elementary (10/10), Riverbend Middle (10/10), Willowbrook High School (10/10 STEM Magnet).',
            parks: 'Willow River County Park (80 acres of old-growth hardwoods, river kayaking trails, nature center).',
            dining: 'The River Grill, Copper Kettle Bakery, Parkside Brasserie, Vineyard Wine Cellars.',
            shopping: 'Riverbend Galleria, Whole Foods Market, High-End Home Decor & Interior Design Showrooms.',
            lifestyle: 'Morning kayaking, trail running under canopy trees, neighborhood book clubs, and serene private backyard retreats.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
        },
        {
            code: 'silverleaf',
            name: 'Silverleaf Heights',
            tagline: 'Hilltop Sunset Vistas, Country Club Golf & Luxury Contemporary Living',
            medianPrice: '$1,850,000',
            avgDays: '18 Days',
            schoolScore: '10/10 Rated',
            propertyTypes: 'Hilltop Modern, European Transitional, Custom Golf Villas',
            commute: '22 min to Downtown • 14 min to Tech Corridor • 28 min to Airport',
            overview: 'Perched on the highest ridge in the county, Silverleaf Heights boasts dramatic panoramic sunset valley views and championship golf course living. Featuring custom contemporary and European transitional architecture, gated security, private country club amenities, and top-ranked private and public academies.',
            schools: 'Silverleaf Academy (Private K-12), Ridgeview Public Elementary (10/10), Summit High School (10/10).',
            parks: 'Silverleaf Country Club (18-Hole Championship Golf, Tennis, Wellness Spa), Summit Ridge Overlook Park.',
            dining: 'The Summit Club Restaurant, Trattoria Bella Vista, The Terrace Bar, Artisanal Bakery & Patisserie.',
            shopping: 'The Promenade at Silverleaf (Nordstrom, Apple Store, Gourmet Wine & Cheese Emporiums).',
            lifestyle: 'Weekend golf rounds, twilight terrace dining with valley sunset vistas, youth tennis clinics, and resort living.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
        },
        {
            code: 'heronpoint',
            name: 'Heron Point Lakefront',
            tagline: 'Private Boat Docks, Water Recreation & Coastal-Inspired Architecture',
            medianPrice: '$2,150,000',
            avgDays: '15 Days',
            schoolScore: '10/10 Rated',
            propertyTypes: 'Lakeside Craftsman, Shingle-Style Cottages, Coastal Contemporary',
            commute: '32 min to Downtown • 20 min to Tech Corridor • 35 min to Airport',
            overview: 'Heron Point offers a year-round lakeside resort lifestyle. Enjoy private deep-water boat slips, paddleboarding at sunrise, waterskiing with the family, and sunset boat cruises. Homes feature coastal shingle architecture, double-decker entertaining porches, and sandy lakefront beaches.',
            schools: 'Heron Point Elementary (10/10), Westlake Middle (10/10), Lakeside High School (10/10).',
            parks: 'Heron Point Marina & Beach Park, Osprey Island Wildlife Sanctuary, Lake Shoreline Bike Path.',
            dining: 'The Boat House Restaurant & Oyster Bar, Driftwood Grill, Lakefront Creamery, Cove View Cafe.',
            shopping: 'Heron Point Nautical Village, Surf & Boat Pro Shops, Gourmet Market & Deli.',
            lifestyle: 'Boating, wakeboarding, sunset cruises, weekend dock cookouts, fishing with kids, and relaxed lakeside entertaining.',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
        }
    ];

    // =========================================================================
    // 3. 4 BOUTIQUE AGENTS DATA
    // =========================================================================
    const agentsData = [
        {
            id: 'a-clara',
            name: 'Clara Hawthorne',
            title: 'Founding Principal & Managing Broker',
            specialty: 'Oakridge Estates & Luxury Family Relocations',
            experience: '18 Years Experience • $240M+ Closed',
            phone: '+1 (555) 234-5678',
            email: 'clara@oakandivyproperties.com',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
            bio: 'Mom of three and lifelong community resident, Clara founded Oak & Ivy to provide honest, patient, and deeply knowledgeable real estate counsel to families.'
        },
        {
            id: 'a-thomas',
            name: 'Thomas Sterling',
            title: 'Senior Associate • First-Time & Move-Up Buyers',
            specialty: 'Foxglove Meadows & Willowbrook Park',
            experience: '11 Years Experience • $160M+ Closed',
            phone: '+1 (555) 234-5679',
            email: 'thomas@oakandivyproperties.com',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
            bio: 'Thomas specializes in school district analysis and helping young families find homes that grow with them through every childhood milestone.'
        },
        {
            id: 'a-emily',
            name: 'Emily Vance',
            title: 'Director of Staging & Listing Marketing',
            specialty: 'Interior Curation, Modern Farmhouses & Foxglove',
            experience: '9 Years Experience • $135M+ Closed',
            phone: '+1 (555) 234-5680',
            email: 'emily@oakandivyproperties.com',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
            bio: 'Emily combines an architectural design background with sharp pricing analytics to prepare family homes for top-dollar market sales.'
        },
        {
            id: 'a-marcus',
            name: 'Marcus Bennett',
            title: 'Associate Broker • Acreage & Lakefront Specialist',
            specialty: 'Ivy Creek Valley & Heron Point Lakefront',
            experience: '14 Years Experience • $185M+ Closed',
            phone: '+1 (555) 234-5681',
            email: 'marcus@oakandivyproperties.com',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
            bio: 'Marcus has unmatched expertise in acreage zoning, private boat dock permitting, well and septic due diligence, and waterfront property values.'
        }
    ];

    // =========================================================================
    // 4. PROPERTY SEARCH & FILTER CONTROLLER
    // =========================================================================
    const homesGrid = document.getElementById('homesGrid');
    const homesCountText = document.getElementById('homesCountText');
    const filterNeighborhood = document.getElementById('filterNeighborhood');
    const filterStyle = document.getElementById('filterStyle');
    const filterMaxPrice = document.getElementById('filterMaxPrice');
    const filterMinBeds = document.getElementById('filterMinBeds');
    const filterSort = document.getElementById('filterSort');
    const clearHomesFilterBtn = document.getElementById('clearHomesFilterBtn');

    function renderHomes() {
        if (!homesGrid) return;

        const neigh = filterNeighborhood ? filterNeighborhood.value : 'all';
        const style = filterStyle ? filterStyle.value : 'all';
        const maxPrice = filterMaxPrice ? parseFloat(filterMaxPrice.value) || 99999999 : 99999999;
        const minBeds = filterMinBeds ? parseInt(filterMinBeds.value) || 0 : 0;
        const sortBy = filterSort ? filterSort.value : 'featured';

        let filtered = homesData.filter(h => {
            if (neigh !== 'all' && h.neighborhoodCode !== neigh) return false;
            if (style !== 'all' && !h.style.toLowerCase().includes(style.toLowerCase())) return false;
            if (h.price > maxPrice) return false;
            if (h.beds < minBeds) return false;
            return true;
        });

        // Sorting
        if (sortBy === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'sqft-desc') {
            filtered.sort((a, b) => b.sqft - a.sqft);
        }

        if (homesCountText) {
            homesCountText.textContent = `Showing ${filtered.length} Premium Suburban Homes`;
        }

        homesGrid.innerHTML = '';

        if (filtered.length === 0) {
            homesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-md);">
                    <i class="fa-solid fa-house-circle-xmark" style="font-size: 2.5rem; color: var(--accent-warm); margin-bottom: 0.8rem;"></i>
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.4rem;">No Homes Match Current Filters</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.2rem;">Try broadening your search or resetting filters to see all 25 neighborhood listings.</p>
                    <button class="btn btn-primary btn-sm" onclick="document.getElementById('clearHomesFilterBtn').click();">Reset Filters</button>
                </div>
            `;
            return;
        }

        filtered.forEach(home => {
            const card = document.createElement('div');
            card.className = 'home-card';

            const priceFormatted = `$${home.price.toLocaleString()}`;

            card.innerHTML = `
                <div class="home-card-media">
                    <img src="${home.image}" alt="${home.title}" loading="lazy">
                    <span class="home-neighborhood-tag">${home.neighborhood}</span>
                    <span class="home-school-rating-badge"><i class="fa-solid fa-graduation-cap"></i> ${home.schoolRating} Schools</span>
                </div>
                <div class="home-card-body">
                    <div>
                        <div class="home-price-title">${priceFormatted}</div>
                        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.2rem;">${home.title}</h3>
                        <div class="home-address-sub"><i class="fa-solid fa-location-dot text-warm"></i> ${home.address}</div>

                        <!-- Specs Strip -->
                        <div class="home-specs-strip">
                            <div class="home-spec-item">
                                <div class="val">${home.beds} Beds</div>
                                <div class="lbl">Bedrooms</div>
                            </div>
                            <div class="home-spec-item">
                                <div class="val">${home.baths} Baths</div>
                                <div class="lbl">Bathrooms</div>
                            </div>
                            <div class="home-spec-item">
                                <div class="val">${home.sqft.toLocaleString()}</div>
                                <div class="lbl">Sq. Ft.</div>
                            </div>
                        </div>

                        <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.45;">
                            <strong>Lot:</strong> ${home.lotSize} • <strong>Garage:</strong> ${home.garage}
                        </div>
                    </div>

                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-outline btn-sm open-home-modal-btn" data-home-id="${home.id}" style="flex:1;">
                            <i class="fa-solid fa-eye"></i> View Details
                        </button>
                        <button class="btn btn-primary btn-sm book-tour-btn" data-home-title="${home.title}" style="flex:1;">
                            <i class="fa-solid fa-calendar-check"></i> Book Showing
                        </button>
                    </div>
                </div>
            `;

            homesGrid.appendChild(card);
        });

        attachHomeModalListeners();
    }

    [filterNeighborhood, filterStyle, filterMaxPrice, filterMinBeds, filterSort].forEach(el => {
        if (el) el.addEventListener('change', renderHomes);
    });

    if (clearHomesFilterBtn) {
        clearHomesFilterBtn.addEventListener('click', () => {
            if (filterNeighborhood) filterNeighborhood.value = 'all';
            if (filterStyle) filterStyle.value = 'all';
            if (filterMaxPrice) filterMaxPrice.value = '99999999';
            if (filterMinBeds) filterMinBeds.value = '0';
            if (filterSort) filterSort.value = 'featured';
            renderHomes();
        });
    }

    // =========================================================================
    // 5. 6 NEIGHBORHOOD GUIDES & REUSABLE TEMPLATE RENDERER
    // =========================================================================
    const neighborhoodTabBtns = document.querySelectorAll('.neighborhood-tab-btn');
    const neighborhoodShowcasePanel = document.getElementById('neighborhoodShowcasePanel');

    function renderNeighborhood(code) {
        const n = neighborhoodsData.find(item => item.code === code) || neighborhoodsData[0];
        if (!neighborhoodShowcasePanel) return;

        // Find matched properties for this neighborhood
        const matchedHomes = homesData.filter(h => h.neighborhoodCode === n.code);

        let listingsHtml = '';
        matchedHomes.forEach(h => {
            listingsHtml += `
                <div class="home-card" style="box-shadow:none; border:1px solid var(--border);">
                    <div class="home-card-media" style="height:180px;">
                        <img src="${h.image}" alt="${h.title}" loading="lazy">
                        <span class="home-school-rating-badge">${h.schoolRating} Schools</span>
                    </div>
                    <div class="home-card-body" style="padding:1.2rem;">
                        <div class="home-price-title" style="font-size:1.35rem;">$${h.price.toLocaleString()}</div>
                        <h4 style="font-size:1rem; font-weight:700; margin-bottom:0.2rem;">${h.title}</h4>
                        <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.8rem;">${h.beds} Beds • ${h.baths} Baths • ${h.sqft.toLocaleString()} SqFt</div>
                        <button class="btn btn-outline btn-sm open-home-modal-btn" data-home-id="${h.id}" style="width:100%; font-size:0.8rem;">
                            View Property Specs
                        </button>
                    </div>
                </div>
            `;
        });

        neighborhoodShowcasePanel.innerHTML = `
            <!-- Top Hero Overview -->
            <div class="neighborhood-header-hero">
                <div>
                    <span class="badge-pill green"><i class="fa-solid fa-tree"></i> Suburban Community Guide</span>
                    <h2 class="heading-serif" style="font-size: 2.2rem; margin-bottom: 0.5rem;">${n.name}</h2>
                    <p style="font-size: 1.05rem; color: var(--accent-warm); font-weight: 600; margin-bottom: 1.2rem;">
                        ${n.tagline}
                    </p>
                    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
                        ${n.overview}
                    </p>

                    <div style="display:flex; gap:1.8rem; flex-wrap:wrap; padding-top:1.2rem; border-top:1px solid var(--border);">
                        <div>
                            <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--text-light);">Median Home Price</div>
                            <div style="font-family:var(--font-heading); font-size:1.5rem; font-weight:700; color:var(--primary);">${n.medianPrice}</div>
                        </div>
                        <div>
                            <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--text-light);">Avg Days on Market</div>
                            <div style="font-family:var(--font-heading); font-size:1.5rem; font-weight:700; color:var(--primary);">${n.avgDays}</div>
                        </div>
                        <div>
                            <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--text-light);">School District Score</div>
                            <div style="font-family:var(--font-heading); font-size:1.5rem; font-weight:700; color:var(--primary);">${n.schoolScore}</div>
                        </div>
                    </div>
                </div>

                <div class="neighborhood-hero-img">
                    <img src="${n.image}" alt="${n.name} Community">
                </div>
            </div>

            <!-- 4 Pillars Data Grid -->
            <div class="neighborhood-pillars-grid">
                <div class="pillar-box">
                    <h4><i class="fa-solid fa-graduation-cap"></i> Schools & Education</h4>
                    <p>${n.schools}</p>
                </div>

                <div class="pillar-box">
                    <h4><i class="fa-solid fa-mountain-sun"></i> Parks & Recreation</h4>
                    <p>${n.parks}</p>
                </div>

                <div class="pillar-box">
                    <h4><i class="fa-solid fa-mug-saucer"></i> Cafes & Dining</h4>
                    <p>${n.dining}</p>
                </div>

                <div class="pillar-box">
                    <h4><i class="fa-solid fa-car-side"></i> Commute & Access</h4>
                    <p>${n.commute}</p>
                </div>
            </div>

            <!-- Matched Available Properties in Neighborhood -->
            <div class="neighborhood-listings-subgrid">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:10px;">
                    <div>
                        <h3 class="heading-serif" style="font-size:1.5rem;">Available Homes in ${n.name}</h3>
                        <p style="font-size:0.88rem; color:var(--text-muted);">${matchedHomes.length} active listings currently available</p>
                    </div>
                    <button class="btn btn-outline btn-sm" onclick="document.getElementById('filterNeighborhood').value='${n.code}'; renderHomes(); document.getElementById('propertiesSection').scrollIntoView({behavior:'smooth'});">
                        Explore in Main Search <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1.5rem;">
                    ${listingsHtml}
                </div>
            </div>
        `;

        attachHomeModalListeners();
    }

    if (neighborhoodTabBtns.length > 0) {
        neighborhoodTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                neighborhoodTabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const code = btn.getAttribute('data-neighborhood');
                renderNeighborhood(code);
            });
        });
    }

    // =========================================================================
    // 6. INTERACTIVE BUYER'S & SELLER'S GUIDES
    // =========================================================================
    const buyersSteps = [
        {
            title: '1. Defining Your Family Needs & Budget',
            sub: 'Laying the foundation before you tour your first home.',
            content: 'We begin by establishing your non-negotiables: preferred school districts, commute thresholds, backyard size for pets and play, and future expansion needs. We pair you with top local lenders for a rock-solid pre-approval letter.',
            tips: ['Calculate property taxes and HOA dues into monthly budget', 'Identify school attendance zones by street address', 'Get fully underwritten pre-approval, not just pre-qualification']
        },
        {
            title: '2. Private Tours & Neighborhood Exploration',
            sub: 'Experiencing community culture beyond the photos.',
            content: 'We schedule private showings around your family schedule and guide you on off-peak drive times, street traffic patterns, playground proximity, and future municipal developments that impact long-term value.',
            tips: ['Test the morning commute at 7:30 AM', 'Visit local parks and community pools on a Saturday afternoon', 'Check cellular reception and high-speed internet availability']
        },
        {
            title: '3. Strategic Offer & Contingency Structuring',
            sub: 'Crafting winning offers with protective terms.',
            content: 'In competitive suburban school districts, we analyze recent comparable sales and draft attractive offers with smart inspection contingencies, escalation clauses, and favorable closing timelines.',
            tips: ['Include an appraisal buffer if bidding over ask', 'Request seller concessions for closing costs or rate buydowns', 'Structure earnest money to demonstrate financial strength']
        },
        {
            title: '4. Comprehensive Home Inspection & Repair Negotiation',
            sub: 'Protecting your family from hidden liabilities.',
            content: 'We bring in certified home inspectors, structural engineers, radon testers, and sewer scope specialists. We negotiate repair credits or price reductions for critical items like roof, HVAC, and foundations.',
            tips: ['Always attend the final hour of the home inspection walkthrough', 'Prioritize health, safety, and major mechanical systems over cosmetic flaws', 'Request re-inspections for completed seller repairs']
        },
        {
            title: '5. Escrow, Final Walkthrough & Moving Day',
            sub: 'The keys to your forever family home.',
            content: 'We verify title clearance, conduct your final walkthrough to ensure agreed repairs are completed, coordinate utility transfers, and celebrate your closing day with a customized family welcome kit.',
            tips: ['Verify wire instructions verbally over phone to prevent wire fraud', 'Test all appliances, faucets, and HVAC during final walkthrough', 'Pre-register kids with the school district prior to closing date']
        }
    ];

    const sellersSteps = [
        {
            title: '1. Preparing & Staging Your Home for Impact',
            sub: 'First impressions drive emotional connections and higher bids.',
            content: 'Our in-house staging team declutters, depersonalizes, and highlights spatial flow so buyers immediately envision their own family living in your home. We coordinate touch-up painting, landscaping curb appeal, and deep cleaning.',
            tips: ['Neutralize bold wall colors to warm whites and creams', 'Maximize curb appeal with fresh mulch, potted plants, and power-washed walk', 'Store excess toys and bulky furniture in temporary pods']
        },
        {
            title: '2. Precision Data-Driven Pricing Strategy',
            sub: 'Capturing maximum demand within the first 10 days.',
            content: 'We perform micro-market comparative market analyses (CMA) adjusting for square footage, lot privacy, school feeder zones, and recent neighborhood pendings to price strategically for multi-offer momentum.',
            tips: ['Avoid emotional overpricing that leads to stagnant days on market', 'Price just below natural search price band thresholds (e.g. $999k vs $1.02M)', 'Review pending sales weekly up until listing launch']
        },
        {
            title: '3. Architectural Photography & Targeted Marketing',
            sub: 'Editorial storytelling across digital, social, and print.',
            content: 'We shoot high-resolution architectural photography, cinematic video walkthroughs, drone aerials of the neighborhood and school proximity, and launch targeted Facebook/Instagram ad campaigns directly to move-up buyers.',
            tips: ['Shoot twilight photos for dramatic exterior lighting', 'Include detailed 2D/3D floor plans with room dimensions in listing', 'Distribute luxury printed lookbooks to top-producing buyer agents']
        },
        {
            title: '4. Private Showings & High-Touch Open Houses',
            sub: 'Showcasing your home with minimal disruption to your family.',
            content: 'We manage showings through secure digital lockboxes with 24-hour buyer qualification, host weekend twilight open houses with catered refreshments, and gather actionable buyer feedback after every showing.',
            tips: ['Plan a weekend family getaway during the initial launch open house', 'Keep pet accessories, beds, and odors completely out of sight', 'Provide a printed "Features We Love About This Home" sheet on the kitchen island']
        },
        {
            title: '5. Evaluating Offers & Contract Negotiation',
            sub: 'Selecting the highest net proceeds with the highest closing certainty.',
            content: 'We build an easy-to-read offer comparison spreadsheet breaking down purchase prices, earnest money deposits, buyer loan types, appraisal contingencies, and requested closing dates to select the best overall terms.',
            tips: ['Verify the buyer lender reputation for on-time closings', 'Counter with a seller post-occupancy leaseback if you need time to move', 'Negotiate as-is inspection thresholds to prevent nitpicky repairs']
        },
        {
            title: '6. Navigating Escrow to a Smooth Settlement',
            sub: 'Managing title, appraisal, and closing milestones.',
            content: 'We meet the appraiser with a custom appraisal packet detailing all home improvements, manage title work, and guide you through the closing signing so your proceeds are wired securely on time.',
            tips: ['Assemble warranty manuals and paint codes in a kitchen drawer for the buyer', 'Confirm payoff amounts with your existing mortgage servicer early', 'Celebrate your successful move to your next chapter!']
        }
    ];

    const buyerTabBtns = document.querySelectorAll('.buyer-step-btn');
    const buyerContentBox = document.getElementById('buyerContentBox');

    function renderBuyerStep(index) {
        const step = buyersSteps[index];
        if (!buyerContentBox) return;

        buyerContentBox.innerHTML = `
            <div class="guide-step-display">
                <div>
                    <span class="badge-pill green">Buyer Strategy Guide</span>
                    <h3 class="heading-serif" style="font-size:1.8rem; margin-bottom:0.4rem;">${step.title}</h3>
                    <p style="font-size:0.95rem; color:var(--accent-warm); font-weight:600; margin-bottom:1rem;">${step.sub}</p>
                    <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.7; margin-bottom:1.5rem;">${step.content}</p>
                    <a href="#contact" class="btn btn-primary btn-sm"><i class="fa-solid fa-download"></i> Download Full Family Buyer's Guide</a>
                </div>

                <div style="background:var(--bg-subtle); padding:1.8rem; border-radius:var(--radius-md); border:1px solid var(--border);">
                    <h4 style="font-size:1rem; font-weight:700; color:var(--primary); margin-bottom:1rem;"><i class="fa-solid fa-lightbulb text-warm"></i> Oak & Ivy Pro Tips for Families:</h4>
                    <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
                        ${step.tips.map(t => `<li style="font-size:0.88rem; color:var(--text-muted); display:flex; align-items:flex-start; gap:10px;"><i class="fa-solid fa-check text-warm" style="margin-top:4px;"></i> ${t}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    if (buyerTabBtns.length > 0) {
        buyerTabBtns.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                buyerTabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderBuyerStep(idx);
            });
        });
    }

    const sellerTabBtns = document.querySelectorAll('.seller-step-btn');
    const sellerContentBox = document.getElementById('sellerContentBox');

    function renderSellerStep(index) {
        const step = sellersSteps[index];
        if (!sellerContentBox) return;

        sellerContentBox.innerHTML = `
            <div class="guide-step-display">
                <div>
                    <span class="badge-pill">Seller Strategy Guide</span>
                    <h3 class="heading-serif" style="font-size:1.8rem; margin-bottom:0.4rem;">${step.title}</h3>
                    <p style="font-size:0.95rem; color:var(--accent-warm); font-weight:600; margin-bottom:1rem;">${step.sub}</p>
                    <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.7; margin-bottom:1.5rem;">${step.content}</p>
                    <a href="#sellFormSection" class="btn btn-warm btn-sm"><i class="fa-solid fa-calculator"></i> Request Free Home Valuation</a>
                </div>

                <div style="background:var(--bg-subtle); padding:1.8rem; border-radius:var(--radius-md); border:1px solid var(--border);">
                    <h4 style="font-size:1rem; font-weight:700; color:var(--primary); margin-bottom:1rem;"><i class="fa-solid fa-star text-warm"></i> Listing Advice & Best Practices:</h4>
                    <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
                        ${step.tips.map(t => `<li style="font-size:0.88rem; color:var(--text-muted); display:flex; align-items:flex-start; gap:10px;"><i class="fa-solid fa-circle-check text-primary" style="margin-top:4px;"></i> ${t}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    if (sellerTabBtns.length > 0) {
        sellerTabBtns.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                sellerTabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderSellerStep(idx);
            });
        });
    }

    // =========================================================================
    // 7. REAL-TIME MORTGAGE CALCULATOR
    // =========================================================================
    const calcPrice = document.getElementById('calcPrice');
    const calcDown = document.getElementById('calcDown');
    const calcRate = document.getElementById('calcRate');
    const calcTerm = document.getElementById('calcTerm');
    const calcMonthlyTotal = document.getElementById('calcMonthlyTotal');
    const calcBreakdownPI = document.getElementById('calcBreakdownPI');
    const calcBreakdownTax = document.getElementById('calcBreakdownTax');
    const calcBreakdownIns = document.getElementById('calcBreakdownIns');
    const barPI = document.getElementById('barPI');
    const barTax = document.getElementById('barTax');
    const barIns = document.getElementById('barIns');

    function calculateMortgage() {
        const homePrice = parseFloat(calcPrice ? calcPrice.value : 1200000) || 1200000;
        const downPct = parseFloat(calcDown ? calcDown.value : 20) || 20;
        const annualRate = parseFloat(calcRate ? calcRate.value : 6.5) || 6.5;
        const termYears = parseInt(calcTerm ? calcTerm.value : 30) || 30;

        const loanAmount = homePrice * (1 - downPct / 100);
        const monthlyRate = (annualRate / 100) / 12;
        const totalMonths = termYears * 12;

        let monthlyPI = 0;
        if (monthlyRate > 0) {
            monthlyPI = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        } else {
            monthlyPI = loanAmount / totalMonths;
        }

        const monthlyTax = (homePrice * 0.011) / 12; // 1.1% estimated annual property tax
        const monthlyInsurance = (homePrice * 0.0035) / 12; // 0.35% estimated hazard insurance
        const monthlyTotal = monthlyPI + monthlyTax + monthlyInsurance;

        if (calcMonthlyTotal) calcMonthlyTotal.textContent = `$${Math.round(monthlyTotal).toLocaleString()}`;
        if (calcBreakdownPI) calcBreakdownPI.textContent = `$${Math.round(monthlyPI).toLocaleString()}`;
        if (calcBreakdownTax) calcBreakdownTax.textContent = `$${Math.round(monthlyTax).toLocaleString()}`;
        if (calcBreakdownIns) calcBreakdownIns.textContent = `$${Math.round(monthlyInsurance).toLocaleString()}`;

        // Color Bar Proportions
        const pctPI = (monthlyPI / monthlyTotal) * 100;
        const pctTax = (monthlyTax / monthlyTotal) * 100;
        const pctIns = (monthlyInsurance / monthlyTotal) * 100;

        if (barPI) barPI.style.width = `${pctPI}%`;
        if (barTax) barTax.style.width = `${pctTax}%`;
        if (barIns) barIns.style.width = `${pctIns}%`;
    }

    [calcPrice, calcDown, calcRate, calcTerm].forEach(el => {
        if (el) el.addEventListener('input', calculateMortgage);
    });

    // =========================================================================
    // 8. PROPERTY DETAIL MODAL
    // =========================================================================
    const homeDetailModal = document.getElementById('homeDetailModal');
    const modalHomeTitle = document.getElementById('modalHomeTitle');
    const modalHomePrice = document.getElementById('modalHomePrice');
    const modalHomeAddress = document.getElementById('modalHomeAddress');
    const modalHomeImage = document.getElementById('modalHomeImage');
    const modalHomeDesc = document.getElementById('modalHomeDesc');
    const modalHomeSpecsTable = document.getElementById('modalHomeSpecsTable');
    const modalHomeFeaturesList = document.getElementById('modalHomeFeaturesList');
    const modalAgentName = document.getElementById('modalAgentName');
    const modalAgentPhone = document.getElementById('modalAgentPhone');
    const modalAgentEmail = document.getElementById('modalAgentEmail');
    const modalBookTourDirectBtn = document.getElementById('modalBookTourDirectBtn');

    function openHomeDetail(homeId) {
        const home = homesData.find(h => h.id === homeId);
        if (!home || !homeDetailModal) return;

        if (modalHomeTitle) modalHomeTitle.textContent = home.title;
        if (modalHomePrice) modalHomePrice.textContent = `$${home.price.toLocaleString()}`;
        if (modalHomeAddress) modalHomeAddress.innerHTML = `<i class="fa-solid fa-location-dot text-warm"></i> ${home.address}, ${home.neighborhood}`;
        if (modalHomeImage) modalHomeImage.src = home.image;
        if (modalHomeDesc) modalHomeDesc.textContent = home.description;

        if (modalHomeSpecsTable) {
            modalHomeSpecsTable.innerHTML = `
                <tr><td>Bedrooms & Baths</td><td><strong>${home.beds} Beds • ${home.baths} Baths</strong></td></tr>
                <tr><td>Interior Living Area</td><td><strong>${home.sqft.toLocaleString()} Sq. Ft.</strong></td></tr>
                <tr><td>Lot Size & Grounds</td><td><strong>${home.lotSize}</strong></td></tr>
                <tr><td>Architectural Style</td><td><strong>${home.style}</strong></td></tr>
                <tr><td>School District Rating</td><td><strong style="color:var(--primary);"><i class="fa-solid fa-graduation-cap"></i> ${home.schoolDistrict}</strong></td></tr>
                <tr><td>Garage Configuration</td><td><strong>${home.garage}</strong></td></tr>
                <tr><td>Estimated Monthly HOA</td><td><strong>$${home.hoa} / month</strong></td></tr>
                <tr><td>Annual Property Taxes</td><td><strong>$${home.propertyTax.toLocaleString()} / year</strong></td></tr>
            `;
        }

        if (modalHomeFeaturesList) {
            modalHomeFeaturesList.innerHTML = home.features.map(f => `<li><i class="fa-solid fa-circle-check text-primary"></i> ${f}</li>`).join('');
        }

        const agent = agentsData.find(a => a.id === home.agentId) || agentsData[0];
        if (modalAgentName) modalAgentName.textContent = agent.name;
        if (modalAgentPhone) {
            modalAgentPhone.textContent = agent.phone;
            modalAgentPhone.href = `tel:${agent.phone.replace(/[^0-9]/g, '')}`;
        }
        if (modalAgentEmail) {
            modalAgentEmail.textContent = agent.email;
            modalAgentEmail.href = `mailto:${agent.email}`;
        }

        if (modalBookTourDirectBtn) {
            modalBookTourDirectBtn.onclick = () => {
                homeDetailModal.classList.remove('active');
                openTourModalPrefilled(home.title);
            };
        }

        homeDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function attachHomeModalListeners() {
        document.querySelectorAll('.open-home-modal-btn').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-home-id');
                openHomeDetail(id);
            };
        });

        document.querySelectorAll('.book-tour-btn').forEach(btn => {
            btn.onclick = () => {
                const title = btn.getAttribute('data-home-title');
                openTourModalPrefilled(title);
            };
        });
    }

    // =========================================================================
    // 9. BOOK TOUR & SELLER CONSULTATION MODALS
    // =========================================================================
    const tourModal = document.getElementById('tourModal');
    const tourTargetHome = document.getElementById('tourTargetHome');
    const tourForm = document.getElementById('tourForm');
    const thankYouModal = document.getElementById('thankYouModal');

    function openTourModalPrefilled(homeTitle) {
        if (tourTargetHome && homeTitle) {
            tourTargetHome.value = homeTitle;
        }
        if (tourModal) {
            tourModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    if (tourForm) {
        tourForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (tourModal) tourModal.classList.remove('active');
            if (thankYouModal) thankYouModal.classList.add('active');
            tourForm.reset();
        });
    }

    const sellerConsultForm = document.getElementById('sellerConsultForm');
    if (sellerConsultForm) {
        sellerConsultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (thankYouModal) thankYouModal.classList.add('active');
            sellerConsultForm.reset();
        });
    }

    // Close Modals
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
    // 10. RENDER AGENTS ROSTER
    // =========================================================================
    const agentsGrid = document.getElementById('agentsGrid');
    function renderAgents() {
        if (!agentsGrid) return;
        agentsGrid.innerHTML = '';

        agentsData.forEach(agent => {
            const card = document.createElement('div');
            card.className = 'agent-card';

            card.innerHTML = `
                <div class="agent-img-holder">
                    <img src="${agent.image}" alt="${agent.name}" loading="lazy">
                </div>
                <div class="agent-body">
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:700; color:var(--text-main); margin-bottom:0.2rem;">${agent.name}</h3>
                    <div style="font-size:0.8rem; color:var(--accent-warm); font-weight:700; margin-bottom:0.6rem;">${agent.title}</div>
                    <p style="font-size:0.84rem; color:var(--text-muted); line-height:1.5; margin-bottom:0.8rem;">${agent.bio}</p>
                    <div style="font-size:0.75rem; color:var(--primary); font-weight:700; margin-bottom:1rem; padding:4px 8px; background:var(--primary-soft); border-radius:var(--radius-sm);">
                        ${agent.experience}
                    </div>

                    <div style="display:flex; gap:8px;">
                        <a href="tel:${agent.phone.replace(/[^0-9]/g, '')}" class="btn btn-outline btn-sm" style="flex:1; font-size:0.75rem;"><i class="fa-solid fa-phone"></i> Call</a>
                        <a href="mailto:${agent.email}" class="btn btn-primary btn-sm" style="flex:1; font-size:0.75rem;"><i class="fa-solid fa-envelope"></i> Email</a>
                    </div>
                </div>
            `;

            agentsGrid.appendChild(card);
        });
    }

    // =========================================================================
    // 11. MOBILE NAV DRAWER
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
    renderHomes();
    renderNeighborhood('oakridge');
    renderBuyerStep(0);
    renderSellerStep(0);
    calculateMortgage();
    renderAgents();
});
