import NewToDoForm from "./cmponents/NewToDoForm";
import Header from "./cmponents/Header";
import style from "./cmponents/Style/Header.module.css";

function App() {
  return (
    <div>
      <div className={style.header}>
      <Header />
      </div>
      <NewToDoForm />
    </div>
  );
}

export default App;
