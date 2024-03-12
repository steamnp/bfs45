import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import { store } from './app/store.ts';

import App from './App.tsx'; // Your main application component


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
