/**
 * HOMELY NEST — MODERN RENTAL REAL ESTATE MARKETPLACE
 * Complete 40-Rental Database, Multi-Filter Engine, Calendar & Application Wizard
 * Author: Girdhari Choyal (@gchoyal_websitedeveloper)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. COMPREHENSIVE 40 FICTIONAL RENTAL PROPERTIES DATABASE
    // =========================================================================
    const rentalsData = [
        // DOWNTOWN CENTRAL (6 Units)
        {
            id: 'hn-101',
            title: 'The Metropolitan Sky Loft',
            address: '450 Market Street, Apt 18B',
            neighborhood: 'Downtown Central',
            rent: 2850,
            deposit: 2000,
            beds: 2,
            baths: 2,
            sqft: 1120,
            type: 'loft',
            typeLabel: 'Modern High-Rise Loft',
            availableDate: 'Available Now',
            availableIso: '2026-09-10',
            furnished: true,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'garage',
            parkingLabel: 'Underground Assigned Garage',
            leaseTerms: '12 Months',
            utilities: ['Water & Sewer', 'Trash & Recycling', 'Gigabit High-Speed Fiber'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Resort Swimming Pool', 'Fitness Center', 'Private Balcony', 'Dishwasher', 'EV Charging Station', 'Rooftop Lounge'],
            featured: true,
            images: [
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Expansive 18th-floor corner loft with 12-foot concrete ceilings, polished hardwood floors, floor-to-ceiling windows framing downtown skyline views, and designer Italian kitchen.'
        },
        {
            id: 'hn-102',
            title: 'Apex Tower Luxury Suite',
            address: '820 Grand Avenue, Unit 32A',
            neighborhood: 'Downtown Central',
            rent: 3650,
            deposit: 3000,
            beds: 3,
            baths: 2.5,
            sqft: 1540,
            type: 'apartment',
            typeLabel: 'Luxury High-Rise Apartment',
            availableDate: 'Oct 1, 2026',
            availableIso: '2026-10-01',
            furnished: false,
            petPolicy: 'dogs',
            petLabel: 'Dogs Allowed (Up to 50 lbs)',
            parking: 'garage',
            parkingLabel: '2-Car Reserved Garage',
            leaseTerms: '12 or 24 Months',
            utilities: ['Water & Gas', 'Trash Removal'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Fitness Center', 'Resort Swimming Pool', 'Concierge 24/7', 'Dishwasher', 'EV Charging Station', 'Private Balcony'],
            featured: true,
            images: [
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Sarah Jenkins', company: 'Apex Residences Management', rating: '4.8/5', responseTime: '< 30 mins', phone: '+1 (555) 345-6789', email: 'leasing@apex-tower.com' },
            description: 'Soaring 32nd-floor luxury apartment with dual private balconies, chef kitchen with waterfall quartz island, Sub-Zero refrigerator, and primary suite spa bath.'
        },
        {
            id: 'hn-103',
            title: 'Urban Studio Flat at The Beacon',
            address: '210 Pine Street, Apt 5F',
            neighborhood: 'Downtown Central',
            rent: 1450,
            deposit: 1000,
            beds: 0,
            baths: 1,
            sqft: 520,
            type: 'studio',
            typeLabel: 'Modern Open-Concept Studio',
            availableDate: 'Available Now',
            availableIso: '2026-09-08',
            furnished: true,
            petPolicy: 'cats',
            petLabel: 'Cats Only',
            parking: 'street',
            parkingLabel: 'City Permit Street Parking',
            leaseTerms: '6 to 12 Months',
            utilities: ['Water', 'High-Speed Wifi', 'Trash'],
            amenities: ['Central A/C & Heating', 'Dishwasher', 'Package Lockers', 'Rooftop Lounge', 'Bicycle Storage'],
            featured: false,
            images: [
                'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1502005229762-ee1b2b814674?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Elena Rostova', company: 'Beacon Urban Living', rating: '4.7/5', responseTime: '< 1 hour', phone: '+1 (555) 456-7890', email: 'elena@beaconurban.com' },
            description: 'Smartly configured downtown micro-loft with built-in Murphy bed, modular storage walls, quartz breakfast bar, and sunny south-facing exposure.'
        },
        {
            id: 'hn-104',
            title: 'The Financial District Penthouse',
            address: '100 Wall Street, PH-4',
            neighborhood: 'Downtown Central',
            rent: 5200,
            deposit: 5000,
            beds: 4,
            baths: 3,
            sqft: 2450,
            type: 'apartment',
            typeLabel: 'Two-Story Sky Penthouse',
            availableDate: 'Nov 1, 2026',
            availableIso: '2026-11-01',
            furnished: true,
            petPolicy: 'all',
            petLabel: 'Pet Friendly (All Breeds)',
            parking: 'garage',
            parkingLabel: 'Private 2-Car Garage Box',
            leaseTerms: '12 Months Minimum',
            utilities: ['All Utilities Included'],
            amenities: ['In-unit Washer/Dryer', 'Private Balcony', 'Resort Swimming Pool', 'Fitness Center', 'EV Charging Station', 'Wine Storage', 'Private Elevator'],
            featured: true,
            images: [
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Dramatic full-floor duplex penthouse featuring a 600 sq ft private wrap-around terrace, gas fireplace, double-height living room, and bespoke bar.'
        },
        {
            id: 'hn-105',
            title: 'City Center 1-Bedroom Corner Suite',
            address: '615 4th Avenue, Unit 8C',
            neighborhood: 'Downtown Central',
            rent: 1850,
            deposit: 1500,
            beds: 1,
            baths: 1,
            sqft: 750,
            type: 'apartment',
            typeLabel: 'Corner 1-Bedroom Apartment',
            availableDate: 'Available Now',
            availableIso: '2026-09-12',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'covered',
            parkingLabel: 'Covered Carport Space',
            leaseTerms: '12 Months',
            utilities: ['Water & Sewer', 'Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Fitness Center', 'Dishwasher', 'Balcony', 'Dog Run Park'],
            featured: false,
            images: [
                'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'David Cho', company: 'Metro Living Properties', rating: '4.8/5', responseTime: '< 20 mins', phone: '+1 (555) 567-8901', email: 'david@metroliving.com' },
            description: 'Sun-drenched corner unit with floor-to-ceiling windows, stainless steel appliance suite, walk-in California closet, and private balcony.'
        },
        {
            id: 'hn-106',
            title: 'Mid-Century Modernized 2-Bed Flat',
            address: '320 State Street, Apt 3B',
            neighborhood: 'Downtown Central',
            rent: 2200,
            deposit: 1800,
            beds: 2,
            baths: 1.5,
            sqft: 980,
            type: 'condo',
            typeLabel: 'Boutique Modern Condo',
            availableDate: 'Oct 15, 2026',
            availableIso: '2026-10-15',
            furnished: false,
            petPolicy: 'none',
            petLabel: 'No Pets Allowed',
            parking: 'assigned',
            parkingLabel: '1 Assigned Surface Spot',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Hardwood Floors', 'Dishwasher', 'Storage Unit'],
            featured: false,
            images: [
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Sarah Jenkins', company: 'Apex Residences Management', rating: '4.8/5', responseTime: '< 30 mins', phone: '+1 (555) 345-6789', email: 'leasing@apex-tower.com' },
            description: 'Refined mid-century boutique condo with original restored oak flooring, exposed brick feature wall, matte black hardware, and updated bathroom.'
        },

        // RIVERFRONT DISTRICT (6 Units)
        {
            id: 'hn-201',
            title: 'Waterfront Promenade Townhome',
            address: '142 Riverwalk Way',
            neighborhood: 'Riverfront District',
            rent: 3400,
            deposit: 3000,
            beds: 3,
            baths: 2.5,
            sqft: 1820,
            type: 'townhouse',
            typeLabel: '3-Story Riverfront Townhome',
            availableDate: 'Available Now',
            availableIso: '2026-09-09',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Pet Friendly (Large Dogs OK)',
            parking: 'garage',
            parkingLabel: 'Attached 2-Car Garage',
            leaseTerms: '12 to 24 Months',
            utilities: ['Trash & Landscaping'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Private Balcony', 'River Views', 'Attached Garage', 'Dishwasher', 'Private Patio', 'EV Charging Station'],
            featured: true,
            images: [
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Rachel Adams', company: 'Riverfront Living Group', rating: '4.9/5', responseTime: '< 10 mins', phone: '+1 (555) 678-9012', email: 'rachel@riverfrontproperties.com' },
            description: 'Three levels of waterfront elegance directly overlooking the boardwalk and kayak launch. Features private rooftop deck, ground-floor patio, and direct-access 2-car garage.'
        },
        {
            id: 'hn-202',
            title: 'Marina View 2-Bedroom Condo',
            address: '280 Harbor Blvd, Unit 704',
            neighborhood: 'Riverfront District',
            rent: 2600,
            deposit: 2200,
            beds: 2,
            baths: 2,
            sqft: 1080,
            type: 'condo',
            typeLabel: 'Waterfront Luxury Condo',
            availableDate: 'Oct 1, 2026',
            availableIso: '2026-10-01',
            furnished: true,
            petPolicy: 'cats',
            petLabel: 'Cats OK',
            parking: 'garage',
            parkingLabel: '1 Gated Garage Space',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash', 'Gas'],
            amenities: ['In-unit Washer/Dryer', 'Resort Swimming Pool', 'Fitness Center', 'Private Balcony', 'Marina Access', 'Dishwasher', 'Kayak Storage'],
            featured: false,
            images: [
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Rachel Adams', company: 'Riverfront Living Group', rating: '4.9/5', responseTime: '< 10 mins', phone: '+1 (555) 678-9012', email: 'rachel@riverfrontproperties.com' },
            description: 'Panoramic river and yacht basin views from every room. Includes designer furnishings, marble primary bathroom, and private resident dock privileges.'
        },
        {
            id: 'hn-203',
            title: 'The Boardwalk 1-Bed River Studio',
            address: '88 Boardwalk Lane, Apt 212',
            neighborhood: 'Riverfront District',
            rent: 1650,
            deposit: 1200,
            beds: 1,
            baths: 1,
            sqft: 680,
            type: 'apartment',
            typeLabel: 'Riverfront 1-Bed Apartment',
            availableDate: 'Available Now',
            availableIso: '2026-09-15',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'covered',
            parkingLabel: '1 Covered Carport',
            leaseTerms: '12 Months',
            utilities: ['Water & Sewer'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Resort Swimming Pool', 'Fitness Center', 'Private Balcony', 'Dishwasher'],
            featured: false,
            images: [
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Rachel Adams', company: 'Riverfront Living Group', rating: '4.9/5', responseTime: '< 10 mins', phone: '+1 (555) 678-9012', email: 'rachel@riverfrontproperties.com' },
            description: 'Step right out onto the greenway trail from this ground-floor luxury flat with private patio garden, quartz kitchen, and subway tile bath.'
        },
        {
            id: 'hn-204',
            title: 'Rivergate Luxury 2-Bed Penthouse',
            address: '500 Water Street, PH-2',
            neighborhood: 'Riverfront District',
            rent: 3950,
            deposit: 3500,
            beds: 2,
            baths: 2.5,
            sqft: 1680,
            type: 'condo',
            typeLabel: 'Top-Floor River Penthouse',
            availableDate: 'Nov 1, 2026',
            availableIso: '2026-11-01',
            furnished: true,
            petPolicy: 'all',
            petLabel: 'Pet Friendly',
            parking: 'garage',
            parkingLabel: '2 Reserved Garage Spaces',
            leaseTerms: '12 Months',
            utilities: ['Water & Gas', 'Fiber Internet'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Private Balcony', 'Resort Swimming Pool', 'Rooftop Lounge', 'Wine Fridge', 'Concierge'],
            featured: true,
            images: [
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Unrivaled sunset views over the water with double-height vaulted ceilings, electric fireplace, motorized solar shades, and private rooftop terrace.'
        },
        {
            id: 'hn-205',
            title: 'Pier 14 Industrial Loft Apartment',
            address: '14 Pier Way, Apt 305',
            neighborhood: 'Riverfront District',
            rent: 2150,
            deposit: 1800,
            beds: 1,
            baths: 1.5,
            sqft: 940,
            type: 'loft',
            typeLabel: 'Timber & Brick River Loft',
            availableDate: 'Available Now',
            availableIso: '2026-09-07',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Dogs & Cats OK',
            parking: 'assigned',
            parkingLabel: '1 Assigned Surface Space',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Dishwasher', 'Exposed Brick', 'High Ceilings', 'Dog Wash Station'],
            featured: false,
            images: [
                'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Elena Rostova', company: 'Beacon Urban Living', rating: '4.7/5', responseTime: '< 1 hour', phone: '+1 (555) 456-7890', email: 'elena@beaconurban.com' },
            description: 'Converted maritime warehouse loft featuring authentic heavy timber beams, 14-foot ceilings, factory-style paned windows, and modern stainless kitchen.'
        },
        {
            id: 'hn-206',
            title: 'Harbor Pointe 3-Bedroom Flat',
            address: '340 Harbor Pointe Way, Unit 4B',
            neighborhood: 'Riverfront District',
            rent: 3100,
            deposit: 2500,
            beds: 3,
            baths: 2,
            sqft: 1420,
            type: 'apartment',
            typeLabel: 'Spacious 3-Bedroom Flat',
            availableDate: 'Oct 15, 2026',
            availableIso: '2026-10-15',
            furnished: false,
            petPolicy: 'dogs',
            petLabel: 'Dogs Welcome',
            parking: 'garage',
            parkingLabel: '1 Underground Garage Space',
            leaseTerms: '12 Months',
            utilities: ['Water & Sewer', 'Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Resort Swimming Pool', 'Fitness Center', 'Private Balcony', 'Dishwasher'],
            featured: false,
            images: [
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
            ],
            manager: { name: 'Rachel Adams', company: 'Riverfront Living Group', rating: '4.9/5', responseTime: '< 10 mins', phone: '+1 (555) 678-9012', email: 'rachel@riverfrontproperties.com' },
            description: 'Family-sized riverfront home with split floorplan, generous walk-in pantry, dual bathroom vanities, and community heated saltwater pool.'
        }
    ];


    // UPTOWN GARDENS (6 Units)
    rentalsData.push(
        {
            id: 'hn-301',
            title: 'Magnolia Court Garden Flat',
            address: '740 Blossom Street, Apt 2C',
            neighborhood: 'Uptown Gardens',
            rent: 2100,
            deposit: 1600,
            beds: 2,
            baths: 1,
            sqft: 920,
            type: 'apartment',
            typeLabel: 'Garden Courtyard Apartment',
            availableDate: 'Available Now',
            availableIso: '2026-09-08',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'covered',
            parkingLabel: '1 Covered Assigned Spot',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash & Recycling'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Private Balcony', 'Courtyard Garden', 'Dishwasher', 'Storage Unit'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'David Cho', company: 'Metro Living Properties', rating: '4.8/5', responseTime: '< 20 mins', phone: '+1 (555) 567-8901', email: 'david@metroliving.com' },
            description: 'Charming tree-lined street apartment with private garden terrace, French doors, white shaker cabinetry, and updated subway tile bath.'
        },
        {
            id: 'hn-302',
            title: 'The Kensington Historic Brownstone Flat',
            address: '115 Kensington Ave, Apt 1',
            neighborhood: 'Uptown Gardens',
            rent: 2950,
            deposit: 2500,
            beds: 3,
            baths: 2,
            sqft: 1480,
            type: 'townhouse',
            typeLabel: 'Historic Brownstone Duplex',
            availableDate: 'Oct 1, 2026',
            availableIso: '2026-10-01',
            furnished: false,
            petPolicy: 'dogs',
            petLabel: 'Dogs Welcome',
            parking: 'street',
            parkingLabel: 'Dedicated Street Permit',
            leaseTerms: '12 Months',
            utilities: ['Water & Landscaping'],
            amenities: ['In-unit Washer/Dryer', 'Decorative Fireplace', 'Private Garden Patio', 'Hardwood Floors', 'Dishwasher', 'High Ceilings'],
            featured: true,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Sarah Jenkins', company: 'Apex Residences Management', rating: '4.8/5', responseTime: '< 30 mins', phone: '+1 (555) 345-6789', email: 'leasing@apex-tower.com' },
            description: 'Grand brownstone parlor level with original 1890s crown molding, two decorative marble fireplaces, modern chef kitchen, and private fenced back garden.'
        },
        {
            id: 'hn-303',
            title: 'Highland Terrace 1-Bedroom',
            address: '490 Highland Blvd, Unit 14',
            neighborhood: 'Uptown Gardens',
            rent: 1550,
            deposit: 1200,
            beds: 1,
            baths: 1,
            sqft: 650,
            type: 'apartment',
            typeLabel: 'Cozy 1-Bedroom Flat',
            availableDate: 'Available Now',
            availableIso: '2026-09-11',
            furnished: false,
            petPolicy: 'cats',
            petLabel: 'Cats Only',
            parking: 'assigned',
            parkingLabel: '1 Off-Street Parking Space',
            leaseTerms: '12 Months',
            utilities: ['Water & Trash'],
            amenities: ['Central A/C & Heating', 'Dishwasher', 'Private Balcony', 'On-site Laundry'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'David Cho', company: 'Metro Living Properties', rating: '4.8/5', responseTime: '< 20 mins', phone: '+1 (555) 567-8901', email: 'david@metroliving.com' },
            description: 'Quiet residential street walking distance to cafes, bakeries, and botanical gardens. Features sunny living room and updated bathroom.'
        },
        {
            id: 'hn-304',
            title: 'Parkview Modern Townhome',
            address: '220 Parkview Way',
            neighborhood: 'Uptown Gardens',
            rent: 3250,
            deposit: 2800,
            beds: 3,
            baths: 2.5,
            sqft: 1750,
            type: 'townhouse',
            typeLabel: 'Modern 3-Bed Townhome',
            availableDate: 'Oct 15, 2026',
            availableIso: '2026-10-15',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'garage',
            parkingLabel: '2-Car Attached Garage',
            leaseTerms: '12 to 24 Months',
            utilities: ['Trash & HOA Maintenance'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Private Patio', '2-Car Garage', 'Dishwasher', 'Quartz Countertops', 'EV Charging'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Sleek new construction townhome directly across from City Park. Features open living concept, private rooftop terrace, and smart home lighting.'
        },
        {
            id: 'hn-305',
            title: 'Rosewood Garden Studio Suite',
            address: '810 Rosewood Lane, Apt B',
            neighborhood: 'Uptown Gardens',
            rent: 1250,
            deposit: 950,
            beds: 0,
            baths: 1,
            sqft: 480,
            type: 'studio',
            typeLabel: 'Furnished Garden Studio',
            availableDate: 'Available Now',
            availableIso: '2026-09-06',
            furnished: true,
            petPolicy: 'none',
            petLabel: 'No Pets Allowed',
            parking: 'street',
            parkingLabel: 'Street Parking',
            leaseTerms: '6 to 12 Months',
            utilities: ['All Utilities + Wifi Included'],
            amenities: ['Furnished', 'Central A/C & Heating', 'Private Garden Entrance', 'Microwave & Induction Cooktop'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Elena Rostova', company: 'Beacon Urban Living', rating: '4.7/5', responseTime: '< 1 hour', phone: '+1 (555) 456-7890', email: 'elena@beaconurban.com' },
            description: 'All-inclusive fully furnished studio with private patio garden, kitchenette, queen platform bed, and dedicated workspace.'
        },
        {
            id: 'hn-306',
            title: 'The Elmwood 2-Bedroom Duplex',
            address: '530 Elmwood Terrace, Unit 2',
            neighborhood: 'Uptown Gardens',
            rent: 2400,
            deposit: 2000,
            beds: 2,
            baths: 2,
            sqft: 1100,
            type: 'condo',
            typeLabel: 'Upper-Level Duplex Home',
            availableDate: 'Nov 1, 2026',
            availableIso: '2026-11-01',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Pet Friendly',
            parking: 'garage',
            parkingLabel: '1 Garage Spot',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Private Balcony', 'Dishwasher', 'Hardwood Floors'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1502005229762-ee1b2b814674?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'David Cho', company: 'Metro Living Properties', rating: '4.8/5', responseTime: '< 20 mins', phone: '+1 (555) 567-8901', email: 'david@metroliving.com' },
            description: 'Upper-level home in a boutique duplex with vaulted ceilings, large rear deck overlooking mature oaks, and spacious primary en-suite.'
        }
    );

    // TECH CORRIDOR (6 Units)
    rentalsData.push(
        {
            id: 'hn-401',
            title: 'Silicon Hub Smart Apartment',
            address: '1000 Innovation Way, Unit 408',
            neighborhood: 'Tech Corridor',
            rent: 2350,
            deposit: 1800,
            beds: 2,
            baths: 2,
            sqft: 1050,
            type: 'apartment',
            typeLabel: 'Smart Home Apartment',
            availableDate: 'Available Now',
            availableIso: '2026-09-08',
            furnished: true,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'garage',
            parkingLabel: 'EV Charging Garage Space',
            leaseTerms: '12 Months',
            utilities: ['Gigabit Fiber Internet Included'],
            amenities: ['In-unit Washer/Dryer', 'Smart Thermostat & Locks', 'EV Charging Station', 'Resort Swimming Pool', 'Co-working Lounge', 'Fitness Center', 'Private Balcony'],
            featured: true,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Alex Rivera', company: 'Tech Corridor Rentals', rating: '4.9/5', responseTime: '< 5 mins', phone: '+1 (555) 789-0123', email: 'alex@techcorridorrentals.com' },
            description: 'Designed for modern remote professionals with built-in dual-monitor workstation, gigabit fiber, keyless entry, and 24/7 co-working pods downstairs.'
        },
        {
            id: 'hn-402',
            title: 'Quantum Modern 1-Bed Flat',
            address: '850 Tech Parkway, Apt 312',
            neighborhood: 'Tech Corridor',
            rent: 1750,
            deposit: 1400,
            beds: 1,
            baths: 1,
            sqft: 720,
            type: 'apartment',
            typeLabel: 'Tech-Enabled 1-Bed',
            availableDate: 'Oct 1, 2026',
            availableIso: '2026-10-01',
            furnished: false,
            petPolicy: 'dogs',
            petLabel: 'Dogs OK',
            parking: 'covered',
            parkingLabel: '1 Covered Space',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash', 'Fiber'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Fitness Center', 'Resort Swimming Pool', 'Dishwasher', 'Coffee Bar Lounge'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Alex Rivera', company: 'Tech Corridor Rentals', rating: '4.9/5', responseTime: '< 5 mins', phone: '+1 (555) 789-0123', email: 'alex@techcorridorrentals.com' },
            description: 'Sleek open layout with acoustic sound insulation, quartz countertops, oversized bathroom vanity, and private sunny balcony.'
        },
        {
            id: 'hn-403',
            title: 'The Foundry Modern 3-Bed Townhouse',
            address: '420 Venture Blvd',
            neighborhood: 'Tech Corridor',
            rent: 3300,
            deposit: 2800,
            beds: 3,
            baths: 2.5,
            sqft: 1800,
            type: 'townhouse',
            typeLabel: '3-Bed Executive Townhome',
            availableDate: 'Available Now',
            availableIso: '2026-09-12',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'All Pets Welcome',
            parking: 'garage',
            parkingLabel: '2-Car Attached Garage w/ EV',
            leaseTerms: '12 to 24 Months',
            utilities: ['Trash & Landscaping'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', '2-Car Garage', 'Private Balcony', 'EV Charging Station', 'Dishwasher', 'Bonus Office Den'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: '3-level executive rental with dedicated top-floor home office suite, private 2-car garage with Level-2 EV charger, and private patio.'
        },
        {
            id: 'hn-404',
            title: 'Nexus Studio Loft',
            address: '120 Circuit Road, Apt 2B',
            neighborhood: 'Tech Corridor',
            rent: 1350,
            deposit: 1000,
            beds: 0,
            baths: 1,
            sqft: 500,
            type: 'studio',
            typeLabel: 'Compact Tech Studio',
            availableDate: 'Oct 15, 2026',
            availableIso: '2026-10-15',
            furnished: true,
            petPolicy: 'cats',
            petLabel: 'Cats OK',
            parking: 'assigned',
            parkingLabel: 'Assigned Parking Space',
            leaseTerms: '6 to 12 Months',
            utilities: ['All Utilities + Fiber Included'],
            amenities: ['Central A/C & Heating', 'Smart Home Controls', 'Furnished', 'Fitness Center', 'Package Lockers'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Alex Rivera', company: 'Tech Corridor Rentals', rating: '4.9/5', responseTime: '< 5 mins', phone: '+1 (555) 789-0123', email: 'alex@techcorridorrentals.com' },
            description: 'Efficient studio with ergonomic Herman Miller desk and chair, queen bed, stainless appliances, and full access to campus amenities.'
        },
        {
            id: 'hn-405',
            title: 'Vector 2-Bed Corner Residence',
            address: '670 Cyber Way, Unit 510',
            neighborhood: 'Tech Corridor',
            rent: 2450,
            deposit: 2000,
            beds: 2,
            baths: 2,
            sqft: 1120,
            type: 'apartment',
            typeLabel: 'Modern Corner Apartment',
            availableDate: 'Nov 1, 2026',
            availableIso: '2026-11-01',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs OK',
            parking: 'garage',
            parkingLabel: '1 Garage Space',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash', 'Fiber'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Resort Swimming Pool', 'Private Balcony', 'Fitness Center', 'EV Charging Station'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Alex Rivera', company: 'Tech Corridor Rentals', rating: '4.9/5', responseTime: '< 5 mins', phone: '+1 (555) 789-0123', email: 'alex@techcorridorrentals.com' },
            description: 'Dual master suite floorplan ideal for roommates or home office balance. Features wrap-around balcony with greenbelt views.'
        },
        {
            id: 'hn-406',
            title: 'Prism Luxury 4-Bed Rental House',
            address: '150 Silicon Hills Lane',
            neighborhood: 'Tech Corridor',
            rent: 4400,
            deposit: 4000,
            beds: 4,
            baths: 3,
            sqft: 2500,
            type: 'house',
            typeLabel: 'Single Family Smart Home',
            availableDate: 'Available Now',
            availableIso: '2026-09-09',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Pet Friendly (Large Fenced Yard)',
            parking: 'garage',
            parkingLabel: '2-Car Garage + Driveway',
            leaseTerms: '12 to 24 Months',
            utilities: ['Landscaping Included'],
            amenities: ['In-unit Washer/Dryer', 'Solar Power System', 'Smart Irrigation', 'Fenced Backyard', 'Central A/C & Heating', 'EV Charging Station'],
            featured: true,
            images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'High-tech custom home with integrated solar array, Tesla Powerwall, smart security, fenced yard with covered patio, and top-tier school access.'
        }
    );


    // ARTS QUARTER (6 Units)
    rentalsData.push(
        {
            id: 'hn-501',
            title: 'Canvas Warehouse Artist Loft',
            address: '520 Gallery Row, Unit 4A',
            neighborhood: 'Arts Quarter',
            rent: 2500,
            deposit: 2000,
            beds: 1,
            baths: 1.5,
            sqft: 1250,
            type: 'loft',
            typeLabel: 'Authentic Open Artist Loft',
            availableDate: 'Available Now',
            availableIso: '2026-09-07',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'All Pets Welcome',
            parking: 'street',
            parkingLabel: 'Off-Street Resident Parking',
            leaseTerms: '12 Months',
            utilities: ['Water & Trash'],
            amenities: ['In-unit Washer/Dryer', '14ft High Ceilings', 'Exposed Concrete & Brick', 'Commercial Kitchen Sink', 'Freight Elevator Access', 'Balcony'],
            featured: true,
            images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Chloe Dubois', company: 'Boho Real Estate & Lofts', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 890-1234', email: 'chloe@boholofts.com' },
            description: 'Enormous open live/work loft with north-facing skylights, museum-quality hanging tracks, raw concrete floors, and custom steel kitchen island.'
        },
        {
            id: 'hn-502',
            title: 'The Mural Studio Apartment',
            address: '310 Palette Way, Apt 3',
            neighborhood: 'Arts Quarter',
            rent: 1300,
            deposit: 1000,
            beds: 0,
            baths: 1,
            sqft: 510,
            type: 'studio',
            typeLabel: 'Vintage Studio Flat',
            availableDate: 'Oct 1, 2026',
            availableIso: '2026-10-01',
            furnished: true,
            petPolicy: 'cats',
            petLabel: 'Cats OK',
            parking: 'street',
            parkingLabel: 'Street Parking',
            leaseTerms: '6 to 12 Months',
            utilities: ['Water', 'Trash', 'Gas'],
            amenities: ['Central A/C & Heating', 'Furnished', 'Hardwood Floors', 'Walk to Art Galleries'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Chloe Dubois', company: 'Boho Real Estate & Lofts', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 890-1234', email: 'chloe@boholofts.com' },
            description: 'Sunlit studio nestled above an artisan pottery workshop. Includes vintage furnishings, butcher-block counters, and clawfoot soaking tub.'
        },
        {
            id: 'hn-503',
            title: 'Bohemian 2-Bedroom Courtyard Flat',
            address: '770 Bohemian Blvd, Unit 202',
            neighborhood: 'Arts Quarter',
            rent: 2250,
            deposit: 1800,
            beds: 2,
            baths: 1,
            sqft: 960,
            type: 'apartment',
            typeLabel: 'Courtyard 2-Bedroom',
            availableDate: 'Available Now',
            availableIso: '2026-09-14',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Pet Friendly',
            parking: 'assigned',
            parkingLabel: '1 Gated Assigned Spot',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Courtyard Fountain', 'Balcony', 'Dishwasher'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Chloe Dubois', company: 'Boho Real Estate & Lofts', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 890-1234', email: 'chloe@boholofts.com' },
            description: 'Spanish-revival styled apartment overlooking a tiled courtyard with lush bougainvillea, wrought iron balcony, and arched interior doorways.'
        },
        {
            id: 'hn-504',
            title: 'Sculptor’s Row 3-Story Townhouse',
            address: '140 Studio Alley',
            neighborhood: 'Arts Quarter',
            rent: 3500,
            deposit: 3000,
            beds: 3,
            baths: 2.5,
            sqft: 1900,
            type: 'townhouse',
            typeLabel: 'Modern Live/Work Townhome',
            availableDate: 'Nov 1, 2026',
            availableIso: '2026-11-01',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'garage',
            parkingLabel: 'Attached 1-Car Garage',
            leaseTerms: '12 to 24 Months',
            utilities: ['Trash & Recycling'],
            amenities: ['In-unit Washer/Dryer', 'Rooftop Deck', 'Commercial Ground Floor Studio', 'Central A/C', 'Dishwasher', 'Attached Garage'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Zoned live/work townhouse with ground floor commercial studio/gallery space and two upper residential levels capped with a panoramic roof terrace.'
        },
        {
            id: 'hn-505',
            title: 'Silk Mill 1-Bedroom Timber Flat',
            address: '890 Textile Way, Unit 105',
            neighborhood: 'Arts Quarter',
            rent: 1800,
            deposit: 1400,
            beds: 1,
            baths: 1,
            sqft: 790,
            type: 'loft',
            typeLabel: 'Converted Mill Loft',
            availableDate: 'Available Now',
            availableIso: '2026-09-10',
            furnished: false,
            petPolicy: 'dogs',
            petLabel: 'Dogs OK',
            parking: 'covered',
            parkingLabel: '1 Covered Spot',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Trash'],
            amenities: ['In-unit Washer/Dryer', 'Exposed Timber Ceilings', 'Granite Kitchen', 'Fitness Room', 'Dog Park'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Chloe Dubois', company: 'Boho Real Estate & Lofts', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 890-1234', email: 'chloe@boholofts.com' },
            description: 'Historic mill conversion offering 11-foot ceilings, custom matte black kitchen cabinetry, oversized walk-in closet, and quiet courtyard views.'
        },
        {
            id: 'hn-506',
            title: 'The Gallery 2-Bed Luxury Penthouse',
            address: '400 Arts Plaza, PH-B',
            neighborhood: 'Arts Quarter',
            rent: 3800,
            deposit: 3200,
            beds: 2,
            baths: 2,
            sqft: 1550,
            type: 'apartment',
            typeLabel: 'Art Deco Penthouse',
            availableDate: 'Oct 15, 2026',
            availableIso: '2026-10-15',
            furnished: true,
            petPolicy: 'all',
            petLabel: 'Pet Friendly',
            parking: 'garage',
            parkingLabel: '2 Gated Garage Spots',
            leaseTerms: '12 Months',
            utilities: ['Water, Gas & High-Speed Internet'],
            amenities: ['In-unit Washer/Dryer', 'Private Terrace w/ Firepit', 'Resort Swimming Pool', 'Curated Art Collection', 'Concierge', 'Wine Cooler'],
            featured: true,
            images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Breathtaking penthouse residence overlooking the theater district. Features curated contemporary artwork, marble wet bar, and 400 sq ft private terrace.'
        }
    );

    // SUBURBAN GROVE (5 Units)
    rentalsData.push(
        {
            id: 'hn-601',
            title: 'Oakwood Craftsman Family Rental',
            address: '1420 Oakridge Lane',
            neighborhood: 'Suburban Grove',
            rent: 3200,
            deposit: 2800,
            beds: 4,
            baths: 2.5,
            sqft: 2350,
            type: 'house',
            typeLabel: 'Single Family Craftsman',
            availableDate: 'Available Now',
            availableIso: '2026-09-08',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Pet Friendly (Large Fenced Yard)',
            parking: 'garage',
            parkingLabel: '2-Car Attached Garage',
            leaseTerms: '12 to 24 Months',
            utilities: ['Weekly Lawn Maintenance Included'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Fenced Backyard', 'Covered Porch', '2-Car Garage', 'Top School District', 'Fireplace'],
            featured: true,
            images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Thomas Sterling', company: 'Suburban Living Rentals', rating: '4.9/5', responseTime: '< 20 mins', phone: '+1 (555) 901-2345', email: 'thomas@suburbanliving.com' },
            description: 'Inviting 4-bedroom craftsman home in a cul-de-sac. Features a screened rear porch, stone fireplace, gourmet granite kitchen, and top 10/10 rated school zoning.'
        },
        {
            id: 'hn-602',
            title: 'Willowbrook Modern Farmhouse',
            address: '895 Willowbrook Court',
            neighborhood: 'Suburban Grove',
            rent: 3600,
            deposit: 3000,
            beds: 4,
            baths: 3,
            sqft: 2600,
            type: 'house',
            typeLabel: 'Modern Farmhouse Home',
            availableDate: 'Oct 1, 2026',
            availableIso: '2026-10-01',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'All Pets Welcome',
            parking: 'garage',
            parkingLabel: '3-Car Garage',
            leaseTerms: '12 to 24 Months',
            utilities: ['HOA Pool Pass & Lawncare'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Community Pool', 'Private Playground in Yard', 'Walk-in Pantry', 'Mudroom'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Thomas Sterling', company: 'Suburban Living Rentals', rating: '4.9/5', responseTime: '< 20 mins', phone: '+1 (555) 901-2345', email: 'thomas@suburbanliving.com' },
            description: 'Brand-new modern farmhouse with board-and-batten exterior, wide-plank oak flooring, double ovens, dedicated mudroom, and community clubhouse access.'
        },
        {
            id: 'hn-603',
            title: 'Meadowview 3-Bed Ranch House',
            address: '610 Meadowview Way',
            neighborhood: 'Suburban Grove',
            rent: 2650,
            deposit: 2200,
            beds: 3,
            baths: 2,
            sqft: 1750,
            type: 'house',
            typeLabel: 'Single-Story Ranch Home',
            availableDate: 'Available Now',
            availableIso: '2026-09-15',
            furnished: false,
            petPolicy: 'dogs',
            petLabel: 'Dogs OK',
            parking: 'garage',
            parkingLabel: '2-Car Garage',
            leaseTerms: '12 Months',
            utilities: ['Trash Included'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C', 'Fenced Backyard', 'Hardwood Floors', 'Dishwasher', 'Storage Shed'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Thomas Sterling', company: 'Suburban Living Rentals', rating: '4.9/5', responseTime: '< 20 mins', phone: '+1 (555) 901-2345', email: 'thomas@suburbanliving.com' },
            description: 'Single-level living at its best. Features open living/dining room, mature shaded backyard with paver patio, and updated master bath.'
        },
        {
            id: 'hn-604',
            title: 'Cedar Ridge 2-Bed Townhome',
            address: '330 Cedar Ridge Drive',
            neighborhood: 'Suburban Grove',
            rent: 1950,
            deposit: 1500,
            beds: 2,
            baths: 2,
            sqft: 1200,
            type: 'townhouse',
            typeLabel: 'Suburban 2-Bed Townhome',
            availableDate: 'Oct 15, 2026',
            availableIso: '2026-10-15',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs OK',
            parking: 'garage',
            parkingLabel: '1-Car Attached Garage',
            leaseTerms: '12 Months',
            utilities: ['Water & Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Private Patio', 'Dishwasher', 'Attached Garage'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1502005229762-ee1b2b814674?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Thomas Sterling', company: 'Suburban Living Rentals', rating: '4.9/5', responseTime: '< 20 mins', phone: '+1 (555) 901-2345', email: 'thomas@suburbanliving.com' },
            description: 'Low-maintenance suburban townhome with attached garage, private backyard patio, quartz breakfast bar, and quiet community park.'
        },
        {
            id: 'hn-605',
            title: 'Pinecrest 3-Bed Family Duplex',
            address: '112 Pinecrest Road, Unit A',
            neighborhood: 'Suburban Grove',
            rent: 2300,
            deposit: 1900,
            beds: 3,
            baths: 2,
            sqft: 1500,
            type: 'house',
            typeLabel: 'Spacious Duplex Home',
            availableDate: 'Nov 1, 2026',
            availableIso: '2026-11-01',
            furnished: false,
            petPolicy: 'none',
            petLabel: 'No Pets Allowed',
            parking: 'garage',
            parkingLabel: '1-Car Garage + Driveway',
            leaseTerms: '12 Months',
            utilities: ['Water', 'Lawn Maintenance'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C', 'Deck', 'Dishwasher', 'Walk-in Closets'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Thomas Sterling', company: 'Suburban Living Rentals', rating: '4.9/5', responseTime: '< 20 mins', phone: '+1 (555) 901-2345', email: 'thomas@suburbanliving.com' },
            description: 'Bright and airy 3-bedroom duplex with rear sun deck, spacious basement storage, and quick access to regional commuter train station.'
        }
    );

    // GREENBELT LAKE & AFFORDABLE FINDS (5 Units -> Total 40)
    rentalsData.push(
        {
            id: 'hn-701',
            title: 'Lakeside Cove Waterfront House',
            address: '88 Lake Shore Drive',
            neighborhood: 'Greenbelt Lake',
            rent: 4200,
            deposit: 3800,
            beds: 4,
            baths: 3.5,
            sqft: 2800,
            type: 'house',
            typeLabel: 'Lakefront Executive Home',
            availableDate: 'Available Now',
            availableIso: '2026-09-08',
            furnished: true,
            petPolicy: 'all',
            petLabel: 'Pet Friendly',
            parking: 'garage',
            parkingLabel: '2-Car Garage + Boat Slip',
            leaseTerms: '12 Months Minimum',
            utilities: ['Water & Landscaping'],
            amenities: ['In-unit Washer/Dryer', 'Private Boat Dock', 'Hot Tub on Deck', 'Central A/C & Heating', 'Fireplace', 'Lake Views', 'EV Charging'],
            featured: true,
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Lakefront paradise featuring a private floating dock, wraparound deck with cedar hot tub, double-height great room, and panoramic lake views.'
        },
        {
            id: 'hn-702',
            title: 'The Pines Lakefront 2-Bed Condo',
            address: '240 Lakeview Way, Unit 302',
            neighborhood: 'Greenbelt Lake',
            rent: 2450,
            deposit: 2000,
            beds: 2,
            baths: 2,
            sqft: 1150,
            type: 'condo',
            typeLabel: 'Waterfront Condo',
            availableDate: 'Oct 1, 2026',
            availableIso: '2026-10-01',
            furnished: false,
            petPolicy: 'dogs',
            petLabel: 'Dogs OK',
            parking: 'covered',
            parkingLabel: '1 Covered Carport Space',
            leaseTerms: '12 Months',
            utilities: ['Water, Trash & Kayak Storage'],
            amenities: ['In-unit Washer/Dryer', 'Lakefront Balcony', 'Resort Swimming Pool', 'Tennis Courts', 'Dishwasher', 'Hiking Trail Access'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'David Cho', company: 'Metro Living Properties', rating: '4.8/5', responseTime: '< 20 mins', phone: '+1 (555) 567-8901', email: 'david@metroliving.com' },
            description: 'Relaxed resort living on the lake with private balcony, community clubhouse, pool, private sandy beach, and miles of surrounding hiking trails.'
        },
        {
            id: 'hn-703',
            title: 'Greenbelt View 1-Bed Apartment',
            address: '150 Forest Trail, Apt 2B',
            neighborhood: 'Greenbelt Lake',
            rent: 1600,
            deposit: 1200,
            beds: 1,
            baths: 1,
            sqft: 710,
            type: 'apartment',
            typeLabel: 'Nature-Surrounded Flat',
            availableDate: 'Available Now',
            availableIso: '2026-09-12',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'Cats & Dogs Welcome',
            parking: 'assigned',
            parkingLabel: '1 Assigned Surface Space',
            leaseTerms: '12 Months',
            utilities: ['Water & Trash'],
            amenities: ['In-unit Washer/Dryer', 'Central A/C & Heating', 'Private Balcony', 'Nature Trails', 'Dishwasher', 'Pet Spa Station'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'David Cho', company: 'Metro Living Properties', rating: '4.8/5', responseTime: '< 20 mins', phone: '+1 (555) 567-8901', email: 'david@metroliving.com' },
            description: 'Direct forest preserve views from your private balcony with direct access to paved biking and jogging paths.'
        },
        {
            id: 'hn-704',
            title: 'Affordable Hilltop Micro Studio',
            address: '42 Hill Street, Apt 1',
            neighborhood: 'Greenbelt Lake',
            rent: 950,
            deposit: 800,
            beds: 0,
            baths: 1,
            sqft: 380,
            type: 'studio',
            typeLabel: 'Budget-Friendly Micro Studio',
            availableDate: 'Available Now',
            availableIso: '2026-09-06',
            furnished: true,
            petPolicy: 'cats',
            petLabel: 'Cats Only',
            parking: 'street',
            parkingLabel: 'Street Parking',
            leaseTerms: '6 to 12 Months',
            utilities: ['All Utilities + Internet Included'],
            amenities: ['Furnished', 'A/C Unit', 'Microwave & Refrigerator', 'Quiet Location'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Elena Rostova', company: 'Beacon Urban Living', rating: '4.7/5', responseTime: '< 1 hour', phone: '+1 (555) 456-7890', email: 'elena@beaconurban.com' },
            description: 'Our most affordable all-inclusive studio. Ideal for students or budget-conscious renters with full furnishings and quiet surroundings.'
        },
        {
            id: 'hn-705',
            title: 'Timberline 3-Bed Mountain Chalet',
            address: '770 Timberline Ridge',
            neighborhood: 'Greenbelt Lake',
            rent: 3750,
            deposit: 3200,
            beds: 3,
            baths: 2.5,
            sqft: 2100,
            type: 'house',
            typeLabel: 'Cedar Timber Home',
            availableDate: 'Oct 15, 2026',
            availableIso: '2026-10-15',
            furnished: false,
            petPolicy: 'all',
            petLabel: 'All Pets Welcome',
            parking: 'garage',
            parkingLabel: '2-Car Heated Garage',
            leaseTerms: '12 Months',
            utilities: ['Snow Removal & Landscaping'],
            amenities: ['In-unit Washer/Dryer', 'Wood Stove Fireplace', 'Huge Viewing Deck', 'Vaulted Pine Ceilings', '2-Car Garage', 'Central A/C'],
            featured: false,
            images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
            manager: { name: 'Marcus Sterling', company: 'NestView Property Management', rating: '4.9/5', responseTime: '< 15 mins', phone: '+1 (555) 234-5678', email: 'rentals@nestviewgroup.com' },
            description: 'Custom cedar architectural home perched on the ridge with sweeping forest views, wraparound deck, heated garage, and knotty pine vaulted ceilings.'
        }
    );


    // =========================================================================
    // 2. STATE MANAGEMENT & SAVED ITEMS STORAGE
    // =========================================================================
    let filterState = {
        keyword: '',
        neighborhood: 'all',
        propertyType: 'all',
        minRent: 0,
        maxRent: 6000,
        beds: 'all',
        baths: 'all',
        furnished: 'all',
        petPolicy: 'all',
        parking: 'all',
        amenities: []
    };

    let currentSort = 'recommended';
    let currentViewMode = 'grid'; // 'grid' or 'list'
    let currentPage = 1;
    const itemsPerPage = 9;

    // Saved Items LocalState
    let savedPropertyIds = JSON.parse(localStorage.getItem('hn_saved_properties') || '["hn-101", "hn-201", "hn-601"]');
    let savedSearches = [
        { id: 'ss-1', title: 'Downtown 2-Bed Lofts under $3,000', params: 'Downtown Central • 2+ Beds • Max $3,000/mo', alertEnabled: true, count: 4 },
        { id: 'ss-2', title: 'Pet-Friendly Riverfront Townhomes', params: 'Riverfront District • Pets Allowed • Townhouse', alertEnabled: true, count: 2 },
        { id: 'ss-3', title: 'Tech Corridor Furnished Smart Flats', params: 'Tech Corridor • Furnished • EV Charging', alertEnabled: false, count: 3 }
    ];
    let recentlyViewedIds = ['hn-102', 'hn-401', 'hn-701'];

    // DOM Elements
    const listingsGrid = document.getElementById('listingsGrid');
    const totalResultsCount = document.getElementById('totalResultsCount');
    const activeFiltersContainer = document.getElementById('activeFiltersContainer');
    const paginationContainer = document.getElementById('paginationContainer');
    const savedCountBadge = document.getElementById('savedCountBadge');
    const headerSavedCount = document.getElementById('headerSavedCount');

    // =========================================================================
    // 3. RENDER PROPERTY CARDS & SEARCH ENGINE
    // =========================================================================
    function getFilteredListings() {
        return rentalsData.filter(item => {
            // Keyword Match
            if (filterState.keyword) {
                const q = filterState.keyword.toLowerCase();
                const match = item.title.toLowerCase().includes(q) ||
                              item.address.toLowerCase().includes(q) ||
                              item.neighborhood.toLowerCase().includes(q) ||
                              item.typeLabel.toLowerCase().includes(q);
                if (!match) return false;
            }

            // Neighborhood Match
            if (filterState.neighborhood !== 'all' && item.neighborhood !== filterState.neighborhood) {
                return false;
            }

            // Property Type Match
            if (filterState.propertyType !== 'all' && item.type !== filterState.propertyType) {
                return false;
            }

            // Price Range Match
            if (item.rent < filterState.minRent || item.rent > filterState.maxRent) {
                return false;
            }

            // Bedrooms Match
            if (filterState.beds !== 'all') {
                if (filterState.beds === 'studio' && item.beds !== 0) return false;
                if (filterState.beds === '1' && item.beds < 1) return false;
                if (filterState.beds === '2' && item.beds < 2) return false;
                if (filterState.beds === '3' && item.beds < 3) return false;
                if (filterState.beds === '4' && item.beds < 4) return false;
            }

            // Bathrooms Match
            if (filterState.baths !== 'all') {
                const reqBaths = parseFloat(filterState.baths);
                if (item.baths < reqBaths) return false;
            }

            // Furnished Match
            if (filterState.furnished !== 'all') {
                const isFurn = filterState.furnished === 'yes';
                if (item.furnished !== isFurn) return false;
            }

            // Pet Policy Match
            if (filterState.petPolicy !== 'all') {
                if (filterState.petPolicy === 'all' && item.petPolicy === 'none') return false;
                if (filterState.petPolicy === 'dogs' && (item.petPolicy !== 'dogs' && item.petPolicy !== 'all')) return false;
                if (filterState.petPolicy === 'cats' && (item.petPolicy !== 'cats' && item.petPolicy !== 'all')) return false;
            }

            // Parking Match
            if (filterState.parking !== 'all' && item.parking !== filterState.parking) {
                return false;
            }

            // Amenities Match (Must have all selected amenities)
            if (filterState.amenities.length > 0) {
                const hasAll = filterState.amenities.every(a => item.amenities.some(itemA => itemA.toLowerCase().includes(a.toLowerCase())));
                if (!hasAll) return false;
            }

            return true;
        });
    }

    function sortListings(list) {
        const sorted = [...list];
        switch (currentSort) {
            case 'price-asc':
                return sorted.sort((a, b) => a.rent - b.rent);
            case 'price-desc':
                return sorted.sort((a, b) => b.rent - a.rent);
            case 'sqft-desc':
                return sorted.sort((a, b) => b.sqft - a.sqft);
            case 'date-asc':
                return sorted.sort((a, b) => new Date(a.availableIso) - new Date(b.availableIso));
            case 'recommended':
            default:
                return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
    }

    function renderListings() {
        const filtered = getFilteredListings();
        const sorted = sortListings(filtered);

        if (totalResultsCount) {
            totalResultsCount.innerHTML = `Showing <strong>${sorted.length}</strong> available rental properties`;
        }

        renderActiveFilterChips();

        if (!listingsGrid) return;

        if (sorted.length === 0) {
            listingsGrid.innerHTML = `
                <div class="no-results-box text-center" style="grid-column: 1/-1; padding: 4rem 1rem;">
                    <i class="fa-solid fa-house-circle-xmark text-muted" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">No rental properties match your search</h3>
                    <p class="text-muted" style="max-width: 420px; margin: 0 auto 1.5rem;">Try adjusting your budget, bedrooms, or removing some of your filter criteria.</p>
                    <button class="btn btn-primary btn-sm" id="resetAllFiltersBtn"><i class="fa-solid fa-rotate-left"></i> Reset All Filters</button>
                </div>
            `;
            const rBtn = document.getElementById('resetAllFiltersBtn');
            if (rBtn) rBtn.onclick = resetFilters;
            if (paginationContainer) paginationContainer.innerHTML = '';
            return;
        }

        // Apply Pagination
        const totalPages = Math.ceil(sorted.length / itemsPerPage);
        if (currentPage > totalPages) currentPage = 1;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const pageItems = sorted.slice(startIndex, startIndex + itemsPerPage);

        // Update Grid class for List vs Grid View
        listingsGrid.className = currentViewMode === 'list' ? 'properties-grid list-view' : 'properties-grid';

        listingsGrid.innerHTML = pageItems.map(item => {
            const isSaved = savedPropertyIds.includes(item.id);
            const petBadgeClass = item.petPolicy === 'none' ? 'badge-neutral' : 'badge-emerald';
            const petIcon = item.petPolicy === 'none' ? 'fa-ban' : 'fa-paw';
            
            return `
                <div class="property-card" data-property-id="${item.id}">
                    <div class="card-img-wrap">
                        <img src="${item.images[0]}" alt="${item.title}" class="card-img" loading="lazy">
                        <div class="card-badges-top">
                            ${item.featured ? '<span class="badge badge-coral"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
                            <span class="badge ${petBadgeClass}"><i class="fa-solid ${petIcon}"></i> ${item.petLabel}</span>
                        </div>
                        <button class="card-favorite-btn ${isSaved ? 'active' : ''}" data-fav-id="${item.id}" aria-label="Save to My Nest">
                            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                    </div>

                    <div class="card-body">
                        <div class="card-price-row">
                            <div>
                                <span class="card-rent">$${item.rent.toLocaleString()}</span>
                                <span class="card-rent-period">/mo</span>
                            </div>
                            <span class="card-type-tag">${item.typeLabel}</span>
                        </div>

                        <h3 class="card-title open-detail-btn" data-detail-id="${item.id}">${item.title}</h3>
                        <p class="card-address"><i class="fa-solid fa-location-dot text-primary"></i> ${item.address} • ${item.neighborhood}</p>

                        <div class="card-specs-row">
                            <div class="spec-item"><i class="fa-solid fa-bed text-primary"></i> <strong>${item.beds === 0 ? 'Studio' : item.beds + ' Bed'}</strong></div>
                            <div class="spec-item"><i class="fa-solid fa-bath text-primary"></i> <strong>${item.baths} Bath</strong></div>
                            <div class="spec-item"><i class="fa-solid fa-ruler-combined text-primary"></i> <strong>${item.sqft.toLocaleString()}</strong> sqft</div>
                        </div>

                        <div class="card-footer-tags">
                            <span class="avail-date-text"><i class="fa-solid fa-circle-check"></i> ${item.availableDate}</span>
                            <span class="text-muted" style="font-size: 0.76rem;"><i class="fa-solid fa-shield-halved text-primary"></i> Verified Landlord</span>
                        </div>

                        <div class="card-action-btns">
                            <button class="btn btn-outline btn-sm open-detail-btn" data-detail-id="${item.id}">
                                <i class="fa-regular fa-eye"></i> View Details
                            </button>
                            <button class="btn btn-primary btn-sm trigger-apply-btn" data-property-title="${item.title}" data-property-rent="${item.rent}">
                                <i class="fa-solid fa-file-pen"></i> Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        renderPagination(totalPages);
        attachCardListeners();
        updateSavedBadges();
    }

    // =========================================================================
    // 4. ACTIVE FILTER CHIPS & RESET
    // =========================================================================
    function renderActiveFilterChips() {
        if (!activeFiltersContainer) return;
        const chips = [];

        if (filterState.keyword) {
            chips.push(`<span class="active-tag-chip">Keyword: "${filterState.keyword}" <i class="fa-solid fa-xmark remove-chip" data-key="keyword"></i></span>`);
        }
        if (filterState.neighborhood !== 'all') {
            chips.push(`<span class="active-tag-chip">Area: ${filterState.neighborhood} <i class="fa-solid fa-xmark remove-chip" data-key="neighborhood"></i></span>`);
        }
        if (filterState.propertyType !== 'all') {
            chips.push(`<span class="active-tag-chip">Type: ${filterState.propertyType} <i class="fa-solid fa-xmark remove-chip" data-key="propertyType"></i></span>`);
        }
        if (filterState.beds !== 'all') {
            chips.push(`<span class="active-tag-chip">Beds: ${filterState.beds} <i class="fa-solid fa-xmark remove-chip" data-key="beds"></i></span>`);
        }
        if (filterState.maxRent < 6000) {
            chips.push(`<span class="active-tag-chip">Max Rent: $${filterState.maxRent.toLocaleString()} <i class="fa-solid fa-xmark remove-chip" data-key="maxRent"></i></span>`);
        }
        if (filterState.furnished !== 'all') {
            chips.push(`<span class="active-tag-chip">Furnished: ${filterState.furnished === 'yes' ? 'Yes' : 'No'} <i class="fa-solid fa-xmark remove-chip" data-key="furnished"></i></span>`);
        }
        if (filterState.petPolicy !== 'all') {
            chips.push(`<span class="active-tag-chip">Pets: ${filterState.petPolicy} <i class="fa-solid fa-xmark remove-chip" data-key="petPolicy"></i></span>`);
        }
        filterState.amenities.forEach(a => {
            chips.push(`<span class="active-tag-chip">${a} <i class="fa-solid fa-xmark remove-amenity" data-amenity="${a}"></i></span>`);
        });

        if (chips.length > 0) {
            activeFiltersContainer.innerHTML = chips.join('') + `<button class="clear-all-btn" id="clearAllFiltersBtn"><i class="fa-solid fa-trash-can"></i> Clear All</button>`;
            
            // Attach chip remover listeners
            activeFiltersContainer.querySelectorAll('.remove-chip').forEach(btn => {
                btn.onclick = () => {
                    const key = btn.getAttribute('data-key');
                    if (key === 'keyword') filterState.keyword = '';
                    if (key === 'neighborhood') filterState.neighborhood = 'all';
                    if (key === 'propertyType') filterState.propertyType = 'all';
                    if (key === 'beds') filterState.beds = 'all';
                    if (key === 'maxRent') filterState.maxRent = 6000;
                    if (key === 'furnished') filterState.furnished = 'all';
                    if (key === 'petPolicy') filterState.petPolicy = 'all';
                    syncFilterInputs();
                    renderListings();
                };
            });

            activeFiltersContainer.querySelectorAll('.remove-amenity').forEach(btn => {
                btn.onclick = () => {
                    const am = btn.getAttribute('data-amenity');
                    filterState.amenities = filterState.amenities.filter(x => x !== am);
                    renderListings();
                };
            });

            const clearBtn = document.getElementById('clearAllFiltersBtn');
            if (clearBtn) clearBtn.onclick = resetFilters;
        } else {
            activeFiltersContainer.innerHTML = '';
        }
    }

    function resetFilters() {
        filterState = {
            keyword: '',
            neighborhood: 'all',
            propertyType: 'all',
            minRent: 0,
            maxRent: 6000,
            beds: 'all',
            baths: 'all',
            furnished: 'all',
            petPolicy: 'all',
            parking: 'all',
            amenities: []
        };
        currentPage = 1;
        syncFilterInputs();
        renderListings();
        showToast('Filters cleared');
    }

    function syncFilterInputs() {
        const kwInput = document.getElementById('keywordSearchInput');
        const heroKwInput = document.getElementById('heroKeywordInput');
        const nhSelect = document.getElementById('neighborhoodFilterSelect');
        const typeSelect = document.getElementById('typeFilterSelect');
        const bedsSelect = document.getElementById('bedsFilterSelect');
        const rentSelect = document.getElementById('rentFilterSelect');

        if (kwInput) kwInput.value = filterState.keyword;
        if (heroKwInput) heroKwInput.value = filterState.keyword;
        if (nhSelect) nhSelect.value = filterState.neighborhood;
        if (typeSelect) typeSelect.value = filterState.propertyType;
        if (bedsSelect) bedsSelect.value = filterState.beds;
        if (rentSelect) rentSelect.value = filterState.maxRent >= 6000 ? 'all' : filterState.maxRent.toString();
    }

    // =========================================================================
    // 5. PAGINATION RENDERER
    // =========================================================================
    function renderPagination(totalPages) {
        if (!paginationContainer) return;
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let html = `<button class="page-btn" id="prevPageBtn" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
        html += `<button class="page-btn" id="nextPageBtn" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;

        paginationContainer.innerHTML = html;

        paginationContainer.querySelectorAll('.page-btn[data-page]').forEach(btn => {
            btn.onclick = () => {
                currentPage = parseInt(btn.getAttribute('data-page'));
                renderListings();
                document.getElementById('rentalsMarketplace').scrollIntoView({ behavior: 'smooth' });
            };
        });

        const prevBtn = document.getElementById('prevPageBtn');
        if (prevBtn) {
            prevBtn.onclick = () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderListings();
                    document.getElementById('rentalsMarketplace').scrollIntoView({ behavior: 'smooth' });
                }
            };
        }

        const nextBtn = document.getElementById('nextPageBtn');
        if (nextBtn) {
            nextBtn.onclick = () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderListings();
                    document.getElementById('rentalsMarketplace').scrollIntoView({ behavior: 'smooth' });
                }
            };
        }
    }


    // =========================================================================
    // 6. FAVORITES / SAVED PROPERTIES & "MY NEST" DASHBOARD
    // =========================================================================
    function toggleFavorite(id) {
        if (savedPropertyIds.includes(id)) {
            savedPropertyIds = savedPropertyIds.filter(x => x !== id);
            showToast('Removed from Saved Properties');
        } else {
            savedPropertyIds.push(id);
            showToast('Saved to My Nest ❤️');
        }
        localStorage.setItem('hn_saved_properties', JSON.stringify(savedPropertyIds));
        renderListings();
        renderMyNestTab();
        updateSavedBadges();
    }

    function updateSavedBadges() {
        const count = savedPropertyIds.length;
        if (savedCountBadge) savedCountBadge.textContent = count;
        if (headerSavedCount) headerSavedCount.textContent = count;
    }

    function renderMyNestTab() {
        const myNestContainer = document.getElementById('myNestContentContainer');
        if (!myNestContainer) return;

        const activeTab = document.querySelector('.nest-tab-btn.active')?.getAttribute('data-tab') || 'saved-properties';

        if (activeTab === 'saved-properties') {
            const savedListings = rentalsData.filter(item => savedPropertyIds.includes(item.id));
            if (savedListings.length === 0) {
                myNestContainer.innerHTML = `
                    <div class="text-center" style="padding: 3rem 1rem;">
                        <i class="fa-regular fa-heart text-muted" style="font-size: 2.5rem; margin-bottom: 0.75rem;"></i>
                        <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">No saved properties yet</h4>
                        <p class="text-muted" style="font-size: 0.88rem; margin-bottom: 1.25rem;">Click the heart icon on any rental card to save it for quick access.</p>
                        <a href="#rentalsMarketplace" class="btn btn-primary btn-sm">Browse Available Rentals</a>
                    </div>
                `;
            } else {
                myNestContainer.innerHTML = `
                    <div class="properties-grid" style="grid-template-columns: repeat(3, 1fr);">
                        ${savedListings.map(item => `
                            <div class="property-card">
                                <div class="card-img-wrap">
                                    <img src="${item.images[0]}" alt="${item.title}" class="card-img">
                                    <button class="card-favorite-btn active" data-fav-id="${item.id}"><i class="fa-solid fa-heart"></i></button>
                                </div>
                                <div class="card-body">
                                    <div class="card-price-row">
                                        <span class="card-rent">$${item.rent.toLocaleString()}<span class="card-rent-period">/mo</span></span>
                                        <span class="card-type-tag">${item.typeLabel}</span>
                                    </div>
                                    <h4 class="card-title open-detail-btn" data-detail-id="${item.id}">${item.title}</h4>
                                    <p class="card-address">${item.address}</p>
                                    <div class="card-action-btns mt-2">
                                        <button class="btn btn-outline btn-sm open-detail-btn" data-detail-id="${item.id}">View</button>
                                        <button class="btn btn-primary btn-sm trigger-apply-btn" data-property-title="${item.title}" data-property-rent="${item.rent}">Apply</button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
        } else if (activeTab === 'saved-searches') {
            myNestContainer.innerHTML = `
                <div class="saved-searches-list">
                    ${savedSearches.map(s => `
                        <div class="saved-search-item">
                            <div>
                                <h4 class="saved-search-title">${s.title}</h4>
                                <p class="saved-search-params"><i class="fa-solid fa-filter text-primary"></i> ${s.params}</p>
                                <span class="badge badge-emerald mt-2"><i class="fa-solid fa-bell"></i> ${s.count} New Matches Today</span>
                            </div>
                            <div class="d-flex flex-column align-items-end gap-2">
                                <button class="btn btn-outline btn-sm run-saved-search-btn" data-search-id="${s.id}">
                                    <i class="fa-solid fa-magnifying-glass"></i> Search
                                </button>
                                <label style="font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:4px;">
                                    <input type="checkbox" ${s.alertEnabled ? 'checked' : ''}> Email Alert
                                </label>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (activeTab === 'recently-viewed') {
            const viewedListings = rentalsData.filter(item => recentlyViewedIds.includes(item.id));
            myNestContainer.innerHTML = `
                <div class="properties-grid" style="grid-template-columns: repeat(3, 1fr);">
                    ${viewedListings.map(item => `
                        <div class="property-card">
                            <div class="card-img-wrap">
                                <img src="${item.images[0]}" alt="${item.title}" class="card-img">
                            </div>
                            <div class="card-body">
                                <div class="card-price-row">
                                    <span class="card-rent">$${item.rent.toLocaleString()}<span class="card-rent-period">/mo</span></span>
                                    <span class="card-type-tag">${item.typeLabel}</span>
                                </div>
                                <h4 class="card-title open-detail-btn" data-detail-id="${item.id}">${item.title}</h4>
                                <p class="card-address">${item.address}</p>
                                <button class="btn btn-outline btn-sm w-100 mt-2 open-detail-btn" data-detail-id="${item.id}">View Details</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        attachCardListeners();
    }

    // Tab buttons handler
    document.querySelectorAll('.nest-tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.nest-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMyNestTab();
        };
    });

    // =========================================================================
    // 7. PROPERTY DETAIL MODAL & INTERACTIVE TOUR CALENDAR
    // =========================================================================
    const propertyDetailModal = document.getElementById('propertyDetailModal');
    let selectedTourDate = '2026-09-15';
    let selectedTourTime = 'Morning (10:00 AM)';
    let currentDetailItem = null;

    function openPropertyDetail(id) {
        const item = rentalsData.find(x => x.id === id);
        if (!item || !propertyDetailModal) return;
        currentDetailItem = item;

        // Track recently viewed
        if (!recentlyViewedIds.includes(id)) {
            recentlyViewedIds.unshift(id);
            if (recentlyViewedIds.length > 6) recentlyViewedIds.pop();
        }

        const isSaved = savedPropertyIds.includes(item.id);

        // Fill detail elements
        document.getElementById('modalDetailMainImg').src = item.images[0];
        document.getElementById('modalDetailTitle').textContent = item.title;
        document.getElementById('modalDetailAddress').innerHTML = `<i class="fa-solid fa-location-dot text-primary"></i> ${item.address} • ${item.neighborhood}`;
        document.getElementById('modalDetailRent').textContent = `$${item.rent.toLocaleString()}`;
        document.getElementById('modalDetailTypeTag').textContent = item.typeLabel;
        document.getElementById('modalDetailBeds').textContent = item.beds === 0 ? 'Studio' : `${item.beds} Bed`;
        document.getElementById('modalDetailBaths').textContent = `${item.baths} Bath`;
        document.getElementById('modalDetailSqft').textContent = `${item.sqft.toLocaleString()} sqft`;
        document.getElementById('modalDetailDeposit').textContent = `$${item.deposit.toLocaleString()}`;
        document.getElementById('modalDetailLeaseTerms').textContent = item.leaseTerms;
        document.getElementById('modalDetailAvailDate').textContent = item.availableDate;
        document.getElementById('modalDetailDesc').textContent = item.description;

        // Utilities list
        const utilsContainer = document.getElementById('modalDetailUtilities');
        if (utilsContainer) {
            utilsContainer.innerHTML = item.utilities.map(u => `<li><i class="fa-solid fa-check text-emerald"></i> ${u}</li>`).join('');
        }

        // Amenities list
        const amenContainer = document.getElementById('modalDetailAmenities');
        if (amenContainer) {
            amenContainer.innerHTML = item.amenities.map(a => `
                <div class="amenity-chip-item"><i class="fa-solid fa-circle-check text-primary"></i> <span>${a}</span></div>
            `).join('');
        }

        // Manager info
        document.getElementById('modalManagerName').textContent = item.manager.name;
        document.getElementById('modalManagerCompany').textContent = item.manager.company;
        document.getElementById('modalManagerRating').textContent = item.manager.rating;
        document.getElementById('modalManagerPhone').textContent = item.manager.phone;
        document.getElementById('modalManagerPhoneLink').href = `tel:${item.manager.phone}`;

        // Thumbnails Strip
        const thumbsStrip = document.getElementById('modalDetailThumbsStrip');
        if (thumbsStrip) {
            thumbsStrip.innerHTML = item.images.map((img, i) => `
                <img src="${img}" class="detail-thumb-item ${i === 0 ? 'active' : ''}" data-thumb-src="${img}" alt="Thumbnail ${i+1}">
            `).join('');

            thumbsStrip.querySelectorAll('.detail-thumb-item').forEach(th => {
                th.onclick = () => {
                    thumbsStrip.querySelectorAll('.detail-thumb-item').forEach(t => t.classList.remove('active'));
                    th.classList.add('active');
                    document.getElementById('modalDetailMainImg').src = th.getAttribute('data-thumb-src');
                };
            });
        }

        // Favorite Toggle inside Modal
        const modalFavBtn = document.getElementById('modalDetailFavBtn');
        if (modalFavBtn) {
            modalFavBtn.innerHTML = `<i class="${isSaved ? 'fa-solid text-coral' : 'fa-regular'} fa-heart"></i> ${isSaved ? 'Saved in My Nest' : 'Save Property'}`;
            modalFavBtn.onclick = () => {
                toggleFavorite(item.id);
                const updatedSaved = savedPropertyIds.includes(item.id);
                modalFavBtn.innerHTML = `<i class="${updatedSaved ? 'fa-solid text-coral' : 'fa-regular'} fa-heart"></i> ${updatedSaved ? 'Saved in My Nest' : 'Save Property'}`;
            };
        }

        // Apply Now Button inside Modal
        const modalApplyBtn = document.getElementById('modalDetailApplyBtn');
        if (modalApplyBtn) {
            modalApplyBtn.onclick = () => {
                propertyDetailModal.classList.remove('active');
                openApplicationModal(item.title, item.rent);
            };
        }

        // Render Calendar
        renderAvailabilityCalendar();

        propertyDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function renderAvailabilityCalendar() {
        const calGrid = document.getElementById('tourCalendarGrid');
        if (!calGrid) return;

        // Days of week header
        const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        let html = days.map(d => `<div class="cal-day-head">${d}</div>`).join('');

        // 31 Calendar Cells for Sept / Oct
        for (let i = 1; i <= 31; i++) {
            const isPast = i < 8;
            const isSelected = i === 15;
            html += `
                <div class="cal-day-cell ${isPast ? 'disabled' : ''} ${isSelected ? 'active' : ''}" data-day="${i}">
                    ${i}
                </div>
            `;
        }

        calGrid.innerHTML = html;

        calGrid.querySelectorAll('.cal-day-cell:not(.disabled)').forEach(cell => {
            cell.onclick = () => {
                calGrid.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('active'));
                cell.classList.add('active');
                selectedTourDate = `2026-09-${cell.getAttribute('data-day').padStart(2, '0')}`;
            };
        });

        // Time slot buttons
        document.querySelectorAll('.time-slot-btn').forEach(btn => {
            btn.onclick = () => {
                document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedTourTime = btn.textContent.trim();
            };
        });

        // Book Tour Action
        const bookTourBtn = document.getElementById('bookTourSlotBtn');
        if (bookTourBtn) {
            bookTourBtn.onclick = () => {
                showToast(`Viewing requested for ${selectedTourDate} at ${selectedTourTime}! Landlord notified.`);
                propertyDetailModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            };
        }
    }

    // =========================================================================
    // 8. MULTI-STEP RENTAL APPLICATION WIZARD
    // =========================================================================
    const applicationModal = document.getElementById('applicationModal');
    let currentStep = 1;
    const totalSteps = 4;

    function openApplicationModal(propertyTitle, rent) {
        if (!applicationModal) return;
        currentStep = 1;
        updateWizardUI();

        const titleEl = document.getElementById('appTargetPropertyTitle');
        const rentEl = document.getElementById('appTargetPropertyRent');
        if (titleEl && propertyTitle) titleEl.textContent = propertyTitle;
        if (rentEl && rent) rentEl.textContent = `$${rent.toLocaleString()}/month`;

        applicationModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateWizardUI() {
        // Update Step Panes
        for (let i = 1; i <= totalSteps; i++) {
            const pane = document.getElementById(`wizardStepPane${i}`);
            const node = document.getElementById(`wizardStepNode${i}`);
            if (pane) {
                if (i === currentStep) pane.classList.add('active');
                else pane.classList.remove('active');
            }
            if (node) {
                if (i < currentStep) {
                    node.className = 'step-node completed';
                    node.querySelector('.step-num').innerHTML = '<i class="fa-solid fa-check"></i>';
                } else if (i === currentStep) {
                    node.className = 'step-node active';
                    node.querySelector('.step-num').textContent = i;
                } else {
                    node.className = 'step-node';
                    node.querySelector('.step-num').textContent = i;
                }
            }
        }

        // Button states
        const prevBtn = document.getElementById('wizardPrevBtn');
        const nextBtn = document.getElementById('wizardNextBtn');
        const submitBtn = document.getElementById('wizardSubmitBtn');

        if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
        if (nextBtn) nextBtn.style.display = currentStep < totalSteps ? 'inline-flex' : 'none';
        if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'inline-flex' : 'none';
    }

    const wizardNextBtn = document.getElementById('wizardNextBtn');
    if (wizardNextBtn) {
        wizardNextBtn.onclick = () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateWizardUI();
            }
        };
    }

    const wizardPrevBtn = document.getElementById('wizardPrevBtn');
    if (wizardPrevBtn) {
        wizardPrevBtn.onclick = () => {
            if (currentStep > 1) {
                currentStep--;
                updateWizardUI();
            }
        };
    }

    const wizardForm = document.getElementById('rentalApplicationForm');
    if (wizardForm) {
        wizardForm.onsubmit = (e) => {
            e.preventDefault();
            // Show Success Screen
            document.getElementById('wizardStepPane4').classList.remove('active');
            document.getElementById('wizardSuccessPane').classList.add('active');
            document.getElementById('wizardProgressHeader').style.display = 'none';
            document.getElementById('wizardFooterActions').style.display = 'none';
            showToast('Rental application submitted successfully!');
        };
    }

    // =========================================================================
    // 9. EVENT LISTENERS & FILTER CONTROLLERS
    // =========================================================================
    function attachCardListeners() {
        // Open Detail
        document.querySelectorAll('.open-detail-btn').forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute('data-detail-id');
                openPropertyDetail(id);
            };
        });

        // Favorite Buttons
        document.querySelectorAll('.card-favorite-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-fav-id');
                toggleFavorite(id);
            };
        });

        // Apply Buttons
        document.querySelectorAll('.trigger-apply-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const title = btn.getAttribute('data-property-title');
                const rent = btn.getAttribute('data-property-rent');
                openApplicationModal(title, rent);
            };
        });
    }

    // Search bar listener
    const keywordInput = document.getElementById('keywordSearchInput');
    if (keywordInput) {
        keywordInput.addEventListener('input', (e) => {
            filterState.keyword = e.target.value.trim();
            currentPage = 1;
            renderListings();
        });
    }

    // Hero search button
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    if (heroSearchBtn) {
        heroSearchBtn.onclick = () => {
            const hKw = document.getElementById('heroKeywordInput');
            const hType = document.getElementById('heroTypeSelect');
            const hRent = document.getElementById('heroRentSelect');

            if (hKw) filterState.keyword = hKw.value.trim();
            if (hType) filterState.propertyType = hType.value;
            if (hRent && hRent.value !== 'all') filterState.maxRent = parseInt(hRent.value);

            syncFilterInputs();
            currentPage = 1;
            renderListings();
            document.getElementById('rentalsMarketplace').scrollIntoView({ behavior: 'smooth' });
        };
    }

    // Filter selects in toolbar
    const nhFilterSelect = document.getElementById('neighborhoodFilterSelect');
    if (nhFilterSelect) {
        nhFilterSelect.onchange = (e) => {
            filterState.neighborhood = e.target.value;
            currentPage = 1;
            renderListings();
        };
    }

    const typeFilterSelect = document.getElementById('typeFilterSelect');
    if (typeFilterSelect) {
        typeFilterSelect.onchange = (e) => {
            filterState.propertyType = e.target.value;
            currentPage = 1;
            renderListings();
        };
    }

    const bedsFilterSelect = document.getElementById('bedsFilterSelect');
    if (bedsFilterSelect) {
        bedsFilterSelect.onchange = (e) => {
            filterState.beds = e.target.value;
            currentPage = 1;
            renderListings();
        };
    }

    const rentFilterSelect = document.getElementById('rentFilterSelect');
    if (rentFilterSelect) {
        rentFilterSelect.onchange = (e) => {
            const val = e.target.value;
            filterState.maxRent = val === 'all' ? 6000 : parseInt(val);
            currentPage = 1;
            renderListings();
        };
    }

    // Sort Select
    const sortSelect = document.getElementById('listingsSortSelect');
    if (sortSelect) {
        sortSelect.onchange = (e) => {
            currentSort = e.target.value;
            renderListings();
        };
    }

    // View mode toggle
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    if (gridViewBtn && listViewBtn) {
        gridViewBtn.onclick = () => {
            currentViewMode = 'grid';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            renderListings();
        };
        listViewBtn.onclick = () => {
            currentViewMode = 'list';
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            renderListings();
        };
    }

    // Quick filter chips
    document.querySelectorAll('.quick-chip').forEach(chip => {
        chip.onclick = () => {
            const filterType = chip.getAttribute('data-quick-filter');
            if (filterType === 'pet-friendly') {
                filterState.petPolicy = 'all';
            } else if (filterType === 'under-2000') {
                filterState.maxRent = 2000;
            } else if (filterType === 'furnished') {
                filterState.furnished = 'yes';
            } else if (filterType === '2-bed') {
                filterState.beds = '2';
            } else if (filterType === 'downtown') {
                filterState.neighborhood = 'Downtown Central';
            } else if (filterType === 'townhomes') {
                filterState.propertyType = 'townhouse';
            }
            syncFilterInputs();
            currentPage = 1;
            renderListings();
            document.getElementById('rentalsMarketplace').scrollIntoView({ behavior: 'smooth' });
        };
    });

    // Neighborhood cards click to filter
    document.querySelectorAll('.nh-card').forEach(card => {
        card.onclick = () => {
            const nhName = card.getAttribute('data-nh-name');
            if (nhName) {
                filterState.neighborhood = nhName;
                syncFilterInputs();
                currentPage = 1;
                renderListings();
                document.getElementById('rentalsMarketplace').scrollIntoView({ behavior: 'smooth' });
                showToast(`Showing rentals in ${nhName}`);
            }
        };
    });

    // Modal Close Triggers
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

    // Mobile nav toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.onclick = () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        };
    }

    // Toast Notification helper
    function showToast(msg) {
        const toast = document.getElementById('toastNotice');
        if (!toast) return;
        toast.querySelector('.toast-msg').textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
    }

    // Initialize Everything
    renderListings();
    renderMyNestTab();
});
