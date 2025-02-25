"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DealTargetEnum } from "../../data/deals-data";
import { ArrowUpDown } from "lucide-react";
import formatCurrency from "@/utils/format-currency";
import { Deal } from "../../data/deal-schema";

export const columns : ColumnDef<Deal>[] = [
    {
        accessorKey: "stageTitle",
        header: () => <div className="text-right">Stage</div>,
        cell: ({ row }) => <div className="text-right">{row.getValue("stageTitle")}</div>
    },
    {
        accessorKey: "organisation",
        header: () => <div className="text-right">Organisation</div>,
        cell: ({ row }) => <div className="text-right">{row.getValue("organisation")}</div> 
    },
    {
        accessorKey: "primaryPerson",
        header: () => <div className="text-right">Primary</div>,
        cell: ({ row }) => <div className="text-right">{row.getValue("primaryPerson")}</div>
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Price</div>,
        cell:({ row }) => {
            const price : number = row.getValue("price");
            const formatted = formatCurrency(price);
            return <div className="text-right">{formatted}</div>
        }
    },
    {
        accessorKey: "date",
        header: () => <div className="text-right">Date</div>,
        cell: ({ row }) => <div className="text-right">{row.getValue("date")}</div>
    },
    {
        accessorKey: "dealTarget",
        header: () => <div className="text-right">Target</div>,
        cell: ({ row }) => {
            const target : number = row.getValue("dealTarget");
            let targetDesc;

            switch(target){
                case(DealTargetEnum.OnTarget):
                    targetDesc = "On Target";
                    break;
                case(DealTargetEnum.Approaching):
                    targetDesc = "Approaching";
                    break;
                case(DealTargetEnum.Overdue):
                    targetDesc = "Overdue";
                    break;
                case(DealTargetEnum.NoTarget):
                    targetDesc = "No Target";
                    break;
                default:
                    "No active stage";
            }

            return <div className="text-right">{targetDesc}</div>
        }
    }
]