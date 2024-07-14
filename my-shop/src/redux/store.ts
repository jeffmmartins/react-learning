import {createStore} from "redux"
import { rootReducer } from "./root.reducer"


// criando o store 
export const store = createStore(rootReducer)