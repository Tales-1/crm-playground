import { promises as fs } from "fs"
import path from "path";
import React from "react";
import { z } from "zod";
import { Organisation, OrganisationSchema } from "../_data/organisation-schema";
import { BadgePoundSterling } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrganisationDetailsTabs from "./_components/tabs/tabs-area";

interface OrganisationPageProps {
    params: Promise<{organisationId: string}>
}

async function getOrganisationAsync(id: string) {
    const data = await fs.readFile(path.join(process.cwd(), "src/app/organisations/_data/organisations.json"));
    const organisations = JSON.parse(data.toString());
    const orgArray = z.array(OrganisationSchema).parse(organisations);

    return orgArray.find((org) => org.id == id);
}

export default async function OrganisationDetailsPage({ params }: OrganisationPageProps ) {
    const id = (await params).organisationId;
    const organisation = await getOrganisationAsync(id);

    if (!organisation)
        return <h1>Organisation not found</h1>

    const totalValue = organisation.deals.reduce((sum, deal) => sum + deal.price, 0);

    const wonValue = organisation.deals
        .filter(deal => deal.stageTitle === 'closed-won')
        .reduce((sum, deal) => sum + deal.price, 0);

    const activeValue = organisation.deals
        .filter(deal => !['closed-won', 'closed-lost'].includes(deal.stageTitle))
        .reduce((sum, deal) => sum + deal.price, 0);

    return (
        <div className="p-5">
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center justify-between">
                    <div className="flex gap-3">
                        <div className="mr-3 w-14 text-xl aspect-square rounded-md bg-accent/20 text-accent flex items-center 
                        justify-center text-on-surface font-bold">
                            {organisation.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-lg">{organisation.name}</p>
                            <p className="text-sm text-muted">{organisation.address.city}, {organisation.address.state} {organisation.address.country}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 text-sm">
                        <Button variant="outline" className="bg-accent/80 text-on-surface">Edit</Button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-card rounded-lg p-3 border border-outline">
                        <div className="flex items-center">
                            <div className="p-2 rounded-md bg-violet-500/10 text-violet-500 mr-3">
                                <BadgePoundSterling className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-muted text-xs">Total Value</p>
                                <p className="font-medium">£{totalValue.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg p-3 border border-outline">
                        <div className="flex items-center">
                            <div className="p-2 rounded-md bg-green-500/10 text-green-500 mr-3">
                                <BadgePoundSterling className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-muted text-xs">Won Value</p>
                                <p className="font-medium">£{wonValue.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg p-3 border border-outline">
                        <div className="flex items-center">
                            <div className="p-2 rounded-md bg-amber-500/10 text-amber-500 mr-3">
                                <BadgePoundSterling className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-muted text-xs">Active Value</p>
                                <p className="font-medium">£{activeValue.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <OrganisationDetailsTabs organisation={organisation} />
            </div>
        </div>
    )
}