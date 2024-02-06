import {pause} from "./game"
import {players} from "./players"
import {combineReducers} from "redux"

export const reducers = combineReducers({players,pause})