import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ICON_SIZES, THEMES } from "@/constants/constants";
import IconWrapper from "@/components/ui/icon-wrapper";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <>
            {
                resolvedTheme === THEMES.dark && 
                <button onClick={() => setTheme("light")} type="button" title="Light theme button">
                    <IconWrapper>
                        <Sun size={ICON_SIZES.small} />
                    </IconWrapper>
                </button> 
            } 
            
            {
                resolvedTheme === THEMES.light &&
                <button onClick={() => setTheme("dark")} type="button" title="Dark theme button">
                    <IconWrapper>
                        <Moon size={ICON_SIZES.small} />
                    </IconWrapper>
                </button>
            }
        </>

    )
}