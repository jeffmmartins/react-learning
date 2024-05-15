import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate();

const navegaraParaSobre = () => {
    navigate('/sobre')
}


  return (
    <div>
      <h1>Pagina inicial</h1>
      <button onClick={navegaraParaSobre}>Ir para página sobre</button>
    </div>
  )
}

export default Home
