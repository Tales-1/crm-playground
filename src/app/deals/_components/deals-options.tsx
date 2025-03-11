"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ICON_SIZES, PAGE_VIEWS } from "@/constants/constants";
import { AlignJustify, Download, Kanban } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ToggleGroup from "@/components/ui/toggle-group";
import Toggle from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import IconWrapper from "@/components/ui/icon-wrapper";

export default function DealsOptionsMenu() {
  const searchParams = useSearchParams().get("view");

  return (
    <div className="flex justify-between items-center">
      <ToggleGroup className="h-[27px] w-fit">
        <Link href="/deals/?view=kanban" className="w-full">
          <Toggle
            buttonLabel="Kanban"
            toggleImage={<Kanban size={ICON_SIZES.small} />}
            active={searchParams == PAGE_VIEWS.kanban}
          />
        </Link>

        <Link href="/deals/?view=table" className="w-full">
          <Toggle
            buttonLabel="Table"
            toggleImage={<AlignJustify size={ICON_SIZES.small} />}
            active={searchParams == PAGE_VIEWS.table}
          />
        </Link>
      </ToggleGroup>

      {
        searchParams == "table" &&
        <IconWrapper className="ml-auto mr-2 rounded-lg w-[28px]">
          <Download size={ICON_SIZES.small} />
        </IconWrapper>
      }

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
