import { DataTable } from "@/components/ui/datatable/data-table"
import { Organisation } from "../data/organisation-schema"
import { columns } from "./table/columns"

type OrganisationsBodyProps = {
    organisations: Organisation[]
}

export default function OrganisationsBody({ organisations }: OrganisationsBodyProps){
    return(
        <DataTable data={organisations} columns={columns} />
    )
}