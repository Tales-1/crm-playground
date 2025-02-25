"use client";

import { useState } from "react";
import KanbanBoard from "./kanban/KanbanBoard";
import { StageDetails } from "@/data/deals/dealsData";
import ToggleGroup from "../ui/ToggleGroup";
import Toggle from "../ui/Toggle";
import { AlignJustify, Kanban, LayoutGrid, TableOfContents } from "lucide-react";
import DealsTable from "./table/DealsTable";

type DealsBodyProps = {
  data: StageDetails[];
};

export default function DealsBody({ data }: DealsBodyProps) {
  const [isKanban, setIsKanban] = useState(true);
  const deals = data.map(data => data.deals);

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

      {isKanban ? <KanbanBoard stages={data} /> : <DealsTable deals={deals.flat()} />}
    </div>
  );
}
