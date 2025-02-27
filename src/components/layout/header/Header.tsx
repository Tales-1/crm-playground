import Image from "next/image";
import GlobalSearch from "../sidebar/global-search";
import Avatar from "./avatar";
import companyLogo from "@/assets/p-icon.png";
import NotificationBell from "./notification-bell";
import { ChevronsUpDown, CreditCard, LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ICON_SIZES } from "@/constants/constants";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-screen px-4 gap-[5rem]">
      <div className="aspect-square w-[85px] flex items-center">
        <Image
          src={companyLogo}
          alt="Company logo"
          className="object-cover w-full"
        />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronsUpDown size={ICON_SIZES.small} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-[11px]">
              My Products
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs">Crm</DropdownMenuItem>
            <DropdownMenuItem className="text-xs">Housing</DropdownMenuItem>
            <DropdownMenuItem className="text-xs">Accounts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <GlobalSearch />

      <div className="flex gap-3">
        <NotificationBell />
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Avatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-3 w-[200px] flex flex-col gap-1">
            <DropdownMenuLabel className="text-[12px]">
            Jawad Nazir
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
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
        
      </div>
    </header>
  );
}
