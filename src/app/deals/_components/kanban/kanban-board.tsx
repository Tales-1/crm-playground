import KanbanColumn from "./kanban-column"
import { groupedDeals } from "../../_data/kanban-deals-data"

export default function KanbanBoard(){
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