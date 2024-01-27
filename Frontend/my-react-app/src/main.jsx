import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="firstcom">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
