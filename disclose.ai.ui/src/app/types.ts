export type GameStates = 'waiting' | 'turn' | 'end-of-turn' | 'end';

export type TurnState = {
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
