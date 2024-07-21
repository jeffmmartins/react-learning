import React, { useState } from "react";

export const Counter: React.FC = () => {
    const [value, setValue] = useState(0)

    const aumentar = () => {
        return setValue(value + 1)
    }

    const diminuir = () => {
        return setValue(value - 1)
    }

    return (
        <>
        <h1>{value}</h1>

        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Aumentar</button>
        </>
    )
}