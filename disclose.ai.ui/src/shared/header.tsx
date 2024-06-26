import { useContext } from 'react';
import { currencyFormatter, getInitials } from '../app/utils/formatter';
import { GameStateContext } from '../app/RouterStateManager';

const Header = () => {
  const { userPlayer, gameState } = useContext(GameStateContext);

  return (
    <header className="bg-base-100 p-4 mb-4">
      <div className="text-center font-bold">
        <a href="/" className="inline-block ">
          <span role="img" aria-label="up chart emoji">
            📈💀
          </span>
          Comply or Die!
        </a>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="avatar placeholder mr-2">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span className="text-xs">{getInitials(userPlayer.name)}</span>
            </div>
          </div>
          <span>Hi {userPlayer.name}</span>
        </div>
        <div>
          <h3 className="font-bold">Your budget</h3>
          <div className="badge">
            {currencyFormatter(gameState.turn.budget)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
