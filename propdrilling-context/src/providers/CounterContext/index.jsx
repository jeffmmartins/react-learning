import { useState, useEffect, createContext } from "react";

export const CounterContext = createContext({});

export const CounterProvider = ({children}) => {
    const localCounter = localStorage.getItem("@COUNTER")
    const [ counter, setCounter] = useState(localCounter ? localCounter : 0);

    useEffect(()=> {
        localStorage.setItem("@COUNTER", counter)
    }, [counter])

    const subtrair = (number) => {
        return setCounter(counter - number)
      }

      const adicionar = (number) => {
        return setCounter(counter + number)
      }

    return (
        <CounterContext.Provider value={{counter, setCounter,  subtrair, adicionar}}>
            {children}
        </CounterContext.Provider>
    )
}