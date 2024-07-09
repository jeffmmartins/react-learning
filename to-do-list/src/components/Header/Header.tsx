import { StatsCard } from "../StatsCard/StatsCard";
import style from "./style.module.scss"

export const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <h1>My To do</h1>
                    <span>Bem Vindo, Jefferson</span>
                </div>
                <div>
                    <StatsCard/>
                    <StatsCard/>
                    <StatsCard/>
                </div>
            </div>
        </header>
    );
};
