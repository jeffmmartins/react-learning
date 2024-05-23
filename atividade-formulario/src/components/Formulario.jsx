import React from 'react';
import { useForm } from 'react-hook-form'

const Formulario = () => {
    const {register, handleSubmit } = useForm();

    const salvar = (formData) => {
        console.log(formData)
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(salvar)}>
        <input type="text" placeholder='Digite o nome completo' {...register("name")} />
        <input type="date" placeholder='Data de Nascimento' {...register("Date")}/>
        <input type="text" placeholder='naturalidade' {...register("naturalidade")} />
        <input type="text" placeholder='Email' {...register("email")} />
        <input type="password" placeholder='Senha'  {...register("senha")}/>
        <button>Cadastrar</button>
      </form>
    </div> 
  )
}

export default Formulario
