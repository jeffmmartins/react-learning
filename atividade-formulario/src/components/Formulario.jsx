import React from 'react';
import { useForm } from 'react-hook-form'
import Input from './Input';

const Formulario = () => {
    const {register, handleSubmit } = useForm();

    const salvar = (formData) => {
        console.log(formData)
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(salvar)}>
        <Input type="text" placeholder='Digite o nome completo' label="Nome" {...register("name")} />
        <Input type="date" placeholder='Data de Nascimento' label="Data de Nascimento" {...register("Date")}/>
        <Input type="text" placeholder='naturalidade' label="Naturalidade" {...register("naturalidade")} />
        <Input type="text" placeholder='Email' label="E-mail" {...register("email")} />
        <Input type="password" placeholder='Senha' label="Senha" {...register("senha")}/>
        <button>Cadastrar</button>
      </form>
    </div> 
  )
}

export default Formulario
