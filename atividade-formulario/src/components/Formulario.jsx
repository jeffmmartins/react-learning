import React from 'react';


const Formulario = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Digite o nome completo' />
        <input type="date" placeholder='Data de Nascimento' />
        <input type="text" placeholder='naturalidade' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Senha' />
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default Formulario
