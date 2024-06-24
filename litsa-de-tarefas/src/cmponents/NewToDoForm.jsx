
import { useContext } from 'react';
import { ListaTarefaContext } from '../context/todos';
import ToDo from './ToDo';

const NewToDoForm = () => {
const {tarefas, infoForm, register, handleSubmit, remover} = useContext(ListaTarefaContext)

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ToDo tarefas={tarefas} remover={remover}/>
      <form onSubmit={handleSubmit(infoForm)}>
        <input type="text" placeholder='Exemplo: Estudar'{...register("tarefa")} />
        <button>Adicionar Tarefa</button>
      </form>
    </div>
  )
}

export default NewToDoForm
