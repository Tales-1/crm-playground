import { ReactNode } from "react";

export default function IconWrapper({
  isActive,
  children
}: {
  isActive?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${isActive ? "bg-active-bg text-active-text" : "bg-inactive-bg text-inactive-text"} 
                    border border-1 rounded-full w-[35px] 
                    aspect-square overflow-hidden flex justify-center items-center`}
                    >
      {children}
    </div>
  );
}
