"use client"

import Link from "next/link";
import IconWrapper from "../header/icon-wrapper";
import {
  Coins,
  LayoutDashboard,
  Network,
  Tags,
  User,
} from "lucide-react";

import { ICON_SIZES } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { useReducer } from "react";

export default function Sidebar() {
  const [showFullMenu, setShowFullMenu] = useReducer((prev) => !prev, false);

  const transitionStyles = "ease-in-out duration-300 transition-discrete"
  const linkTextStyles = (showFullMenu ? "opacity-100 translate-x-[50px]" : "opacity-0 -translate-x-[50px] select-none") + " " + transitionStyles + " " + "text-foreground"

  return (
    <>
      <aside className={`relative mt-16 ml-2 ${showFullMenu ? "z-30 " : "z-10 w-fit"}`}>
        <nav className="flex flex-col items-start gap-2" onMouseEnter={setShowFullMenu} onMouseLeave={setShowFullMenu}>
          <Link href="/" className="relative flex items-center gap-2" >  
            <IconWrapper isActive={usePathname() == "/"} >
              <LayoutDashboard size={ICON_SIZES.medium} />
            </IconWrapper>
            <p className={`absolute text-xs ${linkTextStyles}`}>Dashboard</p>
          </Link>

          <Link href="/deals" className="relative flex items-center gap-2">
            <IconWrapper isActive={usePathname() == "/deals"}>
              <Coins size={ICON_SIZES.medium} />
            </IconWrapper>
            <p className={`absolute z-10 text-xs ${linkTextStyles}`}>Deals</p>
          </Link>

          <Link href="/organisations" className="relative flex items-center gap-2">
            <IconWrapper isActive={usePathname() == "/organisations"}>
              <Network size={ICON_SIZES.medium} />
            </IconWrapper>
            <p className={`absolute text-xs ${linkTextStyles}`}>Organisations</p>
          </Link>

          <Link href="/people" className="relative flex items-center gap-2">
            <IconWrapper isActive={usePathname() == "/people"}>
              <User size={ICON_SIZES.medium} />
            </IconWrapper>
            <p className={`absolute text-xs ${linkTextStyles}`}>People</p>
          </Link>

          <Link href="/products" className="relative flex items-center gap-2">
            <IconWrapper isActive={usePathname() == "/products"}>
              <Tags size={ICON_SIZES.medium} />
            </IconWrapper>
            <p className={`absolute text-xs ${linkTextStyles}`}>Products</p>
          </Link>
        </nav>
      </aside>
      <div 
        className={`fixed inset-0 ${showFullMenu ? "opacity-30 z-20 translate-x-0" : "opacity-0 z-0 -translate-x-full"} ${transitionStyles}`}
        style={{ background: "var(--side-bar-gradient)", }}>
      </div>
    </>
  );
}
