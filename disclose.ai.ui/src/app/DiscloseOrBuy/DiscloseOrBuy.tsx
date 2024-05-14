import { useContext, useEffect, useState } from 'react';
import Header from '../../shared/header';
import InvestmentSlider from './components/InvestmentSlider';
import { GameStateContext } from '../RouterStateManager';
import { GameStates } from '../types';
import Rank from '../Rank/Rank';

const DiscloseOrBuy = () => {
  const [hasReadRules, setHasReadRules] = useState(false);
  const [timeoutIsOut, setTimeoutIsOut] = useState(false);
  const { gameState, setGameState } = useContext(GameStateContext);

  useEffect(() => {
    if (gameState.state === GameStates.endOfTurn) {
      setTimeout(() => {
        setTimeoutIsOut(true);
      }, 5000);
    }
  }, [gameState]);

  return (
    <div>
      <Header />

      {!hasReadRules && gameState.state === GameStates.waiting && (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
          <div className="card-body">
            <h2 className="card-title">Regulator Rule</h2>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="The regulator chat message"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="chat-bubble">
                I am the regulator, and this is the rule that will govern the
                decision the player will make about investment and disclosure.
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => setHasReadRules(true)}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {gameState.state === GameStates.waiting && (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
          <div className="card-body">
            <h2 className="card-title">Loading game...</h2>
            <div>Waiting for other players to join</div>
            <img
              alt=""
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFyYWlndHQ3aDhiOTNybDd2MnVta2x0dWU1MTNkc2x4a2V3N2xwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TuZ8v66TzGeYJW23as/giphy.gif"
            />
          </div>
        </div>
      )}

      {gameState.state === GameStates.turn && (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
          <div className="card-body">
            <h2 className="card-title">Your portfolio</h2>
            <button
              className="btn btn-secondary"
              onClick={() => console.log('disclose')}
            >
              Disclose?
            </button>
            {gameState.turn.companies.map((company) => (
              <InvestmentSlider
                key={company}
                name={company}
                maxAmount={gameState.turn.budget}
              />
            ))}
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setGameState({
                    ...gameState,
                    state: GameStates.endOfTurn,
                    rank: {
                      roberto: 15060,
                      vincent: 14512,
                      richard: -12334,
                      loris: 10643,
                      laurence: -123,
                      ena: 23967,
                    },
                  });
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      )}

      {gameState.state === GameStates.endOfTurn && !timeoutIsOut && (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
          <div className="card-body">
            <h2 className="card-title">Your investment has been selected</h2>
            <div>This is the end of your turn. Results will calculate soon</div>
            <img
              alt=""
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Ixbzl0ZXBhbnoxcnY4b2kxd3JhajB0cXhza285azZvZmpyNzB4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MZocLC5dJprPTcrm65/giphy.gif"
            />
          </div>
        </div>
      )}

      {gameState.state === GameStates.endOfTurn && timeoutIsOut && <Rank />}
    </div>
  );
};

export default DiscloseOrBuy;
