import { FormEvent, useRef } from "react"

export const FormRef = () => {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    // tipo de evento de submissao de evento é p FORMEVENT

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault() // evita que a pagina seja recarregada ao submeter o formulario
        console.log(inputNameRef.current?.value)
        console.log(inputEmailRef.current?.value)
        console.log(inputPasswordRef.current?.value) // o ? quer dizer que pode ser nulo
    }


    return (
        <div>
            <h1>Use REF</h1>
            <form action="" onSubmit={(event) => handleOnSubmit(event)}>
            <input type="text" placeholder="Digite o nome" ref={inputNameRef} />
            <input type="email" placeholder="email" ref={inputEmailRef}/>
            <input type="password" placeholder="Senha" ref={inputPasswordRef}/>
            <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}