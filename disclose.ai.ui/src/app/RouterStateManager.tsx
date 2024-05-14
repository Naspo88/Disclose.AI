import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalContext } from './types';
import useStatePoller, { defaultGameStateValues } from './hooks/useStatePoller';
import App from './app';
import LoginPage from './LoginPage/LoginPage';
import Rank from './Rank/Rank';
import DiscloseOrBuy from './DiscloseOrBuy/DiscloseOrBuy';

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
    element: <DiscloseOrBuy />,
  },
  { path: '/game-over', element: <>Game over</> },
]);

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
  return (
    <GameStateContext.Provider value={{ gameState, userPlayer, saveUserPlayer }}>
      <RouterProvider router={router} />
    </GameStateContext.Provider>
  );
};

export default RouterStateManager;
