import { DealSchema } from "@/app/deals/_data/deal-schema";
import { OrganisationSchema } from "@/app/organisations/_data/organisation-schema";
import { z } from "zod";

const PartialOrgSchema = z.lazy(() =>
  OrganisationSchema.pick({
    id: true,
    name: true,
    address: true,
  })
);

const PersonSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  organisations: z.array(PartialOrgSchema),
  phone: z.string(),
  email: z.string(),
  deals: z.array(DealSchema),
  notes: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

type Person = z.infer<typeof PersonSchema>;

export { PersonSchema, type Person };
