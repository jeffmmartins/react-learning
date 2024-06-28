import style from "./Style/ToDo.module.css"

const ToDo = ({ tarefas, removerTarefa }) => {
  return (
    <div>
      {tarefas.map((tarefa, index) => (
        <div key={index} className={style.lista}>
        <p className={style.tarefas}>
          {tarefa}
        </p> 
        <button  onClick={() => removerTarefa(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
