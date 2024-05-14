import { useContext } from "react";
import { GameStateContext } from "../RouterStateManager";


const Rank = () => {
    const { gameState } = useContext(GameStateContext);
 
    return (
    <div>
      {/* <span className="badge-primary">Hi {gameState.name}</span> */}
      <div className="stat shadow">
      <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
        <div className="stat-title">{gameState.name}</div>
        <div className="stat-value">{gameState.rank[gameState.name]}</div>
    </div>

    
      <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(gameState.rank).sort(([,valueA], [,valueB]) => valueB - valueA).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    )
};


export default Rank;
