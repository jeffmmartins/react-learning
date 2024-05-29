import React from "react";

const Card = ({ card }) => {
  return (
    <div className="App">
      <div className="Card">
        <p>Nome: {card.name}</p>
        <p>Data: {card.date}</p>
        <p>Naturalidade: {card.naturalidade}</p>
        <p>E-mail: {card.email}</p>
        <p>Senha: {card.senha}</p>
      </div>
    </div>
  );
};

export default Card;
