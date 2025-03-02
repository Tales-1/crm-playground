"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Person } from "../../data/people-schema";
import { DataTableViewOptions } from "@/components/ui/datatable/data-table-view-options";
import { DataTableColumnHeader } from "@/components/ui/datatable/data-table-header";

export const personColumns : ColumnDef<Person>[] = [
    {
        id:"0",
        header: ({ table }) => <DataTableViewOptions table={table} />
    },
    {
        accessorKey:"name",
        header:({ column }) => <DataTableColumnHeader column={column}  title="Name" />
    },
    {
        accessorKey:"phone",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Phone" />
    },
    {
        accessorKey:"email",
        header:({ column }) => <DataTableColumnHeader column={column} title="Email" />
    },
    {
        accessorKey:"occupation",
        header:({ column }) => <DataTableColumnHeader column={column} title="Occupation" />
    },
]