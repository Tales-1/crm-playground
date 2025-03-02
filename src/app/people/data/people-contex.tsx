"use client"

import { createContext, useContext } from "react"
import { Person } from "./people-schema"


const PeopleContext = createContext<Person[]>([]);

export function PeopleProvider({ children, data } : { children: React.ReactNode, data: Person[] }){
    return(
        <PeopleContext.Provider value={data}>
            {children}
        </PeopleContext.Provider>
    )
}

export function usePeople(){
    const context = useContext(PeopleContext);

    if(!context)
        throw new Error("usePeople must be used within the People provider");

    return context;
}