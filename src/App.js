
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { Header } from './components/header';
import { Dashboard } from './components/dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './components/variables.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
