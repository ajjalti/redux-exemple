import * as types from "../types"
export const pause = (state=false,action)=>{
    switch (action.type) {
        case types.PAUSE_REPLAY:
            return !state
        default:
            return state
    }
}