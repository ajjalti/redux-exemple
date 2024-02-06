import * as types from "../types"
import {player_two_score} from "../actions";
let points=15
let iniState = {
    player_one:{
        points:0,
        wins:0,
        avantage:false
    },
    player_two:{
        points:0,
        wins:0,
        avantage:false
    }
}
export const players = (state=iniState,action)=>{
    switch (action.type) {
        case types.PLAYER_ONE_SCORE:
            if(state.player_one.points<=30){
                if(state.player_one.points===30){
                    return {
                        ...state,
                        ...state.player_one.points+=points,
                        ...state.player_one.avantage=true,
                    }
                }
                else
                    return {
                    ...state,
                    ...state.player_one.points+=points,
                }
            }
            else{
                if(!state.player_two.avantage)
                    return {
                        ...state,
                        ...state.player_one.points=0,
                        ...state.player_one.avantage=false,
                        ...state.player_two.avantage=false,
                        ...state.player_two.points=0,
                        ...state.player_one.wins+=1
                    }
                else
                    return {
                        ...state,
                        ...state.player_two.avantage=false
                    }
            }
        case types.PLAYER_TWO_SCORE:
            if(state.player_two.points<=30){
                if(state.player_two.points===30){
                    return {
                        ...state,
                        ...state.player_two.points+=points,
                        ...state.player_two.avantage=true,
                    }
                } else {
                    return {
                        ...state,
                        ...state.player_two.points+=points,
                    }
                }

            }else{
                if(!state.player_one.avantage)
                    return {
                        ...state,
                        ...state.player_one.points=0,
                        ...state.player_one.avantage=false,
                        ...state.player_two.avantage=false,
                        ...state.player_two.points=0,
                        ...state.player_two.wins+=1
                    }
                else
                    return {
                        ...state,
                        ...state.player_one.avantage=false
                    }
            }
        case types.RESET_GAME:
            return {
                ...state,
                ...state.player_one.points=0,
                ...state.player_one.avantage=false,
                ...state.player_two.avantage=false,
                ...state.player_two.points=0
            }
        default:
            return state
    }
}