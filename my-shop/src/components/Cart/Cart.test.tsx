import { render } from "@testing-library/react"
import { Cart } from "./Cart"
import { Provider } from "react-redux"
import { store } from "../../redux/store"

// Mock: tornar algo fake, tornar a biblioteca react-redux Fake
jest.mock("react-redux")

describe("Cart > Unit Tests", () => {
    it("Should render an empty cart correctly", () => {
        render(
            <Provider store={store}>
                <Cart showCart={true}/>
            </Provider>
        )
    })
})