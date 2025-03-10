import { ReactNode } from "react";

type ToggleGroupProps = {
  className:string
};

export default function ToggleGroup({
  className,
  children,
}: ToggleGroupProps & { children: ReactNode }) {
  return (
    <div
      className={`flex flex-row rounded-lg ${className} drop-shadow overflow-hidden border`}
    >
      {children}
    </div>
  );
}
