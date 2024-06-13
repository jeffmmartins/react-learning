import { createContext } from "react";

export const ListaTarefaContext = createContext({})

export const ListaTarefasProvider = ({children}) => {

    return (
        <ListaTarefaContext.Provider value={{}}>
            {children}
        </ListaTarefaContext.Provider>
    )
}