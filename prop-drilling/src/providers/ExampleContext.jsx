import { useState } from "react";
import { createContext } from "react";

export const ExampleContext = createContext();

export const ExampleProvider = ({children}) => {
    const [example, setExample ] = useState("exemplo")

    return (
        <ExampleContext.Provider value={{example, setExample}}>
            {children}
        </ExampleContext.Provider>
    )
}

