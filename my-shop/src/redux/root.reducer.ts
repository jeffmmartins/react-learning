import { combineReducers } from "redux"
import { userReducer } from "./UserReduce/reduce"
import { cartReducer } from "./Cart/cart-reduce"

// combinar todos reduces em um so
export const rootReducer = combineReducers({
    userReducer,
    cartReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>