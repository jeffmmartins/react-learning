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
        {errors.name ? <p>{errors.name.message}</p> : null }
        <Input type="date" placeholder='Data de Nascimento' label="Data de Nascimento" {...register("Date")}/>
        <Input type="text" placeholder='naturalidade' label="Naturalidade" {...register("naturalidade")} />
        {errors.naturalidade ? <p>{errors.naturalidade.message}</p> : null }
        <Input type="text" placeholder='Email' label="E-mail" {...register("email")} />
        {errors.email ? <p>{errors.email.message}</p> : null }
        <Input type="password" placeholder='Senha' label="Senha" {...register("senha")}/>
        {errors.senha ? <p>{errors.senha.message}</p> : null }
        <button>Cadastrar</button>
      </form>
    </div> 
  )
}

export default Formulario
