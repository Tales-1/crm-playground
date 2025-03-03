"use client";

import { DataTable } from "@/components/ui/datatable/data-table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Product } from "../data/product-schema"
import { productColumns } from "./table/columns"
import { FormEvent, useReducer, useState } from "react";
import { Plus } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ICON_SIZES } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ToggleGroup from "@/components/ui/toggle-group";
import Toggle from "@/components/ui/toggle";

export default function ProductsBody({ data }: { data: Product[] }) {

    const [products, setProducts] = useState<Product[]>(data);

    function AddProduct(name:string, price:string, unit :string, canDiscount:boolean){
        setProducts((prev) => {
            return [
                ...prev,
                {
                    name, price, unit, canDiscount
                }
            ]
        })
    }

    return (
        <div className="flex flex-col gap-3 mx-4">
            <div className="flex flex justify-end gap-3">
                <Select defaultValue="primary">
                    <SelectTrigger className="w-[180px] bg-surface h-[30px] w-[175px] text-xs rounded-lg">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="primary">Common</SelectItem>
                        <SelectItem value="secondary">Special</SelectItem>
                    </SelectContent>
                </Select>
            
                <AddProductButton action={AddProduct}/>
            </div>

            <DataTable data={products} columns={productColumns} />
        </div>
    )
}


function AddProductButton({
    action,
  }: {
    action: (
        name:string, price:string, unit :string, canDiscount:boolean
    ) => void;
  }) {

    const [canDiscount, setCanDiscount] = useReducer((prev) => !prev, false);

    function addProduct(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
  
      const name = formData.get("name") as string;
      const price = formData.get("price") as string;
      const unit = formData.get("unit") as string;
  
      action(name, price, unit, canDiscount);
    }
  
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            className="bg-add-button drop-shadow-lg flex justify-center items-center rounded-xl aspect-square w-[30px] text-white"
          >
            <Plus size={ICON_SIZES.small} />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-sliding-menu">
          <SheetHeader>
            <SheetTitle>Add Product</SheetTitle>
            <SheetDescription>
              Add a new Product. Click save when you are done.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={addProduct}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input id="price" name="price" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="unit" className="text-right">
                  Unit
                </Label>
                <Input id="unit" name="unit" className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Label htmlFor="canDiscount" className="text-right">
                  Can Discount
                </Label>
                <ToggleGroup heightClass="h-[28px]">
                    <Toggle buttonLabel="Yes" active={canDiscount} toggleBtn={setCanDiscount} />
                    <Toggle buttonLabel="No"  active={!canDiscount} toggleBtn={setCanDiscount} />
                </ToggleGroup>
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
  