import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Organisation } from "../../data/organisation-schema";


export default function GridCard({ organisation }: { organisation: Organisation }) {
    return (
        <Card className="bg-card w-full text-center shadow-lg">
            <CardHeader>
                <CardTitle>{organisation.name}</CardTitle>
                <CardDescription>{organisation.about}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col justify-center gap-1 text-xs">
                    <p>{organisation.address}</p>
                    <p>{organisation.email}</p>
                    <p>{organisation.phone}</p>
            </CardFooter>
        </Card>
    );
}