import Image from "next/image";
import profilePic from "@/assets/jawad.png"

export default function Avatar(){
 
    return(
        <div className="border border-1 rounded-full w-[35px] aspect-square bg-white overflow-hidden">
            <Image src={profilePic} alt="Profile picture" className="object-cover" />
        </div>
    )
}