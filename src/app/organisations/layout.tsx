import path from "path";
import { promises as fs } from "fs";
import { z } from "zod";
import { OrganisationSchema } from "./_data/organisation-schema";
import { Plus } from "lucide-react";
import { ICON_SIZES } from "@/constants/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { unstable_cache } from "next/cache";
import OrganisationsNavigation from "./_components/organisations-navigation";


// Testing out server side caching 
const getOrganisations = unstable_cache(
    async () => {
        console.log("fetching")
        const data = await fs.readFile(
            path.join((process.cwd(), "src/app/organisations/_data/organisations.json"))
          );
        
          const organisations = JSON.parse(data.toString());
          return z.array(OrganisationSchema).parse(organisations);
    },
    ['organisations'],
    { revalidate: 5, tags: ['organisations'] }
)

export default async function OrganisationsLayout({ children } : { children: React.ReactNode }){
    const data = await getOrganisations();

    return(
        <main className="flex gap-4 mx-8 pb-2">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-between bg-surface p-3 rounded-lg drop-shadow">
                    <div className="flex gap-2 justify-between">
                        <h3 className="text-sm">Organisations</h3>
                        <Button variant="addButton" size="xs">
                            <Plus size={ICON_SIZES.small}/>
                        </Button>
                    </div>

                    <Input 
                        placeholder="Search organisation"
                        className="bg-card mt-3 h-7 border border-outline"
                        />
                </div>

                <OrganisationsNavigation organisations={data} />
            </div>

            <div className="w-full bg-surface rounded-lg drop-shadow h-fit">
                {children}
            </div>
        </main>
    )
}