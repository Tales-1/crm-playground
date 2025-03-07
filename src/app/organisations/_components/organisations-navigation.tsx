"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Organisation } from "../_data/organisation-schema";


export default function OrganisationsNavigation({ organisations } : 
  { organisations : Organisation[] }) {
  const pathname = usePathname()

  return (
    <ul className="flex flex-col gap-y-1 h-screen pr-1 overflow-y-scroll">
      {organisations.map((org) => (
        <li key={org.id} className={`p-2 rounded-lg bg-surface drop-shadow
          ${pathname === `/organisations/${org.id}` ? "border border-accent" : ""}
        `}>
          <Link
            href={`/organisations/${org.id}`} className="flex flex-col">
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-md bg-accent/20 text-accent flex items-center justify-center text-on-surface font-bold">
                  {org.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] xl:text-xs">{org.name}</p>
                  <p className="text-[10px] xl:text-xs text-muted">{org.address.city}, {org.address.state} {org.address.country}</p>
                </div>
              </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
