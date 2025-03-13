import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

import DealItem from "../deal-item";
import { getCurrentOrganisation } from "@/app/organisations/_data/organisation-store";

export default function DealsTab() {
  const organisation = getCurrentOrganisation();

  if (!organisation) return <h1>Organisation not found</h1>;
  
  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h3 className="font-medium">Deals</h3>
        <Button variant="secondary" size="sm">
          <Handshake className="h-4 w-4 mr-1" />
          Add Deal
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {organisation.deals.map((deal) => (
          <DealItem key={deal.id} deal={deal} />
        ))}

        {organisation.deals.length === 0 && (
          <p className="text-sm text-muted col-span-2 py-8 text-center">
            No deals found
          </p>
        )}
      </div>
    </>
  );
}
