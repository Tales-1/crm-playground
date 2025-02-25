import DealsBody from "@/components/deals/DealsBody"
import { groupedDeals } from "@/data/deals/dealsData"

export default function Page(){

    // fetch data
    
    return (
        <main className="main">
            <DealsBody data={groupedDeals} />
        </main>
    )
}