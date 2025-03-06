import DealsBody from "./_components/deals-body";
import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";
import { dealSchema } from "./_data/deal-schema";
import { DealsProvider } from "./_data/deals-context";

async function getDealsAsync() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/deals/_data/deals.json")
  );
  const deals = JSON.parse(data.toString());
  return z.array(dealSchema).parse(deals);
}

export default async function Page() {
  const data = await getDealsAsync();

  return (
    <main>
      <DealsProvider data={data}>
        <DealsBody />
      </DealsProvider>
    </main>
  );
}
