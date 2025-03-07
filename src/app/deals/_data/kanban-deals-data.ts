import { Deal } from "./deal-schema";

export type StageDetails = {
    title: string;
    color: string;
    deals: Deal[];
};

export enum DealTargetEnum {
    OnTarget = 1,
    Approaching,
    Overdue,
    NoTarget
}