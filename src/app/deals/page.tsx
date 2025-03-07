import KanbanBoard from "./_components/kanban/kanban-board";
import DealsTable from "./_components/table/deals-table";
import DealsOptionsMenu from "./_components/deals-options";

interface DealsPageProps {
  searchParams: Promise<{view: "kanban" | "table"}>
}

export default async function DealsPage({ searchParams }: DealsPageProps) {
  
  const activeView = (await searchParams).view || "kanban";

  return (
    <main>
      <DealsOptionsMenu initialView={activeView} />
     
      {activeView == "kanban" ?  <KanbanBoard /> : <DealsTable  /> }
    </main>
  );
}
