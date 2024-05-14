import { useEffect, useState } from 'react';
import { GlobalState, UserPlayer, GameStates } from '../types';

const useUserNameFromLocalStorage = () => {
  const [userPlayer, setUserPlayer] = useState<UserPlayer>({
    name: '',
    isAdmin: false,
  });

  useEffect(() => {
    const storedValue = localStorage.getItem('userPlayer');
    if (storedValue) {
      setUserPlayer(JSON.parse(storedValue));
    }
  }, []);

  const saveUserPlayer = (userPlayer: UserPlayer) => {
    localStorage.setItem('userPlayer', JSON.stringify(userPlayer));
    setUserPlayer(userPlayer);
  };

  return { userPlayer, saveUserPlayer };
};

export const defaultGameStateValues: GlobalState = {
  name: 'User Name',
  state: GameStates.end,
  turn: {
    companies: [],
    budget: 0,
    needsToDisclose: false,
  },
  rank: {
    roberto : 150,
    loris : -100
  },
};

let timeout: NodeJS.Timeout;
const TIMEOUT = 3000;
const useStatePoller = () => {
  const { userPlayer, saveUserPlayer } = useUserNameFromLocalStorage();
  const [gameState, setGameState] = useState<GlobalState>(
    defaultGameStateValues
  );

  useEffect(() => {
    const getGameState = async ({ name }: UserPlayer) => {
      console.log('getGameState');
      const response = await fetch(
        `https://8kq9kn2ojj.execute-api.eu-west-1.amazonaws.com/api/state?name=${name}`
      );
      const data = await response.json();
      console.log('new state', data);
      setGameState(data);
    };

    if (userPlayer && gameState.state !== GameStates.end) {
      console.log('user player exist', userPlayer);
      console.log('game state =', gameState.state);
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(async () => {
        await getGameState(userPlayer);
      }, TIMEOUT);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [userPlayer]);

  useEffect(() => {
    if (gameState.state === GameStates.end) {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  }, [gameState]);

  return {
    userPlayer,
    gameState,
    saveUserPlayer,
  };
};

export default useStatePoller;
