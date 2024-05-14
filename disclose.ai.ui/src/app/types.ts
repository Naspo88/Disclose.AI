export enum GameStates {
  login = 'login',
  waiting = 'waiting',
  turn = 'turn',
  endOfTurn = 'end-of-turn',
  end = 'end',
}

export type UserPlayer = {
  name: string;
  isAdmin: boolean;
};

export type TurnState = {
  turnNumber: number;
  companies: string[];
  budget: number;
  needsToDisclose: boolean;
};

export type RankState = {
  [keyof: string]: number;
};

export interface GlobalState {
  name: string;
  state: GameStates;
  turn: TurnState;
  rank: RankState;
}

export interface GlobalContext {
  gameState: GlobalState;
  userPlayer: UserPlayer;
  saveUserPlayer: (userPlayer: UserPlayer) => void;
}
