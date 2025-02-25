import { StageDetails } from "../../data/deals-data"
import KanbanColumn from "./kanban-column"
import { groupedDeals } from "../../data/deals-data"

export default function KanbanBoard(){
    
    return(
        <div className="flex gap-3 w-full pr-4">
          {groupedDeals.map((stage) => <KanbanColumn title = {stage.title} color={stage.color} deals={stage.deals} key={stage.title} /> )}  
        </div>
    )
}