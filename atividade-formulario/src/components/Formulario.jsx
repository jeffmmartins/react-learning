import React from 'react';
import { useForm } from 'react-hook-form'
import Input from './Input';
import { FormSchema } from './FormSchema';
import { zodResolver } from "@hookform/resolvers/zod";


const Formulario = () => {
    const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: zodResolver(FormSchema)
    });

    const salvar = (formData) => {
        console.log(formData)
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(salvar)}>
        <Input type="text" placeholder='Digite o nome completo' label="Nome" {...register("name")} />
        <p>{errors ? errors.name.message : null }</p>
        <Input type="date" placeholder='Data de Nascimento' label="Data de Nascimento" {...register("Date")}/>
        <Input type="text" placeholder='naturalidade' label="Naturalidade" {...register("naturalidade")} />
        <p>{errors ? errors.naturalidade.message : null }</p>
        <Input type="text" placeholder='Email' label="E-mail" {...register("email")} />
        <p>{errors ? errors.email.message : null }</p>
        <Input type="password" placeholder='Senha' label="Senha" {...register("senha")}/>
        <p>{errors ? errors.senha.message : null }</p>
        <button>Cadastrar</button>
      </form>
    </div> 
  )
}

export default Formulario
