import { useEffect, useRef, useState } from "react"

export const Refs: React.FC = () => {
    // preciso especificar de acordo com ts que vai ser um inputelement quando eu inicializo de null
    const inputRef = useRef<HTMLInputElement>(null) // {current : value } é um objeto que tem um atributo current 
     // quando atualizo o estado acontece a re-redenrização 
    console.log(inputRef)

    
    // para conseguir ver no inicio o que o inputref esta referenciando precisa utilizar o useEffect
    /*
    useEffect(() => {
        console.log(inputRef)
    },[inputRef])
    */

    //nesse exemplo mostra que quando o componente é re-renderizado ele nao altera nada na tela.
    // muda o valor porem na tela nao é alterado 
    const handleOnClick = () => {
        if(inputRef.current !== null){ inputRef.current.focus()}
      
       // mesma linha de raciocionio de input.value
    }

    return (
        <div>
            <h1>Teste Ref</h1>

            <input type="text" placeholder="digite algo"  ref={inputRef}/>
            <button onClick={handleOnClick} >Clique Aqui</button>
            
        </div>


    )
}