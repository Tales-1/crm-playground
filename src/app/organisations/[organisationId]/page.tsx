import { promises as fs } from "fs"
import path from "path";
import React from "react";
import { z } from "zod";
import { OrganisationSchema } from "../_data/organisation-schema";
import OrganisationDetails from "./_components/organisation-details";
import OrganisationsHeader from "./_components/organisations-header";
import { OrganisationProvider } from "../_data/organisation-provider";

export interface OrganisationPageProps {
    params: Promise<{organisationId: string}>
}

export async function getOrganisationAsync(id: string) {
    const data = await fs.readFile(path.join(process.cwd(), "src/app/organisations/_data/organisations.json"));
    const organisations = JSON.parse(data.toString());
    const orgArray = z.array(OrganisationSchema).parse(organisations);

    return orgArray.find((org) => org.id == id);
}

export default async function OrganisationDetailsPage({ params }: OrganisationPageProps) {
    const id = (await params).organisationId;
    const organisation = await getOrganisationAsync(id);

    if (!organisation)
        return <h1>Organisation not found</h1>

    return (
        <OrganisationProvider organisation={organisation}>
            <div className="p-5">
                <div className="flex flex-col gap-2">
                    <OrganisationsHeader />
                    <OrganisationDetails />
                </div>
            </div>
        </OrganisationProvider>
    )
}