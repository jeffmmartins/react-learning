import style from "./style.module.scss";

export const Tasks: React.FC = () => {
    return (
        <section className={style.container}>
            <form>
                <div>
                    <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input type="text" id="task-title" placeholder="Titulo da tarefa" />
                    <button>Adicionar Tarefa</button>
                </div>
            </form>
        </section>
    )
}