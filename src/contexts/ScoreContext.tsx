import { createContext, ReactElement, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ScoreContext = createContext({});

interface ScoreProviderProps {
	children: ReactNode;
	update?: () => void;
}

export type DefaultRootState = {
	score: [number] | any;
};

export function ScoreProvider({ children }: ScoreProviderProps): ReactElement {
	const dispatch = useDispatch();
	const score = useSelector(
		(state: DefaultRootState) => state.score.initial_score
	);

	function upgradeScore() {
		const min = Math.ceil(score);
		const max = Math.floor(101);
		dispatch({
			type: 'INCREASE_SCORE',
			nw_score: Math.floor(Math.random() * (max - min) + min),
		});
	}

	return (
		<ScoreContext.Provider
			value={{
				upgradeScore,
				dispatch,
				score,
			}}
		>
			{children}
		</ScoreContext.Provider>
	);
}
