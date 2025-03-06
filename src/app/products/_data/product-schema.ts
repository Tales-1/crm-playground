import { z } from "zod";

export type Product = {
    name:string;
    price:string;
    unit:string;
    canDiscount:boolean;
}

export const productSchema = z.object({
    name:z.string(),
    price:z.string(),
    unit:z.string(),
    canDiscount:z.boolean()
})