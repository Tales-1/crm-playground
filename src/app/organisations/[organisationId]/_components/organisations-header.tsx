"use client"

import { Button } from "@/components/ui/button";
import { BadgePoundSterling } from "lucide-react";
import InfoTile from "@/components/ui/info-tile";
import { getCurrentOrganisation } from "../../_data/organisation-store";

export default function OrganisationsHeader() {
    const organisation = getCurrentOrganisation();
    
    if(!organisation)
        return <h1>Organisation not found</h1>;

    const { city, state, country } = organisation.address;

    const totalValue = organisation.deals.reduce((sum, deal) => sum + deal.price, 0);

    const wonValue = organisation.deals
        .filter(deal => deal.stageTitle === 'closed-won')
        .reduce((sum, deal) => sum + deal.price, 0);

    const activeValue = organisation.deals
        .filter(deal => !['closed-won', 'closed-lost'].includes(deal.stageTitle))
        .reduce((sum, deal) => sum + deal.price, 0);

  return (
    <>
      <div className="flex gap-4 items-center justify-between">
       <InfoTile
            title={organisation.name}
            metadata={[
                { label:"City", value:city }, 
                { label:"State", value: state }, 
                { label:"Country", value:country }
            ]}
       />
        <div className="flex gap-3 text-sm">
          <Button variant="outline" className="bg-accent/80 text-on-surface">
            Edit
          </Button>
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
    </>
  );
}
