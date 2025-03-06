"use client";

import * as React from "react"
import { Column } from "@tanstack/react-table"
import { Check, Filter } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "../badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover"
import { useDeals } from "@/app/deals/_data/deals-context";

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string,
  accessorkey?:string
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  accessorkey = ""
}: DataTableFacetedFilterProps<TData, TValue>) {

  const deals = useDeals();

  const options = deals
        .map(deal => deal[accessorkey])
        .filter((item, index, arr) => arr.indexOf(item) === index)
        .map(key => {
            return(
                {
                    label: key,
                    value: key,
                }
            )});

  const facets = column?.getFacetedUniqueValues()
  const selectedValues = new Set(column?.getFilterValue() as string[])
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border-none bg-transparent">
          <Filter size={14} />
          {selectedValues?.size > 0 && (
            <>
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
            </>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value as string)
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value as string)
                      } else {
                        selectedValues.add(option.value as string)
                      }

                      const filterValues = Array.from(selectedValues)

                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      )
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check />
                    </div>
                    <span>{option.label}</span>
                    {facets?.get(option.value) && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}