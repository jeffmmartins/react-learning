import './App.css';
import { useForm } from "react-hook-form"
import Input from './component/Input';
import { FormExampleSchema } from './component/FormExampleSchema';
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(FormExampleSchema)
  })

  const salvar = (formdata) => {
    console.log(formdata)
  }
  return (
    <div className="App">
      <h1>Cadastro</h1>
      <form action="" onSubmit={handleSubmit(salvar)} >
        <Input type="text" placeholder='Nome' label="nome"  {...register("name")} />
        {errors.name ? <p>{errors.name.message} </p>: null}
        <Input type="text" placeholder='Email' label="Email"  {...register("email")} />
        {errors.email ? <p>{errors.email.message} </p>: null}
        <Input type="password" placeholder='Password'  label="Password" {...register("password")}/>
        {errors.password ? <p>{errors.password.message} </p>: null}
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
