import Image from "next/image";
import GlobalSearch from "./global-search";
import companyLogo from "@/assets/p-icon.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ProfileButton from "./buttons/profile-button";
import ThemeToggle from "./buttons/theme-toggle";
import NotificationButton from "./buttons/notification-button";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-screen px-4 gap-[5rem]">
      <div className="relative aspect-square w-[85px] flex items-center">
        <DropdownMenu >
          <DropdownMenuTrigger>
            <Image
              src={companyLogo}
              alt="Company logo"
              className="object-cover sm:w-[50px] md:w-[85px]"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-menu absolute -left-3">
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
        <ThemeToggle />
        <NotificationButton />
        <ProfileButton />
      </div>
    </header>
  );
}
