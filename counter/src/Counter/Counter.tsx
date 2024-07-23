import React, { useState } from "react";

export const Counter: React.FC = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        return setValue(value + 1)
    }

    const decrement = () => {
        return setValue(value - 1)
    }

    return (
        <>
        <h1>{value}</h1>

        <button onClick={increment}>Aumentar</button>
        <button onClick={decrement}>Diminuir</button>
        </>
    )
}