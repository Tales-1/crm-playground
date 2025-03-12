"use client"

import { Button } from "../button"
import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { Table } from "@tanstack/react-table"
import { Search, X } from "lucide-react"
import { ICON_SIZES } from "@/constants/constants"
import { useDatatableOptions } from "./data-table-options-provider"

interface DataTableToolbarProps<TData> {
  table: Table<TData>,
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const options = useDatatableOptions();
  
  return (
    <div className="flex gap-2 items-stretch justify-between h-7 mt-2">
      <div className="flex items-center gap-2 border border-border rounded-lg px-1">
        <Search size={ICON_SIZES.small} />
        <input
          className="w-[150px] h-full text-xs bg-transparent"
          placeholder="Filter Names"
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value)
          }}
        />
      </div>
      <div className="flex flex-1 items-center space-x-2">
        {table.getColumn("stageTitle") && (
          <DataTableFacetedFilter
            column={table.getColumn("stageTitle")}
            title="Status"
            options={options} />
        )}

        {isFiltered && (
          <Button
            variant="default"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
    </div>
  )
}