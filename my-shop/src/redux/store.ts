import {createStore, applyMiddleware} from "redux"
import { rootReducer } from "./root.reducer"
import logger from 'redux-logger'



// criando o store 
export const store = createStore(rootReducer, applyMiddleware(logger))