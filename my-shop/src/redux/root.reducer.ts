import { useReducer } from "react"
import { combineReducers } from "redux"

// combinar todos reduces em um so
export const rootReducer = combineReducers({
    useReducer: useReducer,
})