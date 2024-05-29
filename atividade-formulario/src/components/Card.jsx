import React from 'react'

const Card = ({card}) => {
  return (
    <div>
      <h1>Cadastrado com Sucesso</h1>
    <p>Nome:{card.name}</p>
    <p>Data:{card.date}</p>
    <p>Naturalidade:{card.naturalidade}</p>
    <p>E-mail:{card.email}</p>
    <p>Senha:{card.senha}</p>
    </div>
  )
}

export default Card
