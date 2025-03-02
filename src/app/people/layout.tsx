import { promises as fs } from "fs"
import { z } from "zod";
import { personSchema } from "./data/people-schema";
import path from "path";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PeopleNavigation from "./components/people-navigation";

async function getPeople(){
    const data = await fs.readFile(path.join(process.cwd(), "src/app/people/data/people.json"));

    const people = JSON.parse(data.toString());

    return z.array(personSchema).parse(people);
}

export default async function PeopleLayout({ children }: { children: React.ReactNode }) {
    const people = await getPeople();

    return(
        <main className="flex gap-4 w-[90%] mx-auto">
            <div className="flex flex-col gap-4 w-fit">
                <div className="flex justify-between bg-surface p-3 rounded-lg">
                    <h3>All People</h3>
                    <div className="flex gap-2">
                        Search
                    </div>
                </div>

                <PeopleNavigation people={people} />
            </div>

            <div className="w-full bg-surface">
                {children}
            </div>
        </main>
    )
}
