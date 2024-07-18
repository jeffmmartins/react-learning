import { combineReducers } from "redux"

import { cartReducer } from "./Cart/cart-reduce"
import { userSlice } from "./UserReduce/user-slice"

// combinar todos reduces em um so
export const rootReducer = combineReducers({
    userReducer: userSlice,
    cartReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>