import { useState, createContext } from "react";

export const CounterContext = createContext({});

export const CounterProvider = ({children}) => {
    const [ counter, setCounter] = useState(0);

    const subtrair = () => {
        return setCounter(counter - 1)
      }

      const adicionar = () => {
        return setCounter(counter + 1)
      }

    return (
        <CounterContext.Provider value={{counter, subtrair, adicionar}}>
            {children}
        </CounterContext.Provider>
    )
}