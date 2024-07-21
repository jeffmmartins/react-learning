import { useState } from "react"

export const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0)

    const aumentar = () => {
        return setCounter(counter + 1)
    }
    
    const diminuir = () => {
        return setCounter(counter - 1)
    }
    return (
        <>
        <h1>{counter}</h1>

        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
        </>
    )
}