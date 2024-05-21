import './App.css';
import { useForm } from "react-hook-form"
function App() {
  const { register, handleSubmit } = useForm();

  const salvar = (formdata) => {
    console.log(formdata)
  }

  return (
    <div className="App">
      <form  onSubmit={handleSubmit(salvar)}>
        <input type="text" placeholder='Nome' {...register("name")} />
        <input type="text" placeholder='Email'  {...register("email")}/>
        <input type="password" placeholder='Password'{...register("password")} />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
