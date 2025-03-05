"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Person {
  id: string;
  name: string;
  email: string;
};

export default function PeopleNavigation({ people }: { people: Person[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-3">
      {people.map((person) => (
        <li key={person.id} className={`p-3 rounded-lg 
          ${pathname === `/people/${person.id}` ? "bg-[var(--on-surface)] text-[var(--surface)]" : "bg-surface text-[(--on-surface)]"}
          drop-shadow
          `}>
          <Link
            href={`/people/${person.id}`}>
            <p>{person.name}</p>
            <p className="text-muted-foreground">{person.email}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}