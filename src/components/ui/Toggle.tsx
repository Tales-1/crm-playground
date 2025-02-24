import { FormEvent } from "react";

type ToggleProps = {
    buttonLabel: string;
    active: boolean;
    toggleBtn: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textSize?:string
}

export default function Toggle({ active, buttonLabel, textSize = "text-xs", toggleBtn } : ToggleProps){

    return (
            <label className={`toggle-label text-center cursor-pointer w-full flex items-center justify-center 
                            ${textSize} ${active ? "toggle-label-active" : ""}`}>
                {buttonLabel}
                <input type="checkbox" onChange={toggleBtn}/>
            </label>
    )
}