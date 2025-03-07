
import { DataTable } from "@/components/ui/datatable/data-table";
import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";
import { dealSchema } from "../../_data/deal-schema";
import { columns } from "./columns";

async function getDealsAsync() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/deals/_data/deals.json")
  );
  const deals = JSON.parse(data.toString());
  return z.array(dealSchema).parse(deals);
}

export default async function DealsTable(){
    const deals = await getDealsAsync();
    return <DataTable  data={deals} columns={columns} />
}