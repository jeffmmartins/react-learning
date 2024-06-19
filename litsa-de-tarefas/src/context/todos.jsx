import {  useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const ListaTarefaContext = createContext({})

export const ListaTarefasProvider = ({children}) => {
    const [tarefas, setTarefas] = useState([]);
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        const dados = localStorage.getItem("tarefas")
        {dados ? JSON.parse(dados) : null}
    },[])

    useEffect(() => {
        localStorage.setItem('cadastro', tarefas)
    },[tarefas])

    const infoForm = (formData) => {
        setTarefas(formData.tarefa) 
    }

    return (
        <ListaTarefaContext.Provider value={{tarefas, setTarefas, register, handleSubmit, infoForm}}>
            {children}
        </ListaTarefaContext.Provider>
    )
}