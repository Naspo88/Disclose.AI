import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import LoginPage from './LoginPage/LoginPage';
import Rank from './Rank/Rank';

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
  { path: '/game-over', element: <div>Game Over</div> },
]);

const RouterManager = () => {
  return <RouterProvider router={router} />;
};

export default RouterManager;
