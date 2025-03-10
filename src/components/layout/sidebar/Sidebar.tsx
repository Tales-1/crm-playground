"use client";

import Link from "next/link";
import IconWrapper from "../../ui/icon-wrapper";

import { Coins, LayoutDashboard, Network, Settings, Tags, Users } from "lucide-react";
import { ICON_SIZES } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { ReactNode, useReducer } from "react";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

type MenuItem = {
  menuText: string;
  iconElement: ReactNode;
  href: string;
  isActive: boolean;
};

export default function Sidebar() {
  const [showFullMenu, setShowFullMenu] = useReducer((prev) => !prev, false);

  const menuItems: MenuItem[] = [
    {
      menuText: "Dashboard",
      iconElement: <LayoutDashboard size={ICON_SIZES.medium} />,
      isActive: usePathname() == "/",
      href: "/",
    },
    {
      menuText: "Deals",
      iconElement: <Coins size={ICON_SIZES.medium} />,
      isActive: usePathname() == "/deals",
      href: "/deals",
    },
    {
      menuText: "Organisations",
      iconElement: <Network size={ICON_SIZES.medium} />,
      isActive: usePathname() == "/organisations",
      href: "/organisations",
    },
    {
      menuText: "People",
      iconElement: <Users size={ICON_SIZES.medium} />,
      isActive: usePathname() == "/people",
      href: "/people",
    },
    {
      menuText: "Products",
      iconElement: <Tags size={ICON_SIZES.medium} />,
      isActive: usePathname() == "/products",
      href: "/products",
    },
    {
      menuText: "Settings",
      iconElement: <Settings size={ICON_SIZES.medium} />,
      isActive: usePathname() == "/settings",
      href: "/settings"
    }
  ];

  return (
    <aside
      className={`relative mt-16 pl-4 ${showFullMenu ? "z-30 " : "z-10 w-fit"
        }`}
    >
      <nav
        className="flex flex-col items-start gap-2 h-full"
      >
        {menuItems.map((item) => (
          <Link href={item.href} className={`relative flex items-center gap-2 ${item.menuText == "Settings" ? "mt-auto mb-12" : ""}`} key={item.menuText}>
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
