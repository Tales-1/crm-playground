import { ReactNode } from "react";

// to do: standardise sizes for sm, medium, large
export default function IconWrapper({children}:{ children:ReactNode}){
    return(
        <div className="border border-1 rounded-full w-[30px] aspect-square bg-white overflow-hidden flex justify-center items-center">
            {children}
        </div>
    )
}