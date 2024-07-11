import { useRef } from "react"

export const Refs: React.FC = () => {
    const ref = useRef(0)

    const handleOnClick = () => {
        ref.current = ref.current += 1
        console.log(ref.current)
    }

    return (
        <>
            <h1>Teste Ref</h1>

            <p>{`O valor da ref é : ${ref.current}`}</p>
            <button onClick={handleOnClick}>Clique Aqui</button>
        </>
    )
}