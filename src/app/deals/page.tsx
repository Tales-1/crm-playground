import KanbanBoard from "./_components/kanban/kanban-board";
import DealsTable from "./_components/table/deals-table";
import DealsViewFilter from "./_components/deals-view-filter";
import { DataTableOptionsProvider } from "@/components/ui/datatable/data-table-options-provider";
import { stageTitles } from "./_data/deal-schema";

interface DealsPageProps {
  searchParams: Promise<{view: "kanban" | "table"}>
}

export default async function DealsPage({ searchParams }: DealsPageProps) {
  const activeView = (await searchParams).view || "kanban";

  return (
    <main className="mx-5 mt-4 pr-2 pb-6">
      <DealsViewFilter />
     
      {activeView == "kanban" ?  <KanbanBoard /> : 
        <DataTableOptionsProvider optionsArray={[stageTitles]}>
          <DealsTable  />
        </DataTableOptionsProvider>
      }
    </main>
  );
}
