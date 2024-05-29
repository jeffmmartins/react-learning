import {z} from "zod" ;

export const FormSchema = z.object({
    name: z.string().max(18, {message:"Favor preencher este campo"}).min(1,{message:"Favor preencher esse campo"}),
    naturalidade: z.string().min(1, {message: "Favor preencher corretamente"}),
    email: z.string().min(1, {message:"Email é obrigatório"}).email({message:"e-mail Invalido"}),
    senha: z.string().min(4,{message:"No minimo 4 caracteres"}).regex(/(?=.*?[A-Z])/, "Necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, {message:"necessário pelo menos uma letra minúscula"}).regex(/(?=.*?[0-9])/, {message:"Necessário pelo menos um número"})
    .regex(/[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, {message:"Necessário um  caracter especial"})
})