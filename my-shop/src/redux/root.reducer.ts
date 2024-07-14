import { combineReducers } from "redux"
import { userReducer } from "./UserReduce/reduce"

// combinar todos reduces em um so
export const rootReducer = combineReducers({
    userReducer
})

export type RootReducer = ReturnType<typeof rootReducer>