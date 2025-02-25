import Image from "next/image";
import GlobalSearch from "./GlobalSearch";
import Avatar from "./Avatar";
import companyLogo from "@/assets/prima.png";
import { Bell } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { ICON_SIZES } from "@/constants/constants";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-screen px-3 gap-[5rem]">
      <div className="aspect-square w-[75px] flex items-center">
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
