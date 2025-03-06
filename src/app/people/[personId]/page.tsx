import { promises as fs } from "fs"
import path from "path";
import React from "react";
import { z } from "zod";
import { personSchema } from "../_data/people-schema";
import { Mail, Phone, User } from "lucide-react";
import { ICON_SIZES, STROKE_WIDTHS } from "@/constants/constants";
import { Separator } from "@/_components/ui/separator";
import IconWrapper from "@/_components/ui/icon-wrapper";

async function getPersonAsync(id:string){
    const data = await fs.readFile(path.join(process.cwd(), "src/app/people/_data/people.json"));

    const people = JSON.parse(data.toString());

    const peopleArray = z.array(personSchema).parse(people);

    return peopleArray.find((person) => person.id == id);
}

export default async function Page({ params }: { params:Promise<{personId:string}> }){
    const id = (await params).personId;

    const person = await getPersonAsync(id);
    
    if(!person)
        return <h1>Person not found</h1>

    return(
        <div>
            <div className="flex gap-4 items-center p-3">
                <div>
                    <User size={175} strokeWidth={STROKE_WIDTHS.thin} />
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-3xl">{person.name}</h3>
                    <div className="flex gap-12">
                        <a className="flex items-center gap-5">
                            <IconWrapper>
                                <Phone size={ICON_SIZES.medium} /> 
                            </IconWrapper>
                            <div>
                                <span className="block text-muted-foreground">Phone</span>
                                <span>{person.phone}</span>
                            </div>
                        </a>

                        <a className="flex items-center gap-5">
                            <IconWrapper>
                                <Mail size={ICON_SIZES.medium} /> 
                            </IconWrapper>
                            <div>
                                <span className="block text-muted-foreground">Email</span>
                                <span>{person.email}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <Separator />
        </div>
    ) 
}