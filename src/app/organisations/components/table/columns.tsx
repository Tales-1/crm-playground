"use client"

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/ui/datatable/data-table-header";
import { DataTableViewOptions } from "@/components/ui/datatable/data-table-view-options";
import { Organisation } from "../../data/organisation-schema";

export const columns: ColumnDef<Organisation>[] = [
    {
        accessorKey: "",
        id:"0",
        header: ({ table }) => (
          <DataTableViewOptions table={table} />
        ),
        cell: () => "",
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" showFilter={true} accessorKey="name" />
        ),
        accessorFn: () => "name" 
    },
    {
        accessorKey: "address",
        header:({ column }) => (
            <DataTableColumnHeader column={column} title="Address" showFilter={true} accessorKey="address" />
        )
    },
    {
        accessorKey:"phone",
        header:({ column }) => (
            <DataTableColumnHeader column={column} title="Phone" showFilter={true} accessorKey="phone" />
        )
    },
    {
        accessorKey:"email",
        header:({ column }) => (
            <DataTableColumnHeader column={column} title="Email" showFilter={true} accessorKey="email" />
        )
    },
    {
        accessorKey:"website",
        header:({ column }) => (
            <DataTableColumnHeader column={column} title="Website" showFilter={true} accessorKey="website" />
        )
    }
]
