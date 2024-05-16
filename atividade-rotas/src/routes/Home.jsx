import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({membros}) => {
    const navigate = useNavigate();

    const handleclick = () => {
      navigate('/company')
    }
  return (
    <div>
      {membros.map((membro) => (<Link key={membro.id} to={`/company/${membro.id}`}>{membro.name}</Link>))}
      <h1>Home</h1>
      <h2>Company</h2>
      <button>Cantina da esquina</button>
      <button>Lanches do ogro</button>
      <button>Antunes</button>
      <div>
        <button onClick={handleclick}>Pedro</button>
        <button>Alex</button>
      </div>
    </div>
  )
}

export default Home
