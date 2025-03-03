"use client";

import Link from "next/link";
import IconWrapper from "../../ui/icon-wrapper";

import { Coins, LayoutDashboard, Network, Tags, Users } from "lucide-react";
import { ICON_SIZES } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { ReactNode, useReducer } from "react";

type MenuItem = {
  menuText: string;
  iconElement: ReactNode;
  href: string;
  isActive: boolean;
};

export default function Sidebar() {
  const [showFullMenu, setShowFullMenu] = useReducer((prev) => !prev, false);

  const transitionStyles = "ease-in-out duration-300 transition-discrete";
 
  const linkTextStyles =
    (showFullMenu
      ? "opacity-100 translate-x-[50px]"
      : "opacity-0 -translate-x-[50px] select-none") +
    " " +
    transitionStyles +
    " " +
    "text-foreground";

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
  ];

  return (
    <>
      <aside
        className={`relative mt-16 pl-4 ${
          showFullMenu ? "z-30 " : "z-10 w-fit"
        }`}
      >
        <nav
          className="flex flex-col items-start gap-2"
          onMouseEnter={setShowFullMenu}
          onMouseLeave={setShowFullMenu}
        >
          {menuItems.map((item) => (
            <Link href={item.href} className="relative flex items-center gap-2" key={item.menuText}>
              <IconWrapper isActive={item.isActive}>
                {item.iconElement}
              </IconWrapper>
              <p 
                className={`absolute text-xs ${linkTextStyles}`}
                style={{color: item.isActive ? "var(--active-state-text)" : "var(--inactive-state-text)"}}
              >
                {item.menuText}
              </p>
            </Link>
          ))}
        </nav>
      </aside>
      <div
        className={`fixed inset-0 ${
          showFullMenu
            ? "opacity-60 z-20 translate-x-0"
            : "opacity-0 z-0 -translate-x-full"
        } ${transitionStyles}`}
        style={{ background: "var(--side-bar-gradient)" }}
      ></div>
    </>
  );
}
