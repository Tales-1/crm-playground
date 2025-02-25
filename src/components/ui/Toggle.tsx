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

    return (
            <label className={`toggle-label text-center cursor-pointer w-full flex gap-1 items-center justify-center 
                            ${textSize} ${active ? "toggle-label-active" : ""}`}>
                {toggleImage}
                <p className="text-xs">
                    {buttonLabel}
                </p>
                <input type="checkbox" onChange={toggleBtn}/>
            </label>
    )
}