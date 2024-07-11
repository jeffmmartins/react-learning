import React, { Children, createContext } from "react";

// criando o contexto, normalmemnte compartilhamos um objeto 
const TaskContext = createContext({});

// tipagem do childreen sempre vai ser REACT.REACTNODE
interface TaskProviderProps{
    children: React.ReactNode
}

// criando o componente provider
export const TaskProvider: React.FC<TaskProviderProps> = () => {
    return (
        //no provider é onde eu exporto tudo que quero que seja 
        //acessivel na aplicação
        // children é quando queremos passar tags html para dentro de um componente 
        <TaskContext.Provider value={}>

        </TaskContext.Provider>
    )
}