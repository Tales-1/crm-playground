import { Deal, dealSchema } from "@/app/deals/_data/deal-schema";
import { Person, personSchema } from "@/app/people/_data/people-schema";
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