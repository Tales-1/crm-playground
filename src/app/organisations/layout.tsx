import path from "path";
import { promises as fs } from "fs";
import { z } from "zod";
import { OrganisationSchema } from "./data/organisation-schema";
import { Plus } from "lucide-react";
import OrganisationsNavigation from "./components/organisations-navigation";
import { ICON_SIZES } from "@/constants/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

async function getOrganisationsAsync() {
  const data = await fs.readFile(
    path.join((process.cwd(), "src/app/organisations/data/organisations.json"))
  );

  const organisations = JSON.parse(data.toString());
  console.log(organisations)
  return z.array(OrganisationSchema).parse(organisations);
}

export default async function OrganisationsLayout({ children } : { children: React.ReactNode }){
    const data = await getOrganisationsAsync();

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
                        className="bg-card mt-3 h-8"
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