import './App.css';
import { useForm } from "react-hook-form"
import Input from './component/Input';

function App() {
  const {register, handleSubmit} = useForm();

  const salvar = (formdata) => {
    console.log(formdata)
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit(salvar)}>
        <Input label="Nome" type="text"  {...register("name")} />
        <Input type="text" placeholder='Email' {...register("email")}/>
        <Input type="password" placeholder='Password' {...register("password")} />
        <button>Enviar </button>
      </form>
     
    </div>
  );
}

export default App;
