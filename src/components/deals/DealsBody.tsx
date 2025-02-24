"use client";

import { useState } from "react"
import KanbanBoard from "./kanban/KanbanBoard";
import { StageDetails } from "@/data/deals/dealsData";
import ToggleGroup from "../ui/ToggleGroup";
import Toggle from "../ui/Toggle";

type DealsBodyProps = {
    data: StageDetails[]
}

export default function DealsBody({ data } : DealsBodyProps){

    const [isKanban, setIsKanban] = useState(true);

    return(
        <div className="flex flex-col gap-4">
            <ToggleGroup heightClass="h-[28px]">
                <Toggle active={isKanban}  buttonLabel="Kanban" toggleBtn={() => setIsKanban(true)}/>
                <Toggle active={!isKanban} buttonLabel="Table" toggleBtn={() => setIsKanban(false)}/>
            </ToggleGroup>

            {isKanban ? 
                <KanbanBoard stages = {data} /> :
                <table></table>
            }
        </div>
    )
}