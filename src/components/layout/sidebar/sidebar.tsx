"use client";

import Link from "next/link";
import IconWrapper from "../../ui/icon-wrapper";
import { Coins, LayoutDashboard, Network, Settings, Tags, Users } from "lucide-react";
import { ICON_SIZES } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

interface MenuItem {
  menuText: string;
  iconElement: ReactNode;
  pathname: string;
  isActive: boolean;
  query?:string
};

export default function Sidebar() {
  const menuItems: MenuItem[] = [
    {
      menuText: "Dashboard",
      iconElement: <LayoutDashboard size={ICON_SIZES.medium} />,
      isActive: usePathname() == "/",
      pathname: "/",
    },
    {
      menuText: "Deals",
      iconElement: <Coins size={ICON_SIZES.medium} />,
      isActive: usePathname().includes("/deals"),
      pathname: "/deals",
      query:"view=kanban"
    },
    {
      menuText: "Organisations",
      iconElement: <Network size={ICON_SIZES.medium} />,
      isActive: usePathname().includes("/organisations"),
      pathname: "/organisations",
    },
    {
      menuText: "People",
      iconElement: <Users size={ICON_SIZES.medium} />,
      isActive: usePathname().includes("/people"),
      pathname: "/people",
    },
    {
      menuText: "Products",
      iconElement: <Tags size={ICON_SIZES.medium} />,
      isActive: usePathname().includes("/products"),
      pathname: "/products",
    },
    {
      menuText: "Settings",
      iconElement: <Settings size={ICON_SIZES.medium} />,
      isActive: usePathname().includes("/settings"),
      pathname: "/settings"
    }
  ];

  return (
    <aside className={`relative mt-16 pl-4`}>
      <nav
        className="flex flex-col items-start gap-2 h-full"
      >
        {menuItems.map((item) => (
          <Link href={{ pathname: item.pathname, query: item.query }} 
                className={`relative flex items-center gap-2 ${item.menuText == "Settings" ? "mt-auto mb-12" : ""}`}
                key={item.menuText}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IconWrapper isActive={item.isActive}>
                    {item.iconElement}
                  </IconWrapper>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.menuText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
