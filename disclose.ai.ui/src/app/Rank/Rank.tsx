import { useContext } from "react";
import { GameStateContext } from "../RouterStateManager";

const Rank = () => {
    const { gameState } = useContext(GameStateContext);
 
    return (
    <div>
      <span className="badge-primary">Hi {gameState.name}</span>
    
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(gameState.rank).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{gameState.rank[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    )
};


export default Rank;
