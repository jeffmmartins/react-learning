import { useState } from "react";
import style from "./style.module.scss";

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("")




    return (
        <section className={style.container}>
            {/*preventDefault evita o comportamento da página recarregar*/}
            <form onSubmit={(event) => { event.preventDefault(); console.log(taskTitle) }}> 
                <div >
                    <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input type="text" id="task-title" value={taskTitle} placeholder="Titulo da tarefa"
                        onChange={(event) => { setTaskTitle(event.target.value) }} />
                </div>
                <button type="submit">Adicionar Tarefa</button>
            </form>
        </section>
    )
}