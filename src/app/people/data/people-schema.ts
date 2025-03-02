import { z } from "zod"

export type Person = {
    id:string,
    name:string;
    phone:string;
    email:string;
    occupation:string;
}

export const personSchema = z.object({
    id:z.string(),
    name:z.string(),
    phone:z.string(),
    email:z.string(),
    occupation:z.string()
});
   
