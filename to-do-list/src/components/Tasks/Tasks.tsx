import { FormEvent, useState } from "react";
import style from "./style.module.scss";

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("")


    const handleSubmitAddTask = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <section className={style.container}>
            {/*preventDefault evita o comportamento da página recarregar*/}
            <form onSubmit={handleSubmitAddTask}> 
                <div >
                    <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input type="text" id="task-title" value={taskTitle} placeholder="Titulo da tarefa"
                        onChange={(event) => { setTaskTitle(event.target.value) }} />
                </div>
                <button type="submit">Adicionar Tarefa</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" id="task" />
                    <label htmlFor="task">tarefa 1</label>
                </li>
                <li>
                    <input type="checkbox" id="task" />
                    <label htmlFor="task">tarefa 1</label>
                </li>
            </ul>
        </section>
    )
}