"use client"

import Link from "next/link";
import IconWrapper from "../header/IconWrapper";
import {
  Coins,
  LayoutDashboard,
  Network,
  Tags,
  User,
} from "lucide-react";
import { ICON_SIZES } from "@/constants/constants";

import { usePathname } from "next/navigation";

export default function Sidebar() {
  
  return (
    <aside className="mt-6 ml-2">
      <nav className="flex flex-col items-center gap-2">
        <Link href="/">
          <IconWrapper isActive={usePathname() == "/"}>
            <LayoutDashboard size={ICON_SIZES.medium} />
          </IconWrapper>
        </Link>

        <Link href="/deals">
          <IconWrapper isActive={usePathname() == "/deals"}>
            <Coins size={ICON_SIZES.medium} />
          </IconWrapper>
        </Link>

        <Link href="/organisation">
          <IconWrapper isActive={usePathname() == "/organisation"}>
            <Network size={ICON_SIZES.medium} />
          </IconWrapper>
        </Link>

        <Link href="/people">
          <IconWrapper isActive={usePathname() == "/peals"}>
            <User size={ICON_SIZES.medium} />
          </IconWrapper>
        </Link>

        <Link href="/Products">
          <IconWrapper isActive={usePathname() == "/products"}>
            <Tags size={ICON_SIZES.medium} />
          </IconWrapper>
        </Link>
      </nav>
    </aside>
  );
}
