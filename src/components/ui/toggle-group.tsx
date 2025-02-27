import { ReactNode } from "react";

type ToggleGroupProps = {
  widthClass?: string;
  heightClass?: string;
};

export default function ToggleGroup({
  widthClass = "w-[120px]",
  heightClass = "h-[25px]",
  children,
}: ToggleGroupProps & { children: ReactNode }) {
  return (
    <div
      className={`flex flex-row rounded-lg ${widthClass} ${heightClass} drop-shadow overflow-hidden border`}
    >
      {children}
    </div>
  );
}
