"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import IconWrapper from "../../../ui/icon-wrapper";
import { ICON_SIZES, THEMES } from "@/constants/constants";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    
    return (
        <>
            {theme === THEMES.dark && 
            <button onClick={() => setTheme("light")}>
                <IconWrapper>
                    <Sun size={ICON_SIZES.small} />
                </IconWrapper>
            </button> } 
            {
                theme === THEMES.light &&
                <button onClick={() => setTheme("dark")}>
                    <IconWrapper>
                        <Moon size={ICON_SIZES.small} />
                    </IconWrapper>
                </button>
            }
        </>

    )
}