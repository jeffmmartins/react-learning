import { FormEvent, useEffect, useState } from "react";
import style from "./style.module.scss";

// quando tiver uma array tenho sempre que tipar o array 
interface Task {
    title: string;
    done: boolean;
    id: number;
}

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    //para adicionar as tarefas é criado um array para adicionar as tarefas 
    const [tasks, setTasks] = useState([] as Task[]) // isso quer dizer que o array seja como array de tarefas

    /*
        [
            {title: tarefa 1}, done: boolean}
        ]
    */

    // função disparada quando o usuario quer adicionar uma nova tarefa 
    // e joga dentro do array novo que está sendo criado.
    const handleSubmitAddTask = (event: FormEvent) => {
        event.preventDefault()

        if(taskTitle.length < 3) {
            alert('Não é possivel adicionar uma tarefa com menos de 3 letras')
            return
        }

        // adicionando tarefa, o spread esta pegando tudo que tinha antes, 
        const newTask = [
            ...tasks, 
            {id: new Date().getTime(), title: taskTitle, done: false} // passando o objeto para o array novo 
        ]
        setTasks(newTask)
        localStorage.setItem("Task", JSON.stringify(newTask))

        setTaskTitle('')
        console.log(tasks)
    }

    // sempre que montar o componente ele vai puxar as tarefas salva
    useEffect(() => {
        const tasksONLocalStorage = localStorage.getItem("Task")
        tasksONLocalStorage ? setTasks(JSON.parse(tasksONLocalStorage)) : null
    },[])

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
                {tasks.map((task) => (
                    <li key={task.id}>
                    <input type="checkbox" id={`task - ${task.id}`} />
                    <label htmlFor={`task - ${task.id}`}>{task.title}</label>
                    </li>
                ))}
            </ul>
        </section>
    )
}