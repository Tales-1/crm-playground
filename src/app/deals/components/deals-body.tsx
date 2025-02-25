"use client";
import { useState } from "react";
import { StageDetails } from "../data/deals-data";
import { AlignJustify, LayoutGrid } from "lucide-react";
import { DataTable } from "@/components/ui/datatable/data-table";
import KanbanBoard from "./kanban/kanban-board";
import ToggleGroup from "@/components/ui/toggle-group";
import Toggle from "@/components/ui/toggle";
import { columns } from "./table/columns";
import { Deal } from "../data/deal-schema";

type DealsBodyProps = {
  data: Deal[];
};


export default async function DealsBody({ data }: DealsBodyProps) {
  const [isKanban, setIsKanban] = useState(true);
  
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup heightClass="h-[33px] w-[175px]">
        <Toggle
          active={isKanban}
          buttonLabel="Kanban"
          toggleBtn={() => setIsKanban(true)}
          toggleImage={<LayoutGrid width={15}/>}
        />
        <Toggle
          active={!isKanban}
          buttonLabel="Table"
          toggleBtn={() => setIsKanban(false)}
          toggleImage={<AlignJustify width={15} /> }
        />
      </ToggleGroup>

      {isKanban ? <KanbanBoard /> : <DataTable data={data} columns={columns} />}
    </div>
  );
}
