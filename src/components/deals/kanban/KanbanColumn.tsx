"use client";

import { useState } from "react"
import { Deal, DealTargetEnum } from "@/data/deals/dealsData"
import KanbanCard from "./KanbanCard"

type KanbanColumnProps = {
    title:string,
    color:string,    
    deals: Deal[]
}

export default function KanbanColumn({ title, color, deals } : KanbanColumnProps){
    
    const [dealCards, setDealCards] = useState(deals);

    function AddCard(){
        setDealCards((prev) => [...prev, {
            id:4,
            title:"NextGen Ltd",
            primaryPerson:"Robert Wilson",
            price:"£320,000.00",
            date:"22/06/2025",
            dealTarget:DealTargetEnum.NoTarget
        }])
    }

    return(
        <div className="flex flex-col bg-white rounded-lg shadow-1 p-3 gap-4 w-full">
            <div className="w-fit rounded-lg overflow-hidden">
                <h3 className={`text-md px-2 py-1 font-bold`} style={{background:color}}>{title}</h3>
            </div>

            <div className="flex flex-col gap-2 overflow-y-scroll max-h-[600px]">
                {dealCards.map((deal) => (<KanbanCard deal={deal} key={deal.id} />))}
            </div>
            <button type="button" onClick={AddCard} className="flex justify-center items-center 
                self-end border rounded-lg aspect-square bg-[#303030] text-white shadow-2">+</button>
        </div>
    )
}