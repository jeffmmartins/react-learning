import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import style from "./style.module.scss"
import { TaskContext } from "../../context/TaskContext";

export const Header: React.FC = () => {
    const {tasks} = useContext(TaskContext)
    console.log(tasks)

    const totalTasks = tasks.length
    const totalPending = tasks.reduce((total, task) => {
        // esse done é de onde estou acessando o objeto tarefa 
        if(!task.done) return total + 1
        return total  
    },0)

    const totalDone = totalTasks - totalPending

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <h1>My To do</h1>
                    <span>Bem Vindo, Jefferson</span>
                </div>
                <div>
                    <StatsCard title="Total de Tarefas" value={totalTasks}/>
                    <StatsCard title="Tarefas Pendentes" value={totalPending}/>
                    <StatsCard title="Tarefas Concluidas" value={totalDone}/>
                </div>
            </div>
        </header>
    );
};
