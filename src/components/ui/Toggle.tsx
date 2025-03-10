import { ReactNode } from "react";
 
 type ToggleProps = {
     buttonLabel: string;
     active: boolean;
     textSize?:string,
     toggleImage?: ReactNode
     toggleAction?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 }
 
 export default function Toggle(props:ToggleProps) {
     const { buttonLabel, active, textSize = "text-base", toggleImage, toggleAction } = props
 
     return (
             <label className={`flex gap-1 items-center justify-center w-full h-full 
                                px-2 text-center cursor-pointer  
                             ${textSize} ${active ? "bg-active-bg text-active-text" : "bg-inactive-bg text-inactive-text"}`}>
                 {toggleImage}
                 <p className="text-xs">
                     {buttonLabel}
                 </p>
                 <input type="checkbox" onChange={toggleAction}/>
             </label>
     )
  }