import Image from "next/image";
import profilePic from "@/assets/jawad.png"

export default function Avatar(){
 
    return(
        <Image src={profilePic} alt="Profile picture" className="object-cover" />
    )
}