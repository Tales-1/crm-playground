import { Organisation } from "../../data/organisation-schema"
import GridCard from "./grid-card"

type OrganisationGridProps = {
    data: Organisation[]
}

export default function GridBody({ data }: OrganisationGridProps){
    return(
        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full gap-x-4 gap-y-4">
            {data.map(organisation => (<GridCard key={organisation.id} organisation={organisation} />))}
        </div>
    )
}