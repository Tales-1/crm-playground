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
        <div className="flex flex-col bg-white rounded-lg shadow-1 gap-12 w-full p-3">
            <div className="w-fit rounded-lg overflow-hidden">
                <h3 className={`text-sm px-2 py-1 font-bold`} style={{background:color}}>{title}</h3>
            </div>

            <div className="flex flex-col gap-2 overflow-y-scroll max-h-[600px] py-3 px-3">
                {dealCards.map((deal) => (<KanbanCard deal={deal} key={deal.id} />))}
            </div>
            <button type="button" onClick={AddCard} className="flex justify-center items-center p-1
                self-end border rounded-xl aspect-square bg-[#303030] text-white shadow-2">+</button>
        </div>
    )
}