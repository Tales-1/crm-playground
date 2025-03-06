import { promises as fs } from "fs"
import { z } from "zod";
import { personSchema } from "./_data/people-schema";
import path from "path";
import PeopleNavigation from "./_components/people-navigation";
import { Plus, Search } from "lucide-react";

async function getPeople(){
    const data = await fs.readFile(path.join(process.cwd(), "src/app/people/_data/people.json"));

    const people = JSON.parse(data.toString());

    return z.array(personSchema).parse(people);
}

export default async function PeopleLayout({ children }: { children: React.ReactNode }) {
    const people = await getPeople();

    return(
        <main className="flex gap-4 mx-8">
            <div className="flex flex-col gap-4 w-fit">
                <div className="flex justify-between bg-surface p-3 rounded-lg drop-shadow">
                    <h3>All People</h3>
                    <div className="flex gap-2">
                        <button>
                            <Plus />
                        </button>
                        <button>
                            <Search />
                        </button>
                    </div>
                </div>

                <PeopleNavigation people={people} />
            </div>

            <div className="bg-surface w-full rounded-lg drop-shadow">
                {children}
            </div>
        </main>
    )
}
