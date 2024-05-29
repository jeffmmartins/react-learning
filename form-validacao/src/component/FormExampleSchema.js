import {z} from "zod";

export const FormExampleSchema = z.object({
    name: z.string().min(3,"Minimo 3 caracters"),
    email: z.string().min(1,"Email é obrigatório").email("e-mail Invalido"),
    password: z.string().min(8,"no minimo 8 caracteres").regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
})