import { z } from "zod"

export interface Person {
    id:string,
    name:string;
    phone:string;
    email:string;
    title:string;
}

export const personSchema = z.object({
    id:z.string(),
    name:z.string(),
    title:z.string(),
    phone:z.string(),
    email:z.string(),
});
   
