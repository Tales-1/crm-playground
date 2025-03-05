"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Organisation } from "../data/organisation-schema";


export default function OrganisationsNavigation({ organisations } : 
  { organisations : Organisation[] }) {
  const pathname = usePathname()

  return (
    <ul className="flex flex-col gap-y-1 h-screen pr-1 overflow-y-scroll">
      {organisations.map((org) => (
        <li key={org.id} className={`p-4 rounded-lg bg-surface ${pathname === `/organisations/${org.id}` ? "border border-accent" : ""}
          drop-shadow
          `}>
          <Link
            href={`/organisations/${org.id}`} className="flex flex-col">
              <div className="flex">
                <div className="mr-3 w-10 h-10 rounded-md bg-accent/20 text-accent flex items-center justify-center text-on-surface font-bold">
                  {org.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs">{org.name}</p>
                  <p className="text-[10px] text-muted-foreground">{org.address.city}, {org.address.state} {org.address.country}</p>
                </div>
              </div>
              
              {/* <div className="mt-3 flex justify-between text-xs">
                <div>
                  <p className="text-crm-muted">Deals</p>
                  <p className="font-medium">{org.deals.length}</p>
                </div>
                <div>
                  <p className="text-crm-muted">Contacts</p>
                  <p className="font-medium">{org.contacts.length}</p>
                </div>
                <div>
                  <p className="text-crm-muted">Value</p>
                  <p className="font-medium">
                    £{org.deals.reduce((sum, deal) => sum + deal.price, 0).toLocaleString()}
                  </p>
                </div>
              </div> */}
          </Link>
        </li>
      ))}
    </ul>
  );
}
