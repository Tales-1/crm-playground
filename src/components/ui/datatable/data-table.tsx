"use client";

import { useState } from "react";

import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-tool-bar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility
    },
  });

  function getBorderRadius(index: number, rowLength: number) {
    return index == 0 ? "rounded-l-xl" :
      index == rowLength - 1 ? "rounded-r-xl"
        : "";
  }

  // pagination works by setting the page number and skip as search params
  // this is then retrieved by the parent component upon rerender and put into the 
  // data fetching url.

  return (
    <>
    <DataTableToolbar table={table} />
      <Table
        className="text-xs px-1 w-full"
        style={{ borderCollapse: "separate", borderSpacing: "0 .6rem" }}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <TableRow key={index} className="drop-shadow-md rounded-xl bg-surface">
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead key={header.id} className={`${getBorderRadius(index, headerGroup.headers.length)}`}>
                    <div className="flex items-center justify-between">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      {/* {
                        index == headerGroup.headers.length - 1 &&
                        <div className="flex items-center gap-2 border border-border rounded-lg px-1">
                          <Search size={ICON_SIZES.small} />
                          <input
                            className="w-[150px] h-6 text-xs bg-surface"
                            placeholder="Filter Names"
                            onChange={(event) => {
                              table.getColumn("name")?.setFilterValue(event.target.value)
                            }}
                            />
                        </div>
                      } */}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="drop-shadow-md rounded-xl h-12 bg-surface"
              >
                {row.getVisibleCells().map((cell, index) =>
                (
                  <TableCell key={cell.id} className={`${getBorderRadius(index, row.getVisibleCells().length)}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                )
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>No Results</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          className="bg-surface"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className="bg-surface"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div> */}

      <DataTablePagination table={table} />
    </>
  );
}