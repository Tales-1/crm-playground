import { DealTargetEnum } from "./kanban-deals-data";
import { z } from "zod";

export const dealSchema = z.object({
    id:z.number(),
    stageTitle:z.string(),
    organisation: z.string(),
    primaryPerson: z.string(),
    price: z.number(),
    date: z.string(),
    dealTarget: z.number(),
    })

export type Deal = {
    id:number;
    organisation: string;
    primaryPerson: string;
    price: number;
    date: string;
    dealTarget: DealTargetEnum;
    stageTitle:string
    [key: string]: any;
};