import { Header } from "./components/Header/Header"
import { Tasks } from "./components/Tasks/Tasks"
import { FormRef } from "./Concepts/FormRef"
import { Refs } from "./Concepts/Refs"
import "./style/global.css"

function App() {
  

  return (
    <>
      <Header/>
      <Tasks/>
      <Refs/>
      <FormRef/>
    </>
  )
}

export default App
