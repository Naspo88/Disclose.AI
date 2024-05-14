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

  //   useEffect(() => {
  //     const getGameState = async (url: string) => {
  //       console.log(userName);
  //       //   const response = await fetch(url);
  //       //   const data = await response.json();
  //       //   setGameState(data);
  //     };

  //     if (userName) {
  //       getGameState(userName);
  //     }
  //   }, [userName]);

  return {
    userPlayer,
    gameState,
    saveUserPlayer,
  };
};

export default useStatePoller;
