"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../../data/product-schema";
import { DataTableViewOptions } from "@/components/ui/datatable/data-table-view-options";
import { DataTableColumnHeader } from "@/components/ui/datatable/data-table-header";


export const productColumns: ColumnDef<Product>[] = [
    {
        id: "0",
        header: ({ table }) => <DataTableViewOptions table={table} />
    },
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />
    },
    {
        accessorKey: "price",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />
    },
    {
        accessorKey: "unit",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Unit" />
    },
    {
        accessorKey: "canDiscount",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Can Discount" />
    },
] 