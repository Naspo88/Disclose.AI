import { useContext } from 'react';
import { GameStateContext } from '../RouterStateManager';

const Rank = () => {
  const { gameState } = useContext(GameStateContext);
  const max_score = Object.entries(gameState.rank).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4 min-h-full">
      {/* <div className="stat-title">{gameState.name}</div> */}
      <div className="card-body ">
        {/* <div className="card self-center">{gameState.name} {gameState.rank[gameState.name]}</div> */}

        <div className="card-title">Final Ranking</div>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(gameState.rank)
              .sort(([, valueA], [, valueB]) => valueB - valueA)
              .map(([key, value]) => (
                <tr
                  key={key}
                  className={
                    key === gameState.name.toLowerCase()
                      ? 'bg-neutral '
                      : undefined
                  }
                >
                  <td>
                    {key} {key === max_score ? '🏆' : undefined}{' '}
                  </td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rank;
