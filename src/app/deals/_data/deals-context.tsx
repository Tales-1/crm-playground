"use client"

import { useContext, createContext, ReactNode } from "react";
import { Deal } from "./deal-schema";

const DealsContext = createContext<Deal[]>([]);

export function DealsProvider({
  data,
  children,
}: {
  data: Deal[];
  children: ReactNode;
}) {
  return (
      <DealsContext.Provider value={data}>
        {children}
    </DealsContext.Provider>
    )
}

export function useDeals(){
    const context = useContext(DealsContext);

    if(!context)
        throw new Error("Use deals must be used within a Deals Provider");

    return context;
}