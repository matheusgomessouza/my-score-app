import { Provider } from 'react-redux';
import store from './store';

import ProfileHeader from './components/ProfileHeader';
import { ScoreProvider } from './contexts/ScoreContext';

function App() {
	return (
		<Provider store={store}>
			<ScoreProvider>
				<ProfileHeader />
			</ScoreProvider>
		</Provider>
	);
}

export default App;
