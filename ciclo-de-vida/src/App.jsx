import React from "react"

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
      </>
    )
  }
}



export default App
