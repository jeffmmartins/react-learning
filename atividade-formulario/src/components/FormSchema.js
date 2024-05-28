import {z} from "zod" ;

export const FormSchema = z.object({
    name: z.string().max(18, "Favor preencher este campo")
})