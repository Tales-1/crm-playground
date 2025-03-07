import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import returnColorForTarget from "@/helpers/target-color-retriever";
import formatCurrency from "@/helpers/format-currency";
import { Deal } from "../../_data/deal-schema";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function KanbanCard({ deal }: { deal: Deal }) {
  const { name, organisation, primaryPerson, price, date, dealTarget } = deal;
  
  return (
    <Card
      className={`bg-elevated-card rounded-lg border-t-[2px] shadow-2`}
      style={{ borderTopColor: returnColorForTarget(dealTarget) }}
    >
      <CardHeader className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="text-xs">{organisation}</CardDescription>
        </div>
        <p className="sm:text-[8px] md:text-[10px] border border-outline p-1 rounded-md">
            {formatCurrency(price)}
        </p>
      </CardHeader>
      <Separator />
      <CardFooter className="mt-3">
        <div className="flex justify-between w-full gap-3">
          <div className="flex items-center gap-2">
          <Avatar className="w-7">
            <AvatarImage src="" />
            <AvatarFallback>
              {primaryPerson[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs">{primaryPerson}</span>
          </div>
          <p className="sm:text-[8px] md:text-[10px] text-muted">{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
