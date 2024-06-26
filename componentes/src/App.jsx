import './App.css'
import Header from './components/Header'
import { Main } from './components/Main.jsx'
import { Titulo } from './components/Titulo.jsx'

function App() {
  

  return (
    <>
      <Header/>
      <Titulo titulo = "Meu Titulo 1" cor="red"/>
      <Titulo titulo = "Meu Titulo 2" cor="blue"/>
      <Main/>
    </>
  )
}

export default App
