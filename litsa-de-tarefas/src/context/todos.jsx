import {  useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const ListaTarefaContext = createContext({})

export const ListaTarefasProvider = ({children}) => {
    const dados = localStorage.getItem('tarefa')
    const info =  JSON.parse(dados)
    const [tarefas, setTarefas] = useState(dados ? info : []);
    const {register, handleSubmit} = useForm();


    useEffect(() => {
        localStorage.setItem('tarefa', JSON.stringify(tarefas))
    },[tarefas])

    const infoForm = (formData) => {
        // logica aqui 
        setTarefas([...tarefas, formData.tarefa]) 
    }

    return (
        <ListaTarefaContext.Provider value={{tarefas, setTarefas, register, handleSubmit, infoForm}}>
            {children}
        </ListaTarefaContext.Provider>
    )
}