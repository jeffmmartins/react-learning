import {  useState, createContext } from "react";
import { useForm } from "react-hook-form";

export const ListaTarefaContext = createContext({})

export const ListaTarefasProvider = ({children}) => {
    const [tarefas, setTarefas] = useState([]);
    const {register, handleSubmit} = useForm();
    const infoForm = (formData) => {
        setTarefas(formData.tarefa) 
    }

    return (
        <ListaTarefaContext.Provider value={{tarefas, setTarefas, register, handleSubmit, infoForm}}>
            {children}
        </ListaTarefaContext.Provider>
    )
}