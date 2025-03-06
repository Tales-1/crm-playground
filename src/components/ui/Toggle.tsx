import { ReactNode } from "react";

type ToggleProps = {
    buttonLabel: string;
    active: boolean;
    toggleBtn: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textSize?:string,
    toggleImage?: ReactNode
}

export default function Toggle(props:ToggleProps){

    const { buttonLabel, active, toggleBtn, textSize, toggleImage } = props

    const activeStateClasses = active ? "bg-active-bg text-active-text" : "bg-inactive-bg text-inactive-text";
    
    return (
            <label className={`text-center cursor-pointer w-full flex gap-1 items-center justify-center 
                            ${textSize} ${activeStateClasses}`}>
                {toggleImage}
                <p className="text-xs">
                    {buttonLabel}
                </p>
                <input type="checkbox" onChange={toggleBtn}/>
            </label>
    )
}