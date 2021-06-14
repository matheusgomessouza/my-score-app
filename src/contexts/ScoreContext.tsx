import { createContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ScoreContext = createContext({});

interface ScoreProviderProps {
  children: ReactNode;
  upgradeScore?: () => void;
}

export type DefaultRootState = {
  score: any;
}

export function ScoreProvider({ children, ...rest }: ScoreProviderProps) {
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
        upgradeScore,
        dispatch,
        score
      }}
    >
      { children }
    </ScoreContext.Provider>
  );
}