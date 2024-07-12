import React, {  createContext,useEffect,useState } from "react";

// quando tiver uma array tenho sempre que tipar o array 
export interface Task {
    title: string;
    done: boolean;
    id: number;
}

interface TaskContextData {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

// criando o contexto, normalmemnte compartilhamos um objeto, como passei um estado de , preciso tambem fazer a tipagem. 
export const TaskContext = createContext({} as TaskContextData);

// tipagem do childreen sempre vai ser REACT.REACTNODE
interface TaskProviderProps{
    children: React.ReactNode
}

// criando o componente provider
export const TaskProvider: React.FC<TaskProviderProps> = ({children}) => {
    const [tasks, setTasks] = useState([] as Task[]) // isso quer dizer que o array seja como array de tarefas

    // sempre que montar o componente ele vai puxar as tarefas salva
    useEffect(() => {
        const tasksONLocalStorage = localStorage.getItem("Task")
        tasksONLocalStorage ? setTasks(JSON.parse(tasksONLocalStorage)) : null
    },[])

    return (
        //no provider é onde eu exporto tudo que quero que seja 
        //acessivel na aplicação
        // children é quando queremos passar tags html para dentro de um componente 
        <TaskContext.Provider value={{tasks,setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}