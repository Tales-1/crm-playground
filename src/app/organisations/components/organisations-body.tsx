"use client"

import { DataTable } from "@/components/ui/datatable/data-table"
import { Organisation } from "../data/organisation-schema"
import { columns } from "./table/columns"
import ToggleGroup from "@/components/ui/toggle-group"
import Toggle from "@/components/ui/toggle"
import { FormEvent, useReducer, useState } from "react"
import { AlignJustify, icons, Kanban, KanbanIcon, LayoutGrid, Plus } from "lucide-react"
import { ICON_SIZES } from "@/constants/constants"
import GridBody from "./grid/grid-body"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type OrganisationsBodyProps = {
    organisations: Organisation[]
}

export default function OrganisationsBody({ organisations }: OrganisationsBodyProps){

    const [isTable, setIsTable] = useReducer((prev) => !prev, true);

    // temp measure, we should NEVER do stuff like this.
    const [orgs, setOrgs] = useState<Organisation[]>(organisations)

    function addOrganisation(name: string, address: string, phone: string, email: string, website: string, about: string){
        setOrgs((prev) => {
            return (
                [... prev, {
                    id:prev.length + 1,
                    name, address, phone, email, website, about
                }]
            )
        })
    }

    return(
        <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between">
                <ToggleGroup heightClass="h-[30px]" widthClass="w-[175px]">
                    <Toggle 
                        buttonLabel="Table"
                        active={isTable}
                        toggleBtn={setIsTable}
                        toggleImage={<AlignJustify width={ICON_SIZES.small} />}
                        >
                    </Toggle>
                    <Toggle
                        buttonLabel="Grid"
                        active={!isTable}
                        toggleBtn={setIsTable}
                        toggleImage={<LayoutGrid width={ICON_SIZES.small} />}
                    >
                    </Toggle>
                </ToggleGroup>

                <AddOrganisationButton action={addOrganisation} />
            </div>

            {
                isTable ? <DataTable data={organisations} columns={columns} /> : <GridBody data={organisations} />
            }
        </div>
    )
}

function AddOrganisationButton({
    action,
  }: {
    action: (
      name: string,
      address: string,
      phone: string,
      email: string,
      website: string,
      about: string
    ) => void;
  }) {
    function addOrganisation(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
  
      const name = formData.get("name") as string;
      const address = formData.get("address") as string;
      const phone = formData.get("phone") as string;
      const email = formData.get("email") as string;
      const website = formData.get("website") as string;
      const about = formData.get("about") as string;
  
      action(name, address, phone, email, website, about);
    }
  
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            className="bg-add-button drop-shadow-lg flex justify-center items-center rounded-xl aspect-square w-[30px] text-white">
            <Plus size={ICON_SIZES.small} />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-sliding-menu">
          <SheetHeader>
            <SheetTitle>Add Organisation</SheetTitle>
            <SheetDescription>
              Add a new organisation. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={addOrganisation}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <Input id="address" name="address" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input id="phone" name="phone" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" name="email" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="website" className="text-right">
                  Website
                </Label>
                <Input id="website" name="website" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="about" className="text-right">
                  About
                </Label>
                <Input id="about" name="about" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="bg-add-button text-white">Save</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    );
  }