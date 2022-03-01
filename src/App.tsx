import { Provider } from 'react-redux';
import store from './store';

import ProfileHeader from './components/ProfileHeader';
import { ScoreProvider } from './contexts/ScoreContext';
import { ReactElement } from 'react';

function App(): ReactElement {
	return (
		<Provider store={store}>
			<ScoreProvider>
				<ProfileHeader />
			</ScoreProvider>
		</Provider>
	);
}

export default App;
