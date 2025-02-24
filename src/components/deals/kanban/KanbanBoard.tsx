import { StageDetails, Deal } from "@/data/deals/dealsData"
import KanbanColumn from "./KanbanColumn"

type KanbanBoardProps = {
    stages: StageDetails[]
}

export default function KanbanBoard({ stages } : KanbanBoardProps){
    return(
        <div className="flex gap-3 w-full pr-4">
          {stages.map((stage) => <KanbanColumn title = {stage.title} color={stage.color} deals={stage.deals} key={stage.title} /> )}  
        </div>
    )
}