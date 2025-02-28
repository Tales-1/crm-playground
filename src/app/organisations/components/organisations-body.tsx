"use client"

import { DataTable } from "@/components/ui/datatable/data-table"
import { Organisation } from "../data/organisation-schema"
import { columns } from "./table/columns"
import ToggleGroup from "@/components/ui/toggle-group"
import Toggle from "@/components/ui/toggle"
import { useReducer } from "react"
import { AlignJustify, Kanban, KanbanIcon, LayoutGrid } from "lucide-react"
import { ICON_SIZES } from "@/constants/constants"

type OrganisationsBodyProps = {
    organisations: Organisation[]
}

export default function OrganisationsBody({ organisations }: OrganisationsBodyProps){

    const [isTable, setIsTable] = useReducer((prev) => !prev, true);

    return(
        <div className="flex flex-col">
            <ToggleGroup heightClass="h-[30px]" widthClass="w-[175px]">
                <Toggle 
                    buttonLabel="Table"
                    active={isTable}
                    toggleBtn={setIsTable}
                    toggleImage={<AlignJustify width={ICON_SIZES.small} />}
                    >
                </Toggle>
                <Toggle
                    buttonLabel="Grid"
                    active={!isTable}
                    toggleBtn={setIsTable}
                    toggleImage={<LayoutGrid width={ICON_SIZES.small} />}
                >
                    
                </Toggle>
            </ToggleGroup>

            {
                isTable ? 
                <DataTable data={organisations} columns={columns} /> : <></>
            }
        </div>
    )
}