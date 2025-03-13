"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PersonSchema } from "../_data/people-schema";
import { z } from "zod";

export default function PeopleNavigation({ people }: { people: z.infer<typeof PersonSchema>[]}) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-1 h-screen pr-1 overflow-y-scroll">
      {people.map((person) => (
        <li key={person.id} className={`p-2 rounded-lg bg-surface drop-shadow
          ${pathname === `/personanisations/${person.id}` ? "border border-accent" : ""}
        `}>
          <Link
            href={`/people/${person.id}`} className="flex flex-col">
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-md bg-accent/20 text-accent flex items-center justify-center text-on-surface font-bold">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] xl:text-xs">{person.name}</p>
                  <p className="text-[10px] xl:text-xs text-muted">{person.name}</p>
                </div>
              </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}