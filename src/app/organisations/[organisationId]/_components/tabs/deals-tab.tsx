import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import { Organisation } from "@/app/organisations/_data/organisation-schema";
import DealItem from "../deal-item";

export default function DealsTab({ organisation }: { organisation: Organisation }) {
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
                    <p className="text-sm text-muted col-span-2 py-8 text-center">No deals found</p>
                )}
            </div>
        </>
    )
}