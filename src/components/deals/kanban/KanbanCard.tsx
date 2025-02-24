import { Deal } from "@/data/deals/dealsData"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import returnColorForTarget from "@/utils/targetColorRetriever";

type KanbanCardProps = {
    deal: Deal
}

export default function KanbanCard({ deal } : KanbanCardProps){
    const { title, primaryPerson, price, date, dealTarget } = deal;
    
    let cardColor = returnColorForTarget(dealTarget);

    return(
       <Card className={`rounded-lg border border-t-[${cardColor}] drop-shadow-card`}>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{primaryPerson}</CardDescription>
        </CardHeader>
        <CardFooter>
            <div className="flex gap-2">
                <p>{price}</p>
                <p className="text-muted">{date}</p>
            </div>
        </CardFooter>
        </Card>
    )
}