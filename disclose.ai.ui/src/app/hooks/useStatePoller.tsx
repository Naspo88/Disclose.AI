import { useEffect, useState } from 'react';
import { GlobalState, UserPlayer, GameStates } from '../types';
import { endpoints } from '../endpoints';

const useUserNameFromLocalStorage = () => {
  const [userPlayer, setUserPlayer] = useState<UserPlayer>({
    name: 'Anibe Agamah',
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
  name: '',
  state: GameStates.login,
  turn: {
    turnNumber: 1,
    companies: ['Apple', 'Google', 'Facebook', 'Amazon', 'Microsoft'],
    budget: 10000,
    needsToDisclose: false,
  },
  rank: {},
};

let timeout: NodeJS.Timeout;
const TIMEOUT = 3000;

const pollingCondition = (userPlayer: UserPlayer, state: GameStates) =>
  userPlayer &&
  userPlayer.name &&
  state !== GameStates.end &&
  state !== GameStates.login;

const useStatePoller = () => {
  const { userPlayer, saveUserPlayer } = useUserNameFromLocalStorage();
  const [gameState, setGameState] = useState<GlobalState>(
    defaultGameStateValues
  );

  useEffect(() => {
    const getGameState = async ({ name }: UserPlayer) => {
      console.log('getGameState');
      const response = await fetch(endpoints.gameState(name));
      const data = await response.json();
      console.log('new state', data);
      setGameState(data);
    };

    if (pollingCondition(userPlayer, gameState.state)) {
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
