"use client";

import { FormEvent, useState } from "react";
import { Deal } from "../../data/deal-schema";
import { DealTargetEnum } from "../../data/kanban-deals-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import KanbanCard from "./kanban-card";
import { Plus } from "lucide-react";

type KanbanColumnProps = {
  title: string;
  color: string;
  deals: Deal[];
};

export default function KanbanColumn({
  title,
  color,
  deals,
}: KanbanColumnProps) {
  const [dealCards, setDealCards] = useState(deals);

  function AddCard(organisation: string, primaryPerson: string, price: string) {
    setDealCards((prev) => [
      ...prev,
      {
        id: 4,
        organisation: organisation,
        primaryPerson: primaryPerson,
        price: Number.parseFloat(price),
        date: "22/06/2025",
        dealTarget: DealTargetEnum.NoTarget,
        stageTitle: title,
      },
    ]);
  }

  return (
    <div className="flex flex-col drop-shadow w-full h-fit relative">
      <div className="flex bg-surface kanban-col-header">
        <div className="ml-3 pt-3">
          <h3
            className={`text-sm text-[#303030] px-2 py-1 font-bold w-fit rounded-lg`}
            style={{ background: color }}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="absolute right-0">
          <AddDealButton action={AddCard} />
      </div>
      <div className="flex flex-col gap-2 py-3 px-3 bg-surface rounded-b-lg">
        {dealCards.map(deal => <KanbanCard deal={deal} key={deal.id} /> )}
      </div>
    </div>
  );
}

function AddDealButton({
  action,
}: {
  action: (organisation: string, primaryPerson: string, price: string) => void;
}) {
  function addCard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const organisation = formData.get("organisation") as string;
    const primaryPerson = formData.get("primaryPerson") as string;
    const price = formData.get("price") as string;

    action(organisation, primaryPerson, price);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="bg-add-button w-[25px] aspect-square text-white ease-in-out 
          duration-200 hover:scale-[1.05] flex justify-center items-center rounded-lg"
        >
          <Plus size={14} />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-sliding-menu">
        <SheetHeader>
          <SheetTitle>Add Deal</SheetTitle>
          <SheetDescription>
            Add a new deal. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={addCard}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-3">
              <Label htmlFor="organisation" className="text-right">
                Organisation
              </Label>
              <Input
                id="organisation"
                name="organisation"
                className="col-span-3 border"
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <Label htmlFor="primaryPerson" className="text-right">
                Primary Person
              </Label>
              <Input
                id="primaryPerson"
                name="primaryPerson"
                className="col-span-3 border"
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input id="price" name="price" className="col-span-3 border" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="bg-add-button text-white">
                Save
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
