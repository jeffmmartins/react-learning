// sempre importar essa biblioteca 
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Counter } from "./Counter"
import userEvent from "@testing-library/user-event"

describe("Counter > Unit Tests", () => {
    test("It should render Counter component correctly", () => {
        render(<Counter/>)
        // pega algo que tenha o texto 0
        const valorDoContador =  screen.getByRole('heading', {level: 1}) //<h1> , procura uma tag de cabeçalho de nivel 1 
        const increaseButtonElement = screen.getByRole('button', {name: "Aumentar"})
        const decreaseButtonElement = screen.getByRole('button', {name: "Diminuir"})
    
        expect(valorDoContador).toHaveTextContent('0')// espera que o h1 esteja dentro do documento, espera que o <h1> tenha o texto 0
        expect(increaseButtonElement).toBeInTheDocument() // nao foi utilizado o havetext para nao ficar redudante
        expect(decreaseButtonElement).toBeInTheDocument()
    })
})



it('Should increase Counter Value when increase button clicked', () => {
    render(<Counter/>)

    //clicar no botao aumentar para aumentar o o valor do contador 
    const counterValueElemente = screen.getByRole('heading', {level: 1})
    const increaseButton = screen.getByRole('button', {name: "Aumentar"})

    // simular o comportamento de um clique no botão
    userEvent.click(increaseButton)

    // espero que o valor do contador seja 1
    expect(counterValueElemente).toHaveTextContent("1")
})