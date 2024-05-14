import { useEffect, useState } from 'react';
import { GlobalState, UserPlayer } from '../types';

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
  name: 'not-set',
  state: 'waiting',
  turn: {
    companies: [],
    budget: 0,
    needsToDisclose: false,
  },
  rank: {},
};

const useStatePoller = () => {
  const { userPlayer, saveUserPlayer } = useUserNameFromLocalStorage();
  const [gameState, setGameState] = useState<GlobalState>(
    defaultGameStateValues
  );

  useEffect(() => {
    const getGameState = async ({ name }: UserPlayer) => {
      const response = await fetch(
        `https://8kq9kn2ojj.execute-api.eu-west-1.amazonaws.com/api/state?name=${name}`
      );
      const data = await response.json();
      console.log(data);
      setGameState(data);
    };

    if (userPlayer) {
      getGameState(userPlayer);
    }
  }, [userPlayer]);

  return {
    userPlayer,
    gameState,
    saveUserPlayer,
  };
};

export default useStatePoller;
