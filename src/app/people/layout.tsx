import path from "path";
import { promises as fs } from "fs"
import { z } from "zod";
import { PersonSchema } from "./_data/people-schema";
import { Plus, Search } from "lucide-react";
import { fromZodError } from "zod-validation-error";
import PeopleNavigation from "./_components/people-navigation";
import { Button } from "@/components/ui/button";
import { ICON_SIZES } from "@/constants/constants";
import { Input } from "@/components/ui/input";

async function getPeopleAsync(){
    const data = await fs.readFile(path.join(process.cwd(), "src/app/people/_data/people.json"));
    const people = JSON.parse(data.toString());

    const result = await z.array(PersonSchema).safeParseAsync(people);

    if(!result.success){
        const error = fromZodError(result.error);
        throw new Error(error.message)
    }

    return result.data;
}

export default async function PeopleLayout({ children }: { children: React.ReactNode }) {
    const people = await getPeopleAsync();

    return(
        <main className="flex gap-4 mx-8">
            <div className="flex flex-col gap-4 w-[200px]">
            <div className="flex flex-col justify-between bg-surface p-3 rounded-lg drop-shadow">
                    <div className="flex gap-2 justify-between">
                        <h3 className="text-sm">People</h3>
                        <Button variant="addButton" size="xs">
                            <Plus size={ICON_SIZES.small}/>
                        </Button>
                    </div>

                    <Input 
                        placeholder="Search People"
                        className="bg-card mt-3 h-7 border border-outline"
                        />
                </div>
                <PeopleNavigation people={people} />
            </div>

            <div className="bg-surface w-full rounded-lg drop-shadow">
                {children}
            </div>
        </main>
    )
}

