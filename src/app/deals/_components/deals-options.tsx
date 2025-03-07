"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toggles, TogglesList, ToggleTrigger } from "@/components/ui/toggle";
import { ICON_SIZES } from "@/constants/constants";
import { AlignJustify, Grid, icons, Kanban } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DealsOptionsMenu({ initialView } : { initialView : string }) {
    const router = useRouter();
    const [activeView, setActiveView] = useState(initialView);

    function handleToggle(view: string){
        console.log(view)
        router.push(`/deals?view=${view}`)
        setActiveView(view);
    }

  return (
    <div className="flex justify-between items-center">
      <Toggles value={activeView} onValueChange={handleToggle}>
        <TogglesList className="w-[125px]">
            <ToggleTrigger value="kanban">
                <Kanban size={ICON_SIZES.small}/>
                Kanban
            </ToggleTrigger>
            <ToggleTrigger value="table">
                <AlignJustify size={ICON_SIZES.small} /> 
                Table
            </ToggleTrigger>
        </TogglesList>
      </Toggles>

      <Select defaultValue="primary">
        <SelectTrigger className="w-[180px] bg-surface h-[30px] w-[175px] text-xs rounded-lg">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="primary">Primary</SelectItem>
          <SelectItem value="secondary">Secondary</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
