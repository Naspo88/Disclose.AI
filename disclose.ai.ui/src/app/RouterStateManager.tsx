import { createContext } from 'react';
import { GlobalContext, GameStates } from './types';
import useStatePoller, { defaultGameStateValues } from './hooks/useStatePoller';
import LoginPage from './LoginPage/LoginPage';
import Rank from './Rank/Rank';
import DiscloseOrBuy from './DiscloseOrBuy/DiscloseOrBuy';

export const GameStateContext = createContext<GlobalContext>({
  gameState: defaultGameStateValues,
  userPlayer: {
    name: 'User Name',
    isAdmin: false,
  },
  setUserPlayer: () => true,
  setGameState: () => true,
});

const RouterStateManager = () => {
  const { gameState, setUserPlayer, userPlayer, setGameState } =
    useStatePoller();

  const ViewShown = () => {
    if (!gameState || gameState.state === GameStates.login) {
      return <LoginPage />;
    }

    return <DiscloseOrBuy />;
  };

  return (
    <GameStateContext.Provider
      value={{ gameState, userPlayer, setUserPlayer, setGameState }}
    >
      <ViewShown />
    </GameStateContext.Provider>
  );
};

export default RouterStateManager;
