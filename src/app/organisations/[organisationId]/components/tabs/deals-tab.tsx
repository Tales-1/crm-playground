import { Button } from "@/_components/ui/button";
import { Handshake, Users } from "lucide-react";
import DealItem from "../deal-item";
import { OrganisationProps } from "../../page";

export default function DealsTab({ organisation }: OrganisationProps) {
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
                {organisation.deals.map(deal => (
                    <DealItem key={deal.id} deal={deal} />
                ))}

                {organisation.deals.length === 0 && (
                    <p className="text-sm text-muted-foreground col-span-2 py-8 text-center">No deals found</p>
                )}
            </div>
        </>
    )
}