
import { useState } from 'react'
import './App.css'
import Produto from './component/Produto'

function App() {
  const [ativar, setAtivar] = useState(false)

  return (
    <>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto/>}
    </>
  )
}

export default App
