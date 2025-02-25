
import { Deal } from "@/data/deals/dealsData"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { useRouter } from "next/navigation"

export default function DealsTable({ deals } : { deals: Deal[] }) {
    const router = useRouter();

    return (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Stage</TableHead>
              <TableHead className="w-[100px]">Organisation</TableHead>
              <TableHead>Primary</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Target</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deals.map((deal) => (
              <TableRow 
                    key={deal.id} 
                    onClick={() => router.push(`/deals/${deal.id}`)}
                    className="cursor-pointer"
                    >
                <TableCell className="font-medium">{deal.stageTitle}</TableCell>
                <TableCell>{deal.organisation}</TableCell>
                <TableCell>{deal.primaryPerson}</TableCell>
                <TableCell>{deal.price}</TableCell>
                <TableCell>{deal.date}</TableCell>
                <TableCell>{deal.dealTarget}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell>{deals.reduce((acc, deal) => acc + deal.price, 0)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )
}