"use client";

import { useState } from "react";
import { AlignJustify, LayoutGrid } from "lucide-react";
import { DataTable } from "@/components/ui/datatable/data-table";
import { columns } from "./table/columns";
import { useDeals } from "../data/deals-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import KanbanBoard from "./kanban/kanban-board";
import ToggleGroup from "@/components/ui/toggle-group";
import Toggle from "@/components/ui/Toggle";

export default function DealsBody() {
  const [isKanban, setIsKanban] = useState(true);

  const data = useDeals();

  return (
    <div className="flex flex-col gap-3 w-[80%] mx-auto">
      <div className="flex justify-between items-center">
        <ToggleGroup heightClass="h-[30px]" widthClass="w-[175px]">
          <Toggle
            active={isKanban}
            buttonLabel="Kanban"
            toggleBtn={() => setIsKanban(true)}
            toggleImage={<LayoutGrid width={15} />}
          />
          <Toggle
            active={!isKanban}
            buttonLabel="Table"
            toggleBtn={() => setIsKanban(false)}
            toggleImage={<AlignJustify width={15} />}
          />
        </ToggleGroup>

        <Select defaultValue="primary">
          <SelectTrigger className="w-[180px] bg-white h-[30px] w-[175px] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="primary">Primary</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isKanban ? <KanbanBoard /> : <DataTable data={data} columns={columns} />}
    </div>
  );
}
