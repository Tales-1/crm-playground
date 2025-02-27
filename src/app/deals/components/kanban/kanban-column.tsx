"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Deal } from "../../data/deal-schema";
import { DealTargetEnum } from "../../data/kanban-deals-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Label } from "@/components/ui/label";

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

  function AddCard(
    organisation: string,
    primaryPerson: string,
    price: string
  ) {
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
    <div className="flex flex-col bg-white rounded-lg drop-shadow gap-4 w-full p-3 pt-4 h-fit max-h-[90vh]">
      <div className="w-fit rounded-lg overflow-hidden ml-3">
        <h3
          className={`text-sm px-2 py-1 font-bold`}
          style={{ background: color }}
        >
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-2 overflow-y-scroll max-h-[500px] py-3 px-3">
        {dealCards.map((deal) => (
          <KanbanCard deal={deal} key={deal.id} />
        ))}
      </div>
      <AddDealButton addCard={AddCard} />
    </div>
  );
}

function AddDealButton({
  addCard,
}: {
  addCard: (
    organisation: string,
    primaryPerson: string,
    price: string
  ) => void;
}) {
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    
        const organisation = formData.get("organisation") as string;
        const primaryPerson = formData.get("primaryPerson") as string;
        const price = formData.get("price") as string;
        
        addCard(organisation, primaryPerson, price);
      }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex justify-center items-center p-[3px]
                self-end border rounded-xl aspect-square bg-[#303030] text-white drop-shadow"
        >
          +
        </button>
      </SheetTrigger>
      <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Deal</SheetTitle>
            <SheetDescription>
              Add a new deal. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-3">
              <Label htmlFor="organisation" className="text-right">
                Organisation
              </Label>
              <Input id="organisation" name="organisation" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <Label htmlFor="primaryPerson" className="text-right">
                Primary Person
              </Label>
              <Input id="primaryPerson" name="primaryPerson" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input id="price" name="price" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Add Deal</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
