import { Button } from "../button";
import { ArrowUpDown } from "lucide-react";

type SortButtonProps = {
    header: string,
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
    toggleSorting : () => void
}


export default function SortButton({header, variant = "default", toggleSorting}:SortButtonProps){

    return(
        <Button 
            variant={variant}
            onClick={toggleSorting}
            >
            {header}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )
}