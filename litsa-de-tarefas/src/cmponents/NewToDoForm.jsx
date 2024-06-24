
import { useContext } from 'react';
import { ListaTarefaContext } from '../context/todos';

const NewToDoForm = () => {
const {tarefas, infoForm, register, handleSubmit} = useContext(ListaTarefaContext)

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {tarefas.map((tarefa, index) => (
        <p key={index}>{tarefa}</p>
      ))}
      <form onSubmit={handleSubmit(infoForm)}>
        <input type="text" placeholder='Exemplo: Estudar'{...register("tarefa")} />
        <button>Adicionar Tarefa</button>
      </form>
    </div>
  )
}

export default NewToDoForm
