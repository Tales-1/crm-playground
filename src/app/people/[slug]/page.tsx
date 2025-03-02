"use client"

import { useContext } from "react"
import { usePeople } from "../data/people-contex"
import React from "react";

export default function Page({
    params
}: {
    params:{slug:string}
}){

    const peopleContext = usePeople();

    const { slug } = params;
    
    console.log(slug)
    const person = peopleContext.find((person) => person.id == slug);

    return(
        <div>
            <p>
                Name : {person?.name}
            </p>

            <p>Email: {person?.email}</p>
            <p>Phone: {person?.phone}</p>
            <p>Occupation: {person?.occupation}</p>
        </div>
    ) 
}