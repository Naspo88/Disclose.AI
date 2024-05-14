import { createContext, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalContext, GameStates } from './types';
import useStatePoller, { defaultGameStateValues } from './hooks/useStatePoller';
import App from './app';
import LoginPage from './LoginPage/LoginPage';
import Rank from './Rank/Rank';
import Main from './Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/rank',
    element: <Rank />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  { path: '/game-over', element: <>Game over</> },
]);

export const GameStateContext = createContext<GlobalContext>({
  gameState: defaultGameStateValues,
  userPlayer: {
    name: 'not-set',
    isAdmin: false,
  },
  saveUserPlayer: () => true,
});

const RouterStateManager = () => {
  const { gameState, saveUserPlayer, userPlayer } = useStatePoller();

  const ViewShown = () => {
    if (!gameState) {
      return <LoginPage />;
    }

    switch (gameState.state) {
      case GameStates.endOfTurn:
      case GameStates.end:
        return <Rank />;
      default:
        return <Main />;
    }
  };

  return (
    <GameStateContext.Provider
      value={{ gameState, userPlayer, saveUserPlayer }}
    >
      {/* this probably will die in favour of the following */}
      <RouterProvider router={router} />
      {/* this probably will be the routing logic */}
      {/* <ViewShown /> */}
    </GameStateContext.Provider>
  );
};

export default RouterStateManager;
