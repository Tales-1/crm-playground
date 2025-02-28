import { z } from "zod";

export type Organisation = {
    id:number;
    name:string;
    address:string;
    phone:string;
    email:string;
    website:string;
    about:string;
}

export const organisationSchema = z.object({
    id:z.number(),
    name:z.string(),
    address:z.string(),
    phone:z.string(),
    email:z.string(),
    website:z.string(),
    about:z.string()
})