import React from 'react'

const ToDo = ({tarefas,remover}) => {
  return (
    <div>
      {tarefas.map((tarefa, index) => (
        <p key={index}>{tarefa} <button onClick={remover()}>Excluir</button></p>
      ))}
    </div>
  )
}

export default ToDo
