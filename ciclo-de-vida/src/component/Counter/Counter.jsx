import React from "react";

export class Counter extends React.Component{
    constructor(){
        super();
        // criando um estado 
        this.state={contador: 0}
        console.log("construido a classe counter")
    }

    // recomendando a não usar esse componente , foi usando apenas para esse exemplo. 
    UNSAFE_componentWillMount(){
        console.log("nosso componente contador sera montado")
    }

    componentDidMount() {
        console.log("componente foi montado ... ")
    }

    render() {
        console.log('rendendrizando esse componente ...')
        return (
            <>
                <h1>{this.state.contador}</h1>
                <button onClick={() => this.setState({contador: this.state.contador + 1})}>Aumentar</button>
                <button onClick={() => this.setState({contador: this.state.contador 1 1})}>Diminuir</button>
            </>
        )
    }
}