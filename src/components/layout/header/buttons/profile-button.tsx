import Image from "next/image";
import profilePic from "@/../public/images/jawad.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ICON_SIZES } from "@/constants/constants";

export default function ProfileButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="border border-1 rounded-full w-[35px] aspect-square bg-white overflow-hidden">
          <Image src={profilePic} alt="Profile picture" className="object-cover" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-3 w-[200px] flex flex-col gap-1">
        <DropdownMenuLabel className="text-[12px]">
          Jawad Nazir
        </DropdownMenuLabel>
        
        <Separator />

        <DropdownMenuItem className="text-xs">
          <User size={ICON_SIZES.small} />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs">
          <CreditCard size={ICON_SIZES.small} />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs">
          <Settings size={ICON_SIZES.small} />
          Settings
        </DropdownMenuItem>

        <Separator />
        
        <DropdownMenuItem className="text-xs">
          <LogOut size={ICON_SIZES.small} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}