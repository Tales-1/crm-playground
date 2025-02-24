import Link from "next/link"

export default function Sidebar(){
    return(
        <aside>
            <nav className="flex flex-col">
                <Link href="/">Dashboard</Link>
                <Link href="/Deals">Deals</Link>
                <Link href="/Organisation">Organisation</Link>
                <Link href="/People">People</Link>
                <Link href="/Products">Products</Link>
            </nav>
        </aside>
    )
}