import React from "react"
import { Counter } from "./component/Counter/Counter";

class App extends React.Component {
constructor() {
  super();
  this.state = {showCounter: false}

  }

  render() {
    return (
      <>
        <h1>Ciclo de vida</h1>
        <button onClick={() => this.setState({showCounter: !this.state.showCounter})}>
          {this.state.showCounter ? "remover Contador" : "mostrar  Contador"}</button>
        
        {/*quando tiver null ele não mostra nada pode usar assim também this.state.showCounter && <Counter/> */}
        {this.state.showCounter ? <Counter/> : null}
      </>
    )
  }
}



export default App
