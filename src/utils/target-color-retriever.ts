import { DealTargetEnum } from "@/app/deals/data/deals-data";

export default function returnColorForTarget(target:DealTargetEnum){
    switch(target){
        case(DealTargetEnum.OnTarget):
            return "#009013";
        case(DealTargetEnum.Approaching):
            return "#945F04"; 
        case(DealTargetEnum.Overdue):
            return "#FF0202";
        case(DealTargetEnum.NoTarget):
            return "#0033AA";
    }
}