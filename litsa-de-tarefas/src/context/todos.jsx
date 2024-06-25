import { useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const ListaTarefaContext = createContext({});

export const ListaTarefasProvider = ({ children }) => {
  const dados = localStorage.getItem("tarefa");
  const info = JSON.parse(dados);
  const [tarefas, setTarefas] = useState(dados ? info : []);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    localStorage.setItem("tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  const infoForm = (formData) => {
    if(!formData.tarefa) {
      alert("Favor preencher o campo")
      return
    }
    console.log(formData)
    setTarefas([...tarefas, formData.tarefa]);
    reset();
  };

  const removerTarefa = (index) => {
    const remover = tarefas.filter((_, i) => i !== index);
    setTarefas(remover);
  };
  return (
    <ListaTarefaContext.Provider
      value={{
        tarefas,
        setTarefas,
        register,
        handleSubmit,
        infoForm,
        removerTarefa,
      }}
    >
      {children}
    </ListaTarefaContext.Provider>
  );
};
