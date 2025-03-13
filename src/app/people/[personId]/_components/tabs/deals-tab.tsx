import React from "react";
import { Button } from "@/components/ui/button";
import { getCurrentPerson } from "@/app/people/_data/person-store";
import DealItem from "@/app/organisations/[organisationId]/_components/deal-item";

export default function PersonDealsTab() {
  const person = getCurrentPerson();

  if (!person) return <>Person not found</>;

  return (
    <>
        <div className="flex justify-between">
          <h2 className="section-title">All Deals</h2>
          <Button variant="outline" size="sm" className="button-hover shadow-sm">
            Add Deal
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {person.deals.map((deal) => (
            <DealItem
              key={deal.id}
              deal={deal}
              />
          ))}
        </div>
    </>
  );
}
