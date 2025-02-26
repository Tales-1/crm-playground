import { ReactNode } from "react";

// to do:
//  Standardise icon wrapper sizes for sm, medium, large
//  Find a reusable way to handle icon sizes as i'm currently using padding and I don't like it
export default function IconWrapper({
  isActive,
  children
}: {
  isActive?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${isActive ? "toggle-label-active" : "toggle-label"} 
                    border border-1 rounded-full w-[35px] 
                    aspect-square overflow-hidden flex justify-center items-center`}
                    >
      {children}
    </div>
  );
}
