import { useContext } from "react";
import { GameStateContext } from "../RouterStateManager";

const Rank = () => {
    const { userPlayer } = useContext(GameStateContext);

    return (
    <div>
      <h1>You think you're good?</h1>
      <span className="badge-primary">{userPlayer.name}</span>
    </div>
    )
};

return(


)

export default Rank;
