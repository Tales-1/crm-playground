import { Deal } from "@/data/deals/dealsData";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import returnColorForTarget from "@/utils/targetColorRetriever";
import formatCurrency from "@/utils/formatCurrency";

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
        <CardTitle>{organisation}</CardTitle>
        <CardDescription>{primaryPerson}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex gap-2 text-xs">
          <p>{formatCurrency(price)}</p>
          <p className="text-muted">{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
