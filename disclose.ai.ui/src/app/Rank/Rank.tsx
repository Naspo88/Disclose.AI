import { useContext } from "react";
import { GameStateContext } from "../RouterStateManager";

const Rank = () => {
    const { gameState } = useContext(GameStateContext);

    return (
    <div>
      <h1>You think you're good?</h1>
      <span className="badge-primary">{gameState.name}</span>
      
    </div>
    )
};


export default Rank;
