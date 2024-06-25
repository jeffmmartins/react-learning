import { useContext } from "react";
import { ListaTarefaContext } from "../context/todos";
import ToDo from "./ToDo";

const NewToDoForm = () => {
  const { tarefas, infoForm, register, handleSubmit, removerTarefa } =
    useContext(ListaTarefaContext);

  return (
    <div>
      <ToDo tarefas={tarefas} removerTarefa={removerTarefa} />
      <form onSubmit={handleSubmit(infoForm)}>
        <input
          type="text"
          placeholder="Exemplo: Estudar"
          {...register("tarefa")}
        />
        <button>Adicionar Tarefa</button>
      </form>
    </div>
  );
};

export default NewToDoForm;
