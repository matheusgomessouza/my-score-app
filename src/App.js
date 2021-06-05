import { Provider } from 'react-redux';
import store from './store';

import ProfileHeader  from './components/ProfileHeader'

function App() {
  return (
    <Provider store={store}>
      <ProfileHeader/>
    </Provider>
  );
}

export default App;
