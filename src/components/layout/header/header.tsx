"use client"

import Image from "next/image";
import GlobalSearch from "./global-search";
import companyLogo from "@/../public/images/p-icon.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import dynamic from "next/dynamic";
import ProfileButton from "./buttons/profile-button";
import NotificationButton from "./buttons/notification-button";

const ThemeToggle = dynamic(() => import("./buttons/theme-toggle"), { ssr: false });

export default function Header() {
  return (
    <header className="flex justify-between items-center w-screen px-4 gap-[5rem]">
      <div className="relative aspect-square w-[85px] flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={companyLogo}
              alt="Company logo"
              className="object-cover sm:w-[50px] md:w-[85px]"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="absolute -left-3">
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

      <div className="flex gap-3" suppressHydrationWarning>
        <ThemeToggle />
        <NotificationButton />
        <ProfileButton />
      </div>
    </header>
  );
}
