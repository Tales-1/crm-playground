"use client";

import { useReducer } from "react";
import { AlignJustify, Kanban } from "lucide-react";
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
import Toggle from "@/components/ui/toggle";
import { ICON_SIZES } from "@/constants/constants";

export default function DealsBody() {
  const [isKanban, setIsKanban] = useReducer((prev) => !prev, true);

  const data = useDeals();

  return (
    <div className="flex flex-col gap-3 mx-4">
      <div className="flex justify-between items-center">
        <ToggleGroup heightClass="h-[30px]" widthClass="w-[175px]">
          <Toggle
            active={isKanban}
            buttonLabel="Kanban"
            toggleBtn={setIsKanban}
            toggleImage={<Kanban width={ICON_SIZES.small} />}
          />
          <Toggle
            active={!isKanban}
            buttonLabel="Table"
            toggleBtn={setIsKanban}
            toggleImage={<AlignJustify width={ICON_SIZES.small} />}
          />
        </ToggleGroup>

        <Select defaultValue="primary">
          <SelectTrigger className="w-[180px] bg-surface h-[30px] w-[175px] text-xs rounded-lg">
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
