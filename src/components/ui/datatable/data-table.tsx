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

import { Button } from "../button";

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

  return (
    <>
      <Table className="text-xs px-1 w-full" style={{ borderCollapse: "separate", borderSpacing: "0 .6rem" }}>
        <TableHeader className="bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="shadow-2 rounded-xl bg-white">
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead key={header.id} className={`${getBorderRadius(index, headerGroup.headers.length)}`}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
                className="shadow-2 rounded-xl h-12 bg-white"
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

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
}

// <Table>
// <TableCaption>A list of your recent invoices.</TableCaption>
// <TableHeader>
//   <TableRow>
//     <TableHead className="w-[100px]">Stage</TableHead>
//     <TableHead className="w-[100px]">Organisation</TableHead>
//     <TableHead>Primary</TableHead>
//     <TableHead>Price</TableHead>
//     <TableHead>Date</TableHead>
//     <TableHead>Target</TableHead>
//   </TableRow>
// </TableHeader>
// <TableBody>
//   {deals.map((deal) => (
//     <TableRow
//           key={deal.id}
//           onClick={() => router.push(`/deals/${deal.id}`)}
//           className="cursor-pointer"
//           >
//       <TableCell className="font-medium">{deal.stageTitle}</TableCell>
//       <TableCell>{deal.organisation}</TableCell>
//       <TableCell>{deal.primaryPerson}</TableCell>
//       <TableCell>{deal.price}</TableCell>
//       <TableCell>{deal.date}</TableCell>
//       <TableCell>{deal.dealTarget}</TableCell>
//     </TableRow>
//   ))}
// </TableBody>
// <TableFooter>
//   <TableRow>
//     <TableCell colSpan={3}>Total</TableCell>
//     <TableCell>{deals.reduce((acc, deal) => acc + deal.price, 0)}</TableCell>
//   </TableRow>
// </TableFooter>
// </Table>
