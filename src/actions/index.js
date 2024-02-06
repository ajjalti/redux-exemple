import * as types from '../types'
export const player_one_score = () =>{
    return {
        type:types.PLAYER_ONE_SCORE
    }
}
export const player_two_score = () =>{
    return {
        type:types.PLAYER_TWO_SCORE
    }
}
export const reset_game = () =>{
    return {
        type:types.RESET_GAME
    }
}
export const pause_replay = () =>{
    return {
        type:types.PAUSE_REPLAY
    }
}