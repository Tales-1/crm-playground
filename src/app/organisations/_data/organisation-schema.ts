import { DealSchema } from "@/app/deals/_data/deal-schema";
import { PersonSchema } from "@/app/people/_data/people-schema";
import { z } from "zod";

const AddressSchema = z.object({
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

const PartialContactSchema: z.ZodSchema = z.lazy(() =>
  PersonSchema.pick({
    id: true,
    name: true,
    email: true,
    phone: true,
  })
);

const OrganisationSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().optional(),
  address: AddressSchema,
  industry: z.string().optional(),
  website: z.string().url().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  contacts: z.array(PartialContactSchema),
  deals: z.array(DealSchema),
  notes: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/),
});

type Organisation = z.infer<typeof OrganisationSchema>;

export { OrganisationSchema, AddressSchema, type Organisation}