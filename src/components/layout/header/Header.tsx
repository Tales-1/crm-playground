import Image from "next/image";
import GlobalSearch from "../sidebar/GlobalSearch";
import Avatar from "./Avatar";
import companyLogo from "@/assets/prima.png"; 

export default function Header(){

    return(
        <header className="flex justify-between items-center w-screen px-3 gap-[5rem]">
            <div className="aspect-square w-[75px] flex items-center">
                <Image src={companyLogo} alt="Company logo" className="object-cover w-full" />
            </div>

            <GlobalSearch />
            
            <div className="rounded-full w-[35px] aspect-square bg-white overflow-hidden">
                <Avatar />
            </div>
        </header>
    )
}