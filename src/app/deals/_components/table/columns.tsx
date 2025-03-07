"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DealTargetEnum } from "../../_data/kanban-deals-data";
import formatCurrency from "@/helpers/format-currency";
import { Deal } from "../../_data/deal-schema";
import { DataTableColumnHeader } from "@/components/ui/datatable/data-table-header";
import { DataTableViewOptions } from "@/components/ui/datatable/data-table-view-options";

export const columns: ColumnDef<Deal>[] = [
  {
    accessorKey: "",
    id:"0",
    header: ({ table }) => (
      <DataTableViewOptions table={table} />
    ),
    cell: () => "",
  },
  {
    accessorKey: "stageTitle",
    header: ({ column }) => ( <DataTableColumnHeader column={column} title="Stage" showFilter={true} accessorKey="stageTitle" />),
    cell: ({ row }) => (
      <div>{row.getValue("stageTitle")}</div>
    ),
  },
  {
    accessorKey: "organisation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organisation" showFilter={true} accessorKey="organisation" />
    ),
    cell: ({ row }) => (
      <div>{row.getValue("organisation")}</div>
    ),
  },
  {
    accessorKey: "primaryPerson",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primary" showFilter={true} accessorKey="primaryPerson"/>
    ),
    cell: ({ row }) => (
      <div>{row.getValue("primaryPerson")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" showFilter={true} accessorKey="price" />
    ),
    cell: ({ row }) => {
      const price: number = row.getValue("price");
      const formatted = formatCurrency(price);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" showFilter={true} accessorKey="date" />
    ),
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "dealTarget",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Target" showFilter={true} accessorKey="dealTarget" />,
    cell: ({ row }) => {
      const target: number = row.getValue("dealTarget");
      let targetDesc;

      switch (target) {
        case DealTargetEnum.OnTarget:
          targetDesc = "On Target";
          break;
        case DealTargetEnum.Approaching:
          targetDesc = "Approaching";
          break;
        case DealTargetEnum.Overdue:
          targetDesc = "Overdue";
          break;
        case DealTargetEnum.NoTarget:
          targetDesc = "No Target";
          break;
        default:
          targetDesc = "No active stage";
          break;
      }

      return <div>{targetDesc}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
];
