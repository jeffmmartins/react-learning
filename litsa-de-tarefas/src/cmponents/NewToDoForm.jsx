import { useForm } from 'react-hook-form';
import { useState } from 'react';

const NewToDoForm = () => {

const {register, handleSubmit} = useForm()
const [tarefas, setTarefas] = useState();

const infoForm = (formData) => {
    setTarefas(formData.tarefa) 
}

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {tarefas ? tarefas : null}
      <form onSubmit={handleSubmit(infoForm)}>
        <input type="text" placeholder='Exemplo: Estudar'{...register("tarefa")} />
        <button>Adicionar Tarefa</button>
      </form>
    </div>
  )
}

export default NewToDoForm
