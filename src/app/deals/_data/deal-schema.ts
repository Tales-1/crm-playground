import { z } from "zod";

export const dealSchema = z.object({
    id:z.number(),
    stageTitle:z.string(),
    organisation: z.string(),
    primaryPerson: z.string(),
    price: z.number(),
    date: z.string(),
    dealTarget: z.number(),
    name:z.string()
    })

export const stageDetailsSchema = z.object({
    title:z.string(),
    color:z.string(),
    deals: z.array(dealSchema)
})

export type Deal = z.infer<typeof dealSchema>;
export type StageDetails = z.infer<typeof stageDetailsSchema>;

export enum DealTargetEnum {
    OnTarget = 1,
    Approaching,
    Overdue,
    NoTarget
}