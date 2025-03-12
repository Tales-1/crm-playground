"use client"

import { createContext, Provider, ReactNode, useContext } from "react"

interface DtOptionsProps {
    optionsArray:[{ label:string, value:string }[]]
}

interface DtOptionsProviderProps extends DtOptionsProps {
    children: ReactNode
}

const DatatableOptionsContext = createContext<DtOptionsProps | null>(null);

const DataTableOptionsProvider = ({ children, optionsArray } : DtOptionsProviderProps) => {
    return(
        <DatatableOptionsContext.Provider value={{ optionsArray }}>
            {children}
        </DatatableOptionsContext.Provider>
    )
}

const useDatatableOptions = () => {
    const context = useContext(DatatableOptionsContext);

    if(!context)
        throw new Error("useDataTableOptions must be used within a DataTableOptions Provider");

    return context;
}

export { DataTableOptionsProvider, useDatatableOptions }