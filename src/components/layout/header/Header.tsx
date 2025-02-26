import Image from "next/image";
import GlobalSearch from "../sidebar/global-search";
import Avatar from "./Avatar";
import companyLogo from "@/assets/p-icon.png";
import { Bell } from "lucide-react";
import IconWrapper from "./icon-wrapper";
import { ICON_SIZES } from "@/constants/constants";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-screen px-4 gap-[5rem]">
      <div className="aspect-square w-[85px] flex items-center">
        <Image
          src={companyLogo}
          alt="Company logo"
          className="object-cover w-full"
        />
      </div>

      <GlobalSearch />

      <div className="flex gap-3">
        <IconWrapper>
          <Bell size={ICON_SIZES.small} />
        </IconWrapper>
        <Avatar />
      </div>
    </header>
  );
}
