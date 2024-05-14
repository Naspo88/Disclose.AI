import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalState } from './types';
import App from './app';
import LoginPage from './LoginPage/LoginPage';
import Rank from './Rank/Rank';
import GameOverPage from './GameOverPage/GameOverPage';

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
  { path: '/game-over', element: <GameOverPage /> },
]);

const defaultValues: GlobalState = {
  name: 'not-set',
  state: 'waiting',
  turn: {
    companies: [],
    budget: 0,
    needsToDisclose: false,
  },
  rank: {},
};

export const GameStateContext = createContext<GlobalState>(defaultValues);

const RouterStateManager = () => {
  return (
    <GameStateContext.Provider value={defaultValues}>
      <RouterProvider router={router} />
    </GameStateContext.Provider>
  );
};

export default RouterStateManager;
