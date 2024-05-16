import React from 'react'
import {useParams} from 'react-router-dom'
const Company = ({members}) => {
  const { id } = useParams();

  const member = members.find(member => member.id.toString() === id)
  return (
    <div>
    {member ? (
      <>
        <h1>Company: {member.name}</h1>
        <p>ID: {member.id}</p>
        <p>Type: {member.type}</p>
      </>
    ) : (
      <p>Member not found</p>
    )}
  </div>
  )
}

export default Company
