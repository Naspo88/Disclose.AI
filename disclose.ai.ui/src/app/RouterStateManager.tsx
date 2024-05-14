import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalContext, GameStates } from './types';
import useStatePoller, { defaultGameStateValues } from './hooks/useStatePoller';
import App from './app';
import LoginPage from './LoginPage/LoginPage';
import Rank from './Rank/Rank';
import DiscloseOrBuy from './DiscloseOrBuy/DiscloseOrBuy';

export const GameStateContext = createContext<GlobalContext>({
  gameState: defaultGameStateValues,
  userPlayer: {
    name: 'User Name',
    isAdmin: false,
  },
  saveUserPlayer: () => true,
});

const RouterStateManager = () => {
  const { gameState, saveUserPlayer, userPlayer } = useStatePoller();

  const ViewShown = () => {
    if (!gameState || gameState.state === GameStates.login) {
      return <LoginPage />;
    }

    switch (gameState.state) {
      case GameStates.endOfTurn:
      case GameStates.end:
        return <Rank />;
      default:
        return <DiscloseOrBuy />;
    }
  };

  return (
    <GameStateContext.Provider
      value={{ gameState, userPlayer, saveUserPlayer }}
    >
      <ViewShown />
    </GameStateContext.Provider>
  );
};

export default RouterStateManager;
