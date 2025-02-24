import { Deal } from "@/data/deals/dealsData"
import KanbanCard from "./KanbanCard"

type KanbanColumnProps = {
    title:string,
    color:string,    
    deals: Deal[]
}

export default function KanbanColumn({ title, color, deals } : KanbanColumnProps){
    return(
        <div className="flex flex-col bg-white">
            <h3 className={`text-sm bg-[${color}]`}>{title}</h3>

            <div className="flex flex-col gap-2">
                {deals.map((deal) => (<KanbanCard deal={deal} />))}
            </div>
        </div>
    )
}