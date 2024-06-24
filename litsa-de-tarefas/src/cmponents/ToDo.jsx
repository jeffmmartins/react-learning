const ToDo = ({ tarefas, removerTarefa }) => {
  return (
    <div>
      {tarefas.map((tarefa, index) => (
        <p key={index}>
          {tarefa} <button onClick={() => removerTarefa(index)}>Excluir</button>
        </p>
      ))}
    </div>
  );
};

export default ToDo;
