import { ReactNode } from "react";

export default function IconWrapper({
  isActive,
  children
}: {
  isActive?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${isActive ? "bg-[var(--on-surface)] text-[var(--surface)]" : "bg-surface text-[var(--on-surface)]"} 
                    border border-1 rounded-full w-[35px] 
                    aspect-square overflow-hidden flex justify-center items-center`}
                    >
      {children}
    </div>
  );
}
