import { Deal, dealSchema } from "@/app/deals/data/deal-schema";
import { Person, personSchema } from "@/app/people/data/people-schema";
import { z } from "zod";

export interface Organisation {
    id: string;
    name: string;
    logo?: string;
    address: {
      street?: string;
      city: string;
      state: string;
      zipCode: string;
      country?: string;
    };
    industry?: string;
    website?: string;
    phone?: string;
    email?: string;
    contacts: Person[];
    deals: Deal[];
    notes?: string;
    createdAt: string;
    updatedAt: string;
  };

  const AddressSchema = z.object({
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    country: z.string()
  });

  export const OrganisationSchema = z.object({
    id: z.string(),
    name: z.string(),
    logo: z.string().optional(),
    address: AddressSchema,
    industry: z.string().optional(),
    website: z.string().url().optional(),
    phone: z.string().optional(),
    email: z.string().email().optional(),
    contacts: z.array(personSchema),
    deals: z.array(dealSchema),
    notes: z.string().optional(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/)
  });
  

 // {
    //   "id": 10,
    //   "name": "Global Consulting",
    //   "address": "5432 International Blvd, Miami, FL 33101",
    //   "phone": "(305) 555-5432",
    //   "email": "consulting@globalconsulting.com",
    //   "website": "https://www.globalconsulting.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 11,
    //   "name": "Future Enterprises",
    //   "address": "2222 Innovation Way, Dallas, TX 75201",
    //   "phone": "(214) 555-2222",
    //   "email": "info@futureenterprises.com",
    //   "website": "https://www.futureenterprises.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 12,
    //   "name": "TechMasters Solutions",
    //   "address": "1248 Expert Rd, Atlanta, GA 30303",
    //   "phone": "(404) 555-1248",
    //   "email": "info@techmasters.com",
    //   "website": "https://www.techmasters.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 13,
    //   "name": "Innovative Systems",
    //   "address": "6573 System Blvd, San Diego, CA 92101",
    //   "phone": "(619) 555-6573",
    //   "email": "contact@innovativesystems.com",
    //   "website": "https://www.innovativesystems.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 14,
    //   "name": "Visionary Designs",
    //   "address": "4321 Vision Rd, Houston, TX 77001",
    //   "phone": "(713) 555-4321",
    //   "email": "designs@visionarydesigns.com",
    //   "website": "https://www.visionarydesigns.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 15,
    //   "name": "Solar Solutions Corp.",
    //   "address": "8123 Sunlight Blvd, Phoenix, AZ 85001",
    //   "phone": "(602) 555-8123",
    //   "email": "info@solarsolutions.com",
    //   "website": "https://www.solarsolutions.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 16,
    //   "name": "Aqua Technologies",
    //   "address": "9876 Water Way, Orlando, FL 32801",
    //   "phone": "(407) 555-9876",
    //   "email": "contact@aquatechnologies.com",
    //   "website": "https://www.aquatechnologies.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 17,
    //   "name": "Prime Solutions",
    //   "address": "2468 Enterprise Ave, Washington, DC 20001",
    //   "phone": "(202) 555-2468",
    //   "email": "info@primesolutions.com",
    //   "website": "https://www.primesolutions.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 18,
    //   "name": "TechBridge",
    //   "address": "1895 Bridge Ave, Portland, OR 97201",
    //   "phone": "(503) 555-1895",
    //   "email": "contact@techbridge.com",
    //   "website": "https://www.techbridge.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 19,
    //   "name": "Quantum Innovations",
    //   "address": "7654 Quantum Lane, Raleigh, NC 27601",
    //   "phone": "(919) 555-7654",
    //   "email": "info@quantuminnovations.com",
    //   "website": "https://www.quantuminnovations.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 20,
    //   "name": "Precision Systems",
    //   "address": "3579 Precision Blvd, Charlotte, NC 28201",
    //   "phone": "(704) 555-3579",
    //   "email": "support@precisionsystems.com",
    //   "website": "https://www.precisionsystems.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 21,
    //   "name": "Oceanic Enterprises",
    //   "address": "6421 Seaside Blvd, Miami, FL 33101",
    //   "phone": "(305) 555-6421",
    //   "email": "contact@oceanicenterprises.com",
    //   "website": "https://www.oceanicenterprises.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 22,
    //   "name": "Speedy Logistics",
    //   "address": "1743 Transport Ave, Minneapolis, MN 55101",
    //   "phone": "(612) 555-1743",
    //   "email": "support@speedylogistics.com",
    //   "website": "https://www.speedylogistics.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 23,
    //   "name": "CyberSecure Solutions",
    //   "address": "5558 Security Dr, Denver, CO 80203",
    //   "phone": "(303) 555-5558",
    //   "email": "contact@cybersecure.com",
    //   "website": "https://www.cybersecure.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 24,
    //   "name": "NextLevel Creations",
    //   "address": "8234 Future St, Kansas City, MO 64101",
    //   "phone": "(816) 555-8234",
    //   "email": "creations@nextlevel.com",
    //   "website": "https://www.nextlevelcreations.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 25,
    //   "name": "Vertex Enterprises",
    //   "address": "1245 Summit Dr, Nashville, TN 37201",
    //   "phone": "(615) 555-1245",
    //   "email": "contact@vertexenterprises.com",
    //   "website": "https://www.vertexenterprises.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 26,
    //   "name": "Innovative Tech",
    //   "address": "2456 Idea Lane, Salt Lake City, UT 84101",
    //   "phone": "(801) 555-2456",
    //   "email": "info@innovatetech.com",
    //   "website": "https://www.innovatetech.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 27,
    //   "name": "Optimus Solutions",
    //   "address": "6789 Optimus Way, San Jose, CA 95101",
    //   "phone": "(408) 555-6789",
    //   "email": "support@optimussolutions.com",
    //   "website": "https://www.optimussolutions.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 28,
    //   "name": "Redwood Ventures",
    //   "address": "3210 Redwood St, San Francisco, CA 94111",
    //   "phone": "(415) 555-3210",
    //   "email": "info@redwoodventures.com",
    //   "website": "https://www.redwoodventures.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 29,
    //   "name": "Clearview Technologies",
    //   "address": "5432 Visionary Blvd, Seattle, WA 98001",
    //   "phone": "(206) 555-5432",
    //   "email": "contact@clearviewtech.com",
    //   "website": "https://www.clearviewtech.com",
    //   "about":"Housing Association"
    // },
    // {
    //   "id": 30,
    //   "name": "Hyperion Solutions",
    //   "address": "8765 Hyperion St, New York, NY 10019",
    //   "phone": "(212) 555-8765",
    //   "email": "support@hyperionsolutions.com",
    //   "website": "https://www.hyperionsolutions.com",
    //   "about":"Housing Association"
    // }