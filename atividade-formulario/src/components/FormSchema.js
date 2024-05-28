import {z} from "zod" ;

export const FormSchema = z.object({
    name: z.string().max(18, "Favor preencher este campo"),
    naturalidade: z.string().mim(1, "Favor preencher corretamente"),
    email: z.string().min(1,"Email é obrigatório").email("e-mail Invalido"),
    senha: z.string().min(4,"No minimo 4 caracteres").regex(/^[A-Z]$/, "Necessário pelo menos uma letra maiúscula")
    .regex(/^[a-z]$/, "necessário pelo menos uma letra minúscula").regex(/^[0-9]$/, "Necessário pelo menos um número")
    .regex(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/, "Necessário um  caracter especial")
})