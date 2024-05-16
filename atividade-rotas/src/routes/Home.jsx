import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({members}) => {
    
  return (
    <div>
      <h1>Lista de Membros</h1>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            <Link to={member.type === 'pj' ? `/company/${member.id}` : `/customer/${member.id}`}>
              {member.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
