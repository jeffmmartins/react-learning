import style from "./style.module.css"

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div>
        <h1>My To do</h1>
        <span>Bem Vindo, Jefferson</span>
      </div>
      <div>
        {/*cards*/}
      </div>
    </header>
  );
};
