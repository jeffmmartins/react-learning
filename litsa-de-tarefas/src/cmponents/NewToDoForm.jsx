import { useContext } from "react";
import { ListaTarefaContext } from "../context/todos";
import ToDo from "./ToDo";
import style from "../cmponents/ToDo/ToDo.Module.css"



const NewToDoForm = () => {
  const { tarefas, infoForm, register, handleSubmit, removerTarefa } =
    useContext(ListaTarefaContext);

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit(infoForm)}>
        <input
          type="text"
          placeholder="Exemplo: Estudar"
          {...register("tarefa")}
        />
        <button>Adicionar Tarefa</button>
      </form>
      <ToDo tarefas={tarefas} removerTarefa={removerTarefa} />
    </div>
  );
};

export default NewToDoForm;
