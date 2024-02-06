import './App.css';
import {useSelector,useDispatch} from "react-redux";
import * as actions from "./actions"
function App() {
    const players = useSelector(state=>state.players)
    const pause = useSelector(state=>state.pause)
    const dispatch = useDispatch()
  return (
    <div className="App">
     {/*score*/}
      <div>
    <h1>
        le score est : {players.player_one.points} - {players.player_two.points}
    </h1>
      <p>
          {/*partie avantage*/}
          {players.player_one.avantage && !players.player_two.avantage && "Avantage joueur 1"}
          {players.player_two.avantage && !players.player_one.avantage && "Avantage joueur 2"}
          {pause &&  "Partie en pause !"}
      </p>
          {/*partie evenments*/}
          <div className="inputs">
              <input onClick={()=>dispatch(actions.player_one_score())} readOnly={true} value="Point joueur 1" disabled={pause}/>
              <input onClick={()=>dispatch(actions.player_two_score())} readOnly={true} value="Point joueur 2" disabled={pause}/>
          </div>

          <div className="div-reset">
              <button onClick={()=>dispatch(actions.reset_game())}>Remetre a zero</button>
              <button onClick={()=>dispatch(actions.pause_replay())}>Pause / Reprendre</button>
          </div>
          <div >
              {/*partie history*/}
              <h3>historique de la competetion</h3>
              <table className="table_history" border={1}>
                  <tr>
                      <th>
                          joueur 1
                      </th>
                      <td>
                          {players.player_one.wins}
                      </td>
                  </tr>
                  <tr>
                      <th>
                          joueur 2
                      </th>
                      <td>
                          {players.player_two.wins}
                      </td>
                  </tr>
              </table>
          </div>
      </div>
    </div>
  );
}

export default App;
