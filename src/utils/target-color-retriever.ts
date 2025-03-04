import { DealTargetEnum } from "@/app/deals/data/kanban-deals-data";

export default function returnColorForTarget(target:DealTargetEnum){
    switch(target){
        case(DealTargetEnum.OnTarget):
            return "#009013";
        case(DealTargetEnum.Approaching):
            return "#F69F0A"; 
        case(DealTargetEnum.Overdue):
            return "#FF0202";
        case(DealTargetEnum.NoTarget):
            return "#0033AA";
    }
}

export function returnTargetNameForNumber(target:number){
    switch (target) {
        case DealTargetEnum.OnTarget:
          return "On Target";
        case DealTargetEnum.Approaching:
          return "Approaching";
        case DealTargetEnum.Overdue:
          return "Overdue";
        case DealTargetEnum.NoTarget:
          return "No Target";
        default:
          return "No active stage";
      }
}