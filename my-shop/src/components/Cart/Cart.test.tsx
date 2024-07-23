import { render } from "@testing-library/react"
import { Cart } from "./Cart"

describe("Cart > Unit Tests", () => {
    it("Should render an empty cart correctly", () => {
        render(<Cart showCart={true}/>)
    })
})