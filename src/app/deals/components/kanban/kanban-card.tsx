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

type KanbanCardProps = {
  deal: Deal;
};

export default function KanbanCard({ deal }: KanbanCardProps) {
  const { organisation, primaryPerson, price, date, dealTarget } = deal;

  return (
    <Card
      className={`rounded-lg border-t-[3px] shadow-2`}
      style={{ borderTopColor: returnColorForTarget(dealTarget) }}>
      <CardHeader>
        <CardTitle className="text-sm">{organisation}</CardTitle>
        <CardDescription className="text-xs">{primaryPerson}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-between w-full text-[10px] text-foreground">
          <p>{formatCurrency(price)}</p>
          <p>{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
