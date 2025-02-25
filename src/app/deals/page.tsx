import DealsBody from "./components/deals-body"
import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";
import { dealSchema } from "./data/deal-schema";


async function getDealsAsync(){
    console.log(process.cwd());
  const data = await fs.readFile(
    path.join(process.cwd(), "app/deals/data/deals.json")
  )
  
  const deals = JSON.parse(data.toString())

  return z.array(dealSchema).parse(deals)
}

export default async function Page(){

    // fetch data
    const data = await getDealsAsync();

    return (
        <main className="main">
            <DealsBody data={data} />
        </main>
    )
}