import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import returnColorForTarget from "@/utils/target-color-retriever";
import formatCurrency from "@/utils/format-currency";
import { Deal } from "../../data/deal-schema";

export default function KanbanCard({ deal }: { deal : Deal }) {
  const { organisation, primaryPerson, price, date, dealTarget } = deal;

  return (
    <Card
      className={`bg-card rounded-lg border-t-[3px] shadow-2`}
      style={{ borderTopColor: returnColorForTarget(dealTarget) }}>
      <CardHeader>
        <CardTitle className="text-sm">{organisation}</CardTitle>
        <CardDescription className="text-xs">{primaryPerson}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-between w-full text-foreground gap-3">
          <p className="sm:text-[8px] md:text-[10px]">{formatCurrency(price)}</p>
          <p className="sm:text-[8px] md:text-[10px]">{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
