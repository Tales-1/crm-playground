import path from "path";
import { promises as fs } from "fs";
import { z } from "zod";
import { organisationSchema } from "./data/organisation-schema";
import OrganisationsBody from "./components/organisations-body";

async function getOrganisations() {
  const data = await fs.readFile(
    path.join((process.cwd(), "src/app/organisations/data/organisations.json"))
  );

  const organisations = JSON.parse(data.toString());

  return z.array(organisationSchema).parse(organisations);
}

export default async function Page() {
  const data = await getOrganisations();

  return (
    <main>
      <OrganisationsBody organisations={data} />
    </main>
  );
}
