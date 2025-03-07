import { promises as fs } from "fs"
import KanbanColumn from "./kanban-column"
import path from "path"
import { z } from "zod";
import { stageDetailsSchema } from "../../_data/deal-schema";

async function getGroupedDealsAsync(){
  const data = await fs.readFile(path.join(process.cwd(), "src/app/deals/_data/grouped-deals.json"));
  const groupedDeals = JSON.parse(data.toString());
  
  return z.array(stageDetailsSchema).parse(groupedDeals);
}

export default async function KanbanBoard(){
    const groupedDeals = await getGroupedDealsAsync();

    return(
        <div className="flex gap-6 mt-3 w-full">
          {groupedDeals.map((stage) => 
            <KanbanColumn 
                title={stage.title} 
                color={stage.color} 
                deals={stage.deals} 
                key={stage.title} 
            /> 
          )}  
        </div>
    )
}