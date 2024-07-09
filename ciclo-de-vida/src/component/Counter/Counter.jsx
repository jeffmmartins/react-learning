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

        document.addEventListener('scroll', this.consoleScroll)
    }

    // para fazer a remoção , preciso criar um metodo externo e passar ele tanto no evento criado e no do remover 
    //Chamado sempre que um prop ou um estado for atualizado , nao utilizar o false, porem quando é false o retorno o componente nunca vai atualizar 
    shouldComponentUpdate() {
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('componente será atualizado')
    }

    componentDidUpdate() {
        console.log('componente já atualizou ')
    }

    componentWillUnmount() {
        console.log('COMPONENTE VAI DESMONTAR ')

        document.removeEventListener('scroll', this.consoleScroll)
    }

    consoleScroll(){
        console.log('ROLANDO A PAGINA')
    }

    render() {
        console.log('rendendrizando esse componente ...')
        return (
            <>
                <h1>{this.state.contador}</h1>
                <button onClick={() => this.setState({contador: this.state.contador + 1})}>Aumentar</button>
                <button onClick={() => this.setState({contador: this.state.contador - 1})}>Diminuir</button>
            </>
        )
    }
}