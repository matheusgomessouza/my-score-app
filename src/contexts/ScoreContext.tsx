import { createContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ScoreContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export type DefaultRootState = {
  score: any;
}


export function ScoreProvider({ children, ...rest }: ChallengesProviderProps) {
  const dispatch = useDispatch();
  const score = useSelector((state: DefaultRootState) => state.score.initial_score);

  function upgradeScore() {
    let min = Math.ceil(score);
    const max = Math.floor(101);
    dispatch({ type: 'INCREASE_SCORE', nw_score: Math.floor(Math.random() * (max - min) + min) })
  }

  return (
    <ScoreContext.Provider
      value={{
        upgradeScore
      }}
    >
      { children }
    </ScoreContext.Provider>
  );
}