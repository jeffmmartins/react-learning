import { Header } from "./components/Header/Header"
import { Tasks } from "./components/Tasks/Tasks"
import { FormRef } from "./Concepts/FormRef"
import { Memoization } from "./Concepts/Memoization"
import { Refs } from "./Concepts/Refs"
import "./style/global.css"

function App() {
  

  return (
    <>
      <Header/>
      <Tasks/>
      {/*<Refs/>
      <FormRef/>*/}
      <Memoization finacialData={{incomes: [40,20,10], outcomes:[10,4,5]}}/>
    </>
  )
}

export default App
